// const express = require('express');
// const models = require('../models')
// const db = require('../config/db');
// const { error } = require('jquery');
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
function auth() { }

auth.loginPost = (req, res) => {
  const { name, pass } = req.body;

  models.auth.getUserByLogin({ name, pass }, (err, result) => {
    if (err) throw err;

    if (result.length == 0) {
      res.status(404).json({
        statusCode: 404,
        msg: 'Not match any account'
      })
    } else {
      res.status(200).json({
        statusCode: 200,
        msg: 'Found data account',
        data: {
          result
        }
      })
    }
  })
}

module.exports = auth