// IP bo'yicha rate limit (Workers KV hisoblagich, qat'iy 1 soatlik oyna).
// Origin header'ni skript soxtalashtira oladi, shuning uchun ariza endpoint'lari IP bilan ham cheklanadi.
// KV binding yo'q muhitda (lokal/test) cheklov o'chiq — worker yiqilmaydi.

export interface RateLimitKV {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export const RATE_LIMIT = 5;
export const WINDOW_SECONDS = 3600;

export type RateLimitResult = { allowed: true } | { allowed: false; retryAfter: number };

export async function checkRateLimit(
  kv: RateLimitKV | undefined,
  ip: string | null,
  nowMs: number = Date.now(),
): Promise<RateLimitResult> {
  if (!kv || !ip) return { allowed: true };
  const nowSec = Math.floor(nowMs / 1000);
  const bucket = Math.floor(nowSec / WINDOW_SECONDS);
  const key = `rl:${ip}:${bucket}`;
  const count = Number(await kv.get(key)) || 0;
  if (count >= RATE_LIMIT) return { allowed: false, retryAfter: (bucket + 1) * WINDOW_SECONDS - nowSec };
  // KV atomik emas: bir vaqtdagi so'rovlar biroz oshib ketishi mumkin — spamga qarshi yetarli.
  await kv.put(key, String(count + 1), { expirationTtl: WINDOW_SECONDS + 60 });
  return { allowed: true };
}
