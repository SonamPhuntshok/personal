// const db = require("../models/taskModel");


// // Get all tasks from the database
// const getTasks= async (req, res) => {
//   try {
//       const tasks = await db.any("SELECT * FROM tasks");
     
// // Pass user from session to the view
// const user = req.session.user;


// // Render books page with books and user data
// res.render("tasks", { tasks, user }); // Pass user here
// } catch (err) {
// console.error("❌ Error fetching taskss:", err);
// res.status(500).send("Internal Server Eror");
// }
// };


// module.exports = { getTasks };

const Task = require("../models/taskModel"); // ✅ Import your task model

// Get all tasks from the database
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks(); // ✅ Call the method from the model

    // Get user from session
    const user = req.session.user;

    // Render tasks page with data
    res.render("tasks", { tasks, user });
  } catch (err) {
    console.error("❌ Error fetching tasks:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getTasks };
