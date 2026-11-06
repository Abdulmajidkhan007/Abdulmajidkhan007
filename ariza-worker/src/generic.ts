// Umumiy endpoint (POST /ariza) — boshqa saytlar uchun.
// Majburiy: ism, tel. Ixtiyoriy: email, telegram, xabar. Honeypot: `sayt`.

import { clean, EMAIL_RE, isRecord, type Parsed, TELEGRAM_RE, withAt } from "./common.ts";
import { normalizePhone } from "./validate.ts";

export interface GenericAriza {
  ism: string;
  /** Normallashgan: +998XXXXXXXXX */
  tel: string;
  email: string;
  telegram: string;
  xabar: string;
}

export type GenericField = keyof GenericAriza;
export type GenericResult = Parsed<GenericAriza, GenericField> | { ok: false; bot: true };

export const GENERIC_LIMITS = { ism: 60, email: 254, xabar: 1000 } as const;

export function parseGeneric(body: unknown): GenericResult {
  if (!isRecord(body)) return { ok: false, error: "invalid" };
  if (clean(body.sayt)) return { ok: false, bot: true };

  const ism = clean(body.ism);
  const telRaw = clean(body.tel, 40);
  const email = clean(body.email);
  const telegramRaw = clean(body.telegram, 60);
  const xabar = clean(body.xabar);

  const fail = (error: string, field: GenericField): GenericResult => ({ ok: false, error, field });

  if (!ism) return fail("Ismni kiriting", "ism");
  if (ism.length > GENERIC_LIMITS.ism) return fail(`Ism ${GENERIC_LIMITS.ism} belgidan uzun`, "ism");
  if (!telRaw) return fail("Telefon raqamini kiriting", "tel");
  const tel = normalizePhone(telRaw);
  if (!tel) return fail("Telefon +998 va 9 raqamdan iborat bo'lsin", "tel");
  if (email && (email.length > GENERIC_LIMITS.email || !EMAIL_RE.test(email))) return fail("Email manzil noto'g'ri", "email");
  if (telegramRaw && !TELEGRAM_RE.test(telegramRaw)) return fail("Telegram username noto'g'ri", "telegram");
  if (xabar.length > GENERIC_LIMITS.xabar) return fail(`Xabar ${GENERIC_LIMITS.xabar} belgidan uzun`, "xabar");

  return { ok: true, data: { ism, tel, email, telegram: withAt(telegramRaw), xabar } };
}
