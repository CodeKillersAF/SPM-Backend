const mongoose = require('mongoose');

const onlineDelivery = new mongoose.Schema({
    first_name: { type:String, required:true },
    last_name: { type:String, required:true },
    email: { type: String, trim:true, unique:true, match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]  },
    telephone: {type:String, trim:true, unque:true},
    items : [{type: mongoose.Schema.Types.String}],
    is_completed: {type:Boolean, default: false},
    total_price: {type:Number, default: 0.0}

});

const onlineDeliveryOrder = mongoose.model('online_delivery', onlineDelivery);
module.exports = onlineDeliveryOrder;
