let express = require('express')
let router = express.Router()
const applicationController = require('../controllers/application')
const reviewsController = require('../controllers/reviews')
const usersController = require('../controllers/users')
const wingspotsController = require('../controllers/wingspots')
const wingsController = require('../controllers/wings')

//homepage
router.get('/', applicationController.index)

// SHOWS ALL USERS
router.get('/users', usersController.index)

//individual users page
router.get('/users/:id', usersController.show)

//UPDATE USER 
router.patch('/users/:id', usersController.update)

//UPDATE USER  CLICKED PAGE
router.get('/users/:id/edit', usersController.edit)

// CREATE NEW A USER
router.get('/new', usersController.new)
// ACTION OF POSTING TO USERS INDEX
router.post('/users', usersController.create)

//create a user form/submit
// router.get('/users/new', usersController.new)





//delete user account
router.delete('/users/:id', usersController.delete)


// //create a new wingspot
router.get('users/:id/wingspots/new', wingspotsController.show)
router.get('wingspots/new', wingspotsController.new)
router.post('/users/:id/wingspots', wingspotsController.create)
// // individual users wingspot
router.get('/:id/wingspots/:id', wingspotsController.show)
// // update a wingspot
router.get('/:id/wingspots/:id/edit', wingspotsController.edit)
router.get('/wingspots/:id', wingspotsController.show)
router.patch('/wingspots/:id', wingspotsController.update)
router.post('/wingspots/:id', usersController.create)
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