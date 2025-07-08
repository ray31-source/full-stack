const express = require('express')
const userRouter = express.Router()
userRouter.post('/sign-up',(req,res)=>{
   const {username,password} = req.body
   if(!username || !password){
    console.log("User Credentials are needed");
    
   }
   console.log("User Created");
   
})
module.exports = userRouter