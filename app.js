/* ==========================================================================
   PROHLADA / Danchobeatz - Custom JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
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
});
