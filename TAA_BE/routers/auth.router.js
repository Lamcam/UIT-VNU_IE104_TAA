const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');


router.post('/registerPost', auth.registerPost)

router.post('/loginPost', auth.loginPost)

router.get('/logout', auth.logout)


module.exports = router;