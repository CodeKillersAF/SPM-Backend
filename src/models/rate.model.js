const mongoose = require('mongoose');

const RateFood = new mongoose.Schema({
    customerName: { type: String, required: true, trim: true },
    aboutFood: { type: String, required: true, trim: true },
    starRate: { type: Number, required: true } 
});

const Rate = mongoose.model('rates', RateFood);

module.exports = Rate;