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
| **portfolio-3d** | private | 3D portfolio, Firebase Hosting + Functions | 2026-10-08 | 🚧 deploy qilinmagan | **1-navbat** |
| **rn-r-e-commerce** | public | KidsWear: veb + Android, Payme/Click | 2026-07-28 | 🚧 Phase 10, jonli yo'q | **2-navbat** |
| **lumina** | public | Instagram uslubidagi RN ilova (bare) | 2026-07-27 | 🚧 | 5-navbat: tugatish yoki muzlatish |
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

### 1) portfolio-3d — eng tez g'alaba, bu sizning CV'ingiz
- Egasi: Firebase loyiha ochish → `.firebaserc` ga ID → `firebase deploy`
  (`docs/FIREBASE.md`).
- Kod: kontent halolligi — `Supabase` ko'nikmalarda turibdi (ko'rilgan
  repolarda topilmadi — tekshirilsin; `Expo` faqat muzlatilgan ios-asistent'da),
  ko'nikma foizlari (`level: 95`) bo'rttirilgan
  ko'rinadi; Lumina `live` havolasi tekshirilsin; `scripts/resume/` eski
  rezyume (Netlify havolasi bilan) — o'chirish yoki yangilash.
- Deploy'dan keyin: profil README da 🔒 o'rniga jonli havola.

### 2) rn-r-e-commerce — veb'ni jonli qilish
- `firebase.json` (hosting: `apps/web/dist`) va `scripts/deploy-backend.sh` bor.
- Egasi: Firebase loyiha (konsoldagi `kids-wear`) + deploy.
- Kod: README "Phase 10" holati, demo ma'lumot (seed), `mock` to'lov rejimi
  aniq ko'rsatilsin. Android/Play Store — keyin.

### 3) telegram-bots — botlarni doimiy ishlatish, keyin hr-bot
- 2–3 ommaviy botni doimiy serverga (Railway/VPS) chiqarish; kino-bot uchun
  Volume (`DATA_DIR=/data`).
- hr-bot: `docs/HR-BOT-PROMPT.md` — "telegram-bots/hr-bot ni boshla" bilan.
  2026-12-11 cheklovi — egasi istisno qilsa.
- bot-factory: hr-bot MVP'dan keyin, alohida repo.

### 4) atoyo-e-commerce — qo'llab-quvvatlash
- Egasi: ilova 1.5.2 ni admin panelda e'lon qilish; production'da XFF;
  Payme/Click kalitlari.
- Kod: 800+ qatorli fayllarni bo'lish (3.7); 16-band 3D model — egasi
  image→3D API kalitini bergach. Batafsil: repo `docs/AUDIT-ISHLARI.md`.

### 5) lumina — qaror
- Oxirgi ish iyulda. Firebase ulangan, store'ga chiqmagan.
  Variant: APK yig'ib demo sifatida tugatish **yoki** muzlatish.

### Muzlatilganlar
learning-datacenter-tc-project, go-uz, web-3d, ios-asistent, mythos-uzbek-ai,
DevCraft-AI — 2026-12-11 gacha tegilmaydi.

---

## 4. Egasi qiladigan ishlar (kod emas)

- [ ] 14 ta repoda default branch → `main` (2-bo'lim)
- [ ] O'quv repolarini arxivlash (1-bo'lim)
- [ ] portfolio-3d: Firebase + deploy
- [ ] atoyo: ilova 1.5.2 ni e'lon qilish
- [ ] countlist'dan oqib ketgan eski bot tokenini BotFather'da bekor qilish
      (agar hali qilinmagan bo'lsa)
- [ ] Rezyume: "12 ta bot" → 13 (PDF qayta yig'iladi)

---

*Oxirgi yangilanish: 2026-10-08*
