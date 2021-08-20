const router = require("express").Router();
const categoryController = require("../controllers/tableCategory.controller");

const categoryControllerAPI =()=>{
    router.get("/",categoryController.getAllTableCategory);
    router.get("/:id",categoryController.getTableCategory);
    router.post("/",categoryController.addTableCategory);
    router.put("/:id",categoryController.updateTableCategory);
    router.delete("/:id",categoryController.removeTableCategory);
    return router;
}
module.exports = categoryControllerAPI;