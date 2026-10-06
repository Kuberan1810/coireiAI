import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface QueryItem {
  id: string;
  question: string;
  response: string;
  sourcesCount: number;
}

const QUERIES: QueryItem[] = [
  {
    id: 'traction',
    question: '“What campaigns are gaining traction?”',
    response:
      '“Operations leaders are showing the strongest emerging interest. Competitor messaging is heavily focused on automation, creating an opportunity around measurable productivity gains.”',
    sourcesCount: 83,
  },
  {
    id: 'audience',
    question: '“Which audience should we target next?”',
    response:
      '“Mid-market VP Operations and IT Leaders showed a 42% spike in intent signals over the past 30 days, with low competitive saturation in comparison workflows.”',
    sourcesCount: 114,
  },
  {
    id: 'messaging',
    question: '“What messaging are competitors using?”',
    response:
      '“Top 3 rivals are primarily anchoring on generic automation. Zero competitors are actively bidding on measurable time savings or audit compliance.”',
    sourcesCount: 96,
  },
  {
    id: 'content-gap',
    question: '“Where is the biggest content gap?”',
    response:
      '“Buyer searches around implementation timelines and ROI comparison models have surged by 68%, with no direct competitor guide currently ranking in the top 5.”',
    sourcesCount: 72,
  },
];

export const AskMarketingDataSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(QUERIES[0].id);

  const activeQuery = QUERIES.find((q) => q.id === activeId) || QUERIES[0];

  return (
    <section className="w-full max-w-[1240px] mx-auto py-12 sm:py-16 md:py-20">
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
          <div className="w-full max-w-[485px] min-h-[300px] sm:min-h-[320px] bg-white rounded-[24px] border border-[#E5E7EB] p-7 sm:p-9 shadow-xs flex flex-col justify-between font-['Inter',sans-serif]">
            
            {/* Top Tag & Response Content */}
            <div>
              {/* Tag */}
              <div className="font-medium text-[11px] sm:text-[11.5px] uppercase tracking-[0.08em] text-[#9CA3AF] mb-5">
                AI RESPONSE
              </div>

              {/* Dynamic Answer Quote */}
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15.5px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#374151] transition-opacity duration-300">
                {activeQuery.response}
              </p>
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
