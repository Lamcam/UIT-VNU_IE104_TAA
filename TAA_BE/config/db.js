import mysql from "mysql"

const pool = mysql.createPool({
    connectionLimit:10,
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'taa'
})

function connectDB(){
    pool.getConnection((err,connection) =>{
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`)
    
        //query(sqlString,callback)
        connection.query('SELECT * FROM customer',(err,rows)=>{
            connection.release()

            if(!err){
                res.send(rows);
            } else{
                console.log(err);
            }
        })
    
    })
}


// module.exports = connectDB;
export default  connectDB;
