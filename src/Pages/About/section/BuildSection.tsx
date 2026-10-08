import React, { useRef, useState, useEffect } from 'react';

export const BuildSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [maxOffset, setMaxOffset] = useState(60);

  useEffect(() => {
    let ticking = false;

    const updateMetrics = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMaxOffset(20);
      } else if (w < 1024) {
        setMaxOffset(45);
      } else {
        setMaxOffset(80);
      }

      const surface2 = document.querySelector('.about-surface-2');
      if (surface2) {
        const rect = surface2.getBoundingClientRect();
        // Activate fixed black screen when surface 2 scrolls off screen
        setIsActive(rect.bottom <= window.innerHeight);
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsActive(rect.top <= 0 && rect.bottom >= 0);
      }

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const totalDistance = rect.height;
        const currentDistance = -rect.top;
        const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
        setScrollProgress(progress);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateMetrics();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateMetrics();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Smooth responsive horizontal translation offsets
  const line1Offset = (0.5 - scrollProgress) * (maxOffset * 2.5);
  const line2Offset = (scrollProgress - 0.5) * (maxOffset * 2.5);

  return (
    <>
      {/* Spacer in document flow defining the scroll distance */}
      <div ref={containerRef} id="build-parallax-spacer" className="relative w-full h-[120vh] sm:h-[130vh] pointer-events-none" />

      {/* Fixed Black Screen: Only active during parallax reveal, matching AwardSection & QuoteSection */}
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden select-none z-10 pointer-events-auto px-4 sm:px-6 md:px-8">
          {/* Subtle ambient lighting for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-neutral-800/20 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Kinetic Typography Container - Centered Vertically and Horizontally */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-1 sm:gap-2">
            {/* Line 1: Solid White Text (Moves Right to Left on Scroll) */}
            <div
              className="w-full flex justify-center items-center transition-transform duration-75 ease-out will-change-transform"
              style={{
                transform: `translate3d(${line1Offset}px, 0, 0)`,
              }}
            >
              <h2 className="text-[clamp(1.75rem,7.2vw,8rem)] font-extrabold uppercase text-[#FFFFFF] leading-[120%] tracking-[0px] whitespace-nowrap select-none text-center">
                BUILD WHAT’S NEXT
              </h2>
            </div>

            {/* Line 2: Outlined Stroke Text (Moves Left to Right on Scroll) */}
            <div
              className="w-full flex justify-center items-center transition-transform duration-75 ease-out will-change-transform"
              style={{
                transform: `translate3d(${line2Offset}px, 0, 0)`,
              }}
            >
              <h2 className="text-[clamp(1.75rem,7.2vw,8rem)] font-extrabold uppercase text-[#000000] [-webkit-text-stroke:1.5px_#ffffff] sm:[-webkit-text-stroke:2px_#ffffff] lg:[-webkit-text-stroke:3px_#ffffff] leading-[120%] tracking-[0px] whitespace-nowrap select-none text-center font-inter">
                BUILD WHAT’S NEXT
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuildSection;
