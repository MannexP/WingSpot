const mongoose = require('../db/connection')
const Schema =mongoose.Schema

const Wing = new Schema({
   style: String,
   flavor: String,
   dip: String,
   reviews: [
       {
        type: Schema.Types.ObjectId,
        ref: 'Review'
       }
   ]
})



module.exports = mongoose.model('Wing', Wing)