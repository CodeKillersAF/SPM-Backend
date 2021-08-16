const router = require("express").Router();
const controller = require('../controllers/table.controller');


const tableRoutes = () => {

router.get("/allTable", controller.getAllTable);
router.get("/allTable/:id", controller.getTableById);
router.put("/updateTableStatus/:id", controller.updateTableStatus);
router.post("/createTable", controller.createTable); //admin routes
router.put("/updateTable/:id", controller.updateTable); //admin routes
router.post("/removeTable/:id", controller.removeTable); //admin routes

return router;
}

module.exports = tableRoutes;