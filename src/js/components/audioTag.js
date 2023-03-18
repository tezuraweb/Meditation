class AudioTag {
    constructor() {
        this.players = [];
    }

    init() {
        const containers = document.querySelectorAll('.audio__container');

        containers.forEach((item) => {
            this.players.push({
                    audio: item.querySelector('.audio__embed'),
                    button: item.querySelector('.audio__button'),
                    timeline: item.querySelector('.audio__timeline'),
                }); 
        });

        this.bindEvents();
    }

    bindEvents() {
        this.players.forEach((item) => {
            item.button.addEventListener('click', () => {
                if (item.audio.paused) {
                    item.audio.play();
                    item.button.classList.add('audio__button--played');
                } else {
                    item.audio.pause();
                    item.button.classList.remove('audio__button--played');
                }
            });

            item.timeline.addEventListener('change', () => {
                const time = (item.timeline.value * item.audio.duration) / 100;
                item.audio.currentTime = time;
            });

            item.audio.ontimeupdate = () => {
                const percentagePosition = (100 * item.audio.currentTime) / item.audio.duration;
                item.timeline.style.backgroundSize = `${percentagePosition}% 100%`;
                item.timeline.value = percentagePosition;
            };

            item.audio.onended = () => {
                item.button.classList.remove('audio__button--played');
            };
        });
    }
}

module.exports = new AudioTag();