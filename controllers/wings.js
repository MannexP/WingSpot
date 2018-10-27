const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const wingController = {
    index: (req, res) => {
        res.send('Sup from wings index')
    },
    new: (req, res) => {
        res.send('Sup from wings new')
    },
    show: (req, res) => {
        res.send('Sup from wings show')
    },
    create: (req, res) => {
        res.send('Sup from wings create')
    },
    edit: (req, res) => {
        res.send('Sup from wings edit')
    },
    update: (req, res) => {
        res.send('Sup from wings update')
    },
    delete: (req, res) => {
        res.send('Sup from wings delete')
    }
}




module.exports = wingController
