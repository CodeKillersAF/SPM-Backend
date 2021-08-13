const Category = require('../models/category.model');

/**
 * add category 
 */
 const addCategory = async(req, res) => {
    try {
        if(req.body) {
            const category = new Category(req.body);
            await category.save()
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                });
        }
        else {
            console.log('No body');
        }   
    } catch (error) {
        res.send({ error: error.message });
    }
}

/**
 * get all categories
 */
const getAllCategories = async(req, res) => {
    try {
        await Category.find({  })
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.statu(500).send({ error: error });
            });
    } catch (error) {
        res.send({ error: error.message });
    }
}

/**
 * get one category
 */
const getOneCategory = async(req, res) => {
    try {
        if(req.params.id) {
            await Category.findById(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        }
        else {
            console.log('No params id');
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}

/**
 * find categorie's foods
 */
 const getFoodsOfCategory = async(req, id, res) => {
    if(req && id) {
        await Category.findById(id).populate('foodItems', 'foodName foodDescription foodPrice url')
            .then((data) => {
                res.status(200).send({ foodItems: data.foodItems });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            })
    }
}

/**
 * update category foodItem array
 */
 const updateCategory = async(req, id, res) => {
    try {
        if(req.body, id) {                         //$addToSet
            await Category.findByIdAndUpdate(id, { $addToSet: req.body })
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                });
        }
        else {
            console.log('No body or params id');
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = {
    addCategory,
    getAllCategories,
    getOneCategory,
    getFoodsOfCategory,
    updateCategory
}