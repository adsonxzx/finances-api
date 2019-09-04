// Model Income
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema income
const incomeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Number,
    default: 0
  }
})

const Income = mongoose.model('Income', incomeSchema)

module.exports = Income