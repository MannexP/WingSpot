let express = require('express')
let router = express.Router()
const applicationController = require('../controllers/application')
// const reviewsController = require('../controllers/reviews')
const usersController = require('../controllers/users')
const wingspotsController = require('../controllers/wingspots')
// const wingsController = require('../controllers/wings')

//homepage
router.get('/', applicationController.index)

// //All users page
router.get('/users', usersController.index)
//create a user form/submit
router.get('/users/new', usersController.new)
router.post('/users', usersController.create)
//individual users page
router.get('/users/:id', usersController.show)
//update user
router.get('/users/:id/edit', usersController.edit)
router.put('/users/:id', usersController.update)
//delete user account
router.delete('/users/:id', usersController.delete)


// individual user wingspots
router.get('/users/:id/wingspot', wingspotsController.index)
// //create a new wingspot
router.get('/users/:id/wingspot/new', wingspotsController.new)
router.post('/users/:id/wingspots', wingspotsController.create)
// // individual users wingspots
router.get('/users/:id/wingspot/:id', wingspotsController.show)
// // update a wingspot
router.get('/users/:id/wingspot/:id/edit', wingspotsController.edit)
router.put('/users/:id/wingspot/:id',wingspotsController.update)
// // delete a wingspot
router.delete('/users/:id/wingspot/:id', wingspotsController.delete)










module.exports = router