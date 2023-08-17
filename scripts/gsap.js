// header menu item animation 
const menuIcon = document.querySelector('.menu-icon');
const menuCloseIcon = document.querySelector('.close-btn');

const t1 = gsap.timeline({paused: true});


t1.to('.nav__menu', {
    y:0,
    duration: .75,
    ease: 'slow'
}).to('.menu__item', {
    scale: 1,
    opacity: 1,
    y:0,
    duration: .25,
    stagger: .1,
    ease: 'power3'
})

menuIcon.addEventListener("click", () => {
    t1.play();
})

menuCloseIcon.addEventListener("click", () => {
    t1.reverse();
})


const menuItems = document.querySelectorAll('.menu__link');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        t1.reverse();
    })
})

// global selector for t2 
// const main = document.querySelectorAll('.main');
const mainImage1 = document.querySelector('.main:first-child .main__image');

// main timeline  
const t2 = gsap.timeline();

t2.from(".header__logo", {
    x:-100,
    opacity: 0,
    duration: .75,
    ease: 'ease'
}).from(".menu-icon", {
    y:-100,
    opacity: 0,
    duration: .75,
    ease: 'ease'
}).from('.hero__content *', {
    y:100,
    x:-100,
    opacity: 0,
    duration: .75,
    ease: 'back',
    stagger: .35
}, "-=.25").from('.hero__image', {
    x:100,
    y:50,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'back',
}, "-=.25").from(".brands .section__header", {
    x:-100,
    y:50,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'ease',
    scrollTrigger: {
        trigger: '.hero__image',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
}).from(".brands .brands__wrapper", {
    x:100,
    y:50,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'ease',
    scrollTrigger: {
        trigger: '.brands .section__header',
        start: 'bottom 90%',
        end: 'bottom 80%',
        scrub: .75,
        // markers: true
    }
}).from('.main-1 .main__image',{
    x:500,
    y:100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'ease',
    scrollTrigger: {
        trigger: '.brands .brands__wrapper',
        start: 'bottom 80%',
        end: 'bottom 50%',
        scrub: .75,
        // markers: true
    }
}).from('.main-1 .main__content *',{
    x:-400,
    y:-100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'back',
    stagger: .5,
    scrollTrigger: {
        trigger: '.main-1 .main__image',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
}).from('.features .section__header', {
    x:200,
    y:0,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'ease',
    stagger: .5,
    scrollTrigger: {
        trigger: '.main-1 .main__content',
        start: 'bottom 90%',
        end: 'bottom 70%',
        scrub: .75,
        // markers: true
    }
}).from('.main-2 .main__content *',{
    x:-400,
    y:-100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'ease',
    stagger: 1,
    // delay: .75,
    scrollTrigger: {
        trigger: '.features',
        start: 'bottom 70%',
        end: 'bottom 40%',
        scrub: .75,
        // markers: true
    }
}).from('.main-2 .main__image',{
    x:500,
    y:100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'power2',
    scrollTrigger: {
        trigger: '.main-2 .main__content',
        start: 'bottom 90%',
        end: 'bottom 70%',
        scrub: .75,
        // markers: true
    }
}).from('.portfolios .section__header',{
    x:500,
    y:100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'power2',
    scrollTrigger: {
        trigger: '.main-2',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
}).from('.testimonial .section__header', {
    x:-500,
    y: -100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'power2',
    scrollTrigger: {
        trigger: '.portfolios',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
}).from('.testimonial .testimonial__wrapper', {
    x:500,
    y:100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'power2',
    scrollTrigger: {
        trigger: '.testimonial .section__header',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
}).from('.contact .section__content *', {
    x:-500,
    y:100,
    scale:0,
    opacity: 0,
    duration: .75,
    ease: 'power2',
    stagger: .75,
    scrollTrigger: {
        trigger: '.testimonial',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
}).from('.contact .contact-form', {
    x:500,
    y:100,
    scale:0,
    opacity: 0,
    duration: 1,
    ease: 'power2',
    scrollTrigger: {
        trigger: '.testimonial',
        start: 'bottom 80%',
        end: 'bottom 60%',
        scrub: .75,
        // markers: true
    }
})

// feature cards animation 
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const t3 = gsap.timeline();
    
    
    featureCards.forEach((card, index) => {
        t3.from(card, {
            x: 200,
            y: 100,
            scale: 0,
            opacity: 0,
            duration: 0.75,
            ease: 'ease',
            stagger: 0.5,
            scrollTrigger: {
                trigger: card, // Using the card as the trigger
                start: 'bottom 100%',
                end: 'bottom 80%',
                scrub: 0.75,
                // markers: true
            }
        });
    });
    
})

// portfolio animations 
document.addEventListener('DOMContentLoaded', () => {
    const portfilos = document.querySelectorAll('.portfolios__wrapper .portfolio');
    console.log(portfilos);
    const t4 = gsap.timeline();

    portfilos.forEach((portfilo) => {
        t4.from(portfilo, {
            x: 200,
            y: 100,
            scale: 0,
            opacity: 0,
            duration: 0.75,
            ease: 'ease',
            stagger: 0.5,
            scrollTrigger: {
                trigger: portfilo, // Using the card as the trigger
                start: 'bottom 100%',
                end: 'bottom 90%',
                scrub: 0.75,
                // markers: true
            }
        })
    })
})