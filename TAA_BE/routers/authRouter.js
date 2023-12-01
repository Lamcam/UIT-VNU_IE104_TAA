const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.js');


router.post('/registerPost', auth.registerPost)

router.post('/loginPost', auth.loginPost)

router.get('/logout', auth.logout)


module.exports = router;