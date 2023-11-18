const express = require("express");
const { json } = require("express");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const bodyParser = require("body-parser");
const DbService = require("./config/db.js"); // connect DB
const { data } = require("jquery");
const cors = require('cors')

// const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

// app.use(express.static(path.join()))

app.get("/", async (req, res) => {
    // res.send("Hj")
    res.sendFile(__dirname + "/index.html");
});

app.get("/getAll", async (req, res) => {
  try {
    const db = await DbService.getDbServiceInstance();
    const result = await db.getAllData();
    
    // result.then(data => res.json({data: data})).catch(err =>console.log(err));
    res.json({result});

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

//mySQL

app.listen(PORT, () => {
  console.log(`Listerning on port ${PORT}`);
});
