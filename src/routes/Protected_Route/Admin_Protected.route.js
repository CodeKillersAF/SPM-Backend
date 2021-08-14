const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');
const { getAllSupplier, createSupplier, removeSupplier } = require('../../controllers/supplier.controller');



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

module.exports = router;