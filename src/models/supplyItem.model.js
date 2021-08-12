const mongoose = require("mongoose");

const SupplyItemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
        trim: true
    },
    unit_price: {
        type: Number,
        required: true
    },
    supplier: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'suppliers'
    }]
})

const SupplyItem = mongoose.model('supplyItems',SupplyItemSchema);
module.exports = SupplyItem;