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
