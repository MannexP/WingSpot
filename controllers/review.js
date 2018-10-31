const Review = require('../models/Review')
const User = require('../models/User')
const Wingspot = require('../models/Wingspot')

const reviewsController = {
   
    show: (req, res) => {
        res.render('reviews/show')
    }
    
}
module.exports = reviewsController