const router = require('express').Router();

//Controllers
const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')

//Middleware
const isAuth = require('../middleware/isAuth')

//Auth routes
router.post('/login', authController.login)

//User routes
router.post('/register', userController.create)
router.get('/logged/user', isAuth, userController.getLoggedUser)
router.get('/users', isAuth, userController.getAllUsers)


module.exports = router