const mongoose = require('mongoose')
const Author = require('./Author')
// Books Schemas

const books = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  Author: Author.schema,
  genre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
})

module.exports = new mongoose.model('book', books)
