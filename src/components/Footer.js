import React from 'react'
import './Footer.css'
import twitter from "../assets/i-twitter.png"
import instagram from "../assets/i-insta.png"
import tiktok from "../assets/i-tiktok.png"
import snapchat from "../assets/i-snap.png"
import discord from "../assets/i-discord.png"


const Footer = () => {
  return (
      
<div className="footer-container">

<div className="footer-content">
 
       
          <ul className="socials">
              <li><a href="https://discord.gg/nnq359KR" target="_blank" rel="noreferrer"><img src={discord} alt="disocrd"/></a></li>
              <li><a href="https://twitter.com/urbanwarriornft" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a></li>
              <li><a href="https://www.instagram.com/urbanwarriorsnft" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a></li>
              <li><a href="https://www.tiktok.com/@urbanwarriorsnft" target="_blank" rel="noreferrer"><img src={tiktok} alt="tiktok"/></a></li>
              <li><a href="https://t.snapchat.com/5Ps2F4We" target="_blank" rel="noreferrer"><img src={snapchat} alt="snapchat"/></a></li>
            
            

            
          </ul>
      </div>

</div>
  )
}

export default Footer