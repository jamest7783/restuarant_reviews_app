const express=require('express')
const PORT=process.env.PORT||3001
const db = require('./db')

const app=express()
const {Restuarant}=require('./models')
 

// MIDDLE WARE
app.use(express.static(`${__dirname}/client/build`))

// ROUTES
app.get('/restuarants', async (req,res)=>{
    const restuarants = await Restuarant.find({})
    res.send(restuarants)
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT,()=>{
    console.log(`I am currently running at PORT:${PORT}`)
})
 