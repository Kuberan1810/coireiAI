import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="GlobalPadding relative w-full overflow-hidden bg-white flex flex-col items-center justify-center text-center py-24 sm:py-32">
      {/* Background Soft Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="toggle">
            READY TO GROW
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
          Let your GTM run on autopilot.
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#64748B] max-w-xl mx-auto leading-relaxed font-normal">
          Smarter insights. Better leads. More revenue. All in one unified AI-powered{' '}
          <br className="hidden sm:inline" />
          strategic growth partner.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA */}
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[15px] px-7 py-3.5 rounded-full shadow-[0_4px_14px_rgba(11,15,25,0.15)] hover:shadow-[0_6px_20px_rgba(11,15,25,0.25)] transition-all duration-200 group cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-[15px] px-7 py-3.5 rounded-full border border-neutral-200/90 shadow-xs hover:border-neutral-300 transition-all duration-200 cursor-pointer"
          >
            <span>Watch demo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
