/* ==========================================================================
   PROHLADA / Danchobeatz - Custom JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Enable scroll reveals styling
    document.documentElement.classList.add('js-enabled');

    // --- 1. CUSTOM CURSOR FOLLOWER ---
    const cursor = document.getElementById('cursorFollower');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mousedown', () => {
            cursor.classList.add('clicking');
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('clicking');
        });

        // Add hover effects on all interactive elements
        const hoverables = document.querySelectorAll('a, button, input, textarea');
        hoverables.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
            });
            elem.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
            });
        });
    }

    // --- 2. MOBILE MENU NAVIGATION ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when navigation link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // --- 3. SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully enters viewport
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // --- 4. MULTILANGUAGE TRANSLATION SYSTEM (RU, KZ, EN) ---
    const translations = {
        ru: {
            menu_music: "Музыка",
            menu_about: "Обо мне",
            menu_contact: "Контакты",
            hero_slogan: "PROHLADA — голос эмоций, Danchobeatz — звук, который остаётся в памяти.",
            hero_cta_btn: "СЛУШАТЬ ПОСЛЕДНИЙ РЕЛИЗ",
            scroll_text: "ЛИСТАЙТЕ ВНИЗ",
            music_title: "РЕЛИЗЫ",
            cta_label: "Слушать на площадках:",
            platform_yandex: "Яндекс Музыка",
            platform_spotify: "Spotify",
            platform_apple: "Apple Music",
            platform_vk: "VK Музыка",
            about_title: "ОБО МНЕ",
            about_tagline: "Искусство без масок и фальши",
            about_bio_p1: "<strong>PROHLADA / Danchobeatz</strong> — это уникальный симбиоз двух творческих личностей в одном человеке. Как исполнитель <strong>PROHLADA</strong>, он транслирует чистые эмоции, переживания и уличную философию. Это искренний разговор со слушателем о преодолении трудностей, поисках света и жизненном пути.",
            about_bio_p2: "Как саунд-продюсер <strong>Danchobeatz</strong>, он создает ту самую звуковую ткань, которая обволакивает смыслы. Фирменный грязный 808-й бас, атмосферные мелодические паттерны и глубокий сэмпл-дизайн — почерк, завоевавший признание среди известных артистов СНГ.",
            about_bio_quote: "«Каждая работа — это история борьбы и искренности. Мы пишем музыку для тех, кто чувствует глубину.»",
            contact_title: "СОЦСЕТИ",
            copyright: "© 2026 Danchobeatz Entertainment / PROHLADA Music. Все права защищены.",
            to_top: "НАВЕРХ"
        },
        kz: {
            menu_music: "Музыка",
            menu_about: "Мен туралы",
            menu_contact: "Байланыс",
            hero_slogan: "PROHLADA — сезім дауысы, Danchobeatz — жадында қалатын дыбыс.",
            hero_cta_btn: "СОҢҒЫ РЕЛИЗДІ ТЫҢДАУ",
            scroll_text: "ТӨМЕН АЙНАЛДЫРУ",
            music_title: "РЕЛИЗДЕР",
            cta_label: "Платформаларда тыңдау:",
            platform_yandex: "Яндекс Музыка",
            platform_spotify: "Spotify",
            platform_apple: "Apple Music",
            platform_vk: "VK Музыка",
            about_title: "МЕН ТУРАЛЫ",
            about_tagline: "Маскасыз және жалғансыз өнер",
            about_bio_p1: "<strong>PROHLADA / Danchobeatz</strong> — бұл бір адам бойындағы екі шығармашылық тұлғаның бірегей симбиозы. <strong>PROHLADA</strong> орындаушысы ретінде ол таза сезімдерді, уайымдарды және көше философиясын жеткізеді. Бұл тыңдарменмен қиындықтарды жеңу, жарық іздеу және өмір жолы туралы шынайы әңгіме.",
            about_bio_p2: "Саунд-продюсер <strong>Danchobeatz</strong> ретінде ол мағыналарды көмкеретін дәл сол дыбыстық матаны жасайды. Фирменді кір 808-бас, атмосфералық әуенді өрнектер және терең сэмпл-дизайн — ТМД-ның танымал әртістері арасында танылуға ие болған қолтаңба.",
            about_bio_quote: "«Әр жұмыс — бұл күрес пен шынайылықтың тарихы. Біз тереңдікті сезінетіндер үшін музыка жазамыз.»",
            contact_title: "ӘЛЕУМЕТТІК ЖЕЛІЛЕР",
            copyright: "© 2026 Danchobeatz Entertainment / PROHLADA Music. Барлық құқықтар қорғалған.",
            to_top: "ЖОҒАРЫ"
        },
        en: {
            menu_music: "Music",
            menu_about: "About Me",
            menu_contact: "Contacts",
            hero_slogan: "PROHLADA is the voice of emotions, Danchobeatz is the sound that stays in your memory.",
            hero_cta_btn: "LISTEN TO LATEST RELEASE",
            scroll_text: "SCROLL DOWN",
            music_title: "RELEASES",
            cta_label: "Listen on platforms:",
            platform_yandex: "Yandex Music",
            platform_spotify: "Spotify",
            platform_apple: "Apple Music",
            platform_vk: "VK Music",
            about_title: "ABOUT ME",
            about_tagline: "Art without masks or falsity",
            about_bio_p1: "<strong>PROHLADA / Danchobeatz</strong> is a unique symbiosis of two creative personalities in one person. As the artist <strong>PROHLADA</strong>, he conveys pure emotions, inner experiences, and street philosophy. This is a sincere conversation with the listener about overcoming obstacles, searching for light, and the journey of life.",
            about_bio_p2: "As sound producer <strong>Danchobeatz</strong>, he creates the very sonic fabric that envelops meaning. His signature dirty 808 bass, atmospheric melodic patterns, and deep sample design form a distinctive style that has won acclaim among prominent artists across the CIS.",
            about_bio_quote: "“Every piece of work is a story of struggle and sincerity. We write music for those who feel the depth.”",
            contact_title: "SOCIAL MEDIA",
            copyright: "© 2026 Danchobeatz Entertainment / PROHLADA Music. All rights reserved.",
            to_top: "BACK TO TOP"
        }
    };

    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        // Update DOM elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Update html lang attribute for SEO
        document.documentElement.setAttribute('lang', lang);
        
        // Update active button state in language switcher
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Save to localStorage
        localStorage.setItem('preferredLang', lang);
    }

    // Set up click handlers on switcher buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Load saved or default language
    const savedLang = localStorage.getItem('preferredLang') || 'ru';
    setLanguage(savedLang);

    // --- 5. DARK/LIGHT THEME SWITCHER ---
    const themeToggleBtn = document.getElementById('themeToggle');
    
    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('preferredTheme', theme);
        
        // Update icon dynamically
        if (themeToggleBtn) {
            const icon = themeToggleBtn.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fa-solid fa-sun';
                } else {
                    icon.className = 'fa-solid fa-moon';
                }
            }
        }
    }
    
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Initialize theme based on preference, localStorage, or system media query
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
    }
});
