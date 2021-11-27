const express = require('express');
const authController = require('../controllers/authController');


const router = express.Router();

// Adding new user (sign-up route): http://localhost:3000/api/signup
router.post('/register', authController.validateRegister, authController.register);

// Route to login page:  http://localhost:3000/api/signin
router.post('/login', authController.validateLogin, authController.login);

// Route to logout http://localhost:3000/auth/signout
router.post('/logout', authController.requireJWT, authController.logout);


module.exports = router;

