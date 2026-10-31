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
  (isbot: atoyo.uz kodi — 2026-10-26 dan to'xtatilgan; ochiq kod va portfolio); (3) landing / biznes sayt (isbot: portfolio-3d, Organick).
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
- 2026-10-29 — **Poyezd chiptasi kuzatuvchi bot** (namuna: Chiptatopar — bo'sh joy chiqsa
  xabar beradi va joyni o'zi band qiladi; to'lov: chipta olinganda 27 000 so'm yoki
  97 000 so'm / 30 kun). Kuchli: og'riq aniq (bayram va Afrosiyob chiptalari tez tugaydi),
  pul to'lashga tayyor auditoriya bor, `telegram-bots` tajribasiga mos.
  Zaif: bozor kichik va mavsumiy — namunaning o'z statistikasi 397 buyurtma, 580 chipta va
  24 ta faol foydalanuvchi; demak bu alohida startup emas, kichik qo'shimcha daromad.
  Raqib allaqachon bor, farq qilish kerak.
  Xavf: (1) butunlay railway.uz saytiga bog'liq — sayt o'zgarsa yoki botlarni bloklasa,
  xizmat to'xtaydi; (2) joyni avtomatik band qilish uchun foydalanuvchining pasport
  ma'lumoti va railway.uz akkaunti kerak — shaxsiy ma'lumot, katta mas'uliyat;
  (3) pul qabul qilish uchun yuridik shaxs va soliq kerak; (4) chipta "ushlab turish"
  qoidaga zid deb topilishi mumkin.
  MVP (xavfsizi): faqat **xabar berish**, avtomatik band qilishsiz — joy chiqsa havola
  yuboriladi, odam o'zi oladi. Farq qilish yo'li: poyezd + avtobus + avia bitta botda,
  yoki narx tushganda ogohlantirish. Avval bitta yo'nalishda (Toshkent–Samarqand)
  2 hafta o'zimiz uchun sinab ko'riladi.

- 2026-10-29 — **OSAI (OffSec AI Red Teamer)**: AI agent, RAG, MCP va AI infratuzilmasiga
  hujum; 24 soatlik amaliy imtihon, kurs AI-300 ($1 749 dan), OSCP darajasi kutiladi.
  Hozir emas — freelance birinchi. Shu orada amaliy qismi: Insta B REJA 7.1 (prompt
  injection — 5 qoida) va post qoralamasi.
  **5 ko'nikma xaritasi (2026-10-30):** 1) tarmoq/Linux/web/pentest — 🔴 (Linux yangi
  boshlandi, pentest yo'q); 2) Python + API — 🟢 (15 bot, bot-factory); 3) LLM/RAG/agent
  — 🟢/🟡 (atoyo-rag-bot, xulosa-ai-bot, Insta A/B); 4) AI hujumlari (OWASP LLM Top 10,
  MITRE ATLAS) — 🟡 (Insta B 7.1); 5) Cloud/Kubernetes — 🔴 (Railway, Docker). Hozir
  bepul: Xubuntu'da kundalik Linux, PortSwigger «LLM attacks», Lakera Gandalf, OWASP LLM
  Top 10; freelance'ga «AI botni prompt injection'ga tekshirish» qo'shimcha xizmati.

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
| **suhbat** | public | `main` | 2026-10-29 | 🚧 veb jonli (Railway); relizlar v0.1.0–v0.6.0 chiqarilgan (v0.6.0 — 4c-1, 2026-10-29); telefonda va Railway'da hammasi sinalmagan | Davom; 4c-2 — qurilma kerak |
| **Abdulmajidkhan007** | public | `main` | 2026-10-11 (main) | ✅ | Yuritiladi; 2 ta docs branch main'ga qo'shilmagan (pastda) |
| **portfolio-3d** | private | `main` | 2026-10-16 | ✅ jonli, faqat Hosting; forma Blaze'ni kutadi | Tayyor |
| **uzbek-tg** | public | `main` | 2026-10-25 | 🚧 0–1-faza tugagan; 2-faza va 3-faza (ghost mode, PR #12) — kod yozildi, telefonda sinalmagan | Egasi sinaydi (`docs/SINOV-ROYXATI.md`) |
| **telegram-bots** | public | `main` | 2026-10-21 | ✅ 15 bot, CI; Railway konfiglari tayyor | Qo'llab-quvvatlash |
| **rn-r-e-commerce** | public | `main` | 2026-10-30 | 🚧 veb jonli; Faza 1–8 merge (7 — PR #19, 8 — PR #21) | Faza 9 — qidiruv va filtrlar |
| **lumina** | public | `main` | 2026-10-25 | 🚧 veb jonli, APK; hisoblagich ±1 qoidasi jonli bazada (PR #6) | Egasi sinovi; `FIREBASE_TOKEN` |
| **bot-factory** | private | `main` | 2026-10-25 | 🚧 Faza 1–5 (Faza 5: Dockerfile, Alembic, zaxira, monitoring — PR #4); Railway'ga hali deploy qilinmagan, haqiqiy bot/Stars bilan sinalmagan; CI Actions billing sababli ishlamayapti | Egasi Railway'ga deploy qiladi (`docs/DEPLOY.md`) → Faza 6 |
| **atoyo-e-commerce** | public | `main` | 2026-10-08 | ❄️ 2026-10-26 to'xtatilgan (server xarajati); kod bor | Boshqa do'konlarga taklif |
| **Organick_org** | public | `master` | 2026-09-29 | ✅ Jonli | Tayyor |
| **mythos-uzbek-ai** | private | `main` | 2026-10-30 | 🚧 E0 ✅: 104 savollik baholash to'plami, o'z modeli 0/104 (repo `docs/REJA.md` E0–E3) | E1 — API asosida (kalit egasidan) |
| **learning-datacenter-tc-project** | private | claude/… | 2026-10-30 | 🚧 Faza 0–2 merge (jadval, davomat, baholar — PR #2–#4); mijozga o'rnatilmagan | Faza 3 — moliya (egasi aytganda) |
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
- **Ishchi sessiyalar (egasi qarori, 2026-10-25):** nazoratchi ochgan har ishchi promptiga
  shart qo'yiladi — ish tugasa hisobot oxirgi qatori: «✅ Tugatdim — men endi keraksizman, bu
  sessiyani arxivlashingiz mumkin.» Shu qatorni ko'rgan sessiyalarni egasi o'zi arxivlaydi;
  nazoratchi faqat egasi so'raganda arxivlaydi.
- **2026-10-29 (egasi qarori):** referal akkaunt 1 — abdullohkhan akkauntini ulab, kompyuterdagi
  70+ loyihani yuklash (band). Referal akkaunt 2 — 0/3/4-darajaning to'siqsiz kod ishlari, keyin
  5–6-daraja (`learning-datacenter-tc-project`, `mythos-uzbek-ai` dan boshlab). Asosiy akkaunt —
  1–2-daraja; freelance alohida sessiyada (2026-10-28).
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
| 4 | **atoyo-e-commerce** | ❄️ to'xtatilgan 2026-10-26 (Firebase o'chirilgan, 30 kunda tiklash mumkin) | Avval ma'lumot eksporti; keyin: repo `docs/AUDIT-ISHLARI.md` (16-band — 3D model) |
| 5 | **Organick_org** | ✅ jonli | Tayyor; faqat xato chiqsa |
| 6 | **Abdulmajidkhan007** (profil) | ✅ | Har loyiha o'zgarganda `docs/<repo>.md` + sana |
| 7 | **portfolio-3d** | ✅ jonli | Aloqa formasi Blaze'ni kutadi |
| 8 | **suhbat** | 🚧 0–4c-1 fazalar `main` da, veb Railway'da jonli, relizlar v0.1.0–v0.6.0 chiqarilgan (`docs/suhbat.md`) | Repo `docs/REJA.md` → "Keyingi sessiya uchun"; telefonda va Railway'da sinash |
| 9 | **uzbek-tg** | 🚧 boshlangan: TDLib ulangan, 2-faza UI katta qismi yozilgan | 3-faza (ghost mode) kodi merge (2026-10-25); egasi APK'da `docs/SINOV-ROYXATI.md` + ghost sinovini qiladi |
| 10 | **bot-factory** | 🚧 Faza 1–5 (2026-10-25), deploy fayllari tayyor | Egasi: Railway deploy (`docs/DEPLOY.md`); keyin Faza 6 — premium (HR bot, AI FAQ, katalog) |

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
- [ ] KidsWear: Faza 6 admin amallarini vebda sinash; Faza 7 PR #19 ni ko'rib merge qilish
- [ ] bot-factory: Railway'ga deploy — repo `docs/DEPLOY.md` (Postgres, Variables, domen, tekshiruv ro'yxati);
      zaxira uchun Actions secret'lari `BACKUP_DATABASE_URL`, `BACKUP_PASSPHRASE`; `MASTER_KEY` ni parol menejerida saqlash
- [ ] bot-factory: Stars narxini o'zgartirishdan oldin — eski avto-yangilanuvchi obunalar (PR #3 izohi)
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

*Oxirgi yangilanish: 2026-10-30*
