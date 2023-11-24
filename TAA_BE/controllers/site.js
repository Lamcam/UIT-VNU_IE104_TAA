function site() { }

site.index = (req, res) => {
  res.render('pages/site/homepage')
}

site.about = (req, res) => {
  res.render('pages/site/about')
}

module.exports = site;