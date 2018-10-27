const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/WingSpot')


mongoose.connection.once('open', () => {
    console.log('Mongoose has connected to MongoDB')
})



module.exports = mongoose