const Rate = require('../models/rate.model');

const addRate = async(req, res) => {
    if(req.body) {
        const rate = new Rate(req.body);
        await rate.save()
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            });
    }
}

const getAllRate = async(req, res) => {
    await Rate.find({  })
        .then((data) => {
            res.status(200).send({ data: data });
        })
        .catch((error) => {
            res.status(500).send({ error: error });
        });
}

module.exports = {
    addRate,
    getAllRate
}