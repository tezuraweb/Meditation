import 'babel-polyfill';

const formHandler = require('./components/formHandler');
const linkHandler = require('./components/linkHandler');
const audioTag = require('./components/audioTag');
const createCarousel = require('./components/carousel');
const infoHandlers = require('./components/infoHandlers');

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.owl-carousel');
    if (carousel) {
        createCarousel('owl-carousel');
    }
    
    linkHandler();
    formHandler();
    infoHandlers();
    audioTag.init();
});

