// const express = require('express');
const models = require('../models')
const cookieParser = require('cookie-parser');
const index = require('./index')

function account() { }

account.information = (req, res) => {
  const { id } = req.cookies;

  res.status(200).render('pages/account/index', { data: 0 })
}

account.orders = (req, res) => {
  const { id } = req.cookies;

  res.status(200).render('pages/account/index', { data: 1 })
}

account.favorProducts = (req, res) => {
  const { id } = req.cookies;

  res.status(200).render('pages/account/index', { data: 2 })
}

account.cart = (req, res) => {
  const { id } = req.cookies;

  models.account.getCart({ id }, (err, result) => {
    if (err) throw err;

    result = result.map(item => item.prod_id);

    models.product.getByIds({ ids: result }, (err, result) => {
      if (err) throw err;

      res.status(200).render('pages/account/cart', {
        // res.status(200).json({
        statusCode: 200,
        msg: 'Found data product',
        data: index.groupProducts(result)
      })
    })
  })
}

account.cartAdd = (req, res) => {
  const { id } = req.cookies;
  const { prodId } = req.body;

  models.account.addCart({ id, prodId }, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        // Handle duplicate entry error
        res.json({
          statusCode: 409,
          error: 'Conflict',
          message: 'The product is already in the cart.'
        });
      } else {
        // Handle other errors
        res.json({
          statusCode: 500,
          error: 'Internal Server Error',
          message: 'An error occurred while adding the product to the cart.'
        });
      }
    } else {
      res.json({
        statusCode: 200,
        msg: 'Add success'
      });
    }
  });
};

account.cartDelete = (req, res) => {
  const { id } = req.cookies;
  const { prodId } = req.body;

  models.account.deleteCart({ id, prodId }, (err, result) => {
    if (err) throw err;

    res.status(200).json({
      statusCode: 200,
      msg: 'Delete success'
    })
  })
}

account.order = (req, res) => {
  const { user } = req.cookies;
  const prodIdsOrder = req.cookies['prodIds--order'];
  let proIDs;
  proIDs = prodIdsOrder.split(",")
  models.product.getByArrId(proIDs,(err,result)=>{

    if(err) throw err;
    const data =  index.groupProducts(result);
    res.status(200).render('pages/account/order', {data: data});
  
  })
  
}

module.exports = account