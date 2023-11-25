// const express = require('express');
const models = require('../models')

function account() { }

account.information = (req, res) => {
  const { user } = req.cookies;

  models.account.getInformation({ user }, (err, result) => {
    if (err) throw err;

    // if (result.length == 0) {
    //   res.status(404).json({
    //     statusCode: 404,
    //     msg: 'Not match any account'
    //   })
    // } else {
    //   res.status(200).json({
    //     statusCode: 200,
    //     msg: 'Found data account',
    //     data: result[0]
    //   })
    // }
    res.status(200).render('/pages/account/infomation',{
    // res.status(200).json({
      statusCode: 200,
      msg: 'Found data account',
      data: result[0]
    })
  })
}

account.orders = (req, res) => {
  const { user } = req.cookies;

  models.account.getOrders({ user }, (err, result) => {
    if (err) throw err;

    // if (result.length == 0) {
    //   res.status(404).json({
    //     statusCode: 404,
    //     msg: 'Not match any order'
    //   })
    // } else {
    //   res.status(200).json({
    //     statusCode: 200,
    //     msg: 'Found data order',
    //     data: result
    //   })
    // }
    res.status(200).render('/pages/account/orders',{
    // res.status(200).json({
      statusCode: 200,
      msg: 'Found data order',
      data: result
    })
  })
}

account.favorProducts = (req, res) => {
  const { user } = req.cookies;

  models.account.getFavorProducts({ user }, (err, result) => {
    if (err) throw err;

    // if (result.length == 0) {
    //   res.status(404).json({
    //     statusCode: 404,
    //     msg: 'Not match any product'
    //   })
    // } else {
    //   res.status(200).json({
    //     statusCode: 200,
    //     msg: 'Found data product',
    //     data: result
    //   })
    // }

    res.status(200).render('/pages/account/favor-products',{
    // res.status(200).json({
      statusCode: 200,
      msg: 'Found data product',
      data: result
    })
  })
}

account.cart = (req, res) => {
  const { user } = req.cookies;

  models.account.getCart({ user }, (err, result) => {
    if (err) throw err;

    // if (result.length == 0) {
    //   res.status(404).json({
    //     statusCode: 404,
    //     msg: 'Not match any product'
    //   })
    // } else {
    //   res.status(200).json({
    //     statusCode: 200,
    //     msg: 'Found data product',
    //     data: result
    //   })
    // }
    res.status(200).render('/pages/account/cart',{
    // res.status(200).json({
      statusCode: 200,
      msg: 'Found data product',
      data: result
    })
  })
}

module.exports = account