const Food = require('../models/food.model');

/**
 * add food
 */
 const addFood = async(req, res) => {
    try{
        if(req.body) {
            const food = new Food(req.body);
            await food.save()
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
 * get all foods
 */
const getAllFoods = async(req, res) => {
    try {
        await Food.find({  })
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            })
    } catch (error) {
        res.send({ error: error.message });
    }
}

/**
 * delete food
 */
 const deleteFood = async(req, res) => {
    try {
        if(req.params.id) {
            await Food.findOneAndDelete(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                })
        }
        else {
            console.log('No params id');
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}

odule.exports = {
    addFood,
    getAllFoods,
    deleteFood
}