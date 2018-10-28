const mongoose = require('./connection')
const Review = require('../models/Review')
const User = require('../models/User')
const Wing = require('../models/Wing')
const Wingspot = require('../models/Wingspot')

const review1 = new Review({
    review: "These wings are awesome"

})
const review2 = new Review({
    review: "These wings are awesome"

})
const review3 = new Review({
    review: "These wings are the shiznit"

})
const original = new Wing({
    style: "original",
    flavor: "buffalo",
    dip: "blue cheese",
    reviews:[review1,review2]
})
const baked = new Wing({
    style: "baked",
    flavor: "plain",
    dip: "ranch",
    reviews:[review1,review3]
})
const boneless = new Wing({
    style: "boneless",
    flavor: "lemon pepper",
    dip: "blue cheese",
    reviews:[review3,review2]
})
const wildwings = new Wingspot({
    name: "Buffalo Wild Wings",
    location: "Buckhead",
    ambiance: "Sports Bar",
    wings:[original,baked,boneless]
})
const crickets = new Wingspot({
    name: "Jr. Crickets",
    location: "Decatur",
    ambiance: "Sports Bar",
    wings:[baked,boneless]
})
const tacomac = new Wingspot({
    name: "Taco Mac",
    location: "Lindbergh",
    ambiance: "Sports Bar",
    wings:[original,boneless]
})
const spencer = new User({
    name: "Spencer",
    location: "Texas",
    image: "https://avatars2.githubusercontent.com/u/24259986?s=460&v=4",
    headline: "I like wings..I love beer",
    wingspots:[wildwings,crickets]
})

const stan= new User({
    name: "Stan",
    location: "Atlanta",
    image: "https://media.licdn.com/dms/image/C4E03AQGOo-7nDKQfrg/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=fG_TazpcgrC0HzG6kdNMZFhVlxCMSBRdI92QIo21-AY",
    headline: "I like wings...alot",
    wingspots:[tacomac,crickets]
})
const cameron = new User({
    name: "Cameron",
    location: "Atlanta",
    image: "https://media.licdn.com/dms/image/C5603AQF82uMwkiX9Ow/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=0GlQGDGui0dQpc38SkaPl0XWRdPJDelf-oMZHEYq0aM",
    headline: "I like wings...right",
    wingspots:[crickets,wildwings]
})
User.deleteMany({})
    .then(() => Wingspot.deleteMany({}))
    .then(() => Wing.deleteMany({}))
    .then(() => Review.deleteMany({}))
    .then(() => Review.insertMany([review1, review2, review3]))
    .then(() => Wing.insertMany([original,baked, boneless]))
    .then(() => Wingspot.insertMany([tacomac, crickets, wildwings]))
    .then(() => cameron.save())
    .then(() => stan.save())
    .then(() => spencer.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())