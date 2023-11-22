const express = require("express");
const { json } = require("express");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const bodyParser = require("body-parser");
const DbService = require("./config/db.js"); // connect DB
const { data } = require("jquery");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__srcDir))
app.use(express.static(__rootDir))

app.get("/", async (req, res) => {
  // res.status(200).sendFile(__srcDir + "\\index.html");
  // console.log(__dirname + "\\index.html")
  // res.status(200).sendFile(__dirname + "\\index.html");
  res.sendFile(__srcDir  + "index.html",{

  } )
});









