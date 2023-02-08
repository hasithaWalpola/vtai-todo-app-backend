const router = require('express').Router();

//Controllers
const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')

//Auth routes
router.post('/login', authController.login)

//User routes
router.post('/register', userController.create)
router.get('/logged/user', isAuth, userController.getLoggedUser)



module.exports = router