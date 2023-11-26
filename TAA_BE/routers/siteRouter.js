const express = require('express');
const router = express.Router();
const site = require('../controllers/site.js');


router.get('/', site.index)

router.get('/about', site.about)

router.get('/news', site.news)

router.get('/manual/order', site.orderManual)

router.get('/manual/policy', site.policyManual)


module.exports = router;