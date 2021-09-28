const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    categoryName: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    foodItems: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'foods' }]
});

const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;