function site() { }

site.index = (req, res) => {
    res.render('pages/homepage')
}

module.exports = site;