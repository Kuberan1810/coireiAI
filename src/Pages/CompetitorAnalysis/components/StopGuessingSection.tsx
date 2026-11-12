import React from 'react';

export const StopGuessingSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Subtle ambient lighting at top */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[320px] opacity-40 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1060px] mx-auto text-center">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] sm:text-[42px] md:text-[50px] lg:text-[40px] leading-[1.24] sm:leading-[1.26] lg:leading-[78px] tracking-normal text-center">
          <span className="text-[#000000]">Stop guessing what your competitors are doing. </span>
          <span className="text-[#C5C5C5]">
            Let Coirei uncover their strategies, reveal market opportunities, and help you stay ahead of the competition.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default StopGuessingSection;
