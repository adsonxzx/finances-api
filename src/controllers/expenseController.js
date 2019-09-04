// Expense Controller
const Expense = require('../models/expense')

module.exports = {

  // Read - Lista todas as despesas
  async getExpense(req, res) {
    try {
      // Obtem um gasto especifico
      if (req.params) {
        const expenses = await Expense.find(req.params)
        return res.status(201).send(expenses)
      }

      // Obtem todos os gastos
      const expenses = await Expense.find({})
      res.status(201).send(expenses)
    } catch (e) {
      res.status(404).send(e)
    }
  },

  // Cadastra uma despesa
  async insertExpense(req, res) {
    const expense = new Expense(req.body)

    try {
      await expense.save()
      res.send(expense)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  
  // Atualiza uma despesa
  async updateExpense(req, res) {
    const _id = req.params.id

    try {
      const expense = await Expense.findByIdAndUpdate({ _id }, req.body, { new: true })
      res.send(expense)
    } catch (e) {
      res.status(404).send(e)
    }
  },

  // Deleta uma despesa especifica
  async deleteExpense(req, res) {
    const _id = req.params.id

    try {
      const expense = await Expense.findByIdAndDelete(_id)
      res.send(expense)
    } catch (e) {
      res.status(500).send(e)
    }
  }
}