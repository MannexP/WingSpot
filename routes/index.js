let express = require('express')
let router = express.Router()
const applicationController = require('../controllers/application')
const reviewsController = require('../controllers/reviews')
const usersController = require('../controllers/users')
const wingspotsController = require('../controllers/wingspots')
const wingsController = require('../controllers/wings')

router.get('/', applicationController.index)

router.get('/', usersController.index)
router.get('/new', usersController.new)
router.post('/', usersController.create)
router.get('/:id', usersController.show)
router.get('/:id/edit', usersController.edit)
router.put('/:id',usersController.update)
router.delete('/:id', usersController.destroy)











module.exports = router