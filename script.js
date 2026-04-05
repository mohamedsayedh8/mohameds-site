// --- App Data ---
const apps = {
    zikr: {
        id: 'zikr', icon: '📿', iconUrl: 'assets/images/zikr-icon.png', name: 'Zikr',
        tagline: { fr: 'Votre compagnon spirituel quotidien.', en: 'Your daily spiritual companion.', ar: 'رفيقك الروحي اليومي.' },
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
        screenshots: ['assets/images/zikr_screen_1.png', 'assets/images/zikr_screen_1.png', 'assets/images/zikr_screen_1.png'],
        color: '#10b981'
    },
    m_app: {
        id: 'm_app', icon: '🎵', iconUrl: 'assets/images/m-icon-dark.png', name: 'M App',
        tagline: { fr: 'Vivez l\'instant présent en 2026.', en: 'Live the moment in 2026.', ar: 'عش اللحظة في عام 2026.' },
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
        screenshots: ['assets/images/m_screen_1.png', 'assets/images/m_screen_1.png'],
        color: '#3b82f6'
    },
    locsy: {
        id: 'locsy', icon: '📍', iconUrl: 'assets/images/locsy-icon-dark.png', name: 'Locsy',
        tagline: { fr: 'L\'IA qui réinvente vos balades.', en: 'AI reinventing your walks.', ar: 'الذكاء الاصطناعي يعيد ابتكار جولاتك.' },
        description: {
            fr: 'Locsy utilise l\'IA Gemini pour transformer vos explorations. Que vous soyez touriste ou local, redécouvrez la ville via des parcours uniques générés sur-mesure.',
            en: 'Locsy uses Gemini AI to transform your explorations. Whether you are a tourist or a local, rediscover the city through unique tailor-made journeys.',
            ar: 'يستخدم Locsy الذكاء الاصطناعي Gemini لتحويل استكشافاتك.'
        },
        features: {
            fr: ['Itinéraires IA', 'Spots Secrets', 'Guide Vocal', 'Cartes 3D'],
            en: ['AI Routes', 'Secret Spots', 'Voice Guide', '3D Maps'],
            ar: ['مسارات بالذكاء الاصطناعي', 'أماكن سرية', 'دليل صوتي', 'خرائط ثلاثية الأبعاد']
        },
        appStore: 'https://apps.apple.com/fr/app/locsy/id6760738424',
        screenshots: ['assets/images/locsy_s1_final.png'],
        color: '#0ea5e9'
    },
    kinto: {
        id: 'kinto', icon: '💰', iconUrl: 'assets/images/kinto-icon.png', name: 'Kinto',
        tagline: { fr: 'Gérez vos dépenses avec l\'IA.', en: 'Track your spending with AI.', ar: 'تتبع مصاريفك بالذكاء الاصطناعي.' },
        description: {
            fr: 'Kinto est une application de gestion financière personnelle propulsée par l\'IA. Scannez vos reçus automatiquement, suivez vos dépenses par catégorie.',
            en: 'Kinto is an AI-powered personal finance app. Automatically scan receipts, track expenses by category.',
            ar: 'تطبيق إدارة مالية شخصية مدعوم بالذكاء الاصطناعي.'
        },
        features: {
             fr: ['Scanner IA', 'Budget Mensuel', 'Suivi de Revenus', 'Objectifs'],
             en: ['AI Scanner', 'Monthly Budget', 'Income Tracking', 'Goals'],
             ar: ['ماسح ذكاء اصطناعي', 'ميزانية شهرية', 'تتبع الدخل', 'أهداف']
        },
        screenshots: ['assets/images/kinto-screen1.png', 'assets/images/kinto-screen2.png'],
        color: '#8b5cf6'
    },
    mo_frame: {
        id: 'mo_frame', icon: '🖼️', iconUrl: 'assets/images/mo-frame-icon.png', name: 'Mo Frame',
        tagline: { fr: 'Créez des posts stylés en un clic.', en: 'Create styled posts in one click.', ar: 'اصنع منشورات مميزة بضغطة واحدة.' },
        description: { fr: 'Un bot Telegram qui transforme vos textes et photos en posts stylés professionnels.', en: 'A Telegram bot that transforms your text and photos into professional styled posts.', ar: 'بوت Telegram يحول نصوصك وصورك إلى منشورات احترافية.' },
        features: { fr: ['Styles Dark/Light', 'Personnalisation Profile'], en: ['Dark/Light Styles', 'Profile Customization'], ar: ['أنماط داكنة/فاتحة', 'تخصيص الملف الشخصي'] },
        telegram: 'https://t.me/Moframe_bot',
        screenshots: ['assets/images/mo_frame_s1_final.png'],
        color: '#7c3aed'
    },
    restopass: {
        id: 'restopass', icon: '🍴', iconUrl: 'assets/images/restopass-icon.png', name: 'RestoPass',
        tagline: { fr: 'Votre restaurant digitalisé en 5 min.', en: 'Your restaurant digitized in 5 min.', ar: 'مطعمك رقمي في 5 دقائق.' },
        description: {
            fr: 'RestoPass est une solution SaaS complète pour la restauration moderne. Digitalisez votre menu avec un QR code interactif, fidélisez vos clients avec des cartes Apple & Google Wallet.',
            en: 'RestoPass is a complete SaaS solution for modern dining. Digitize your menu with interactive QR codes, build customer loyalty with Apple & Google Wallet cards.',
            ar: 'RestoPass هو حل SaaS كامل للمطاعم الحديثة.'
        },
        features: { fr: ['Menu QR Code', 'Fidélité Wallet', 'Dashboard Analytics'], en: ['QR Code Menu', 'Wallet Loyalty', 'Analytics Dashboard'], ar: ['قائمة QR', 'ولاء المحفظة', 'لوحة التحليلات'] },
        screenshots: ['assets/images/restopass_s1.png', 'assets/images/restopass_s2.png'],
        color: '#f97316'
    }
};

