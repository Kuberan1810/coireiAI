import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface StepItem {
  number: string;
  title: string;
  description: string;
  alignment: 'left' | 'right';
}

const stepsData: StepItem[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your company and product.',
    alignment: 'left',
  },
  {
    number: '02',
    title: 'Analyse',
    description: 'We analyse your market, competitors and trends.',
    alignment: 'right',
  },
  {
    number: '03',
    title: 'Find',
    description: 'We identify your ideal customers (ICP).',
    alignment: 'left',
  },
  {
    number: '04',
    title: 'Discover',
    description: 'We find where your customers are active.',
    alignment: 'right',
  },
  {
    number: '05',
    title: 'Strategize',
    description: 'We build a complete GTM strategy.',
    alignment: 'left',
  },
  {
    number: '06',
    title: 'Execute',
    description: 'We run campaigns, generate leads and reach out.',
    alignment: 'right',
  },
  {
    number: '07',
    title: 'Learn',
    description: 'We analyse results and continuously improve.',
    alignment: 'left',
  },
];

export const Steps: React.FC = () => {
  return (
    <section className="GlobalPading w-full bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="text-center">
        {/* Top Pill Badge */}
        <ScrollReveal variant="fade-up" delay={50} duration={600} distance={20} className="inline-flex items-center justify-center mb-5">
          <div className="toggle">
            THE 7-STEP GTM PROCESS
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal variant="fade-up" delay={150} duration={750} distance={26}>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#0F172A] tracking-tight leading-[1.18]">
            From understanding to sustainable growth
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" delay={250} duration={750} distance={24}>
          <p className="mt-4 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A structured, AI-powered process to take you from where you are to <br className="hidden sm:inline" />
            where you want to be.
          </p>
        </ScrollReveal>

        {/* 7-Step Cards Container */}
        <div className="mt-14 max-w-[964px] mx-auto space-y-4 sm:space-y-5">
          {stepsData.map((step) => {
            const isLeft = step.alignment === 'left';
            const variant = isLeft ? 'fade-right' : 'fade-left';

            return (
              <ScrollReveal
                key={step.number}
                variant={variant}
                duration={700}
                distance={32}
                threshold={0.12}
                className={`relative w-full bg-[#F8FAFF] rounded-[36px] sm:rounded-[44px] border border-[#F3F3F3] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.06)] hover:border-blue-200/60 transition-all duration-300 overflow-hidden min-h-[96px] sm:min-h-[116px] md:min-h-[126px] flex items-center group cursor-default ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                {isLeft ? (
                  /* Left Layout: 67x66 Badge on Left + 22px Gap */
                  <div className="flex items-center gap-[22px] w-full text-left">
                    {/* Exact 67x66 Blue Badge */}
                    <div className="w-[67px] h-[66px] bg-[#2563EB] text-white font-bold text-2xl flex items-center justify-center rounded-r-[20px] shrink-0 select-none group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      {step.number}
                    </div>

                    {/* Text Content */}
                    <div className="py-4 pr-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-normal mt-1 leading-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Right Layout: Text + 22px Gap + 67x66 Badge on Right */
                  <div className="flex items-center justify-end gap-[22px] w-full text-right">
                    {/* Text Content */}
                    <div className="py-4 pl-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-normal mt-1 leading-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Exact 67x66 Blue Badge */}
                    <div className="w-[67px] h-[66px] bg-[#2563EB] text-white font-bold text-2xl flex items-center justify-center rounded-l-[20px] shrink-0 select-none group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      {step.number}
                    </div>
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
