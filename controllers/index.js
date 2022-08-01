const {Restuarant}=require('../models')

const getAllRestuarants=async (req,res)=>{
    let restuarants = await Restuarant.find({})
    res.send(restuarants)
}

const createRestuarant=async (req,res)=>{
    let foundRestuarant=await Restuarant.findById(req.params.id)
    res.send(foundRestuarant)
}

const getOneRestuarant=async (req,res)=>{
    let foundRestuarant=await Restuarant.findById(req.params.id)
    res.send(foundRestuarant)
}

module.exports={
    getAllRestuarants,
    createRestuarant,
    getOneRestuarant
}