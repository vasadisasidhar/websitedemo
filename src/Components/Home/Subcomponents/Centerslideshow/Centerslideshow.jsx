import React, { useState } from 'react';
import './Centerslideshow.css';
import Carousel from 'react-bootstrap/Carousel';
import {IMAGES} from './Carsdata';


const Centerslideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setCurrentIndex(selectedIndex);
    };

    return (
        <div className='slidecontainer'>
            <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
                {IMAGES.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={image.src} alt={image.alt} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="carsDetails">

                <div className="details">
                <h2 className="car-name">{IMAGES[currentIndex].alt}</h2>
                <h3 className="car-name">{IMAGES[currentIndex].showroom}</h3>
                <h1 className="car-name">{IMAGES[currentIndex].price}</h1>
                </div>
                

                <div className='millagedetails'>
                <h2 className="car-name">{IMAGES[currentIndex].Millage}</h2>
                <h2 className="car-name">{IMAGES[currentIndex].Millage2}</h2>
                <h2 className="car-name">{IMAGES[currentIndex].Millage3}</h2>
                <h2 className="car-name">{IMAGES[currentIndex].Millage4}</h2>
                <h2 className="car-name">{IMAGES[currentIndex].Millage5}</h2>
                </div>
                
            </div>
            

        </div>
    );
}

export default Centerslideshow;
