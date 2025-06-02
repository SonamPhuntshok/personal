// routes/homeRoutes.js
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Route to render user home with tasks
router.get("/home", userController.getTasks);

module.exports = router;
