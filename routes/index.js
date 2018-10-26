let express = require('express')
let router = express.Router()
const applicationController = require('../controllers/application')
const reviewsController = require('../controllers/reviews')
const usersController = require('../controllers/users')
const wingspotsController = require('../controllers/wingspots')
const wingsController = require('../controllers/wings')

router.get('/', applicationController.index)









module.exports = router