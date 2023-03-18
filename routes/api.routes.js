const express = require('express');
const pick = require('lodash/pick');

const router = express.Router();

const TelegramMailer = require('../services/telegramMailing.service');

router
    .route('/lead')
    .post(async (req, res) => {
        const practiceNames = {
            'ego': 'Связь с Высшим Я, медитативное дыхание',
            'cure': 'Исцеляющие медитации',
            'female': 'Женская энергия',
            'wishes': 'Исполнение желаний',
            'integrity': 'Обретение целостности',
        };

        const data = pick(req.body, 'name', 'phone', 'telegram', 'practiceList');
        let msg = `Новая заявка!\n\nИмя: ${data.name}\nТелефон: ${data.phone}\nTelegram: ${data.telegram[0] == '@' ? data.telegram : '@' + data.telegram}\n\nВыбранные практики:\n`;

        data.practiceList.forEach((item, index) => {
            msg += practiceNames[item];

            if (index != data.practiceList.length - 1) {
                msg += '\n'
            }
        });

        TelegramMailer.SendLead(msg);

        res
            .header('Location', `${req.protocol}://${req.hostname}`)
            .sendStatus(201);
    });

module.exports = router;