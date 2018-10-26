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

const user1 = new User({
    name: "Spencer",
    location: "Texas",
    image: "https://avatars2.githubusercontent.com/u/24259986?s=460&v=4",
    headline: "I like wings"
})

const user2 = new User({
    name: "Stan",
    location: "Atlanta",
    image: "https://media.licdn.com/dms/image/C4E03AQGOo-7nDKQfrg/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=fG_TazpcgrC0HzG6kdNMZFhVlxCMSBRdI92QIo21-AY",
    headline: "I like wings...right"
})

const user3 = new User({
    name: "Cameron",
    location: "Atlanta",
    image: "https://media.licdn.com/dms/image/C5603AQF82uMwkiX9Ow/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=0GlQGDGui0dQpc38SkaPl0XWRdPJDelf-oMZHEYq0aM",
    headline: "I like wings...alot"
})

const wings1 = new Wing({
    style: "original",
    flavor: "buffalo",
    dip: "blue cheese"
})

const wings2 = new Wing({
    style: "baked",
    flavor: "plain",
    dip: "ranch"
})

const wings3 = new Wing({
    style: "boneless",
    flavor: "lemon pepper",
    dip: "blue cheese"
})

const wingspot1 = new Wingspot({
    name: "Taco Mac",
    location:"Lindbergh",
    ambiance: "Sports Bar"
})

const wingspot2 = new Wingspot({
    name: "Jr. Crickets",
    location:"Decatur",
    ambiance: "Sports Bar"
})

const wingspot3 = new Wingspot({
    name: "Buffalo Wild Wings",
    location:"Buckhead",
    ambiance: "Sports Bar"

})

User.remove({})
    .then(() =>Wingspot.insertMany([wingspot1,wingspot2, wingspot3]))
    .then(() =>Wingspot.save())
    .then(() =>Wing.insertMany([wing1,wing2,wing3]))
    .then(() =>Wing.save())
    .then(() =>Review.insertMany([review1,review2,review3]))
    .then(() =>Review.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())
