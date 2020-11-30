
// to target the mobile-menu to trigger on smaller screen (in header.css)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// to display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active'); //targeting the mobile Menu class and then turn it on
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

// action to trigger the mobile menu 
menu.addEventListener('click', mobileMenu);


// Green Sock Animations
gsap.registerPlugin(ScrollTrigger) // allowed to use scroll trigger

gsap.from('.animate-hero', { // animate to flow into the page hero section
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-summary', {
    scrollTrigger: '.animate-summary',
    duration: 0.5,
    opacity: 1,
    x: -150, // coming in from the X coord side
    stagger: 0.12
});

gsap.from('.animate-img', {
    scrollTrigger: '.animate-summary',
    duration: 1.5,
    opacity: 0,
    x: -200, // coming in from the X coord side
    
});

gsap.from('.animate-hiking', {
    scrollTrigger: '.animate-hiking',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150, 
    stagger: 0.1,
    delay: 0.2
});

gsap.from('.animate-gallery', {
    scrollTrigger: '.animate-gallery',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.4
});