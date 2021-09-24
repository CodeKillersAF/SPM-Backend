const express = require('express');
const router = express.Router();
const onlineDeliveryController = require('../controllers/onlineDelivery.controller');

const onlineDeliveryEndPoints = () => {
    router.post('/create-order' , onlineDeliveryController.createOnlieneDeliveryOrder);
    router.delete('/delete-order/:id', onlineDeliveryController.deleteOneOnlineDeliveryOrder);
    router.get('/get-all-orders', onlineDeliveryController.getAllDeliveryOrders);

    return router;
}

module.exports = onlineDeliveryEndPoints;