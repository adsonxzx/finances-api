// Rota despesas
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const expenseController = require('../controllers/expenseController')

// Lista todas as despesas
router.get('/expenses', auth, expenseController.getExpense)

// Cadastra uma despesa
router.post('/expenses', auth, expenseController.insertExpense)

// Atualiza uma despesa
router.patch('/expenses/:id', auth, expenseController.updateExpense)

// Deleta uma despesa especifica
router.delete('/expenses/:id', auth, expenseController.deleteExpense)

module.exports = router