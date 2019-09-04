// Model despesas
const mongoose = require('mongoose')
const { Schema} = mongoose

// Schema expense
const expenseSchema = new Schema({
  category: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  maxValue: {
    type: Number,
    required: true
  }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense