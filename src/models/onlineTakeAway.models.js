const mongoose = require('mongoose');

const OnlineTakeAway = new mongoose.Schema({
    first_name : { type:String, required:true },
    last_name : { type:String, required:true },
    email : { type:String,  trim:true, unique:true, match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] },
    telephone: {type:String, trim:true, unque:true},
    address: {type: String, required:true, unique:true },
    items : [{type: mongoose.Schema.Types.ObjectId, required:false, ref:'foods'}],
    order_items_names: [{type: String, required: true}], 
    quantity:[{type:Number, default: 0.0}],
    is_completed: {type:Boolean, default: false},
    total_price: {type:Number, default: 0.0},
});

const OnlineTakeAwayOrder = mongoose.model('online_take_away', OnlineTakeAway);
 module.exports = OnlineTakeAwayOrder;