const express = require('express');
const router = express.Router();
const account = require('../controllers/account')
const middlewares = require("../middlewares/index.js")

router.use('/', middlewares.authorize)

router.get('/information', account.information)

router.get('/orders', account.orders)

router.get('/favor-products', account.favorProducts)

router.get('/cart', account.cart)
router.post('/cart/add', account.cartAdd)
router.post('/cart/delete', account.cartDelete)

router.get('/order', account.order)


module.exports = router;