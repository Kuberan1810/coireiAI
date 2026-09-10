import React from 'react';

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
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center mb-5">
          <div className="toggle">
            THE 7-STEP GTM PROCESS
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#0F172A] tracking-tight leading-[1.18]">
          From understanding to sustainable growth
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          A structured, AI-powered process to take you from where you are to <br className="hidden sm:inline" />
          where you want to be.
        </p>

        {/* 7-Step Cards Container (Figma: W 964, H 130, Radius 44, Fill #F8FAFF, Stroke #F3F3F3, Badge 67x66, Gap 22) */}
        <div className="mt-14 max-w-[964px] mx-auto space-y-4 sm:space-y-5">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className={`relative w-full bg-[#F8FAFF] rounded-[36px] sm:rounded-[44px] border border-[#F3F3F3] shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden min-h-[96px] sm:min-h-[116px] md:min-h-[126px] flex items-center ${
                step.alignment === 'left' ? 'justify-start' : 'justify-end'
              }`}
            >
              {step.alignment === 'left' ? (
                /* Left Layout: 67x66 Badge on Left + 22px Gap */
                <div className="flex items-center gap-[22px] w-full text-left">
                  {/* Exact 67x66 Blue Badge */}
                  <div className="w-[67px] h-[66px] bg-[#2563EB] text-white font-bold text-2xl flex items-center justify-center rounded-r-[20px] shrink-0 select-none">
                    {step.number}
                  </div>

                  {/* Text Content */}
                  <div className="py-4 pr-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
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
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-normal mt-1 leading-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Exact 67x66 Blue Badge */}
                  <div className="w-[67px] h-[66px] bg-[#2563EB] text-white font-bold text-2xl flex items-center justify-center rounded-l-[20px] shrink-0 select-none">
                    {step.number}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
