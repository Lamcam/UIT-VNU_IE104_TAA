const express = require("express");
const { json } = require("express");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const bodyParser = require("body-parser");
const DbService = require("./config/db.js"); // connect DB
const { data } = require("jquery");
const cors = require('cors')
// login 
const sanitizeHtml = require('sanitize-html');
const md5 = require("md5");
const { use } = require("passport");


const PORT = 3000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

const __dirnameList = __dirname.split('\\')
const __rootDir = __dirnameList.slice(0, -1).join('\\')
const __srcDir = __rootDir + "/TAA_FE/src/homepage/"

app.use(express.static(__srcDir))
app.use(express.static(__rootDir))

app.get("/", async (req, res) => {
  // res.status(200).sendFile(__srcDir + "\\index.html");
  // console.log(__dirname + "\\index.html")
  // res.status(200).sendFile(__dirname + "\\index.html");
  res.sendFile(__srcDir  + "index.html",{

  } )
});





app.get("/getAll", async (req, res) => {
  try {
    const db = await DbService.getDbServiceInstance();
    const result = await db.getAllData();

    // result.then(data => res.json({data: data})).catch(err => console.log(err));
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/login", async (req,res)=>{
  const username = sanitizeHtml(req.body.f_log_name);
  const password = md5(sanitizeHtml(req.body.f_log_pass)); // hashing va lam sach mat khau
  
  
  if(username.length ==0 || password.length ==0 ) res.status(404);
  else{
    // query
    console.log(username);
    console.log(password);
    

  }





})

app.post("/register", async (req,res)=>{
console.log(req.body);

})

//mySQL

app.listen(PORT, () => {
  console.log(`Listerning on port ${PORT}`);
});
