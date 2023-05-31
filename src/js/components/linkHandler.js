function bindLinkHandler() {
    document.querySelectorAll('.practice-cards__audio--button').forEach((element) => {
        element.addEventListener('click', (e) => {
            const link = e.currentTarget;
            const type = link.dataset.type;

            document.querySelector(`.lead-form__checkbox--input[data-type=${type}]`).checked = true;
        });
    });
}

module.exports = bindLinkHandler;
