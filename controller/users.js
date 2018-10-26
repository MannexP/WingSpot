const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const usersController = {
    index: (req, res) => {
     res.send('Hey from user index')
      },     
      new: (req, res) => {
        res.send('Hey from user new')
      },   
      show: (req, res) => {
        res.send('Hey from user show')    
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
        res.send('Hey from user update') 
      }
}




module.exports = userscontroller

