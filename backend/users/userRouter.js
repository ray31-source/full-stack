const express = require('express')
const userRouter = express.Router()
userRouter.post('/sign-up',(req,res)=>{
   const {username,password} = req.body
   if(!username || !password){
    console.log("User Credentials are needed");
    res.status(401).send("Unauthorized")
    
   }
   console.log("User Created");
   res.status(200).send('Successful')
   
})
module.exports = userRouter