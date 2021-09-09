const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    offerName: { type: String, required: true, trim: true },
    offerDescription: { type: String, required: true, trim: true },
    offerPrice: { type: Number, required: true },
    url: { type: String, required: false, trim: true }
});

const Offer = mongoose.model('offers', OfferSchema);

module.exports = Offer;