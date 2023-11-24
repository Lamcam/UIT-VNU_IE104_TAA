// import middlewares
const middlewares = require("../middlewares/index.js")

// import router
const siteRouter = require("./siteRouter")
const productRouter = require("./productsRouter")

const route = (app) => {
    app.use(middlewares.authenticate)

    app.use("/", siteRouter)

    app.use("/products", productRouter)
}

module.exports = route