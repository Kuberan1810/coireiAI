import React, { useState, useEffect, useRef } from 'react';

export const AdPerformanceParallax: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Active when the parallax spacer is near or in the viewport
      // Starts as the top surface begins scrolling off, stays active until bottom surface covers it
      const active = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsActive(active);
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
    <div ref={containerRef} className="relative w-full">
      {/* Spacer in document flow defining the parallax scroll length */}
      <div className="w-full h-[120vh] sm:h-[130vh] pointer-events-none" />

      {/* Fixed Black Screen: Revealed as the top surface scrolls off */}
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center select-none z-10 pointer-events-auto">
          {/* Subtle ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-neutral-900/50 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-6 sm:px-8 md:px-12 text-center">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-normal leading-[1.4] sm:leading-[1.38] tracking-tight text-white max-w-4xl mx-auto">
              Track your advertising performance in real time, identify what’s working, and optimize your ad spend to maximize reach, conversions, and ROI.
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdPerformanceParallax;
