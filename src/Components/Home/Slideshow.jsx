import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Slideshow.css";
import img1 from './Images/001.png'
import img2 from './Images/002.png'
import img3 from './Images/003.png'


const Slideshow = () => {
  return (
        <div className="slideShowContainer">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide"/>
            </Carousel.Item>
      
            <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide"/>
            </Carousel.Item>
      
            <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide"/>
            </Carousel.Item>
          </Carousel>
        </div>
  )
}

export default Slideshow
