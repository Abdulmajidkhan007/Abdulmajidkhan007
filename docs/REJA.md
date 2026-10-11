# Repolar xaritasi va tugatish rejasi

> Tuzilgan: 2026-10-08. Har repo koddan tekshirildi (oxirgi commit, fayllar,
> README, `docs/`). Maqsad: **yangi loyiha emas — boshlanganlarni tugatish.**
> Har band boshlanganda unga alohida tuzatish prompti yoziladi.

---

## 1. Hamma repolar (20 ta)

| Repo | Ochiq/yopiq | Nima | Oxirgi ish | Holat | Qaror |
|---|---|---|---|---|---|
| **atoyo-e-commerce** | public | Santexnika do'koni: sayt + Android 1.5.2 + desktop + TV + botlar | 2026-10-04 | ✅ Ishlayapti (atoyo.uz) | Qo'llab-quvvatlash |
| **Organick_org** | public | Organik do'kon, Firebase | 2026-09-29 | ✅ Jonli | Tayyor |
| **telegram-bots** | public | 13 ta bot monorepo, CI | 2026-10-08 | ✅ Ishlayapti | Davom (hosting + hr-bot) |
| **Abdulmajidkhan007** | public | Profil README + xizmatlar sayti | 2026-10-08 | ✅ | Yuritiladi |
| **portfolio-3d** | private | 3D portfolio, Firebase Hosting + Functions | 2026-10-09 | ✅ jonli (forma Blaze'ni kutadi) | Tayyor |
| **rn-r-e-commerce** | public | KidsWear: veb + Android, Payme/Click | 2026-10-09 | 🚧 veb jonli: kids-wear-007.web.app, APK Releases'da | 1-guruh tayyor (veb + mobil); keyingisi 2-guruh |
| **lumina** | public | Instagram uslubidagi RN ilova (bare); veb jonli: lumina-007app.web.app | 2026-07-27 | 🚧 real foydalanuvchilar bor | **1-navbat (parallel)**: tugatish |
| **learning-datacenter-tc-project** | private | On-premise o'quv markaz CRM (NestJS) | 2026-08-12 | 🚧 Faza 1 boshlangan | Muzlatish (o'xshash ish: learning-center-front) |
| **go-uz** | private | Vroom super-app monorepo | 2026-07-12 | 🚧 | Muzlatish |
| **web-3d** | private | NEBULA, WebGL fon + Higgsfield | 2026-08-01 | 🚧 3 commit | Muzlatish |
| **ios-asistent** | private | Salom AI, Expo | 2026-05-17 | 🚧 7 commit | Muzlatish |
| **mythos-uzbek-ai** | private | Noldan Transformer, Termux | 2026-09-15 | tajriba | Muzlatish |
| **DevCraft-AI** | private | Faqat arxitektura (1 commit) | 2026-08-24 | ❄️ | Muzlatish |
| **suhbat** (avval chatapp) | private | Telegram'dek mustaqil messenjer; hozir CRA + Firebase veb | 2026-10-11 | 🚧 reja | Monorepo: NestJS + PostgreSQL + WebSocket, veb/desktop/mobil (RN CLI) |
| **uzbek-tg** (avval chat-app) | private | Telegram mijozi (ghost mode); hozir Expo UI, mock ma'lumot | 2026-10-11 | 🚧 reja | RN CLI + TDLib |
| **social-app** | private | Lumina'ning Expo prototipi (mock ma'lumot) | 2026-06-01 | o'quv | **O'chirish** — yagona foydali qismi (Welcome ekrani) 2026-10-09 da Lumina'ga ko'chirildi |
| **bank** | private | o'quv | 2026-05-20 | o'quv | Arxivlash |
| **taxi** | private | o'quv | 2026-05-19 | o'quv | Arxivlash |
| **calculator** | private | o'quv | 2026-05-21 | o'quv | Arxivlash |
| **portfolio-builder** | private | Faqat README (1 fayl) | 2026-05-03 | bo'sh | O'chirish yoki arxivlash |

"Arxivlash" — GitHub'da **Settings → Archive this repository**: kod saqlanadi,
faqat o'qish uchun. O'chirish emas.

---

## 2. Default branch

`main` hamma repoda bor va eng so'nggi kodni o'z ichiga oladi (2026-10-08 da
lumina, rn-r-e-commerce, chat-app'ning `main` i yangilandi). Quyidagilarda
**default hali `main` emas** — egasi Settings → Branches → Default branch da
almashtiradi:

portfolio-3d · rn-r-e-commerce · lumina · go-uz · learning-datacenter-tc-project ·
web-3d · ios-asistent · mythos-uzbek-ai · DevCraft-AI · chatapp · chat-app ·
bank · taxi · calculator

**Organick_org — `master` qoladi:** GitHub Actions deploy aynan `master` ga
push'da ishlaydi. Almashtirilsa, deploy workflow'ini ham o'zgartirish kerak.

---

## 3. Tugatish navbati (egasi tasdiqlagan, 2026-10-11)

> **Yangi sessiya shu bo'limdan boshlaydi.** Har loyiha — alohida sessiya,
> o'sha repoda; repo ichidagi `CLAUDE.md` + `docs/REJA.md` (yoki
> `docs/LOYIHA-HAQIDA.md`) holatni saqlaydi. Bu suhbat tarixi kerak emas.

### A. Hozirgi 9 ta loyiha — avval shular tugaydi

