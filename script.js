// --- App Data ---
const apps = {
    zikr: {
        id: 'zikr',
        icon: '📿',
        iconUrl: 'assets/images/zikr-icon.png',
        name: 'Zikr',
        tagline: {
            fr: 'Votre compagnon spirituel quotidien.',
            en: 'Your daily spiritual companion.',
            ar: 'رفيقك الروحي اليومي.'
        },
        description: {
            fr: 'Lancée en Mars 2026. Une application d\'élite conçue avec SwiftUI, offrant une expérience complète : Coran avec Tajweed, Adhkar avec compteur, horaires de prière précis et un Imam IA pour guider votre pratique.',
            en: 'Launched in March 2026. An elite application designed with SwiftUI, offering a complete experience: Quran with Tajweed, Adhkar with counter, precise prayer times, and an AI Imam to guide your practice.',
            ar: 'تم إطلاقه في مارس 2026. تطبيق متميز مصمم باستخدام SwiftUI، يقدم تجربة كاملة: القرآن بالتجويد، الأذكار مع عداد، أوقات صلاة دقيقة وإمام ذكاء اصطناعي لتوجيه ممارستك.'
        },
        features: {
            fr: ['Coran avec Tajweed & Audio', 'Horaires de prière & Qibla', 'Adhkar & Douas interactifs', 'Imam IA (Guide spirituel)'],
            en: ['Quran with Tajweed & Audio', 'Prayer Times & Qibla', 'Interactive Adhkar & Duas', 'AI Imam (Spiritual Guide)'],
            ar: ['القرآن بالتجويد والصوت', 'أوقات الصلاة والقبلة', 'أذكار وأدعية تفاعلية', 'إمام ذكاء اصطناعي (مرشد روحي)']
        },
        appStore: 'https://apps.apple.com/fr/app/zikr/id6759991511',
        playStore: 'https://play.google.com/store/apps/details?id=com.mohamed.zikr',
        whatsapp: 'https://whatsapp.com/channel/0029VaoV6x48F2pG8N21vS3s',
        screenshots: [
            'assets/images/zikr_screen_1.png',
            'assets/images/zikr_screen_2.png',
            'assets/images/zikr_screen_3.png'
        ],
        privacy: 'zikr-privacy.html',
        terms: 'zikr-terms.html',
        gradient: 'linear-gradient(135deg, #10b981, #059669)',
        status: 'Disponible'
    },
    m_app: {
        id: 'm_app',
        icon: '🎵',
        iconUrl: 'assets/images/m-icon-dark.png',
        name: 'M App',
        tagline: {
            fr: 'Vivez l\'instant présent en 2026.',
            en: 'Live the moment in 2026.',
            ar: 'عش اللحظة في عام 2026.'
        },
        description: {
            fr: 'Un réseau social fluide et moderne (Expo/Supabase) axé sur l\'instant présent. Partagez vos moments, appelez vos proches et découvrez du contenu captivant.',
            en: 'A smooth and modern social network (Expo/Supabase) focused on the instant. Share your moments, call your loved ones, and discover captivating content.',
            ar: 'شبكة اجتماعية سريعة وحديثة (Expo/Supabase) تركز على اللحظة. شارك لحظاتك، اتصل بأحبائك واكتشف محتوى جذاباً.'
        },
        features: {
            fr: ['Appels Audio/Vidéo HD', 'Partage de Moments (Vidéos)', 'Messagerie instantanée', 'Histoires & Actus quotidiennes'],
            en: ['HD Audio/Video Calls', 'Moment Sharing (Videos)', 'Instant Messaging', 'Daily Stories & News'],
            ar: ['مكالمات صوت وفيديو HD', 'مشاركة اللحظات (فيديو)', 'رسائل فورية', 'قصص وأخبار يومية']
        },
        appStore: '#',
        playStore: '#',
        screenshots: [
            'assets/images/m_screen_1.png',
            'assets/images/m_screen_2.png',
            'assets/images/m_screen_3.png'
        ],
        privacy: 'm-privacy.html',
        terms: 'm-terms.html',
        gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        status: 'Bientôt'
    },
    locsy: {
        id: 'locsy',
        icon: '📍',
        iconUrl: 'assets/images/locsy-icon-dark.png',
        name: 'Locsy',
        tagline: {
            fr: 'L\'IA qui réinvente vos balades.',
            en: 'AI reinventing your walks.',
            ar: 'الذكاء الاصطناعي يعيد ابتكار جولاتك.'
        },
        description: {
            fr: 'Lancée en Mars 2026. Locsy utilise l\'IA Gemini pour transformer vos explorations. Que vous soyez touriste ou local, redécouvrez la ville via des parcours uniques générés sur-mesure.',
            en: 'Launched in March 2026. Locsy uses Gemini AI to transform your explorations. Whether you are a tourist or a local, rediscover the city through unique tailor-made journeys.',
            ar: 'تم إطلاقه في مارس 2026. يستخدم Locsy الذكاء الاصطناعي Gemini لتحويل استكشافاتك. سواء كنت سائحاً أو محلياً، أعد اكتشاف المدينة من خلال مسارات فريدة مصممة خصيصاً.'
        },
        features: {
            fr: ['Générateur d\'itinéraires IA', 'Exploration de spots secrets', 'Compagnon de voyage vocal', 'Cartes interactives 3D'],
            en: ['AI Itinerary Generator', 'Secret Spots Exploration', 'Voice Travel Companion', '3D Interactive Maps'],
            ar: ['مولد مسارات بالذكاء الاصطناعي', 'استكشاف الأماكن السرية', 'رفيق سفر صوتي', 'خرائط تفاعلية ثلاثية الأبعاد']
        },
        appStore: 'https://apps.apple.com/fr/app/locsy/id6760738424',
        playStore: '#',
        screenshots: [
            'assets/images/locsy_s1_final.png'
        ],
        privacy: 'locsy-privacy.html',
        terms: 'locsy-terms.html',
        gradient: 'linear-gradient(135deg, #262626, #0a0a0a)',
        status: 'Disponible'
    },
    kinto: {
        id: 'kinto',
        icon: '💰',
        iconUrl: 'assets/images/kinto-icon.png',
        name: 'Kinto',
        tagline: {
            fr: 'Gérez vos dépenses avec l\'IA.',
            en: 'Track your spending with AI.',
            ar: 'تتبع مصاريفك بالذكاء الاصطناعي.'
        },
        description: {
            fr: 'Kinto est une application de gestion financière personnelle propulsée par l\'IA. Scannez vos reçus automatiquement, suivez vos dépenses par catégorie, définissez des budgets mensuels et atteignez vos objectifs d\'épargne. Disponible sans compte — vos données sont sauvegardées localement.',
            en: 'Kinto is an AI-powered personal finance app. Automatically scan receipts, track expenses by category, set monthly budgets and reach your savings goals. Available without an account — your data is saved locally.',
            ar: 'فينورا تطبيق إدارة مالية شخصية مدعوم بالذكاء الاصطناعي. امسح الفواتير تلقائياً، تتبع المصاريف حسب الفئة، حدد ميزانيات شهرية وحقق أهداف الادخار. متاح بدون حساب — بياناتك محفوظة محلياً.'
        },
        features: {
            fr: ['Scanner de reçus IA', 'Suivi des dépenses & revenus', 'Budget mensuel par catégorie', 'Objectifs d\'épargne intelligents', 'Mode invité (sans compte)', 'Premium : scans illimités + export'],
            en: ['AI Receipt Scanner', 'Expense & Income Tracking', 'Monthly Budget by Category', 'Smart Savings Goals', 'Guest Mode (no account needed)', 'Premium: Unlimited scans + export'],
            ar: ['ماسح فواتير بالذكاء الاصطناعي', 'تتبع المصاريف والإيرادات', 'ميزانية شهرية حسب الفئة', 'أهداف ادخار ذكية', 'وضع الزائر (بدون حساب)', 'بريميوم: مسح غير محدود + تصدير']
        },
        appStore: '#',
        playStore: '#',
        screenshots: [
            'assets/images/kinto-screen1.png',
            'assets/images/kinto-screen2.png',
            'assets/images/kinto-screen3.png',
        ],
        privacy: 'kinto-privacy.html',
        terms: 'kinto-terms.html',
        gradient: 'linear-gradient(135deg, #7C6AF7, #5B4BD4)',
        status: "Bientôt sur l'App Store"
    },
    mo_frame: {
        id: 'mo_frame',
        icon: '🖼️',
        iconUrl: 'assets/images/mo-frame-icon.png',
        name: 'Mo Frame',
        tagline: {
            fr: 'Créez des posts stylés en un clic.',
            en: 'Create styled posts in one click.',
            ar: 'اصنع منشورات مميزة بضغطة واحدة.'
        },
        description: {
            fr: 'Un bot Telegram qui transforme vos textes et photos en posts stylés professionnels. Choisissez votre style (Dark/Light), personnalisez votre profil et partagez instantanément. Premium disponible (150 Stars/mois).',
            en: 'A Telegram bot that transforms your text and photos into professional styled posts. Choose your style (Dark/Light), customize your profile and share instantly. Premium available (150 Stars/month).',
            ar: 'بوت Telegram يحول نصوصك وصورك إلى منشورات احترافية. اختر أسلوبك (داكن/فاتح)، خصص بروفيلك وشارك فوراً. بريميوم متاح (150 نجمة/شهر).'
        },
        features: {
            fr: ['Génération de posts stylés', 'Styles Twitter Dark & Light', 'Profil personnalisable', 'Premium illimité (150 Stars)'],
            en: ['Styled post generation', 'Twitter Dark & Light styles', 'Customizable profile', 'Unlimited Premium (150 Stars)'],
            ar: ['إنشاء منشورات مميزة', 'أسلوب Twitter داكن وفاتح', 'ملف تعريف مخصص', 'بريميوم غير محدود (150 نجمة)']
        },
        telegram: 'https://t.me/Moframe_bot',
        screenshots: [
            'assets/images/mo_frame_s1_final.png',
            'assets/images/mo_frame_s2_final.png',
            'assets/images/mo_frame_s3_final.png'
        ],
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        status: 'Bot'
    },
    whatsapp_bot_cours: {
        id: 'whatsapp_bot_cours',
        icon: '🤖',
        iconUrl: 'assets/images/whatsapp-bot-icon.png',
        name: 'M Académie',
        tagline: {
            fr: 'Votre assistant de cours bilingue.',
            en: 'Your bilingual course assistant.',
            ar: 'مساعدك الشخصي للدروس (فرنسي/عربي).'
        },
        description: {
            fr: 'Un assistant WhatsApp intelligent (Français/Arabe) conçu pour une gestion fluide des cours. Il guide les élèves, fournit les liens de cours et tests, et propose une interface d\'administration complète pour suivre les statistiques en temps réel.',
            en: 'A smart WhatsApp assistant (French/Arabic) designed for smooth course management. It guides students, provides course and test links, and offers a full admin interface to track statistics in real-time.',
            ar: 'مساعد واتساب ذكي (فرنسي/عربي) مصمم لإدارة الدروس بسلاسة. يقوم بتوجيه الطلاب، وتوفير روابط الدروس والاختبارات، ويوفر واجهة إدارة كاملة لمتابعة الإحصائيات في الوقت الفعلي.'
        },
        features: {
            fr: ['Assistant bilingue (Français/Arabe)', 'Détection intelligente d\'intention', 'Statistiques admin en temps réel', 'Gestion dynamique des liens'],
            en: ['Bilingual Assistant (French/Arabic)', 'Smart intent detection', 'Real-time admin statistics', 'Dynamic link management'],
            ar: ['مساعد ثنائي اللغة (فرنسي/عربي)', 'كشف ذكي للنية', 'إحصائيات إدارية فورية', 'إدارة ديناميكية للروابط']
        },
        whatsapp: 'https://wa.me/33759275623',
        screenshots: [
            'assets/images/cal_elite_1.png',
            'assets/images/cal_elite_2.png',
            'assets/images/cal_elite_3.png'
        ],
        gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
        status: 'Bot WhatsApp'
    }
};

