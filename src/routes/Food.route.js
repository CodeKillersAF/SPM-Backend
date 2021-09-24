const express = require('express');
const router = express.Router();

const FoodController = require('../controllers/food.controller');
const { route } = require('./Protected_Route/Admin_Protected.route');

const FoodAPI = () => {
    router.get("/all-food", FoodController.getAllFoods);
    router.put("/update-rate/:id", FoodController.updateFoodRate);
    router.get("/one-food/:id", FoodController.getOneFood);
//     router.get('/get-food/:id', FoodController.getOneFood);
    return router;
}

module.exports = FoodAPI;