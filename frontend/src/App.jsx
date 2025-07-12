import { useState } from 'react'
import axios from 'axios'



function App() {
  const [username,Setusername] = useState('')
  const [password,Setpassword] = useState('')
  const changeUsername = (e)=>{
Setusername(e.target.value)
  }
 const changePassword = (e)=>{
Setpassword(e.target.value)
  }
  const submitForm = async (e)=>{
    e.preventDefault()
    console.log({username,password})
    try
    {const res = await axios.post('https://opulent-space-cod-4jwpx7wwv95x35rjg-5000.app.github.dev/user/sign-up', {username,password})
    console.log(res.data)
  }
  catch(err){
    console.log("Error Occured",err)
  }
    
    Setusername('')
    Setpassword('')
  }
  return (
    <>
   <div className="h-screen w-full flex flex-col justify-center items-center">
    <form className='flex flex-col gap-4 justify-center items-center' onSubmit={(e)=>submitForm(e)}>
    <input required className="border-1 border-black-900 rounded-lg placeholder: text-center" placeholder="Enter Your Name" value={username} onChange={(e)=>changeUsername(e)}></input>
     <input required className="border-1 border-black-900 rounded-lg placeholder: text-center" placeholder="Enter Your Password" value={password} onChange={(e)=>changePassword(e)}></input>
    <button className='border-1 border-black-900 rounded-lg w-1/2'>Submit</button>
    </form>
   </div>
    </>
  )
}

export default App
