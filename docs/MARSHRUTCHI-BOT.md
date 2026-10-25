# marshrutchi-bot — boshlang'ich talablar (egasi bilan kelishilgan, 2026-10-22)

> Repo ochilgan (private). Faza 0–1 — PR #1: 2026-10-25 lokal tekshiruv yashil (typecheck, lint,
> 84 test); GitHub CI billing sabab to'xtagan. Haqiqiy Telegram'da sinalmagan. Talablar repoda `docs/TALABLAR.md`.
> Birinchi mijoz — Atoyo (yuk yetkazish: Oltiariq, Bag'dod, Rishton, Pop, Chust, Namangan...).

## Muammo
Bir safarda bir yo'nalishga 5–10 mijozga yuk. Begona shofyor va yangi ishchi manzillarni
bilmaydi; lokatsiyalar Telegram guruhida tarqoq. Pul yig'ish va qarz qo'lda yuritiladi.

## Asosiy tushunchalar
- **Mijoz** — ism, telefon, lokatsiya; bir marta kiritiladi, saqlanadi.
- **Yo'nalish** — mijozlar to'plami (masalan "Pop"); o'chirilmaydi, qayta ishlatiladi.
- **Safar** — o'sha kuni yo'nalishdan tanlangan mijozlar (bugun 6, ertaga 3 yoki 10).
  Yangi mijoz safarda qo'shilib, yo'nalishga saqlanadi.
- Har kim faqat o'z jamoasi / o'z yo'nalishlarini ko'radi.

## Manzil qabul qilish
Telegram lokatsiyasi · `maps.app.goo.gl` havolasi (redirect ochilib koordinata olinadi) ·
Yandex havolasi · koordinata. Matnli manzil (geokodlash) — MVP'da yo'q.
Guruh rejimi: har yo'nalish — topic; "1 Ali aka Mulkobod" xabariga reply qilingan lokatsiya.
Yakka rejim: botning o'zida. Bot guruhda o'qishi uchun privacy mode o'chiriladi yoki admin.

## Tartib
Foydalanuvchi raqamlab bersa — o'sha tartib. Bilmasa — "Bot tartiblasin" (yo'l masofasi
bo'yicha, OpenRouteService/OSRM). Natija: Google Maps marshrut havolasi (kalitsiz,
`google.com/maps/dir/?api=1&waypoints=...`; to'xtash soni cheklangan — ko'p bo'lsa bir necha
havola) + Yandex Navigator havolasi.

## Ishchi ro'yxati (har nuqtada)
"Navigatsiya" tugmasi va natija tugmalari: **To'liq to'ladi · Qisman (summa) · Qarzga qoldi ·
Faqat eski qarzni yopdi · Boshqa** — "Boshqa"da erkin matn; har qanday tanlovga ixtiyoriy izoh.
- Ishchi mijozning eski qarzini **ko'rmaydi**; faqat qancha pul olganini kiritadi.
- Pulni kim olgan bo'lsa — o'sha kiritadi.
- Qoldiq va qarzni bot hisoblaydi; kun oxirida rahbarga hisobot.
- Ikki valyuta ($ va so'm); kursni **rahbar** kiritadi.

## Rollar (ruxsatga asoslangan — yangi rol qo'shish oson)
Developer (platforma, hamma kompaniyalar ustidan) · Rahbar (kompaniyada hammasi) · Sotuvchi ·
Agent · Yuk olib boruvchi (ishchi) · Shofyor. Keyin: yuk chiqaruvchi, yuk tekshiruvchi va b.

## Til
O'zbekcha (standart), ruscha, inglizcha.

## Server va maxfiylik
Pilot (faqat Atoyo, 2–3 hafta) — Railway; haqiqiy mijozlar ma'lumoti to'plana boshlasa —
O'zbekistondagi VPS (shaxsiy ma'lumotlar qonuni). Docker bilan — ko'chirish oson.
Telefon, ism, manzil, summa — ilova darajasida shifrlanadi (kalit DB'dan alohida); zaxira
nusxalar ham shifrlangan; kirishlar jurnali. Baza o'g'irlansa ham ma'lumot o'qilmasin.

## Stack
TypeScript monorepo (pnpm + Turborepo): `apps/bot` (grammY), keyin `apps/web` (Next.js),
`apps/mobile` (bare React Native); `packages/core` (havola o'qish, tartib, marshrut, qoldiq —
sof, testli), `packages/db` (Prisma 7 + PostgreSQL), `packages/i18n`.

## Zaxira (egasi qarori, 2026-10-22)
- Asosiy baza — O'zbekistondagi serverda (pilotdan keyin).
- Har kuni **22:00** (Toshkent) server shifrlangan zaxira yaratadi (`backup-YYYY-MM-DD.zip`,
  ichida DB dump; parol/kalit faqat egasida).
- Egasining telefonidagi (Termux/Kali) yordamchi skript yoki bot zaxirani yuklab oladi va
  Android **Downloads** papkasiga ko'chiradi (`termux-setup-storage` → `~/storage/downloads`);
  Termux/Kali ichida nusxa qolmaydi. Serverda oxirgi 7 kunlik zaxira saqlanadi.
- Tiklash tartibi `docs/` da yoziladi va kamida bir marta sinaladi (zaxira tiklanmasa — zaxira emas).
- Litsenziya: repo hozir private; tayyor bo'lgach litsenziya bilan public qilinadi (egasi tanlaydi).
