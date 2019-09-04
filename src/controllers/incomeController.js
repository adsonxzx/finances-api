// Icome Controller
const Income = require('../models/income')

module.exports = {

  // Select - uma renda
  async getIncome(req, res) {
    const _id = req.params.id
    try {
      // busca por id
      if (_id) {
        const income = await Income.findById(_id)
        if (!income) {
          return res.send(404)
        }

        return res.send(income)
      }

      // busca todos
      const incomes = await Income.find({})
      res.send(incomes)

    } catch (e) {
      res.status(404).send(e)
    }

  },

  // Insert - insere renda
  async insertIncome(req, res) {
    const income = new Income(req.body)

    try {
      await income.save()
      res.send(income)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  // Delete - deleta uma renda
  async deleteIncome(req, res) {
    const _id = req.params.id
    try {
      const income = await Income.findByIdAndDelete(_id)
      res.send(income)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  // Update - atualiza uma renda
  async updateIncome(req, res) {
    const _id = req.params.id
    try {
      const income = await Income.findByIdAndUpdate({_id}, req.body)
      res.send(income)
    } catch (e) {
      res.status(500).send(e)
    }
  }
}