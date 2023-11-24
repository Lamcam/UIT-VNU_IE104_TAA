// const express  = require('express');
const models = require('../models')
// const db = require('../config/db');
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

function product() { }

product.getAll = (req, res) => {
    models.product.getAllProduct((err, result) => {
        if (err) throw err;

        res.status(200).render('pages/products/index', { result })
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