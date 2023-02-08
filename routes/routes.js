const router = require('express').Router();

//Controllers
const userController = require('../controllers/user.controller')

//User routes
router.post('/register', userController.create)



module.exports = router