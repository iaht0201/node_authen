const { chatControllers } = require("../controllers/chat_controller");

// Khai bao router
const router = require("express").Router();

// author Router
// router.get("/get-all", accountCountroller.createAccount);
router.post("/save-history", chatControllers.saveHistoryChat);
// router.get("/:id", authorController.getAnAuthor);
// router.put("/:id", authorController.updateAuthor);
// router.delete("/:id", authorController.deleteAuthor);
module.exports = router;
