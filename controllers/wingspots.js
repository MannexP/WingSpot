// const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const wingspotsController = {
  index: (req, res) => {
    res.send('Hey from wingspots index')
  },
  new: (req, res) => {
    res.send('Hey from wingspots new')
  },
  show: (req, res) => {
    res.send('Hey from wingspots show')
  },
  create: (req, res) => {
    res.send('Hey from wingspots create')
  },
  edit: (req, res) => {
    res.send('Hey from wingspots edit')
  },
  update: (req, res) => {
    res.send('Hey from wingspots update')
  },
  delete: (req, res) => {
    res.send('Hey from wingspots delete')
  }
}




module.exports = wingspotsController
