// estabelece conexao com o banco
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/finances-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

module.exports = mongoose