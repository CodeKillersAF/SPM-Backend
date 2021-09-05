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


module.exports = {
    addOffer
}