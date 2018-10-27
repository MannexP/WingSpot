const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const reviewsController = {
    index: (req, res) => {
        res.send('Sup from reviews index')
    },
    new: (req, res) => {
        res.send('Sup from reviews new')
    },
    show: (req, res) => {
        res.send('Sup from reviews show')
    },
    create: (req, res) => {
        res.send('Sup from reviews create')
    },
    edit: (req, res) => {
        res.send('Sup from reviews edit')
    },
    update: (req, res) => {
        res.send('Sup from reviews update')
    },
    delete: (req, res) => {
        res.send('Sup from reviews delete')
    }
}
module.exports = reviewsController