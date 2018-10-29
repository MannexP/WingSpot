let express = require('express')
let router = express.Router()
const applicationController = require('../controllers/application')
const reviewsController = require('../controllers/reviews')
const usersController = require('../controllers/users')
const wingspotsController = require('../controllers/wingspots')
const wingsController = require('../controllers/wings')

//homepage
router.get('/', applicationController.index)

// //All users page
router.get('/users', usersController.index)
//create a user form/submit
router.get('/users/new', usersController.new)
//  new user page
router.get('/new', usersController.new)
router.post('/users', usersController.create)
//individual users page
router.get('/users/:id', usersController.show)
//update user
router.get('/users/:id/edit', usersController.edit)
router.patch('/users/:id', usersController.update)
//delete user account
router.delete('/users/:id', usersController.delete)


// //create a new wingspot
router.get('/users/:id/wingspots/new', wingspotsController.new)
router.post('/users/:id/wingspots', wingspotsController.create)
// // individual users wingspot
router.get('/:id/wingspots/:id', wingspotsController.show)
// // update a wingspot
router.get('/wingspots/:id/edit', wingspotsController.edit)
router.patch('/wingspots/:id', wingspotsController.update)
// // delete a wingspot
router.delete('/wingspots/:id', wingspotsController.delete)

// individual user wings
router.get('/users/:id/wingspot/:id/wings', wingsController.index)
//create a new wings
router.get('/users/:id/wingspot/:id/wings/new', wingsController.new)
router.post('/users/:id/wingspot/:id/wings', wingsController.create)
// // individual users wings
router.get('/users/:id/wingspot/:id/wings/:id', wingsController.show)
// // update a wings
router.get('/users/:id/wingspot/:id/wings/:id/edit', wingsController.edit)
router.put('/users/:id/wingspot/:id/wings/:id', wingsController.update)
// // delete a wings
router.delete('/users/:id/wingspot/:id/wings/:id', wingsController.delete)

// individual user review
router.get('/users/:id/wingspot/:id/wings/:id/reviews', reviewsController.index)
//create a new review
router.get('/users/:id/wingspot/:id/wings/:id/reviews/new', reviewsController.new)
router.post('/users/:id/wingspot/:id/wings/:id/reviews', reviewsController.create)
// // individual users review
router.get('/users/:id/wingspot/:id/wings/:id/reviews/:id', reviewsController.show)
// // update a review
router.get('/users/:id/wingspot/:id/wings/:id/reviews/:id/edit', reviewsController.edit)
router.put('/users/:id/wingspot/:id/wings/:id/reviews/:id', reviewsController.update)
// // delete a review
router.delete('/users/:id/wingspot/:id/wings/:id/reviews/:id', reviewsController.delete)

module.exports = router