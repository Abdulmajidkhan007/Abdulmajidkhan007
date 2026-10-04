# learning-center-front (A.L.I.A.)

> O'quv markazi uchun CRM'ning veb-mijozi. Jamoaviy loyiha — men frontend tomonidaman.

**Repo:** https://github.com/nurulloh-coder-dev/learning-center-front · **Holat:** 🚧 Qurilmoqda
**Mening rolim:** collaborator, frontend dasturchi. Backend (Spring) — jamoaning boshqa a'zolarida.

---

## Muammo

O'quv markazida o'quvchi, o'qituvchi, guruh, dars, davomat va to'lov odatda
Excel va Telegram guruhlarida yuradi. A.L.I.A. (Academic Lead & Intelligence
Assistant) shuni bitta tizimga yig'adi; har rol faqat o'ziga kerakli panelni
ko'radi: administrator, o'qituvchi, o'quvchi, super-admin (tashkilot va filiallar).

## Mening hissam

2026-08-13 dan beri, mening nomim bilan 75 ta commit:

- **JSX → TypeScript migratsiyasi** — butun `src/` `strict` TypeScript'ga o'tkazildi.
- **Login** — backendning ikki bosqichli (tashkilot tanlash) oqimiga ko'chirildi,
  ikki xil login xatosi ajratildi.
- **Developer panel** — tariflar va obunalar, tashkilotlar, super-admin yaratish.
- **Super-admin panel** qayta qurildi; filial yaratishda ortiqcha savol olib tashlandi.
- Odamni yaratishdan oldin **telefon bo'yicha qidirish** (dublikat oldini olish).
- O'qituvchining **7 ta KPI** si: real raqamlar va ularning ma'nosi hujjatlashtirildi.
- Davomat ekrani, galereyada rasm ko'rsatish, xato toast'lari, modal portal va
  jadval tuzatishlari.

## Stack

React 19 · React Router 7 · TypeScript 6 (strict) · Vite 8 · Tailwind CSS 4.3 ·
TanStack Query 5 · Recharts 3 · Vitest 4 + Testing Library (70 test fayli) ·
ESLint 10 · Docker + Caddy (Railway'da deploy).

## Arxitektura: asosiy qarorlar

### 1. `app → features → shared`, import faqat pastga

Bo'limlar (`admin`, `attendance`, `payments`, `super-admin`, ...) bir-biridan
import qilmaydi; ikki bo'limga kerak narsa `shared` ga ko'chiriladi.

**Nega:** jamoada bir nechta odam parallel ishlaydi. Bo'limni o'chirish yoki
qayta yozish qolgan kodga tegmasligi kerak.

### 2. Sahifa mantiq saqlamaydi

So'rov `hooks/` da, HTTP `api/` da, ko'rinish `components/` da; `pages/` faqat yig'adi.

**Nega:** `AdminDashboardPage` 974 qatordan ~230 ga tushdi, davomat qoralamasi
mantiqini (`useAttendanceDraft`) DOM'siz test qilish mumkin bo'ldi.

### 3. Server holati — TanStack Query, global store yo'q

Kesh, yuklanish, xato va invalidatsiya bitta joyda.

**Nega:** CRM ma'lumotining deyarli hammasi serverniki. Uni Redux'da qo'lda
nusxalash — eskirgan ma'lumot va qo'shimcha kod.

### 4. Backendsiz demo — bitta HTML fayl

`npm run build:demo` soxta API va soxta ma'lumot bilan bitta mustaqil HTML yasaydi;
demo kodi production bundle'ga tushmaydi.

**Nega:** frontend backenddan oldin yuradi. Ekranlarni buyurtmachi bilan
backend tayyor bo'lishini kutmasdan muhokama qilish mumkin.

### 5. Productionda `/api` ni Caddy uzatadi, `.env` yo'q

**Nega:** frontend va backend bitta origin'dan ko'rinadi — CORS muammosi yo'q,
kalit yoki manzil bundle'ga yozilmaydi.

## Holat

**Ishlaydi:** to'rt rol paneli, guruh/dars/davomat, to'lovlar, sozlamalar
(uz/ru/en, dark/light), developer va super-admin panellari.
**Hali yo'q:** o'quvchining davomat va guruh ekrani backend endpoint'ini kutmoqda;
`/auth/me` da filial ma'lumoti yo'q.

## Havolalar

- Repo: https://github.com/nurulloh-coder-dev/learning-center-front
- Mening fork'im: https://github.com/Abdulmajidkhan007/learning-center-front

---

*Oxirgi yangilanish: 2026-10-04*
