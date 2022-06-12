const mongoose = require('mongoose')


// AUTHOR SCHEMA

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 40,
  },
  age: {
    type: Number,
    required: true,
    min: 10,
    max: 100,
  },
})

module.exports = new mongoose.model('Author', AuthorSchema)
