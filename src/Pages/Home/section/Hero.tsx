import React from 'react';
import mockupImg from '../../../assets/home/mockups.svg';
import { Check, Play } from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

const companyLogos = [
  {
    name: 'stripe',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Calendly',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Webflow',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Scale',
    icon: (
      <svg className="w-5 h-5 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    name: 'replit',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const Hero: React.FC = () => {
  const handleScrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('get-started') || document.getElementById('cta');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-semibold text-[#0B0F19] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            A GTM that thinks, analyses <br className="hidden sm:inline" />
            and acts.
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" delay={120} duration={600} distance={18}>
          <p className="mt-8 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us about your company. Our AI understands your product, market and ideal customers then builds and executes the right GTM strategy.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal variant="fade-up" delay={180} duration={550} distance={16}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#get-started"
              onClick={handleScrollToCta}
              className="inline-flex items-center justify-center bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[14.5px] px-7 py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              <span>Start your GTM journey</span>
            </a>

            <button
              type="button"
              onClick={handleScrollToCta}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-[14.5px] px-6 py-3 rounded-full border border-neutral-200 shadow-xs hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              <Play className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800 ml-0.5" />
              <span>Watch demo</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Hero Mockup Image Container with Seamless Fade & Subtle Float */}
        <ScrollReveal variant="zoom-in" delay={220} duration={650} distance={20} className="mt-12 sm:mt-16 max-w-5xl mx-auto px-2 relative">
          {/* Ambient Soft Glow Behind Mockup */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-64 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

          <div className="relative pt-2 pb-2">
            {/* The 3D Mockup Graphic with Smooth Mask */}
            <div className="[mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_96%)]">
              <img
                src={mockupImg}
                alt="Coirei AI GTM Strategist Platform"
                className="w-full h-auto object-contain mx-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] select-none transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>

            {/* Bottom Pure White Gradient Overlay */}
            <div className="absolute bottom-0 inset-x-0 h-40 sm:h-56 md:h-64 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
          </div>
        </ScrollReveal>

        {/* Feature Checkpoint Bullets */}
        <ScrollReveal variant="fade-up" delay={260} duration={550} distance={14}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-600 text-[13.5px] font-medium relative z-20">
            <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              <span>No credit card required</span>
            </div>

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

      {/* Trusted By Section with Short Width and Horizontal Shadow Fade */}
      <ScrollReveal variant="fade-up" delay={300} duration={600} distance={16} className="w-full bg-[#F8FAFC] py-10 md:py-12 text-center relative overflow-hidden">
        <p className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em] text-neutral-800 uppercase mb-7">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>

        {/* Short Width Container with Horizontal Shadow/Fade Masks */}
        <div className="max-w-4xl sm:max-w-5xl mx-auto px-4 relative overflow-hidden">
          {/* Left and Right Horizontal Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none z-10" />

          {/* Masked Infinite Looping Track */}
          <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] py-1">
            <div className="animate-marquee gap-14 sm:gap-20 md:gap-24 items-center">
              {[...companyLogos, ...companyLogos, ...companyLogos].map((company, idx) => (
                <div
                  key={`${company.name}-${idx}`}
                  className="flex items-center gap-2.5 shrink-0 text-[#64748B] hover:text-neutral-900 transition-colors cursor-pointer group select-none"
                >
                  {company.icon}
                  <span className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#64748B] group-hover:text-neutral-900 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;