| # | Repo | Holat (2026-10-11) | Keyingi qadam |
|---|---|---|---|
| 1 | **rn-r-e-commerce** (KidsWear) | Veb jonli (kids-wear-007.web.app), 1-guruh funksiyalar veb+mobil; admin = santexnika.atoyo@gmail.com (har deploy'da, faqat tasdiqlangan email); yetkazish narxlari boshlang'ich qiymat bilan yozildi | **APK ochilmayapti** (v1.0.5 da ham). v1.0.7 (apk-7) da crash ekrani bor → egasi xato matnini yuboradi → shu xato tuzatiladi. Keyin 2-guruh (repo `docs/REJA.md`) |
| 2 | **lumina** | Veb + APK (apk-5) yangilandi: uz/en/ru, video→Reels, aloqa formasi→admin Messages, landing'da haqiqiy ilova ko'rinishi, Admin→Landing'dan skrinshot (Firestore), imzo SHA-1 Firebase'ga | Egasi sinaydi: ilovada Google bilan kirish, skrinshot yuklash. CI'dagi SA Storage qoidalari/indekslarni deploy qila olmaydi (FIREBASE_TOKEN yoki "Firebase Rules Admin" roli kerak) |
| 3 | **telegram-bots** | 13 bot, CI | **Bitta sessiyada 3 ish:** botlarni doimiy serverga, hr-bot MVP, bot-factory rejasi — prompt pastda (C) |
| 4 | **atoyo-e-commerce** | ✅ jonli (atoyo.uz) | Qo'llab-quvvatlash: repo `docs/AUDIT-ISHLARI.md` |
| 5 | **Organick_org** | ✅ jonli | Tayyor; faqat xato chiqsa |
| 6 | **Abdulmajidkhan007** (profil) | ✅ | Har loyiha o'zgarganda `docs/<repo>.md` + sana |
| 7 | **portfolio-3d** | ✅ jonli | Aloqa formasi Blaze'ni kutadi (billing) |
| 8 | **suhbat** (avval chatapp) | Reja tayyor: monorepo, NestJS + PostgreSQL + WebSocket, veb/desktop/RN CLI | Alohida sessiya: repo `docs/REJA.md` → "Keyingi sessiya uchun" |
| 9 | **uzbek-tg** (avval chat-app) | Reja tayyor: RN CLI + TDLib, ghost mode; `applicationId` = `org.uzbektg.app` | Alohida sessiya: repo `docs/REJA.md` → "Keyingi sessiya uchun"; `TG_API_ID`/`TG_API_HASH` faqat GitHub secret |

### B. Keyin — shu tartibda (9 tasi tugagach)
1. **learning-datacenter-tc-project** — CRM, Faza 1 (guruhlar, jadval, davomat)
2. **go-uz** — bitta ilovani MVP'gacha
3. **DevCraft-AI** — hozir faqat arxitektura hujjati
4. **mythos-uzbek-ai**
5. **web-3d**
6. **ios-asistent**

Har biri boshlanishidan oldin `suhbat`/`uzbek-tg` dagi kabi reja hujjati yoziladi.

### C. telegram-bots — bitta sessiya uchun prompt
Repo: `telegram-bots`. Yuboriladigan matn:

> CLAUDE.md, docs/REJA.md, docs/HR-BOT-PROMPT.md va docs/BOT-FACTORY-PROMPT.md
> ni o'qi. Shu sessiyada uchta ishni tartib bilan tugat:
> 1) 2–3 ommaviy botni (save-video-downloader-bot, kino-bot, anonim-bot)
>    doimiy serverga chiqarish: Railway (yoki men tanlagan VPS) uchun konfig,
>    kino-bot uchun Volume (`DATA_DIR=/data`), har bot uchun qisqa deploy
>    qo'llanmasi — men telefondan bajaraman. Tokenlar faqat platforma
>    Variables'ida, repoda yo'q.
> 2) hr-bot MVP — HR-BOT-PROMPT.md dagi fazalar bo'yicha, testlar bilan.
> 3) bot-factory — BOT-FACTORY-PROMPT.md bo'yicha reja va skelet (alohida repo
>    kerak bo'lsa, avval menga ayt).
> Har bosqichdan keyin `npm test` va `npm run scan`, commit + push.

### Kod emas — egasi keyinroq qiladi
- bank, taxi, calculator — private, arxivlash keyin.
- portfolio-builder — bo'sh (0 KB, faqat README) → o'chirish yoki arxivlash.

---

## 4. Egasi qiladigan ishlar (kod emas)

- [ ] KidsWear APK v1.0.7 ni o'rnatish; yopilsa "Nusxa olish" → matnni yuborish
- [ ] KidsWear: Admin → Yetkazish narxlarini tekshirish (hozir boshlang'ich qiymat)
- [ ] Lumina: APK'da Google bilan kirishni sinash; Admin → Landing'ga 5 ta skrinshot
- [ ] GitHub: `chat-app` → `uzbek-tg` nomi; ikkala repoda default branch → `main`
      ("Could not change default branch" chiqsa — sahifani yangilash yoki Desktop site)
- [x] chatapp → `suhbat` nomi (2026-10-11)
- [ ] 14 ta repoda default branch → `main` (2-bo'lim)
- [ ] Billing: keraksiz loyihadan uzish yoki limit so'rash → portfolio formasi,
      KidsWear to'lov/push, Lumina Storage qoidalari
- [ ] Lumina CI: `FIREBASE_TOKEN` secret yoki SA'ga "Firebase Rules Admin" roli
- [ ] atoyo: ilova 1.5.2 ni e'lon qilish
- [ ] countlist'dan oqib ketgan eski bot tokenini BotFather'da bekor qilish
      (agar hali qilinmagan bo'lsa)
- [x] social-app o'chirildi; rezyume yangilandi (2026-10-09)

---

*Oxirgi yangilanish: 2026-10-11*
