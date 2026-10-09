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
| **rn-r-e-commerce** | public | KidsWear: veb + Android, Payme/Click | 2026-07-28 | 🚧 Phase 10, jonli yo'q | **1-navbat** |
| **lumina** | public | Instagram uslubidagi RN ilova (bare); veb jonli: lumina-007app.web.app | 2026-07-27 | 🚧 real foydalanuvchilar bor | **1-navbat (parallel)**: tugatish |
| **learning-datacenter-tc-project** | private | On-premise o'quv markaz CRM (NestJS) | 2026-08-12 | 🚧 Faza 1 boshlangan | Muzlatish (o'xshash ish: learning-center-front) |
| **go-uz** | private | Vroom super-app monorepo | 2026-07-12 | 🚧 | Muzlatish |
| **web-3d** | private | NEBULA, WebGL fon + Higgsfield | 2026-08-01 | 🚧 3 commit | Muzlatish |
| **ios-asistent** | private | Salom AI, Expo | 2026-05-17 | 🚧 7 commit | Muzlatish |
| **mythos-uzbek-ai** | private | Noldan Transformer, Termux | 2026-09-15 | tajriba | Muzlatish |
| **DevCraft-AI** | private | Faqat arxitektura (1 commit) | 2026-08-24 | ❄️ | Muzlatish |
| **chatapp** | private | CRA chat (o'quv) | 2026-05-19 | o'quv | Arxivlash |
| **chat-app** | private | RN messenger (o'quv) | 2026-05-31 | o'quv | Arxivlash |
| **social-app** | private | o'quv | 2026-06-01 | o'quv | Arxivlash |
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

## 3. Tugatish navbati

### ✅ portfolio-3d — tugadi (2026-10-09)
- Jonli: https://abdulmajidkhan-portfolio.web.app — `main` ga push → GitHub
  Actions → Firebase. Hozir `FIREBASE_PLAN=spark` (faqat Hosting).
- Qolgan: aloqa formasi Blaze'ni kutadi — billing hisobining loyiha limiti
  to'lgan. Yechim: keraksiz loyihadan billing'ni uzish yoki limit so'rash,
  keyin `FIREBASE_PLAN` ni o'chirib workflow'ni qayta ishga tushirish.
- Rezyume manbasi: `portfolio-3d/scripts/resume/resume.html`. O'zgarsa — PDF
  qayta yig'iladi (`node scripts/resume/build.mjs`), `docs/REZYUME.md` ham
  birga yangilanadi; test eskirgan PDF'ni ushlaydi.

### 1) rn-r-e-commerce — veb'ni jonli qilish
- `firebase.json` (hosting: `apps/web/dist`) va `scripts/deploy-backend.sh` bor.
- Egasi: Firebase loyiha (konsoldagi `kids-wear`). Deploy — portfolio kabi
  GitHub Actions orqali (telefondan).
- Kod: README "Phase 10" holati, demo ma'lumot (seed), `mock` to'lov rejimi
  aniq ko'rsatilsin. Android/Play Store — keyin.

### 1b) lumina — parallel tugatish
- Veb versiyasi jonli (lumina-007app.web.app), real foydalanuvchilar post
  joylay boshladi (vakansiya joylaydigan foydalanuvchi qo'shildi).
- Kod: veb'dagi kamchiliklar ro'yxati, moderatsiya/shikoyat (real odamlar
  bor), APK yig'ish. Batafsil — ish boshlanganda alohida prompt.

### 2) telegram-bots — botlarni doimiy ishlatish, keyin hr-bot
- 2–3 ommaviy botni doimiy serverga (Railway/VPS) chiqarish; kino-bot uchun
  Volume (`DATA_DIR=/data`).
- hr-bot: `docs/HR-BOT-PROMPT.md` — "telegram-bots/hr-bot ni boshla" bilan.
  2026-12-11 cheklovi — egasi istisno qilsa.
- bot-factory: hr-bot MVP'dan keyin, alohida repo.

### 3) atoyo-e-commerce — qo'llab-quvvatlash
- Egasi: ilova 1.5.2 ni admin panelda e'lon qilish; production'da XFF;
  Payme/Click kalitlari.
- Kod: 800+ qatorli fayllarni bo'lish (3.7); 16-band 3D model — egasi
  image→3D API kalitini bergach. Batafsil: repo `docs/AUDIT-ISHLARI.md`.

### Muzlatilganlar
learning-datacenter-tc-project, go-uz, web-3d, ios-asistent, mythos-uzbek-ai,
DevCraft-AI — 2026-12-11 gacha tegilmaydi.

---

## 4. Egasi qiladigan ishlar (kod emas)

- [ ] 14 ta repoda default branch → `main` (2-bo'lim)
- [ ] O'quv repolarini arxivlash (1-bo'lim)
- [x] portfolio-3d: Firebase + deploy (2026-10-09)
- [ ] Billing: keraksiz loyihadan uzish yoki limit so'rash → portfolio formasi
- [ ] atoyo: ilova 1.5.2 ni e'lon qilish
- [ ] countlist'dan oqib ketgan eski bot tokenini BotFather'da bekor qilish
      (agar hali qilinmagan bo'lsa)
- [x] Rezyume: 13 bot, broadcast, portfolio havolasi (2026-10-09)

---

*Oxirgi yangilanish: 2026-10-09*
