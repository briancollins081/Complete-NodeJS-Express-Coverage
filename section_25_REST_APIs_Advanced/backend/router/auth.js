const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.put('/signup', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, { req }) => {
            return User.findOne({ email: value })
                .then(userDoc => {
                    if(userDoc){
                        return Promise.reject('Email address already exists');
                    }
                })
        })
        .normalizeEmail(),
    body('name')
        .trim()
        .isLength({min: 5}),
    body('password')
        .trim()
        .notEmpty()

], authController.signup);

router.post('/login', authController.login);

router.get('/status', isAuth, authController.getStatus);

router.patch('/status', isAuth, [
    body('status').trim().notEmpty()
], authController.updateStatus);

module.exports = router;