import React, { useRef, useState, useEffect } from 'react';

export const BuildSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [maxOffset, setMaxOffset] = useState(60);

  useEffect(() => {
    let ticking = false;

    const updateMetrics = () => {
      const w = window.innerWidth;
      // Proportional offset calculation so text remains visible and responsive across all screens
      if (w < 640) {
        setMaxOffset(20);
      } else if (w < 1024) {
        setMaxOffset(45);
      } else {
        setMaxOffset(80);
      }

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalDistance = windowHeight + rect.height;
        const currentDistance = windowHeight - rect.top;
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
  // Line 1 moves from right to left as you scroll down
  const line1Offset = (0.5 - scrollProgress) * (maxOffset * 2);
  // Line 2 moves from left to right as you scroll down
  const line2Offset = (scrollProgress - 0.5) * (maxOffset * 2);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden select-none px-4 sm:px-6 md:px-8 "
    >
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
    </section>
  );
};

export default BuildSection;
