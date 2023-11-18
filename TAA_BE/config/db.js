const mysql = require("mysql") ;
const dotenv = require('dotenv');
dotenv.config();

let instance =null ;

const connection = mysql.createConnection({
    connectionLimit:10,
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'taa'
})

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }

    console.log('db' + connection.state);

})

class Dbservice {
    static getDbServiceInstance(){
        return instance ? instance : new Dbservice();
    }
    async getAllData () {
        try{
            const resspone = await new Promise((resolve,reject)=> {
                const query = "SELECT * FROM customer";

                connection.query(query,(err,results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })

            return resspone;
        }
        catch(error){

            console.log(err);

        }
      }
    
}


// module.exports = connectDB;
module.exports = Dbservice ;

