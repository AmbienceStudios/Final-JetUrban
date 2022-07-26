import React from 'react'
import './CollectionStory.css'
import image1 from "../assets/boy3.png";
import image2 from "../assets/boy2.png";

const CollectionStory = () => {
  return (
    <div className="like">
    
 
      <div className="container-col">

    
        <div className="content">
          <div className="imageA">
            <img src={image1} alt="goldenBoy" />
          </div>
          <h1>GOLDEN BOY</h1>
          <h2>GOLDEN BOY COLLECTION</h2>
          <p>
          Golden Boy fought against being different. His personality wasn't understood 
          or appreciated by others. One day he realized he had to start his own wave & 
          there would be a tribe of his own who would accept him for who he was.  
          Strength, creativity, and introversion are his unique personality traits.
          </p>
        </div>

   
        <div className="content">
          <div className="imageA">
            <img src={image2} alt="goldenBoy" />
          </div>
          <h1>FIERCE HEART</h1>
          <h2>GOLDEN BOY COLLECTION</h2>
          <p>
          Fierce Heart grew up suffering from depression after his mom passed away 
          when he was just 5 years old. As a result, he never looked at the world the 
          same way again. Afterward, he vowed that his mother's name would live on through him. 
          (it's difficult to cope with the loss of a loved one, but we must keep their memory alive) <br/> <br/> 
          </p> 
                 </div>
                 
      </div>
    </div>
  )
}

export default CollectionStory