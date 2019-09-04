// Model Account
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema account
const schemaAccount = new Schema({
  bank: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    default: 0
  }
})

const Account = mongoose.model('Account', schemaAccount)

module.exports = Account