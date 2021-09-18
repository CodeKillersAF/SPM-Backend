const SupplyRecord = require('../models/supplyRecord.model');

const createSupplyRecord = async (req, res) => {
    if (req.body) {
        const SupplyRecord = new Supplier(req.body);
        await SupplyRecord.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

const getAllSupplyRecord = async (req, res) => {
    await SupplyRecord.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



module.exports = {
    createSupplyRecord, getAllSupplyRecord
}