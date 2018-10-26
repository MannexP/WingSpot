const mongoose = require('../db/connection')

const Wing = new mongoose.Schema({
   style: String,
   flavor: String,
   dip: String
   reviews: [
       {
        type: Schema.Types.ObjectId,
        ref: 'Review'
       }
   ]
})



module.exports = mongoose.model('Wing', Wing)