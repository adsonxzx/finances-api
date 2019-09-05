// Controller User
const User = require('../models/user')

module.exports = {

  // Insert - Insere novo usuario
  async insertUser(req, res) {
    const user = new User(req.body)
    try {
      await user.save()
      res.send(user)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  // Read - obtem usuario
  async getUser(req, res) {
    try {
      const users = await User.find({})
      res.send(users)
    } catch (e) {
      res.status(404).send(e)
    }
  }
}