const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');

const { getAllTakeAwayOrders, getAllInCompletedTakeAwayOrders, getAllCompletedTakeAwayOrders } = require('../../controllers/onlineTakeAway.controllers');
const { getAllDeliveryOrders , getAllInCompletedDeliveryOrders, getAllCompletedDeliveryOrders } = require('../../controllers/onlineDelivery.controller')
 
router.get('/admin-protected', adminAuth, async(req, res) => {
    return res.send("Welcome Admin");
});

// ---------------------------------------------- Online-take-away-start ----------------------------------------

router.get('/takeaway-order/get-all-orders', adminAuth, async(req, res) => {
    await getAllTakeAwayOrders(req, res);
});

router.get('/takeaway-order/get-incomplete-orders', adminAuth, async(req, res) => {
    await getAllInCompletedTakeAwayOrders(req, res);
});

router.get('/takeaway-order/get-complete-orders', adminAuth, async(req, res) => {
    await getAllCompletedTakeAwayOrders(req, res);
});

//  ---------------------------------------------- Online-take-away-end ----------------------------------------

// ---------------------------------------------- Online-delivery-start ----------------------------------------
router.get('/delivery-order/get-all-orders', adminAuth, async(req, res) => {
    await getAllDeliveryOrders(req, res);
});

router.get('/delivery-order/get-incomplete-orders', adminAuth, async(req, res) => {
    await getAllInCompletedDeliveryOrders(req, res);
});

router.get('/delivery-order/get-complete-orders', adminAuth, async(req, res) => {
    await getAllCompletedDeliveryOrders(req, res);
});

//  ---------------------------------------------- Online-delivery-end ----------------------------------------

module.exports = router;