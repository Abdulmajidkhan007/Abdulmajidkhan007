kanal: blog
holat: qoralama
loyiha: marshrutchi-bot

🚚 Marshrutchi bot — yangi loyiha: birinchi versiya (MVP) kodi tayyor

Muammo: bir safarda bir yo'nalishdagi 5–10 mijozga yuk olib boriladi, lokatsiyalar Telegram guruhida tarqoq, begona shofyor manzillarni bilmaydi, pul va qarz qo'lda yoziladi.

Bot hozir nima qiladi:
• guruhda har topic — bitta yo'nalish: "1 Ali aka Mulkobod" deb yoziladi va shu xabarga reply qilib lokatsiya yuboriladi (Telegram lokatsiyasi, maps.app.goo.gl yoki Yandex havolasi, koordinata);
• /safar — raqam tartibida safar, Google Maps marshrut havolasi (to'xtash ko'p bo'lsa bir necha havola) va Yandex havolasi;
• har nuqtada ishchi tugmasi: To'liq to'ladi · Qisman · Qarzga qoldi · Faqat eski qarzni yopdi · Boshqa + izoh; summa $ yoki so'mda;
• rahbar dollar kursini kiritadi va safar hisobotini oladi; til — o'zbekcha, ruscha, inglizcha.

Texnik: TypeScript monorepo (pnpm + Turborepo), grammY, Prisma 7 + PostgreSQL, Docker. Tekshiruv: 84 unit/integratsion test (bot oqimi soxta Telegram API bilan).

Cheklov: haqiqiy guruhda hali sinalmagan; ma'lumot hozircha bot xotirasida (qayta ishga tushsa yo'qoladi) — mijozlarni bazada shifrlab saqlash keyingi bosqichda. Avtomatik tartiblash ham keyingi bosqichda.
