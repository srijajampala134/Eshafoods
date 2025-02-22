import React, { useState } from 'react'

export default function InputForm() {
    const [isSignUp,setIsSignUp]=useState(false) 
  
    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        
      }
    
  return (
    <>
    <form className='form' onSubmit={handleOnSubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input type="email" className='input' required></input>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type="password" className='input'  required></input>
            </div>
            <button type='submit'>{(isSignUp) ? "Sign Up": "Login"}</button><br></br>
            <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an account": "Create new account"}</p>
        </form>
    </>
  )
}
