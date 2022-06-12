const express = require('express')
const Router = express.Router()

const books = require('../models/books')

Router.post('/', (req, res) => {
  var book = new books({
    name: req.body.name,
    Author: {
      name: req.body.AuthorName,
      age: req.body.Authorage,
    },
    genre: req.body.genre,
  })
  book
    .save()
    .then((book) => {
      res.send(book)
    })
    .catch((err) => {
      res.status(500).send('Book was not sended in database')
    })
})

module.exports = Router
