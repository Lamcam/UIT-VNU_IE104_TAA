function site() { }

site.index = (req, res) => {
  res.render('pages/site/homepage')
}

site.about = (req, res) => {
  res.render('pages/site/about')
}

site.news = (req, res) => {
  const context = `
    
  `
  newsDatas = [
    { imgPath: '', title: 'TAA 2021', context: 'TAA 2021 is coming soon' },
    { imgPath: '', title: 'TAA 2021', context: 'TAA 2021 is coming soon' },
    { imgPath: '', title: 'TAA 2021', context: 'TAA 2021 is coming soon' },
    { imgPath: '', title: 'TAA 2021', context: 'TAA 2021 is coming soon' },
    { imgPath: '', title: 'TAA 2021', context: 'TAA 2021 is coming soon' },
    { imgPath: '', title: 'TAA 2021', context: 'TAA 2021 is coming soon' },
  ]

  res.render('pages/site/news', { newsDatas })
}

module.exports = site;