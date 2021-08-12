const mongoose = require("mongoose");

const SupplyItem = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
        trim: true
    },
    unit_price: {
        type: Number,
        required: true
    }
})