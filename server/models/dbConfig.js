// require mongoose
const mongoose= require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose

// wishlist schema

const linkSchema = new Schema({
    goat: String,
    flightClub: String,
    stadiumGoods: String
})

const imageSchema = new Schema({
    360: Array,
    original: String,
    small: String,
    thumbnail: String
})

const wishSchema = new Schema({
    brand: String,
    colorway: String,
    estimatedMarketValue: Number,
    gender: String,
    image: { type: imageSchema },
    links: { type: linkSchema },
    name: String,
    releaseDate: String,
    releaseYear: String,
    retailPrice: Number,
    silhouette: String,
    sku: String,
    story: String 
})

module.exports = mongoose.model('Wish', wishSchema)