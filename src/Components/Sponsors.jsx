import React, { useState, useEffect, useRef, useCallback } from 'react';
// Import the clean array of 22 images from your index file
import { sponsorLogos } from "../assets/images/Sponsors";

const Sponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesToShow(5);
      else if (window.innerWidth >= 768) setSlidesToShow(3);
      else setSlidesToShow(2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= sponsorLogos.length - slidesToShow ? 0 : prevIndex + 1
    );
  }, [slidesToShow]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sponsorLogos.length - slidesToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isAnimating) {
      timerRef.current = setInterval(nextSlide, 2500);
    }
    return () => clearInterval(timerRef.current);
  }, [isAnimating, nextSlide]);

  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <div id='sponsors' className="w-full bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#d4af37] tracking-tight">
            Former Sponsors
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full shadow-[0_0_10px_#d4af37]"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative flex items-center group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="z-10 p-3 rounded-full bg-[#d4af37] hover:bg-[#b8962e] text-black transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Slides Area */}
          <div className="flex-1 overflow-hidden px-2">
            <div className="flex justify-center transition-all duration-500 ease-in-out">
              {sponsorLogos
                .slice(currentIndex, currentIndex + slidesToShow)
                .map((logo, index) => (
                <div 
                  key={`${currentIndex}-${index}`}
                  className="flex items-center justify-center w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-2 lg:mx-4 
                             bg-white rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.1)] 
                             hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] 
                             hover:scale-105 transition-all duration-300 border border-[#d4af37]/30"
                >
                  <img 
                    src={logo} 
                    alt="Sponsor logo"
                    className="w-[85%] h-[85%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="z-10 p-3 rounded-full bg-[#d4af37] hover:bg-[#b8962e] text-black transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {[...Array(sponsorLogos.length - slidesToShow + 1)].map((_, idx) => (
            <button
              key={idx}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx ? 'w-8 bg-[#d4af37]' : 'w-2 bg-gray-700 hover:bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;