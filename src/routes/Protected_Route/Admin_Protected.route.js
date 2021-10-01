const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');


// category exports
const { addCategory, getAllCategories, getOneCategory, getFoodsOfCategory, updateCategory, updateCategoryName, deleteCategory } = require('../../controllers/category.controller');

// food export
const { addFood, getAllFoods, deleteFood, getOneFood, updateFood } = require('../../controllers/food.controller');

const { getAllTakeAwayOrders, getAllInCompletedTakeAwayOrders, getAllCompletedTakeAwayOrders, setTakeAwayOrderAsCompleted, deleteCompletedTakeAwayOrder } = require('../../controllers/onlineTakeAway.controllers');

const { getAllDeliveryOrders , getAllInCompletedDeliveryOrders, getAllCompletedDeliveryOrders, setDeliveryOrderAsCompleted, deleteCompletedDeliveryOrder } = require('../../controllers/onlineDelivery.controller')
 
const { emailSender } = require('../../controllers/email.controller')

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
    await updateCategory(req,res);
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

// ---------------------------------------------- Online-take-away-start ---------------------------------------------

router.get('/takeaway-order/get-all-orders', adminAuth, async(req, res) => {
    await getAllTakeAwayOrders(req, res);
});

router.get('/takeaway-order/get-incomplete-orders', adminAuth, async(req, res) => {
    await getAllInCompletedTakeAwayOrders(req, res);
});

router.get('/takeaway-order/get-complete-orders', adminAuth, async(req, res) => {
    await getAllCompletedTakeAwayOrders(req, res);
});

router.put('/takeaway-order/set-as-completed/:id', adminAuth, async(req, res) => {
    await setTakeAwayOrderAsCompleted(req, res);
});

router.delete('/takeaway-order/delete-complete/:id', adminAuth, async(req, res) => {
    await deleteCompletedTakeAwayOrder(req, res);
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

router.put('/delivery-order/set-as-completed/:id', adminAuth, async(req, res) => {
    await setDeliveryOrderAsCompleted(req, res);
});

router.delete('/delivery-order/delete-complete/:id', adminAuth, async(req, res) => {
    await deleteCompletedDeliveryOrder(req, res);
});
//  ---------------------------------------------- Online-delivery-end ----------------------------------------

//  ---------------------------------------------- Send Emails ----------------------------------------
router.post('/send-mail', adminAuth, async(req, res) => {
    await emailSender(req, res);
});

module.exports = router;