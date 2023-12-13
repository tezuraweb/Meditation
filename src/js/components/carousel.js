require('owl.carousel/dist/assets/owl.carousel.css');
require('owl.carousel');

function createCarousel(selector) {
    $(`.${selector}`).owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        margin: 25,
        loop: true,
        responsive : {
            769 : {
                items : 2,
            },
        }
    });
}

module.exports = createCarousel;