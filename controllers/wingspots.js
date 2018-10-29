const Review = require('../models/Review')
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
    Wingspot.findById(req.params.id).populate("wings").then((wingspots) => {
      res.render('wingspots/show', {
        wingspots: wingspots
      })
    })
  },
  create: (req, res) => {
    res.send('Hey from wingspots create')
  },
  edit: (req, res) => {
    Wingspot.findById(req.params.id).then(uwingspots => {
      res.render('wingspots/edit', { wingspots: wingspots })
    })
  },
  update: (req, res) => {
    Wingspot.findByIdAndUpdate(req.params.id, req.body).then((updatedWingspot) => {
      res.redirect(`/wingspots/${updatedWingspot._id}`)
    })
  },
  delete: (req, res) => {
    Wingspot.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/')
    })
  }
}


module.exports = wingspotsController