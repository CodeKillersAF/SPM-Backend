const express = require('express');
const router = express.Router();

const FoodController = require('../controllers/food.controller');

const FoodAPI = () => {
    router.get("/all-food", FoodController.getAllFoods);

    return router;
}

module.exports = FoodAPI;