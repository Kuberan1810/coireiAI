import React from 'react';
import understandSvg from '../../../assets/home/Understand.svg';
import analyseSvg from '../../../assets/home/Analyse.svg';
import findSvg from '../../../assets/home/Find.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface StepCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const STEP_CARDS: StepCardItem[] = [
  {
    id: 'understand',
    title: 'Understand',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience, positioning, and what makes you different.',
    image: understandSvg,
  },
  {
    id: 'analyse',
    title: 'Analyse',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience, positioning, and what makes you different.',
    image: analyseSvg,
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
        {/* 3-Card Grid Matching Figma Specs (387px x 589px, radius: 20px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 w-full items-stretch justify-items-center">
          {STEP_CARDS.map((card, idx) => (
            <ScrollReveal
              key={card.id}
              variant="fade-up"
              duration={650}
              distance={24}
              delay={idx * 120}
              className="h-full w-full max-w-[387px]"
            >
              <div className="w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[589px] bg-[#f3f3f3] rounded-[20px] border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-start text-left ">
                {/* Top Illustration Box (Figma Frame 2147225447) */}
                <div className="relative w-full aspect-[340/320] overflow-hidden rounded-[16px] bg-[#ffffff] border border-[#F1F5F9] flex items-center justify-center ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain block select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111827] tracking-tight mt-6 sm:mt-7 mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[15px] sm:text-[18x] text-[#64748B] font-normal leading-[1.65]">
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
