import { neon } from '@neondatabase/serverless';

let schemaInitPromise = null;

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not configured');
  }
  return neon(databaseUrl);
}

export async function ensureSchema(sql) {
  if (!schemaInitPromise) {
    schemaInitPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS quiz_events (
          id BIGSERIAL PRIMARY KEY,
          session_id TEXT,
          event_type TEXT NOT NULL,
          chapter_id TEXT,
          score INTEGER,
          event_data JSONB NOT NULL DEFAULT '{}'::jsonb,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS email_subscribers (
          id BIGSERIAL PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          source TEXT,
          session_id TEXT,
          subscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
    })();
  }

  await schemaInitPromise;
}
