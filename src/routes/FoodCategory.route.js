const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category.controller');

const CategoryAPI = () => {
    router.get("/own-category/:id", CategoryController.getFoodsOfCategory);
    router.get("/all-category", CategoryController.getAllCategories);

    return router;
}

module.exports = CategoryAPI;