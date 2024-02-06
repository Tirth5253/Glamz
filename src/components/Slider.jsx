import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        './image (1).png',
         './image (4).png',
         './image (3).png',
         './image (1).png',
         './image (4).png',
         './image (3).png',
         './image (1).png',
         './image (4).png',
         './image (3).png',
    
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 50}vw)` }}>
                {data.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Slider;
