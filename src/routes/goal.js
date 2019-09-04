// Rota goal
const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')

// Read - ler todos os objetivos
router.get('/goals', goalController.getGoals) 

// Insert - insere um objetivo
router.post('/goals', goalController.insertGoals)

// Update - atualiza um objetivo
router.patch('/goals/:id', goalController.updateGoals)

// Delete - deleta um objetivo
router.delete('/goals/:id', goalController.deleteGoal)

module.exports = router