const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const wingController = {
    index: (req, res) => {
        res.send('it fucking works')
    }
}




module.exports = wingController
