kanal: blog
holat: qoralama
loyiha: rn-r-e-commerce

📦 KidsWear — ombor: zaxira endi o'zi kamayadi

Bepul Firebase rejasida server kodi yo'q, shuning uchun buyurtma berilganda zaxira kamaymasdi. Endi:
• admin buyurtmani tasdiqlaganda har o'lcham/rang zaxirasi bitta tranzaksiyada kamayadi va jurnalga yoziladi; tugmani ikki marta bossa ham ikki marta kamaymaydi;
• buyurtma bekor qilinsa yoki qaytarilsa — zaxira qaytadi;
• admin "Ombor" sahifasi: kirim, hisobdan chiqarish, inventarizatsiya, harakatlar jurnali;
• mijoz o'zining hali to'lanmagan buyurtmasini bekor qila oladi (to'langanini — yo'q);
• eng kam buyurtma summasi va savatda "Bepul yetkazishga X so'm qoldi".

Tekshiruv: 224 unit test, Firestore qoidalari 71 test, vebda emulyatorda 25 bosqichli oqim.
Cheklov: zaxira to'lov paytida emas, admin tasdiqlaganda yechiladi; Android ilovada bu ekranlar telefonda hali sinalmagan.
