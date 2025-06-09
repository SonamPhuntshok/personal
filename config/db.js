const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'personal',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '10505000825',
  ssl: false // <- Disable SSL explicitly
});

module.exports = db;
