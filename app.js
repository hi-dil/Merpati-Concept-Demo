// TODO: make the body of also fades to the left when the hamburger button clicked

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFades 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

new Splide( '.splide', {
    type : 'loop', 
    autoWidth: true, 
    gap : '10px', 
    autoplay : true, 
    pagination: false,
    focus : 'center',
    interval: '6000'
} ).mount();