// --- Language Support ---
const translations = {
    fr: {
        nav_home: 'Accueil',
        nav_apps: 'Mes Apps',
        nav_contact: 'Contact',
        hero_title: 'Inspirer le futur par le <span class="gradient-text">code et l\'IA</span>',
        hero_desc: 'Développeur passionné par la création d\'expériences mobiles innovantes. Zikr, M App et Locsy — mes projets 2026.',
        hero_cta_apps: 'Voir mes apps',
        about_title: 'Passionné par l\'innovation',
        about_p1: 'Je suis Mohamed Sayed, un développeur dédié à la création d\'expériences utilisateur exceptionnelles, en combinant rigueur technique et créativité.',
        about_stat_apps: 'Apps en 2026',
        about_stat_year: 'Année de lancement',
        skills_title: 'Compétences',
        skill_dev_title: 'Développement',
        skill_dev_desc: 'Swift, Flutter, Node.js',
        skill_ai_title: 'Intelligence Artificielle',
        skill_ai_desc: 'Gemini AI, Prompt Engineering',
        skill_prod_title: 'Produit & Design',
        skill_prod_desc: 'UX/UI, Lancement App Store',
        timeline_title: 'Parcours 2026',
        timeline_subtitle: 'Une année consacrée à l\'innovation.',
        timeline_locsy_date: 'Mars 2026',
        timeline_locsy_title: 'Lancement de Locsy',
        timeline_locsy_p: 'Application de planification de voyages avec intelligence artificielle Gemini.',
        timeline_zikr_date: 'Mars 2026',
        timeline_zikr_title: 'Lancement de Zikr',
        timeline_zikr_p: 'Application spirituelle iOS complète : Coran, Adhkar, Qibla et Imam IA.',
        timeline_m_date: 'Bientôt',
        timeline_m_title: 'Lancement de M App',
        timeline_m_p: 'Réseau social avec Reels, messagerie instantanée et communauté.',
        timeline_kinto_date: 'Avril 2026',
        timeline_kinto_title: 'Lancement de Kinto',
        timeline_kinto_p: 'App de finance personnelle avec scanner de reçus IA et gestion de budget.',
        portfolio_title: 'Mes Applications',
        portfolio_subtitle: 'Cinq apps originales créées en 2026.',
        app_zikr_tagline: 'Votre compagnon spirituel quotidien.',
        app_m_tagline: 'Social, Vidéos & Reels.',
        app_locsy_tagline: 'L\'IA qui réinvente vos voyages.',
        app_mo_frame_tagline: 'Créez des posts stylés en un clic.',
        app_kinto_tagline: 'Gérez vos dépenses avec l\'IA.',
        app_booking_title: 'M Académie',
        app_booking_tagline: 'Choisissez votre créneau en un clic.',
        booking_modal_title: 'M Académie - Réservation',
        booking_modal_subtitle: 'Choisissez un jour et une heure disponible.',
        select_hour: 'Sélectionnez une heure',
        back: 'Retour',
        form_title: 'Vos informations',
        label_name: 'Prénom',
        label_phone: 'Téléphone WhatsApp',
        label_email: 'Email (Optionnel)',
        form_disclaimer: 'Vérifiez bien votre numéro pour recevoir le lien de paiement Revolut et l\'accès au cours.',
        btn_confirm: 'Confirmer la réservation',
        success_title: 'Demande reçue !',
        success_desc: 'Merci ! Nous allons vous envoyer par WhatsApp et par mail un lien pour procéder au paiement ainsi que les informations pour accéder au cours.',
        btn_close: 'Fermer',
        status_booking: 'Réservation en ligne',
        status_bot: 'Bot Telegram',
        contact_title: 'Travaillons ensemble',
        contact_subtitle: 'Une idée de projet ? Contactez-moi.',
        modal_features: 'Fonctionnalités',
        modal_download: 'Télécharger',
        modal_legal: 'Informations légales',
        modal_privacy: 'Confidentialité',
        modal_terms: 'Conditions d\'utilisation',
        footer_rights: 'Tous droits réservés.',
        faq_title: 'Questions fréquentes',
        faq_q1: 'Comment puis-je télécharger Zikr ?',
        faq_a1: 'Zikr est disponible sur l\'App Store. Recherchez "Zikr" ou cliquez sur le bouton App Store dans la fiche de l\'application.',
        faq_q2: 'M App et Locsy sont-ils disponibles ?',
        faq_a2: 'M App et Locsy seront lancés en 2026. Restez connecté pour être informé en avant-première.',
        faq_q3: 'Comment vous contacter ?',
        faq_a3: 'Envoyez-moi un email à contact@mohameds.net ou suivez-moi sur Instagram pour les dernières nouvelles.',
        faq_q4: 'Proposez-vous des collaborations ?',
        faq_a4: 'Oui ! Je suis ouvert aux projets freelance et aux collaborations. Contactez-moi directement.',
        faq_btn: 'FAQ',
    },
    en: {
        nav_home: 'Home',
        nav_apps: 'My Apps',
        nav_contact: 'Contact',
        hero_title: 'Inspiring the future through <span class="gradient-text">code and AI</span>',
        hero_desc: 'Mobile developer passionate about building innovative experiences. Zikr, M App and Locsy — my 2026 projects.',
        hero_cta_apps: 'Explore my apps',
        about_title: 'Driven by innovation',
        about_p1: 'I\'m Mohamed Sayed, a developer focused on crafting outstanding mobile experiences, blending technical precision with creative vision.',
        about_stat_apps: 'Apps in 2026',
        about_stat_year: 'Launch Year',
        skills_title: 'Skills',
        skill_dev_title: 'Development',
        skill_dev_desc: 'Swift, Flutter, Node.js',
        skill_ai_title: 'Artificial Intelligence',
        skill_ai_desc: 'Gemini AI, Prompt Engineering',
        skill_prod_title: 'Product & Design',
        skill_prod_desc: 'UX/UI, App Store Launch',
        timeline_title: '2026 Journey',
        timeline_subtitle: 'A year dedicated to innovation.',
        timeline_locsy_date: 'March 2026',
        timeline_locsy_title: 'Launching Locsy',
        timeline_locsy_p: 'AI-powered travel planning app using Gemini AI.',
        timeline_zikr_date: 'March 2026',
        timeline_zikr_title: 'Launching Zikr',
        timeline_zikr_p: 'Complete spiritual iOS app: Quran, Adhkar, Qibla and AI Imam.',
        timeline_m_date: 'Coming Soon',
        timeline_m_title: 'Launching M App',
        timeline_m_p: 'Social network with Reels, instant messaging and community features.',
        timeline_kinto_date: 'April 2026',
        timeline_kinto_title: 'Launching Kinto',
        timeline_kinto_p: 'Personal finance app with AI receipt scanner and smart budget management.',
        portfolio_title: 'My Applications',
        portfolio_subtitle: 'Five original apps built in 2026.',
        app_zikr_tagline: 'Your daily spiritual companion.',
        app_m_tagline: 'Social, Videos & Reels.',
        app_locsy_tagline: 'AI reinventing your travels.',
        app_mo_frame_tagline: 'Create styled posts in one click.',
        app_kinto_tagline: 'Track your spending with AI.',
        app_booking_title: 'M Academy',
        app_booking_tagline: 'Choose your slot in one click.',
        booking_modal_title: 'M Academy - Booking',
        booking_modal_subtitle: 'Choose an available day and time.',
        select_hour: 'Select an hour',
        back: 'Back',
        form_title: 'Your information',
        label_name: 'First name',
        label_phone: 'WhatsApp phone',
        label_email: 'Email (Optional)',
        form_disclaimer: 'Check your number to receive the payment link and course access.',
        btn_confirm: 'Confirm booking',
        success_title: 'Request Received!',
        success_desc: 'Thank you! We will send you a payment link and course access details via WhatsApp and email.',
        btn_close: 'Close',
        status_booking: 'Online Booking',
        status_bot: 'Telegram Bot',
        contact_title: 'Let\'s work together',
        contact_subtitle: 'Have a project in mind? Get in touch.',
        modal_features: 'Features',
        modal_download: 'Download',
        modal_legal: 'Legal',
        modal_privacy: 'Privacy Policy',
        modal_terms: 'Terms of Service',
        footer_rights: 'All rights reserved.',
        faq_title: 'Frequently Asked Questions',
        faq_q1: 'How do I download Zikr?',
        faq_a1: 'Zikr is available on the App Store. Search for "Zikr" or tap the App Store button on its app page.',
        faq_q2: 'Are M App and Locsy available?',
        faq_a2: 'M App and Locsy are launching in 2026. Stay tuned for early access announcements.',
        faq_q3: 'How can I contact you?',
        faq_a3: 'Send me an email at contact@mohameds.net or follow me on Instagram for the latest updates.',
        faq_q4: 'Do you take freelance projects?',
        faq_a4: 'Yes! I am open to freelance projects and collaborations. Feel free to reach out directly.',
        faq_btn: 'FAQ',
    },
    ar: {
        nav_home: 'الرئيسية',
        nav_apps: 'تطبيقاتي',
        nav_contact: 'تواصل',
        hero_title: 'نُلهم المستقبل بـ<span class="gradient-text">البرمجة والذكاء الاصطناعي</span>',
        hero_desc: 'مطوّر شغوف بصناعة تجارب موبايل مبتكرة. Zikr وM App وLocsy — مشاريعي لعام 2026.',
        hero_cta_apps: 'اكتشف تطبيقاتي',
        about_title: 'شغوف بالإبداع',
        about_p1: 'أنا محمد سيد، مطوّر متخصص في بناء تجارب مستخدم متميزة، أجمع بين الدقة التقنية والإبداع لتحويل الأفكار إلى واقع.',
        about_stat_apps: 'تطبيقات في 2026',
        about_stat_year: 'سنة الإطلاق',
        skills_title: 'المهارات',
        skill_dev_title: 'تطوير البرمجيات',
        skill_dev_desc: 'Swift, Flutter, Node.js',
        skill_ai_title: 'الذكاء الاصطناعي',
        skill_ai_desc: 'Gemini AI, Prompt Engineering',
        skill_prod_title: 'المنتج والتصميم',
        skill_prod_desc: 'UX/UI، إطلاق التطبيقات',
        timeline_title: 'مسيرة 2026',
        timeline_subtitle: 'عام مخصص للابتكار.',
        timeline_locsy_date: 'مارس 2026',
        timeline_locsy_title: 'إطلاق Locsy',
        timeline_locsy_p: 'تطبيق ذكي لتخطيط الرحلات بالذكاء الاصطناعي Gemini.',
        timeline_zikr_date: 'مارس 2026',
        timeline_zikr_title: 'إطلاق Zikr',
        timeline_zikr_p: 'تطبيق إسلامي شامل: قرآن، أذكار، قبلة وإمام ذكاء اصطناعي.',
        timeline_m_date: 'قريباً',
        timeline_m_title: 'إطلاق M App',
        timeline_m_p: 'شبكة اجتماعية بـReels ومحادثات فورية ومجتمع نشط.',
        timeline_kinto_date: 'أبريل 2026',
        timeline_kinto_title: 'إطلاق Kinto',
        timeline_kinto_p: 'تطبيق مالية شخصية مع ماسح فواتير ذكي وإدارة الميزانية.',
        portfolio_title: 'تطبيقاتي',
        portfolio_subtitle: 'خمسة تطبيقات أصلية أطلقتها في 2026.',
        app_zikr_tagline: 'رفيقك الروحي اليومي.',
        app_m_tagline: 'تواصل، فيديوهات وReels.',
        app_locsy_tagline: 'الذكاء الاصطناعي يعيد ابتكار رحلاتك.',
        app_mo_frame_tagline: 'اصنع منشورات مميزة بضغطة واحدة.',
        app_kinto_tagline: 'تتبع مصاريفك بالذكاء الاصطناعي.',
        app_booking_title: 'M أكاديمية',
        app_booking_tagline: 'اختر موعدك بضغطة واحدة.',
        booking_modal_title: 'M أكاديمية - حجز',
        booking_modal_subtitle: 'اختر يوماً ووقتاً متاحاً.',
        select_hour: 'اختر الساعة',
        back: 'رجوع',
        form_title: 'معلوماتك',
        label_name: 'الاسم الأول',
        label_phone: 'رقم واتساب',
        label_email: 'البريد الإلكتروني (اختياري)',
        form_disclaimer: 'تأكد من صحة رقمك لتلقي رابط الدفع وتفاصيل الدرس.',
        btn_confirm: 'تأكيد الحجز',
        success_title: 'تم استلام طلبك!',
        success_desc: 'شكراً لك! سنرسل لك رابط الدفع وتفاصيل الوصول إلى الدرس عبر الواتساب والبريد الإلكتروني.',
        btn_close: 'إغلاق',
        status_booking: 'حجز أونلاين',
        status_bot: 'بوت Telegram',
        contact_title: 'لنعمل معاً',
        contact_subtitle: 'لديك فكرة مشروع؟ تواصل معي.',
        modal_features: 'المميزات',
        modal_download: 'تحميل',
        modal_legal: 'معلومات قانونية',
        modal_privacy: 'سياسة الخصوصية',
        modal_terms: 'شروط الاستخدام',
        footer_rights: 'جميع الحقوق محفوظة.',
        faq_title: 'الأسئلة الشائعة',
        faq_q1: 'كيف أحمّل تطبيق Zikr؟',
        faq_a1: 'Zikr متاح على App Store. ابحث عن "Zikr" أو انقر على زر App Store في صفحة التطبيق.',
        faq_q2: 'هل M App وLocsy متاحان؟',
        faq_a2: 'سيتم إطلاق M App وLocsy في 2026. ترقّب الإعلانات للحصول على الوصول المبكر.',
        faq_q3: 'كيف أتواصل معك؟',
        faq_a3: 'راسلني على contact@mohameds.net أو تابعني على Instagram لآخر الأخبار.',
        faq_q4: 'هل تقبل مشاريع freelance؟',
        faq_a4: 'نعم! أنا منفتح على التعاون والمشاريع المستقلة. تواصل معي مباشرة.',
        faq_btn: 'الأسئلة الشائعة',
    }
};

