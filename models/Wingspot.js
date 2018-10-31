const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Wingspot = new Schema({
    name: String,
    image: String,
    location: String,
    type: String,
    review: String
})
module.exports = mongoose.model('Wingspot', Wingspot)