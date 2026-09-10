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

            <div className="  text-center">
                {/* Top Pill Badge */}
                <div className="inline-flex items-center justify-center mb-5">
                    <div className="toggle">
                        THE 7-STEP GTM PROCESS
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight max-w-3xl mx-auto">
                    From understanding to sustainable growth
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    A structured, AI-powered process to take you from where you are to <br className="hidden sm:inline" />
                    where you want to be.
                </p>

                {/* 7-Step Cards Container */}
                <div className="mt-14 max-w-4xl mx-auto space-y-4 sm:space-y-4.5">
                    {stepsData.map((step) => (
                        <div
                            key={step.number}
                            className="bg-[#F8FAFC] hover:bg-slate-50/90 rounded-2xl sm:rounded-[24px] p-4.5 sm:px-8 sm:py-5.5 border border-slate-100/90 hover:border-blue-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200"
                        >
                            {step.alignment === 'left' ? (
                                /* Left-aligned layout */
                                <div className="flex items-center justify-start gap-4 sm:gap-5 text-left">
                                    {/* Number Badge */}
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2563EB] text-white font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                                        {step.number}
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                /* Right-aligned layout (Desktop) / Accessible on mobile */
                                <div className="flex items-center justify-end gap-4 sm:gap-5 text-right">
                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Number Badge */}
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2563EB] text-white font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
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
