// import router
const siteRouter = require("./SiteRouter")

const route = (app) => {
    app.use("/", siteRouter)
}

module.exports = route