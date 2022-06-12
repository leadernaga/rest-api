const express = require('express')
const BooksRouter = require('./routers/books.Router')

const app = express()

const mongoose = require('mongoose')
const books = require('./models/books')
require('dotenv').config()

// middleweres

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/api/books', BooksRouter)

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongodb atlas')
  })
  .catch((err) => {
    console.log(err, 'something went wrong in database connection')
  })

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log('server started on locahost http://localhost:8080')
})
