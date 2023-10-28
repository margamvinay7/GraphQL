import React from 'react'
import { useState } from 'react'
const UserDetails = () => {
    const [userName,setUserName]=useState("");

  return (
   <div className='UserDetails'>
    <h1>Enter Your Name</h1>
    <input className='input' value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your Name' />
    <button className='button'>enter</button>
   </div>
  )
}

export default UserDetails