// Controller User
const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {

  // Insert - Insere novo usuario
  async insertUser(req, res) {
    const user = new User(req.body)
    try {
      await user.save()
      const token = await user.genarateAuthToken()
      res.send({user, token})
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },

  // Read - obtem usuario
  async getUser(req, res) {
    req.send(req.user)
  },

  // Login
  async login(req, res) {
    try {
      console.log(req.body)
      const user = await User.findByCredentials(req.body.email, req.body.password)

      const token = await user.genarateAuthToken()
      res.send({user, token})
    } catch (e) {
      res.status(500).send(e)
    }
  },

  // Logout
  async logout(req, res) {
    try {
      req.user.tokens = req.user.tokens.filter(({token}) => token !== req.token)
      await req.user.save()
      res.send()
    } catch (e) {
      res.status(500).send()
      console.log(e)
    }
  }
}