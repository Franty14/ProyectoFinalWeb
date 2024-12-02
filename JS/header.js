
const navbar = document.querySelector('.navbar');

const banner = document.querySelector('.banner');

if (banner) {
    const bannerHeight = banner.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > bannerHeight) {
            navbar.classList.add('scrolled'); 
        } else {
            navbar.classList.remove('scrolled');
        }
    });
} else {
    console.error("No se encontró el elemento con la clase .banner");
}