
/**
 * @fileoverview Controller functions for handling products.
 * @module products
 */
const models = require("../models");
const index = require("./index");

/**
 * Controller class for handling products.
 * @class
 */

function news() {}
/**
 * Retrieves all products and renders the product index page.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */


news.getDetail = (req, res) => {
    const id = req.query.id;
    models.news.getPostNews({ id }, (err, result) => {
        if (err) throw err;
        res.status(200).render("pages/site/newsPost", {
            data: index.groupProducts(result),
        });
    });
};

module.exports = news;
