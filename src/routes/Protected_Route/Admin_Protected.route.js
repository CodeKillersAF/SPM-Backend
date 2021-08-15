const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');
const { getAllSupplier, createSupplier, removeSupplier } = require('../../controllers/supplier.controller');
const { getAllSupplyItem, createSupplyItem, removeSupplyItem } = require('../../controllers/supplyItem.controller');



router.get('/admin-protected', adminAuth, async (req, res) => {
    return res.send("Welcome Admin");
})

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

module.exports = router;