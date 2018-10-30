const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const wingspotsController = {
  // index: (req, res) => {
  //   res.send('Hey from wingspots index')
  // },
  new: (req, res) => {
    res.render('wingspots/new')
  },

  show: (req, res) => {
    Wingspot.findById(req.params.id).populate("wings").then((wingspots) => {
      res.render('wingspots/show', {
        wingspots: wingspots
      })
    })
  },
  create: (req, res) => {
    Wingspot.create({
      name: String,
      location: String,
      ambiance: String,
    }).then(wingspots => {

      res.redirect(`/wingspots/${wingspots._id}`)
    })
    // User.findById(req.params.userId).then((user)=>{
    //   Wingspot.create(req.body).then((newWingspot)=> {
    //     User.Wingspot.push(newWingspot)
    //     user.save()
    //     res.redirect(`/wingspots/${wingspots._id}`)
    //   })
    //   })
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