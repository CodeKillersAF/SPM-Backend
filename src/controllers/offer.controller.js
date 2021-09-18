const Offer = require('../models/offer.model');

const addOffer = async (req, res) => {
    try {
        if (req.body) {
            const offer = new Offer(req.body);
            await offer.save()
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
 * get all offers
 */
const getAllOffers = async (req, res) => {
    try {
        await Offer.find({})
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
 * delete offer
 */
const deleteOffer = async (req, res) => {
    try {
        if (req.params.id) {
            await Offer.findByIdAndDelete(req.params.id)
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
 * get one offer
 */
const getOneOffer = async (req, res) => {
    try {
        if (req.params.id) {
            await Offer.findById(req.params.id)
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
 * update offer
 */
const updateOffer = async (req, res) => {
    try {
        if (req.body, req.params.id) {
            await Offer.findByIdAndUpdate(req.params.id, { $set: req.body })
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
    addOffer, getAllOffers, deleteOffer, getOneOffer, updateOffer
}