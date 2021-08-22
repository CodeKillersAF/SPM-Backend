const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');
const { getAllSupplier, createSupplier, removeSupplier, updateSupplier } = require('../../controllers/supplier.controller');
const { getAllSupplyItem, createSupplyItem, removeSupplyItem, updateSupplyItem } = require('../../controllers/supplyItem.controller');



router.get('/admin-protected', adminAuth, async (req, res) => {
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


// Author : Kawsikan Routes for supplier details
// Get all supplier
router.get('/supplier', adminAuth, async (req, res) => {
    await getAllSupplier(req, res);
})
// Add new supplier
router.post('/supplier', adminAuth, async (req, res) => {
    await createSupplier(req, res);
})
// Remove an existing supplier
router.delete('/supplier/:id', adminAuth, async (req, res) => {
    await removeSupplier(req, res);
})
// Update supply item
router.put('/supplier/:id', adminAuth, async (req, res) => {
    await updateSupplier(req, res);
})

// Author : Kawsikan Routes for supplier details
// Get all supply item
router.get('/supply-item', adminAuth, async (req, res) => {
    await getAllSupplyItem(req, res);
})
// Add new supplier
router.post('/supply-item', adminAuth, async (req, res) => {
    await createSupplyItem(req, res);
})
// Remove an existing supply item
router.delete('/supply-item/:id', adminAuth, async (req, res) => {
    await removeSupplyItem(req, res);
})
// Update supply item
router.put('/supply-item/:id', adminAuth, async (req, res) => {
    await updateSupplyItem(req, res);
})

module.exports = router;