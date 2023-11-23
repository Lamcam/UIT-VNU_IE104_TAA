const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();

let instance = null;

const db = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ie104'
})

db.connect((err) => {
    if (err) console.log(err.message);

    else{
        console.log("connected");
    }
})

module.exports = db;

