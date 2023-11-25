const express = require('express');
const router = express.Router();
const product = require('../controllers/products.js');


router.get('/', product.getAll)


module.exports = router;