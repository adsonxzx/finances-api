// Model expense category
const mongoose = require('mongoose')
const {Schema} = mongoose

// Schema
const expenseCategorySchema = new Schema({
  expenseCategory: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
  }
})

const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema)

module.exports = ExpenseCategory