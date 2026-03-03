const translations = {
    fr: {
        studio_name: '<span class="hide-mobile">Studio </span>Mohamed',
        hero_title: "Des applications qui changent votre quotidien",
        hero_subtitle: "Découvrez Zikr et M, conçues pour être simples, belles et utiles au quotidien.",
        discover_zikr: "Découvrir Zikr",
        discover_m: "Découvrir M",
        zikr_desc: "L'application compagnon pour vos prières, le Coran et vos invocations quotidiennes. Une interface épurée pour une expérience spirituelle optimale.",
        zikr_full_title: "Zikr : Votre Compagnon Spirituel",
        zikr_long_desc: "Découvrez une application complète pour vous accompagner dans votre pratique religieuse. Horaires de prières précis, Coran complet, invocations authentiques et notifications personnalisées.",
        feature_prayers: "Horaires de prières précis",
        feature_quran: "Lecture du Coran intégrée",
        feature_notifications: "Notifications de rappels",
        whatsapp_channel: "Canal WhatsApp Officiel",
        m_desc: "Votre nouvel espace social et utilitaire. Restez connecté et gérez vos contacts avec simplicité et élégance.",
        m_full_title: "M App : Social & Vidéos",
        m_long_desc: "Restez connecté avec vos proches, passez des appels fluides et découvrez les contenus du moment. Une expérience sociale complète avec une section dédiée aux Reels et vidéos.",
        feature_reels: "Vidéos & Reels en direct",
        feature_chats: "Discussions fluides",
        feature_calls: "Appels vocaux & vidéo",
        all_rights: "Tous droits réservés",
        privacy: "Politique de confidentialité",
        nav_privacy: "Politique de confidentialité",
        nav_terms: "Conditions d'utilisation"
    },
    en: {
        studio_name: '<span class="hide-mobile">Studio </span>Mohamed',
        hero_title: "Apps that change your daily life",
        hero_subtitle: "Discover Zikr and M, designed to be simple, beautiful, and useful every day.",
        discover_zikr: "Discover Zikr",
        discover_m: "Discover M",
        zikr_desc: "The companion app for your prayers, Quran, and daily invocations. A clean interface for an optimal spiritual experience.",
        zikr_full_title: "Zikr: Your Spiritual Companion",
        zikr_long_desc: "Discover a complete application to support you in your religious practice. Accurate prayer times, full Quran, authentic invocations, and personalized notifications.",
        feature_prayers: "Accurate prayer times",
        feature_quran: "Integrated Quran reading",
        feature_notifications: "Reminder notifications",
        whatsapp_channel: "Official WhatsApp Channel",
        m_desc: "Your new social and utility space. Stay connected and manage your contacts with simplicity and elegance.",
        m_full_title: "M App: Social & Media",
        m_long_desc: "Stay connected with your loved ones, enjoy fluid calls, and discover trendy content. A complete social experience with a dedicated Reels and video section.",
        feature_reels: "Live Feed & Reels",
        feature_chats: "Secure messaging",
        feature_calls: "Audio & Video calls",
        all_rights: "All rights reserved",
        privacy: "Privacy Policy",
        nav_privacy: "Privacy Policy",
        nav_terms: "Terms of Use"
    },
    ar: {
        studio_name: '<span class="hide-mobile">استوديو </span>محمد',
        hero_title: "تطبيقات تغير حياتك اليومية",
        hero_subtitle: "اكتشف ذكر و M، المصممة لتكون بسيطة وجميلة ومفيدة كل يوم.",
        discover_zikr: "اكتشف ذكر",
        discover_m: "اكتشف M",
        zikr_desc: "التطبيق الرفiq لصلواتك، القرآن والأذكار اليومية. واجهة نظيفة لتجربة روحانية مثالية.",
        zikr_full_title: "ذكر: رفيقك الروحاني",
        zikr_long_desc: "اكتشف تطبيقاً متكاملاً لمرافقتك في ممارستك الدينية. مواقيت صلاة دقيقة، قرآن كامل، أذكار صحيحة وتنبيهات مخصصة.",
        feature_prayers: "مواقيت صلاة دقيقة",
        feature_quran: "قراءة القرآن الكريم",
        feature_notifications: "تنبيهات مخصصة",
        whatsapp_channel: "قناة الواتساب الرسمية",
        m_desc: "مساحتك الاجتماعية والخدمية الجديدة. ابق على اتصال ودر جهات اتصالك ببساطة وأناقة.",
        m_full_title: "تطبيق M: تواصل وفيديو",
        m_long_desc: "ابق على اتصال مع أحبائك، استمتع بمكالمات سلسة واكتشف أحدث المحتويات. تجربة اجتماعية كاملة مع قسم مخصص للفيديوهات والـ Reels.",
        feature_reels: "فيديوهات و Reels حية",
        feature_chats: "محادثات آمنة",
        feature_calls: "مكالمات صوت وفيديو",
        all_rights: "جميع الحقوق محفوظة",
        privacy: "سياسة الخصوصية",
        nav_privacy: "سياسة الخصوصية",
        nav_terms: "شروط الاستخدام"
    }
};

let currentLanguage = localStorage.getItem('preferredLanguage') || 'fr';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Update text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Update icon
    const icon = document.querySelector('#theme-toggle i');
    icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';

    // Update M App Icons (Header & Card)
    const mIcons = document.querySelectorAll('.m-dynamic-icon');
    mIcons.forEach(icon => {
        icon.src = isDark ? 'assets/images/m-icon-dark.png' : 'assets/images/m-icon-light.png';
    });

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// App Presentation Logic
function showApp(appId) {
    const detailsSection = document.getElementById(`${appId}-details`);
    if (detailsSection) {
        detailsSection.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll
    }
}

function hideApp(appId) {
    const detailsSection = document.getElementById(`${appId}-details`);
    if (detailsSection) {
        detailsSection.classList.remove('active');
        document.body.style.overflow = ''; // Enable scroll
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load language
    setLanguage(currentLanguage);

    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        toggleTheme();
    }
});
