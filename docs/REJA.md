# Repolar xaritasi va tugatish rejasi

> Tuzilgan: 2026-10-08. Har repo koddan tekshirildi (oxirgi commit, fayllar,
> README, `docs/`). Maqsad: **yangi loyiha emas — boshlanganlarni tugatish.**
> Har band boshlanganda unga alohida tuzatish prompti yoziladi.

---

## 0. Umumiy qoida — 3 oylik reja (2026-09-11 → 2026-12-11)

> 2026-10-21 da `telegram-bots/docs/REJA.md` dan shu yerga ko'chirildi —
> reja hamma loyihalar uchun, shuning uchun profil repoda turadi.
> Har repoda faqat o'z holati (`docs/HOLAT.md`, `docs/LOYIHA-HAQIDA.md` yoki `docs/REJA.md`).

**Bu muddat ichida yangi repo ochilmaydi.** Yangi g'oya — pastdagi «G'oyalar
qutisi»ga, kod yozilmaydi. Sabab: 2026-05-03 → 2026-09-11 da 30 ta repo
ochilgan, jonli havolasi bori bitta edi (atoyo.uz). Muammo — tugatishda.

**«Tugallandi» = beshtasi ham:** (1) deploy qilingan, ishlaydigan havola bor;
(2) README to'g'ri; (3) `.env.example` bor, sirlar repoda yo'q; (4) begona odam
README bo'yicha ishga tushira oladi; (5) kamida 1 ta haqiqiy foydalanuvchi.
«Kod yozildi» ≠ tugallandi.

### Cheklovdan istisnolar (egasi qarori)

| Sana | Loyiha | Hajm |
|---|---|---|
| 2026-10-11 | `suhbat`, `uzbek-tg` | O'z reja hujjatlari bilan, alohida sessiyalarda |
| 2026-10-11 | `telegram-bots/bots/hr-bot` | MVP (1–3) + to'lov, Business, deploy fayllari — 2026-10-12 tayyor |
| 2026-10-11 | `telegram-bots/bots/ovoz-bot` | Faqat 1-faza (STT + TTS); `/myvoice` boshlanmagan |
| 2026-10-12 | `bot-factory` (alohida repo, `@Yovuzhackerbot`) | Faza 1–2 qilingan |

### Arxivlash / tozalash

- 2026-10-21 holati: `first-bot`, `asistent-bot`, `atoyo`, `e-commerce-platform`,
  `social-app` akkauntda **yo'q** (o'chirilgan). `chatapp` → `suhbat`,
  `chat-app` → `uzbek-tg` qayta nomlangan.
- Qolgani: `portfolio-builder` (bo'sh) — o'chirish yoki 3-akkauntda reja;
  `bank`, `taxi`, `calculator` — o'quv: README'ga «o'quv loyihasi» yoki arxivlash.
- Arxivlash ≠ o'chirish: Settings → Archive this repository.

### G'oyalar qutisi (2026-12-11 dan keyin qaraladi)

- 2026-10-07 — hr-bot → 2026-10-11 istisno sifatida boshlandi.
- 2026-10-07 — bot-factory → 2026-10-12 alohida repo.
- 2026-10-15 — Telegram Serverless → 5-bo'lim.

### Har dushanba

1) O'tgan haftada navbatdagi loyihada nima tugadi? 2) Nima to'sqinlik qildi?
3) Shu haftada qaysi bitta narsa tugaydi?

---

## 1. Hamma repolar — 2026-10-21 tekshiruvi

**Abdulmajidkhan007 akkauntida 20 ta repo: 8 public, 12 private.** Bundan
tashqari ruxsat bor: `nurulloh-coder-dev/learning-center-front` (public,
jamoaviy — men frontend), `nurulloh-coder-dev/learning-center` (private),
`goodman113/learning_center` (public, 2026-08-14 dan tegilmagan).
Avvalgi ro'yxatdagi `social-app` va `chatapp`/`chat-app` endi yo'q (o'chirilgan
yoki `suhbat`/`uzbek-tg` ga qayta nomlangan). `Atoyo-erp-v2` bu sessiyaga
ko'rinmadi — u 3-akkauntda tekshiriladi.

"Oxirgi ish" — default branch'dagi oxirgi commit sanasi.

