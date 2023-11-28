// import middlewares
const middlewares = require("../middlewares/index.js");

// import router
const siteRouter = require("./siteRouter")
const productRouter = require("./productsRouter")
const authRouter = require("./authRouter")
const accountRouter = require("./accountRouter")
const newsRouter = require("./newsRouter.js")

const route = (app) => {
  app.use(middlewares.authenticate);

    app.use("/", siteRouter)
    
    app.use("/auth", authRouter)

    app.use("/products", productRouter)

  app.use('/account', middlewares.authenticate, accountRouter)
  
  app.use('/news', newsRouter)
}

  // app.get("/products", controllers.product.queryProduct);
  // app.post("/login", controllers.auth.loginPost);


module.exports = route;
