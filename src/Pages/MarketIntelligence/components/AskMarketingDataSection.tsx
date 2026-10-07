import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface QueryItem {
  id: string;
  question: string;
  response: string;
  metrics: string[];
  sourcesCount: number;
}

const QUERIES: QueryItem[] = [
  {
    id: 'traction',
    question: '“What campaigns are gaining traction?”',
    response:
      'Competitor acquisition campaigns targeting dissatisfied legacy users show 34% higher traction. For your brand, speed-to-value ad creative delivers 2.4x higher conversion rate than feature-centric ads.',
    metrics: ['34% higher search visibility', '2.4x CVR', '48 ad sets analyzed'],
    sourcesCount: 83,
  },
  {
    id: 'audience',
    question: '“Which audience should we target next?”',
    response:
      'High-growth teams with <15 seats. 82% of market alternatives prioritize enterprise accounts, creating an unaddressed segment with a 94.2% opportunity confidence score.',
    metrics: ['<15 seats target', '82% competitor exclusion rate', '94.2% opportunity confidence'],
    sourcesCount: 114,
  },
  {
    id: 'messaging',
    question: '“What messaging are competitors using?”',
    response:
      '70%+ of tracked alternatives push enterprise AI automation and complex customizations. Under 15% emphasize rapid setup, leaving a clear gap for zero-configuration messaging.',
    metrics: ['70%+ enterprise automation push', '<15% setup messaging', '5-minute migration gap'],
    sourcesCount: 96,
  },
  {
    id: 'content-gap',
    question: '“Where is the biggest content gap?”',
    response:
      'Generative search engines show a major void in direct speed-to-value comparison guides. Content targeting sub-10-minute setup times holds an 94% opportunity score across AI search tools.',
    metrics: ['94% AI Answers opportunity score', '<10m time-to-value benchmark'],
    sourcesCount: 72,
  },
];

export const AskMarketingDataSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(QUERIES[0].id);

  const activeQuery = QUERIES.find((q) => q.id === activeId) || QUERIES[0];

  return (
    <section className="w-full max-w-[1240px] mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Heading and Question Selector Buttons */}
        <div className="lg:col-span-6 text-left">
          {/* Main Section Headline */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0D0D0D] tracking-[-1.5px] leading-[1.15] mb-8 sm:mb-10">
            Ask your marketing data<br />
            anything.
          </h2>

          {/* Interactive Question Buttons List: 576px width, 60px height */}
          <div className="space-y-3 sm:space-y-3.5 max-w-[576px] w-full">
            {QUERIES.map((item) => {
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  type="button"
                  className={`w-full h-[60px] text-left px-5 rounded-[14px] text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer flex items-center ${
                    isSelected
                      ? 'border-2 border-[#60A5FA] bg-[#EEF4FF] text-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                      : 'border border-[#E5E7EB] bg-white hover:bg-neutral-50 text-[#374151]'
                  }`}
                >
                  {item.question}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Elevated AI Response Card */}
        <div className="lg:col-span-6 flex justify-start lg:justify-end w-full">
          <div className="w-full max-w-[520px] min-h-[340px] sm:min-h-[360px] bg-white rounded-[24px] border border-[#E5E7EB] p-7 sm:p-9 shadow-xs flex flex-col justify-between font-['Inter',sans-serif]">
            
            {/* Top Tag & Response Content */}
            <div>
              {/* Tag */}
              <div className="font-medium text-[11px] sm:text-[11.5px] uppercase tracking-[0.08em] text-[#9CA3AF] mb-4">
                AI RESPONSE
              </div>

              {/* Dynamic Answer Quote */}
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] text-[#374151] transition-opacity duration-300">
                “{activeQuery.response}”
              </p>

              {/* Metrics Pill Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {activeQuery.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center px-2.5 py-1 rounded-[6px] bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0] text-[11.5px] sm:text-[12px] font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer: Data Sources & Link */}
            <div className="pt-6 mt-6 border-t border-[#F3F4F6] flex items-center justify-between text-[12px] sm:text-[12.5px]">
              <span className="text-[#9CA3AF] font-normal">
                Based on {activeQuery.sourcesCount} data sources
              </span>
              <button
                type="button"
                className="text-[#2563EB] font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View full analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AskMarketingDataSection;
