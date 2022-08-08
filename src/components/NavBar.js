import React from 'react'
import './NavBar.css'
import logo from "../assets/logo2.png";

const NavBar = () => {
  return (
    
   
    <nav className="navbar">
        
      <img id="logo" src={logo} alt='logo' />
    
      {/* <button className="btn-wallet">Connect Wallet</button> */} 

    <ul className="nav-links">
    
      
      <div className="menu">
        <li><a href="#p-collection" className="nav-link">ABOUT</a></li>
        <li><a href="#p-ut" className="nav-link">UTILITIES</a></li>
        <li><a href="#p-all" className="nav-link">ALLOCATIONS</a></li>
        <li><a href="#p-roadmap" className="nav-link">ROAD MAP</a></li>
        <li className="discord"><a href="https://discord.gg/nnq359KR" target="_blank" rel="noreferrer"  >DISCORD</a></li>
        
   

      </div>
    </ul>
  </nav>
  )
}

export default NavBar