let currentLang = 'fr';

function getPreferredLanguage() {
    // 1. Check localStorage
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
        return savedLang;
    }

    // 2. Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
        const langCode = browserLang.split('-')[0].toLowerCase();
        if (['en', 'fr', 'ar'].includes(langCode)) {
            return langCode;
        }
    }

    // 3. Default to fr
    return 'fr';
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });

    // Update all elements with data-i18n
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);

    // Specific updates for hardcoded IDs if needed
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerHTML = t.hero_title;
    if (document.getElementById('hero-desc')) document.getElementById('hero-desc').textContent = t.hero_desc;

    // Re-initialize text reveals after translation
    if (typeof initAdvancedVisuals === 'function') {
        initAdvancedVisuals();
    }
}

// --- Three.js Plexus Effect ---
let scene, camera, renderer, particles, lines;
const MAX_PARTICLES = 150;
const MIN_DISTANCE = 2.5;

function initThree() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8;

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(MAX_PARTICLES * 3);
        const velocities = [];

        for (let i = 0; i < MAX_PARTICLES; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
            velocities.push(new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            ));
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            size: 0.15,
            color: document.body.classList.contains('light-mode') ? 0x64748b : 0x10b981,
            transparent: true,
            opacity: 0.8
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Lines (Plexus)
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(MAX_PARTICLES * MAX_PARTICLES * 6);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: document.body.classList.contains('light-mode') ? 0x64748b : 0x10b981,
            transparent: true,
            opacity: 0.15
        });
        lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        function animate() {
            requestAnimationFrame(animate);
            const pos = particles.geometry.attributes.position.array;
            let lineIdx = 0;

            for (let i = 0; i < MAX_PARTICLES; i++) {
                // Update position
                pos[i * 3] += velocities[i].x;
                pos[i * 3 + 1] += velocities[i].y;
                pos[i * 3 + 2] += velocities[i].z;

                // Bounce
                if (Math.abs(pos[i * 3]) > 10) velocities[i].x *= -1;
                if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i].y *= -1;
                if (Math.abs(pos[i * 3 + 2]) > 10) velocities[i].z *= -1;

                // Connection lines
                for (let j = i + 1; j < MAX_PARTICLES; j++) {
                    const dx = pos[i * 3] - pos[j * 3];
                    const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                    const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < MIN_DISTANCE) {
                        linePositions[lineIdx++] = pos[i * 3];
                        linePositions[lineIdx++] = pos[i * 3 + 1];
                        linePositions[lineIdx++] = pos[i * 3 + 2];
                        linePositions[lineIdx++] = pos[j * 3];
                        linePositions[lineIdx++] = pos[j * 3 + 1];
                        linePositions[lineIdx++] = pos[j * 3 + 2];
                    }
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            lines.geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    } catch (e) {
        console.error('Three.js failed:', e);
    }
}

