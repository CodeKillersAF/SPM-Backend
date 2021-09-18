const express = require('express');
const router = express.Router();

const OfferController = require('../controllers/offer.controller');

const OfferAPI = () => {

    router.get("/", OfferController.getAllOffers);
    return router;

}

module.exports = OfferAPI;