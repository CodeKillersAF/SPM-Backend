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
 const getFoodsOfCategory = async(req, res) => {
    if(req && req.params.id) {
        await Category.findById(req.params.id).populate('foodItems', 'foodName foodDescription foodPrice url')
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
 const updateCategory = async(req, res) => {
    try {
        if(req.body, req.params.id) {                         //$addToSet
            await Category.findByIdAndUpdate(req.params.id, { $addToSet: req.body })
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

/**
 * update category
 */
 const updateCategoryName = async(req, res) => {
    try {
        if(req.body, req.params.id) {                         //$addToSet
            await Category.findByIdAndUpdate(req.params.id, { $set: req.body })
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

/**
 * delete category
 */
const deleteCategory = async(req, res) => {
    try {
        if(req.params.id) {
            await Category.findByIdAndDelete(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
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
 * remove ids from category table
 */
const deleteCategoryFood = async(req, res) => {
    try{
        await Category.update(
            {_id: req.params.id},
            {$pull: {foodItems: req.body.foodItem}}
        );
        // res.json("removed");
     } catch (error) {
        res.send({ error: error.message });
     };
}

module.exports = {
    addCategory,
    getAllCategories,
    getOneCategory,
    getFoodsOfCategory,
    updateCategory,
    updateCategoryName,
    deleteCategory,
    deleteCategoryFood,
}