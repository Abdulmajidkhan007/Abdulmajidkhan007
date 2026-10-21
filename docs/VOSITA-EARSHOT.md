# Vosita: earshot — koddan ovoz effektlari

> Tekshirilgan: 2026-10-21, repo kodidan (`pyproject.toml`, `CHANGELOG.md`,
> `docs/SFX.md`, `docs/INTEGRATION.md`). Bu bizning loyihamiz emas — tashqi
> vosita. Fayl yangi sessiya uni **qachon va qanday** ishlatishini bilishi uchun.

- Repo: https://github.com/Leonxlnx/earshot (MIT, ~2k ⭐)
- Versiya: **0.3.0** (2026-10-19)

---

## 1. E'londagi gaplar rostmi?

| E'londa | Haqiqatda |
|---|---|
| "201 ta protsedurali ovoz" | ✅ Rost: 183 ta forge ovozi + 3 ta kalimba + 15 ta yozuvdan "fit" qilingan. Model va internetsiz, faqat numpy/scipy bilan render bo'ladi |
| "Audio fayllarsiz" | ⚠️ Yarim rost. Ovoz koddan **generatsiya** bo'ladi, lekin natija — **WAV fayl**. Ilovaga baribir fayl qo'yiladi. Farqi: fayl qidirish/sotib olish/litsenziya muammosi yo'q |
| "Earshot kit" | ✅ Rost: `earshot kit init/render/check` — har rol (click, pop, whoosh, hit, key, bell...) uchun bitta ovoz, `calm / crisp / minimal` presetlari |
| "Kadrgacha aniq sinxron" | ✅ Rost, lekin **video uchun** (Remotion/Cinetic filmlari): `--dur`, `--apex` bilan whoosh cho'qqisi kerakli soniyaga tushadi (±2.5 ms). React UI animatsiyasiga avtomatik ulanmaydi |
| "Cinetic integratsiyasi" | ✅ Rost: Cinetic (Remotion asosidagi launch-film skill) `earshot` o'rnatilgan bo'lsa, ovozni undan oladi |

**Muhim cheklovlar:**
- Bu **Python vositasi** (3.10+), npm paketi **yo'q**. Brauzerda/React Native'da
  runtime'da ishlamaydi — u **dev vaqtida** fayl yasaydi.
- To'liq o'rnatish (`describe`, `match`, `critique` — "eshitish" qismi) torch +
  ~1.1 GB model yuklaydi. **Faqat ovoz yasash (`sfx`, `kit`) uchun bu kerak emas**,
  lekin paket baribir torch'ni dependency sifatida tortadi — CPU build qo'yiladi.
- ffmpeg/ffprobe PATH'da bo'lishi kerak.

---

## 2. Bizga nima nafi bor

