# Mythos Uzbek AI

> O'zbek tilidagi shaxsiy AI yordamchi (kiberxavfsizlik + dasturlash): noldan yozilgan Transformer,
> mobil PWA interfeys, Termux'da telefonda ishlaydi; Gemini — ixtiyoriy.

**Repo:** yopiq (private) · **Jonli:** yo'q (lokal, `python3 ai_web.py`) · **Holat:** 🚧 Qurilmoqda (tajriba)

---

## Muammo

Internet va kalitsiz ishlaydigan o'zbekcha yordamchi qurish, va shu yo'lda til modeli qanday
ishlashini noldan o'rganish. Shaxsiy/o'quv loyihasi.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Model | PyTorch — Decoder-only Transformer (0.81M–42.2M parametr presetlari), so'z va bayt-BPE tokenizator |
| Server | Flask, SSE oqim, RAG (DuckDuckGo) |
| Frontend | Vanilla JS PWA (CDN'siz, oflayn qobiq) |
| Ixtiyoriy | Gemini API (kalit faqat env'da, sarlavhada) |

## Arxitektura: asosiy qarorlar

### 1. O'z modeli standart, tashqi API ixtiyoriy
**Nega:** maqsad — kalit va internetsiz ishlash; Gemini faqat foydalanuvchi tanlasa chaqiriladi.

### 2. Har qaror o'lchov bilan
**Nega:** `<pad>` bilan to'ldirish aniqlikni 92% → 56% ga tushirgani o'lchangan va qoidaga aylangan.

### 3. Baholash to'plami — taraqqiyotning yagona o'lchovi (2026-10-30)
**Nega:** «aqlliroq bo'ldi» degan gap o'lchovsiz yolg'on bo'lib qoladi; har bosqich bir xil 104 savolda solishtiriladi.

## Holat: nima ishlaydi, nima yo'q

**Bor:** o'qitish (checkpoint bilan), korpus yig'ish vositalari (Vikipediya), PWA chat, RAG, Gemini ulanishi,
103 test. **E0 (2026-10-30):** o'zbekcha baholash to'plami — 104 savol (grammatika, umumiy bilim,
tarjima, kod) va `ai_eval.py`.

**O'lchangan rost holat:** o'z modeli (12 qatorli dataset) — **104 savoldan 0 ta**: 12 qatorni yodlagan,
til bilmaydi. Oddiy noutbukda (Pentium N5000, 8 GB, GPU yo'q) Claude Opus darajasiga yetkazish mumkin
emas — frontier modellar o'n minglab GPU'da o'qitiladi.

**Reja:** E1 — API asosidagi yordamchi va o'lchov · E2 — kichik ochiq modelni (1–4B) bepul GPU'da
o'zbekchaga moslash va noutbukda kvantlangan holda ishga tushirish · E3 — korpus va davomli o'qitish
(faqat E2 yaxshi bo'lsa). Har bosqichdan keyin o'lchov va egasi qarori.

## Havolalar

- Repo: yopiq; reja — repo `docs/REJA.md`, o'lchovlar — `docs/MODEL-OLCHAMI.md`

---

*Oxirgi yangilanish: 2026-10-30*
