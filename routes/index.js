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
router.get('/users/:usersId/wingspots/:wingspotsId/edit', wingspotsController.edit)
router.patch('/users/:usersId/wingspots/:wingspotsId', wingspotsController.update)
router.delete('/users/:usersId/wingspots/:wingspotsId', wingspotsController.delete)



router.get('/users/:id/wingspots/:wingspotsId/reviews', reviewsController.show)


module.exports = router