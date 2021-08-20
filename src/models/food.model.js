const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    foodName: { type: String, required: true, trim: true },
    foodDescription: { type: String, required: true, trim: true },
    foodPrice: { type: Number, required: true },
    url: { type: String, required: false, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'categories' }
});

const Food = mongoose.model('foods', FoodSchema);

module.exports = Food;