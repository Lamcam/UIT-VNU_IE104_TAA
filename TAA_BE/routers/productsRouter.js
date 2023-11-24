const express = require('express');
const router = express.Router();
const product = require('../controllers/product.js');


router.get('/', product.getAll)


module.exports = router;