// --- Translations ---
const translations = {
    fr: {
        nav_home: 'Accueil', nav_about: 'Moi', nav_apps: 'Projets', nav_contact: 'Contact',
        hero_title: 'Inspirer le futur par le <span class="gradient-text">code et l\'IA</span>',
        hero_desc: 'Développeur Elite créant des expériences mobiles et SaaS innovantes en 2026.',
        hero_cta_apps: 'Explorer mes projets',
        about_title: 'Passionné par l\'innovation',
        about_p1: 'Je suis Mohamed Sayed, un développeur dédié à la création d\'expériences utilisateur exceptionnelles.',
        about_stat_apps: 'Apps Lancées', about_stat_year: 'Année Clé',
        skills_title: 'Expertise Tech', skill_dev_title: 'Développement', skill_dev_desc: 'Swift, Flutter, Node.js & React',
        skill_ai_title: 'Intelligence Artificielle', skill_ai_desc: 'Gemini AI, Vision & Prompt Engineering',
        skill_prod_title: 'Produit', skill_prod_desc: 'UX Strategy, Launch Management',
        portfolio_title: 'Ecosystème Digital', portfolio_subtitle: 'Solutions mobiles, IA et plateformes SaaS.',
        status_available: 'Disponible', status_new: 'Bientôt', status_booking: 'Réservation',
        timeline_title: 'Parcours Elite 2026',
        timeline_locsy_title: 'Launch Locsy', timeline_locsy_p: 'Application de voyage avec IA Gemini.',
        timeline_zikr_title: 'Launch Zikr', timeline_zikr_p: 'App spirituelle iOS complète (SwiftUI).',
        timeline_kinto_title: 'Launch Kinto', timeline_kinto_p: 'Gestion de budget IA & Scanner de reçus.',
        timeline_restopass_title: 'Launch RestoPass', timeline_restopass_p: 'SaaS RESTO : Menu QR & Wallet.',
        timeline_m_title: 'Launch M App', timeline_m_p: 'Réseau social dynamique (Expo/Supabase).',
        contact_title: 'Travaillons ensemble', contact_subtitle: 'Une idée de projet ? Contactez-moi.',
        footer_rights: 'Tous droits réservés.'
    },
    en: {
        nav_home: 'Home', nav_about: 'About', nav_apps: 'Projects', nav_contact: 'Contact',
        hero_title: 'Inspiring the future with <span class="gradient-text">code and AI</span>',
        hero_desc: 'Elite developer crafting innovative mobile and SaaS experiences in 2026.',
        hero_cta_apps: 'Explore projects',
        about_title: 'Driven by Innovation',
        about_p1: 'I am Mohamed Sayed, a developer dedicated to creating outstanding user experiences.',
        about_stat_apps: 'Apps Launched', about_stat_year: 'Key Year',
        skills_title: 'Tech Expertise', skill_dev_title: 'Development', skill_dev_desc: 'Swift, Flutter, Node.js & React',
        skill_ai_title: 'Artificial Intelligence', skill_ai_desc: 'Gemini AI, Vision & Prompt Engineering',
        skill_prod_title: 'Product', skill_prod_desc: 'UX Strategy, Launch Management',
        portfolio_title: 'Digital Ecosystem', portfolio_subtitle: 'Mobile, AI and SaaS solutions.',
        status_available: 'Available', status_new: 'Coming Soon', status_booking: 'Booking',
        timeline_title: 'Elite Journey 2026',
        contact_title: 'Let\'s work together', contact_subtitle: 'Have a project in mind? Contact me.',
        footer_rights: 'All rights reserved.'
    },
    ar: {
        nav_home: 'الرئيسية', nav_about: 'عني', nav_apps: 'مشاريعي', nav_contact: 'تواصل',
        hero_title: 'نُلهم المستقبل بـ<span class="gradient-text">البرمجة والذكاء الاصطناعي</span>',
        hero_desc: 'مطوّر متميز يصنع تجارب موبايل وSaaS مبتكرة في عام 2026.',
        hero_cta_apps: 'اكتشف مشاريعي',
        portfolio_title: 'المنظومة الرقمية', portfolio_subtitle: 'حلول موبايل، ذكاء اصطناعي ومنصات SaaS.',
        contact_title: 'لنعمل معاً', contact_subtitle: 'لديك فكرة مشروع؟ تواصل معي.',
        footer_rights: 'جميع الحقوق محفوظة.'
    }
};

