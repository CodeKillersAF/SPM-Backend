const Supplier = require('../models/supplier.model');

const createSupplier = async (req, res) => {
    if (req.body) {
        const supplier = new Supplier(req.body);
        await supplier.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

const getAllSupplier = async (req, res) => {
    //await Supplier.find({}).populate('supplyItems', 'item_name unit_price')
    await Supplier.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const removeSupplier = async (req, res) => {
    if (req.params.id) {
        await Supplier.findByIdAndRemove(req.params.id)
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    }
};

module.exports = {
    createSupplier, getAllSupplier, removeSupplier
}