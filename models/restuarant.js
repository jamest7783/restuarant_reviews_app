const { Schema } = require('mongoose')

const restuarantSchema = new Schema(
    {
    name: { type:String, require:true},
    location: {type:String, required:true},
    photo_url: {type:String, required:true}
    },
    { timestamps:true }
)

module.export =  restuarantSchema