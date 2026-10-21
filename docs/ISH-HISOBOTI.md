# Ish hisoboti — 2026-09-18

Bu sessiyada nima qilingani, nima qilinmagani va nima tekshirilishi
kerakligi. Rostini yozish uchun — bo'rttirmasdan.

---

## 1. Profil repo (`Abdulmajidkhan007/Abdulmajidkhan007`)

`CLAUDE.md` dagi **BIRINCHI VAZIFA** bajarildi.

| Bajarildi | Fayl |
|---|---|
| Tuzilish yaratildi | `docs/` |
| Shablon yozildi | `docs/SHABLON.md` |
| Profil sahifasi | `README.md` |
| To'liq sahifa × 5 | `telegram-bots`, `atoyo-e-commerce`, `learning-datacenter-tc-project`, `portfolio-3d`, `web-3d` |
| Qisqa sahifa × 6 | `rn-r-e-commerce`, `go-uz`, `ios-asistent`, `countlist`, `lumina`, `DevCraft-AI` |
| Rezyume | `docs/REZYUME.md` |

**Qoidalarga rioya:**
- README dagi barcha ichki havolalar **to'liq URL** — profil sahifasida
  nisbiy havolalar ishonchsiz hal bo'ladi
- JavaScript ishlatilmadi; faqat Markdown jadval, badge va `<img>`
- Holat faqat uch qiymatdan: ✅ / 🚧 / ❄️ — "Rejalashtirilgan" yo'q
- Jadval ✅ lardan boshlanadi
- Repoda birorta kalit, token yoki `.env` yo'q
- `first-bot`, `asistent-bot`, `portfolio-builder` — bo'sh, README ga kiritilmadi

**Yopiq repolar** (`learning-datacenter-tc-project`, `portfolio-3d`, `web-3d`,
`DevCraft-AI`) jadvalda 🔒 belgisi bilan, havolasiz berildi — yopiq repoga
havola bosgan odam 404 ko'radi, bu havolasizlikdan yomonroq.

---

## 2. `telegram-bots` repo

Branch: `claude/xulosa-bot-tuzatish-atoyo-rag`

### `xulosa-ai-bot` — 3 ta tuzatilgan bug

1. **Broadcast 10 kishidan narisiga bormasdi.** `get_all_users_list()` admin
   panelda ko'rsatish uchun `LIMIT 10` bilan yozilgan, broadcast esa o'shani
   ishlatardi. Limitsiz `get_all_user_ids()` qo'shildi.
2. **Bazada yo'q foydalanuvchi kunlik limitni cheksiz aylanib o'tardi.**
   `check_user_access()` uni ro'yxatga olmasdan `True` qaytarardi.
3. **Guruhga har yangi a'zo kirganda adminga soxta xabar kelardi.**
   `event.user_added` har qanday a'zo uchun rost bo'ladi — endi qo'shilgan
   ID botning o'ziniki ekani tekshiriladi.

**Tekshiruv:** `test_database.py` — 4 ta regressiya testi. Eski kodda 2 tasi
yiqiladi, tuzatishdan keyin hammasi o'tadi (`CLAUDE.md` talabi: test avval
yiqilishi kerak edi).

### `atoyo-rag-bot` — yangi bot

Firestore katalogi ustida RAG savdo maslahatchisi. Asosiy tuzatishlar
(oldingi qoralama koddan):

| Muammo | Yechim |
|---|---|
| Inglizcha embedding o'zbekcha so'rovni tushunmasdi | Ko'p tilli model; qo'lda yozilgan kalit so'z "tayoq" lari olib tashlandi |
| `similarity_search` doim `k` ta natija qaytarardi → "salom" ga ham mahsulot forward qilinardi | Ball chegarasi (`RELEVANCE_THRESHOLD`) |
| Sinxron Gemini chaqiruvi butun botni bloklardi | `asyncio.to_thread` + `genai` ning `aio` interfeysi |
| `sync_db.py` har ishga tushganda katalogni ikkilantirardi | Eski kolleksiya o'chiriladi |
| `split("]")` javob matnini qirqardi | LEAD regex bilan ajratiladi |
| Mijoz o'zi soxta lid yubora olardi | Telefon formati tekshiriladi |
| 4096 belgidan uzun javob yuborilmasdi | Xabar bo'laklarga bo'linadi |
| Xotiradagi dict cheksiz o'sardi | Suhbat tarixi SQLite da |
| Model nomi kodda qattiq yozilgan edi | `.env` dan olinadi va **startda mavjudligi tekshiriladi** |
| Deploy `nohup` bilan Termux da edi | `Dockerfile` + `docker-compose.yml` (bot + n8n) |

