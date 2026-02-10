import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Events', 'Sponsors', 'Contact'];

  return (
    <nav className="fixed top-0 w-full px-6 md:px-10 py-5 flex justify-between items-center bg-black/90 backdrop-blur-md z-100 border-b border-[#333]">
      <div className="font-limelight text-[1.5rem] md:text-[1.8rem] text-[#c5a000] tracking-[2px]">
        <a href="/">ENVA '26</a>
      </div>
      <div className="hidden md:flex gap-8">
        {navLinks.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="no-underline text-white text-[0.9rem] font-semibold uppercase tracking-[1px] transition-colors duration-300 hover:text-[#c5a000]"
          >
            {item}
          </a>
        ))}
      </div>
      
      <button 
        className="md:hidden text-white focus:outline-none cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#c5a000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <div 
        className={`absolute top-full left-0 w-full bg-black/95 border-b border-[#333] backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white text-[1.1rem] font-semibold uppercase tracking-[2px] hover:text-[#c5a000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;