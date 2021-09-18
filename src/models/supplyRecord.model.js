const mongoose = require("mongoose");

const SupplyRecordSchema = new mongoose.Schema({

})

const SupplyRecord = mongoose.model('supplyRecords', SupplyRecordSchema);
module.exports = SupplyRecord;