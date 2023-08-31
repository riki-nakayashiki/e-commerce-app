import React, { useState, useEffect } from 'react';
import '../style/Slider.css';

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchedImages = [
      '/images/img-1.jpg',
      '/images/img-2.jpg'
    ];
    setImages(fetchedImages);
  }, []);

  const renderSliderItems = () => {
    return images.map((image, index) => (
      <div className="slider-item" key={index}>
        <img src={process.env.PUBLIC_URL + image} alt={`Slider ${index}`} />
      </div>
    ));
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {renderSliderItems()}
      </div>
    </div>
  );
};

export default Slider;
