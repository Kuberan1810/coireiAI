import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-24 sm:py-32 md:py-40 overflow-hidden flex flex-col items-center justify-center select-none">
      {/* Subtle ambient lighting for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neutral-900/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center">
        {/* Quote Block */}
        <ScrollReveal variant="fade-up" duration={800} distance={28} className="w-full">
          <blockquote className="w-full text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-semibold text-white tracking-tight leading-[1.28] sm:leading-[1.25]">
              “Coirei turns every business signal <br className="hidden sm:inline" />
              into an opportunity to grow”
            </h2>
          </blockquote>

          {/* Author Attribution: Right-aligned below quote */}
          <div className="w-full flex justify-end mt-6 sm:mt-8 md:mt-10 pr-2 sm:pr-6 md:pr-10">
            <span className="text-[12px] sm:text-[13px] md:text-[14px] text-neutral-400 font-normal tracking-wide">
              -Naveenkumar (Founder &amp; CEO)
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuoteSection;
