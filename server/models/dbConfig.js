// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose


// links child schema
// const linkSchema = new Schema({
//     goat: String,
//     flightClub: String,
//     stadiumGoods: String
// })
// const Link = mongoose.model('Link', linkSchema)

// wish schema
const wishSchema = new Schema({
    brand: String,
    colorway: String,
    estimatedMarketValue: Number,
    gender: String,
    image: String,
    link: [{
        goat: String,
        flightClub: String,
        stadiumGoods: String
    }],
    name: String,
    releaseDate: String,
    releaseYear: String,
    retailPrice: Number,
    silhouette: String,
    sku: String,
    story: String
})

module.exports = mongoose.model('Wish', wishSchema)