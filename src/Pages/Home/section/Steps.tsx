import React from 'react';
import findSvg from '../../../assets/home/Find.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import AnalyseAnimation from '../animation/AnalyseAnimation';
import UnderstandVisual from '../animation/UnderstandVisual';

interface StepCardItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const STEP_CARDS: StepCardItem[] = [
  {
    id: 'understand',
    title: 'Understand',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience, positioning, and what makes you different.',
  },
  {
    id: 'analyse',
    title: 'Analyse',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience, positioning, and what makes you different.',
  },
  {
    id: 'find',
    title: 'Find',
    description:
      'We identify your ideal customer profiles (ICP), uncovering high-intent accounts, buyer personas, and verified decision-makers.',
    image: findSvg,
  },
];

export const Steps: React.FC = () => {
  return (
    <section
      id="steps-section"
      data-custom-padding
      className="w-full bg-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-28 px-4 sm:px-6 lg:px-8 border-t border-[#F1F5F9]"
    >
      <div className="max-w-[1240px] mx-auto w-full">
        {/* Section Heading */}
        <ScrollReveal variant="fade-up" duration={650} distance={20}>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-semibold text-[#0B0F19] tracking-[-1.2px] leading-[1.2] mb-8 sm:mb-12 text-left cursor-text select-text">
            From Understanding to Execution.
          </h2>
        </ScrollReveal>

        {/* 3-Card Grid Matching Figma Specs (387px x 589px, radius: 20px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch justify-items-center">
          {STEP_CARDS.map((card, idx) => (
            <ScrollReveal
              key={card.id}
              variant="fade-up"
              duration={650}
              distance={24}
              delay={idx * 120}
              className="h-full w-full max-w-[387px]"
            >
              <div className="w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[589px] bg-[#FBFFFF] rounded-[20px] border border-[#F3F3F3] p-4 sm:p-5 flex flex-col justify-start text-left">
                {/* Top Illustration Box (Figma Frame 2147225447) */}
                <div className="relative w-full aspect-[340/320] overflow-hidden rounded-[16px] bg-[#ffffff] border border-[#F1F5F9] flex items-center justify-center">
                  {card.id === 'understand' ? (
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <UnderstandVisual className="w-full h-full" />
                    </div>
                  ) : card.id === 'analyse' ? (
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <AnalyseAnimation className="w-full h-full" />
                    </div>
                  ) : (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain block select-none pointer-events-none"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Card Title */}
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111827] tracking-tight mt-6 sm:mt-7 mb-3 leading-snug cursor-text select-text">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] font-normal leading-[1.65] cursor-text select-text">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
