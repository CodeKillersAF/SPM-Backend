const mongoose = require("mongoose");

const SupplyRecordSchema = new mongoose.Schema({
    supplier_name: {
        type: String,
        required: true,
        trim: true
    },
    supply_item: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        trim: true
    },
    unit_price: {
        type: Number,
        required: true,
        trim: true
    },
    total_price: {
        type: Number,
        required: true,
        trim: true
    }

})

const SupplyRecord = mongoose.model('supplyRecords', SupplyRecordSchema);
module.exports = SupplyRecord;