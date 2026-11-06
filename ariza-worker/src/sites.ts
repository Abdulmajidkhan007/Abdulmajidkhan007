// Ruxsat etilgan saytlar: `SITES` (wrangler.toml [vars]) — JSON { origin: nom }.
// Manba nomi FAQAT Origin header'dan olinadi (brauzer uni soxtalashtira olmaydi),
// mijoz yuborgan maydondan emas. Yangi sayt = SITES ga bitta qator.

import { isRecord } from "./common.ts";

export type Sites = ReadonlyMap<string, string>;
export type SitesResult = { ok: true; sites: Sites } | { ok: false; error: string };

const NAME_MAX = 60;

export function parseSites(raw: string | undefined): SitesResult {
  if (!raw?.trim()) return { ok: false, error: "SITES o'zgaruvchisi bo'sh (wrangler.toml [vars])" };
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    return { ok: false, error: `SITES yaroqli JSON emas: ${e instanceof Error ? e.message : String(e)}` };
  }
  if (!isRecord(json)) return { ok: false, error: 'SITES JSON obyekt bo\'lsin: {"https://sayt.uz": "Nom"}' };

  const sites = new Map<string, string>();
  for (const [origin, name] of Object.entries(json)) {
    if (!isOrigin(origin)) {
      return { ok: false, error: `SITES: "${origin}" origin emas (https://domen, oxirida "/" va yo'lsiz)` };
    }
    if (typeof name !== "string" || !name.trim() || name.trim().length > NAME_MAX) {
      return { ok: false, error: `SITES: "${origin}" nomi 1–${NAME_MAX} belgilik satr bo'lsin` };
    }
    sites.set(origin, name.trim());
  }
  if (sites.size === 0) return { ok: false, error: "SITES da kamida bitta sayt bo'lsin" };
  return { ok: true, sites };
}

function isOrigin(value: string): boolean {
  try {
    const url = new URL(value);
    return (url.protocol === "https:" || url.protocol === "http:") && url.origin === value;
  } catch {
    return false;
  }
}

/** Origin ro'yxatda bo'lsa — sayt nomi, aks holda null. */
export function siteName(sites: Sites, origin: string | null): string | null {
  return origin === null ? null : (sites.get(origin) ?? null);
}

/** Referer'dan faqat pathname (ixtiyoriy, uzunligi cheklangan). */
export function refererPath(referer: string | null): string | null {
  if (!referer) return null;
  try {
    return new URL(referer).pathname.slice(0, 100);
  } catch {
    return null;
  }
}
