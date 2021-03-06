const Review = require('../models/Review')
const User = require('../models/User')

const Wingspot = require('../models/Wingspot')

const usersController = {
  index: (req, res) => {
    User.find().then((users) => {
      res.render('users/index', {
        users: users
      })
    })
  },
  new: (req, res) => {
    res.render('users/new')
  },
  show: (req, res) => {
    User.findById(req.params.id).populate("wingspots").then((user) => {
      res.render('users/show', {
        user: user,
        wingspots: user.wingspots,
      })
    })
  },
  create: (req, res) => {
    User.create({
      name: req.body.name,
      location:req.body.location,
      image:req.body.image,
      headline:req.body.headline
    }).then(users => {

      res.redirect(`/users/${users._id}`)
    })
  },
  edit: (req, res) => {
    User.findById(req.params.id).then(users => {
      res.render('users/edit', { users: users })
    })
  },
  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
      res.redirect(`/users/${updatedUser._id}`)
    })
  },
  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/users')
    })
  }
}

module.exports = usersController