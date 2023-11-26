// import middlewares
const middlewares = require("../middlewares/index.js")

// import router
const siteRouter = require("./siteRouter")
const productRouter = require("./productsRouter")
const authRouter = require("./authRouter")
const accountRouter = require("./accountRouter")

const route = (app) => {
    app.use(middlewares.authenticate)

    app.use("/", siteRouter)

    app.get('/post', (req, res) => {
        res.render('pages/post/post')
    })
    app.get('/policy', (req, res) => {
        res.render('pages/policy/policy')
    })

    app.use("/auth", authRouter)

    app.use("/products", productRouter)

    app.use('/account', middlewares.authenticate, accountRouter)
}

module.exports = route