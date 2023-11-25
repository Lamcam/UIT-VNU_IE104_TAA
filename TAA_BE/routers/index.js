// import middlewares
const middlewares = require("../middlewares/index.js")

// import router
const siteRouter = require("./SiteRouter")

const route = (app) => {
    app.use(middlewares.authenticate)

    app.use("/", siteRouter)

    app.get('/post', (req, res) => {
        res.render('pages/post/post')
    })
    app.get('/policy', (req, res) => {
        res.render('pages/policy/policy')
    })
}

module.exports = route