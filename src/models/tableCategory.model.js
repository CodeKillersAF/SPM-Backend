//create tablecategory model

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tableCategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TableCategory', tableCategorySchema);