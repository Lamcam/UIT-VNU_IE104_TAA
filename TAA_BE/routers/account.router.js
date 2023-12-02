const express = require('express');
const router = express.Router();
const account = require('../controllers/account.controller')
const middlewares = require("../middlewares")

router.use('/', middlewares.authorize)

router.get('/information', account.information)

router.get('/orders', account.orders)

router.get('/favor-products', account.favorProducts)

router.get('/cart', account.cart)
router.post('/cart/add', account.addCart)
router.post('/cart/delete', account.delCart)

router.get('/order', account.order)
router.post('/orderPost', account.orderPost)

// router.post('/orderGetIdLocal',account.localGet)

module.exports = router;