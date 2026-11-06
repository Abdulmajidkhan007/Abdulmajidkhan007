// Portfolio aloqa formasi (POST /contact). Qoidalar portfolio-3d `src/lib/contactRules.ts` va
// `functions/src/validate.ts` bilan bir xil (portfolio-3d PR #11): telefon MAJBURIY
// (+998 va 9 raqam), email IXTIYORIY (berilsa — format va MX), xabarlar ham bir xil.

import { clean, EMAIL_RE, isRecord, type Parsed, TELEGRAM_RE, withAt } from "./common.ts";

export interface Contact {
  name: string;
  /** Ixtiyoriy; bo'sh satr — kiritilmagan. */
  email: string;
  /** Normallashgan: `+998901234567`. */
  phone: string;
  /** `@username` yoki bo'sh satr. */
  telegram: string;
  message: string;
}

export type ContactField = keyof Contact;
export type ContactResult = Parsed<Contact, ContactField> | { ok: false; bot: true };

const PHONE_UZ = /^\+998\d{9}$/;
export const CONTACT_LIMITS = { name: 100, email: 254, message: 4000, messageMin: 10 } as const;

/** `+998` + 9 raqam; bo'shliq, qavs va defis e'tiborga olinmaydi. */
export function normalizeContactPhone(value: string): string | null {
  const compact = value.replace(/[\s()-]/g, "");
  return PHONE_UZ.test(compact) ? compact : null;
}

export function parseContact(body: unknown): ContactResult {
  if (!isRecord(body)) return { ok: false, error: "So'rov tanasi JSON obyekt bo'lishi kerak" };
  // Honeypot: bot to'ldiradi.
  if (clean(body.botField) || clean(body["bot-field"])) return { ok: false, bot: true };

  const name = clean(body.name);
  const email = clean(body.email);
  const phoneRaw = clean(body.phone);
  const telegramRaw = clean(body.telegram);
  const message = clean(body.message);

  const fail = (error: string, field: ContactField): ContactResult => ({ ok: false, error, field });

  if (!name) return fail("Ism kiritilmagan", "name");
  if (name.length > CONTACT_LIMITS.name) return fail(`Ism ${CONTACT_LIMITS.name} belgidan uzun`, "name");

  if (!phoneRaw) return fail("Telefon kiritilmagan", "phone");
  const phone = normalizeContactPhone(phoneRaw);
  if (!phone) return fail("Telefon +998 va 9 raqamdan iborat bo'lishi kerak", "phone");

  if (email && (email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(email))) {
    return fail("Email formati noto'g'ri", "email");
  }
  if (telegramRaw && !TELEGRAM_RE.test(telegramRaw)) return fail("Telegram username noto'g'ri", "telegram");

  if (!message) return fail("Xabar kiritilmagan", "message");
  if (message.length < CONTACT_LIMITS.messageMin) return fail("Xabar juda qisqa", "message");
  if (message.length > CONTACT_LIMITS.message) return fail(`Xabar ${CONTACT_LIMITS.message} belgidan uzun`, "message");

  return { ok: true, data: { name, email, phone, telegram: withAt(telegramRaw), message } };
}
