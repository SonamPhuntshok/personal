const express = require("express");
const { getTasks } = require("../controllers/tasksController");
const router = express.Router();


router.get("/view-task", getTasks); // Route to display Tasks


module.exports = router;
