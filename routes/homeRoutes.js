// const express = require('express');
// const router = express.Router();
// const { isAuthenticated } = require('../config/authMiddleware');
// const db = require('../models/taskModel'); // Adjust the path if needed



// // Home route (only accessible by logged-in users)
// router.get('/home', isAuthenticated, async (req, res) => {
//   try {
//     res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
//     res.set('Pragma', 'no-cache');
//     res.set('Expires', '0');

//     const user = req.session.user;
//     console.log('Session user:', user);

//     const tasks = await db.any('SELECT * FROM tasks WHERE user_id = $1', [user.id]);
//     console.log('Fetched tasks:', tasks);

//     res.render('home', { user, tasks });

//   } catch (err) {
//     console.error('❌ Internal Server Error:', err);
//     res.status(500).send('Internal Server Error');
//   }

  
// });




// // Logout route
// router.get('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/auth/login'); // Redirect to login after logout
//     });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// ✅ Correct path to tasksController.js
const tasksController = require("../controllers/tasksController");
console.log("tasksController:", tasksController);

// ✅ This will only work if renderUserHome is properly exported
router.get("/home", tasksController.renderUserHome);

module.exports = router;
