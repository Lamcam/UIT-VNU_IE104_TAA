const express = require('express');
const router = express.Router();
const product = require('../controllers/products.js');


router.get('/', product.getAll)
router.get('/detail',product.getDetail)
router.post('/category', product.getCate);
router.get('/search', product.getSort)
// router.get('/:id')

module.exports = router;