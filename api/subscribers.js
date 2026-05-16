import { ensureSchema, getSql } from './_lib/db.js';

const MAX_SOURCE_LENGTH = 80;
const MAX_SESSION_ID_LENGTH = 128;

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

function normalizeEmail(email) {
  const atIndex = email.indexOf('@');
  if (atIndex <= 0 || atIndex !== email.lastIndexOf('@') || atIndex === email.length - 1) {
    return null;
  }

  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1).toLowerCase();
  const validLocal = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(localPart);
  const validDomain = /^([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)(\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/.test(domain);
  const validLocalDots = !localPart.startsWith('.') && !localPart.endsWith('.') && !localPart.includes('..');

  if (!validLocal || !validDomain || !validLocalDots) return null;

  return `${localPart}@${domain}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = readBody(req);
    const email = String(body.email || '').trim();
    const source = body.source ? String(body.source).slice(0, MAX_SOURCE_LENGTH) : 'unknown';
    const sessionId = body.sessionId ? String(body.sessionId).slice(0, MAX_SESSION_ID_LENGTH) : null;

    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) {
      return res.status(400).json({ error: 'A valid email is required' });
    }

    const sql = getSql();
    await ensureSchema(sql);
    await sql`
      INSERT INTO email_subscribers (email, source, session_id, subscribed_at, updated_at)
      VALUES (${normalizedEmail}, ${source}, ${sessionId}, NOW(), NOW())
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
