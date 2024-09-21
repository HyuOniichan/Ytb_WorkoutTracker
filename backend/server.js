require('dotenv').config() 
const express = require('express')
const mongoose = require('mongoose')

const route = require('./routes')

// express app 
const app = express() 

// middleware
app.use(express.json())

// routes 
route(app) 

// connect to db 
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connect'))
    .catch(() => console.log('Fail'))

// listen for request 
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})