**Tekshiruv:**
- `test_text_utils.py` — 13 ta test (LEAD parsing, telefon, xabar bo'lish)
- `npm run check` — 19 pass, 0 fail, kalit topilmadi
- `main.py` haqiqiy `aiogram` bilan import qilindi; rate limiter va suhbat
  tarixi ishlashi tekshirildi

**Tekshirilmagan:** bot to'liq jonli ishga tushirilmadi — buning uchun
Telegram tokeni, Gemini kaliti va Firestore hisobi kerak. Birinchi ishga
tushirishda `python3 sync_db.py` dan boshlang.

---

## 3. Rezyume

`docs/REZYUME.md` — tekshirilgan faktlar asosida qayta yozildi.

**Tuzatilgan eng jiddiy xato:** GitHub havolasi `github.com/Abdullohkhan` edi —
bunday akkaunt yo'q, HR 404 ko'rardi. To'g'risi: `github.com/Abdulmajidkhan007`.

**Olib tashlangan da'volar** (repolarda izi topilmadi): OpenAI API,
LlamaIndex, FAISS, Bitrix24, `Organick` loyihasi.

**Qo'shilgan loyihalar** (bor edi, lekin rezyumeda yo'q edi): `telegram-bots`
monorepo, `xulosa-ai-bot`, `atoyo-ai-bot`, `countlist`, `ios-asistent`.

---

## 4. Tasdiqlanishi kerak

Quyidagi faktlar `CLAUDE.md` dagi ro'yxatdan olindi, lekin repolar bu
sessiyada ochilmagani uchun kod bilan solishtirilmadi:

- [x] `countlist` da **Whisper** ishlatilganmi — **HA**, tasdiqlandi
      (`bot/services/voice.py`, OpenAI `whisper-1`, `language="uz"`)
- [ ] `learning-datacenter-tc-project` — 46 jadval, Prisma 7 versiyasi
- [ ] `portfolio-3d` — Lighthouse 97 / 65–71 raqamlari
- [ ] `go-uz` — 9 ta umumiy paket
- [ ] `rn-r-e-commerce` — Phase 8a holati
- [x] `atoyo-e-commerce` — mahsulot soni **aniqlandi**: 10 000+ emas. Katalogni
      adminlar to'ldirmoqda, 2026-10-03 holatiga ~500 ta mahsulot kiritilgan.
      Rezyume va docs tuzatildi.
- [ ] `ios-asistent` — qaysi LLM va qaysi STT ishlatilgan

Har repo ochilganda `docs/<repo>.md` yangilanadi va sana qo'yiladi
(`CLAUDE.md` qoidasi).

---

## 5. Keyingi qadamlar (tavsiya)

1. **Default branch larni `main` ga o'tkazing.** Ko'p repoda u hozir
   `claude/...` deb nomlangan — HR birinchi ko'radigan narsa shu.
2. **`portfolio-3d` va `learning-datacenter` ni oching.** Rezyumedagi eng
   kuchli texnik da'volar aynan shu ikkisida, lekin ular tekshirilmaydi.
3. **`atoyo-rag-bot` ni haqiqatan ishga tushiring** va n8n oqimini yarating —
   shundagina rezyumedagi "RAG" va "n8n" da'volari kod bilan tasdiqlanadi.

---

*Yozilgan: 2026-09-18*

---

## 6. 2026-09-21 — qo'shimcha ish

### Repolar tekshiruvi

12 ta alohida bot reposi monorepodagi nusxasi bilan solishtirildi (fayl
nomlari va hajmlari bo'yicha):

| Repo | Natija |
|---|---|
| anonim-bot, quiz-bot, malware-bot, gemini-qa-bot, idfinder-bot, arxiv-topadi-bot, killspam-bot, countlist-ts-node | monorepoda AYNAN bor (README +66 bayt: muallif qatori) |
| xulosa-ai-bot | monorepodagi nusxasi YANGIROQ (testlar va tuzatishlar bilan) |
| countlist | monorepoda YO'Q edi → `bots/countlist-python` sifatida qo'shildi |
| first-bot | 11 baytlik README, bot yo'q |
| asistent-bot | repo umuman bo'sh, bitta ham commit yo'q |

### ⚠️ Xavfsizlik hodisasi

`countlist` reposining `SETUP_NO_DOCKER.md` faylida **haqiqiy Telegram bot
tokeni** va `SECRET_KEY` ochiq yozilgan. Repo public. Monorepodagi nusxada
ikkalasi ham namuna qiymatga almashtirildi, lekin **token `countlist`
reposining git tarixida qolmoqda** — BotFather'da bekor qilinishi shart.

### main branchlar

32 ta repodan 20 tasida `main` yo'q edi — yaratildi (har birining eng
yangi default branchidan). Default branchni almashtirish repo sozlamasi,
uni egasi o'zi qiladi.

