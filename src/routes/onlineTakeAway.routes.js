const express = require('express');
const router = express.Router();
const onlineTakeAwayController = require('../controllers/onlineTakeAway.controllers');

const onlineTakeAwayEndPoints = () => {
    router.post('/create-order', onlineTakeAwayController.createOnlineTakeAwayOrder);
    router.delete('/delete-order/:id', onlineTakeAwayController.deleteOneOnlineTakeAwayOrder);
    // router.get('/get-all-orders', onlineTakeAwayController.getAllTakeAwayOrders); //Admin protected route
    // router.get('/get-incomplete-orders', onlineTakeAwayController.getAllInCompletedTakeAwayOrders); //Admin protected route
    // router.get('/get-complete-orders', onlineTakeAwayController.getAllCompletedTakeAwayOrders); //Admin protected route
    return router;
}

module.exports = onlineTakeAwayEndPoints;