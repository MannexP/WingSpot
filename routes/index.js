let express = require('express')
let router = express.Router()
const applicationController = require('../controllers/application')
const reviewsController = require('../controllers/review')
const usersController = require('../controllers/users')
const wingspotsController = require('../controllers/wingspots')


//homepage
router.get('/', applicationController.index)

// SHOWS ALL USERS
router.get('/users', usersController.index)
// CREATE NEW A USER
router.get('/new', usersController.new)
// ACTION OF POSTING TO USERS INDEX
router.post('/users', usersController.create)
//individual users page
router.get('/users/:id', usersController.show)
//UPDATE USER  CLICKED PAGE
router.get('/users/:id/edit', usersController.edit)
//UPDATE USER 
router.patch('/users/:id', usersController.update)
//delete user account
router.delete('/users/:id', usersController.delete)




router.get('/users/:usersId/wingspots/new', wingspotsController.new)
router.post('/users/:usersId/wingspots', wingspotsController.create)
router.get('/users/:usersId/wingspots/:wingspotsId', wingspotsController.show)
router.get('/users/:usersId/wingspots/:wingstopsId/edit', wingspotsController.edit)
router.patch('/wingspots/:usersId', wingspotsController.update)
router.delete('/wingspots/:usersId', wingspotsController.delete)







// 
// //UPDATE USER  CLICKED PAGE

/

// router.get('/:id/wingspots/:id/edit', wingspotsController.edit)
// router.get('/wingspots/:id/edit', wingspotsController.edit)
// //delete user account


// router.post('/users/:userId/wingspots/', wingspotsController.create)


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