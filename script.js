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
            'assets/images/zikr_screen_1.png',
            'assets/images/zikr_screen_1.png'
        ],
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
        screenshots: [
            'assets/images/m_screen_1.png',
            'assets/images/m_screen_1.png',
            'assets/images/m_screen_1.png'
        ],
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
        screenshots: ['assets/images/locsy_s1_final.png'],
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
            fr: 'Kinto est une application de gestion financière personnelle propulsée par l\'IA. Scannez vos reçus automatiquement, suivez vos dépenses par catégorie, définissez des budgets mensuels et atteignez vos objectifs d\'épargne.',
            en: 'Kinto is an AI-powered personal finance app. Automatically scan receipts, track expenses by category, set monthly budgets and reach your savings goals.',
            ar: 'فينورا تطبيق إدارة مالية شخصية مدعوم بالذكاء الاصطناعي. امسح الفواتير تلقائياً، تتبع المصاريف حسب الفئة، حدد ميزانيات شهرية وحقق أهداف الادخار.'
        },
        features: {
            fr: ['Scanner de reçus IA', 'Suivi des dépenses', 'Budget mensuel', 'Objectifs d\'épargne', 'Mode invité'],
            en: ['AI Receipt Scanner', 'Expense Tracking', 'Monthly Budget', 'Savings Goals', 'Guest Mode'],
            ar: ['ماسح فواتير بالذكاء الاصطناعي', 'تتبع المصاريف', 'ميزانية شهرية', 'أهداف ادخار', 'وضع الزائر']
        },
        screenshots: [
            'assets/images/kinto-screen1.png',
            'assets/images/kinto-screen2.png',
            'assets/images/kinto-screen3.png'
        ],
        gradient: 'linear-gradient(135deg, #7C6AF7, #5B4BD4)',
        status: 'Bientôt'
    },
    restopass: {
        id: 'restopass',
        icon: '🍴',
        iconUrl: 'assets/images/restopass-icon.png',
        name: 'RestoPass',
        tagline: {
            fr: 'Votre restaurant digitalisé en 5 minutes.',
            en: 'Your restaurant digitized in 5 minutes.',
            ar: 'مطعمك رقمي في 5 دقائق.'
        },
        description: {
            fr: 'RestoPass est une solution SaaS complète pour la restauration moderne. Digitalisez votre menu avec un QR code interactif, fidélisez vos clients avec des cartes Apple & Google Wallet.',
            en: 'RestoPass is a complete SaaS solution for modern dining. Digitize your menu with interactive QR codes, build customer loyalty with Apple & Google Wallet cards.',
            ar: 'RestoPass هو حل SaaS كامل للمطاعم الحديثة. قم ببرمجة قائمتك باستخدام رمز QR تفاعلي، واكسب ولاء عملائك.'
        },
        features: {
            fr: ['Menu QR Code', 'Fidélité Wallet', 'Dashboard Analytics', 'Push Notifications'],
            en: ['QR Code Menu', 'Wallet Loyalty', 'Analytics Dashboard', 'Push Notifications'],
            ar: ['قائمة QR Code', 'ولاء Wallet', 'لوحة تحليلات', 'إشعارات دفع']
        },
        screenshots: [
            'assets/images/restopass_s1.png',
            'assets/images/restopass_s2.png',
            'assets/images/restopass_s3.png'
        ],
        gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
        status: 'Disponible'
    }
};

// --- Translations ---
const translations = {
    fr: {
        nav_home: 'Accueil', nav_apps: 'Projets', nav_contact: 'Contact',
        hero_title: 'Inspirer le futur par le <span class="gradient-text">code et l\'IA</span>',
        hero_desc: 'Développeur Elite créant des expériences mobiles et SaaS innovantes.',
        hero_cta_apps: 'Explorer mes projets',
        portfolio_title: 'Ecosystème Digital',
        portfolio_subtitle: 'Solutions mobiles, IA et plateformes SaaS.',
        timeline_title: 'Parcours Elite',
        status_available: 'Disponible', status_new: 'Nouveau',
        footer_rights: 'Tous droits réservés.'
    },
    en: {
        nav_home: 'Home', nav_apps: 'Projects', nav_contact: 'Contact',
        hero_title: 'Inspiring the future with <span class="gradient-text">code and AI</span>',
        hero_desc: 'Elite developer crafting innovative mobile and SaaS experiences.',
        hero_cta_apps: 'Explore projects',
        portfolio_title: 'Digital Ecosystem',
        portfolio_subtitle: 'Mobile, AI and SaaS solutions.',
        timeline_title: 'Elite Journey',
        status_available: 'Available', status_new: 'New',
        footer_rights: 'All rights reserved.'
    },
    ar: {
        nav_home: 'الرئيسية', nav_apps: 'المشاريع', nav_contact: 'تواصل',
        hero_title: 'نُلهم المستقبل بـ<span class="gradient-text">البرمجة والذكاء الاصطناعي</span>',
        hero_desc: 'مطوّر متميز يصنع تجارب موبايل وSaaS مبتكرة.',
        hero_cta_apps: 'اكتشف مشاريعي',
        portfolio_title: 'المنظومة الرقمية',
        portfolio_subtitle: 'حلول موبايل، ذكاء اصطناعي ومنصات SaaS.',
        timeline_title: 'مسيرة متميزة',
        status_available: 'متاح', status_new: 'جديد',
        footer_rights: 'جميع الحقوق محفوظة.'
    }
};

