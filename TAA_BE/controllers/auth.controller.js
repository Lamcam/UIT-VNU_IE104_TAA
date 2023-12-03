const models = require('../models');
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const sanitizeHtml = require("sanitize-html");

const exceptTime = 1000 * 60 * 60 * 24 * 1; // A day
const saltRounds = 10;

function auth() { }

auth.registerPost = (req, res) => {
  const { name, phone, email, pass } = req.body;

  const cleanName = sanitizeHtml(name);
  const cleanPhone = sanitizeHtml(phone);
  const cleanEmail = sanitizeHtml(email);

  console.log("Cleaned name: ", cleanName);
  console.log("Cleaned phone: ", cleanPhone);
  console.log("Cleaned email: ", cleanEmail);

  const encryptPass = bcrypt.hashSync(pass, saltRounds);

  console.log("Encrypted pass: ", encryptPass);

  models.auth.addUser({
    name: cleanName,
    phone: cleanPhone,
    email: cleanEmail,
    pass: encryptPass
  }, (err, result) => {
    if (err) {
      if (err.code == "ER_DUP_ENTRY") {
        res.status(409).json({
          statusCode: 409,
          msg: "Duplicate phone or email"
        })
        return;
      }

      res.status(500).json({
        statusCode: 500,
        msg: "Internal server error"
      });
      return;
    }

    res.status(200).json({
      statusCode: 200,
      msg: "Register success"
    })
  })
}

auth.loginPost = (req, res) => {
  const { phone, pass } = req.body;

  const cleanPhone = sanitizeHtml(phone);

  models.auth.getUserByLogin({ phone: cleanPhone }, (err, result) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        msg: 'Internal server error'
      })
      throw err;
    }

    if (result.length == 0) {
      res.status(404).json({
        statusCode: 404,
        msg: 'Not match any account'
      })
      return;
    }

    bcrypt.compare(pass, result[0].user_pass, (err, isMatch) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          msg: 'Internal server error'
        })
        throw err;
      }

      // console.log("pass", pass);
      // console.log("user_pass", result[0].user_pass);
      // console.log("isMatch: ", isMatch);

      if (!isMatch) {
        res.status(401).json({
          statusCode: 401,
          msg: 'Wrong password'
        })
        return;
      }

      res.cookie('authenticated', 'true', { maxAge: exceptTime });
      res.cookie('id', result[0].user_id, { maxAge: exceptTime });
      res.cookie('name', result[0].user_name, { maxAge: exceptTime });
      res.cookie('avatar', result[0].user_avatar, { maxAge: exceptTime });
      res.cookie('cart_length', result[0].count_cart, { maxAge: exceptTime })
      res.status(200).json({
        statusCode: 200,
        msg: 'Login success',
      });
    });
  });
}

auth.logout = (req, res) => {
  res.clearCookie('authenticated');
  res.clearCookie('id');
  res.clearCookie('name');
  res.clearCookie('avatar');
  res.status(200).json({
    statusCode: 200,
    msg: 'Logout success'
  });
}

module.exports = auth