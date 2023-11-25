// import middlewares
const middlewares = require("../middlewares/index.js");

// import router
const siteRouter = require("./siteRouter");
const productRouter = require("./productsRouter");
const authRouter = require("./authRouter");

const route = (app) => {
  app.use(middlewares.authenticate);

  app.use("/", siteRouter);

  app.use("/auth", authRouter);

  app.use("/products", productRouter);

  // app.get("/products", controllers.product.queryProduct);
  // app.post("/login", controllers.auth.loginPost);
};

module.exports = route;
