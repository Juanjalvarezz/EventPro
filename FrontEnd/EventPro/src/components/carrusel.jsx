import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const images = [
  'https://via.placeholder.com/800x400/1abc9c',
  'https://via.placeholder.com/800x400/3498db',
  'https://via.placeholder.com/800x400/e74c3c',
  'https://via.placeholder.com/800x400/f39c12',
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

  const goToPrev = () => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative w-full mx-auto" style={{ maxHeight: '300px' }}>
      <div className="overflow-hidden" style={{ maxHeight: '300px' }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`w-full  rounded-xl h-auto object-cover transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ maxHeight: '300px' }}
        />
      </div>
    </div>
  );
};

export default Carousel;