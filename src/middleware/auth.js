const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace("Bearer ", "")
    const decoded = jwt.verify(token, 'secret')

    // Encontra o usuário e verifica se o token é válido
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

    req.token = token
    req.user = user
    next()
  } catch (e) {
    res.status(401).send({ error: "É preciso fazer login para ter acesso!" })
  }
}

module.exports = auth