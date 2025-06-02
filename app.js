// Import required modules
const express = require('express');
const path = require('path');
const dotenv  =  require('dotenv')
dotenv.config();
const session = require('express-session');
const db = require('./config/db');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const profileRoutes = require('./routes/profileRoutes');
const taskRoutes = require('./routes/taskRoutes');


//load environment variables
dotenv.config();


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 30000;


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'gyeltshenMk',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60 * 60 * 1000 //session expries after 1 hour
    }
}));


// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/components', express.static(path.join(__dirname, 'views/components')));




// routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/', userRoutes);
app.use('/', profileRoutes);
app.use("/", taskRoutes);
app.use('/', adminRoutes);
app.use(express.static('public'));



//app.use('/', homeRoutes);
//app.use('/', profileRoutes);
//app.use("/", taskRoutes);
//app.use('/', adminRoutes);


//for db connection
app.get('/db-test', async (req, res) => {
    try {
        const result = await db.one('SELECT NOW() AS current_time');
        res.json({ message: 'Database connected successfully', time: result.current_time });
    } catch (err) {
        res.status(500).json({ error: 'Database connection failed', details: err.message });
    }
});


// To dele the given Tasks
app.delete('/admin/delete-task/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const result = await db.query('DELETE FROM tasks WHERE id = $1', [taskId]);
    if (result.rowCount === 0) {
      return res.status(404).send('Task not found');
    }
    res.status(200).send('Task deleted');
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send('Server error');
  }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




