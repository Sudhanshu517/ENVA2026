import React, { useRef, useEffect, useState } from 'react';

const VideoIntro = ({ onComplete }) => {
  const [isHidden, setIsHidden] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0;
    }
  }, []);

  const handleVideoEnd = () => {
    setIsHidden(true);
    // Remove from DOM after transition completes (1s)
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div 
      className={`fixed inset-0 w-full h-full bg-black z-9999 flex justify-center items-center transition-opacity duration-1000 ${
        isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
};

export default VideoIntro;