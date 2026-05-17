const DEFAULT_BODY_LIMIT_BYTES = 16 * 1024;

function headerValue(value) {
  if (Array.isArray(value)) return value[0] || '';
  return typeof value === 'string' ? value : '';
}

function parsePositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function cleanOrigin(origin) {
  const value = String(origin || '').trim();
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function allowedOriginsSet() {
  const csv = process.env.ALLOWED_ORIGINS || '';
  const values = csv
    .split(',')
    .map((entry) => cleanOrigin(entry))
    .filter(Boolean);
  return new Set(values);
}

function requestOrigin(req) {
  return cleanOrigin(headerValue(req.headers.origin));
}

function impliedOrigin(req) {
  const host = headerValue(req.headers['x-forwarded-host']) || headerValue(req.headers.host);
  if (!host) return '';
  const protocol = headerValue(req.headers['x-forwarded-proto']) || 'https';
  return cleanOrigin(`${protocol}://${host}`);
}

export function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Cache-Control', 'no-store');
}

export function isAllowedOrigin(req) {
  const origin = requestOrigin(req);
  if (!origin) return true;

  const allowlist = allowedOriginsSet();
  if (allowlist.size > 0) {
    return allowlist.has(origin);
  }

  return origin === impliedOrigin(req);
}

export function isJsonContentType(req) {
  const contentType = headerValue(req.headers['content-type']).toLowerCase();
  return contentType.includes('application/json');
}

export function hasAcceptableBodySize(req, defaultLimitBytes = DEFAULT_BODY_LIMIT_BYTES) {
  const configured = parsePositiveInt(process.env.API_BODY_LIMIT_BYTES, defaultLimitBytes);
  const contentLength = parsePositiveInt(headerValue(req.headers['content-length']), 0);
  if (!contentLength) return true;
  return contentLength <= configured;
}

export function getClientIp(req) {
  const forwardedFor = headerValue(req.headers['x-forwarded-for']);
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(',').map((item) => item.trim()).filter(Boolean);
    if (firstIp) return firstIp;
  }
  return headerValue(req.headers['x-real-ip']) || 'unknown';
}

function getRateLimitStore() {
  if (!globalThis.__apiRateLimitStore) {
    globalThis.__apiRateLimitStore = new Map();
  }
  return globalThis.__apiRateLimitStore;
}

function purgeExpiredEntries(store, now) {
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

export function checkRateLimit({ key, limit, windowMs }) {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 1;
  const safeWindowMs = Number.isFinite(windowMs) && windowMs > 0 ? Math.floor(windowMs) : 60_000;
  const now = Date.now();
  const store = getRateLimitStore();

  if (!globalThis.__apiRateLimitLastPurgeAt || (now - globalThis.__apiRateLimitLastPurgeAt) > 10_000) {
    purgeExpiredEntries(store, now);
    globalThis.__apiRateLimitLastPurgeAt = now;
  }

  const current = store.get(key);
  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + safeWindowMs });
    return { allowed: true, remaining: safeLimit - 1 };
  }

  if (current.count >= safeLimit) {
    return { allowed: false, remaining: 0 };
  }

  current.count += 1;
  store.set(key, current);
  return { allowed: true, remaining: Math.max(0, safeLimit - current.count) };
}
