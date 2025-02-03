const express = require('express')

//controller functions
const {userSignup, userLogin} = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login', userController.userLogin)

//sign up route
router.post('/signup', userController.userSignup)

module.exports = router
