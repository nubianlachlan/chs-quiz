import { ensureSchema, getSql } from './_lib/db.js';

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

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = readBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const source = body.source ? String(body.source).slice(0, 80) : 'unknown';
    const sessionId = body.sessionId ? String(body.sessionId).slice(0, 128) : null;

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'A valid email is required' });
    }

    const sql = getSql();
    await ensureSchema(sql);
    await sql`
      INSERT INTO email_subscribers (email, source, session_id, subscribed_at, updated_at)
      VALUES (${email}, ${source}, ${sessionId}, NOW(), NOW())
      ON CONFLICT (email)
      DO UPDATE SET
        source = EXCLUDED.source,
        session_id = EXCLUDED.session_id,
        updated_at = NOW()
    `;

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('subscribers handler error:', error);
    return res.status(500).json({ error: 'Failed to store subscriber' });
  }
}
