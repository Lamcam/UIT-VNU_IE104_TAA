// const express = require('express');
const models = require('../models')
// const db = require('../config/db');
// const { error } = require('jquery');
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
function auth() { }

auth.loginPost = (req, res) => {
  const { phone, pass } = req.body;

  models.auth.getUserByLogin({ phone, pass }, (err, result) => {
    if (err) throw err;

    if (result.length == 0) {
      res.status(404).json({
        statusCode: 404,
        msg: 'Not match any account'
      })
    } else {
      res.cookie('authenticated', 'true', { maxAge: 1000 * 60 * 60 * 24 * 30 });
      res.cookie('user', result[0].user_id, { maxAge: 1000 * 60 * 60 * 24 * 30 });
      res.cookie('name', result[0].user_name, { maxAge: 1000 * 60 * 60 * 24 * 30 });
      res.cookie('avatar', result[0].user_avatar, { maxAge: 1000 * 60 * 60 * 24 * 30 });
      res.status(200).json({
        statusCode: 200,
        msg: 'Found data account',
      })
    }
  })
}

auth.logout = (req, res) => {
  res.clearCookie('authenticated');
  res.clearCookie('user');
  res.clearCookie('name');
  res.clearCookie('avatar');
  res.redirect('/');
}

module.exports = auth