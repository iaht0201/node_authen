const { accountCountroller } = require("../controllers/account_controller");


// Khai bao router
const router = require("express").Router();

// author Router
router.post("/", accountCountroller.createAccount);
router.post("/login", accountCountroller.handleLogin);
router.post("/logout" , accountCountroller.handleLogout); 
// router.get("/:id", authorController.getAnAuthor);
// router.put("/:id", authorController.updateAuthor);
// router.delete("/:id", authorController.deleteAuthor);
module.exports = router;
