document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header on Scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle hamburger icon between bars and 'X'
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // 3. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,      // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true,         // whether animation should happen only once - while scrolling down
        delay: 100,         // values from 0 to 3000, with step 50ms
    });

    // 4. Initialize Swiper.js for Testimonials
    const swiper = new Swiper('.testimonial-slider', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Make it responsive
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    });

});
