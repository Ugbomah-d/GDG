const {Router} = require("express") 
const router = Router()
const {todo, Delete, change_item, read_arr} = require("../controllers/todo")
// This are the routers the specify the endpoints to use 
/*
POST,GET,UPDATE,DELETE
*/
router.post("/money", todo)
router.delete("/remove/money", Delete)
router.patch("/update/money", change_item)
router.get("/get/money", read_arr)
module.exports = router