| Repo | Ochiq/yopiq | Default | Oxirgi ish | Holat | Qaror |
|---|---|---|---|---|---|
| **suhbat** | public | `main` | 2026-10-21 | 🚧 veb jonli (Railway), v0.5.0 chiqarilmagan; telefonda va Railway'da hammasi sinalmagan | Davom (asosiy akkaunt) |
| **Abdulmajidkhan007** | public | `main` | 2026-10-11 (main) | ✅ | Yuritiladi; 2 ta docs branch main'ga qo'shilmagan (pastda) |
| **portfolio-3d** | private | `main` | 2026-10-16 | ✅ jonli, faqat Hosting; forma Blaze'ni kutadi | Tayyor |
| **uzbek-tg** | public | `main` | 2026-10-16 | 🚧 0–1-faza tugagan (TDLib, haqiqiy akkaunt); 2-faza — ko'p narsa "kod yozildi, telefonda sinalmagan" | Davom |
| **telegram-bots** | public | `main` | 2026-10-21 | ✅ 15 bot, CI; Railway konfiglari tayyor | Qo'llab-quvvatlash |
| **rn-r-e-commerce** | public | `main` | 2026-10-13 | 🚧 veb jonli; APK 1.0.9 ochiladi (egasi, 2026-10-21) | 2-guruh — Blaze kutadi |
| **lumina** | public | `main` | 2026-10-12 | 🚧 veb jonli, APK; admin to'lqini tugagan | Egasi sinovi; hisoblagich qoidasi qolgan |
| **bot-factory** | private | `main` | 2026-10-12 | 🚧 Faza 1+2: skelet va runtime yadro | Yangi qo'shilgan — navbatga hali kiritilmagan |
| **atoyo-e-commerce** | public | `main` | 2026-10-08 | ✅ Ishlayapti (atoyo.uz), ilova 1.5.2 | Qo'llab-quvvatlash |
| **Organick_org** | public | `master` | 2026-09-29 | ✅ Jonli | Tayyor |
| **mythos-uzbek-ai** | private | claude/… | 2026-09-15 | tajriba | 3-akkaunt yoki oxirida |
| **learning-datacenter-tc-project** | private | claude/… | 2026-08-12 | 🚧 Faza 1 boshlangan | Oxirida |
| **DevCraft-AI** | private | feat/… | 2026-08-24 | ❄️ faqat arxitektura | 3-akkaunt |
| **web-3d** | private | claude/… | 2026-08-01 | 🚧 | Oxirida |
| **go-uz** | private | claude/… | 2026-07-12 | 🚧 | 3-akkaunt |
| **bank** | private | claude/… | 2026-05-20 | o'quv | 3-akkaunt |
| **calculator** | private | claude/… | 2026-05-21 | o'quv | 3-akkaunt |
| **taxi** | private | claude/… | 2026-05-19 | o'quv | 3-akkaunt |
| **ios-asistent** | private | claude/… | 2026-05-17 | 🚧 7 commit | Oxirida |
| **portfolio-builder** | private | `main` | 2026-05-03 | bo'sh (faqat README) | 3-akkaunt |

"Arxivlash" — GitHub'da **Settings → Archive this repository**: kod saqlanadi,
faqat o'qish uchun. O'chirish emas.

---

## 2. Default branch va eng oxirgi kod (2026-10-21, git'dan)

**Eng oxirgi kod hamma joyda default branch'da.** Default'i `main` bo'lmagan
9 ta repoda (`bank`, `calculator`, `taxi`, `mythos-uzbek-ai`, `DevCraft-AI`,
`learning-datacenter-tc-project`, `web-3d`, `go-uz`, `ios-asistent`) `main`
default branch bilan **bir xil commit'da** — default'ni `main` ga almashtirsa
hech narsa yo'qolmaydi. Egasi: Settings → Branches → Default branch → `main`.

Istisno — `main` ga qo'shilmagan ishlar:
- **learning-datacenter-tc-project:** `claude/monorepo-architecture-setup-fwi0kn`
  (2026-09-15) — default/main'dan yangiroq, qo'shilmagan.
- **Abdulmajidkhan007:** `ccr-d15e8802-woh2vc` (2026-10-15, REJA'ga "Telegram
  Serverless" g'oyasi) va `claude/earshot-audio-effects-v162og` (2026-10-21,
  `docs/VOSITA-EARSHOT.md`) — ikkalasi faqat hujjat, main'ga qo'shilmagan.
- **uzbek-tg:** `feature/firebase-auth` (2026-05-31, eski Expo davri) — eskirgan.

**Organick_org — `master` qoladi:** GitHub Actions deploy aynan `master` ga
push'da ishlaydi.

---

## 3. Tugatish navbati (egasi tasdiqlagan, 2026-10-11)

> **Yangi sessiya shu bo'limdan boshlaydi.** Har loyiha — alohida sessiya,
> o'sha repoda; repo ichidagi `CLAUDE.md` + `docs/REJA.md` (yoki
> `docs/LOYIHA-HAQIDA.md`) holatni saqlaydi. Bu suhbat tarixi kerak emas.

### A. Hozirgi loyihalar — avval shular tugaydi (holat 2026-10-21)

