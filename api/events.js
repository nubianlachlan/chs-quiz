import { ensureSchema, getSql } from './_lib/db.js';

const MAX_SESSION_ID_LENGTH = 128;
const MAX_CHAPTER_ID_LENGTH = 64;
const MAX_EVENT_TYPE_LENGTH = 64;
const MAX_GAME_NAME_LENGTH = 128;

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = readBody(req);
    const eventType = String(body.eventType || '').trim();
    const sessionId = body.sessionId ? String(body.sessionId).slice(0, MAX_SESSION_ID_LENGTH) : null;
    const gameName = body.gameName ? String(body.gameName).slice(0, MAX_GAME_NAME_LENGTH) : null;
    const chapterId = body.chapterId ? String(body.chapterId).slice(0, MAX_CHAPTER_ID_LENGTH) : null;
    const score = Number.isFinite(body.score) ? body.score : null;
    const eventData = body.eventData && typeof body.eventData === 'object' ? body.eventData : {};

    // Geo-location from Vercel edge headers (populated automatically on Vercel deployments)
    const country  = req.headers['x-vercel-ip-country']      || null;
    const region   = req.headers['x-vercel-ip-country-region'] || null;
    const city     = req.headers['x-vercel-ip-city']
      ? decodeURIComponent(req.headers['x-vercel-ip-city'])
      : null;
    const latitude  = req.headers['x-vercel-ip-latitude']  || null;
    const longitude = req.headers['x-vercel-ip-longitude'] || null;
    const timezone  = req.headers['x-vercel-ip-timezone']  || null;
    const location  = (country || city || region)
      ? { country, region, city, latitude, longitude, timezone }
      : null;

    if (!eventType) {
      return res.status(400).json({ error: 'eventType is required' });
    }
    if (!sessionId) {
      return res.status(400).json({ error: 'sessionId is required' });
    }
    if (!gameName) {
      return res.status(400).json({ error: 'gameName is required' });
    }

    const sql = getSql();
    await ensureSchema(sql);
    await sql`
      INSERT INTO quiz_events (session_id, game_name, event_type, chapter_id, score, location, event_data)
      VALUES (${sessionId}, ${gameName}, ${eventType.slice(0, MAX_EVENT_TYPE_LENGTH)}, ${chapterId}, ${score}, ${location ? JSON.stringify(location) : null}, ${JSON.stringify(eventData)})
      ON CONFLICT (session_id, game_name)
      DO UPDATE SET
        event_type = EXCLUDED.event_type,
        chapter_id = EXCLUDED.chapter_id,
        score = EXCLUDED.score,
        location = EXCLUDED.location,
        event_data = EXCLUDED.event_data,
        updated_at = NOW()
      -- Ignore stale out-of-order writes; keep only same/newer chapter progress.
      WHERE
        COALESCE(
          CASE
            WHEN (EXCLUDED.event_data->>'chapterIndex') ~ '^-?[0-9]+$'
              THEN (EXCLUDED.event_data->>'chapterIndex')::INT
          END,
          -1
        ) >= COALESCE(
          CASE
            WHEN (quiz_events.event_data->>'chapterIndex') ~ '^-?[0-9]+$'
              THEN (quiz_events.event_data->>'chapterIndex')::INT
          END,
          -1
        )
    `;

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('events handler error:', error);
    return res.status(500).json({ error: 'Failed to store event' });
  }
}
