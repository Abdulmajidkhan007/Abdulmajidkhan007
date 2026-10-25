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

### Asosiy yo'nalish — pullik ish (freelance), 2026-10-21 qarori

Loyihalar ko'p, daromad yo'q. Shu kundan **birinchi o'rinda — mijoz topish va unga ishlash**.

- **Paketlar (faqat isbotlangan ishdan):** (1) Telegram bot — buyurtma, lid, CRM
  (isbot: 15 bot, @Atoyo_service_bot); (2) do'kon sayti + Telegram integratsiya
  (isbot: atoyo.uz); (3) landing / biznes sayt (isbot: portfolio-3d, Organick).
  Mobil ilova va AI — alohida paket emas, faqat qo'shimcha.
- **Kanallar tartibi:** mahalliy biznes (to'g'ridan-to'g'ri taklif, atoyo misoli) →
  Telegram freelance/biznes guruhlari → Kwork → Upwork (2–3 keysdan keyin).
- **Ish tartibi:** yozma qamrov (nima qilinadi / qilinmaydi / muddat) → 50% oldindan →
  bosqichlar → deploy + qo'llanma + 2 hafta bepul tuzatish → oylik qo'llab-quvvatlash taklifi.
  Narx = soat × soatlik stavka; birinchi 2–3 mijozga chegirma evaziga sharh va keys huquqi.
- **Vaqt:** yangi shaxsiy loyiha yo'q; `suhbat`/`uzbek-tg` — kuniga ≤1 soat; sertifikat
  kurslari — kuniga 1 soat; qolgani — mijoz.
- **Birinchi hafta:** xizmatlar sayti (3 paket + atoyo keysi) · README'da "buyurtma qabul
  qilaman" · `docs/KEYS-ATOYO.md` · 10 ta mahalliy biznesga taklif · Kwork profili + 2 xizmat.
