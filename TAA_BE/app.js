import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
import mysql from "mysql"
// import DB from "./config/db.js"

var path = 'D:/WebProject2023/UIT-VNU_IE104_TAA/TAA_FE/src/homepage/index.html';
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


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





app.get("/",(req,res)=>{
    
   res.sendFile(path);
    
    
})

//mySQL


app.listen(PORT,()=>{
    console.log(`Listerning on port ${PORT}`);
});


