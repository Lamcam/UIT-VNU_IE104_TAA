// import middlewares
const middlewares = require("../middlewares/index.js")

// import router
const siteRouter = require("./SiteRouter")

const route = (app) => {
    app.use(middlewares.authenticate)

    app.use("/", siteRouter)
}

module.exports = route