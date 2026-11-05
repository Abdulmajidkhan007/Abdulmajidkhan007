// Ariza formasi tekshiruvi. Brauzerdagi tekshiruv (site/index.html) bilan bir xil qoidalar:
// xabarlar ham bir xil, chunki worker rad etsa foydalanuvchi shuni maydon ostida ko'radi.

export interface Ariza {
  ism: string;
  /** Saqlashda normalizatsiya qilingan: +998XXXXXXXXX */
  tel: string;
  email: string;
  /** `@username` yoki bo'sh satr. */
  telegram: string;
  /** Tanlangan xizmat(lar) matni. */
  paket: string;
  /** Kalkulyator jami (matn, masalan "≈ 12,5 mln so'm"); bo'sh bo'lishi mumkin. */
  jami: string;
  /** Muammo / xabar matni. */
  tavsif: string;
  /** Honeypot: odam to'ldirmaydi, bot to'ldiradi. */
  sayt: string;
}

export type ArizaField = "ism" | "tel" | "email" | "telegram" | "tavsif" | "paket";
export type ParseResult =
  | { ok: true; data: Ariza }
  | { ok: false; error: string; field?: ArizaField };

export const LIMITS = { ism: 60, email: 254, paket: 300, jami: 60, tavsif: 800, tavsifMin: 5 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Telegram qoidasi: harf bilan boshlanadi, 5–32 belgi (harf, raqam, _).
const TELEGRAM_RE = /^@?[A-Za-z][A-Za-z0-9_]{4,31}$/;

function str(value: unknown, max: number): string {
  // eslint-disable-next-line no-control-regex
  const s = typeof value === "string" ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "") : "";
  return s.trim().slice(0, max);
}

/** "+998 90 123-45-67", "998901234567" → "+998901234567"; noto'g'ri bo'lsa null. */
export function normalizePhone(raw: string): string | null {
  if (/[^\d\s()+-]/.test(raw)) return null;
  const digits = raw.replace(/\D/g, "");
  if (!/^998\d{9}$/.test(digits)) return null;
  // "+" faqat boshida bo'lishi mumkin.
  if (raw.includes("+") && !raw.trimStart().startsWith("+")) return null;
  return `+${digits}`;
}

export function parseAriza(body: unknown): ParseResult {
  if (typeof body !== "object" || body === null) return { ok: false, error: "invalid" };
  const b = body as Record<string, unknown>;
  const ism = str(b.ism, LIMITS.ism + 1);
  const telRaw = str(b.tel, 40);
  const email = str(b.email, LIMITS.email + 1);
  const telegramRaw = str(b.telegram, 60);
  const tavsif = str(b.tavsif, LIMITS.tavsif + 1);

  if (!ism) return { ok: false, error: "Ismni kiriting", field: "ism" };
  if (ism.length > LIMITS.ism) return { ok: false, error: `Ism ${LIMITS.ism} belgidan uzun`, field: "ism" };
  if (!telRaw) return { ok: false, error: "Telefon raqamini kiriting", field: "tel" };
  const tel = normalizePhone(telRaw);
  if (!tel) return { ok: false, error: "Telefon +998 va 9 raqamdan iborat bo'lsin", field: "tel" };
  if (email) {
    if (email.length > LIMITS.email || !EMAIL_RE.test(email)) return { ok: false, error: "Email manzil noto'g'ri", field: "email" };
  }
  if (telegramRaw && !TELEGRAM_RE.test(telegramRaw)) {
    return { ok: false, error: "Telegram username noto'g'ri (@ bilan, 5–32 belgi: harf, raqam, _)", field: "telegram" };
  }
  const telegram = telegramRaw ? `@${telegramRaw.replace(/^@/, "")}` : "";
  if (!tavsif) return { ok: false, error: "Xabarni kiriting", field: "tavsif" };
  if (tavsif.length < LIMITS.tavsifMin) return { ok: false, error: `Xabar kamida ${LIMITS.tavsifMin} belgi bo'lsin`, field: "tavsif" };
  if (tavsif.length > LIMITS.tavsif) return { ok: false, error: `Xabar ${LIMITS.tavsif} belgidan uzun`, field: "tavsif" };

  return {
    ok: true,
    data: {
      ism,
      tel,
      email,
      telegram,
      paket: str(b.paket, LIMITS.paket),
      jami: str(b.jami, LIMITS.jami),
      tavsif,
      sayt: str(b.sayt, 200),
    },
  };
}

export type FetchLike = (url: string, init?: { headers?: Record<string, string> }) => Promise<{ ok: boolean; json(): Promise<unknown> }>;

/**
 * Domenda MX yozuvi bormi (DNS-over-HTTPS, cloudflare-dns.com).
 * DNS xizmatining o'zi javob bermasa (tarmoq xatosi) — true: haqiqiy email'ni
 * DNS uzilishi uchun rad etmaymiz.
 */
export async function hasMx(domain: string, doFetch: FetchLike): Promise<boolean> {
  try {
    const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`;
    const res = await doFetch(url, { headers: { Accept: "application/dns-json" } });
    if (!res.ok) return true;
    const data = (await res.json()) as { Status?: number; Answer?: Array<{ type: number }> };
    if (data.Status === 2) return true; // SERVFAIL — noaniq
    return Array.isArray(data.Answer) && data.Answer.some((r) => r.type === 15);
  } catch {
    return true;
  }
}

export function emailDomain(email: string): string {
  return email.slice(email.lastIndexOf("@") + 1).toLowerCase();
}
