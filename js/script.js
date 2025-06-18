document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // animation duration
        once: true, // whether animation should happen only once - default
        mirror: false, // whether elements should animate out while scrolling past them - default
    });

    // Initialize Typed.js for Hero Section
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: [
                "Innovate. Integrate. Elevate.",
                "Transform Your Business with AI.",
                "Secure Your Digital Future.",
                "Build Scalable Cloud Solutions.",
                "NovaTech Solutions: Your Digital Partner."
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });
    }

    // Initialize Swiper for Testimonials
    if (document.querySelector('.testimonial-slider .swiper-wrapper')) {
        new Swiper('.testimonial-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 1.5, // show 1.5 slides
                    centeredSlides: true, // center the active slide
                    spaceBetween: 40,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 2, // show 2 slides
                    spaceBetween: 50,
                    centeredSlides: false,
                },
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"], .button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight, // Account for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) { // Show button after scrolling 400px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('.main-header').offsetHeight - 50; // Offset for header height
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            } else if (current === '' && link.getAttribute('href').includes('index.html')) {
                // Special handling for homepage when at the very top
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on load to set initial active link

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times'); // Change icon
    });

    // Close mobile menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Update current year in footer
    const currentYearElements = document.querySelectorAll('[id^="current-year"]'); // Selects elements starting with current-year
    currentYearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });

});