const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');
const { getAllSupplier, createSupplier, removeSupplier, updateSupplier, getOneSupplier, getOneSupplierForRecord } = require('../../controllers/supplier.controller');
const { getAllSupplyItem, createSupplyItem, removeSupplyItem, updateSupplyItem, getOneItem } = require('../../controllers/supplyItem.controller');

// category exports
const { addCategory, getAllCategories, getOneCategory, getFoodsOfCategory, updateCategory, updateCategoryName, deleteCategory, deleteCategoryFood } = require('../../controllers/category.controller');
const { getAllRate } = require('../../controllers/rate.controller');
// food export
const { addFood, getAllFoods, deleteFood, getOneFood, updateFood, getRatesoFFood } = require('../../controllers/food.controller');

const { getAllTakeAwayOrders, getAllInCompletedTakeAwayOrders, getAllCompletedTakeAwayOrders, setTakeAwayOrderAsCompleted, deleteCompletedTakeAwayOrder } = require('../../controllers/onlineTakeAway.controllers');


const { getAllDeliveryOrders , getAllInCompletedDeliveryOrders, getAllCompletedDeliveryOrders, setDeliveryOrderAsCompleted, deleteCompletedDeliveryOrder } = require('../../controllers/onlineDelivery.controller')

// const { getAllDeliveryOrders , getAllInCompletedDeliveryOrders, getAllCompletedDeliveryOrders } = require('../../controllers/onlineDelivery.controller');
// offers
const { getAllOffers, addOffer } = require('../../controllers/offer.controller');
// Supply record
const { createSupplyRecord, getAllSupplyRecord, sendMailUser } = require('../../controllers/supplyRecord.controller');
 
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
    await updateCategory(req, res);
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


//  ---------------------------------------------- @Author - Kawsikan ----------------------------------------

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
// Update supplier
router.put('/supplier/:id', adminAuth, async (req, res) => {
    await updateSupplier(req, res);
})
// View item under supplier
router.get('/supplier/:id', adminAuth, async (req, res) => {
    await getOneSupplier(req, res);
})

router.get('/supplier-r/:id', adminAuth, async (req, res) => {
    await getOneSupplierForRecord(req, res);
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

router.get('/supply-item/:id', adminAuth, async (req, res) => {
    await getOneItem(req, res);
})


// Author : Kawsikan Routes for offer details

// Get all offer item
router.get('/offer',adminAuth, async(req,res)=>{
    await getAllOffers(req, res);
})
// Add new offer
router.post('/offer',adminAuth, async(req,res)=>{
    await addOffer(req, res);
})

// Author : Kawsikan Routes for supply record

// Add new supply record
router.post('/supply-record',adminAuth, async(req,res)=>{
    await createSupplyRecord(req,res);
})

router.get('/supply-record',adminAuth, async(req,res)=>{
    await getAllSupplyRecord(req,res);
});

router.post('/supply-record/email',adminAuth, async(req,res)=>{
    await sendMailUser(req,res);
});

module.exports = router;