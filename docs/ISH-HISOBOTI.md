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

**Davomi (2026-10-21):** server va domen ijrochida, xarajati oylik xizmatga
qo'shiladi (sayt FAQ, 6-bosqich). Ariza formasi bot orqali guruhga yuborishga
tayyorlandi: `ariza-worker/` (Cloudflare Worker, token secret'da). Egasi deploy
qilib `ARIZA_URL` ni bermaguncha forma Telegram chatini ochadi.

## 15. 2026-10-22 — navigatsiya sessiyasi xulosasi

**Faol sessiyalar:**
- KidsWear nazoratchi: `session_01Jyx7chtRj4d8os4JJWx3Hr` — Faza 5 (sharhlar) dan keyin TO'XTAYDI
  (haftalik limit). Faza 1–4 ✅ (PR #7, #9, #11, #13). Davomi: `rn-r-e-commerce/docs/FAZALAR.md`.
- marshrutchi-bot: `session_012VfbRZHTamn4uW54qinh6h` — Faza 0 + MVP. Talablar: `docs/MARSHRUTCHI-BOT.md`.
- Instagram avto-javob A (qo'llanma boti, `telegram-bots/bots/insta-avtojavob-bot`, Sonnet):
  `session_01XRjFeprbgm5JpDbaz6fJjM` — egasi Chatplace.txt ni shu sessiyaga yuboradi.
- Instagram avto-javob B (reja, `telegram-bots/docs/INSTA-AVTOJAVOB-B.md`, Sonnet):
  `session_01TNNRDdY9HkZK1NhEvVTJVX`.
- KidsWear: Faza 5 ✅ (PR #15), nazoratchi to'xtadi — Faza 6 haftalik limit yangilangach.

**Navbat (egasi qarori):** Faza 5 tugagach — Instagram AI avto-javob: A (qo'llanma boti,
`telegram-bots`, narxlar REJA 0-bo'limda) va B (Meta API, o'z mahsulot) — B uchun repo joyi
egasi bilan kelishiladi. Egasi Chatplace.txt faylini A sessiyasiga beradi.

**Egasi qiladi:** KidsWear admin → to'lov sozlamalari → karta + "Kartaga o'tkazma"ni yoqish;
Faza 2, 3 ishchi sessiyalarini qo'lda arxivlash; postlar (`posts/`) — qoralama, egasi tekshiradi.

**Limit:** shu navigatsiya sessiyasi konteksti ~630k tokenga yetdi — har xabar qimmat. Yangi
navigatsiya sessiyasi: "CLAUDE.md, docs/REJA.md va ISH-HISOBOTI.md 15-bo'limni o'qi".

*Yozilgan: 2026-10-22*

**Holat yangilandi (2026-10-22 kechqurun, sessiyalardan tekshirildi):**
- KidsWear: Faza 1–5 `main` da (PR #16), ishchi sessiyalar arxivlandi. Limit yangilangach
  nazoratchiga "Faza 6 dan davom et".
- marshrutchi-bot: Faza 0 + MVP PR ochiq (`claude/faza-0-1`), CI GitHub billing sababli to'xtagan.
- Insta A: `insta-avtojavob-bot` main'da (telegram-bots PR #56), 38 test yashil; haqiqiy
  Telegram'da sinalmagan (token yo'q).
- Insta B: faqat reja (`docs/INSTA-AVTOJAVOB-B.md`, PR #55); repo joyi va narx — egasi.
- **Yangi — countlist nazoratchi:** `session_01DFgdWZcdXTkRyu6bFzSCsK` (telegram-bots, Opus).
  Raqobatchi "Shaxsiy Moliya" boti bilan solishtirish (ovoz → matn, bitta xabarda ko'p
  tranzaksiya, hisoblar tanlovi, transfer) + Free/Plus/Pro/Max paketlar rejasi (AI/STT bepul
  limiti tugagani uchun — pullik limit foydalanuvchidan qoplanadi). Kichik ishni o'zi qiladi,
  kattasiga ishchi sessiya ochadi. Narxlarni egasi tasdiqlaydi.

## 16. 2026-10-25 — email almashtirildi

Egasi qarori: yagona email — `abdulmajidsharipovlc@gmail.com` (oldingi
`abdullohhacker007@gmail.com` o'rniga). Profil repo: README, `docs/REZYUME.md`.
portfolio-3d: `src/data/content.ts`, `scripts/resume/resume.html`, `public/resume.pdf`
qayta yig'ildi, testdagi "eskirgan ma'lumot" ro'yxati yangilandi; 451 test yashil.
Yuqoridagi tarixiy yozuvlardagi eski email o'zgartirilmadi (o'sha kungi holat).

**Davomi:** rezyume "Ideal rezyume formulasi" (Mohirdev) bo'yicha qayta tuzildi: Ish tajribasi
(Learning Center startapi, mustaqil ishlash), Ta'lim, Qo'shimcha (tillar, ish formati);
rus so'zlari (kartochka, optom) o'zbekchaga almashtirildi; shrift Times New Roman; 2 sahifa.
PDF nomi `Abdulmajid_Sharipov_Frontend_CV.pdf`, eski `/resume.pdf` 301 bilan yo'naltiriladi.

*Yozilgan: 2026-10-25*

---

## 17. 2026-10-25 — 4-daraja nazoratchi sessiyasi (referal akkaunt 2)

| Repo | Qilindi | Holat (rost) |
|---|---|---|
| rn-r-e-commerce | Faza 6 — katalog boshqaruvi (PR #17, Sonnet ishchi), FAZALAR (PR #18) | CI yashil; admin UI brauzerda/telefonda sinalmagan; Faza 7 ishchida (Opus, egasi merge qiladi) |
| lumina | Hisoblagichlar ±1 + yangi hujjat 0 dan (PR #6) | Emulyatorda 56/56; qoidalar jonli bazaga deploy bo'ldi; ilovada sinalmagan. `FIREBASE_TOKEN` yo'qligi sababli indeks (409) va Storage (403) deploy'i yiqiladi |
| uzbek-tg | Telefonda sinash ro'yxati (PR #11); ghost mode (PR #12, Sonnet ishchi) | Kod yozildi, telefonda sinalmagan |
| bot-factory | Faza 3: anon, guard, «Mening botlarim» (PR #2, Sonnet ishchi) | Lokal: 82 test, ruff, mypy, skaner toza; CI runner olmayapti (billing) — kod sababi emas; haqiqiy botda sinalmagan |
| portfolio-builder | Egasi qarori: g'oyalar qutisi, 2026-12-11 dan keyin | — |

Postlar (qoralama): `posts/2026-10-25-lumina-hisoblagichlar.md`,
`…-rn-r-e-commerce-katalog-boshqaruvi.md`, `…-uzbek-tg-ghost-mode.md`, `…-bot-factory-faza-3.md`.
Egasi qiladiganlar — `docs/REJA.md` 4-bo'lim.

*Yozilgan: 2026-10-25*

## 18. 2026-10-26 — atoyo.uz to'xtatildi

Egasi qarori: server xarajati (Firebase Blaze ≈10–13$/oy; Google hisobida ≈30$ qarz) sababli
atoyo.uz to'xtatildi, Firebase `atoyo-uz` loyihasi o'chirildi (30 kunda tiklash mumkin).
Do'kon egalari xarajatni ulashmadi. Kod o'zgarishsiz; reja — boshqa do'konlarga taklif.
Yangilandi: README, `docs/atoyo-e-commerce.md` (❄️ + to'xtatilish bo'limi), `docs/REJA.md`,
`docs/REZYUME.md`, xizmatlar sayti (`site/`), keys, vizitka; portfolio-3d: statistika
(jonli sayt 6→5), atoyo kartasi, rezyume PDF. Vaqtincha sahifa: `site/atoyo-pauza/`.
Post qoralamasi: `posts/2026-10-26-atoyo-e-commerce-toxtatildi.md`.
Qoldi (egasi): Firebase tiklab ma'lumot eksporti, ≈30$ to'lov, Ahost'da domenni
vaqtincha sahifaga yo'naltirish.

**Tuzatish:** PR #13 `main` ga Strong Junior, gist uslubidagi README va `docs/MUQOVA-XATI.md`
dan OLDINGI holatda qo'shilgan ekan — bu uchtasi PR #20 orqali `main` ga tushadi.
KANALLAR, MIJOZ-JARAYONI va MUQOVA-XATI dagi atoyo matnlari ham shu PR'da to'g'rilandi.

*Yozilgan: 2026-10-26*

**Aniqlashtirish (2026-10-26, egasi):** atoyo.uz ni to'xtatishning ASOSIY sababi — do'kon
xodimlarining saytni boshqarishga vaqti yo'qligi; ikkinchisi — server uchun to'lash imkoni
yo'qligi. Repo private qilindi, shuning uchun README, rezyume, sayt, keys, muqova xatidan
repo havolasi olindi ("repo private — so'rasangiz ko'rsataman"). `docs/atoyo-e-commerce.md`
to'xtatilish bo'limi shunga yozildi.

## 19. 2026-10-27 — umumiy holat (yangi navigatsiya sessiyasi shundan boshlaydi)

Yangi sessiya: "CLAUDE.md, docs/REJA.md va docs/ISH-HISOBOTI.md 19-bo'limni o'qi".
Eski navigatsiya sessiyasi konteksti 64% ga yetdi — yopiladi.

**Limit qoidasi (egasi):** haftalik limit seshanba 17:00 da yangilanadi; kuniga ≤12%
(7 × 12 = 84%, 16% zaxira). Usage credits o'chiq. Oddiy ishlar — Sonnet, murakkab kod — Opus.

**Referal akkauntlar natijasi (profil repodagi hujjat va postlardan, 2026-10-24…25):**

| Daraja | Loyiha | Qilindi | Holat (rost) |
|---|---|---|---|
| 0 | Insta A (telegram-bots) | Qo'llanma-bot: bepul qadamlar, pullik 7 bo'lim, 7 ta AI shablon, "o'zim sozlab beraman" arizasi; 29 test | Telegram'da ishga tushirilmagan |
| 0 | Insta B (`instagram-avto-javob`, private) | Repo va reja | Faza 0 — Meta Developer + Business Verification (egasi); kod yo'q |
| 0 | countlist | Ko'p tranzaksiya, transfer, paketlar | Narx va API kalit egasidan |
| 3 | marshrutchi-bot | PR #1 lokal tekshirildi | CI — billing |
| 3 | suhbat | 2026-10-25 da push bor | Profil repoda hujjat/post yo'q — aniqlanmagan |
| 4 | rn-r-e-commerce | Faza 6 (katalog boshqaruvi), Faza 7 PR | Faza 7 ni egasi merge qiladi; admin UI telefonda sinalmagan |
| 4 | lumina | Hisoblagichlar ±1 | Emulyatorda 56/56; ilovada sinalmagan; `FIREBASE_TOKEN` yo'q |
| 4 | uzbek-tg | Ghost mode, sinash ro'yxati | Telefonda sinalmagan |
| 4 | bot-factory | Faza 3–5 (Docker, migratsiya, shifrlangan zaxira) | Lokal testlar o'tgan; CI — billing; haqiqiy botda sinalmagan |
| 4 | portfolio-builder | — | G'oyalar qutisi (2026-12-11 dan keyin) |

**Umumiy to'siq:** GitHub Actions billing — marshrutchi, bot-factory CI va portfolio-3d
deploy (yangi rezyume, email, aloqa formasi saytga chiqmagan).

**Freelance (1-daraja) — mijoz qidirish:** Google Maps'dan 11 ta Qo'qon biznesi (sayti
topilmagan, Maps AI xulosasi — tekshirilmagan): qurilish/santexnika/elektro — Prime Elektro
Market, Toyyib santexnika, STROY HOUSE, Megamix (eng kuchli soha, birinchi); Smart Home Kokand;
kiyim — Bursa, Milano Kokand, Premium outlets; restoran — Kabob House, Qoqon Zamin osh, Abu
Dhabi Restaurant. Tartib: Telegram'da alohida, qisqa xabar (umumiy ramka + soha taklifi +
shaxsiy qator), kuniga 3–4 ta; qiziqsa — qo'ng'iroq yoki uchrashuv. Va'da qilinmaydi: 1C,
CRM, sodiqlik tizimi. Tegilmaydi: o'quv markazlari (jamoaviy startap bilan to'qnashadi),
klinikalar. Natijalar `docs/REJA.md` 0-bo'lim mijozlar jadvaliga yoziladi.

**Help Desk (ISHONCH, Qo'qon):** HR qayta qo'ng'iroq qildi. Egasi rasmiy tajriba uchun
ko'rib chiqmoqda. Maosh: e'londagi pastki chegara — 6 mln so'm, sinov davri maoshi va 3–6
oydan keyin ko'rib chiqishni so'rash. Talab bo'shliqlari: Active Directory, 1 yillik
tajriba, o'rta maxsus ma'lumot (HR'dan aniqlash).

**Portfolio aloqa formasi (Worker, Blaze'siz) — egasi qiladi:** Cloudflare akkaunt → Account
ID + API token → profil repo Secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`,
`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`) → "Ariza worker" workflow → portfolio-3d Variable
`CONTACT_URL=https://ariza-worker.<nom>.workers.dev/contact` → Deploy.

**atoyo:** Firebase `atoyo-uz` 30 kunda (≈2026-11-25 gacha) tiklanadi — avval ≈30$ to'lov,
keyin eksport (`docs/atoyo-e-commerce.md`). Ahost domeni — vaqtincha sahifaga yo'naltirish.

**Eski branchlar (keraksiz, o'chirsa bo'ladi):** `claude/insta-avtojavob-post`,
`ccr-b8c07f50-1szuj2`.

*Yozilgan: 2026-10-27*


---

## 20. 2026-10-29 — 0/3/4-daraja to'siqsiz ishlar + 5–6-daraja (referal akkaunt 2)

| Daraja | Loyiha | Qilindi | Holat (rost) |
|---|---|---|---|
| 3 | suhbat | v0.3–v0.5 allaqachon chiqarilgan ekan (profil REJA eskirgan edi). 4c-1 → **v0.6.0 relizi** (PR #29, release workflow ✅). `docs/suhbat.md` noldan yozildi, post | 4c-1 qurilmada sinalmagan |
| 3 | marshrutchi-bot | — | PR #1 egasi merge qilishini kutadi → Faza 2 kutmoqda |
| 4 | rn-r-e-commerce | Faza 6 amallari mobil adminga (PR #20, Sonnet) | CI yashil, PR #19 bilan ziddiyat yo'q; telefonda sinalmagan |
| 6 | learning-datacenter-tc-project | monorepo branch hujjatlari + `docs/REJA.md` main'ga (PR #1); **Faza 0** — ESLint, testlar, toza klonda build, CI (PR #2, Sonnet); **Faza 1** — jadval va davomat (PR #3, Opus) | Toza klonda typecheck/lint/test/build ✅, e2e 36/36 (PostgreSQL 16); pul parse xatosi topilib tuzatildi; mijozga o'rnatilmagan |
| 5 | mythos-uzbek-ai | Tekshiruv: pytest 98 ✅, node ✅, ruff 20 ❌; `docs/REJA.md` (PR #1) — 3 variant | Egasi tanlaydi (tavsiya: muzlatish) |

Usul: kichik ishlar o'zim; KidsWear mobil va CRM Faza 0 — Sonnet, CRM Faza 1 — Opus.
Har PR toza klonda lokal tekshirildi (private repolarda CI billing sababli ishlamaydi —
natija PR izohida). KidsWear #19 va marshrutchi #1 ga tegilmadi.

*Yozilgan: 2026-10-29*

---

## 21. 2026-10-30 — public tayyorligi, KidsWear F8, marshrutchi F2, CRM F2, mythos E0 (referal akkaunt 2)

**Public qilishga tayyorlik** (gitleaks 8.24.3, butun tarix, barcha branch'lar; kod o'zgarmadi):

| Repo | Commit / branch | Kalit skaneri | Tarixda `.env`/kalit fayl | README / hujjat |
|---|---|---|---|---|
| bot-factory | 11 / 5 | 1 topilma — soxta: `tests/test_scan_secrets.py` (`280f5fc2`) skaner testidagi `MASTER_KEY=haqiqiy-uzun-qiymat-123` | faqat `.env.example` (bo'sh) | @Yovuzhackerbot, t.me/Abdulloh_77700 — ommaviy |
| marshrutchi-bot | 3 / 3 (skan vaqtida) | toza | faqat `.env.example` | «Atoyo» — mijoz nomi (README, TALABLAR, misollar); egasining ochiq keysi |
| learning-datacenter-tc-project | 20 / 6 | toza | `.env.example`: faqat lokal dev qiymatlar | standart admin `admin@startupimiz.uz` / `Admin12345` hujjatda — o'rnatishda almashtirish shart |
| mythos-uzbek-ai | 5 / 3 | toza | faqat `.env.example` | toza |

Bekor qilinadigan haqiqiy kalit yo'q; tarixni qayta yozish kerak emas.

| Loyiha | Qilindi | Holat (rost) |
|---|---|---|
| rn-r-e-commerce | PR #19 merge'dan keyin CI/deploy/APK ✅; Faza 8 — FAQ, Yetkazib berish, yagona yetkazish funksiyasi (PR #21, Sonnet) | CI yashil; telefonda sinalmagan |
| marshrutchi-bot | Faza 2 — PostgreSQL, AES-256-GCM, HMAC qidiruv, rollar, jurnal, qarz (PR #2, Opus) | Toza klon + PG16: core 81, i18n 6, bot 22 ✅; Telegram'da sinalmagan; egasiga 4 savol |
| learning-datacenter-tc-project | Faza 2 — baholar, jurnal, uy vazifalari (PR #4, Opus) | Toza klon: shared 102, api 10, e2e 69 ✅ |
| mythos-uzbek-ai | E0 — `ruff.toml` + 20 lint tuzatish, 104 savollik baholash to'plami, `ai_eval.py`, E0–E3 reja (PR #2, o'zim) | O'z modeli 0/104; 103 test ✅ |

Konteyner eslatmasi: marshrutchi'da `turbo` bola jarayonni ishga tushirmaydi (`Exec format error`) — `pnpm -r` ishlatildi.

*Yozilgan: 2026-10-30*

## 22. 2026-10-28 → 31 — navigatsiya sessiyasi (asosiy akkaunt)

**Akkauntlar:** referal 1 — abdullohkhan loyihalarini yuklash; referal 2 — 0/3/4 to'siqsiz
ishlar + 5–6-daraja (promptlar shu sessiyadan). Freelance — alohida Sonnet sessiya (2026-10-28).

| Joy | Qilindi | Holat (rost) |
|---|---|---|
| instagram-avto-javob | REJA 7.1 — prompt injection: 5 qoida, F2 da ≥20 hujum testi | Faqat reja, kod yo'q |
| Profil repo | README'ga suhbat (🚧); REJA: akkauntlar taqsimoti, OSAI va 5 ko'nikma xaritasi (g'oyalar qutisi); post: prompt injection | ✅ |
| Rezyume | `docs/REZYUME-EN-AI.md` + 1 sahifali PDF (inglizcha, AI-native) — EPAM referral uchun; 3 yil talab ochiq aytildi | ✅ |
| rn-r-e-commerce, marshrutchi-bot | PR #19 (Faza 7) va PR #1 (Faza 0–1) — egasi aytgani bilan merge | ✅ merge |
| Organick_org | PR #32: banner kontrasti, tugma matni bir qatorda. PR #33: deploy 2026-10-21 dan beri yiqilardi — `functions/.env` (PHONE_AUTH_DOMAIN) va Node 20 → 22 | ✅ deploy (2026-10-30), egasi saytda ko'rdi |
| ariza-worker + portfolio-3d | Worker birinchi marta deploy (Secrets egasidan); portfolio `CONTACT_URL`; forma ishlaydi — egasi Telegram'da xabar oldi. Keyin ixtiyoriy telefon va Telegram username (PR #6, #7) | ✅; telefon/username bilan jonli sinov — egasida |

**Topilma:** public repolarda Actions ishlaydi — billing faqat private repolarga ta'sir qiladi.

**Shaxsiy (repo emas):** noutbuk yangilandi (RAM 8 GB, SSD 512 GB; 1,755 mln), Xubuntu o'rnatildi.

*Yozilgan: 2026-10-31*
