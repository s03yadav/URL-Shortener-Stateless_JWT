const express = require('express');
const router = express.Router();
const {signUp, handleSignUp, login, handleLogin} = require('../controllers/user');

router.route('/signUp').get(signUp).post(handleSignUp);
router.route('/login').get(login).post(handleLogin);

module.exports = router;