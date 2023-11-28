const mysql = require("mysql");
const dotenv = require('dotenv').config();
// dotenv.config();

let instance = null;

const db = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
}) 

db.connect((err) => {
  if (err)
    console.log(err.message);
  else
    console.log("Connected to DB!");
})

module.exports = db;