import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import rightWhiteCardSvg from '../../../assets/RightWhiteCardSection.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

const b2bBenefits = [
  'Research your market and competitors',
  'Define your ideal customers and positioning',
  'Develop messaging that resonates with buyers',
  'Execute and optimize your growth strategy',
  'Get qualified leads, appointments and pipeline opportunities.',
];

export const AudienceSection: React.FC = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-white GlobalPadding">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20">
        {/* Left Column: Card Image on page left */}
        <div className="w-full md:w-1/2 flex items-center justify-start">
          <ScrollReveal
            variant="fade-right"
            duration={850}
            distance={40}
            className="w-full max-w-xl xl:max-w-2xl relative"
          >
            <img
              src={rightWhiteCardSvg}
              alt="High-quality leads, on autopilot"
              className="w-full h-auto object-contain rounded-[18px]"
            />
          </ScrollReveal>
        </div>

        {/* Right Column: Content on page right */}
        <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end">
          <div className="w-full max-w-xl xl:max-w-2xl">
            {/* Tag / Badge */}
            <ScrollReveal variant="fade-up" delay={50} duration={600} distance={20}>
              <div className="toggle mb-6">
                BUILT FOR B2B
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal variant="fade-up" delay={150} duration={750} distance={26}>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] font-semibold text-[#0B0F19] tracking-tight leading-[1.18] mb-6 sm:mb-7">
                Built for B2B growth, <br className="hidden sm:inline" />
                from strategy to execution.
              </h2>
            </ScrollReveal>

            {/* Features Checklist with matching typography and blue icons */}
            <ul className="space-y-3.5 sm:space-y-4">
              {b2bBenefits.map((benefit, index) => (
                <ScrollReveal
                  key={index}
                  variant="fade-up"
                  delay={250 + index * 60}
                  duration={650}
                  distance={16}
                  as="li"
                  className="flex items-center gap-3 text-[14.5px] sm:text-[15.5px] text-[#334155] font-normal leading-relaxed group cursor-default"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#2563EB] shrink-0 group-hover:scale-110 transition-transform duration-200"
                    strokeWidth={1.8}
                  />
                  <span className="group-hover:text-neutral-900 transition-colors duration-200">{benefit}</span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
