# Qolgan ishlar — hamma repolar tekshiruvi (2026-11-01)

> Sabab: 2026-11-01 da **ikkala referal akkaunt Pro → Free** ga o'tdi. Free'da Claude Code
> ishlamaydi («Upgrade for Claude Code»). Ulardagi sessiyalarni davom ettirib bo'lmaydi.
> Ish yo'qolmadi: hamma kod GitHub'da (pastdagi tekshiruv). Bu fayl qayerda nima qolganini
> bitta joyda ko'rsatadi.
>
> Manba: `list_repos` (26 repo), `git ls-remote` (barcha branch'lar), GitHub PR ro'yxati,
> blob'siz klon bilan har branch `main` bilan solishtirildi. Kod o'zgartirilmadi.

## 1. Qisqa xulosa

- **Ochiq PR — 0 ta**, hech qaysi repoda.
- **Haqiqatan qo'shilmagan branch — 6 ta** (2-bo'lim). Qolgan 150+ branch — merge
  qilingan PR'lar qoldig'i, ichidagi narsa `main` da bor.
- **Default branch xatosi — 3 ta repo** (3-bo'lim): ikkitasida default eski branch'da,
  yangi kod esa `main` da. GitHub'da repo ochgan odam eski kodni ko'radi.
- 3-akkaunt repolari (`go-uz`, `bank`, `taxi`, `calculator`, `DevCraft-AI`, `web-3d`,
  `ios-asistent`, `portfolio-builder`) — har birida faqat default branch va `main`, ikkalasi
  **bir xil commit**. Ochiq PR yo'q, yo'qolgan ish yo'q. `Atoyo-erp-v2` bu akkauntga
  ko'rinmaydi.
- `hujjatlar` (private, yangi) — **bo'sh**: birorta ham branch yo'q. REJA'da yo'q edi.

## 2. `main` ga qo'shilmagan ish

| Repo | Branch | Nima bor | Qaror (taklif) |
|---|---|---|---|
| **instagram-avto-javob** | `claude/read-docs-section-19-wo6wtw` (2026-10-29) | REJA 7.1 — prompt injection himoyasi: 5 qoida, F2 da ≥20 hujum testi | ✅ 2026-11-01 egasi ruxsati bilan `main` ga qo'shildi (fast-forward) |
| **Abdulmajidkhan007** | `ccr-43d866c8-3q0lvw` (2026-10-28) | 3 ta xavfsizlik post qoralamasi (probiv bot, proxy bot tuzog'i, Safe Road leak) | Egasi ko'rib chiqadi: kerak bo'lsa `posts/` ga merge |
| **Abdulmajidkhan007** | `claude/mijoz-xabarlari-2026-10-28` | `docs/MIJOZ-XABARLARI.md` (11 biznesga xabar, qamrov shabloni) | `main` da `MIJOZ-JARAYONI.md` bor. 💼 Freelance sessiyasi qaror qiladi |
| **Organick_org** | `claude/docs-holat-2026-10-21` | `CLAUDE.md` 36 KB → 5 KB, qoidalar `docs/QOIDALAR.md` ga | Foydali (limit tejaydi). `master` o'zgargan, qayta asoslab (rebase) PR qilish kerak |
| **uzbek-tg** | `feature/firebase-auth` (2026-05-31) | Expo davridagi Firebase telefon kirishi | **Eskirgan** (loyiha bare RN + TDLib'ga o'tgan). O'chirish mumkin |
| **Abdulmajidkhan007** | `kompyuter/kali-mint-reja` (2026-11-01) | `docs/KOMPYUTER.md` — Kali va Mint o'rnatish | 💻 Kompyuter sessiyasi ishlayapti. Unga tegilmaydi |

Allaqachon `main` da (branch qoldig'i, o'chirsa bo'ladi): profil `claude/goya-chiptatopar`
(g'oya REJA'da), profil `claude/insta-avtojavob-post` (`posts/2026-10-24-…` bilan almashgan),
`telegram-bots` `docs/insta-avtojavob-b` (fayl `main` da), `portfolio-3d` `ccr-meta-name`
(ism `main` da), `marshrutchi-bot` `docs/neytral-misol` (PR #4 yopilgan; mijoz nomi `main` da yo'q).

## 3. Default branch — egasi Settings'da almashtiradi

| Repo | Hozirgi default | Muammo |
|---|---|---|
| **learning-datacenter-tc-project** | `claude/school-crm-architecture-n6didw` | **Eski.** Faza 0–3 va parol tuzatishi (PR #2–#6) `main` da. Default'ni `main` ga o'tkazish **shart** |
| **mythos-uzbek-ai** | `claude/uzbek-ai-gemini-integration-ha49c1` | **Eski.** E0 (PR #2) `main` da. Default → `main` **shart** |
| **instagram-avto-javob** | `ccr-2cf7ff65-29jk2j` | Hozir `main` bilan bir xil, lekin vaqtinchalik sessiya branch'i. Default → `main` |
| `go-uz`, `bank`, `taxi`, `calculator`, `DevCraft-AI`, `web-3d`, `ios-asistent` | `claude/…` / `feat/…` | `main` bilan bir xil commit. Almashtirish xavfsiz (REJA 2-bo'lim) |

Yo'l: repo → Settings → General → Default branch → ⇄ → `main` → Update.

## 4. Har loyihada nima qolgan (repo hujjatlaridan)

| Daraja | Repo | Tugagan | Qolgan / keyingi qadam | Kim |
|---|---|---|---|---|
| 0 | instagram-avto-javob | Reja (A/B yo'llar), 7.1 `main` da | 13-bo'lim «Ochiq savollar»; kod hali yo'q | Kod — referal (to'xtadi) |
| 0 | telegram-bots (insta-avtojavob-bot, countlist) | 15 bot, CI | Insta A pullik qismi, countlist Plus/Pro/Max | Referal (to'xtadi) |
| 1 | portfolio-3d | Jonli, forma Worker orqali ishlaydi | Telefon/username bilan jonli sinov | Egasi |
| 1 | Abdulmajidkhan007 | README, sayt, ariza-worker | 2-bo'limdagi profil branch'lari; postlarni yuborish | Nazoratchi + egasi |
| 2 | learning-center-front | — | 👥 Learning Center sessiyasi yuritadi (bu tekshiruvga kirmadi) | LC sessiya |
| 3 | marshrutchi-bot | Faza 0–2 merge | 8-savol (qidiruv turi); Faza 3 — avto-tartib; Telegram'da sinash. Repo REJA'sida Faza 2 hali «PR ko'rib chiqilmoqda» — eskirgan | Referal (to'xtadi) |
| 3 | suhbat | v0.1.0–v0.6.0, veb Railway'da | 4c-2 (qurilma kerak); egasining bug ro'yxati | Referal (to'xtadi) |
| 4 | rn-r-e-commerce | Faza 1–9 | Faza 10 SEO/a11y → 11 → 12 → 13 (Play Store); 14–20 Blaze'ni kutadi | Referal (to'xtadi) |
| 4 | lumina | Veb + APK, ±1 qoidasi | Egasi sinovi; CI'ga `FIREBASE_TOKEN` | Egasi |
| 4 | uzbek-tg | 0–3-faza kodi | APK'da sinov (`docs/SINOV-ROYXATI.md`), ghost mode | Egasi |
| 4 | bot-factory | Faza 1–5 | Railway deploy (`docs/DEPLOY.md`) → Faza 6; private CI billing | Egasi |
| 5 | mythos-uzbek-ai | E0 | Default branch → `main`; E1 — API kalit egasidan | Egasi → keyin kod |
| 5 | atoyo-e-commerce | Kod bor | ❄️ 2026-10-26 to'xtatilgan; boshqa do'konlarga taklif | — |
| 5 | Organick_org | ✅ jonli | 2-bo'limdagi `CLAUDE.md` qisqartmasi | Ixtiyoriy |
| 6 | learning-datacenter-tc-project | Faza 0–3 + parol | Default branch → `main`; keyingi faza (maosh / ota-onalar portali) egasi aytganda | Egasi → keyin kod |
| 6 | go-uz, bank, taxi, calculator, DevCraft-AI, web-3d, ios-asistent, portfolio-builder | — | 2026-09-21 dan tegilmagan; o'quv yoki g'oya | 2026-12-11 dan keyin |
| — | hujjatlar | — | Bo'sh repo: maqsadini egasi aytadi yoki o'chiriladi | Egasi |

## 5. Referal akkauntlar Free bo'ldi — nima qilish kerak

1. **Sessiyalarni davom ettirib bo'lmaydi.** Ularni ochiq qoldirish ham, arxivlash ham
   kodga ta'sir qilmaydi. Hamma natija GitHub'da.
2. Ochiq PR yo'q, push qilinmagan ish GitHub'dan ko'rinmaydi. Agar referal sessiyasi
   oxirida commit qilmay qolgan bo'lsa, u konteyner bilan yo'qolgan. Bunday ish faqat
   o'sha sessiya tarixida ko'rinadi.
3. 0/3/4-daraja ishlari **to'xtadi**. Asosiy akkaunt kuniga ≤12% limit bilan faqat 1–2-daraja
   ishlaydi. Bu ishlarni asosiy akkauntga o'tkazish — egasining qarori (limit yetmaydi).
4. Referal 1 ning abdullohkhan loyihalarini yuklash ishi — GitHub'da yangi repo ko'rinmadi
   (`hujjatlar` dan tashqari, u ham bo'sh). Natijasi noma'lum.

*Oxirgi yangilanish: 2026-11-01*