`asistent-bot` bo'sh bo'lgani uchun unda branch yaratib bo'lmaydi.

### portfolio-3d

`main` yaratildi. CSP inline skriptni bloklayotgani tuzatildi (hash +
invariant test). Netlify'da production branch `main` ga o'tkazilishi kerak.

---

## 7. 2026-10-04 — profil va rezyume yangilandi

### Profil README

- Sarlavha: **Frontend Engineer** (rezyume bilan bir xil).
- Loyihalar faqat shular, shu tartibda: atoyo-e-commerce (asosiy havola —
  atoyo.uz), telegram-bots, portfolio-3d, learning-datacenter, lumina,
  rn-r-e-commerce, go-uz.
- telegram-bots ostida Telegram'dagi 10 ta ochiq bot username bilan jadvalda
  (9 tasi shu repoda, @Atoyo_uz_bot — atoyo-e-commerce ichida).
- web-3d, ios-asistent, countlist, DevCraft-AI va "O'quv loyihalari"
  bo'limi README dan olindi; ularning docs sahifalari o'chirildi (git
  tarixida qoladi). `countlist` reposi GitHub'da endi yo'q — havola buzuq edi.

### Stack: faktlar bo'yicha tuzatishlar

- **Expo hech qayerda yo'q.** rn-r-e-commerce (RN 0.85), lumina (RN 0.79) va
  go-uz (RN 0.79) — bare React Native CLI. Profil "Next.js · Expo" deb
  yozgandi; rn-r-e-commerce aslida Vite + React veb + RN mobil.
