const router = require("express").Router();
const categoryController = require("../controllers/tableCategory.controller");

const categoryControllerAPI =()=>{
    router.get("/",categoryController.getAllTableCategory);
    router.get("/:id",categoryController.getTableCategory);
    router.post("/",categoryController.addTableCategory);
    router.put("/:id",categoryController.updateTableCategory);
    router.delete("/:id",categoryController.removeTableCategory);
    router.put("/updateMovie/:id",categoryController.updateMovies);
    return router;
}
module.exports = categoryControllerAPI;