| Qayerda | Nima beradi | Foyda |
|---|---|---|
| **lumina** (like, post, xabar yuborish), **KidsWear** (savatga qo'shish, buyurtma tasdiqlandi), **atoyo** (buyurtma), **suhbat / uzbek-tg** (xabar keldi/ketdi) | 5–10 ta kichik UI ovozi (click, pop, confirm, bell) | Litsenziyasi toza (MIT), bir xil uslubdagi to'plam, fayl hajmi kichik |
| **portfolio-3d** | Sahna o'tishlarida whoosh, hover'da tick (ixtiyoriy, ovoz o'chirish tugmasi bilan) | "Wow" effekt, GSAP vaqtiga `--apex` bilan moslash |
| **Loyiha promo videolari** (Remotion yoki Cinetic bilan) | Kadrga aniq ovoz, kit + `critique` | Launch videoni professional qiladi |
| **Claude sessiyalari** | MCP server — agent ovozni "eshitib" tekshiradi | Agent yasagan ovozni o'zi baholaydi |

**Nafi yo'q joylar:** telegram-bots, CRM'lar (learning-datacenter, learning-center-front),
backend ishlari — u yerda ovoz kerak emas.

**Hozir ustuvor emas.** `docs/REJA.md` dagi navbat — boshlanganlarni tugatish.
earshot faqat ilova funksional tayyor bo'lgach, "polish" bosqichida yoki promo
video qilinganda ishlatiladi.

---

## 3. Qachon ishlatiladi (qaror qoidasi)

Ishlatiladi, agar **hammasi** to'g'ri bo'lsa:
1. Loyihaning asosiy funksiyalari ishlaydi (polish bosqichi)
2. Egasi ovoz qo'shishni so'ragan yoki promo video qilinmoqda
3. Kerakli ovoz — qisqa UI/motion effekti (click, pop, whoosh, hit, bell, key)

Ishlatilmaydi:
- Musiqa, ovozli gap (speech), uzun fon ovozi kerak bo'lsa — earshot buni qilmaydi
- Runtime'da dinamik ovoz kerak bo'lsa — buning uchun brauzerda Web Audio API
  (yoki `zzfx` kabi kichik JS kutubxona) ishlatiladi

---

## 4. Qanday ishlatiladi — keyingi sessiya uchun retsept

### 4.1. O'rnatish (bulut konteynerda yoki lokalda, loyiha reposidan TASHQARIDA)

```bash
git clone https://github.com/Leonxlnx/earshot ~/tools/earshot && cd ~/tools/earshot
python -m venv .venv
.venv/bin/pip install torch --index-url https://download.pytorch.org/whl/cpu
.venv/bin/pip install -e .
.venv/bin/earshot doctor          # tekshiruv (--load qo'shilmasin: modellarni yuklaydi)
```

### 4.2. Bankdan ovoz tanlash va render

```bash
earshot sfx list --kind click                     # bankda nima bor (whoosh, pop, hit, key, bell ...)
earshot sfx render <id> -o click.wav --sr 48000   # bitta ovoz
earshot sfx render pluck/kalimba -o ok.wav --pitch E5          # nota bilan
earshot sfx render whoosh_fast/crisp -o w.wav --dur 0.8 --apex 0.32  # 0.32 s da cho'qqi
earshot sfx check click.wav                       # sifat auditi (modelsiz)
```

`--seed N` — boshqa variant (take). Bir xil seed — doim bir xil fayl.

### 4.3. Butun to'plam (kit)

```bash
earshot kit init --preset crisp -o audio/kit.json   # UI uchun crisp, matnli video uchun calm
earshot kit render audio/kit.json --out audio/kit   # WAV'lar + kit.lock.json
earshot kit audition audio/kit.json -o audition.wav # hammasini ketma-ket eshitish
```

### 4.4. Ilovaga qo'shish (veb / React Native)

1. WAV → kichik formatga: `ffmpeg -i click.wav -c:a libopus -b:a 48k click.ogg`
   (Safari uchun yonida `.mp3` ham: `-c:a libmp3lame -b:a 96k`)
2. Faqat tayyor faylni repoga qo'shish: veb — `public/sfx/`, RN — `assets/sfx/`.
   **WAV va `kit/` keshini commit qilmaslik.**
3. Bitta typed hook/servis: `useSfx('click')` — ovoz sozlamasi (yoqish/o'chirish)
   Zustand/Redux'da, standart holati **o'chiq yoki past**, `prefers-reduced-motion`
   hurmat qilinadi. RN'da `react-native-sound` yoki mavjud audio kutubxona.
4. Fayllar ro'yxati va qaysi `id` + `seed` dan yasalgani loyiha `docs/` ida
   yoziladi (qayta yasash uchun).

### 4.5. Promo video (Remotion / Cinetic)

`docs/INTEGRATION.md` (earshot repoda) — Cinetic `audio/score.json` da
`"sfx": {"engine": "auto", "kit": "audio/kit.json"}`. Tekshiruv:
`earshot timeline film.mp4`, `earshot critique soundtrack.wav --video film.mp4`.

---

## 5. Sessiyaga beriladigan tayyor prompt

> `Abdulmajidkhan007/docs/VOSITA-EARSHOT.md` ni o'qi. <repo> ga UI ovozlari
> qo'sh: <hodisalar ro'yxati, masalan: savatga qo'shish, buyurtma tasdiqlandi,
> xato>. earshot'ni repodan tashqarida o'rnat, `crisp` preset yoki bankdan mos
> id tanla, `sfx check` dan o'tkaz, ogg+mp3 ga o'gir, typed `useSfx` hook yoz,
> sozlamalarda ovozni o'chirish tugmasi bo'lsin (standart: o'chiq). Qaysi id/seed
> ishlatilganini loyiha docs'iga yoz. Commit + push.

---

*Oxirgi yangilanish: 2026-10-21*
