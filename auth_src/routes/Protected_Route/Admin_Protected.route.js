const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');

// category exports
const { addCategory, getAllCategories, getOneCategory, deleteCategory, getFoodsOfCategory, updateCategory } = require('../../../src/controllers/category.controller');

router.get('/admin-protected', adminAuth, async(req, res) => {
    return res.send("Welcome Admin");
});

// ----------------------------------- Category and Food Management Routes Start ---------------------------------------------------
router.post('/category/add-category', adminAuth, async(req, res) => {
    await addCategory(req, res);
});


module.exports = router;