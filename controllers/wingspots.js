const Review = require('../models/Review')
const User = require('../models/User')
const Wingspot = require('../models/Wingspot')

const wingspotsController = {
  new: (req, res) => { 
    User.findById(req.params.usersId).then(user =>{
      res.render('wingspots/new',
        {
          user: user
        }
      )
    })
  },
  show: (req, res) => {
    Wingspot.findById(req.params.wingspotsId).then((wingspots) => {
      res.render('wingspots/show', {
        wingspots: wingspots,
        userId: req.params.id
      })
    })
  },
  create: (req, res) => {
    User.findById(req.params.usersId).populate('wingspots')
    .then(user =>{
      Wingspot.create(req.body).then(newWingspot=> {
        user.wingspots.push(newWingspot)
        user.save()
        res.redirect(`/users/${req.params.usersId}/wingspots/${newWingspot._id}`)
      })
      })
  },
  edit: (req, res) => {
    Wingspot.findById(req.params.id).then(wingspots => {
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