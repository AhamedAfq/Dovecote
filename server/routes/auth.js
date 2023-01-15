const express = require('express');

const { signup, login } = require('../controllers/auth.js');

const router = express.Router();

//Both are post routes
// for sending data from the front end to the Backend
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;