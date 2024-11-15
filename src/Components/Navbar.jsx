import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
const navigate= useNavigate()
  function handleLogin(){
    navigate('/login')
  }
  return (
    <div style={{ backgroundColor: "blue", position: "fixed", top: "0", left: "0", width: "100%", display: "flex", justifyContent: "space-between" }}> 
      <p>hi this is navbar</p>
      <button onClick={()=>handleLogin()}>Login</button>
    </div>
  )
}

export default Navbar
