const express = require("express");
const router = express.Router();
const { renderDashboard, addTask } = require("../controllers/adminController"); // or taskController
const { isAuthenticated } = require("../config/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const adminController = require('../controllers/adminController');

router.get('/admin/edit-task/:id', adminController.getEditTaskForm);
router.post('/admin/edit-task/:id', adminController.updateTask);

router.get("/admin/dashboard", isAuthenticated, isAdmin, renderDashboard);
router.post("/admin/add-task", isAuthenticated, isAdmin, addTask); // updated path and handler

module.exports = router;
