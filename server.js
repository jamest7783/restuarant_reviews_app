const express=require('express')
const PORT=process.env.PORT||3001

const app=express()


//simple tesing route
app.get('/',(req,res)=>{
    res.send("I have hit the root route!")
})

// MIDDLE WARE
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT,()=>{
    console.log(`I am currently running at PORT:${PORT}`)
})
 