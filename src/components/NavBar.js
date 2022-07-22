import React from 'react'
import './NavBar.css'
import logo from "../assets/logo2.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      
    <div className="logo">
      <img src={logo}/>
    </div>
   
    <ul className="nav-links">
    
      
      <div className="menu">
        <li><a href="#p-about" className="nav-link">ABOUT</a></li>
        <li><a href="#p-utilities" className="nav-link">UTILITIES</a></li>
        <li><a href="#p-allocations" className="nav-link">ALLOCATIONS</a></li>
        <li><a href="#p-roadmap" className="nav-link">ROAD MAP</a></li>
        <li className="discord"><a href="https://discord.gg/nnq359KR" target="_blank" >DISCORD</a></li>
        <button className="btn-wallet">Connect Wallet</button>
   

      </div>
    </ul>
  </nav>
  )
}

export default NavBar