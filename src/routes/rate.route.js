const express = require('express');
const router = express.Router();

const RateController = require('../controllers/rate.controller');

const RateAPI = () => {
    router.post('/add-rate', RateController.addRate);
    router.get('/all-rate', RateController.getAllRate);

    return router;
}

module.exports = RateAPI;