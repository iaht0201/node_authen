const { todoListControllelr } = require("../controllers/todo_list_controller");

// Khai bao router
const router = require("express").Router();

// author Router
router.post("/create", todoListControllelr.createTodo);
router.get("/get", todoListControllelr.getAllTodo);
router.get("/:id", todoListControllelr.getTodo);
router.put("/:id", todoListControllelr.updateTodo);
router.delete("/:id", todoListControllelr.deleteTodo);
module.exports = router;
