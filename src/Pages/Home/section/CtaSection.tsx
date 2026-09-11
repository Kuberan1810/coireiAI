import React from 'react';
import { Play } from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const CtaSection: React.FC = () => {
  return (
    <section id="get-started" className="GlobalPadding relative w-full overflow-hidden bg-white flex flex-col items-center justify-center text-center py-24 sm:py-32">
      {/* Background Soft Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Pill Badge */}
        <ScrollReveal variant="fade-up" delay={50} duration={600} distance={20} className="inline-flex items-center justify-center mb-6">
          <div className="toggle">
            READY TO GROW
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal variant="fade-up" delay={150} duration={750} distance={26}>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#0F172A] tracking-tight leading-[1.18] whitespace-normal sm:whitespace-nowrap">
            Let your GTM run on autopilot.
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" delay={250} duration={750} distance={24}>
          <p className="mt-4 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Smarter insights. Better leads. More revenue. All in one unified AI-powered{' '}
            <br className="hidden sm:inline" />
            strategic growth partner.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal variant="fade-up" delay={350} duration={700} distance={20}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@coirei.com"
              className="inline-flex items-center justify-center bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[14.5px] px-7 py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              <span>Get Started</span>
            </a>

            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-[14.5px] px-6 py-3 rounded-full border border-neutral-200 shadow-xs hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              <Play className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800 ml-0.5" />
              <span>Watch demo</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
