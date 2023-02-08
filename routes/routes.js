const router = require('express').Router();

//Controllers
const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')

//Auth routes
router.post('/login', authController.login)

//User routes
router.post('/register', userController.create)


module.exports = router