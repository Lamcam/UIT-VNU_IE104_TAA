/**
 * @fileoverview Controller functions for handling products.
 * @module products
 */

const { json } = require("body-parser");
const models = require("../models");
const index = require("./index");
// const { search } = require("../routers/productsRouter");

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
  const searchValue = req.query;
  const { id } = req.cookies;

  models.product.getAllProduct(searchValue, (err, result) => {
    if (err) throw err;

    const products = index.groupProducts(result);
    // console.log(id)

    if (!id) {
      res.status(200).render("pages/products/index", {
      // res.status(200).json({
        data: { products, favorProducts: [] },
        message: searchValue,
      });
    } else {
      models.account.getIdFavorProducts({ id }, (err, favorProducts) => {
        if (err) throw err;

        res.status(200).render("pages/products/index", {
        // res.status(200).json({
          data: { products, favorProducts: favorProducts.map(item => item.prod_id) },
          message: searchValue,
        });
      });
    }
  });
};

// product.getSort = (req, res) => {
//     models.product.getSortProduct(req.query, (err, result) => {
//         if (err) throw err;
//         if (result.length > 0) {
//             res.status(200).json({
//                 message: "Success",
//                 result: index.groupProducts(result),
//             });
//         } else {
//             res.status(200).json({
//                 message: "Not Found",
//             });
//         }
//     });
// };

product.getCate = (req, res) => {
  // const { category } = req.body.category;
  const category = req.body.category;
  // console.log(category);

  models.product.getCategory({ category }, (err, result) => {
    // const a = result.json();
    // console.log("this is result",result)
    if (err) throw err;
    res.status(200).json({
      result: index.groupProducts(result),
    });
  });
};

product.getHotProduct = (req, res) => {
  models.product.getHotProduct((err, result) => {
    if (err) throw err;

    res.status(200).json({
      result,
      // result: index.groupProducts(result),
    });
  });
};

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
        msg: "can not find any",
      });
    } else {
      res.status(200).json({
        msg: "Found",
        result,
      });
    }
  });
};

product.getDetail = (req, res) => {
  const id = req.query.id;
  models.product.getDetailProduct({ id }, (err, result) => {
    if (err) throw err;
    res.status(200).render("pages/products/detail", {
      data: index.groupProducts(result),
    });
  });
};

module.exports = product;
