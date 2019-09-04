// Controller goal
const Goal = require('../models/goal')

module.exports = {
  // Read - ler todos os objetivos
  async getGoals(req, res) {
    try {
      const goals = await Goal.find({})
      res.send(goals)
    } catch (e) {
      res.status(404).send(e)
    }
  },

  // Insert - insere um objetivo
  async insertGoals(req, res) {
    const goal = new Goal(req.body)

    try {
      await goal.save()
      res.send(goal)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  // Update - atualiza um objetivo
  async updateGoals(req, res) {
    const _id = req.params.id

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'valueAccumulated', 'valueTarget', 'valueMouth']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
      res.status(400).send({ error: "Param invalid" })
    }

    try {
      const goal = await Goal.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

      // update fail
      if (!goal) {
        return res.status(404).send()
      }

      res.send(goal)
    } catch (e) {
      // error validators
      res.status(400).send(e)
    }
  },

  // Delete - deleta um objetivo
  async deleteGoal(req, res) {
    const _id = req.params.id
    try {
      const goal = await Goal.findByIdAndDelete(_id)

      if (!goal) {
        return res.status(404).send()
      }

      res.send(goal)
    } catch (e) {
      res.status(500).send(e)
    }
  }
}