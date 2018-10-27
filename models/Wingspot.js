const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Wingspot = new Schema({
    name: String,
    location: String,
    ambiance: String,
    wings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Wing'
        }
    ]
})
module.exports = mongoose.model('Wingspot', Wingspot)