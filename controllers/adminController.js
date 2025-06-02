const db = require("../config/db");

// ✅ Render admin dashboard with form and task list
const renderDashboard = async (req, res) => {
  try {
    const tasks = await db.any("SELECT * FROM tasks ORDER BY due_date ASC");
    const user = req.session.user;
    res.render("adminDashboard", { user, tasks });
  } catch (err) {
    console.error("❌ Error loading admin dashboard:", err);
    res.status(500).send("Error loading admin dashboard");
  }
};

// ✅ Handle task creation
const addTask = async (req, res) => {
  const { title, description, due_date } = req.body;
  try {
    await db.none(
      "INSERT INTO tasks (title, description, due_date) VALUES ($1, $2, $3)",
      [title, description, due_date]
    );
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error("❌ Error adding task:", err);
    res.status(500).send("Failed to add task");
  }
};

// ✅ Render edit task form
const getEditTaskForm = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await db.one("SELECT * FROM tasks WHERE id = $1", [taskId]);
    res.render("editTask", { task });
  } catch (err) {
    res.status(500).send("Error fetching task");
  }
};

// ✅ Handle edit form submission
const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, description, due_date } = req.body;
  try {
    await db.none(
      "UPDATE tasks SET title = $1, description = $2, due_date = $3 WHERE id = $4",
      [title, description, due_date, taskId]
    );
    res.redirect("/admin/dashboard");
  } catch (err) {
    res.status(500).send("Error updating task.");
  }
};

// ✅ Export all handlers
module.exports = {
  renderDashboard,
  addTask,
  getEditTaskForm,
  updateTask
};
