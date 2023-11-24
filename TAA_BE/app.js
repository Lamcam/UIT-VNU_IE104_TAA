const ejs = require("ejs");
const express = require("express");
const config = require("./config");
const { json } = require("express");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const bodyParser = require("body-parser");
const DbService = require("./config/db.js"); // connect DB
const { data } = require("jquery");
const cors = require('cors')
const route = require("./routers/index.js"); // import router

const app = express();
const URL_PATH = `http://${config.HOST}:${config.PORT}`;
const __dirnameList = __dirname.split("\\");
const __rootDir = __dirnameList.slice(0, -1).join("\\");
const __viewsDir = __rootDir + "\\TAA_FE\\views\\";
const __publicDir = __rootDir + "\\TAA_FE\\public\\";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: URL_PATH }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" and "views" directories
app.use(express.static(__publicDir));
// app.use('/views', express.static(__viewsDir));
app.set('views', __viewsDir);
app.set('view engine', 'ejs');

// Set up your routes
route(app);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${URL_PATH}`);
});
