const {Router} =  require("express");
const router = Router();
const {todo, Delete, changeItem, retriveList } = require("../controller/todo");

router.post("/money", todo);
router.delete("/remove/money", Delete);
router.patch("/update/money", changeItem);
router.get("/retriveList", retriveList);
module.exports = router;