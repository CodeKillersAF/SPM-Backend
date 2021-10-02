const express = require("express");
const router = express.Router();

const controller = require("../controllers/table.controller");


const TableAPI = () => {

router.get("/allTable", controller.getAllTables);
router.get("/allTable/:id", controller.getTableById);
// router.put("/updateTableStatus/:id", controller.updateTableStatus);
// router.post("/createTable", controller.createTable); 
// router.put("/updateTable/:id", controller.updateTable);
// router.delete("/removeTable/:id", controller.removeTable); 

return router;
}

module.exports = TableAPI;