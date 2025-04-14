// Переключение отображения меню языков
function toggleLanguageMenu() {
  const menu = document.getElementById("language-menu");
  menu.classList.toggle("show");
}

const translations = {
  ru: {
    heroTitle: "Политехникум №1 Чиланзарского района",
    heroDesc: "Передовые образовательные программы, направленные на развитие инженерного мышления и инновационных решений.",
    heroBenefit1: "Практико-ориентированное обучение",
    heroBenefit2: "Доступ к современным технологиям",
    heroBenefit3: "Практика в ведущих компаниях",
    heroBenefit4: "Развитие в среде профессионалов",
    heroBtnMore: "Подробнее",
    heroBtnApply: "Поступление",

    aboutTitle: "О нас",
    aboutText: "Политехникум №1 Чиланзарского района – это место, где инновации и знания формируют будущее. Мы объединяем теорию и практику, предлагая качественное образование и помогая раскрыть потенциал.",
    aboutTechTitle: "Современные технологии",
    aboutTechText: "Образование с передовыми методиками, соответствующими требованиям рынка.",
    aboutCareerTitle: "Практика и карьера",
    aboutCareerText: "Стажировки и трудоустройство через программы сотрудничества с ведущими компаниями.",
    aboutPersonalTitle: "Личностное развитие",
    aboutPersonalText: "Развитие лидерства, критического мышления и креативности наряду с профессиональными навыками.",

    servicesTitle: "Популярные направления",
    servicesDesc: "Выберите направление и изучайте навыки будущего с лучшими преподавателями.",
    service1Title: "Электрика",
    service1Desc: "Изучение монтажа, обслуживания и проектирования электрических сетей.",
    service2Title: "Ремонт бытовой техники",
    service2Desc: "Диагностика и ремонт техники любого типа.",
    service3Title: "Дизайн и проектирование",
    service3Desc: "3D-моделирование, графический дизайн и черчение.",
    service4Title: "Компьютерные сети",
    service4Desc: "Настройка серверов, безопасность данных и управление сетями.",

    scheduleTitle: "График работы",
    day1: "Понедельник – Пятница",
    time1: "08:00 – 18:00",
    day2: "Суббота",
    time2: "08:00 – 16:00",
    day3: "Воскресенье",
    time3: "Выходной",

    applyTitle: "Оставьте заявку",
    applyDesc: "Наши специалисты скоро свяжутся с вами.",
    formName: "Ваше имя",
    formEmail: "Электронная почта",
    formTel: "Телефон",
    formMessage: "Ваше сообщение",
    formBtn: "Отправить",
    messageSent: "Сообщение отправлено!",

    infoWhy: "Зачем оставлять заявку?",
    info1: "Быстрая связь",
    info2: "Индивидуальный подход",
    info3: "Полная поддержка",
    infoText: "Свяжемся с вами в течение 24 часов и предложим лучшее решение. Заполните форму — наш менеджер вам поможет.",

    navNav: "Навигация",
    navMain: "Главная",
    navAbout: "О нас",
    navServices: "Услуги",
    navContact: "Контакты",

    contactTitle: "Контакты",
    address: "г. Ташкент, Чиланзарский район, 20-й квартал, ул. Катта Қани, дом 52",

    socialsTitle: "Мы в соцсетях",

    footerCopy: "© 2025 Все права защищены |",
    footerPolicy: "Политика конфиденциальности",

    servicesHero: "Профессии будущего",
    servicesHeroP: "Откройте для себя интересные и востребованные профессии в современном мире",
    servicesHeroBtn: "Оставьте заявку",
    elektr: "Электрик",
    elektrP: "Электрики занимаются установкой, обслуживанием и ремонтом электрических систем. Это одна из самых востребованных профессий во многих отраслях.",
    elektrBtn: "Оставить заявку",
    oper: "Оператор комьпютерных сетей",
    operP: "Операторы компьютерных сетей обеспечивают бесперебойную работу интернет-соединений и серверов. Они настраивают оборудование и следят за безопасностью данных.",
    avto: "Автомеханик",
    avtoP: "Автомеханик диагностирует и ремонтирует автомобили. Он знает всё о двигателях и других важных системах.",
    shveya: "Швея",
    shveyaP: "Швеи создают одежду по индивидуальным заказам, работают с тканями и выкройками, воплощая идеи в реальность. Это профессия для творческих людей.",
    remont: "Мастер по ремонту бытовой техники",
    remontP: "Мастера по ремонту бытовой техники восстанавливают такие устройства, как стиральные машины, холодильники, микроволновки, что обеспечивает комфорт в доме.",
    design: "Дизайнер",
    designP: "Дизайнеры создают визуальные концепции, логотипы и интерфейсы. Они работают на пересечении искусства и бизнеса, превращая идеи в привлекательные и функциональные проекты.",
  },

  uz: {
    heroTitle: "Chilonzor tumani 1-son Politexnikumi",
    heroDesc: "Muhandislik tafakkuri va innovatsion yechimlarni rivojlantirishga mo‘ljallangan ilg‘or ta’lim dasturlari.",
    heroBenefit1: "Amaliyotga yo‘naltirilgan ta’lim",
    heroBenefit2: "Zamonaviy texnologiyalarga kirish",
    heroBenefit3: "Yetakchi kompaniyalarda amaliyot o‘tash",
    heroBenefit4: "Mutaxassislar muhitida rivojlanish",
    heroBtnMore: "Batafsil",
    heroBtnApply: "Qabul",

    aboutTitle: "Biz haqimizda",
    aboutText: "Innovatsiyalar va bilimlar kelajakni shakllantiradigan maskan. Biz nazariya va amaliyotni uyg‘unlashtirgan holda sifatli ta’lim taklif qilamiz va salohiyatni ochamiz.",
    aboutTechTitle: "Zamonaviy texnologiyalar",
    aboutTechText: "Bozor talablariga mos ilg‘or vosita va metodikalar bilan ta’lim.",
    aboutCareerTitle: "Amaliyot va karyera",
    aboutCareerText: "Yetakchi kompaniyalar bilan hamkorlik dasturlari orqali amaliyot va ishga joylashish imkoniyati.",
    aboutPersonalTitle: "Shaxsiy rivojlanish",
    aboutPersonalText: "Kasbiy ko‘nikmalar bilan birga liderlik, tanqidiy fikrlash va ijodkorlikni rivojlantirish.",

    servicesTitle: "Ommabop yo‘nalishlar",
    servicesDesc: "Yo‘nalishni tanlang va eng yaxshi o‘qituvchilar bilan kelajak ko‘nikmalarini o‘rganing.",
    service1Title: "Elektrika",
    service1Desc: "Elektr tarmoqlarini montaj qilish, xizmat ko‘rsatish va loyihalashni o‘rganing.",
    service2Title: "Maishiy texnika ta’miri",
    service2Desc: "Istalgan turdagi texnikani tashxislash va ta’mirlashni o‘rganing.",
    service3Title: "Dizayn va loyihalash",
    service3Desc: "3D-modellashtirish, grafik dizayn va chizmachilikni o‘rganing.",
    service4Title: "Kompyuter tarmoqlari",
    service4Desc: "Server sozlamalari, ma’lumotlar xavfsizligi va tarmoq boshqaruvi.",

    scheduleTitle: "Ish jadvali",
    day1: "Dushanba – Juma",
    time1: "08:00 – 18:00",
    day2: "Shanba",
    time2: "08:00 – 16:00",
    day3: "Yakshanba",
    time3: "Dam olish kuni",

    applyTitle: "Ariza qoldiring",
    applyDesc: "Mutaxassislarimiz tez orada siz bilan bog‘lanadi.",
    formName: "Ismingiz",
    formEmail: "Email",
    formTel: "Telefon",
    formMessage: "Xabaringiz",
    formBtn: "Yuborish",
    messageSent: "Xabaringiz Yuborildi!",

    infoWhy: "Nega ariza qoldirish kerak?",
    info1: "Tezkor aloqa",
    info2: "Individual yondashuv",
    info3: "To‘liq qo‘llab-quvvatlash",
    infoText: "Biz siz bilan 24 soat ichida bog‘lanamiz va eng yaxshi yechimni taklif qilamiz. Formani to‘ldiring — menejerimiz sizga yordam beradi.",

    navNav: "Navigatsiya",
    navMain: "Asosiy",
    navAbout: "Haqida",
    navServices: "Xizmatlar",
    navContact: "Aloqa",

    contactTitle: "Aloqa",
    address: "Toshkent shahri, Chilonzor tumani, 20-mavzesi, Katta Qa‘ni ko‘chasi, 52-uy",

    socialsTitle: "Biz ijtimoiy tarmoqlarda",

    footerCopy: "© 2025 Barcha huquqlar himoyalangan |",
    footerPolicy: "Maxfiylik siyosati",

    servicesHero: "Kelajak kasblari",
    servicesHeroP: "Zamonaviy dunyoda qiziqarli va talabgir kasblarni kashf eting",
    servicesHeroBtn: "Ariza qoldiring",
    elektr: "Elektrik",
    elektrP: "Elektriklar elektr tizimlarini o'rnatish, xizmat ko'rsatish va ta'mirlash bilan shug'ullanadi. Bu ko'plab tarmoqlarda eng talabgir kasblardan biridir.",
    elektrBtn: "Ariza qoldirish",
    oper: "Kompyuter tarmoqlari operatori",
    operP: "Kompyuter tarmoqlari operatorlari internet ulanishlari va serverlarning uzluksiz ishlashini ta'minlaydi. Ular jihozlarni sozlashadi va ma'lumotlar xavfsizligini nazorat qilishadi.",
    avto: "Avtomexanik",
    avtoP: "Avtomexanik avtomobillarni diagnostika qiladi va ta'mirlaydi. U dvigatellar va boshqa muhim tizimlar haqida hamma narsani biladi.",
    shveya: "Tikuvchi",
    shveyaP: "Tikuvchilar individual buyurtmalar asosida kiyimlar yaratadilar, matolar va shakllar bilan ishlaydilar, g'oyalarni hayotga tadbiq etadilar. Bu ijodkorlar uchun kasbdir.",
    remont: "Maishiy texnika tamirchisi",
    remontP: "Maishiy texnika ta'mirlovchilari kir yuvish mashinalari, muzlatgichlar, mikrodalga pechlar kabi qurilmalarni tiklaydi, bu esa uydagi qulaylikni ta'minlaydi.",
    design: "Dizayner",
    designP: "Dizaynerlar vizual konseptlar, logotiplar va interfeyslar yaratadilar. Ular san'at va biznesning kesishgan joyida ishlaydilar, g'oyalarni jozibali va funksional loyihalarga aylantiradilar.",
  }
};

// Установка языка при загрузке
window.addEventListener("DOMContentLoaded", function() {
  const savedLanguage = localStorage.getItem("language") || "uz"; // по умолчанию O‘zbekcha
  changeLanguage(savedLanguage);
});

  
function changeLanguage(lang) {
    // Сохранить выбранный язык в localStorage
    localStorage.setItem("language", lang);

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
     const translation = translations[lang][key];
    if (translation) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }        
    }
  });
  
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    const translation = translations[lang][key];
    if (translation) {
      el.placeholder = translation;
    }
  });
  
  document.documentElement.lang = lang;

      // Скрыть меню после выбора
  document.getElementById("language-menu").classList.remove("show");
}

// Закрытие меню при клике вне его
document.addEventListener("click", function(event) {
  const menu = document.getElementById("language-menu");
  const toggle = document.querySelector(".language-toggle");

  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove("show");
  }
});

// Закрытие меню при прокрутке
window.addEventListener("scroll", function () {
  document.getElementById("language-menu").classList.remove("show");
});
  
