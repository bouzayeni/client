import React from 'react'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'

const Coach = () => {
  return (
    <div className="cont">
      
     <div className="box">
       <div className="imgBx">
        <img className="img"
            
src={image7}
            alt="Image One"
          />
          </div>
          <div className="content">
          <div>
          <h2>TAKE ACTION!</h2>
            <p>Be stronger than your excuses!</p>
            </div>
            </div>
            </div>
            <div className="box">
       <div className="imgBx">
        <img className="img"
            
src={image5}
            alt="Image One"
          />
          </div>
          <div className="content">
          <div>
          <h2>TAKE ACTION!</h2>
            <p>Be stronger than your excuses!</p>
            </div>
            </div>
            </div>
            <div className="box">
       <div className="imgBx">
        <img className="img"
            
src={image6}
            alt="Image One"
          />
          </div>
          <div className="content">
          <div>
          <h2>TAKE ACTION!</h2>
            <p>Be stronger than your excuses!</p>
            </div>
            </div>
            </div>
         
    </div>
  )
}

export default Coach