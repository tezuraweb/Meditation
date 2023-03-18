const express = require('express');

const router = express.Router();

let jsonData = require('../static/pages/practiceData.json');

router
    .route('/')
    .get((req, res) => {
        res.render('nodes/index');
    });

router
    .route('/practices/:page')
    .get((req, res) => {
        const page = req.params.page;
        
        if (!['ego', 'cure', 'female', 'wishes', 'integrity'].includes(page)) {
            res.status(404);
            res.render('nodes/error');
            return;
        }

        const data = jsonData[page] || {};
        let color = '';

        if (page == 'ego') {
            color = 'blue';
        } else if (page == 'cure') {
            color = 'green';
        } else if (page == 'female') {
            color = 'red';
        } else if (page == 'wishes') {
            color = 'yellow';
        } else if (page == 'integrity') {
            color = 'darkblue';
        }
        
        res.render('nodes/practice', { page, data, color });
    });

module.exports = router;