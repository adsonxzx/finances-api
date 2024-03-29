// main application
const express = require('express')
const app = express()
const cors = require('../src/config/cors')
const bodyParser = require('body-parser')

require('./db/mongoose')

const port = process.env.PORT || 3333

// Rotas
const incomeRouter = require('./routes/income')
const expenseRouter = require('./routes/expense')
const goalRouter = require('./routes/goal')
const accountRouter = require('./routes/account')
const expenseMonthRouter = require('./routes/expenseMonth')
const expenseExpenseCategoryRouter = require('./routes/expenseCategory')
const userRouter = require('./routes/user')


// Middleware
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json())

app.use(cors)

app.use(
  incomeRouter, 
  expenseRouter, 
  goalRouter, 
  accountRouter, 
  expenseMonthRouter, 
  expenseExpenseCategoryRouter,
  userRouter)

app.listen(port, () => console.log(`Server on ${port}`)) 