import React, { useState } from 'react';
// import '../style/Slider.css';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img1, img2];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-btn prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-img" />
      <button className="slider-btn next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
