const mongoose = require('../db/connection')
const Schema =mongoose.Schema

const Review = new Schema({
    description: String
})






module.exports = mongoose.model('Review', Review)