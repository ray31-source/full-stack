const express = require('express')
const app =express()
const userRouter = require('./users/userRouter')
app.use(express.json())
app.use('/user',userRouter)
app.get('/',(req,res)=>{
    res.send("It is the Home Page")
})

module.exports = app
