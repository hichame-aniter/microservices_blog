const { signup } = require('../controllers/authController');

const router = require('express').Router();

router.route('/signup').get(signup)

// router.route('/signup').post()


module.exports = { router };