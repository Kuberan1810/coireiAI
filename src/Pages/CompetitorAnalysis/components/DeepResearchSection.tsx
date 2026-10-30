import React, { useState } from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import smartFrequencySvg from '../../../assets/engage/smartfrequency.svg';
import img01 from '../../../assets/engage/01.svg';
import img03 from '../../../assets/engage/03.svg';
import img04 from '../../../assets/engage/04.svg';

interface DeepResearchCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const DEEP_RESEARCH_CARDS: DeepResearchCardItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Market Positioning',
    description: 'Compare your brand against competitors and uncover market gaps and opportunities.',
    image: img01,
  },
  {
    id: '02',
    number: '02',
    title: 'Competitor Intelligence',
    description: 'Strengths, weaknesses, pricing and positioning.',
    image: smartFrequencySvg,
  },
  {
    id: '03',
    number: '03',
    title: 'Competitive Trends',
    description: 'Track market shifts, evolving customer behaviour, and industry developments.',
    image: img03,
  },
  {
    id: '04',
    number: '04',
    title: 'Actionable Insights',
    description: 'Uncover strategic opportunities and recommendations to stay ahead.',
    image: img04,
  },
  {
    id: "05",
    number: "05",
    title: "Voice of Customer",
    description: "Analyze customer reviews and pain points to understand sentiment and competitor perception.",
    image: img04,
  }
];

export const DeepResearchSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('02');

  return (
    <section className="relative w-full py-[56px] sm:py-[72px] lg:py-[88px] px-6 sm:px-8 lg:px-12 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 text-left">
            <ScrollReveal variant="fade-up" duration={600} distance={18}>
              <div className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-wider text-[#94A3B8] mb-3">
                DEEP RESEARCH
              </div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-1.2px] leading-[1.14] text-[#0D0D0D]">
                Understand Your Competitors,
                <br className="hidden sm:inline" /> Backed by Real Data.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Paragraph */}
          <div className="lg:col-span-5 text-left lg:pt-6">
            <ScrollReveal variant="fade-up" duration={600} distance={18} delay={120}>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14.5px] sm:text-[15.5px] leading-[26px] text-[#64748B] max-w-lg">
                Get detailed analysis of market size, growth trends, industry shifts, competitor landscape and emerging opportunities — so you can make smarter, faster decisions.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Cards Container */}
        <div
          onMouseLeave={() => setActiveCardId('02')}
          className="relative flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-5 min-h-[390px] py-3 select-none"
        >
          {DEEP_RESEARCH_CARDS.map((card, idx) => {
            const isActive = card.id === activeCardId;

            return (
              <ScrollReveal
                key={card.id}
                variant="fade-up"
                duration={650}
                distance={24}
                delay={idx * 90}
                className="w-full sm:w-auto flex justify-center"
              >
                <div
                  onMouseEnter={() => setActiveCardId(card.id)}
                  className={`group relative rounded-[10px] bg-white transition-all duration-300 cursor-pointer overflow-hidden text-left flex flex-col justify-between ${
                    isActive
                      ? 'w-full max-w-[320px] sm:w-[265px] h-[374px] p-4 border border-[#E2E8F0] shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] z-10 -translate-y-1'
                      : 'w-full max-w-[280px] sm:w-[175px] h-[306px] p-4 border border-[#F1F5F9] hover:border-[#CBD5E1] shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  {/* Top Area: Image reveals on hover/active, Left Corner Number shows when inactive */}
                  <div className="relative w-full h-[188px] rounded-[10px] overflow-hidden select-none bg-transparent">
                    {/* Revealed Image on Hover / Active */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-400 ease-out ${
                        isActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-top rounded-[10px]"
                        loading="lazy"
                      />
                      {/* Figma spec: 29px linear gradient fade at bottom into white */}
                      <div className="absolute bottom-0 left-0 right-0 h-[29px] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    </div>

                    {/* Left Corner Number (Visible when inactive / idle)
                        Typography: Plus Jakarta Sans 800, Size: 128px, Line-height: 48px, Letter-spacing: -1px, Color: #F1F1F1
                        Figma spec: Top: 27px, Left: -21px */}
                    <div
                      className={`relative w-full h-full overflow-visible transition-all duration-300 ${
                        isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      <span
                        className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[128px] leading-[48px] tracking-[-1px] text-[#F1F1F1] select-none pointer-events-none"
                        style={{
                          top: '27px',
                          left: '-21px',
                        }}
                      >
                        {card.number}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="pt-2 z-10 relative">
                    <h3
                      className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D0D0D] tracking-tight leading-snug mb-1.5 ${
                        isActive ? 'text-[17px]' : 'text-[16px]'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#64748B] ${
                        isActive
                          ? 'text-[13px] leading-[20px]'
                          : 'text-[12.5px] leading-[18.5px]'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View More Button Container (Stationary for Competitor Analysis) */}
        <div className="mt-12 sm:mt-14 flex justify-center">
     
        </div>
      </div>
    </section>
  );
};

export default DeepResearchSection;
