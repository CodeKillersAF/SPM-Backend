const express = require("express");
const router = express.Router();

const controller = require("../controllers/table.controller");


const TableAPI = () => {

router.get("/allTable", controller.getAllTables);
router.get("/allTable/:id", controller.getTableById);
router.put("/updateTableStatus/:id", controller.updateTableStatus);
router.post("/createTable", controller.createTable); //admin routes
router.put("/updateTable/:id", controller.updateTable); //admin routes
router.delete("/removeTable/:id", controller.removeTable); //admin routes

return router;
}

module.exports = TableAPI;