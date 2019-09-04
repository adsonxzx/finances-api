// Model Goal
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema gaol
const goalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  valueAccumulated: {
    type: Number,
    default: 0
  },
  valueTarget: {
    type: Number,
    required: true
  },
  valueMouth: {
    type: Number,
    default: 0

  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)