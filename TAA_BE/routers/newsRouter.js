const express = require('express');
const router = express.Router();
const news = require('../controllers/news')

router.get('/post', news.getDetail)

module.exports = router;