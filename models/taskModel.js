const db = require("../config/db");

// Create Task table (if it doesn’t exist)
const createTaskTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      due_date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.none(query);
    console.log("✅ Task table is ready!");
  } catch (err) {
    console.error("❌ Error creating Task table:", err);
  }
};

// Call table creation
createTaskTable();

// ✅ Export functions for use in controller
const getAllTasks = async () => {
  return db.any("SELECT * FROM tasks ORDER BY due_date");
};

module.exports = {
  getAllTasks
};
