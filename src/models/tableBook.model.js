//create mongoose model for tableBook
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tableBookSchema = new Schema({
    isOver : {type: Boolean, default: false},
    orderedTime : {type: Date, default: Date.now},
    startTime : {type: Number, required: true},
    endTime : {type:Number, required: true},
    table: {type: Schema.Types.ObjectId, ref: 'Table'},
    customerName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    extraPrice: {type: Number, default: 0},
});


const TableBook = mongoose.model('TableBook', tableBookSchema);