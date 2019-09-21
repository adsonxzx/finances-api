// Model User
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
  },
  tokens: [
    {
      token: {
        type:String,
        required:true
      }
    }
  ]
})

// Gera token
userSchema.methods.genarateAuthToken = async function() {
  const user = this
  const token = jwt.sign({_id: user._id.toString()}, 'secret')
  user.tokens = user.tokens.concat({token})
  await user.save()
  
  return token
}

// Verifica se o usuário se encontra no banco
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({email})

  // Verifica se o usuário tem email cadastrado
  if(!user) {
    throw new Error('Email não cadastrado')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  
  // Usuario ou senha incoreto
  if(!isMatch) {
    throw new Error('Usuário ou senha incorreto')
  }

  return user
}

// Faz o hash da senha antes de salvar no banco
userSchema.pre('save', async function(next){
  const user = this

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User