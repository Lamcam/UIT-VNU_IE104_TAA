// const express = require('express');
const models = require('../models')

const index = require('./index')

function account() { }

account.information = (req, res) => {
  const { user } = req.cookies;

  // models.account.getInformation({ user }, (err, result) => {
  //   if (err) throw err;

  //   // if (result.length == 0) {
  //   //   res.status(404).json({
  //   //     statusCode: 404,
  //   //     msg: 'Not match any account'
  //   //   })
  //   // } else {
  //   //   res.status(200).json({
  //   //     statusCode: 200,
  //   //     msg: 'Found data account',
  //   //     data: result[0]
  //   //   })
  //   // }
  //   res.status(200).render('pages/account/infomation', {
  //     // res.status(200).json({
  //     statusCode: 200,
  //     msg: 'Found data account',
  //     data: result[0]
  //   })
  // })
  res.status(200).render('pages/account/index')
}

account.orders = (req, res) => {
  const { user } = req.cookies;

  // models.account.getOrders({ user }, (err, result) => {
  //   if (err) throw err;

  //   // if (result.length == 0) {
  //   //   res.status(404).json({
  //   //     statusCode: 404,
  //   //     msg: 'Not match any order'
  //   //   })
  //   // } else {
  //   //   res.status(200).json({
  //   //     statusCode: 200,
  //   //     msg: 'Found data order',
  //   //     data: result
  //   //   })
  //   // }
  //   res.status(200).render('pages/account/orders', {
  //     // res.status(200).json({
  //     statusCode: 200,
  //     msg: 'Found data order',
  //     data: result
  //   })
  // })

  res.status(200).render('pages/account/index')
}

account.favorProducts = (req, res) => {
  const { user } = req.cookies;

  // models.account.getFavorProducts({ user }, (err, result) => {
  //   if (err) throw err;

  //   // if (result.length == 0) {
  //   //   res.status(404).json({
  //   //     statusCode: 404,
  //   //     msg: 'Not match any product'
  //   //   })
  //   // } else {
  //   //   res.status(200).json({
  //   //     statusCode: 200,
  //   //     msg: 'Found data product',
  //   //     data: result
  //   //   })
  //   // }

  //   res.status(200).render('pages/account/favor-products',{
  //   // res.status(200).json({
  //     statusCode: 200,
  //     msg: 'Found data product',
  //     data: result
  //   })
  // })

  res.status(200).render('pages/account/index')
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


  res.status(200).render('pages/account/order')
}

module.exports = account