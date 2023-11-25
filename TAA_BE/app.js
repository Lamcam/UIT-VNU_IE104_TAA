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
const cookieParser = require('cookie-parser');

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
app.use(cookieParser());

// Serve static files from the "public" directories
app.use(express.static(__publicDir));

// Set views engine and views directory
app.set('views', __viewsDir);
app.set('view engine', 'ejs');

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

// app.post("/login", async (req,res)=>{
//   const username = sanitizeHtml(req.body.f_log_name);
//   const password = md5(sanitizeHtml(req.body.f_log_pass)); // hashing va lam sach mat khau
  
  
//   if (username.length == 0 || password.length == 0 ) res.status(404);
//   else{
//     // query
//     console.log(username);
//     console.log(password);
    

//   }
// })
app.get('/products', controllers.product.queryProduct);
app.post('/login', controllers.auth.loginPost);

// Set up your routes
route(app);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${URL_PATH}`);
});
