// Model despesas do mes
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema 
const categorySchema = new Schema({
  nameExpense: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  value: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  }
})

// Schema expense month
const expenseMonthSchema = new Schema({
  month: {
    type: String
  },
  year: {
    type: Number,
    required: true
  },
  valueTotal: {
    type: Number,
    default: 0
  },
  categories: [categorySchema]
},{
  timestamps: true
})

const ExpenseMonth = mongoose.model('ExpenseMonth', expenseMonthSchema)

module.exports = ExpenseMonth