let currentLang = 'fr';

// --- Global Functions (ESM exports to Window) ---
window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.textContent.toLowerCase() === lang));

    const t = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
};

window.toggleTheme = function() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    if (typeof updateParticleColor === 'function') updateParticleColor();
};

window.openAppModal = function(appId) {
    const app = apps[appId];
    if (!app) return;
    const modal = document.getElementById('app-modal');
    document.getElementById('modal-data').innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:3rem; padding-top:2rem;">
            <div>
                <img src="${app.iconUrl}" style="width:100px; border-radius:22px; margin-bottom:1.5rem; box-shadow:0 10px 30px -5px ${app.color}55;">
                <h2 style="font-size:3.5rem; margin-bottom:1rem;">${app.name}</h2>
                <p style="font-size:1.2rem; line-height:1.8; opacity:0.8; margin-bottom:2rem;">${app.description[currentLang]}</p>
                <div style="display:flex; flex-direction:column; gap:0.8rem;">
                    ${app.features[currentLang].map(f => `<div style="display:flex; align-items:center; gap:0.8rem; font-weight:500;"><i class="fas fa-check-circle" style="color:${app.color}"></i> ${f}</div>`).join('')}
                </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:2rem;">
                <div style="display:flex; gap:1rem; overflow-x:auto; padding-bottom:1rem;">
                    ${app.screenshots.map(s => `<img src="${s}" style="width:200px; border-radius:20px; border:2px solid var(--border);">`).join('')}
                </div>
                <div style="display:flex; gap:1rem;">
                    ${app.appStore ? `<a href="${app.appStore}" class="btn btn-primary">App Store</a>` : ''}
                    <button class="btn glass" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
};
window.closeModal = () => document.getElementById('app-modal').classList.remove('active');

// --- 3D Background (Plexus Elite) ---
let scene, camera, renderer, particles, lines;
const MAX_PARTICLES = 160;

function initThree() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(MAX_PARTICLES * 3);
    const vels = [];

    for (let i = 0; i < MAX_PARTICLES; i++) {
        pos[i*3] = (Math.random()-0.5)*30; pos[i*3+1] = (Math.random()-0.5)*30; pos[i*3+2] = (Math.random()-0.5)*30;
        vels.push(new THREE.Vector3((Math.random()-0.5)*0.012, (Math.random()-0.5)*0.012, (Math.random()-0.5)*0.012));
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ size: 0.1, color: 0x10b981, transparent: true, opacity: 0.6 });
    particles = new THREE.Points(geo, mat);
    scene.add(particles);

    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(MAX_PARTICLES * 20 * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.12 });
    lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    function animate() {
        requestAnimationFrame(animate);
        const p = particles.geometry.attributes.position.array;
        let lIdx = 0;
        for (let i = 0; i < MAX_PARTICLES; i++) {
            p[i*3]+=vels[i].x; p[i*3+1]+=vels[i].y; p[i*3+2]+=vels[i].z;
            if (Math.abs(p[i*3]) > 15) vels[i].x *= -1;
            if (Math.abs(p[i*3+1]) > 15) vels[i].y *= -1;
            if (Math.abs(p[i*3+2]) > 15) vels[i].z *= -1;

            for (let j = i+1; j < MAX_PARTICLES; j++) {
                const dx = p[i*3]-p[j*3], dy = p[i*3+1]-p[j*3+1], dz = p[i*3+2]-p[j*3+2];
                if (Math.sqrt(dx*dx+dy*dy+dz*dz) < 4.5) {
                    linePos[lIdx++] = p[i*3]; linePos[lIdx++] = p[i*3+1]; linePos[lIdx++] = p[i*3+2];
                    linePos[lIdx++] = p[j*3]; linePos[lIdx++] = p[j*3+1]; linePos[lIdx++] = p[j*3+2];
                }
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
        lines.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    }
    animate();

    window.updateParticleColor = () => {
        const isLight = document.body.classList.contains('light-mode');
        mat.color.setHex(isLight ? 0x64748b : 0x10b981);
        lineMat.color.setHex(isLight ? 0x94a3b8 : 0x8b5cf6);
    };
}

// --- GSAP & Scroll ---
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h1, .hero p, .hero .hero-actions", {
        y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out"
    });

    gsap.utils.toArray('section').forEach(sec => {
        if (sec.id === 'hero') return;
        gsap.from(sec.querySelectorAll('.container > *'), {
            scrollTrigger: { trigger: sec, start: "top 85%" },
            y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.out"
        });
    });

    // Bento Glow Interaction
    document.querySelectorAll(".app-card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${(e.clientX - rect.left)}px`);
            card.style.setProperty("--y", `${(e.clientY - rect.top)}px`);
        });
    });
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initThree();
    initGSAP();
    setLanguage('fr');

    window.addEventListener("scroll", () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');
        sections.forEach(sec => {
            const top = window.scrollY, offset = sec.offsetTop - 150, height = sec.offsetHeight, id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    });
});
