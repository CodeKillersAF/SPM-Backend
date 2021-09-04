const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');


// category exports
const { addCategory, getAllCategories, getOneCategory, getFoodsOfCategory, updateCategory, updateCategoryName, deleteCategory, updateCategoryAfterDelete, deleteCategoryFood } = require('../../controllers/category.controller');
const { getAllRate } = require('../../controllers/rate.controller');
// food export
const { addFood, getAllFoods, deleteFood, getOneFood, updateFood, getRatesoFFood } = require('../../controllers/food.controller');

const { getAllTakeAwayOrders, getAllInCompletedTakeAwayOrders, getAllCompletedTakeAwayOrders } = require('../../controllers/onlineTakeAway.controllers');


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
    await updateCategory(req, res);
});

router.put('/category/update-category-delete/:id', adminAuth, async(req, res) => {
    await updateCategoryAfterDelete(req, res);
});

router.put('/category/update-category-name/:id', adminAuth, async(req, res) => {
    await updateCategoryName(req, res);
});

router.delete('/category/delete-category/:id', adminAuth, async(req, res) => {
    await deleteCategory(req, res);
});

router.put('/category/update-array/:id', adminAuth, async(req, res) => {
    await deleteCategoryFood(req, res);
})

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
});

router.get('/food/food-rate/:id', adminAuth, async(req, res) => {
    await getRatesoFFood(req, res);
});

router.get('/food/all-rate', adminAuth, async(req, res) => {
    await getAllRate(req, res);
});

// ----------------------------------- Category and Food Management Routes End ---------------------------------------------------

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