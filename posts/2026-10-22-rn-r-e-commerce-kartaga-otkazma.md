kanal: blog
holat: qoralama
loyiha: rn-r-e-commerce

💳 KidsWear — endi haqiqiy to'lov: kartaga o'tkazma va chek

Bepul Firebase rejasida Payme/Click ishlamaydi (server kerak), shuning uchun to'lovning eng oddiy usuli qo'shildi:
• mijoz "Kartaga o'tkazma"ni tanlaydi — depozit summasi va do'kon kartasi ko'rinadi, raqamni bir bosishda nusxalaydi;
• o'tkazgach, chek rasmini yuklaydi (telefonda siqiladi, bitta buyurtmaga 5 tagacha);
• admin chekni ko'rib tasdiqlaydi — buyurtma darhol "to'langan" bo'ladi, mijoz buni real vaqtda ko'radi; rad etilsa, izoh bilan qaytadi va mijoz yangisini yuklaydi;
• chekni faqat mijozning o'zi va admin ko'radi, mijoz o'zini "to'ladim" deb belgilay olmaydi — buni Firestore qoidalari tekshiradi.

Tekshiruv: 237 unit test, qoidalar 84 test, vebda emulyatorda 32 bosqichli oqim.
Cheklov: telefonda va haqiqiy pul o'tkazmasi bilan hali sinalmagan; ishga tushirish uchun admin panelda karta ma'lumotini kiritib, usulni yoqish kerak.
