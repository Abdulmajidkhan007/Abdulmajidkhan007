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

- [ ] `countlist` da **Whisper** ishlatilganmi
- [ ] `learning-datacenter-tc-project` — 46 jadval, Prisma 7 versiyasi
- [ ] `portfolio-3d` — Lighthouse 97 / 65–71 raqamlari
- [ ] `go-uz` — 9 ta umumiy paket
- [ ] `rn-r-e-commerce` — Phase 8a holati
- [ ] `atoyo-e-commerce` — 10 000+ mahsulot raqami
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
