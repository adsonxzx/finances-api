// Rota despesas
const express = require('express')
const router = express.Router()

const ExpenseMonth = require('../models/expenseMonth')
const expenseMonthController = require('../controllers/expenseMonthController')


// Read - obtem despesas de determinado mes
router.get('/expenses-month', expenseMonthController.getExpenseMonth)

// Cadastra uma despesa
router.post('/expenses-month', expenseMonthController.insertExpenseMonth)

// Atualiza uma despesa
router.patch('/expenses-month/:id', expenseMonthController.updateExpenseMonth)

// Deleta uma despesa especifica
router.delete('/expenses-month/:id', expenseMonthController.deleteExpenseMonth)

module.exports = router