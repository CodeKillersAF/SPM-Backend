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
            await Food.findByIdAndDelete(req.params.id)
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

/**
 * get one food
 */
 const getOneFood = async(req, res) => {
    try {
        if(req.params.id) {
            await Food.findById(req.params.id)
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

/**
 * update food
 */
const updateFood = async(req, res) => {
    try {
        if(req.body, req.params.id) {
            await Food.findByIdAndUpdate(req.params.id, { $set: req.body })
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

const updateFoodRate = async(req, res) => {
    try {
        if(req.body, req.params.id) {                         //$addToSet
            await Food.findByIdAndUpdate(req.params.id, { $addToSet: req.body })
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
 * find categorie's foods
 */
 const getRatesoFFood = async(req, res) => {
    if(req && req.params.id) {
        await Food.findById(req.params.id).populate('rate', 'customerName aboutFood starRate')
            .then((data) => {
                res.status(200).send({ rate: data.rate });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            })
    }
}


module.exports = {
    addFood,
    getAllFoods,
    deleteFood,
    getOneFood,
    updateFood,
    updateFoodRate,
    getRatesoFFood
}