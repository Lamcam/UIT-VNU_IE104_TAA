/**
 * @fileoverview Controller functions for handling products.
 * @module products
 */

const models = require('../models')
const index = require('./index')

/**
 * Controller class for handling products.
 * @class
 */
function product() { }

/**
 * Retrieves all products and renders the product index page.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
product.getAll = (req, res) => {
  models.product.getAllProduct((err, result) => {
    if (err) throw err;

    res.status(200).render('pages/products/index', {
      result: index.groupProducts(result),
    })
  })
}

product.getHotProduct = (req, res) => {
  models.product.getHotProduct((err, result) => {
    if (err) throw err;

    res.status(200).json({
      result
      // result: index.groupProducts(result),
    })
  })
}

/**
 * Retrieves all products and returns them as JSON.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
product.queryProduct = (req, res) => {
  models.product.getAllProduct((err, result) => {
    if (err) throw err;

    if (!result) {
      res.status(404).json({
        msg: 'can not find any',
      });
    } else {
      res.status(200).json({
        msg: 'Found',
        result,
      })
    }
  })
}


product.getDetail = (req, res) => {
  const id = req.query.id
  models.product.getDetailProduct({ id }, (err, result) => {
    if (err) throw err;
    res.status(200).render('pages/products/detail', {
      data: index.groupProducts(result),
    })
  })
}

module.exports = product