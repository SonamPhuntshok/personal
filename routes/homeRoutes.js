const express = require("express");
const router = express.Router();

// ✅ Correct path to tasksController.js
const tasksController = require("../controllers/tasksController");
console.log("tasksController:", tasksController);

// ✅ This will only work if renderUserHome is properly exported
router.get("/home", tasksController.renderUserHome);

module.exports = router;
