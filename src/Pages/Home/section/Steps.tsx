import React from 'react';
import {
  Lightbulb,
  BarChart3,
  Search,
  Compass,
  Target,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface StepItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const stepsData: StepItem[] = [
  {
    id: 'understand',
    title: 'UNDERSTAND',
    description: 'We learn about your company and product.',
    icon: Lightbulb,
  },
  {
    id: 'analyse',
    title: 'ANALYSE',
    description: 'We analyse your market, competitors and trends.',
    icon: BarChart3,
  },
  {
    id: 'find',
    title: 'FIND',
    description: 'We identify your ideal customers (ICP).',
    icon: Search,
  },
  {
    id: 'discover',
    title: 'DISCOVER',
    description: 'We find where your customers are active.',
    icon: Compass,
  },
  {
    id: 'strategize',
    title: 'STRATEGIZE',
    description: 'We build a complete GTM strategy.',
    icon: Target,
  },
  {
    id: 'execute',
    title: 'EXECUTE',
    description: 'We run campaigns, generate leads and reach out.',
    icon: Rocket,
  },
  {
    id: 'learn',
    title: 'LEARN',
    description: 'We analyse results and continuously improve.',
    icon: TrendingUp,
  },
];

export const Steps: React.FC = () => {
  return (
    <section className="GlobalPadding w-full bg-white relative">
      <div className="w-full max-w-[1500px] mx-auto text-center">
        {/* Top Heading Box */}
        <ScrollReveal variant="fade-up" delay={50} duration={600} distance={20} className="inline-flex items-center justify-center mb-5">
          <div className="toggle">
            THE 7-STEP GTM PROCESS
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal variant="fade-up" delay={120} duration={750} distance={24}>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0B0F19] tracking-tight leading-tight">
            From understanding to sustainable growth
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" delay={200} duration={750} distance={20}>
          <p className="mt-4 text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A structured, AI-powered process to take you from where you are to<br className="hidden sm:inline" /> where you want to be.
          </p>
        </ScrollReveal>

        {/* 7-Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 xl:gap-4 justify-items-center w-full mx-auto">
          {stepsData.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal
                key={step.id}
                variant="fade-up"
                delay={220 + index * 50}
                duration={650}
                distance={20}
                className="bg-[#FFFFFF] w-full max-w-[205px] min-w-[145px] h-[320px] rounded-[26px] border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] flex flex-col justify-between items-center text-center pt-[36px] pb-[32px] px-[16px]"
              >
                {/* Icon Slot */}
                <div className="flex-1 flex items-center justify-center">
                  <Icon
                    className="w-7 h-7 text-[#2563EB]"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Uniform Text Information */}
                <div className="w-full h-[88px] flex flex-col justify-start">
                  <h4 className="text-[12.5px] font-bold text-[#0B0F19] tracking-wider uppercase mb-2 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-[11.5px] text-[#64748B] leading-[1.45] font-normal">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