let currentLang = 'fr';

// --- Core Functions (Expose to window for HTML access) ---
window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
};

window.toggleTheme = function() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
    if (typeof updateParticleColor === 'function') updateParticleColor();
};

// --- Elite Visuals (Three.js Plexus) ---
let scene, camera, renderer, particles, lines;
const MAX_PARTICLES = 160;

function initThree() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_PARTICLES * 3);
    const velocities = [];

    for (let i = 0; i < MAX_PARTICLES; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
        velocities.push(new THREE.Vector3((Math.random()-0.5)*0.015, (Math.random()-0.5)*0.015, (Math.random()-0.5)*0.015));
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.1, color: 0x10b981, transparent: true, opacity: 0.6 });
    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(MAX_PARTICLES * MAX_PARTICLES * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.1 });
    lines = new THREE.LineSegments(lineGeometry, lineMat);
    scene.add(lines);

    function animate() {
        requestAnimationFrame(animate);
        const pos = particles.geometry.attributes.position.array;
        let lineIdx = 0;

        for (let i = 0; i < MAX_PARTICLES; i++) {
            pos[i*3] += velocities[i].x;
            pos[i*3+1] += velocities[i].y;
            pos[i*3+2] += velocities[i].z;

            if (Math.abs(pos[i*3]) > 12) velocities[i].x *= -1;
            if (Math.abs(pos[i*3+1]) > 12) velocities[i].y *= -1;
            if (Math.abs(pos[i*3+2]) > 12) velocities[i].z *= -1;

            for (let j = i+1; j < MAX_PARTICLES; j++) {
                const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2];
                if (Math.sqrt(dx*dx+dy*dy+dz*dz) < 3.5) {
                    linePositions[lineIdx++] = pos[i*3]; linePositions[lineIdx++] = pos[i*3+1]; linePositions[lineIdx++] = pos[i*3+2];
                    linePositions[lineIdx++] = pos[j*3]; linePositions[lineIdx++] = pos[j*3+1]; linePositions[lineIdx++] = pos[j*3+2];
                }
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
        lines.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    }
    animate();
}

// --- GSAP Magic ---
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Reveal
    gsap.from(".hero h1, .hero p, .hero .hero-actions", {
        y: 80, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power4.out"
    });

    // Bento Cards Entrance
    gsap.from(".app-card", {
        scrollTrigger: { trigger: ".apps-grid", start: "top 80%" },
        y: 60, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out"
    });

    // Mouse Glow for Bento Cards
    document.querySelectorAll(".app-card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
            card.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
        });
    });
}

// --- Modals ---
window.openAppModal = function(appId) {
    const app = apps[appId];
    if (!app) return;
    const modal = document.getElementById('app-modal');
    document.getElementById('modal-data').innerHTML = `
        <div class="modal-header">
            <h2 style="font-size:3rem;">${app.name}</h2>
            <p style="color:var(--text-muted);">${app.tagline[currentLang]}</p>
        </div>
        <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:3rem;">
            <div>
                <p style="margin-bottom:2rem; font-size:1.1rem; line-height:1.8;">${app.description[currentLang]}</p>
                <div class="features">
                    <h4 style="margin-bottom:1rem;">Features</h4>
                    <ul style="list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
                        ${app.features[currentLang].map(f => `<li style="display:flex; align-items:center; gap:0.5rem;"><i class="fas fa-check-circle" style="color:var(--primary);"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div style="background:var(--bg-deep); border-radius:24px; padding:2rem; text-align:center;">
                <img src="${app.iconUrl}" style="width:120px; border-radius:24px; margin-bottom:2rem;">
                <div class="btns" style="display:flex; flex-direction:column; gap:1rem;">
                    ${app.appStore ? `<a href="${app.appStore}" class="btn btn-primary">App Store</a>` : ''}
                    ${app.playStore ? `<a href="${app.playStore}" class="btn glass">Play Store</a>` : ''}
                    <button class="btn glass" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
};

window.closeModal = () => document.getElementById('app-modal').classList.remove('active');

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initThree();
    initGSAP();
    setLanguage('fr');

    window.addEventListener("scroll", () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });
});
