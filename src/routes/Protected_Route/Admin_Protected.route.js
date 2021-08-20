const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');

// category exports
const { addCategory, getAllCategories, getOneCategory, getFoodsOfCategory, updateCategory, updateCategoryName, deleteCategory } = require('../../controllers/category.controller');

// food export
const { addFood, getAllFoods, deleteFood, getOneFood, updateFood } = require('../../controllers/food.controller');

router.get('/admin-protected', adminAuth, async(req, res) => {
    return res.send("Welcome Admin");
});

// ----------------------------------- Category and Food Management Routes Start ---------------------------------------------------
router.post('/category/add-category', adminAuth, async(req, res) => {
    await addCategory(req, res);
});

router.get('/category/all-category', adminAuth, async(req, res) => {
    await getAllCategories(req, res);
});

router.get('/category/get-category/:id', adminAuth, async(req, res) => {
    await getOneCategory(req, res);
});

router.get('/category/own-category/:id', adminAuth, async(req, res) => {
    await getFoodsOfCategory(req, res);
});

router.put('/category/update-category/:id', adminAuth, async(req, res) => {
    await updateCategory(req, req.params.id, res);
});

router.put('/category/update-category-name/:id', adminAuth, async(req, res) => {
    await updateCategoryName(req, req.params.id, res);
});

router.delete('/category/delete-category/:id', adminAuth, async(req, res) => {
    await deleteCategory(req, res);
});

router.post('/food/add-food', adminAuth, async(req, res) => {
    await addFood(req, res);
});

router.get('/food/all-food', adminAuth, async(req, res) => {
    await getAllFoods(req, res);
});

router.delete('/food/delete-food/:id', adminAuth, async(req, res) => {
    await deleteFood(req, res);
});

router.get('/food/get-food/:id', adminAuth, async(req, res) => {
    await getOneFood(req, res);
});

router.put('/food/update-food/:id', adminAuth, async(req, res) => {
    await updateFood(req, res);
})

// ----------------------------------- Category and Food Management Routes End ---------------------------------------------------

module.exports = router;