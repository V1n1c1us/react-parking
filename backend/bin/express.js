const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin123@cluster0-znsgd.mongodb.net/parking?retryWrites=true&w=majority",
    { useCreateIndex: true,
      useNewUrlParser: true
    }
)

module.exports = app