
const Account = require('../models/account')

module.exports = {

  // Read - obtem bancos
  async getAccount(req, res){
    const id = req.query.id
    try {

      // busca por id
      if(id) {
        console.log('entrou')
        const account = await Account.findById(id)
      
        if(!account) {
          return res.status(404).send()
        }
        return res.send(account)
      }

      // busca todos
      const accounts = await Account.find({})
      res.send(accounts)

    } catch(e) {
      res.status(500).send(e)
    }
  },

  // Insert - insere banco
  async insertAccount(req, res){
    const account = new Account(req.body)

    try {
      await account.save()
      res.status(201).send(account)
    } catch(e) {
      res.status(400).send(e)
    }
  },

  // Update - atualiza um conta
  async updateAccount(req, res){
    const _id = req.params.id

    try {
      const account = await Account.findByIdAndUpdate({_id}, req.body, {new: true})
      res.send(account)
    } catch(e) {
      res.status(500).send(e)
    }
  },

  // Delete - deleta um objetivo
  async deleteAccount(req, res){
    try {
      const account = await Account.findByIdAndRemove(req.params.id)
      res.send(account)
    } catch (e) {
      res.status(500).send(e)
    }
  }
}