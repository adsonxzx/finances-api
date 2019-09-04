// Rota Account
const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accountController')

// Read - ler todas as contas
router.get('/accounts', accountController.getAccount)

// Insert - insere um objetivo
router.post('/accounts', accountController.insertAccount)

// Update - atualiza um objetovo
router.patch('/accounts/:id', accountController.updateAccount)

// Delete - deleta um objetivo
router.delete('/accounts/:id', accountController.deleteAccount)

module.exports = router