- **Hisob:** har mijoz shu yerga — sana, ish, holat (taklif / kelishildi / topshirildi / to'landi).

**Instagram AI avto-javob — narxlar (2026-10-22, egasi ma'qulladi):**

| Mahsulot | Narx |
|---|---|
| A: qo'llanma (bot orqali, pullik qism) | 49 000 so'm |
| A: "o'zim sozlab beraman" xizmati | 300 000 so'm bir martalik + 100 000 so'm/oy |
| B: o'z mahsulotimiz (Meta API) | A narxlaridan kelib chiqib, keyin belgilanadi |

**Qoida:** bir narx o'zgarsa — A va B birga qayta ko'riladi (bir-biriga mos bo'lsin);
botdagi narx admin paneldan o'zgartiriladi. Bepul qism — xizmat kanaliga majburiy obuna
bilan; pullik qismda obuna talab qilinmaydi.

| Sana | Mijoz | Ish | Holat |
|---|---|---|---|
| — | — | — | — |

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
- Qolgani: `portfolio-builder` (bo'sh) — 2026-10-25 egasi qarori: repo turadi, g'oyalar qutisida, reja 2026-12-11 dan keyin;
  `bank`, `taxi`, `calculator` — o'quv: README'ga «o'quv loyihasi» yoki arxivlash.
- Arxivlash ≠ o'chirish: Settings → Archive this repository.

### G'oyalar qutisi (2026-12-11 dan keyin qaraladi)

- 2026-10-07 — hr-bot → 2026-10-11 istisno sifatida boshlandi.
- 2026-10-07 — bot-factory → 2026-10-12 alohida repo.
- 2026-10-15 — Telegram Serverless → 5-bo'lim.
- 2026-10-25 — `portfolio-builder` (bo'sh repo, portfolio yaratuvchi veb-ilova g'oyasi) — egasi qarori: o'chirilmaydi, 2026-12-11 dan keyin reja yoziladi.
- 2026-10-22 — **Dead Man's Switch** (raqamli vasiyatnoma): har 30 kunda "hammasi joyidami?";
  3 marta javob bo'lmasa — oldindan tayyorlangan xat/arxiv belgilangan odamlarga.
  Kuchli: haqiqiy ehtiyoj, texnik jihatdan o'tkir (zero-knowledge shifrlash — DevCraft'dagi
  AES-256-GCM g'oyasi). Xavf: ishonch (parollarni notanish xizmatga berish), noto'g'ri
  ishga tushish (safarda javob bermagan odam sirlarini yuborib qo'yish), raqobatchilar bor
  (Google Inactive Account Manager, Bitwarden Emergency Access). MVP: faqat xatlar, parol emas.
- 2026-10-22 — **Unsent Letters** (yuborilmagan xabarlar, anonim, laykisiz, "men ham his
  qilganman" tugmasi). Kuchli: MVP oddiy, o'zbek tilida bo'sh joy. Xavf: moderatsiya shart
  (o'z joniga qasd, zo'ravonlik, real ism-familiya, tuhmat); o'xshashi bor (The Unsent Project).
- 2026-10-22 — **AI avatar video** (egasi o'zi ijtimoiy tarmoqda chiqmaydi): egasining
  rasmi + ovoz namunasi + matn → u gapirayotgandek video. `telegram-bots/bots/ovoz-bot` ning
  2-fazasi (`/myvoice` — ovoz klonlash, rejada bor) ustiga quriladi. Avval botsiz,
  Higgsfield orqali qo'lda sinab ko'riladi. Instagram'da AI-video belgisi qo'yiladi.
- 2026-10-22 — **Failure Network** (omadsizliklar tarmog'i). Eng zaif: daromad modeli va
  "bo'sh tarmoq" muammosi; alohida platforma emas, boshqa mahsulotning bo'limi bo'la oladi.

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
| **uzbek-tg** | public | `main` | 2026-10-25 | 🚧 0–1-faza tugagan; 2-faza va 3-faza (ghost mode, PR #12) — kod yozildi, telefonda sinalmagan | Egasi sinaydi (`docs/SINOV-ROYXATI.md`) |
| **telegram-bots** | public | `main` | 2026-10-21 | ✅ 15 bot, CI; Railway konfiglari tayyor | Qo'llab-quvvatlash |
| **rn-r-e-commerce** | public | `main` | 2026-10-25 | 🚧 veb jonli; Faza 1–6 merge (Faza 6 — PR #17) | Faza 7 ishchida (egasi merge qiladi) |
| **lumina** | public | `main` | 2026-10-25 | 🚧 veb jonli, APK; hisoblagich ±1 qoidasi jonli bazada (PR #6) | Egasi sinovi; `FIREBASE_TOKEN` |
| **bot-factory** | private | `main` | 2026-10-25 | 🚧 Faza 1–3 (anon, guard, «Mening botlarim» — PR #2); haqiqiy botda sinalmagan; CI Actions billing sababli ishlamayapti | Faza 4 (4-daraja) |
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
| **portfolio-builder** | private | `main` | 2026-05-03 | bo'sh (faqat README) | G'oyalar qutisi, 2026-12-11 dan keyin (2026-10-25) |

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

### Ustuvorlik darajalari (egasi qarori, 2026-10-22) — ish SHU tartibda tugatiladi

Yuqori daraja tugamaguncha (yoki to'siqda turmaguncha) pastkisiga o'tilmaydi.
Pastdagi A/B jadvallari — holat ma'lumotnomasi, tartib emas.

| Daraja | Loyihalar | Akkaunt |
|---|---|---|
| **0** | Instagram avto-javob **A** (`telegram-bots/bots/insta-avtojavob-bot`) · **B** (alohida repo — egasi ochadi, fazalari bor; reja hozir `telegram-bots/docs/INSTA-AVTOJAVOB-B.md`) · countlist Plus/Pro/Max paketlari | Referal akkaunt 1 |
| **1** | Pullik ishlar (freelance mijozlar) · `portfolio-3d` · `Abdulmajidkhan007` (profil, xizmatlar sayti) | Asosiy |
| **2** | `nurulloh-coder-dev/learning-center-front` (+ `learning-center` backend, faqat o'qish/tahlil) — jamoaviy, men frontend team lead | Asosiy |
| **3** | `suhbat` · `marshrutchi-bot` | Referal akkaunt 1 |
| **4** | `lumina` · `rn-r-e-commerce` (KidsWear, Faza 7 dan) · `uzbek-tg` · `bot-factory` · `portfolio-builder` | Referal akkaunt 2 |
| **5** | `atoyo-e-commerce` · `Organick_org` · `telegram-bots` (deyarli tayyor) · `mythos-uzbek-ai` | Oxirida — birinchi bo'shagan referal akkaunt |
| **6 (oxirgi)** | `DevCraft-AI` · `calculator` · `taxi` · `bank` · `learning-datacenter-tc-project` · `go-uz` · `web-3d` · `ios-asistent` | Oxirida — birinchi bo'shagan referal akkaunt |

**Akkauntlar va limit (2026-10-22):**
- **Asosiy akkaunt** — faqat 1- va 2-daraja (learning-center jamoaviy: limit tugasa jamoa kutib
  qoladi). Haftalik limit 2026-10-22 da 67%, yangilanishiga 5 kun. O'tgan hafta limit
  yetmay 13$ qo'shimcha ketgan — takrorlanmasin. Qoida: ishchi sessiya faqat egasi
  aytganda, iloji boricha Sonnet, keraksiz qayta o'qish yo'q.
- **Referal akkaunt 1** — 0 + 3-daraja. **Referal akkaunt 2** — 4-daraja.
- **abdullohkhan (eski akkaunt)** — undagi repolar public qilinadi, egasi ko'rsatgan yangi
  repolarga birin-ketin ko'chiriladi (manba → manzil jadvalini egasi beradi).
- 5–6-daraja oxirida hal qilinadi: qaysi referal akkaunt o'z darajalarini birinchi
  tugatsa, shunga beriladi (egasi qarori, 2026-10-22).
- Har akkauntga GitHub (Abdulmajidkhan007) ulanadi, aks holda private repolar ko'rinmaydi.
- Asosiy akkauntdagi 0/3/4-daraja sessiyalari (countlist, Insta A/B, marshrutchi, KidsWear)
  2026-10-22 dan **to'xtatilgan** — davomi tegishli akkauntda, holat repolardagi hujjatlardan.

Ro'yxatdan tashqari (`list_repos`, 2026-10-22): `goodman113/learning_center` (2026-08-14 dan
tegilmagan), `Atoyo-erp-v2` (3-akkaunt). Akkauntdagi 21 repo hammasi darajalarga kirgan.

### A. Hozirgi loyihalar — avval shular tugaydi (holat 2026-10-21)

| # | Repo | Holat | Keyingi qadam |
|---|---|---|---|
| 1 | **rn-r-e-commerce** (KidsWear) | Veb jonli; APK **1.0.9 ochiladi** (yiqilish PR #4, #5 da tuzatildi) | Keyinroq ko'riladi (egasi). Kartada yurakcha nomni bosib qolgan; ilovada Google kirish va buyurtma oqimi sinalmagan. 2-guruh — Blaze |
| 2 | **lumina** | Veb + APK; uz/en/ru, Reels, admin (rollar, bloklash, shikoyatlar, e'lon) | Egasi sinaydi; ±1 qoidasi ✅ (2026-10-25); CI'ga `FIREBASE_TOKEN` |
| 3 | **telegram-bots** | ✅ 15 bot; 3 ishli sessiya bajarilgan (deploy konfiglari, hr-bot, bot-factory reja) | Bot-factory endi alohida repoda |
| 4 | **atoyo-e-commerce** | ✅ jonli (atoyo.uz), ilova 1.5.2 | Qo'llab-quvvatlash: repo `docs/AUDIT-ISHLARI.md` (16-band — 3D model) |
| 5 | **Organick_org** | ✅ jonli | Tayyor; faqat xato chiqsa |
| 6 | **Abdulmajidkhan007** (profil) | ✅ | Har loyiha o'zgarganda `docs/<repo>.md` + sana |
| 7 | **portfolio-3d** | ✅ jonli | Aloqa formasi Blaze'ni kutadi |
| 8 | **suhbat** | 🚧 boshlangan: 0–4b fazalar `main` da, veb Railway'da jonli, v0.3–v0.5 chiqarilmagan | Repo `docs/REJA.md` → "Keyingi sessiya uchun"; telefonda va Railway'da sinash |
| 9 | **uzbek-tg** | 🚧 boshlangan: TDLib ulangan, 2-faza UI katta qismi yozilgan | 3-faza (ghost mode) kodi merge (2026-10-25); egasi APK'da `docs/SINOV-ROYXATI.md` + ghost sinovini qiladi |
| 10 | **bot-factory** | 🚧 Faza 1–3 (2026-10-25) | Faza 4: sinov muddati, Stars obunasi, limitlar |

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
- [ ] bot-factory CI: private repo'da Actions job runner olmay yiqilyapti (2026-10-25) —
      Settings → Billing → Actions limiti / to'lov usuli
- [ ] uzbek-tg: APK'da `docs/SINOV-ROYXATI.md` va ghost mode sinovi (2-akkaunt bilan)
- [ ] KidsWear: Faza 6 admin amallarini vebda sinash; Faza 7 PR'ini ko'rib merge qilish
- [ ] Postlar: `posts/2026-10-25-*` qoralamalarini ko'rib, kanalga yuborish
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

*Oxirgi yangilanish: 2026-10-25*
