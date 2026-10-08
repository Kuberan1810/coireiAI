import React, { useState, useEffect, useRef } from 'react';
import awardImg from '../../../assets/about/award.svg';

export const AwardSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      const topSurface = document.querySelector('.about-surface-1') || document.querySelector('.about-top-surface');
      if (topSurface) {
        const rect = topSurface.getBoundingClientRect();
        // Activate fixed black screen ONLY when top surface is scrolling off screen
        setIsActive(rect.bottom <= window.innerHeight);
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsActive(rect.top <= 0 && rect.bottom >= 0);
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
      <div ref={containerRef} id="award-parallax-spacer" className="relative w-full h-[120vh] sm:h-[130vh] pointer-events-none" />

      {/* Fixed Black Screen: Only active during parallax reveal, exactly like QuoteSection */}
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000000] text-white overflow-hidden flex flex-col items-center justify-center select-none z-10 pointer-events-auto px-4 sm:px-6 lg:px-8">
          {/* Subtle ambient lighting for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-neutral-800/30 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-[1180px] w-full mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14">
              {/* Left Column: Award Photo */}
              <div className="w-full md:w-[420px] lg:w-[480px] shrink-0 flex justify-center">
                <img
                  src={awardImg}
                  alt="From Campus to Innovation"
                  className="w-full h-auto object-cover block rounded-[20px] sm:rounded-[24px] shadow-2xl select-none pointer-events-none"
                />
              </div>

              {/* Right Column: Title, Subtitle, Description */}
              <div className="flex-1 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.25]">
                  From Campus to Innovation
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[15.5px] text-white/70 font-normal mt-2 sm:mt-2.5 leading-relaxed">
                  Turning ideas into real-world technology through hands-on collaboration.
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white/85 font-normal leading-[1.72] mt-5 sm:mt-6">
                  Coirei Innovations showcased its innovative project at Paavai Engineering College, bringing technology and practical problem-solving into an academic environment. The event provided an opportunity to demonstrate our work, engage with students and faculty, and exchange ideas around emerging technologies and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AwardSection;
