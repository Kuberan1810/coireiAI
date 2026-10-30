import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogAutomationShowcase from './components/BlogAutomationShowcase';
import BlogBoxesGraphic from './components/BlogBoxesGraphic';
import AdPerformanceParallax from './components/AdPerformanceParallax';
import AskMarketingDataSection from './components/AskMarketingDataSection';
import SearchAndAISection from './components/SearchAndAISection';
import ChannelPerformanceSection from './components/ChannelPerformanceSection';
import PhoneAutomatedMarketingGraphic from './components/PhoneAutomatedMarketingGraphic';

// Platform Brand Logos
const LinkedInLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const XLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <defs>
      <radialGradient id="ig-grad-mkt" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0%" />
        <stop stopColor="#fdf497" offset="5%" />
        <stop stopColor="#fd5949" offset="45%" />
        <stop stopColor="#d6249f" offset="60%" />
        <stop stopColor="#285AEB" offset="90%" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad-mkt)" />
    <path
      fill="#ffffff"
      d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.4-8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"
    />
  </svg>
);

const EmailLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v.2l10 6.2 10-6.2V6z" />
    <path fill="#EA4335" d="M22 6.5l-10 6.2L2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5z" />
    <path fill="#FBBC05" d="M2 7.8V18c0 1.1.9 2 2 2h3V10.9L2 7.8z" />
    <path fill="#34A853" d="M22 7.8V18c0 1.1-.9 2-2 2h-3V10.9l5-3.1z" />
  </svg>
);

const MetaLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0081FB">
    <path d="M16.992 4.004c-2.316 0-4.417 1.296-5.592 3.324-1.175-2.028-3.276-3.324-5.592-3.324C2.607 4.004 0 6.643 0 9.948c0 3.35 2.056 6.326 4.962 8.784 1.488 1.258 3.167 2.158 4.887 2.68.618.188 1.265.284 1.914.284.649 0 1.296-.096 1.914-.284 1.72-.522 3.399-1.422 4.887-2.68C21.464 16.274 23.52 13.298 23.52 9.948c0-3.305-2.607-5.944-5.808-5.944zm-9.36 10.74c-1.925 0-3.486-1.58-3.486-3.53 0-1.95 1.561-3.53 3.486-3.53 1.925 0 3.486 1.58 3.486 3.53 0 1.95-1.561 3.53-3.486 3.53zm9.36 0c-1.925 0-3.486-1.58-3.486-3.53 0-1.95 1.561-3.53 3.486-3.53 1.925 0 3.486 1.58 3.486 3.53 0 1.95-1.561 3.53-3.486 3.53z" />
  </svg>
);

interface CampaignItem {
  id: string;
  name: string;
  platform: 'LinkedIn' | 'Google' | 'X (Twitter)' | 'YouTube' | 'Instagram' | 'Email' | 'Meta Ads';
  contentType: 'Post' | 'Blog' | 'Video' | 'Newsletter' | 'Ad Campaign';
  status: 'Active' | 'Scheduled' | 'In Review' | 'Draft';
  views: string;
}

const CAMPAIGNS: CampaignItem[] = [
  { id: '1', name: 'Product Launch', platform: 'LinkedIn', contentType: 'Post', status: 'Active', views: '12.4K' },
  { id: '2', name: 'Competitor Blog', platform: 'Google', contentType: 'Blog', status: 'Scheduled', views: '8.1K' },
  { id: '3', name: 'AEO Awareness', platform: 'X (Twitter)', contentType: 'Post', status: 'Active', views: '6.2K' },
  { id: '4', name: 'Customer Story', platform: 'YouTube', contentType: 'Video', status: 'In Review', views: '4.8K' },
  { id: '5', name: 'Product Update', platform: 'Instagram', contentType: 'Post', status: 'Active', views: '9.6K' },
  { id: '6', name: 'Newsletter', platform: 'Email', contentType: 'Newsletter', status: 'Scheduled', views: '2.1K' },
  { id: '7', name: 'Paid Acquisition', platform: 'Meta Ads', contentType: 'Ad Campaign', status: 'Active', views: '5.3K' },
  { id: '8', name: 'Founder Interview', platform: 'LinkedIn', contentType: 'Video', status: 'Draft', views: '1.7K' },
  { id: '9', name: 'Product Demo', platform: 'YouTube', contentType: 'Video', status: 'Active', views: '5.3K' },
  { id: '10', name: 'AEO Guide', platform: 'Google', contentType: 'Blog', status: 'Scheduled', views: '3.9K' },
];

