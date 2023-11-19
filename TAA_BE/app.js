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
app.use(express.urlencoded({ extended: true }))

const __dirnameList = __dirname.split('\\')
// console.log(__dirnameList.slice(0, -1).join('\\') + "\\TAA_FE\\src\\homepage\\index.html")
const __rootDir = __dirnameList.slice(0, -1).join('\\')
// console.log(__rootDir + "\\TAA_FE\\src\\homepage\\index.html")
const __srcDir = __rootDir + "\\TAA_FE\\src\\homepage"
// console.log(__srcDir + "\\index.html")

// app.use(express.static(path.join()))

app.get("/", async (req, res) => {
  // console.log(__dirnameList.slice(0, -1).join('\\') + "\\TAA_FE\\src\\homepage\\index.html")
  // res.sendFile(__dirname.split('/')[0,-1].join('/') + "/TAA_FE/src/homepage/index.html");


  // res.status(200).sendFile(__srcDir + "\\index.html");


  res.status(200).sendFile(__dirname + "\\index.html");
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

//mySQL

app.listen(PORT, () => {
  console.log(`Listerning on port ${PORT}`);
});
