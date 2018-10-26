const mongoose = require('../db/connection')

const User = new mongoose.Schema({
   name: String,
   location: Number,
   image: String,
   headline: String,
   wingspots: [
       {
           type: Schema.Types.ObectId,
           ref: "Wingspot"
       }
   ]

})



module.exports = mongoose.model('User', User)