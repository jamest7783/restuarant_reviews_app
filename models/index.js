const mongoose=require('mongoose')
const restuarantSchema=require('./restuarant')
const reviewSchema=require('./review')

const Restuarant=mongoose.model('Restuarant',restuarantSchema)
const Review=mongoose.model('Review',reviewSchema)

module.exports = {
    Restuarant,
    Review
}