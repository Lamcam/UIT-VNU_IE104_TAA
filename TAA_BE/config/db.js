const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();

let instance = null;

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_ie104'
})

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }

    console.log('db' + connection.state);

})

class Dbservice {

    static getDbServiceInstance() {
        return instance ? instance : new Dbservice();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM users";

                connection.query(query, (err, results) => {
                    if (err)
                        reject(new Error(err.message));
                    else
                        resolve(results);
                })
            })

            return response;
        }
        catch (error) {
            console.log(err);
        }
    }
}


// module.exports = connectDB;
module.exports = Dbservice;

