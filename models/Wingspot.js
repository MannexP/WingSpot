const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Wingspot = new Schema({
    name: String,
    location: String,
    ambiance: String,
    review: String
})
module.exports = mongoose.model('Wingspot', Wingspot)