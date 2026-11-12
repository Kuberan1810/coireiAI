import React from 'react';
import {
  Home,
  Megaphone,
  Layers,
  Image,
  Search,
  BarChart2,
} from 'lucide-react';

export const GoogleAdsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Blue capsule */}
    <path
      d="M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z"
      fill="#4285F4"
    />
    {/* Green capsule */}
    <path
      d="M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"
      fill="#34A853"
    />
    {/* Yellow circle */}
    <path
      d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998z"
      fill="#FBBC04"
    />
  </svg>
);

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: Home, active: true },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone, active: false },
  { id: 'ad-groups', label: 'Ad Groups', icon: Layers, active: false },
  { id: 'ads-assets', label: 'Ads & Assets', icon: Image, active: false },
  { id: 'keywords', label: 'Keywords', icon: Search, active: false },
  { id: 'reports', label: 'Reports', icon: BarChart2, active: false },
];

export const GoogleAdsSection: React.FC = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 selection:bg-[#38BDF8]/20">
      <div className="max-w-[840px] w-full mx-auto">
        {/* Main Google Ads Card */}
        <div className="w-full rounded-[22px] sm:rounded-[26px] bg-white border border-[#E2E8F0] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.09)]">
          {/* Card Top Header */}
          <div className="px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between border-b border-[#F1F5F9]">
            {/* Google Ads Brand Header */}
            <div className="flex items-center gap-3">
              <GoogleAdsIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
              <span className="text-[19px] sm:text-[21px] font-semibold text-[#0F172A] tracking-tight">
                Google Ads
              </span>
            </div>

            {/* Right Status Dot Badge */}
            <div className="w-8 h-8 rounded-full bg-[#E2E8F0]/70 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-2xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
              </div>
            </div>
          </div>

          {/* Card Body: Split Sidebar & Content */}
          <div className="flex flex-col sm:flex-row min-h-[300px]">
            {/* Left Navigation Sidebar */}
            <div className="w-full sm:w-[190px] md:w-[210px] shrink-0 border-b sm:border-b-0 sm:border-r border-[#F1F5F9] p-3 sm:p-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                const isActive = item.active;

                return (
                  <div
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 select-none text-left ${
                      isActive
                        ? 'bg-[#0066F6] text-white shadow-xs'
                        : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                    }`}
                  >
                    <IconComponent
                      size={17}
                      strokeWidth={isActive ? 2.2 : 1.9}
                      className={`shrink-0 transition-colors ${
                        isActive ? 'text-white' : 'text-[#64748B]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Right Content Panel */}
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] tracking-[-0.01em] leading-snug">
                  Understand Competitors on Google
                </h3>
                <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.65] font-normal max-w-[500px]">
                  Analyze competitor search and display advertising to understand how they capture demand, target keywords, and position their products across Google’s advertising network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsSection;

