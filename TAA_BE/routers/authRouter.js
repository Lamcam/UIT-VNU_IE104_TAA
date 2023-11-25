const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.js');
const unAuth = require('../controllers/unAuth.js');


router.post('/loginPost', auth.loginPost)

router.post('/registerPost', unAuth.registerPost)

router.get('/logout', auth.logout)


module.exports = router;