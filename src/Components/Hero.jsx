import React from 'react';

const Hero = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-[radial-gradient(circle_at_center,#222_0%,#000_80%)]">
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute bottom-0 left-[20%] w-25 h-[150%] bg-linear-to-t from-white/10 to-transparent origin-bottom animate-sweep"></div>
        <div 
          className="absolute bottom-0 right-[20%] w-25 h-[150%] bg-linear-to-t from-white/10 to-transparent origin-bottom animate-sweep"
          style={{ animationDelay: '-2s' }}
        ></div>
      </div>

      <div className="relative z-10 opacity-0 animate-fadeIn flex flex-col items-center">
        
        <p className="text-[1rem] md:text-[1.2rem] tracking-[5px] uppercase text-[#ccc] mb-6 md:mb-10">
          Prakriti MSIT Presents
        </p>
        
        <h1 className="font-limelight text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[1.1] mb-4 bg-linear-to-br from-[#d4af37] via-[#f3e5ab] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          ENVA '26
        </h1>
        
        <p className="text-[0.9rem] md:text-[1rem] tracking-[5px] uppercase text-[#c5a000] mb-10">
          12th - 13th February
        </p>
        
        <button 
          onClick={scrollToEvents}
          className="inline-block px-10 py-4 bg-transparent border-2 border-[#c5a000] text-[#c5a000] font-extrabold uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-[#c5a000] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          Explore Events
        </button>
      </div>
    </section>
  );
};

export default Hero;