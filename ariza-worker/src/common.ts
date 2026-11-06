// Barcha endpoint'lar uchun umumiy tekshiruv yordamchilari.

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Telegram qoidasi: harf bilan boshlanadi, 5–32 belgi (harf, raqam, _).
export const TELEGRAM_RE = /^@?[A-Za-z][A-Za-z0-9_]{4,31}$/;

export type Parsed<T, F extends string> =
  | { ok: true; data: T }
  | { ok: false; error: string; field?: F };

/** Nazorat belgilarini olib tashlaydi, chetlarini qirqadi; satr bo'lmasa "". */
export function clean(value: unknown, max = Number.POSITIVE_INFINITY): string {
  // eslint-disable-next-line no-control-regex
  const s = typeof value === "string" ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "") : "";
  return s.trim().slice(0, max);
}

/** `abc_def` / `@abc_def` → `@abc_def`; bo'sh bo'lsa "". */
export function withAt(username: string): string {
  return username ? `@${username.replace(/^@/, "")}` : "";
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