// Function to update particle color when theme changes
function updateParticleColor() {
    if (particles && particles.material) {
        const isLight = document.body.classList.contains('light-mode');
        particles.material.color.setHex(isLight ? 0x64748b : 0x10b981);
        particles.material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
    }
}

// --- Advanced Visuals (3D Tilt, Smooth Scroll, Reveals) ---
function initAdvancedVisuals() {
    // 1. Text Reveal — animate the element as a whole using pure GSAP to avoid conflicts
    const revealTexts = document.querySelectorAll(".reveal-text");
    
    revealTexts.forEach(text => {
        if (!text.classList.contains('gsap-ready')) {
            text.classList.add('gsap-ready');
            gsap.from(text, {
                scrollTrigger: { 
                    trigger: text, 
                    start: "top 95%" 
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "expo.out",
                clearProps: "all" // Cleans up inline styles after animation
            });
        }
    });

    // 2. 3D Tilt Effect
    const tiltElements = document.querySelectorAll(".app-card, .skill-card, .about-image");
    tiltElements.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(el, {
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.02,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // 3. Smooth Scroll Enhancement (Native feel but smoother)
    gsap.config({ force3D: true });
}

// --- Interactive Animations (Parallax, Magnetic) ---
function initInteractiveAnimations() {
    const heroContent = document.querySelector("#hero .container");
    const magneticBtns = document.querySelectorAll(".btn, .logo, .lang-btn, .theme-btn");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Hero Parallax (Refined)
        if (heroContent && window.scrollY < 800) {
            const xMove = (posX - window.innerWidth / 2) / 30;
            const yMove = (posY - window.innerHeight / 2) / 30;
            gsap.to(heroContent, {
                x: xMove,
                y: yMove,
                rotateX: -yMove / 2,
                rotateY: xMove / 2,
                duration: 1.2,
                ease: "power2.out"
            });
        }

        // Magnetic Buttons
        magneticBtns.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;
            const dist = Math.hypot(posX - btnX, posY - btnY);

            if (dist < 80) {
                const xMove = (posX - btnX) * 0.3;
                const yMove = (posY - btnY) * 0.3;
                gsap.to(btn, { x: xMove, y: yMove, duration: 0.4, ease: "power2.out" });
            } else {
                gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
            }
        });
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Stage GSAP Plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    initThree();
    initInteractiveAnimations();
    initAdvancedVisuals();

    // Initialize Language
    setLanguage(getPreferredLanguage());

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        updateParticleColor();
    });

    // GSAP Scroll Animations
    gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Sections reveal with skew effect
    gsap.utils.toArray('section').forEach(section => {
        if (section.id === 'hero') return;
        gsap.from(section.querySelectorAll('.container > *'), {
            scrollTrigger: {
                trigger: section,
                start: "top 85%"
            },
            y: 50,
            skewY: 2,
            scale: 0.98,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out"
        });
    });

    // Subtle float animation for app cards
    gsap.to('.app-card', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
            amount: 0.5,
            from: "random"
        }
    });

    // Scroll Animations for app cards
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.from('.app-card', {
            scrollTrigger: {
                trigger: '.apps-grid',
                start: 'top 85%',
                once: true // Ensure it only fires once and stays visible
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            clearProps: 'all' // Clean up styles after animation
        });
    }

    // Active Nav Tracking
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) link.classList.add('active');
        });
    });

    // Event Listeners for modal
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    const closeBookingBtn = document.getElementById('close-booking');
    if (closeBookingBtn) {
        closeBookingBtn.addEventListener('click', closeBookingModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
            closeBookingModal();
        }
    });

    // --- Booking System Logic ---
    let bookingFirestore;
    let currentCalendarDate = new Date(); // Month being viewed
    let selectedBookingDate = null;      // Specific day selected
    let selectedBookingSlot = null;      // Specific hour selected

    // Real Firebase Config
    const firebaseConfig = {
        apiKey: "AIzaSyDpZNOqxUfG7KZo2g3-7Py254P2GDSzRjo",
        authDomain: "mohameds-booking.firebaseapp.com",
        projectId: "mohameds-booking",
        storageBucket: "mohameds-booking.firebasestorage.app",
        messagingSenderId: "547186990707",
        appId: "1:547186990707:web:8e273902d7f3bf2781d406",
        measurementId: "G-G2HMBCFESR"
    };

    // Initialize Firebase
    if (window.firebaseSDK) {
        const { initializeApp, getFirestore } = window.firebaseSDK;
        try {
            const app = initializeApp(firebaseConfig);
            bookingFirestore = getFirestore(app);
            console.log("Firebase initialized for Booking System");
        } catch (e) {
            console.error("Firebase init error:", e.message);
        }
    }

    // ... (logic moved to global scope) ...
});

