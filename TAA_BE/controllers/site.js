function site() { }

site.index = (req, res) => {
    res.render('pages/index')
}

module.exports = site;