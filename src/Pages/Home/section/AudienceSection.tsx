import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import rightWhiteCardSvg from '../../../assets/RightWhiteCardSection.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

const b2bBenefits = [
  'Find high-intent companies and decision makers',
  'Enrich and qualify leads automatically',
  'Run personalized email outreach campaigns',
  'Get more meetings and close more deals',
];

const b2cBenefits = [
  'Find high-intent consumers and target buyers',
  'Enrich customer profiles with behavioral data',
  'Run personalized omnichannel campaigns',
  'Drive more conversions and repeat purchases',
];

export const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'B2B' | 'B2C'>('B2B');
  const benefits = activeTab === 'B2B' ? b2bBenefits : b2cBenefits;

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-white GlobalPadding">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
        {/* Left Corner: Card Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-start">
          <ScrollReveal
            variant="fade-right"
            duration={850}
            distance={40}
            className="w-full max-w-[680px] lg:max-w-[680px] xl:max-w-[780px] 2xl:max-w-[860px] relative"
          >
            <img
              src={rightWhiteCardSvg}
              alt="High-quality leads, on autopilot"
              className="w-full h-auto object-contain rounded-[24px] sm:rounded-[28px]"
            />
          </ScrollReveal>
        </div>

        {/* Right Corner: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-end">
          <div className="w-full max-w-xl xl:max-w-2xl">
            {/* Top Bar: Figma Exact Tab & Badge */}
            <ScrollReveal variant="fade-up" delay={50} duration={600} distance={20}>
              {/* Tag / Badge */}
              <div className="toggle mb-5">
                BUILT FOR B2B AND B2C
              </div>

              <div className="flex items-center justify-between gap-4 mb-6 sm:mb-4 flex-wrap">
                {/* Tab Frame */}
                <div className="inline-flex items-center p-[2px] bg-[#F8FAFC] border border-slate-200/90 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('B2B')}
                    className={`h-[24px] px-[16px] py-[4px] rounded-full text-[12px] font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer select-none ${
                      activeTab === 'B2B'
                        ? 'bg-[#0D0D0D] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] scale-100'
                        : 'text-[#64748B] hover:text-[#0D0D0D]'
                    }`}
                  >
                    B2B
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('B2C')}
                    className={`h-[24px] px-[16px] py-[4px] rounded-full text-[12px] font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer select-none ${
                      activeTab === 'B2C'
                        ? 'bg-[#0D0D0D] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] scale-100'
                        : 'text-[#64748B] hover:text-[#0D0D0D]'
                    }`}
                  >
                    B2C
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal variant="fade-up" delay={150} duration={750} distance={26}>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#0F172A] tracking-tight leading-[1.18] mb-7 sm:mb-8">
                Whether you're selling to <br className="hidden sm:inline" />
                businesses or consumers, <br className="hidden sm:inline" />
                we've got you covered.
              </h2>
            </ScrollReveal>

            {/* Features Checklist with matching typography and blue icons */}
            <ul className="space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => (
                <ScrollReveal
                  key={`${activeTab}-${index}`}
                  variant="fade-up"
                  delay={250 + index * 70}
                  duration={650}
                  distance={20}
                  as="li"
                  className="flex items-center gap-3.5 text-[15.5px] sm:text-[16.5px] text-[#334155] font-normal leading-relaxed group cursor-default"
                >
                  <CheckCircle2
                    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#2563EB] shrink-0 group-hover:scale-110 transition-transform duration-200"
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