// --- GLOBAL MODAL CONTROLLERS ---
window.openAppModal = function(appId) {
    const app = apps[appId];
    if (!app) return;
    const modalData = document.getElementById('modal-data');
    const t = translations[currentLang];
    const tagline = typeof app.tagline === 'object' ? app.tagline[currentLang] : app.tagline;
    const description = typeof app.description === 'object' ? app.description[currentLang] : app.description;
    const features = typeof app.features === 'object' ? app.features[currentLang] : app.features;

    modalData.innerHTML = `
        <div class="modal-grid">
            <div class="modal-info">
                <div class="modal-header-box">
                    <div class="modal-app-icon" style="background: ${app.gradient};">
                        ${app.iconUrl ? `<img src="${app.iconUrl}" alt="${app.name}">` : `<span style="font-size:2.5rem;">${app.icon}</span>`}
                    </div>
                    <div>
                        <h2 class="modal-app-title">${app.name}</h2>
                        <p class="modal-app-tagline">${tagline}</p>
                    </div>
                </div>
                <p class="modal-description">${description}</p>
                <div class="modal-features-section">
                    <h3 class="modal-features-title">${t.modal_features}</h3>
                    <div class="modal-features-list">
                        ${features.map(f => `<div class="modal-feature-item"><i class="fas fa-check-circle"></i><span>${f}</span></div>`).join('')}
                    </div>
                </div>
                <div class="modal-actions">
                    ${app.telegram ? `<a href="${app.telegram}" target="_blank" class="btn btn-primary"><i class="fab fa-telegram"></i> Telegram</a>` : `
                    ${(app.appStore && app.appStore !== '#') ? `<a href="${app.appStore}" target="_blank" class="btn btn-primary"><i class="fab fa-apple"></i> App Store</a>` : ''}
                    ${(app.playStore && app.playStore !== '#') ? `<a href="${app.playStore}" target="_blank" class="btn glass"><i class="fab fa-google-play"></i> Play Store</a>` : ''}`}
                </div>
            </div>
            <div class="modal-mockups">
                ${app.screenshots.map(s => `<div class="iphone-device"><div class="iphone-notch"></div><img src="${s}" class="iphone-screen"></div>`).join('')}
            </div>
        </div>`;
    document.getElementById('app-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    document.getElementById('app-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
};

window.openFAQ = function() {
    document.getElementById('faq-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
};
window.closeFAQ = function() {
    document.getElementById('faq-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
};
window.toggleFAQ = function(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
};
window.toggleMobileMenu = function() {
    document.getElementById('nav-links').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
};
window.closeMobileMenu = function() {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
};

// --- GLOBAL BOOKING CONTROLLERS ---
let selectedBookingDate = null;
let selectedBookingSlot = null;
let currentCalendarDate = new Date();

window.openBookingModal = function() {
    console.log("Opening M Académie Modal...");
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('slot-selection-view').style.display = 'block';
    document.getElementById('booking-form-view').style.display = 'none';
    document.getElementById('booking-success-view').style.display = 'none';
    
    selectedBookingDate = null;
    selectedBookingSlot = null;
    renderCalendar();
};

window.closeBookingModal = function() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

window.renderCalendar = function() {
    const grid = document.getElementById('calendar-grid');
    const monthDisplay = document.getElementById('current-month-display');
    if (!grid || !monthDisplay) return;
    grid.innerHTML = '';
    
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const monthYear = new Intl.DateTimeFormat(currentLang, { month: 'long', year: 'numeric' }).format(currentCalendarDate);
    monthDisplay.textContent = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let startingDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const dayNames = currentLang === 'ar' ? ['ن','ث','ر','خ','ج','س','ح'] : ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
    dayNames.forEach(name => {
        const el = document.createElement('div');
        el.className = 'calendar-day-header';
        el.textContent = name;
        grid.appendChild(el);
    });

    for (let i = 0; i < startingDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day empty';
        grid.appendChild(empty);
    }

    const today = new Date();
    today.setHours(0,0,0,0);

    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const el = document.createElement('div');
        el.className = 'calendar-day';
        el.textContent = d;
        if (date < today) {
            el.classList.add('disabled');
        } else {
            el.classList.add('available');
            el.onclick = () => window.handleDayClick(date, el);
        }
        if (selectedBookingDate && date.getTime() === selectedBookingDate.getTime()) el.classList.add('selected');
        grid.appendChild(el);
    }
};

window.handleDayClick = function(date, el) {
    selectedBookingDate = date;
    document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');
    const dateStr = new Intl.DateTimeFormat(currentLang, { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    document.getElementById('selected-date-display').textContent = dateStr;
    renderSlots(date);
};

window.renderSlots = function(date) {
    const container = document.getElementById('slots-grid');
    container.innerHTML = '';
    const hours = [9, 10, 11, 12, 14, 15, 16, 17];
    hours.forEach(hour => {
        const slot = document.createElement('div');
        slot.className = 'time-slot glass';
        slot.textContent = `${hour}:00 - ${hour+1}:00`;
        slot.onclick = () => window.handleSlotClick(`${hour}:00`);
        container.appendChild(slot);
    });
};

window.handleSlotClick = function(time) {
    selectedBookingSlot = time;
    document.getElementById('slot-selection-view').style.display = 'none';
    document.getElementById('booking-form-view').style.display = 'block';
};

window.prevMonth = function() { currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1); renderCalendar(); };
window.nextMonth = function() { currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1); renderCalendar(); };
window.backToSlots = function() {
    document.getElementById('slot-selection-view').style.display = 'block';
    document.getElementById('booking-form-view').style.display = 'none';
};
