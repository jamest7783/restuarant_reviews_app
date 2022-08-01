const mongoose=require('mongoose')
const restuarantSchema=require('./restuarant')

const Restuarant=mongoose.model('Restuarant',restuarantSchema)

module.exports = {
    Restuarant
}