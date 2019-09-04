// Rota despesas
const express = require('express')
const router = express.Router()

const expenseController = require('../controllers/expenseController')

// Lista todas as despesas
router.get('/expenses', expenseController.getExpense)

// Cadastra uma despesa
router.post('/expenses', expenseController.insertExpense)

// Atualiza uma despesa
router.patch('/expenses/:id', expenseController.updateExpense)

// Deleta uma despesa especifica
router.delete('/expenses/:id', expenseController.deleteExpense)

module.exports = router