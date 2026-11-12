import React from 'react';
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
    viewBox="0 0 256 171"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="meta-official-grad" x1="13.878%" x2="89.144%" y1="55.934%" y2="58.694%">
        <stop offset="0%" stopColor="#0064E1" />
        <stop offset="40%" stopColor="#0064E1" />
        <stop offset="83%" stopColor="#0073EE" />
        <stop offset="100%" stopColor="#0082FB" />
      </linearGradient>
    </defs>
    <path
      fill="#0081FB"
      d="M27.651 112.136c0 9.775 2.146 17.28 4.95 21.82 3.677 5.947 9.16 8.466 14.751 8.466 7.211 0 13.808-1.79 26.52-19.372 10.185-14.092 22.186-33.874 30.26-46.275l13.675-21.01c9.499-14.591 20.493-30.811 33.1-41.806C161.196 4.985 172.298 0 183.47 0c18.758 0 36.625 10.87 50.3 31.257C248.735 53.584 256 81.707 256 110.729c0 17.253-3.4 29.93-9.187 39.946-5.591 9.686-16.488 19.363-34.818 19.363v-27.616c15.695 0 19.612-14.422 19.612-30.927 0-23.52-5.484-49.623-17.564-68.273-8.574-13.23-19.684-21.313-31.907-21.313-13.22 0-23.859 9.97-35.815 27.75-6.356 9.445-12.882 20.956-20.208 33.944l-8.066 14.289c-16.203 28.728-20.307 35.271-28.408 46.07-14.2 18.91-26.324 26.076-42.287 26.076-18.935 0-30.91-8.2-38.325-20.556C2.973 139.413 0 126.202 0 111.148l27.651.988Z"
    />
    <path
      fill="url(#meta-official-grad)"
      d="M21.802 33.206C34.48 13.666 52.774 0 73.757 0 85.91 0 97.99 3.597 110.605 13.897c13.798 11.261 28.505 29.805 46.853 60.368l6.58 10.967c15.881 26.459 24.917 40.07 30.205 46.49 6.802 8.243 11.565 10.7 17.752 10.7 15.695 0 19.612-14.422 19.612-30.927l24.393-.766c0 17.253-3.4 29.93-9.187 39.946-5.591 9.686-16.488 19.363-34.818 19.363-11.395 0-21.49-2.475-32.654-13.007-8.582-8.083-18.615-22.443-26.334-35.352l-22.96-38.352C118.528 64.08 107.96 49.73 101.845 43.23c-6.578-6.988-15.036-15.428-28.532-15.428-10.923 0-20.2 7.666-27.963 19.39L21.802 33.206Z"
    />
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

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: Home, active: true },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone, active: false },
  { id: 'ad-sets', label: 'Ad Sets', icon: LayoutGrid, active: false },
  { id: 'ads', label: 'Ads', icon: Tv, active: false },
  { id: 'audience', label: 'Audience', icon: Users, active: false },
  { id: 'reports', label: 'Reports', icon: BarChart2, active: false },
];

export const MetaAdsSection: React.FC = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 selection:bg-[#38BDF8]/20">
      <div className="max-w-[840px] w-full mx-auto">
        {/* Main Meta Ads Card */}
        <div className="w-full rounded-[22px] sm:rounded-[26px] bg-white border border-[#E2E8F0] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.09)]">
          {/* Card Top Header */}
          <div className="px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between border-b border-[#F1F5F9]">
            {/* Meta Brand Header with Accurate Meta Logo */}
            <div className="flex items-center gap-3">
              <MetaLogo className="w-7 h-[19px] sm:w-8 sm:h-[22px] shrink-0" />
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
                const isActive = item.active;

                return (
                  <div
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 select-none text-left ${
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
                  </div>
                );
              })}
            </div>

            {/* Right Content Panel */}
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] tracking-[-0.01em] leading-snug">
                  Explore How Competitors Win Attention Through Ads
                </h3>
                <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.65] font-normal max-w-[500px]">
                  Discover competitor advertising creatives, campaign strategies, audience engagement, and promotional messaging across Facebook and Instagram to understand what captures customer attention.
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
