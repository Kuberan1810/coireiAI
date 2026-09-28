import React, { useState, useEffect } from 'react';

export const QuoteSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      const topSurface = document.querySelector('.relative.z-20.bg-white');
      if (topSurface) {
        const rect = topSurface.getBoundingClientRect();
        // Activate fixed black screen ONLY when the top white surface is actually scrolling off screen
        setIsActive(rect.bottom <= window.innerHeight);
      } else {
        setIsActive(false);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Spacer in document flow defining the scroll distance */}
      <div className="relative w-full h-[120vh] sm:h-[130vh] pointer-events-none" />

      {/* Fixed Black Screen: Only active during quote reveal, never during Hero or top sections */}
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center select-none z-10 pointer-events-auto">
          {/* Subtle ambient lighting for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-neutral-800/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center">
          <blockquote className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold text-white tracking-tight leading-[1.22] sm:leading-[1.18]">
              “Coirei turns every business signal <br className="hidden sm:inline" />
              into an opportunity to grow”
            </h2>
          </blockquote>

          {/* Author Attribution: Right-aligned below quote */}
          <div className="w-full flex justify-end mt-8 sm:mt-10 md:mt-12 pr-2 sm:pr-6 md:pr-10">
            <span className="text-[17px] sm:text-[20px] md:text-[22px] text-[#FFFFFF] font-normal leading-[100%] tracking-normal font-['Plus_Jakarta_Sans',sans-serif]">
              -Naveenkumar (Founder &amp; CEO)
            </span>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default QuoteSection;
