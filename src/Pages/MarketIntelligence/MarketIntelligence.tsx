import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import SeoAnimation from './components/SeoAnimation';
import AeoAnimation from './components/AeoAnimation';

export const MarketIntelligence: React.FC = () => {
  const [clickedButton, setClickedButton] = useState<'seo' | 'aeo' | null>(null);

  const handleButtonClick = (type: 'seo' | 'aeo') => {
    setClickedButton(type);
    setTimeout(() => {
      setClickedButton(null);
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen bg-white pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
      {/* Top Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-3xl sm:text-4xl md:text-[48px] leading-[1.25] sm:leading-[56px] md:leading-[65px] tracking-[-1.1px] text-center max-w-4xl mx-auto">
          <span className="text-[#0B0F19]">Turn Market Intelligence Into </span>
          <span
            className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-lg sm:rounded-xl text-black mx-1 sm:mx-1.5 align-middle shadow-xs shrink-0"
            style={{ backgroundColor: '#F0BC35' }}
          >
            {/* Custom Curved Right Arrow Matching Image */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H7a4 4 0 00-4 4v1a1 1 0 11-2 0v-1a6 6 0 016-6h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-[#9CA3AF]"> Your</span>
          <span className="block text-[#9CA3AF] mt-0.5">Next Growth Opportunity.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-[15.5px] text-neutral-500 max-w-2xl mx-auto text-center leading-relaxed">
          Discover your ideal customers, understand your competitors, and uncover high-value
          opportunities with AI-powered market intelligence.
        </p>

        {/* Optimize My Presence indicator from second image */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-neutral-800 hover:text-black transition-colors cursor-pointer group">
            <span>Optimize My Presence</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Two Comparison Cards Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1240px] mx-auto mt-8 sm:mt-10">
        
        {/* Card 1: SEO Card */}
        <div className="bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] border border-neutral-200/70 p-6 sm:p-8 md:p-12 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-neutral-300/80">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-[32px] md:text-[36px] font-bold text-[#0B0F19] text-center tracking-tight leading-snug">
              Be found where your<br className="hidden sm:inline" /> buyers are searching.
            </h2>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-[14px] text-neutral-500 text-center max-w-md mx-auto leading-relaxed">
              GTM helps your brand discover valuable search opportunities, understand competitor visibility, and identify content gaps that can increase organic discovery.
            </p>
          </div>

          {/* Animated Interactive SEO Box Field */}
          <div className="flex-1 flex items-center justify-center my-4">
            <SeoAnimation />
          </div>

          {/* Bottom Action Button (Doesn't link anywhere, routes kept clean) */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => handleButtonClick('seo')}
              className="cursor-pointer group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] hover:bg-black text-white px-6 sm:px-7 py-3 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
            >
              {clickedButton === 'seo' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>SEO Intelligence Ready</span>
                </>
              ) : (
                <>
                  <span>Explore SEO Intelligence</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Card 2: AEO Card */}
        <div className="bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] border border-neutral-200/70 p-6 sm:p-8 md:p-12 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-neutral-300/80">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-[32px] md:text-[36px] font-bold text-[#0B0F19] text-center tracking-tight leading-snug">
              Be the answer when<br className="hidden sm:inline" /> buyers ask AI.
            </h2>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-[14px] text-neutral-500 text-center max-w-md mx-auto leading-relaxed">
              GTM helps your brand understand and improve its visibility across AI-powered search and answer engines.
            </p>
          </div>

          {/* Animated Interactive AEO Box Field */}
          <div className="flex-1 flex items-center justify-center my-4">
            <AeoAnimation />
          </div>

          {/* Bottom Action Button (Doesn't link anywhere, routes kept clean) */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => handleButtonClick('aeo')}
              className="cursor-pointer group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] hover:bg-black text-white px-6 sm:px-7 py-3 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
            >
              {clickedButton === 'aeo' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>AEO Intelligence Ready</span>
                </>
              ) : (
                <>
                  <span>Explore AEO Intelligence</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Turn your SEO and AEO Strategy Section */}
      <div className="max-w-4xl mx-auto text-center mt-24 sm:mt-32 px-4">
        <p className="text-2xl sm:text-3xl md:text-[34px] leading-snug sm:leading-[1.4] text-neutral-400 font-normal tracking-tight">
          <span className="font-semibold text-neutral-900">Turn your SEO and AEO</span>{' '}
          strategy into a powerful growth engine that helps your brand rank higher, get discovered
          faster, and reach the right audience across every search experience.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[1240px] mx-auto border-t border-neutral-100 my-16 sm:my-20" />

      {/* Channel Performance Section: Know where your message will perform */}
      <div className="max-w-[1240px] mx-auto text-left overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-neutral-950 tracking-tight leading-tight mb-8 sm:mb-10">
          Know where your message<br />will perform.
        </h2>

        {/* Carousel / Marquee Track Moving to the Left */}
        <div className="relative w-full overflow-hidden py-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Scrolling Cards Row */}
          <div
            className="flex gap-5 sm:gap-6 w-max animate-marquee"
            style={{ animationDuration: '30s' }}
          >
            {[
              {
                channel: 'LinkedIn',
                badge: 'HIGH',
                score: 85,
                line1: 'Audience engagement ↑',
                line2: 'Thought leadership & ads',
              },
              {
                channel: 'Google',
                badge: 'MEDIUM',
                score: 62,
                line1: 'Search demand ↑',
                line2: 'Performance & brand',
              },
              {
                channel: 'Email',
                badge: 'HIGH',
                score: 78,
                line1: 'Existing audience fit',
                line2: 'Nurture sequences',
              },
              {
                channel: 'Content',
                badge: 'HIGH',
                score: 91,
                line1: 'Strong information gap',
                line2: 'Comparison & guides',
              },
              {
                channel: 'AI Answers',
                badge: 'HIGH',
                score: 94,
                line1: 'Generative search citations ↑',
                line2: 'Perplexity & ChatGPT inclusion',
              },
              {
                channel: 'Community',
                badge: 'HIGH',
                score: 82,
                line1: 'High-intent buyer discussions ↑',
                line2: 'Reddit & dev forums',
              },
            ]
              .concat([
                {
                  channel: 'LinkedIn',
                  badge: 'HIGH',
                  score: 85,
                  line1: 'Audience engagement ↑',
                  line2: 'Thought leadership & ads',
                },
                {
                  channel: 'Google',
                  badge: 'MEDIUM',
                  score: 62,
                  line1: 'Search demand ↑',
                  line2: 'Performance & brand',
                },
                {
                  channel: 'Email',
                  badge: 'HIGH',
                  score: 78,
                  line1: 'Existing audience fit',
                  line2: 'Nurture sequences',
                },
                {
                  channel: 'Content',
                  badge: 'HIGH',
                  score: 91,
                  line1: 'Strong information gap',
                  line2: 'Comparison & guides',
                },
                {
                  channel: 'AI Answers',
                  badge: 'HIGH',
                  score: 94,
                  line1: 'Generative search citations ↑',
                  line2: 'Perplexity & ChatGPT inclusion',
                },
                {
                  channel: 'Community',
                  badge: 'HIGH',
                  score: 82,
                  line1: 'High-intent buyer discussions ↑',
                  line2: 'Reddit & dev forums',
                },
              ])
              .map((item, idx) => (
                <div
                  key={`${item.channel}-${idx}`}
                  className="w-[286px] h-[198px] bg-white rounded-[24px] border border-[#F0F1F3] p-5 flex flex-col justify-between shrink-0 select-none"
                  style={{
                    boxShadow:
                      '0px 2px 6px -1px rgba(0, 0, 0, 0.02), 0px 4px 20px -2px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div>
                    {/* Header: Title + Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <h3 className="text-[18px] font-semibold text-neutral-900 tracking-tight">
                        {item.channel}
                      </h3>
                      <span
                        className="inline-flex items-center justify-center font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] tracking-[0.6px] uppercase px-2.5 py-0.5 rounded-full"
                        style={{
                          color: item.badge === 'HIGH' ? '#059669' : '#D97706',
                          backgroundColor: item.badge === 'HIGH' ? '#E8F7F0' : '#FEF3C7',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-[200.59px] h-[6px] bg-[#EFF2F6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.score}%`,
                          backgroundColor: '#2563EB',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>

                    {/* Score */}
                    <div
                      className="mt-2 text-[12px] font-medium leading-none"
                      style={{ color: '#2563EB' }}
                    >
                      {item.score}% opportunity score
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="pt-2 text-left">
                    <div className="text-[12px] text-neutral-600 font-normal leading-tight">
                      {item.line1}
                    </div>
                    <div className="text-[11.5px] text-neutral-400 mt-1 leading-tight">
                      {item.line2}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketIntelligence;
