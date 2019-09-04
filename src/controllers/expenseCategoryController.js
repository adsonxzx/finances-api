const ExpenseCategory = require('../models/expenseCategory')

module.exports = {
  // Read - ler todos as categorias de gasto
  async getExpenseCategory(req, res) {
    try {
      const categories = await ExpenseCategory.find()
      res.send(categories)
    } catch (e) {
      res.status(404).send(e)
    }
  }
}