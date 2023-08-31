import React, { useState, useEffect } from 'react';
/* import './Slider.css'; */

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchedImages = [
      '../images/img-1.png',
      '../images/img-2.png'
    ];
    setImages(fetchedImages);
  }, []);

  const renderSliderItems = () => {
    return images.map((image, index) => (
      <div className="slider-item" key={index}>
        <img src={image} alt={`Slider ${index}`} />
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
