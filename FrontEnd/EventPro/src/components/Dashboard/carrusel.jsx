import React, { useState, useEffect } from 'react';
import rawa from '/rawa.jpg'
import mesoneros from '/mesoneros.jpg'
import ctan from '/ctan.jpg'
import relsb from '/relsb.jpg'

const images = [
  rawa,
  mesoneros,
  ctan,
  relsb,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="relative w-full mx-auto" style={{ maxHeight: '450px', marginBottom: '20px'}}>
      <div className="overflow-hidden" style={{ maxHeight: '450px' }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`w-full  rounded-xl h-auto object-cover transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ maxHeight: '450px', width: '90%', margin: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Carousel;