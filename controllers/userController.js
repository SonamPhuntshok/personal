const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks(); // ✅ Now this works with PostgreSQL
    res.render("home", { tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getTasks };