interface SearchCardItem {
  id: string;
  name: string;
  displayUrl: string;
  title: string;
  snippet: string;
  iconBg: string;
  icon: React.ReactNode;
}

const SEARCH_CARDS: SearchCardItem[] = [
  {
    id: 'dribbble',
    name: 'Dribbble',
    displayUrl: 'https://dribbble.com',
    title: "Dribbble - Discover the World's Top Designers & ...",
    snippet:
      'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs....',
    iconBg: '#EA4C89',
    icon: (
      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.842 6.551a10.024 10.024 0 0 1 2.052 5.06 17.065 17.065 0 0 0-5.727-1.018 25.042 25.042 0 0 0-.825-1.742 10.518 10.518 0 0 1 4.5-2.3zm-6.17 1.096c.32.7.625 1.417.912 2.15-2.885.864-5.617 1.258-7.994 1.344a10.023 10.023 0 0 1 4.606-4.664c.828.37 1.66.764 2.476 1.17zM4.093 9.42c2.193-.075 4.747-.436 7.458-1.242.17.397.33.8.48 1.206-3.805 1.272-6.425 3.528-7.79 5.385A9.957 9.957 0 0 1 4.093 9.42zm2.083 8.358c1.233-1.63 3.65-3.69 7.228-4.887a17.653 17.653 0 0 1 1.693 5.485 10.038 10.038 0 0 1-8.921-.598zm10.742.06c-.407-1.76-1.047-3.69-1.92-5.305a15.42 15.42 0 0 1 5.25.92 10.04 10.04 0 0 1-3.33 4.385z" />
      </svg>
    ),
  },
  {
    id: 'awwwards',
    name: 'Awwwards',
    displayUrl: 'https://www.awwwards.com › we...',
    title: 'Winning websites. Web Design Inspirat...',
    snippet:
      'Discover the best website designs of the world. Awwwards recognizes the talent and effort of the be',
    iconBg: '#000000',
    icon: <span className="text-[7px] text-white font-bold leading-none">www</span>,
  },
  {
    id: 'webflow',
    name: 'Webflow',
    displayUrl: 'https://webflow.com › Blog › Design',
    title: '16 best websites for design inspiration ...',
    snippet:
      '13 Jan 2026 — Why design inspiration matters - 1. SVZ Design - 2. Wave Studio - 3. Curated showcase',
    iconBg: '#146EF5',
    icon: <span className="text-[8px] text-white font-bold leading-none">w</span>,
  },
];

const SearchSnippetSwitchCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEARCH_CARDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const getStyle = (idx: number): React.CSSProperties => {
    const total = SEARCH_CARDS.length;
    const slot = (idx - activeIndex + total) % total;

    if (slot === 0) {
      // FRONT CARD (center spotlight, wider 400px, white, elevated shadow, no outline)
      return {
        zIndex: 30,
        transform: 'translate(-50%, -50%) translateY(0px) scale(1)',
        opacity: 1,
        width: '400px',
        maxWidth: '92%',
        height: '92px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 10px 24px rgba(0, 0, 0, 0.07), 0 2px 6px rgba(0, 0, 0, 0.03)',
        transition: 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 700ms ease, background-color 700ms ease',
      };
    }

    if (slot === 1) {
      // TOP BACK CARD (peeking above, wider 350px, no outline)
      return {
        zIndex: 20,
        transform: 'translate(-50%, -50%) translateY(-40px) scale(0.92)',
        opacity: 0.85,
        width: '350px',
        maxWidth: '84%',
        height: '84px',
        backgroundColor: '#F7F8F6',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
        transition: 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 700ms ease, background-color 700ms ease',
      };
    }

    // BOTTOM BACK CARD (slot === 2, wider 350px, no outline)
    return {
      zIndex: 10,
      transform: 'translate(-50%, -50%) translateY(40px) scale(0.92)',
      opacity: 0.85,
      width: '350px',
      maxWidth: '84%',
      height: '84px',
      backgroundColor: '#F7F8F6',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
      transition: 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 700ms ease, background-color 700ms ease',
    };
  };

  return (
    <div className="relative w-full h-[200px] flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-full max-w-[430px] h-[180px] flex items-center justify-center">
        {SEARCH_CARDS.map((card, idx) => {
          const style = getStyle(idx);
          const isFront = (idx - activeIndex + SEARCH_CARDS.length) % SEARCH_CARDS.length === 0;

          return (
            <div
              key={card.id}
              className="absolute left-1/2 top-1/2 rounded-[8px] px-4 py-2.5 flex flex-col justify-center overflow-hidden will-change-transform"
              style={style}
            >
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1.5 truncate">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#202124]">{card.name}</span>
                  <span className="text-[9px] text-[#5F6368] truncate">{card.displayUrl}</span>
                </div>
                <span className="text-gray-400 text-[11px] leading-none shrink-0 font-bold tracking-widest pl-1">
                  ⋮
                </span>
              </div>
              <h4 className="text-[12px] text-[#1A0DAB] font-normal leading-tight truncate">
                {card.title}
              </h4>
              <p
                className={`text-[9px] text-[#4D5156] mt-0.5 leading-snug ${
                  isFront ? 'line-clamp-2' : 'line-clamp-1 opacity-75'
                }`}
              >
                {card.snippet}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Component: Phone Content Creation Graphic (Half Phone Screen + Popup)
// -------------------------------------------------------------
const PhoneContentCreationGraphic: React.FC = () => {
  const [isPopped, setIsPopped] = useState(false);
  const [seconds, setSeconds] = useState(7);

  useEffect(() => {
    // Initial popup on load / mount
    const timer = setTimeout(() => {
      setIsPopped(true);
    }, 400);

    // Periodic popup animation cycle every 6s
    const interval = setInterval(() => {
      setIsPopped(false);
      setTimeout(() => {
        setIsPopped(true);
        setSeconds((prev) => (prev + 1) % 60);
      }, 300);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-[280px] flex flex-col items-center">
      {/* Phone Outer Bezel: Top rounded, bottom completely flat (half phone screen) */}
      <div className="w-[242px] h-[220px] sm:h-[230px] bg-[#090A09] pt-[5px] px-[5px] pb-0 rounded-t-[24px] rounded-b-none border-t-[0.6px] border-x-[0.6px] border-b-0 border-[#A5A5A0] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col">
        {/* Phone Screen Container: Flat bottom */}
        <div className="w-full flex-1 bg-[#FAFAFA] rounded-t-[19px] rounded-b-none p-2.5 sm:p-3 pb-6 text-left relative overflow-hidden flex flex-col justify-start">
          {/* Status Bar: Fully visible mobile head with true center Dynamic Island */}
          <div className="relative w-full flex items-center justify-between px-1 mb-2 shrink-0">
            {/* Left: Time */}
            <span className="text-[10px] font-semibold text-gray-900 tracking-tight shrink-0">9:41</span>

            {/* Dynamic Island: Exactly centered relative to the phone width */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-13 h-3.5 bg-black rounded-full pointer-events-none" />

            {/* Right: Signal, Wi-Fi & Battery Icons */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Cellular Signal (4 bars) */}
              <svg className="w-3 h-2 fill-gray-900" viewBox="0 0 17 11">
                <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
                <rect x="4.5" y="5.5" width="2.5" height="5.5" rx="0.5" />
                <rect x="9" y="3" width="2.5" height="8" rx="0.5" />
                <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" />
              </svg>
              {/* Wi-Fi */}
              <svg className="w-3 h-2 fill-gray-900" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div className="w-[16px] h-[8px] rounded-[2.5px] border-[1.2px] border-gray-900 p-[1px] flex items-center">
                  <div className="w-[10px] h-[4px] bg-gray-900 rounded-[1px]" />
                </div>
                <div className="w-[1.2px] h-[3px] bg-gray-900 rounded-r-[0.5px]" />
              </div>
            </div>
          </div>

          {/* Greeting & Date */}
          <div className="mb-1.5 pr-6 shrink-0">
            <p className="text-[8px] text-gray-400 font-medium">Thu, 24 February</p>
            <h4 className="text-[11px] font-bold text-gray-900 leading-snug">
              Good morning, Rona 👋
            </h4>
          </div>

          {/* App Projects Card */}
          <div className="w-full max-w-[200px] h-[82px] bg-white rounded-[4px] border-[0.27px] border-[#EAEDE7] p-2 shadow-xs mb-1.5 flex flex-col justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-4.5 h-4.5 rounded-[4px] bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <p className="text-[9.5px] font-semibold text-gray-900 leading-tight">App Projects</p>
                <p className="text-[7px] text-gray-400">Digital Product</p>
              </div>
            </div>

            {/* 3 Metric Stats */}
            <div className="grid grid-cols-3 divide-x divide-gray-100 pt-1 border-t border-gray-50 text-center">
              <div>
                <p className="text-[7px] text-gray-400 font-medium">Tasks</p>
                <p className="text-[11px] font-bold text-gray-900 leading-tight">10</p>
              </div>
              <div>
                <p className="text-[7px] text-gray-400 font-medium">Projects</p>
                <p className="text-[11px] font-bold text-gray-900 leading-tight">0</p>
              </div>
              <div>
                <p className="text-[7px] text-gray-400 font-medium">Goals</p>
                <p className="text-[11px] font-bold text-gray-900 leading-tight">4</p>
              </div>
            </div>
          </div>

          {/* TOP PRIORITY Section */}
          <div className="shrink-0">
            <p className="text-[7px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
              TOP PRIORITY
            </p>
            <div className="bg-white rounded-[4px] p-1.5 shadow-2xs border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-[8.5px] font-medium text-gray-700">Final Design Review</span>
              </div>
              <span className="text-[7px] text-gray-400 font-medium">Feb 21</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Work this week" Popup Notification with Spring Bounce */}
      <div
        className="absolute top-[22px] -right-2 sm:-right-4 z-25 bg-white rounded-[12px] p-2 sm:p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.13),0_2px_6px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-2 select-none will-change-transform pointer-events-auto"
        style={{
          transform: isPopped ? 'scale(1) translateY(0)' : 'scale(0.35) translateY(18px)',
          opacity: isPopped ? 1 : 0,
          transition: 'transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 350ms ease-out',
        }}
      >
        <div className="relative">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] shrink-0">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </div>
          {/* Active status pulsing badge */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-white"></span>
          </span>
        </div>
        <div>
          <p className="text-[8.5px] sm:text-[9px] text-gray-400 font-medium leading-none mb-1">
            Work this week
          </p>
          <p className="text-[12px] sm:text-[13px] font-bold text-gray-900 tracking-tight leading-none font-mono">
            12:09:{String(seconds).padStart(2, '0')}
          </p>
        </div>
      </div>

      {/* Seamless Bottom Fade Mask into #F0F0F0 */}
      <div
        className="absolute -bottom-1 left-0 right-0 h-[65px] pointer-events-none z-15"
        style={{
          background: 'linear-gradient(180deg, rgba(240, 240, 240, 0) 0%, rgba(240, 240, 240, 0.75) 45%, #F0F0F0 100%)',
        }}
      />
    </div>
  );
};

// -------------------------------------------------------------
// Component: Automated Marketing 3-Card Switcher (Matching SEO AEO)
// -------------------------------------------------------------
interface MarketingTaskItem {
  id: string;
  title: string;
  subtitle: string;
  priority: string;
  dotColor: string;
  date: string;
}

const MARKETING_CARDS: MarketingTaskItem[] = [
  {
    id: 'wireframe',
    title: 'Wireframe Homepage',
    subtitle: 'Temis',
    priority: 'High Priority',
    dotColor: '#EF4444',
    date: 'Feb 20',
  },
  {
    id: 'user-testing',
    title: 'User Testing',
    subtitle: 'Product Research',
    priority: 'Medium Priority',
    dotColor: '#F59E0B',
    date: 'Feb 19',
  },
  {
    id: 'design-review',
    title: 'Design Review',
    subtitle: 'Marketing Team',
    priority: 'Completed',
    dotColor: '#10B981',
    date: 'Feb 21',
  },
];

const AutomatedMarketingSwitchCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MARKETING_CARDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const getStyle = (idx: number): React.CSSProperties => {
    const total = MARKETING_CARDS.length;
    const slot = (idx - activeIndex + total) % total;

    if (slot === 0) {
      // FRONT CARD (center spotlight, Figma spec: 308px × 84px, Radius 4px, Shadow 0 9px 15px rgba(0,0,0,0.051))
      return {
        zIndex: 30,
        transform: 'translate(-50%, -50%) translateY(0px) scale(1)',
        opacity: 1,
        width: '308px',
        maxWidth: '92%',
        height: '84px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 9px 15px rgba(0, 0, 0, 0.051), 0 2px 6px rgba(0, 0, 0, 0.03)',
        transition:
          'transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 700ms ease, background-color 700ms ease',
      };
    }

    if (slot === 1) {
      // TOP BACK CARD (peeking above)
      return {
        zIndex: 20,
        transform: 'translate(-50%, -50%) translateY(-38px) scale(0.92)',
        opacity: 0.85,
        width: '280px',
        maxWidth: '84%',
        height: '76px',
        backgroundColor: '#F7F8F6',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
        transition:
          'transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 700ms ease, background-color 700ms ease',
      };
    }

    // BOTTOM BACK CARD (peeking below)
    return {
      zIndex: 10,
      transform: 'translate(-50%, -50%) translateY(38px) scale(0.92)',
      opacity: 0.85,
      width: '280px',
      maxWidth: '84%',
      height: '76px',
      backgroundColor: '#F7F8F6',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
      transition:
        'transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 700ms ease, background-color 700ms ease',
    };
  };

  return (
    <div className="relative w-full h-[200px] flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-full max-w-[430px] h-[180px] flex items-center justify-center">
        {MARKETING_CARDS.map((card, idx) => {
          const style = getStyle(idx);
          const isFront = (idx - activeIndex + MARKETING_CARDS.length) % MARKETING_CARDS.length === 0;

          return (
            <div
              key={card.id}
              className="absolute left-1/2 top-1/2 rounded-[4px] px-3.5 py-2.5 flex flex-col justify-between overflow-hidden will-change-transform text-left"
              style={style}
            >
              {/* Header: Green Checkmark Circle + Title + Date */}
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-2 truncate">
                  <div className="w-4 h-4 rounded-full bg-[#4CAF50] flex items-center justify-center text-white shrink-0">
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold text-[#111827] leading-tight truncate">
                    {card.title}
                  </span>
                </div>
                <span className="text-[9px] font-medium text-gray-500 bg-[#F4F4F5] px-2 py-0.5 rounded-[4px] shrink-0 ml-2">
                  {card.date}
                </span>
              </div>

              {/* Subtitle & Priority Tag (Figma inspect: Temis + High Priority) */}
              <div className="pl-6 flex items-center justify-between w-full">
                <span className="text-[11px] text-gray-400 font-normal leading-none truncate">
                  {card.subtitle}
                </span>
                <div
                  className={`inline-flex items-center gap-1.5 bg-[#F4F4F5] px-2 py-0.5 rounded-[4px] shrink-0 ${
                    !isFront ? 'opacity-80' : ''
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: card.dotColor }}
                  />
                  <span className="text-[9px] font-medium text-gray-600 leading-none">
                    {card.priority}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MarketIntelligence: React.FC = () => {
  const renderPlatformIcon = (platform: CampaignItem['platform']) => {
    switch (platform) {
      case 'LinkedIn':
        return <LinkedInLogo className="w-4 h-4 shrink-0" />;
      case 'Google':
        return <GoogleLogo className="w-4 h-4 shrink-0" />;
      case 'X (Twitter)':
        return <XLogo className="w-3.5 h-3.5 shrink-0 text-black" />;
      case 'YouTube':
        return <YouTubeLogo className="w-4 h-4 shrink-0" />;
      case 'Instagram':
        return <InstagramLogo className="w-4 h-4 shrink-0" />;
      case 'Email':
        return <EmailLogo className="w-4 h-4 shrink-0" />;
      case 'Meta Ads':
        return <MetaLogo className="w-4 h-4 shrink-0" />;
      default:
        return null;
    }
  };

  const renderContentTypeBadge = (type: CampaignItem['contentType']) => {
    switch (type) {
      case 'Post':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#2563EB]">
            Post
          </span>
        );
      case 'Blog':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#F3E8FF] text-[#7C3AED]">
            Blog
          </span>
        );
      case 'Video':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFE4E6] text-[#E11D48]">
            Video
          </span>
        );
      case 'Newsletter':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#DCFCE7] text-[#16A34A]">
            Newsletter
          </span>
        );
      case 'Ad Campaign':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFEDD5] text-[#EA580C]">
            Ad Campaign
          </span>
        );
      default:
        return null;
    }
  };

  const renderStatusBadge = (status: CampaignItem['status']) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#ECFDF5] text-[#059669]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Active
          </span>
        );
      case 'Scheduled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#EFF6FF] text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            Scheduled
          </span>
        );
      case 'In Review':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#FEF3C7] text-[#D97706]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            In Review
          </span>
        );
      case 'Draft':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F1F5F9] text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Sections Surface */}
      <div className="relative z-20 bg-white pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        {/* 1. HERO TITLE SECTION */}
        <div className="max-w-[960px] mx-auto text-center pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold tracking-tight leading-[1.18] sm:leading-[1.15]">
            <span className="text-[#52525B]">SEO, AEO, Content Creation, Ads, and</span>
            <br />
            <span className="text-[#52525B]">Automated Marketing </span>
            <span className="text-[#09090B] font-extrabold">All in One Platform.</span>
          </h1>
        </div>

        {/* 2. MARKETING CAMPAIGNS HERO CARD MOCKUP (FIGMA SPECS) */}
        <div className="max-w-[1022px] mx-auto mb-14 sm:mb-20">
          {/* Mac-like outline container: 2px, 2px, 0px, 2px Linear Gradient (#000000 to #FFFFFF), Radius 10px */}
          <div
            className="w-full rounded-[10px] p-[2px] pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03)]"
            style={{
              background: 'linear-gradient(180deg, #000000 0%, #2B2B2B 35%, #9E9E9E 75%, #FFFFFF 100%)',
              borderRadius: '10px',
            }}
          >
            <div className="w-full bg-white rounded-t-[8px] rounded-b-[8px] overflow-hidden flex flex-col">
              {/* macOS Black Title Bar */}
              <div className="w-full bg-[#000000] px-3.5 py-2 sm:py-2.5 flex items-center select-none pointer-events-none">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
                </div>
              </div>

              {/* Marketing Campaigns Window Header */}
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-white border-b border-gray-100 flex items-center justify-between gap-4 select-none pointer-events-none">
                {/* Left: Icon & Title */}
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded flex items-center justify-center text-[#2563EB]">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                      <path d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15M18 13a3 3 0 1 0 0-6M5.437 13.682A7 7 0 0 1 3 8a7 7 0 0 1 14 0c0 1.637-.56 3.144-1.5 4.343" />
                      <path d="M19 11v2a4 4 0 0 1-4 4h-1" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 text-[15px] sm:text-[16px] tracking-tight">
                    Marketing Campaigns
                  </span>
                </div>

                {/* Right: View Toggle & Action Element */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 rounded-lg border border-gray-200 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-[#1D63ED] text-white text-xs sm:text-[13px] font-medium shadow-sm whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>New Campaign</span>
                  </div>
                </div>
              </div>

              {/* Campaign Table Container (Non-interactive presentation) */}
              <div className="w-full overflow-x-auto select-none pointer-events-none">
                <table className="w-full min-w-[760px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[12px] font-medium text-gray-400">
                      {/* Checkbox (static visual element) */}
                      <th className="py-3 px-4 w-10 text-center">
                        <span className="w-4 h-4 rounded border border-gray-300 inline-block align-middle" />
                      </th>

                      {/* Campaign name */}
                      <th className="py-3 px-4 font-normal text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <span className="font-serif font-bold text-xs text-gray-400">T</span>
                          <span>Campaign name</span>
                        </div>
                      </th>

                      {/* Platform */}
                      <th className="py-3 px-4 font-normal text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="8" rx="2" />
                            <rect x="2" y="14" width="20" height="8" rx="2" />
                          </svg>
                          <span>Platform</span>
                        </div>
                      </th>

                      {/* Content type */}
                      <th className="py-3 px-4 font-normal text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
                          </svg>
                          <span>Content type</span>
                        </div>
                      </th>

                      {/* Status */}
                      <th className="py-3 px-4 font-normal text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span>Status</span>
                        </div>
                      </th>

                      {/* Views */}
                      <th className="py-3 px-4 font-normal text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                          </svg>
                          <span>Views</span>
                        </div>
                      </th>

                      {/* Actions */}
                      <th className="py-3 px-4 text-center font-normal text-gray-500 w-16">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-50 text-[13px]">
                    {CAMPAIGNS.map((row) => (
                      <tr key={row.id}>
                        {/* Checkbox (static visual element) */}
                        <td className="py-3.5 px-4 text-center">
                          <span className="w-4 h-4 rounded border border-gray-300 inline-block align-middle" />
                        </td>

                        {/* Campaign Name */}
                        <td className="py-3.5 px-4 font-medium text-gray-900 whitespace-nowrap">
                          {row.name}
                        </td>

                        {/* Platform */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {renderPlatformIcon(row.platform)}
                            <span className="text-gray-700 font-normal text-xs">{row.platform}</span>
                          </div>
                        </td>

                        {/* Content Type */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {renderContentTypeBadge(row.contentType)}
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {renderStatusBadge(row.status)}
                        </td>

                        {/* Views */}
                        <td className="py-3.5 px-4 text-gray-700 font-medium text-xs whitespace-nowrap tabular-nums">
                          {row.views}
                        </td>

                        {/* Actions (...) static icon */}
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <span className="text-gray-400 p-1 inline-flex items-center justify-center">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <circle cx="5" cy="12" r="2" />
                              <circle cx="12" cy="12" r="2" />
                              <circle cx="19" cy="12" r="2" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TWO SHOWCASE CARDS (FIGMA SPECIFICATIONS: Width 610px, Height 412px, Radius 10px, Color #F0F0F0) */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-20 sm:mb-28">
          {/* LEFT CARD: GOOGLE & AEO SEARCH SNIPPETS CARD */}
          <div className="w-full max-w-[610px] h-[412px] bg-[#F0F0F0] rounded-[10px] p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden select-none mx-auto">
            {/* Visual Graphic: Animated Search Snippet Switch Card */}
            <div className="w-full flex-1 flex items-center justify-center relative select-none">
              <SearchSnippetSwitchCard />
            </div>

            {/* Bottom Content (Figma: SEO,AEO + Subtitle) */}
            <div className="text-center select-none pointer-events-none pt-2">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] text-[#0D0D0D] tracking-tight mb-1.5">
                SEO,AEO
              </h3>
              <p className="font-['Manrope',sans-serif] text-[13px] sm:text-[14px] text-[#71717A] max-w-[280px] sm:max-w-[340px] mx-auto leading-relaxed">
                Stay on top of everything, from to-dos to long-term projects.
              </p>
            </div>
          </div>

          {/* RIGHT CARD: HALF PHONE MOBILE WORKFLOW APP MOCKUP (FIGMA SPECIFICATIONS) */}
          <div className="w-full max-w-[610px] h-[412px] bg-[#F0F0F0] rounded-[10px] p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden select-none mx-auto">
            {/* Visual Graphic: Half Phone Screen with Popup Notification */}
            <div className="w-full flex-1 flex items-start justify-center relative select-none pointer-events-none overflow-hidden pt-1.5 sm:pt-2">
              <PhoneContentCreationGraphic />
            </div>

            {/* Bottom Content (Figma: Content Creation + Subtitle) */}
            <div className="text-center select-none pointer-events-none z-20 pt-2">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] text-[#0D0D0D] tracking-tight mb-1.5">
                Content Creation
              </h3>
              <p className="font-['Manrope',sans-serif] text-[13px] sm:text-[14px] text-[#71717A] max-w-[280px] sm:max-w-[340px] mx-auto leading-relaxed">
                Understand where your time goes and maximize every minute.
              </p>
            </div>
          </div>

          {/* CARD 3: BLOG (FIGMA SPECIFICATIONS) */}
          <div className="w-full max-w-[610px] h-[412px] bg-[#F0F0F0] rounded-[10px] p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden select-none mx-auto">
            {/* Visual Graphic: 4x2 Animated Blog Boxes (Pure white boxes behind, no text, no images) */}
            <div className="w-full flex-1 flex items-center justify-center relative select-none">
              <BlogBoxesGraphic />
            </div>

            {/* Bottom Content (Figma: Blog + Subtitle) */}
            <div className="text-center select-none pointer-events-none z-20 pt-2">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] text-[#0D0D0D] tracking-tight mb-1.5">
                Blog
              </h3>
              <p className="font-['Manrope',sans-serif] text-[13px] sm:text-[14px] text-[#71717A] max-w-[280px] sm:max-w-[340px] mx-auto leading-relaxed">
                Stay on top of everything, from to-dos to long-term projects.
              </p>
            </div>
          </div>

          {/* CARD 4: AUTOMATED MARKETING (FIGMA SPECIFICATIONS) */}
          <div className="w-full max-w-[610px] h-[412px] bg-[#F0F0F0] rounded-[10px] p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden select-none mx-auto">
            {/* Visual Graphic: 3 Animated Task Cards exactly like SEO AEO */}
            <div className="w-full flex-1 flex items-start justify-center relative select-none pointer-events-none overflow-hidden pt-1.5 sm:pt-2">
              <PhoneAutomatedMarketingGraphic />
            </div>

            {/* Bottom Content (Figma: Automated Marketing + Subtitle) */}
            <div className="text-center select-none pointer-events-none z-20 pt-2">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] text-[#0D0D0D] tracking-tight mb-1.5">
                Automated Marketing
              </h3>
              <p className="font-['Manrope',sans-serif] text-[13px] sm:text-[14px] text-[#71717A] max-w-[280px] sm:max-w-[340px] mx-auto leading-relaxed">
                Stay on top of everything, from to-dos to long-term projects.
              </p>
            </div>
          </div>
        </div>

        {/* 4. GET FOUND ON SEARCH. GET CITED BY AI. SECTION */}
        <SearchAndAISection />

        {/* 5. KNOW WHERE YOUR MESSAGE WILL PERFORM (CHANNEL PERFORMANCE) */}
        <ChannelPerformanceSection />

        {/* Divider */}
        <div className="w-full max-w-[1240px] mx-auto border-t border-neutral-100 my-16 sm:my-20" />

        {/* Blog Automation Section: Create, Optimize & Publish Blogs Automatically */}
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading and Large Paragraph */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[22px] sm:text-[26px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[46.8px] tracking-[-1.56px] text-[#2F2F2F] mb-4 sm:mb-6">
                Create, Optimize &amp; Publish Blogs<br />
                Automatically
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[24px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[50px] lg:leading-[66.8px] tracking-[-1.56px] text-[#818181]">
                Coirei creates and publishes SEO optimized blogs directly to your website, keeping your content fresh, relevant, and ready to attract the right audience.
              </p>
            </div>

            {/* Right Column: 4x2 Blog Grid with Centered Floating Prompt Card (Auto typing & live generation) */}
            <div className="lg:col-span-7 flex justify-start lg:justify-end w-full">
              <BlogAutomationShowcase />
            </div>

          </div>
        </div>
      </div>

      {/* Middle: Fixed Black Ad Performance Parallax Section (z-10, does not move, revealed as top surface slides up) */}
      <AdPerformanceParallax />

      {/* Bottom Surface (z-20, slides up to cover the fixed black screen) */}
      <div className="relative z-20 bg-white px-4 sm:px-6 lg:px-8">
        <AskMarketingDataSection />

        {/* Closing CTA Section (clean white background, no gradient) */}
        <section className="w-full max-w-4xl mx-auto text-center py-20 sm:py-28 md:py-32">
          {/* Headline */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-5xl lg:text-[54px] font-semibold text-[#0D0D0D] tracking-[-1.5px] leading-[1.14] mb-4 sm:mb-5">
            Make your next campaign <br className="hidden sm:inline" />
            evidence-led.
          </h2>

          {/* Subtitle */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#64748B] leading-[26px] max-w-xl mx-auto mb-8 sm:mb-9">
            Let AI continuously monitor your market and turn meaningful signals into marketing opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-[10px] bg-[#111827] hover:bg-black text-white text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-xs active:scale-[0.99] cursor-pointer"
            >
              Start with Coirei
            </Link>
            <Link
              to="/product"
              className="px-6 py-3.5 rounded-[10px] bg-white hover:bg-neutral-50 border border-[#E2E8F0] text-[#0F172A] text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-2xs active:scale-[0.99] cursor-pointer"
            >
              Explore the Platform
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketIntelligence;
