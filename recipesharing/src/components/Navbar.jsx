
import React, { useState } from 'react';
import Modal from './Modal'
import InputForm from './InputForm'


export default function Navbar() {
    const[isOpen,setIsOpen]=useState(false)
    const checkLogin=()=>{
        setIsOpen(true)
    }
  return (
    <>
    <header>
            <h2>Food Blog</h2>
            <ul>
              <li>Home</li>
              <li>My recipe</li>
              <li>Fav</li>
              <li onClick={checkLogin}>Login</li>
              <li >log out</li>
            </ul>
        </header>
        {(isOpen)&&<Modal onClose={()=>setIsOpen(false)}><InputForm/></Modal>}
    </>
  )
}
