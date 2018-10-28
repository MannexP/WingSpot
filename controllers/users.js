const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
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
    User.findById(req.params.id).then((users) => {
      res.render('users/show', {
        users: users
      })
    })
  },
  create: (req, res) => {
    res.send('Hey from user create')
  },
  edit: (req, res) => {
    res.send('Hey from user edit')
  },
  update: (req, res) => {
    res.send('Hey from user update')
  },
  delete: (req, res) => {
    res.send('Hey from user delete')
  }
}




module.exports = usersController

