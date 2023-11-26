/**
 * @fileoverview Controller functions for handling products.
 * @module products
 */

const { json } = require('body-parser');
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

    //  const arr = result.find(e => e.cate_name == "Balo" )
    if (err) throw err;
    // console.log(typeof(index.groupProducts(result)));
    res.status(200).render('pages/products/index', {
      result: index.groupProducts(result),
      
    })
  })
}

product.getCate = (req,res) =>{

  // const { category } = req.body.category;
  const  category  = req.body.category;
  // console.log(category);

  models.product.getCategory( {category } ,(err, result) => {
    // const a = result.json();
    // console.log("this is result",result)
    if (err) throw err;
    res.status(200).json({
      result : index.groupProducts(result)

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
  // models.product.getAllProduct((err, result) => {
  //   if (err) throw err;


  // })
  res.status(200).render('pages/products/detail', {
    // result: index.groupProducts(result),
  })
}

module.exports = product