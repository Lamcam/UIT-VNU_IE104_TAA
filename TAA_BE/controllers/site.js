const model = require('../models/index')
const index = require('./index')

function site() { }

site.index = (req, res) => {
  model.product.getHotProduct((err, result) => {
    if (err) throw err;

    res.render('pages/site/homepage', {
    // res.status(200).json({
      hotProducts: index.groupProducts(result)
    })
  })
}

site.about = (req, res) => {
  res.render('pages/site/about')
}

site.news = (req, res) => {
  const title = `GIẢI MÃ PHONG CÁCH Y2K`
  const context = `
    Y2K - phong cách thời trang nổi loạn có lẽ không còn xa lạ gì với chúng ta
    bởi thời trang và xu hướng thẩm mỹ từ cuối thập niên 90 đầu 2000 - đã gây
    chú ý trở lại trong những năm gần đây và được các tín đồ thời trang chào
    đón nồng nhiệt.
  `
  newsDatas = [
    { imgPath: '', title, context },
    { imgPath: '', title, context },
    { imgPath: '', title, context },
    { imgPath: '', title, context },
    { imgPath: '', title, context },
    { imgPath: '', title, context },
  ]

  res.render('pages/site/news', { newsDatas })
}

site.newsPost = (req, res) => {
  res.render('pages/site/newsPost')
}

site.orderManual = (req, res) => {
  res.render('pages/site/orderManual')
}

site.policyManual = (req, res) => {
  res.render('pages/site/policyManual')
}

module.exports = site;