- Eskirgan major versiyalar yozilmadi (npm'da tekshirildi, 2026-10-04):
  React Native 0.76/0.85 (oxirgisi 0.87), Electron 33 (44), NestJS 11 (12),
  Expo SDK 53 (57). Hozirgi major'lar qoldi: React 19, Next.js 16,
  Tailwind v4, Vite 8, Redux Toolkit 2, MUI 9, Prisma 7, SQLAlchemy 2, aiogram 3.

### Rezyume

`REZYUME.md` va PDF: Atoyo stack qatoridan eski versiyalar olindi,
telegram-bots qismiga ochiq botlardan to'rttasi havola bilan qo'shildi.
PDF portfolio-3d dagi "Rezyumeni yuklab olish" tugmasiga (`public/resume.pdf`)
qo'yildi. Profil reposiga PDF qo'yilmaydi.

*Yozilgan: 2026-10-04*

### Qo'shimcha (o'sha kun)

- **Organick_org** README ga 2-o'ringa qo'shildi (✅, jonli sayt bor), to'liq
  `docs/organick_org.md` koddan yozildi: admin claim, idempotent zaxira,
  server tomonda reyting, Telegram + IP-limit, psevdo-email himoyasi.
- **learning-center-front** (nurulloh-coder-dev) learning-datacenter o'rniga
  qo'yildi — jamoaviy loyiha, men frontend tomonida. `docs/learning-center-front.md`
  da mening hissam commit tarixidan olindi (75 ta commit). learning-datacenter
  docs sahifasi olindi.
- @Atoyo_service_bot → `atoyo-rag-bot` bog'lanishi egasi tomonidan tasdiqlandi.

---

## 8. 2026-10-06 — xizmatlar sayti

- `site/index.html` — bir sahifali, tez yuklanadigan sayt (framework'siz, tashqi
  skript yo'q, ~19 KB): xizmatlar, ishlarim (atoyo.uz, Organick, botlar), ish
  tartibi, savollar, ariza formasi. Mobil (390px) va desktopda gorizontal
  scroll yo'q, dark mode bor — Playwright bilan tekshirildi.
- Ariza formasi backend'siz: matnni yig'ib `t.me/Abdulloh_77700?text=...` ni
  ochadi va matnni nusxalaydi. Bot tokeni yoki server kerak emas.
- Hosting: GitHub Pages, `.github/workflows/pages.yml` (`site/**` o'zgarsa
  avtomatik joylaydi). Narx ataylab yozilmagan — egasi bozorni ko'rib qo'yadi.

*Yozilgan: 2026-10-06*

---

## 9. 2026-10-08 — hamma repolar tekshiruvi

- 20 ta repo xaritasi va tugatish navbati: `docs/REJA.md`.
- atoyo-e-commerce: 8–15 audit bandlari kodda tekshirilib BAJARILDI deb
  belgilandi; README/PLAY-STORE dagi "10 000+ mahsulot" da'vosi olindi;
  ilova relizi 1.5.2 ga moslandi.
- telegram-bots: 13 ta bot (kino-bot), KALI-LINUX va REJA yangilandi.
- portfolio-3d: sitemap/robots Netlify manzili, Atoyo havolasi tuzatildi
  (+ regressiya testi, 428 test yashil).
- lumina, rn-r-e-commerce, chat-app: `main` default branch kodiga yetkazildi.
- Profil: go-uz endi private — README da 🔒; telegram-bots sahifasi 13 bot,
  CI bor. Pages: GitHub'ning `static.yml` shabloni butun repoyni joylab
  sayt manzilini buzgan edi — olib tashlandi.

## 10. 2026-10-09 — portfolio jonli

- portfolio-3d Firebase'ga chiqdi: https://abdulmajidkhan-portfolio.web.app.
  Billing hisobining loyiha limiti to'lgani uchun Blaze ulanmadi — workflow'ga
  `FIREBASE_PLAN=spark` rejimi qo'shildi (faqat Hosting); forma bu rejimda
  Telegram havolasini ko'rsatadi va soxta "yuborildi" demaydi.
- Rezyume: saytdagi PDF 2026-10-04 dagisi edi (12 bot, portfolio havolasiz).
  Manba endi portfolio-3d `scripts/resume/resume.html`; PDF bilan hash
  saqlanadi va test HTML↔PDF, email, Telegram, bot sonini tekshiradi.
- Sayt: statistika halol raqamlarga (oldin 25 loyiha / 7 mijoz — tasdiqsiz),
  atoyo kartasida "10 000+" o'rniga broadcast, Telegram Bots kartasi, har
  kartada `docs/<repo>.md` havolasi, email abdullohhacker007@gmail.com.
- Profil README: portfolio ✅ jonli havola bilan, lumina veb havolasi.
  REJA navbati: rn-r-e-commerce va parallel lumina.

## 11. 2026-10-09 (davomi) — KidsWear, Lumina, tozalash

- KidsWear: dizayn buzilishi (MUI `@layer` tartibi), til, bosh sahifa; keyin
  1-guruh funksiyalar — aloqa, blog, promo-kod, hudud bo'yicha yetkazish,
  sevimlilar, admin hisobot. Qoidalar pul hisobini qayta tekshiradi.
- Lumina: admin `email_verified`, `activityLogs` yopildi; APK har push'da
  GitHub Release (`lumina.apk`); shaffof menyu (`bg-surface` aniqlanmagan);
  social-app'dan Welcome ekrani ko'chirildi, social-app o'chirildi.
- chatapp qoladi, chat-app o'chiriladi (mock).
- Portfolio: fotorealistik AI portret olib tashlandi, 3D avatar.
- telegram-bots: xulosa-ai-bot o'chirilgan gemini-1.5-flash ni chaqirardi —
  GEMINI_MODEL ga o'tkazildi.

## 12. 2026-10-10 / 11 — KidsWear mobil, xatolar, Lumina, chat loyihalari

**KidsWear (rn-r-e-commerce)**
- Mobil ilovaga 1-guruh: sevimlilar, blog, aloqa, promo-kod, hudud narxi,
  admin (hisobot, xabarlar, blog, promo, yetkazish). APK release CI.
- APK build xatolari: Groovy versionCode, monorepo'da hermesc yo'li, release
  yuklash qayta urinishi; gradle xatosi annotatsiyaga chiqadi.
- Ilova ochilishi bilan yopilardi: `google-services.json` yo'q → `messaging()`.
  CI endi Android config'ni loyihadan oladi, debug SHA-1 qo'shadi, push
  himoyalandi. v1.0.5 da ham yopilgani aytildi → v1.0.7 ga crash ekrani
  (:crash jarayoni, "Nusxa olish") va `onCreate(null)` qo'shildi; sabab
  egasining skrinshotini kutmoqda.
- Vebda Google kirish umuman ishlamagan: `initializeAuth` ga
  `browserPopupRedirectResolver` berilmagan, xato yutilardi — tuzatildi.
- Admin hech kimga berilmagan edi → deploy egasini (faqat tasdiqlangan
  email) admin qiladi; berildi. Yetkazish narxlari bo'sh bo'lsa boshlang'ich
  qiymat yoziladi (admin o'zgartiradi).

**Lumina**
- Veb uch tilda (uz/en/ru, 253 matn); video yuklash + bitta videoli post
  `reels/` ga (avval Reels'ni hech narsa yozmagan); aloqa formasi Firestore +
  admin Messages; landing telefoni ilovaning haqiqiy Feed ko'rinishida,
  Admin → Landing'dan skrinshot (Storage o'rniga Firestore — CI storage
  qoidalarini deploy qila olmaydi); veb ilova tab bar ilovadagidek.
- Ilovada Google `DEVELOPER_ERROR`: upload key SHA-1 Firebase'da yo'q edi →
  CI har build'da ro'yxatga qo'shadi. Qoidalar emulyatorda 26/26.

**Chat loyihalari**
- Ikkalasi sandbox'da ishga tushirilib skrinshot olindi. chatapp'da
  birinchi xabardan keyin yiqilish (Timestamp) va buzuq lock fayl topildi.
- Qaror: chat-app → `uzbek-tg` (Telegram mijozi, RN CLI + TDLib, ghost mode),
  chatapp → `suhbat` (o'z messenjeri, monorepo, NestJS + PostgreSQL +
  WebSocket). Ikkala repoda `CLAUDE.md` + `docs/REJA.md`. Ish alohida
  sessiyalarda.

**Navbat** — `docs/REJA.md` 3-bo'lim (egasi tasdiqlagan tartib).

*Yozilgan: 2026-10-11*

## 13. 2026-10-21 — hujjatlar kod bilan solishtirildi

Hamma 20 ta repoda branch'lar git'dan tekshirildi (natija — `docs/REJA.md` 1–2
bo'limlar). 9 ta repoda hujjat koddan orqada qolgan joylar tuzatildi:
atoyo (LOYIHA-HAQIDA: sentyabr–oktyabr), Organick (4 ta Cloud Function,
psevdo-email blokirovkasi — PR #31), KidsWear (APK 1.0.9 ochiladi), Lumina
(admin to'lqini, REJA bandlari), portfolio-3d (README: jonli manzil, forma
Blaze kutadi), telegram-bots (REJA jadvali, 15 bot), suhbat (4a/4b PR holati),
uzbek-tg (repo public, 2026-10-15 ishlari, keyingi qadam), profil (REJA, 13→15 bot).

*Yozilgan: 2026-10-21*

## 14. 2026-10-21 — freelance: xizmatlar sayti, Atoyo keysi, README

`docs/REJA.md` 0-bo'lim («Asosiy yo'nalish — pullik ish») birinchi haftasi:
- `docs/KEYS-ATOYO.md` — 1 sahifalik keys (muammo → nima qilindi → natija).
  Faktlar atoyo-e-commerce README va `docs/LOYIHA-HAQIDA.md` dan. Natija
  raqamlari yo'q — `<!-- egasi to'ldiradi -->` bilan belgilangan.
- `site/index.html` — 3 paket (Telegram bot · do'kon sayti + Telegram · landing):
  kimga, nima kiradi, taxminiy muddat, isbot havolalari; narx yozilmagan.
  Atoyo keysi bo'limi, 10 ta ochiq bot, ish tartibi (qamrov → 50% → bosqichlar →
  topshirish + 2 hafta bepul tuzatish). Ariza formasida paket tanlovi, karta
  tugmasi paketni oldindan tanlaydi. Tema almashtirgich (tizim temasi + qo'lda).
- `README.md` — eng tepada «Buyurtma qabul qilaman» qatori.

Qolgan (egasi): narxlar, keys natija raqamlari, do'kon egasining sharhi.

Keyin (egasi fikri bo'yicha): sarlavha va hamma matn qisqartirildi, oddiy tilga
o'tkazildi; isbot havolalari "chip" ko'rinishida; keys alohida sahifa
`site/keys-atoyo.html` (Telegram ichida tez ochiladi). @Atoyo_service_bot hozir
to'xtagan (faqat lokal) — sayt, README va keysdan olib turildi.

*Yozilgan: 2026-10-21*
