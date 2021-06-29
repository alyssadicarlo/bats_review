'use strict';

const express = require('express');
const router = express.Router();
const BatModel = require('../models/BatModel');

router.get('/bats', async (req, res) => {

    const data = await BatModel.getAll();
    res.render('template', {
        locals: {
            title: 'Bats',
            data: data,
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            body: 'partials/bat_list'
        }
    });
});

router.get('/bats/:slug?', async (req, res) => {
    
    const { slug } = req.params;
    const reviews = await BatModel.getBySlug(slug);

    res.render('template', {
        locals: {
            title: `${reviews[0].bat_brand} ${reviews[0].bat_name}`,
            data: reviews,
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            body: 'partials/bat_details'
        }
    })
});

module.exports = router;