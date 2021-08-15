const SupplyItem = require("../models/supplyItem.model")

const createSupplyItem = async (req, res) => {
    if (req.body) {
        const supplyItem = new SupplyItem(req.body);
        await supplyItem.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

const getAllSupplyItem = async (req, res) => {
    await SupplyItem.find({}).populate('suppliers', 'supplier_name email contact address')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const removeSupplyItem = async (req, res) => {
    if (req.params.id) {
        await SupplyItem.findByIdAndRemove(req.params.id)
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    }
};

module.exports = {
    createSupplyItem, getAllSupplyItem, removeSupplyItem
}