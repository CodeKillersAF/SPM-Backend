//create model for table
const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    chairs: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    category: { type: String, required: true },
    isAvailable: { type: String, required: true , default:true},
  },
  {
    timestamps: { required: true },
  }
);

modeule.exports = mongoose.model("Table", tableSchema);
