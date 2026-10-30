import React, { useState, useEffect } from 'react';

export const PhoneAutomatedMarketingGraphic: React.FC = () => {
  const [isPopped, setIsPopped] = useState(false);

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
      }, 300);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-[280px] flex flex-col items-center">
      {/* Phone Outer Bezel: Top rounded, bottom completely flat (half phone screen matching Content Creation) */}
      <div className="w-[242px] h-[220px] sm:h-[230px] bg-[#090A09] pt-[5px] px-[5px] pb-0 rounded-t-[24px] rounded-b-none border-t-[0.6px] border-x-[0.6px] border-b-0 border-[#A5A5A0] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col">
        {/* Phone Screen Container: Flat bottom */}
        <div className="w-full flex-1 bg-[#FAFAFA] rounded-t-[19px] rounded-b-none p-2.5 sm:p-3 pb-6 text-left relative overflow-hidden flex flex-col justify-start">
          {/* Status Bar: Time, Dynamic Island, Signal/Wifi/Battery */}
          <div className="relative w-full flex items-center justify-between px-1 mb-2 shrink-0">
            {/* Left: Time */}
            <span className="text-[10px] font-semibold text-gray-900 tracking-tight shrink-0">9:41</span>

            {/* Dynamic Island: Exactly centered */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-13 h-3.5 bg-black rounded-full pointer-events-none" />

            {/* Right: Signal, Wi-Fi & Battery Icons */}
            <div className="flex items-center gap-1 shrink-0">
              <svg className="w-3 h-2 fill-gray-900" viewBox="0 0 17 11">
                <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
                <rect x="4.5" y="5.5" width="2.5" height="5.5" rx="0.5" />
                <rect x="9" y="3" width="2.5" height="8" rx="0.5" />
                <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" />
              </svg>
              <svg className="w-3 h-2 fill-gray-900" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
              </svg>
              <div className="flex items-center">
                <div className="w-[16px] h-[8px] rounded-[2.5px] border-[1.2px] border-gray-900 p-[1px] flex items-center">
                  <div className="w-[10px] h-[4px] bg-gray-900 rounded-[1px]" />
                </div>
                <div className="w-[1.2px] h-[3px] bg-gray-900 rounded-r-[0.5px]" />
              </div>
            </div>
          </div>

          {/* Greeting & Date */}
          <div className="mb-2 shrink-0">
            <p className="text-[8px] text-gray-400 font-medium">Thu, 24 February</p>
            <h4 className="text-[11px] font-bold text-gray-900 leading-snug">
              Good morning, Rona 👋
            </h4>
          </div>

          {/* Social Campaigns Card */}
          <div className="w-full bg-white rounded-[6px] border border-gray-100/90 p-2 sm:p-2.5 shadow-2xs mb-2 shrink-0">
            {/* Header: 3 overlapping social icons + Title & Subtitle */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center -space-x-1.5 shrink-0">
                {/* Instagram */}
                <div
                  className="w-4.5 h-4.5 rounded-full flex items-center justify-center p-[2px] shadow-xs z-30"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  }}
                >
                  <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className="w-4.5 h-4.5 rounded-full bg-[#0A66C2] flex items-center justify-center p-[2px] shadow-xs z-20">
                  <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </div>
                {/* Facebook */}
                <div className="w-4.5 h-4.5 rounded-full bg-[#1877F2] flex items-center justify-center p-[2px] shadow-xs z-10">
                  <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-[9.5px] font-bold text-gray-900 leading-tight">Social Campaigns</p>
                <p className="text-[7px] text-gray-400">Brand Growth</p>
              </div>
            </div>

            {/* 3 Metric Columns: Reach, Engagement, Leads */}
            <div className="grid grid-cols-3 gap-1 pt-1">
              <div className="bg-[#F8F9FA] rounded-[3px] p-1 text-left">
                <p className="text-[6.5px] text-gray-400 font-medium">Reach</p>
                <p className="text-[10px] font-bold text-gray-900 leading-tight">24.8K</p>
              </div>
              <div className="bg-[#F8F9FA] rounded-[3px] p-1 text-left">
                <p className="text-[6.5px] text-gray-400 font-medium">Engagement</p>
                <p className="text-[10px] font-bold text-gray-900 leading-tight">8.6%</p>
              </div>
              <div className="bg-[#F8F9FA] rounded-[3px] p-1 text-left">
                <p className="text-[6.5px] text-gray-400 font-medium">Leads</p>
                <p className="text-[10px] font-bold text-gray-900 leading-tight">142</p>
              </div>
            </div>
          </div>

          {/* TOP PERFORMING: LinkedIn Campaign */}
          <div className="shrink-0 w-full">
            <p className="text-[7px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              TOP PERFORMING
            </p>
            <div className="bg-white rounded-[4px] p-1.5 shadow-2xs border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2]">
                  <svg className="w-2.5 h-2.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </div>
                <span className="text-[8.5px] font-medium text-gray-700">LinkedIn Campaign</span>
              </div>
              <div className="flex items-center gap-0.5 text-[#10B981] font-semibold text-[8px]">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <span>+32%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Popup Notification - Campaign reach 24,860 */}
      <div
        className={`absolute -right-2 sm:-right-6 top-8 sm:top-10 bg-white/95 backdrop-blur-md rounded-[10px] p-2 sm:p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center gap-2 z-30 transition-all duration-500 ease-out ${
          isPopped
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-2 scale-95'
        }`}
      >
        <div className="w-8 h-8 rounded-[8px] bg-[#FEECEB] flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-[#E15241]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.114-1.53-.44a22.25 22.25 0 01-2.115-5.974m3.78-7.44c.253-.962.584-1.892.985-2.783a1.125 1.125 0 011.511-.463l.657.38c.551.318.755 1.027.44 1.53a22.25 22.25 0 01-2.115 5.974m-1.478-4.638a48.567 48.567 0 015.656.76m-5.656 7.64a48.567 48.567 0 005.656-.76m3.34-3.06a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <p className="text-[8px] text-gray-500 font-medium leading-tight">Campaign reach</p>
          <p className="text-[13px] font-bold text-gray-900 leading-tight">24,860</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneAutomatedMarketingGraphic;

