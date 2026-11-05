import React from 'react';

interface DeepResearchCardItem {
  id: string;
  title: string;
  description: string;
  renderWatermark: () => React.ReactNode;
}

const DEEP_RESEARCH_CARDS: DeepResearchCardItem[] = [
  {
    id: 'market-positioning',
    title: 'Market Positioning',
    description: 'Compare your brand against competitors and uncover market gaps and opportunities.',
    renderWatermark: () => (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-24 h-24 sm:w-28 sm:h-28 text-[#818CF8]/25"
      >
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="6" />
        <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="6" />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="6" />
        <path
          d="M50 50L78 78"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'competitor-intelligence',
    title: 'Competitor Intelligence',
    description: 'Strengths, weaknesses, pricing and positioning.',
    renderWatermark: () => (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-24 h-24 sm:w-28 sm:h-28 text-[#818CF8]/25"
      >
        {/* Sparkle star */}
        <path
          d="M56 22C56 32 64 40 74 40C64 40 56 48 56 58C56 48 48 40 38 40C48 40 56 32 56 22Z"
          stroke="currentColor"
          strokeWidth="4"
          fill="currentColor"
          fillOpacity="0.1"
          strokeLinejoin="round"
        />
        {/* Magnifying glass circle and handle */}
        <circle cx="44" cy="46" r="26" stroke="currentColor" strokeWidth="6" />
        <path
          d="M63 65L82 84"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'trend-analysis',
    title: 'Trend Analysis',
    description: 'Emerging trends, customer behaviour and industry shifts.',
    renderWatermark: () => (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-24 h-24 sm:w-28 sm:h-28 text-[#818CF8]/25"
      >
        {/* Bar chart bars */}
        <rect x="22" y="60" width="10" height="26" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="3" />
        <rect x="42" y="48" width="10" height="38" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="3" />
        <rect x="62" y="34" width="10" height="52" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="3" />
        {/* Trend arrow */}
        <path
          d="M20 52L40 36L58 46L82 20"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68 20H82V34"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'actionable-insights',
    title: 'Actionable Insights',
    description: 'Clear recommendations to stay ahead.',
    renderWatermark: () => (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-24 h-24 sm:w-28 sm:h-28 text-[#818CF8]/25"
      >
        {/* Lightbulb outline */}
        <path
          d="M36 44C36 34.0589 42.268 26 50 26C57.732 26 64 34.0589 64 44C64 49.5 60.5 54 59 58H41C39.5 54 36 49.5 36 44Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M44 64H56M46 70H54"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Radiating rays */}
        <line x1="50" y1="14" x2="50" y2="19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="28" y1="23" x2="32" y2="27" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="72" y1="23" x2="68" y2="27" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="20" y1="44" x2="25" y2="44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="80" y1="44" x2="75" y2="44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const DeepResearchSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-12 bg-white text-[#0B0A09] border-t border-[#F1F5F9] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Centered Section Header (Matching Figma) */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[11.5px] sm:text-[12.5px] tracking-[0.14em] uppercase text-[#94A3B8] mb-3">
            DEEP RESEARCH
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
            Understand Your Competitors,
            <br />
            Backed by Real Data .
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15.5px] text-[#64748B] max-w-2xl mx-auto leading-[1.65] font-normal">
            Get detailed analysis of market size, growth trends, industry shifts, competitor landscape and emerging opportunities — so you can make smarter, faster decisions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DEEP_RESEARCH_CARDS.map((card) => (
            <div
              key={card.id}
              className="relative rounded-[18px] bg-white border border-[#F1F5F9] p-6 sm:p-7 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Card Text Content (Top) */}
              <div className="relative z-10 text-left">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[17px] sm:text-[18px] text-[#0F172A] mb-2 leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[13.5px] text-[#64748B] leading-[1.6] font-normal">
                  {card.description}
                </p>
              </div>

              {/* Watermark SVG Graphic (Bottom Right) */}
              <div className="absolute -bottom-2 -right-2 pointer-events-none select-none transition-transform duration-300 group-hover:scale-105 group-hover:-translate-x-1 group-hover:-translate-y-1">
                {card.renderWatermark()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepResearchSection;
