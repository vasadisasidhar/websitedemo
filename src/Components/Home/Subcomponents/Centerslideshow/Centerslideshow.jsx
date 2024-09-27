import React, { useState } from 'react';
import './Centerslideshow.css';
import Carousel from 'react-bootstrap/Carousel';

import brezza from '../Images/brezza.png';
import alto from '../Images/altoK10.png';
import celerio from '../Images/celerio.png';
import dzire from '../Images/dzire.png';
import eeco from '../Images/Eeco.png';
import ertiga from '../Images/ertiga.png';
import strong from '../Images/Strong black and red.png';
import swift from '../Images/swift.png';
import swift2 from '../Images/swift02.png';

const images = [
    { src: brezza, alt: "Brezza" },
    { src: alto, alt: "Alto K10" },
    { src: celerio, alt: "Celerio" },
    { src: dzire, alt: "Dzire" },
    { src: eeco, alt: "Eeco" },
    { src: ertiga, alt: "Ertiga" },
    { src: strong, alt: "Strong" },
    { src: swift, alt: "Swift" },
    { src: swift2, alt: "Swift 2" },
];

const Centerslideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setCurrentIndex(selectedIndex);
    };

    return (
        <div className='slidecontainer'>
            <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={image.src} alt={image.alt} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <h2 className="car-name">{images[currentIndex].alt}</h2>
        </div>
    );
}

export default Centerslideshow;
