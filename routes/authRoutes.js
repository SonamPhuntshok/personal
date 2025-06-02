const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.registerUser);
router.post("/login", authController.loginUser);
router.post('/logout', authController.logoutUser);

router.get("/signup", (req, res) => {
  console.log('signup route hit');
  res.render("signup");
});
router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
