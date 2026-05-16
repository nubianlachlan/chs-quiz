import { ensureSchema, getSql } from './_lib/db.js';

const MAX_SESSION_ID_LENGTH = 128;
const MAX_CHAPTER_ID_LENGTH = 64;
const MAX_EVENT_TYPE_LENGTH = 64;

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
    const chapterId = body.chapterId ? String(body.chapterId).slice(0, MAX_CHAPTER_ID_LENGTH) : null;
    const score = Number.isFinite(body.score) ? body.score : null;
    const eventData = body.eventData && typeof body.eventData === 'object' ? body.eventData : {};

    if (!eventType) {
      return res.status(400).json({ error: 'eventType is required' });
    }

    const sql = getSql();
    await ensureSchema(sql);
    await sql`
      INSERT INTO quiz_events (session_id, event_type, chapter_id, score, event_data)
      VALUES (${sessionId}, ${eventType.slice(0, MAX_EVENT_TYPE_LENGTH)}, ${chapterId}, ${score}, ${JSON.stringify(eventData)})
    `;

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('events handler error:', error);
    return res.status(500).json({ error: 'Failed to store event' });
  }
}
