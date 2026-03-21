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
        privacy: 'privacy.html',
        terms: 'terms.html',
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
            fr: 'Lancée en Juin 2026. Un réseau social fluide et moderne (Expo/Supabase) axé sur l\'instant présent. Partagez vos moments, appelez vos proches et découvrez du contenu captivant.',
            en: 'Launched in June 2026. A smooth and modern social network (Expo/Supabase) focused on the instant. Share your moments, call your loved ones, and discover captivating content.',
            ar: 'تم إطلاقه في يونيو 2026. شبكة اجتماعية سريعة وحديثة (Expo/Supabase) تركز على اللحظة. شارك لحظاتك، اتصل بأحبائك واكتشف محتوى جذاباً.'
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
        status: 'Disponible'
    },
    locsy: {
        id: 'locsy',
        icon: '📍',
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
        appStore: '#',
        playStore: '#',
        privacy: 'privacy.html',
        terms: 'terms.html',
        gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
        status: 'Nouveau'
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
        timeline_m_date: 'Juin 2026',
        timeline_m_title: 'Lancement de M App',
        timeline_m_p: 'Réseau social avec Reels, messagerie instantanée et communauté.',
        portfolio_title: 'Mes Applications',
        portfolio_subtitle: 'Trois apps originales créées en 2026.',
        app_zikr_tagline: 'Votre compagnon spirituel quotidien.',
        app_m_tagline: 'Social, Vidéos & Reels.',
        app_locsy_tagline: 'L\'IA qui réinvente vos voyages.',
        status_available: 'Disponible',
        status_new: 'Bientôt',
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
        timeline_m_date: 'June 2026',
        timeline_m_title: 'Launching M App',
        timeline_m_p: 'Social network with Reels, instant messaging and community features.',
        portfolio_title: 'My Applications',
        portfolio_subtitle: 'Three original apps built in 2026.',
        app_zikr_tagline: 'Your daily spiritual companion.',
        app_m_tagline: 'Social, Videos & Reels.',
        app_locsy_tagline: 'AI reinventing your travels.',
        status_available: 'Available',
        status_new: 'Coming soon',
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
        timeline_m_date: 'يونيو 2026',
        timeline_m_title: 'إطلاق M App',
        timeline_m_p: 'شبكة اجتماعية بـReels ومحادثات فورية ومجتمع نشط.',
        portfolio_title: 'تطبيقاتي',
        portfolio_subtitle: 'ثلاثة تطبيقات أصلية أطلقتها في 2026.',
        app_zikr_tagline: 'رفيقك الروحي اليومي.',
        app_m_tagline: 'تواصل، فيديوهات وReels.',
        app_locsy_tagline: 'الذكاء الاصطناعي يعيد ابتكار رحلاتك.',
        status_available: 'متاح',
        status_new: 'قريباً',
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

    // Specific updates for hardcoded IDs if needed
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerHTML = t.hero_title;
    if (document.getElementById('hero-desc')) document.getElementById('hero-desc').textContent = t.hero_desc;
}

// --- Three.js Bokeh Effect ---
let scene, camera, renderer, particles;

