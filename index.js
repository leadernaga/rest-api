const express = require('express')

const app = express()

const mongoose = require('mongoose')
require('dotenv').config()

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
