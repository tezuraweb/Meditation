function infoHandlers() {
    const buttonShow = document.querySelector('.info__button--show');
    const buttonHide = document.querySelector('.info__button--hide');
    const feedbackButtons = document.querySelectorAll('.info__number');

    if (buttonShow && buttonHide) {
        buttonShow.addEventListener('click', () => {
            buttonShow.classList.add('hidden');
            document.querySelector('.info__photo').classList.add('hidden');
            document.querySelector('.info__desc--hidden').classList.add('active');
        });

        buttonHide.addEventListener('click', () => {
            buttonShow.classList.remove('hidden');
            document.querySelector('.info__photo').classList.remove('hidden');
            document.querySelector('.info__desc--hidden').classList.remove('active');
        });
    }

    if (feedbackButtons) {
        feedbackButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                document.querySelector('.info__item.active').classList.remove('active');
                document.querySelector('.info__number.active').classList.remove('active');
                document.querySelector(`.info__item[data-index="${index}"]`).classList.add('active');
                e.currentTarget.classList.add('active');
            });
        });
    }
}

module.exports = infoHandlers;
