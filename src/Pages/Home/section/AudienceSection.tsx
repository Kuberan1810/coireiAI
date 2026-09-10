import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import rightWhiteCardImg from '../../../assets/RightWhiteCardSection.png';

const benefits = [
  'Find high-intent companies and decision makers',
  'Enrich and qualify leads automatically',
  'Run personalized email outreach campaigns',
  'Get more meetings and close more deals',
];

export const AudienceSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white GlobalPadding">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center justify-between">
          {/* Left Column: Card Image */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-[650px] xl:max-w-[720px] relative group transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={rightWhiteCardImg}
                alt="High-quality leads, on autopilot"
                className="w-full h-auto object-contain rounded-[24px] sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-800/10"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex flex-col justify-center order-1 lg:order-2 max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
            {/* Top Bar: B2B pill & Badge */}
            <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 flex-wrap">
              {/* B2B pill */}
              <div className="inline-flex p-1 bg-[#F1F5F9] rounded-full border border-slate-200/80 shadow-xs">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#0B0F19] text-white shadow-xs">
                  B2B
                </span>
              </div>

              {/* Tag / Badge */}
              <div className="toggle">
                BUILT FOR B2B AND B2C
              </div>
            </div>

            {/* Headline matching exact font size and color of other sections */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-[1.12] mb-7 sm:mb-8">
              Whether you're selling to <br className="hidden sm:inline" />
              businesses or consumers, <br className="hidden sm:inline" />
              we've got you covered.
            </h2>

            {/* Features Checklist with matching body typography and blue icons */}
            <ul className="space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 text-base sm:text-lg text-[#64748B] font-normal leading-relaxed">
                  <CheckCircle2
                    className="w-6 h-6 text-[#2563EB] shrink-0"
                    strokeWidth={2}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
