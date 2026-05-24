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
});
