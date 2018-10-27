const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    location: String,
    image: String,
    headline: String,
    wingspots: [
        {
            type: Schema.Types.ObjectId,
            ref: "Wingspot"
        }
    ]

})
module.exports = mongoose.model('User', User)