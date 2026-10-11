# 3-akkaunt ishlari

> Yozilgan: 2026-10-11. Bu faylni **yangi (3-) akkauntda** ochilgan profil
> sessiyasi o'qiydi va shu yerdan ishni boshlaydi. Repolar o'sha GitHub
> akkaunti (Abdulmajidkhan007) da; yangi Claude akkauntiga GitHub ulanib,
> Claude GitHub App shu repolarga ruxsat bergan bo'lishi kerak.

## Akkauntlar orasida taqsimot

| Akkaunt | Loyihalar |
|---|---|
| Asosiy (hozirgi) | `docs/REJA.md` 3-bo'lim A jadvalidagi 9 ta: rn-r-e-commerce (KidsWear), lumina, telegram-bots, atoyo-e-commerce, Organick_org, Abdulmajidkhan007 (profil), portfolio-3d, suhbat, uzbek-tg — va **learning-center-front** (nurulloh-coder-dev, jamoaviy startup, men frontend) |
| **3-akkaunt (shu fayl)** | go-uz, Atoyo-erp-v2, bank, taxi, calculator, DevCraft-AI, portfolio-builder |

Ikki akkaunt **bir repoda bir vaqtda ishlamaydi** — to'qnashuv bo'lmasin.
Bu ro'yxatdagi repoga asosiy akkaunt tegmaydi va aksincha.

## Loyihalar va boshlang'ich maqsad

Har birida birinchi ish — **repoda kodni o'qib, `docs/REJA.md` yozish**
(nima bor, nima ishlaydi, nima qilinadi, fazalar). Taxmin qilinmaydi.

| # | Repo | Hozirgi holat (2026-10-11) | Maqsad |
|---|---|---|---|
| 1 | **go-uz** | Vroom: ride-hailing + kuryer super-app. Turborepo + pnpm, 9 ta umumiy paket, ilovalar boshlangan; bare RN CLI | Bitta ilovani (yo'lovchi) MVP'gacha: kirish, xarita, buyurtma, haydovchi topish (mock backend bo'lsa ham ishlaydigan), APK CI |
| 2 | **Atoyo-erp-v2** | Fork (2026-05 dan beri tegilmagan) | Avval o'qish: nima ekanini, atoyo-e-commerce bilan bog'liqligini aniqlash. Keyin reja: atoyo do'koni uchun ombor/sotuv ERP. Fork bo'lgani uchun push faqat o'z fork'imizga |
| 3 | **DevCraft-AI** | Faqat arxitektura hujjati (BYOK zero-knowledge, AES-256-GCM, PBKDF2, WebContainers) | Hujjat bo'yicha 1-faza: kalitni brauzerda shifrlab saqlash + bitta AI chat + WebContainers'da kod ishga tushirish |
| 4 | **bank** | O'quv loyiha, arxivlash rejasi bor edi | Ko'rib chiqish: portfolio uchun ko'rsatsa bo'ladigan holatga keltirish (README, demo, testlar) yoki arxivlash tavsiyasi — egasiga asos bilan |
| 5 | **taxi** | O'quv loyiha | 4-band bilan bir xil. go-uz bilan takrorlanmasin |
| 6 | **calculator** | O'quv loyiha | 4-band bilan bir xil (kichik — tez tugatiladi) |
| 7 | **portfolio-builder** | Bo'sh, faqat README | Reja yozish: nima bo'lishi kerak (masalan, foydalanuvchi o'z portfoliosini shablondan yasaydi). Egasi tasdiqlamaguncha kod yozilmaydi |

## Ish tartibi (profil sessiyasi bajaradi)

1. Shu faylni va `CLAUDE.md`, `docs/REJA.md` ni o'qi.
2. Har repo uchun `create_session` bilan **ASOSIY (nazoratchi) sessiya** och,
   title: `<repo> — asosiy`. Unga pastdagi "Asosiy sessiya prompti" ni
   `<REPO>` va `<MAQSAD>` ni to'ldirib yubor. Hammasi **birdaniga** ochiladi.
3. Har asosiy sessiya o'zi **ISHCHI sessiya** ochadi va ishni beradi.
4. Profil sessiyasi har ~60 daqiqada (`send_later`) hammasining holatini
   tekshiradi, limitdan to'xtaganlarga "davom et" yuboradi, egasiga qisqa
   jadval beradi.
5. Loyiha bosqichi tugaganda shu repodagi `docs/<repo>.md` yangilanadi va
   shu fayldagi jadvalda holat yoziladi (sana bilan).

### Asosiy sessiya prompti (shablon)

```
Sen <REPO> reposining ASOSIY (nazoratchi) sessiyasisan. Egasi: Abdulmajid
(@Abdulloh_77700). Javoblar o'zbekcha.

1) Repodagi hamma narsani o'qi (README, package.json, kod, git log). Agar
   docs/REJA.md bo'lmasa — yoz: nima bor, nima ishlaydi, nima yo'q, fazalar.
   Maqsad: <MAQSAD>. Taxmin qilma; topganingni yoz.
2) create_session bilan shu repoda ISHCHI sessiya och va unga 1-fazani ber:
   alohida shoxcha, har qadamda test/lint/build, commit + push.
3) Ishchini send_later bilan har ~30 daqiqada kuzat. Limitdan to'xtasa —
   tiklangach "davom et" de. Ishini o'zing qayta yozma.
4) Ishchi tugagach: o'zing test/build yurgiz, fazani band-band tekshir,
   kamchilikni ishchiga qaytar. Hammasi to'g'ri bo'lsa — main'ga birlashtir.
5) Keyingi fazaga o't. Egasining qarori kerak bo'lgan joyda (arxivlash,
   yangi repo, pul to'lanadigan xizmat) to'xta va hisobotda so'ra.

Qoidalar: kalit/token repoda yo'q; holatni bo'rttirma; har faza oxirida
qisqa hisobot.
```

## Holat jadvali (sessiyalar to'ldiradi)

| Repo | Asosiy sessiya | Faza | Oxirgi yangilanish |
|---|---|---|---|
| go-uz | — | — | — |
| Atoyo-erp-v2 | — | — | — |
| DevCraft-AI | — | — | — |
| bank | — | — | — |
| taxi | — | — | — |
| calculator | — | — | — |
| portfolio-builder | — | — | — |

*Oxirgi yangilanish: 2026-10-11*
