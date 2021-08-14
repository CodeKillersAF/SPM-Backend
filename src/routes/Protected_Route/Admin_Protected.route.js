const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');
const {getAllSupplier, createSupplier} = require('../../controllers/supplier.controller');



router.get('/admin-protected', adminAuth, async(req, res) => {
    return res.send("Welcome Admin");
})

router.get('/supplier', adminAuth, async(req, res) => {
    await getAllSupplier(req,res);
})

router.post('/supplier', adminAuth, async(req, res) => {
    await createSupplier(req,res);
})

module.exports = router;