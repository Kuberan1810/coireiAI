import React, { useState } from 'react';
import {
  Home,
  Megaphone,
  LayoutGrid,
  Tv,
  Users,
  BarChart2,
} from 'lucide-react';

export const MetaLogo: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.92 6.002c-1.57 0-3.05.77-4.92 2.77-1.87-2-3.35-2.77-4.92-2.77C3.59 6.002 1 8.842 1 12.392c0 3.56 2.59 6.4 6.08 6.4 1.83 0 3.39-.89 4.92-2.67 1.53 1.78 3.09 2.67 4.92 2.67 3.49 0 6.08-2.84 6.08-6.4 0-3.55-2.59-6.39-6.08-6.39zm0 10.49c-1.4 0-2.61-.95-3.84-2.75-.43-.63-.82-1.34-1.08-2.09.61-1.39 1.4-2.54 2.37-3.32.76-.62 1.62-.97 2.55-.97 2.06 0 3.59 1.79 3.59 4.56 0 2.78-1.53 4.57-3.59 4.57zm-9.84 0c-2.06 0-3.59-1.79-3.59-4.57 0-2.77 1.53-4.56 3.59-4.56.93 0 1.79.35 2.55.97.97.78 1.76 1.93 2.37 3.32-.26.75-.65 1.46-1.08 2.09-1.23 1.8-2.44 2.75-3.84 2.75z" />
  </svg>
);

export const FacebookBadge: React.FC = () => (
  <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center text-white shrink-0 shadow-2xs">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </div>
);

export const InstagramBadge: React.FC = () => (
  <div className="w-6 h-6 rounded-[7px] bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-2xs p-1">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  </div>
);

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  headline: string;
  description: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: Home,
    headline: 'Explore How Competitors Win Attention Through Ads',
    description:
      'Discover competitor advertising creatives, campaign strategies, audience engagement, and promotional messaging across Facebook and Instagram to understand what captures customer attention.',
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    icon: Megaphone,
    headline: 'Analyze Meta Campaign Strategies',
    description:
      'Track campaign structures, flight durations, promotional discounts, and event-driven campaigns launched across Meta’s entire advertising network.',
  },
  {
    id: 'ad-sets',
    label: 'Ad Sets',
    icon: LayoutGrid,
    headline: 'Examine Targeting & Placement Ad Sets',
    description:
      'Deconstruct how competitors configure target placements across Feeds, Stories, Reels, and Messenger to capture high-converting social engagement.',
  },
  {
    id: 'ads',
    label: 'Ads',
    icon: Tv,
    headline: 'Benchmark Visual Creatives & Copy',
    description:
      'Browse live video hooks, carousel formats, static images, and CTA variations to reverse-engineer competitor high-performing social ad creative.',
  },
  {
    id: 'audience',
    label: 'Audience',
    icon: Users,
    headline: 'Unpack Audience Demographic Targets',
    description:
      'Identify competitor interest-based targeting, custom lookalikes, and demographic focus to uncover overlooked audience niches.',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: BarChart2,
    headline: 'Social Advertising Performance Insights',
    description:
      'Generate side-by-side creative velocity reports, estimated reach metrics, and seasonal ad strategy benchmarks.',
  },
];

export const MetaAdsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const currentItem = NAV_ITEMS.find((item) => item.id === activeTab) || NAV_ITEMS[0];

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 selection:bg-[#38BDF8]/20">
      <div className="max-w-[840px] w-full mx-auto">
        {/* Main Meta Ads Interactive Card */}
        <div className="w-full rounded-[22px] sm:rounded-[26px] bg-white border border-[#E2E8F0] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.09)]">
          {/* Card Top Header */}
          <div className="px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between border-b border-[#F1F5F9]">
            {/* Meta Brand Header */}
            <div className="flex items-center gap-3">
              <MetaLogo className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-[#0081FB]" />
              <span className="text-[19px] sm:text-[21px] font-semibold text-[#0F172A] tracking-tight">
                Meta Ads
              </span>
            </div>

            {/* Right Social Platform Icons */}
            <div className="flex items-center gap-2">
              <FacebookBadge />
              <InstagramBadge />
            </div>
          </div>

          {/* Card Body: Split Sidebar & Content */}
          <div className="flex flex-col sm:flex-row min-h-[300px]">
            {/* Left Navigation Sidebar */}
            <div className="w-full sm:w-[190px] md:w-[210px] shrink-0 border-b sm:border-b-0 sm:border-r border-[#F1F5F9] p-3 sm:p-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer select-none text-left ${
                      isActive
                        ? 'bg-[#DDD9FE] text-[#1E1B4B] shadow-2xs font-semibold'
                        : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                    }`}
                  >
                    <IconComponent
                      size={17}
                      strokeWidth={isActive ? 2.2 : 1.9}
                      className={`shrink-0 transition-colors ${
                        isActive ? 'text-[#1E1B4B]' : 'text-[#64748B]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Content Panel */}
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
              <div key={currentItem.id} className="animate-fadeIn">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] tracking-[-0.01em] leading-snug">
                  {currentItem.headline}
                </h3>
                <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.65] font-normal max-w-[500px]">
                  {currentItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaAdsSection;
