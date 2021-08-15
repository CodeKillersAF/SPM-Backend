const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');

const { getAllTakeAwayOrders, getAllInCompletedTakeAwayOrders, getAllCompletedTakeAwayOrders } = require('../../controllers/onlineTakeAway.controllers');

router.get('/admin-protected', adminAuth, async(req, res) => {
    return res.send("Welcome Admin");
});

// ---------------------------------------------- Online-take-away-start ---------------------------------------------

router.get('/takeaway-order/get-incomplete-orders', adminAuth, async(req, res) => {
    await getAllTakeAwayOrders(req, res);
});

router.get('/takeaway-order/get-incomplete-orders', adminAuth, async(req, res) => {
    await getAllInCompletedTakeAwayOrders(req, res);
});

router.get('/takeaway-order/get-complete-orders', adminAuth, async(req, res) => {
    await getAllCompletedTakeAwayOrders(req, res);
});

//  ---------------------------------------------- Online-take-away-end ----------------------------------------


module.exports = router;