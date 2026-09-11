import React from 'react';
import mockupImg from '../../../assets/home/replacedhome.svg';
import { Check, Play, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const Hero: React.FC = () => {
  const handleScrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('get-started') || document.getElementById('cta');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 sm:pb-24">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="GlobalPading max-w-7xl mx-auto text-center mt-5">
        {/* Pill Badge */}
        <ScrollReveal variant="fade-up" delay={0} duration={500} distance={16} className="inline-flex items-center justify-center mb-8">
          <div className="toggle">
            THE AI GTM STRATEGIST
          </div>
        </ScrollReveal>

        {/* Main H1 Headline */}
        <ScrollReveal variant="fade-up" delay={60} duration={600} distance={20}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-[#0B0F19] tracking-tight leading-[1.14] max-w-5xl mx-auto">
            A GTM that thinks, analyses and acts.
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" delay={120} duration={600} distance={18}>
          <p className="mt-8 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us about your company. Our AI understands your product, market and <br className="hidden md:inline" />
            ideal customers then builds and executes the right GTM strategy.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal variant="fade-up" delay={180} duration={550} distance={16}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#get-started"
              onClick={handleScrollToCta}
              className="inline-flex items-center justify-center bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[14.5px] px-7 py-3 rounded-full hover:-translate-y-0.5 transition-all cursor-pointer select-none gap-2"
            >
              <span>Start your GTM journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleScrollToCta}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-[14.5px] px-6 py-3 rounded-full border border-neutral-200 hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              <Play className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800 ml-0.5" />
              <span>Watch demo</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Hero Mockup Image Container */}
        <ScrollReveal variant="zoom-in" delay={220} duration={650} distance={20} className="mt-12 sm:mt-16 max-w-5xl mx-auto px-2 relative">
          <div className="relative pt-2 pb-2">
            {/* The 3D Mockup Graphic */}
            <div>
              <img
                src={mockupImg}
                alt="Coirei AI GTM Strategist Platform"
                className="w-full h-auto object-contain mx-auto"
                style={{
                  filter: 'drop-shadow(0px 0px 39px rgba(174, 174, 174, 0.25))',
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Checkpoint Bullets */}
        <ScrollReveal variant="fade-up" delay={260} duration={550} distance={14} className="mt-10 sm:mt-14 md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-600 text-[13.5px] font-medium relative z-20">

            <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              <span>Setup in minutes</span>
            </div>

            <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              <span>Built for growth</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;