function initThree() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 3000; i++) {
            vertices.push(
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10
            );
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            color: document.body.classList.contains('light-mode') ? 0x64748b : 0x10b981,
            transparent: true,
            opacity: 0.6,
            blending: document.body.classList.contains('light-mode') ? THREE.NormalBlending : THREE.AdditiveBlending
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.0008;
            particles.rotation.x += 0.0004;
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

// --- Modal Logic ---
function openAppModal(appId) {
    const app = apps[appId];
    if (!app) return;

    const modalData = document.getElementById('modal-data');
    const t = translations[currentLang];
    
    // Get localized content for the app
    const tagline = typeof app.tagline === 'object' ? app.tagline[currentLang] : app.tagline;
    const description = typeof app.description === 'object' ? app.description[currentLang] : app.description;
    const features = typeof app.features === 'object' ? app.features[currentLang] : app.features;

    modalData.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; min-height: 400px;">

            <!-- LEFT COLUMN: Info -->
            <div>
                <!-- Header -->
                <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="width: 80px; height: 80px; border-radius: 20px; background: ${app.gradient}; overflow: hidden; flex-shrink: 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                        ${app.iconUrl
                            ? `<img src="${app.iconUrl}" alt="${app.name}" style="width:100%;height:100%;object-fit:cover;border-radius:20px;">`
                            : `<span style="font-size:2.5rem;display:flex;align-items:center;justify-content:center;height:100%;">${app.icon}</span>`
                        }
                    </div>
                    <div>
                        <h2 style="font-size: 1.8rem; margin-bottom: 0.25rem;">${app.name}</h2>
                        <p style="color: var(--primary); font-weight: 600;">${tagline}</p>
                    </div>
                </div>

                <!-- Description -->
                <p style="font-size: 1rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 2rem;">${description}</p>

                <!-- Features -->
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.5; margin-bottom: 1rem;">${t.modal_features}</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                        ${features.map(f => `
                        <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                            <i class="fas fa-check-circle" style="color: var(--primary); flex-shrink:0;"></i>
                            <span>${f}</span>
                        </div>`).join('')}
                    </div>
                </div>

                <!-- Download buttons -->
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                    <a href="${app.appStore}" target="_blank" class="btn ${app.appStore === '#' ? 'glass' : 'btn-primary'}" style="flex:1; min-width:140px; justify-content:center; ${app.appStore === '#' ? 'pointer-events:none;opacity:0.4;' : ''}">
                        <i class="fab fa-apple"></i> App Store
                    </a>
                    <a href="${app.playStore}" target="_blank" class="btn glass" style="flex:1; min-width:140px; justify-content:center; ${app.playStore === '#' ? 'pointer-events:none;opacity:0.4;' : ''}">
                        <i class="fab fa-google-play"></i> Google Play
                    </a>
                    ${app.whatsapp ? `
                    <a href="${app.whatsapp}" target="_blank" class="btn glass" style="flex:1; min-width:140px; justify-content:center; background:rgba(37,211,102,0.12); color:#25D366; border-color:rgba(37,211,102,0.25);">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>` : ''}
                </div>

                <!-- Legal -->
                <div style="display:flex; gap:1.5rem; padding-top:1rem; border-top:1px solid var(--glass-border);">
                    <a href="${app.privacy}" style="color:var(--primary);text-decoration:none;font-size:0.9rem;display:flex;align-items:center;gap:0.4rem;">
                        <i class="fas fa-shield-alt"></i> ${t.modal_privacy}
                    </a>
                    <a href="${app.terms}" style="color:var(--primary);text-decoration:none;font-size:0.9rem;display:flex;align-items:center;gap:0.4rem;">
                        <i class="fas fa-file-alt"></i> ${t.modal_terms}
                    </a>
                </div>
            </div>

            <!-- RIGHT COLUMN: iPhone Mockups -->
            <div style="display: flex; justify-content: center; align-items: center; gap: -1rem; position: relative; height: 420px;">
                ${app.screenshots && app.screenshots.length > 0 ? (() => {
                    const screens = app.screenshots.slice(0, 3);
                    const positions = [
                        'transform: rotate(-6deg) translateX(-80px) translateY(20px); z-index:1;',
                        'transform: rotate(0deg) translateY(-15px); z-index:3;',
                        'transform: rotate(6deg) translateX(80px) translateY(20px); z-index:1;'
                    ];
                    return screens.map((s, i) => `
                        <div style="position:absolute; ${positions[i] || ''}
                            width: 140px; height: 290px;
                            background: #1a1a2e;
                            border-radius: 36px;
                            border: 3px solid #333;
                            box-shadow: 0 25px 60px rgba(0,0,0,0.5), inset 0 0 0 2px #222;
                            overflow: hidden;
                            flex-shrink: 0;">
                            <!-- Notch -->
                            <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:50px;height:10px;background:#1a1a2e;border-radius:6px;z-index:10;"></div>
                            <!-- Screen -->
                            <img src="${s}" alt="Screenshot ${i+1}"
                                style="width:100%;height:100%;object-fit:cover;display:block;">
                        </div>
                    `).join('');
                })() : `<div style="color:var(--text-muted);text-align:center;"><i class="fas fa-mobile-alt" style="font-size:4rem;opacity:0.3;"></i></div>`}
            </div>

        </div>
    `;

    const modal = document.getElementById('app-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('app-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openFAQ() {
    document.getElementById('faq-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    // Re-apply translations to the dynamically-rendered FAQ
    setLanguage(currentLang);
}

function closeFAQ() {
    document.getElementById('faq-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleFAQ(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    initThree();

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
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Sections reveal
    gsap.utils.toArray('section').forEach(section => {
        if (section.id === 'hero') return;
        gsap.from(section.querySelectorAll('.container > *'), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
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
    document.getElementById('close-modal').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeModal();
    });
});
