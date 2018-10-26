const mongoose = require('../db/connection')

const Wingspot = new mongoose.Schema({
   name: String,
   location: String,
   ambiance: String
   wings: [
       {
           type: Schema.Types.ObjectId,
           ref: 'Wing'
       }
   ]
})



module.exports = mongoose.model('Wingspot', Wingspot)