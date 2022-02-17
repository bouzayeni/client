import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../pages/pages.css";
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image8 from '../images/image8.png'
import BMI from './BMI'
import Coach from './Coach'
import Planning from './Planning'
import Carousel from 'react-bootstrap/Carousel';
  
export default function Home() {
  return (
    <div className='all'> 
    <div className='mal' /*style={{ display: 'block', width: 700, padding: 30 }}*/>
      
      <Carousel className="carousel">
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src={image1}
            alt="Image One"
          />
          <Carousel.Caption>
            <h2>TAKE ACTION!</h2>
            <p>Be stronger than your excuses!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src={image8}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>NO PAIN, NO GAIN</h2>
            <p>If your mind is motivated, your body will follow!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src={image2}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>DON'T DREAM ABOUT IT</h2>
            <p>Do it !</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src={image3}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>THE ONLY LIMIT IS YOURSELF</h2>
            <p>Ready to challenge your limits?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src={image4}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>ONE DAY OR DAY 1?</h2>
            <p>You choose !</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <br />
      <div className='BMI-mal'>
        <BMI/>
      </div>
      <br/>

      <div className='Coach-mal'>
        <Coach/>
      </div>
      <br/>

      <div className='Planning-mal'>
        <Planning/>
      </div>
      
    </div>

    
  
  );
}
