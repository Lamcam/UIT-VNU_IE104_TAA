const express = require('express');
const router = express.Router();
const account = require('../controllers/account')


router.get('/information', account.information)

router.get('/orders', account.orders)

router.get('/favor-products', account.favorProducts)

router.get('/cart', account.cart)


module.exports = router;