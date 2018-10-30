const Review = require('../models/Review')
const User = require('../models/User')

const Wingspot = require('../models/Wingspot')

const reviewController = {
    index: (req, res) => {
        res.send('Sup from review index')
    },
    new: (req, res) => {
        res.send('Sup from review new')
    },
    show: (req, res) => {
        res.send('Sup from review show')
    },
    create: (req, res) => {
        res.send('Sup from review create')
    },
    edit: (req, res) => {
        res.send('Sup from review edit')
    },
    update: (req, res) => {
        res.send('Sup from review update')
    },
    delete: (req, res) => {
        res.send('Sup from review delete')
    }
}
module.exports = reviewController