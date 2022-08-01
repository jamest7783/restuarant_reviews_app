const express=require('express')
const PORT=process.env.PORT||3001

const app=express()


//simple tesing route
app.get('/',(req,res)=>{
    res.send("I have hit the root route!")
})

app.listen(PORT,()=>{
    console.log(`I am currently running at PORT:${PORT}`)
})