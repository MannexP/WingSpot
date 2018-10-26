const mongoose = require('../db/connection')

const Review = new mongoose.Schema({
    description: String
})






module.exports = mongoose.model('Review', Review)