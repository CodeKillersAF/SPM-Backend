const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    supplier_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    supplyItems: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'supplyItems'
    }]


});

const Supplier = mongoose.model('suppliers', SupplierSchema);
module.exports = Supplier;