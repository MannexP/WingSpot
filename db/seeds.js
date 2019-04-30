const mongoose = require('./connection')
const Review = require('../models/Review')
const User = require('../models/User')
const Wingspot = require('../models/Wingspot')

const review1 = new Review({
    description: "These wings are awesome"

})
const review2 = new Review({
    description: "These wings are awesome"

})
const review3 = new Review({
    description: "These wings are the shiznit"

})

const madWings = new Wingspot({
    name: "Mad Wings",
    image:"https://images.unsplash.com/photo-1535902491948-06a40e45ed95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    location: "Atlanta",
    type: "Sports Bar",
    review:[review1]
})
const southCityKitchen = new Wingspot({
    name: "South City Kitchen",
    image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    location: "Atlanta",
    type: "Fine Dining",
    review:[review2, review1]
})
const wildwings = new Wingspot({
    name: "Buffalo Wild Wings",
    image:"https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/Buffalo%20Wild%20Wings%20Inc_0.jpg?itok=-kx4Kxh_",
    location: "Buckhead",
    type: "Sports Bar",
    review:[review3]
})
const crickets = new Wingspot({
    name: "Jr. Crickets",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyESytEpcPpVTNJkp9knLKkO80YWZ38qQNl9OiffodRD5sRaWgHg",
    location: "Decatur",
    type: "Sports Bar",
    review:[review1, review3]
})
const tacomac = new Wingspot({
    name: "Taco Mac",
    image:"https://webuyblack.com/blog/wp-content/uploads/2018/03/29609655-300x200.jpg",
    location: "Lindbergh",
    type: "Sports Bar",
    review:[review2, review3]
})
const spencer = new User({
    name: "Spencer",
    location: "Dallas, TX",
    image: "https://avatars2.githubusercontent.com/u/24259986?s=460&v=4",
    headline: "I like wings..I love beer",
    wingspots:[wildwings,crickets, southCityKitchen]
})

const stan= new User({
    name: "Stan",
    location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=8c0",
    headline: "I like wings...alot",
    wingspots:[tacomac,crickets, madWings]
})
const cameron = new User({
    name: "Cameron",
    location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1630&q=80",
    headline: "I like wings...right",
    wingspots:[crickets,wildwings]
})
const jennifer = new User({
    name: "Jennifer",
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    headline: "OMG I cant even without wings",
    wingspots:[crickets,wildwings,southCityKitchen, ]
})
const xavier = new User({
    name: "Xavier",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    headline: "Wings are the shiznit",
    wingspots:[crickets,tacomac,southCityKitchen, ]
})
User.deleteMany({})
    .then(() => Wingspot.deleteMany({}))
    .then(() => Review.deleteMany({}))
    .then(() => Review.insertMany([review1, review2, review3]))
    .then(() => Wingspot.insertMany([tacomac, crickets, wildwings, southCityKitchen]))
    .then(() => xavier.save())
    .then(() => jennifer.save())
    .then(() => cameron.save())
    .then(() => stan.save())
    .then(() => spencer.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())