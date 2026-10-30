# Maktab / o'quv markazi CRM (learning-datacenter-tc-project)

> Maktab va o'quv markazlari uchun **on-premise** CRM: har mijozning o'z serverida, uz/ru/en,
> mijoz brendi bilan. Biznes modeli — integratsiya va texnik xizmat (SLA), obuna emas.

**Repo:** yopiq (private) · **Jonli:** yo'q · **Holat:** 🚧 Qurilmoqda

---

## Muammo

O'quv markazlari guruh, jadval, davomat va to'lovni Excel/daftar bilan yuritadi; bulutli CRM'ga
bolalar ma'lumotini berishni istamaydi. Yechim — mijoz serverida ishlaydigan, ma'lumot tashqariga
chiqmaydigan tizim.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Backend | NestJS 11, Prisma 7, PostgreSQL 16, Redis/BullMQ, MinIO (S3) |
| Frontend | Next.js 16 (App Router), Tailwind v4, next-intl 4 |
| Umumiy | Turborepo + pnpm, Zod 4 (`packages/shared` — yagona sxema manbai) |
| Infra | Docker Compose + Caddy, `scripts/update.sh` (zaxira → build → migratsiya → seed) |

## Arxitektura: asosiy qarorlar

### 1. Firebase emas — on-premise
**Nega:** bolalar ma'lumoti mijoz serveridan chiqmasligi — sotuvdagi asosiy va'da.

### 2. Har so'rov `prisma.scoped` orqali
**Nega:** `organizationId` va soft delete filtrini dasturchi unutishi mumkin, kengaytma unutmaydi;
16 ta e2e test bilan himoyalangan.

### 3. Ruxsat tekshiriladi, rol emas
**Nega:** mijoz admin panelda yangi rol yaratsa, deploysiz ishlashi kerak.

### 4. Pul — hech qachon `Float`
**Nega:** `NUMERIC(14,2)`, simda string, arifmetika butun sonlarda; `"1.005"` kabi qiymatda tiyin
yo'qolmasligi testlangan.

## Holat: nima ishlaydi, nima yo'q

**Bor (kod + lokal testlar):** 9 API modul (auth, tashkilot, filial/xona, o'quvchi, ota-ona, xodim,
kurs, guruh, enrollment), veb (login, dashboard, o'quvchilar). **2026-10-29 — Faza 0:** ESLint,
testlar (shared 54, api 10, e2e 16), toza klonda build, CI workflow (PR #2).
**2026-10-29 — Faza 1 (PR #3):** haftalik dars jadvali (xona va o'qituvchi to'qnashuvi rad etiladi),
slotlardan darslar yaratish (qayta chaqirsa dublikat yo'q), dars bekor qilish/ko'chirish, davomat
(keldi/kelmadi/kechikdi/sababli, audit'ga yoziladi), vebda guruh jadvali, «Bugungi darslar» va davomat
varag'i (uz/ru/en). Testlar: shared 73, api 10, e2e 36 (PostgreSQL 16); vebda Playwright bilan 11 qadamli
oqim (ishchi sessiyada). Haqiqiy foydalanuvchi va mijoz serverida sinalmagan.
**Hali yo'q:** baholar (Faza 2), moliya, maosh, ota-onalar portali, Telegram bot; birorta mijozga o'rnatilmagan;
GitHub CI billing sababli ishlamaydi (tekshiruv lokal).

## Havolalar

- Repo: yopiq; reja — repo `docs/REJA.md`, qoidalar — `CLAUDE.md`

---

*Oxirgi yangilanish: 2026-10-29*
