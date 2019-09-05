// Model User
const mongoose = require('mongoose')
const validator = require('validator')
const {Schema} = mongoose

// User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: [6, "Sua senha deve ter mais de 6 caractéries"]
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return validator.isEmail(v)
      },
      message: props => `${props.value} não é um email válido`
    }
  }
})

module.exports = mongoose.model('User', userSchema)