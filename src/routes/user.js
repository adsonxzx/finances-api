// Rota User
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const userController = require('../controllers/userController')

// Insert - Insere novo usuario
router.post('/users', userController.insertUser)

// Read - obtem usuario
router.get('/users/me', auth, userController.getUser)

// Efetua login
router.post('/users/login', userController.login)

// Efetua logout
router.post('/users/logout', auth, userController.logout)

module.exports = router