| # | Repo | Holat | Keyingi qadam |
|---|---|---|---|
| 1 | **rn-r-e-commerce** (KidsWear) | Veb jonli; APK **1.0.9 ochiladi** (yiqilish PR #4, #5 da tuzatildi) | Keyinroq ko'riladi (egasi). Kartada yurakcha nomni bosib qolgan; ilovada Google kirish va buyurtma oqimi sinalmagan. 2-guruh — Blaze |
| 2 | **lumina** | Veb + APK; uz/en/ru, Reels, admin (rollar, bloklash, shikoyatlar, e'lon) | Egasi sinaydi; hisoblagichlarni ±1 qoidasi; CI'ga `FIREBASE_TOKEN` |
| 3 | **telegram-bots** | ✅ 15 bot; 3 ishli sessiya bajarilgan (deploy konfiglari, hr-bot, bot-factory reja) | Bot-factory endi alohida repoda |
| 4 | **atoyo-e-commerce** | ✅ jonli (atoyo.uz), ilova 1.5.2 | Qo'llab-quvvatlash: repo `docs/AUDIT-ISHLARI.md` (16-band — 3D model) |
| 5 | **Organick_org** | ✅ jonli | Tayyor; faqat xato chiqsa |
| 6 | **Abdulmajidkhan007** (profil) | ✅ | Har loyiha o'zgarganda `docs/<repo>.md` + sana |
| 7 | **portfolio-3d** | ✅ jonli | Aloqa formasi Blaze'ni kutadi |
| 8 | **suhbat** | 🚧 boshlangan: 0–4b fazalar `main` da, veb Railway'da jonli, v0.3–v0.5 chiqarilmagan | Repo `docs/REJA.md` → "Keyingi sessiya uchun"; telefonda va Railway'da sinash |
| 9 | **uzbek-tg** | 🚧 boshlangan: TDLib ulangan, 2-faza UI katta qismi yozilgan | Egasi APK'da ⏳ bandlarni sinaydi → 3-faza (ghost mode) |
| 10 | **bot-factory** | 🚧 Faza 1+2 (skelet, runtime yadro) | Navbatdagi o'rni egasi bilan kelishiladi |

### B. Eng oxirida yoki 3-akkauntda (egasi qarori, 2026-10-21)
1. **learning-datacenter-tc-project** — CRM, Faza 1 (guruhlar, jadval, davomat)
2. **go-uz** — bitta ilovani MVP'gacha
3. **DevCraft-AI** — hozir faqat arxitektura hujjati
4. **mythos-uzbek-ai**
5. **web-3d**
6. **ios-asistent**

Hozircha A ro'yxatidagi ishlar tugatiladi. 3-akkaunt ochilsa, bular
(`go-uz`, `DevCraft-AI`, `bank`, `taxi`, `calculator`, `portfolio-builder`,
`Atoyo-erp-v2`) o'sha yerda — `docs/ACCOUNT-3-ISHLARI.md`. Har biri
boshlanishidan oldin `suhbat`/`uzbek-tg` dagi kabi reja hujjati yoziladi.

### C. telegram-bots — 3 ishli sessiya ✅ bajarilgan (egasi 2026-10-21 tasdiqladi)
Repo holati: `telegram-bots/docs/HOLAT.md`.

### Kod emas — egasi keyinroq qiladi
- bank, taxi, calculator — private, arxivlash keyin.
- portfolio-builder — bo'sh (0 KB, faqat README) → o'chirish yoki arxivlash.

---

## 4. Egasi qiladigan ishlar (kod emas)

- [x] KidsWear APK — 1.0.9 ochiladi (2026-10-21)
- [ ] KidsWear: Admin → Yetkazish narxlarini tekshirish (hozir boshlang'ich qiymat)
- [ ] Lumina: APK'da Google bilan kirishni sinash; Admin → Landing'ga 5 ta skrinshot
- [x] GitHub: `chat-app` → `uzbek-tg` nomi; ikkala repoda default branch → `main` (2026-10-21 tekshirildi)
      ("Could not change default branch" chiqsa — sahifani yangilash yoki Desktop site)
- [x] chatapp → `suhbat` nomi (2026-10-11)
- [ ] 9 ta repoda default branch → `main` (2-bo'lim; kod bir xil, xavfsiz)
- [ ] Profil repoda 2 ta docs branch'ni main'ga qo'shish yoki yopish (2-bo'lim)
- [ ] Billing: keraksiz loyihadan uzish yoki limit so'rash → portfolio formasi,
      KidsWear to'lov/push, Lumina Storage qoidalari
- [ ] Lumina CI: `FIREBASE_TOKEN` secret yoki SA'ga "Firebase Rules Admin" roli
- [ ] atoyo: ilova 1.5.2 ni e'lon qilish
- [ ] countlist'dan oqib ketgan eski bot tokenini BotFather'da bekor qilish
      (agar hali qilinmagan bo'lsa)
- [x] social-app o'chirildi; rezyume yangilandi (2026-10-09)
- [ ] @Yovuzhackerbot (va Atoyo Service, agar yoqilgan bo'lsa): BotFather'da
      Serverless'ni o'chirish — handler'siz yoqilgan Serverless update'larni yutadi

---

## 5. Keyinga qoldirilgan g'oyalar

- **Telegram Serverless (early access)** — keyin **alohida yangi bot** bilan sinash.
  Mavjud botlarga (@Yovuzhackerbot, Atoyo Service, telegram-bots, bot-factory)
  **tegilmaydi**. Sabab: platforma faqat JS (V8 isolate, npm yo'q, faqat `sdk`
  moduli), bitta loyiha = bitta bot; bot-factory (Python, ko'p bolali bot) bunga
  ko'chmaydi. Hozir boshlanmaydi — egasi aytganda (2026-10-15 qaror).

---

*Oxirgi yangilanish: 2026-10-21*
