import React, { useState, useEffect } from 'react';
import { Search, Bookmark } from 'lucide-react';
import {
  GoogleGIcon,
  GOOGLE_QUERY,
  type AnimStage,
} from './visibilityData';

export interface SeoAnimationProps {
  animStage?: AnimStage;
  typedGoogle?: string;
  activeGoogleTab?: string;
  onTabSelect?: (tab: string) => void;
  onInstantSearch?: () => void;
}

export const SeoAnimation: React.FC<SeoAnimationProps> = ({
  animStage: propAnimStage,
  typedGoogle: propTypedGoogle,
  activeGoogleTab: propActiveGoogleTab,
  onTabSelect,
  onInstantSearch,
}) => {
  // Local state fallbacks if rendered standalone without parent coordinator
  const [localActiveTab, setLocalActiveTab] = useState('All');
  const [localAnimStage, setLocalAnimStage] = useState<AnimStage>('result');
  const [localTyped, setLocalTyped] = useState(GOOGLE_QUERY);

  const isControlled = propAnimStage !== undefined;
  const animStage = isControlled ? propAnimStage : localAnimStage;
  const typedGoogle = isControlled ? (propTypedGoogle ?? '') : localTyped;
  const activeGoogleTab = isControlled ? (propActiveGoogleTab ?? 'All') : localActiveTab;

  useEffect(() => {
    if (isControlled) return;
    // Simple standalone loop if unmounted from parent
    let isCancelled = false;
    const runStandalone = async () => {
      while (!isCancelled) {
        setLocalAnimStage('typing');
        setLocalTyped('');
        for (let i = 1; i <= GOOGLE_QUERY.length; i++) {
          if (isCancelled) return;
          await new Promise((r) => setTimeout(r, 40));
          setLocalTyped(GOOGLE_QUERY.slice(0, i));
        }
        setLocalAnimStage('sent');
        await new Promise((r) => setTimeout(r, 300));
        setLocalAnimStage('thinking');
        await new Promise((r) => setTimeout(r, 800));
        setLocalAnimStage('result');
        await new Promise((r) => setTimeout(r, 4500));
      }
    };
    runStandalone();
    return () => {
      isCancelled = true;
    };
  }, [isControlled]);

  const handleTabClick = (tab: string) => {
    if (onTabSelect) {
      onTabSelect(tab);
    } else {
      setLocalActiveTab(tab);
      setLocalAnimStage('result');
    }
  };

  const handleSearchClick = () => {
    if (onInstantSearch) {
      onInstantSearch();
    } else {
      setLocalAnimStage('result');
    }
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* Pill Header */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-semibold mb-4 border border-slate-200/80 shadow-2xs shrink-0">
        <Search className="w-3.5 h-3.5 text-slate-700" />
        <span>SEO</span>
      </div>

      {/* Google Card */}
      <div className="w-full min-h-[350px] bg-white rounded-[26px] border border-slate-200/90 shadow-[0_16px_48px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.03)] p-5 sm:p-6 flex flex-col justify-start flex-1">
        {/* Google Search Bar */}
        <div
          onClick={handleSearchClick}
          className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 flex items-center justify-between shadow-2xs hover:shadow-xs transition-shadow cursor-pointer"
        >
          <div className="flex items-center gap-3 overflow-hidden flex-1">
            <GoogleGIcon className="w-5 h-5 shrink-0" />
            <span className="text-[13px] sm:text-[14px] text-slate-800 font-normal truncate cursor-text select-text">
              {animStage === 'typing' ? (
                <>
                  {typedGoogle}
                  <span className="inline-block w-0.5 h-4 bg-blue-600 animate-pulse ml-0.5 align-middle" />
                </>
              ) : (
                GOOGLE_QUERY
              )}
            </span>
          </div>
          <button
            type="button"
            aria-label="Search Google"
            className="p-1 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
          >
            <Search
              className={`w-4 h-4 shrink-0 transition-colors ${
                animStage === 'sent' || animStage === 'thinking'
                  ? 'text-blue-600 animate-pulse'
                  : 'text-slate-400'
              }`}
            />
          </button>
        </div>

        {/* Google Category Tabs */}
        <div className="flex items-center gap-4 sm:gap-5 text-xs sm:text-[13px] text-slate-500 mt-4 border-b border-slate-100 pb-2.5 overflow-x-auto w-full">
          {['All', 'Images', 'Videos', 'News', 'Shopping', 'Web'].map((tab) => {
            const isActive = activeGoogleTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabClick(tab)}
                className={`font-medium relative pb-2.5 -mb-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                  isActive
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Content Area: Typing State vs Searching State vs Results */}
        <div className="flex-1 flex flex-col justify-start">
          {animStage === 'typing' ? (
            <div className="flex-1 flex items-center justify-center text-slate-400 text-xs sm:text-[13px] font-normal cursor-text select-text min-h-[160px]">
              <span className="opacity-60">Ready to search...</span>
            </div>
          ) : animStage === 'sent' || animStage === 'thinking' ? (
            <div className="flex-1 flex items-center justify-center gap-2 text-slate-500 text-[13.5px] font-normal animate-in fade-in duration-200 min-h-[160px]">
              <span>Searching</span>
              <span className="flex items-center gap-1.5 ml-0.5">
                <span
                  className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                  style={{ animationDuration: '0.9s', animationDelay: '0ms' }}
                />
                <span
                  className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                  style={{ animationDuration: '0.9s', animationDelay: '180ms' }}
                />
                <span
                  className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                  style={{ animationDuration: '0.9s', animationDelay: '360ms' }}
                />
              </span>
            </div>
          ) : activeGoogleTab === 'Images' ? (
            <div className="mt-3.5 grid grid-cols-3 gap-2.5 animate-slide-down">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mb-1.5">
                  CRM
                </div>
                <span className="text-[11px] font-medium text-slate-800 truncate w-full cursor-text select-text">
                  Pipeline Board
                </span>
                <span className="text-[9.5px] text-slate-400">yourbrand.com</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mb-1.5">
                  AI
                </div>
                <span className="text-[11px] font-medium text-slate-800 truncate w-full cursor-text select-text">
                  Outreach Flows
                </span>
                <span className="text-[9.5px] text-slate-400">yourbrand.com</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs mb-1.5">
                  ROI
                </div>
                <span className="text-[11px] font-medium text-slate-800 truncate w-full cursor-text select-text">
                  Revenue Report
                </span>
                <span className="text-[9.5px] text-slate-400">yourbrand.com</span>
              </div>
            </div>
          ) : activeGoogleTab === 'Videos' ? (
            <div className="mt-3.5 border border-slate-200/80 rounded-2xl p-3.5 bg-[#FCFCFC] shadow-2xs flex items-center gap-3.5 animate-slide-down">
              <div className="relative w-20 h-14 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                  ▶
                </div>
                <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 text-white px-1 rounded font-mono">
                  5:42
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[13px] font-medium text-[#1A0DAB] hover:underline cursor-pointer leading-snug">
                  YourBrand CRM: The 5-Minute Tour for Growing Teams
                </h4>
                <span className="text-[11px] text-slate-400 mt-1 cursor-text select-text">
                  YouTube · YourBrand Official · 42K views
                </span>
              </div>
            </div>
          ) : activeGoogleTab === 'News' ? (
            <div className="mt-3.5 border border-slate-200/80 rounded-2xl p-3.5 bg-[#FCFCFC] shadow-2xs animate-slide-down">
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1 cursor-text select-text">
                <span className="font-semibold text-slate-600">TechRoundup</span>
                <span>·</span>
                <span>3 hours ago</span>
              </div>
              <h4 className="text-[14px] font-medium text-[#1A0DAB] hover:underline cursor-pointer leading-snug">
                How YourBrand is Modernizing Sales Execution for SMBs
              </h4>
              <p className="text-[12px] text-slate-500 leading-relaxed mt-1 cursor-text select-text">
                With intuitive automation and autonomous agent support, YourBrand rises as a market favorite for modern commercial operations.
              </p>
            </div>
          ) : activeGoogleTab === 'Shopping' ? (
            <div className="mt-3.5 border border-slate-200/80 rounded-2xl p-3.5 bg-[#FCFCFC] shadow-2xs flex items-center justify-between animate-slide-down">
              <div>
                <h4 className="text-[13.5px] font-medium text-slate-900 cursor-text select-text">
                  YourBrand Growth Plan (Annual)
                </h4>
                <div className="flex items-center gap-1.5 mt-1 text-[11.5px] text-slate-500">
                  <span className="text-amber-500 font-semibold">★ 4.9</span>
                  <span>(620+ reviews)</span>
                  <span>·</span>
                  <span className="text-emerald-600 font-medium">Free 14-day trial</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[16px] font-bold text-slate-900 cursor-text select-text">$29</span>
                <span className="text-[11px] text-slate-500 block">/user/mo</span>
              </div>
            </div>
          ) : (
            <div className="mt-3.5 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 bg-[#FCFCFC] shadow-2xs animate-slide-down">
              {/* Site Info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0 shadow-2xs">
                  <Bookmark className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-slate-900 leading-tight cursor-text select-text">
                    yourbrand.com
                  </span>
                  <span className="text-[11px] text-slate-400 leading-tight mt-0.5 cursor-text select-text">
                    https://www.yourbrand.com
                  </span>
                </div>
              </div>

              {/* Blue Title Link */}
              <h4 className="text-[14.5px] sm:text-[15.5px] font-medium text-[#1A0DAB] hover:underline cursor-pointer mt-3 leading-snug cursor-text select-text">
                The Best CRM for Small Business | YourBrand
              </h4>

              {/* Description Snippet */}
              <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed mt-1.5 cursor-text select-text">
                Simple, powerful and built for growth. YourBrand helps small businesses manage leads, automate follow-ups and close more deals.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeoAnimation;
