// Rotas Income
const express = require('express')
const router = express.Router()

const IncomeControoler = require('../controllers/incomeController')

// Select - uma renda
router.get('/incomes/', IncomeControoler.getIncome)

// Insert - insere renda
router.post('/incomes', IncomeControoler.insertIncome)

// deleta uma renda
router.delete('/incomes/:id', IncomeControoler.deleteIncome)

// atualiza uma renda
router.patch('/incomes/:id', IncomeControoler.updateIncome)

module.exports = router