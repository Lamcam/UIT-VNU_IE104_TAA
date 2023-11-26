const express = require('express');
const router = express.Router();
const product = require('../controllers/products.js');


router.get('/', product.getAll)
router.get('/detail',product.getDetail)
// router.get('/:id')

module.exports = router;