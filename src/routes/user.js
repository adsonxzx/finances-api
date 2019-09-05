// Rota User
const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

// Insert - Insere novo usuario
router.post('/users', userController.insertUser)

// Read - obtem usuario
router.get('/users', userController.getUser)

module.exports = router