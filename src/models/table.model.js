//create model for table
const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    chairs: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref:"TableCategory", required: true },
    isAvailable: { type: String, required: true , default:true},
  },
  {
    timestamps: { required: true },
  }
);

module.exports = mongoose.model("Table", tableSchema);
