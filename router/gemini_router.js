const { geminiController } = require("../controllers/gemini_controller");

// Khai bao router
const router = require("express").Router();

// author Router
// router.get("/generate", geminiController.generateResponse);
router.post("/", geminiController.generateResponse);
module.exports = router;
