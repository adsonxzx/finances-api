// Expense Month Controller

const ExpenseMonth = require('../models/expenseMonth')

module.exports = {

  // Read - obtem todas as despesas ou de determinado mes
  async getExpenseMonth(req, res){
    const {year, month} = req.query
    const id = req.params.id

    try {
      // busca apenas por ano
      if(year && !month) {
        const expenses = await ExpenseMonth.find({year}).sort({createdAt: 'asc'})
        return res.status(201).send(expenses)
      }
  
      // busca por mes e ano
      if(year && month) {
        const expenses = await ExpenseMonth.find({year, month}).sort({createdAt: 'asc'})
        return res.status(201).send(expenses)
      }

      // busca por id
      if(id) {
        const expense = await ExpenseMonth.findById(id)
        return res.status(201).send(expense)
      }

      const expense = await ExpenseMonth.find({})
      return res.status(201).send(expense)
  
    } catch (e) {
      res.status(404).send(e)
    }
  },

  // Insert - Cadastra uma despesa
  async insertExpenseMonth(req, res){
    const expense = new ExpenseMonth(req.body)

    try {
      await expense.save()
      res.send(expense)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  // Update - Atualiza uma despesa
  async updateExpenseMonth(req, res) {
    const _id = req.params.id

    try {
      const expense = await ExpenseMonth.findByIdAndUpdate({ _id }, req.body, { new: true })
      res.send(expense)
    } catch (e) {
      res.status(404).send(e)
    }
  },

  // Delete - deleta uma despesa especifica
  async deleteExpenseMonth(req, res) {
    const _id = req.params.id

    try {
      const expense = await ExpenseMonth.findByIdAndDelete(_id)
      res.send(expense)
    } catch (e) {
      res.status(500).send(e)
    }
  }
}