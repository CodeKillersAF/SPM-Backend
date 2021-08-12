const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier.controller');

module.exports = function () {
    router.post('/', supplierController.createSupplier);
    router.get('/', supplierController.getAllSupplier);
    router.delete('/:id', supplierController.removeSupplier);
    return router;
}
