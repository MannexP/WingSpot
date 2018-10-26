require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(() => {
console.log('Connected to MongoDB')
})
.catch((e) => {
    console.log('OH NO AN ERROR EVERYONE PANIC')
    console.log(e)
  })




module.exports = mongoose
