const axios = require('axios');

function bindFormHandler() {
    document.getElementById('lead-form').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const form = e.target;
        const fields = form.elements;
    
        const nameField = fields.name;
        const phoneField = fields.phone;
        const tgField = fields.telegram;
        const practices = [];

        if (form.dataset.page) {
            practices.push(form.dataset.page);
        } else if (fields.practice) {
            fields.practice.forEach((item) => {
                if (item.checked) {
                    practices.push(item.value);
                }
            });
        }

        if (practices.length == 0) {
            const popup = form.querySelector('.lead-form__popup--emptyfield');
    
            popup.classList.add('lead-form__popup--active');
            setTimeout(() => {
                popup.classList.remove('lead-form__popup--active');
            }, 5000);

            return;
        }
    
        axios.post('/api/lead', {
                name: nameField.value,
                phone: phoneField.value,
                telegram: tgField.value,
                practiceList: practices
            })
            .then(function (response) {
                const popup = form.querySelector('.lead-form__popup--positive');
    
                popup.classList.add('lead-form__popup--active');
                setTimeout(() => {
                    popup.classList.remove('lead-form__popup--active');
                }, 5000);
            })
            .catch(function (error) {
                const popup = form.querySelector('.lead-form__popup--negative');
    
                popup.classList.add('lead-form__popup--active');
                setTimeout(() => {
                    popup.classList.remove('lead-form__popup--active');
                }, 5000);
            });
    });
}

module.exports = bindFormHandler;
