const express = require('express')
const cors = require('cors')
const app =express()
const userRouter = require('./users/userRouter')
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.get('/',(req,res)=>{
    res.send("It is the Home Page")
})

module.exports = app
