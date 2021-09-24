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
    await Supplier.find({}).populate('supplyItems', 'item_name unit_price desc')
        // await Supplier.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getOneSupplier = async (req, res) => {
    if (req.params.id) {
        await Supplier.findById(req.params.id).populate('supplyItems', 'item_name unit_price desc')
            // await Supplier.find({})
            .then(data => {
                res.status(200).send({ supplyItems: data.supplyItems });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }

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

const updateSupplier = async (req, res) => {
    if (req.params.id && req.body) {
        await Supplier.findByIdAndUpdate(req.params.id, {
            supplier_name: req.body.supplier_name,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.address,
            supplyItems: req.body.supplyItems,

        })
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((err) => {
                res.status(500).send({ err: err.message });
            });
    }
};

module.exports = {
    createSupplier, getAllSupplier, removeSupplier, updateSupplier, getOneSupplier
}