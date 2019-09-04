// Rota Expense Category
const express = require('express')
const router = express.Router()

const {getExpenseCategory} = require('../controllers/expenseCategoryController')

// Read - ler todas as categorias
router.get('/expense-category', getExpenseCategory)

module.exports = router