# Suhbat

> O'zbek tilidagi messenjer — veb, desktop (macOS, Windows), Android va iOS uchun bitta hisob:
> shaxsiy chat, guruh, kanal, 1:1 qo'ng'iroq. Telegram'ga bog'liq emas.

**Repo:** https://github.com/Abdulmajidkhan007/suhbat · **Jonli (veb):** https://suhbatweb-production.up.railway.app
**Yuklab olish:** https://github.com/Abdulmajidkhan007/suhbat/releases/latest (v0.6.0, 2026-10-29)
**Holat:** 🚧 Qurilmoqda (beta)

---

## Muammo

O'zbekcha interfeysli, o'z serverimizda ishlaydigan messenjer: tashqi xizmatlarga
(Firebase, R2) imkon qadar bog'liq bo'lmagan holda. Shaxsiy loyiha — to'liq
messenjer arxitekturasini (real vaqt, qo'ng'iroq, push, ko'p platforma) o'zim qurish uchun.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Server | NestJS 11, Prisma 7, PostgreSQL 17, Socket.IO 4.8 |
| Veb / desktop | React 19, Vite 7, TypeScript 5.9, MUI, Tailwind, Redux Toolkit; Electron 44 |
| Mobil | React Native 0.87 (bare CLI, Expo'siz) |
| Qo'ng'iroq | WebRTC, o'z TURN serverimiz (coturn, `infra/turn/`) |
| Infra | Railway (API + veb + Volume), GitHub Actions (CI, release: dmg/exe/apk) |
| Monorepo | npm workspaces + Turborepo; `packages/core` (zod), `packages/client` |

## Arxitektura: asosiy qarorlar

### 1. Firebase'dan voz kechish — NestJS + PostgreSQL + WebSocket
**Nega:** chat, guruh rollari va o'qilganlik holati relatsion ma'lumot; Firebase qoidalarida
murakkab ruxsatlar va keyset pagination qiyin, narx esa o'qishlar soniga bog'liq.

### 2. Bitta mijoz kutubxonasi (`packages/client`) — veb, desktop, mobil uchun
**Nega:** token yangilash (single-flight) va socket qayta ulanishi bir joyda yoziladi;
uch ilovada uch xil xato bo'lmaydi.

### 3. Fayllar va TURN — o'z serverimizda (v0.4.0)
**Nega:** R2/metered.ca kabi xizmatlarsiz ham ishlashi; yuklab olish havolasi faqat chat
a'zosiga va qisqa muddatga beriladi.

### 4. Qo'ng'iroqni tiklash — `call:resume` + ICE restart (v0.6.0)
**Nega:** Wi-Fi ↔ mobil internet almashganda qo'ng'iroq darhol uzilmasin; server 15 soniya
kutadi, mijoz ICE restart qiladi.

## Holat: nima ishlaydi, nima yo'q

**Ishlaydi (avtomatik testlar va vebda):** ro'yxatdan o'tish/kirish (email yoki `@username`),
1:1 chat real vaqtda (yozmoqda, ✓/✓✓, onlayn), guruh (≤200) va kanallar, javob/tahrir/o'chirish,
global qidiruv, fayl va ovozli xabar (veb/desktop), parolni tiklash (email yoki 10 ta tiklash
kodi), yorug'/qorong'i rejim. Relizlar: v0.1.0 → v0.6.0.

**v0.6.0 (2026-10-29, 4c-1, PR #28):** qo'ng'iroq uzilishda 15 soniyagacha kutib tiklanadi
(`call:resume`, ICE restart); veb/desktop'da jiringlash va kutish ovozi; mobilda jiringlash,
tebranish va **karnay/quloqchin** tugmasi. **Qurilmada va haqiqiy tarmoq almashuvida sinalmagan.**

**Hali yo'q:** 4c-2 — qulflangan ekranda jiringlash (CallKit / ConnectionService) va
data-only push; Web Push; mobilda media yuborish; Play Store / App Store; desktop kod imzosi.

**Ma'lum muammolar:** ko'p narsa haqiqiy telefonda va Railway'da to'liq sinalmagan
(push, fonda ulanish, TURN orqali qo'ng'iroq); Railway UDP bermaydi — TURN faqat TCP.

## Havolalar

- Repo: https://github.com/Abdulmajidkhan007/suhbat
- Veb: https://suhbatweb-production.up.railway.app
- O'zgarishlar: repo `CHANGELOG.md`; reja va holat: repo `docs/REJA.md`

---

*Oxirgi yangilanish: 2026-10-29*
