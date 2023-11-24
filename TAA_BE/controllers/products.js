// const express  = require('express');
const models = require('../models')
// const db = require('../config/db');
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

function product() { }

product.groupProducts = (result) => {
  const groupResult = result.reduce((r, item) => {
    const {
      prod_id, prod_name, prod_cost, prod_discount,
      prod_num_sold, prod_num_avai, prod_num_rating,
      prod_star_rating, prod_description, cate_id,
      cate_name, prod_img_url,
    } = item;
    const found = r.find(v => v.prod_id === prod_id);
    if (found) {
      found.prod_img_urls.push(prod_img_url);
    } else {
      r.push({
        prod_id, prod_name, prod_cost, prod_discount,
        prod_num_sold, prod_num_avai, prod_num_rating,
        prod_star_rating, prod_description, cate_id,
        cate_name, prod_img_urls: [prod_img_url],
      });
    }
    return r;
  }, [])

  return groupResult;
}

product.getAll = (req, res) => {
  models.product.getAllProduct((err, result) => {
    if (err) throw err;

    res.status(200).render('pages/products/index', {
    // res.status(200).json({
      result: product.groupProducts(result),
    })
  })
}

product.queryProduct = (req, res) => {

  models.product.getAllProduct((err, result) => {
    if (err) throw err;

    if (!result) {
      res.status(404).json({
        msg: 'can not find any',
      });
    }
    else {
      res.status(200).json({
        msg: 'Found',
        result,
      })

    }
  })
}

module.exports = product