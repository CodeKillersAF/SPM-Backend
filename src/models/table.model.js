//create model for table
const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    chairs: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: { required: true },
  }
);

modeule.exports = mongoose.model("Table", tableSchema);
