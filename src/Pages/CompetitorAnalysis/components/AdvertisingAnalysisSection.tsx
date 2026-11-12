import React from 'react';
import newsreadingImg from '../../../assets/competitor/newsreadingimage.svg';
import googleLogoImg from '../../../assets/competitor/googlelogo.svg';
import metaLogoImg from '../../../assets/competitor/metalogo.svg';

export const AdvertisingAnalysisSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
          <span className="text-[13px] sm:text-[14px] font-semibold text-[#64748B] tracking-wide mb-3 block">
            Advertising Analysis
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.14] text-[#0F172A] tracking-[-0.03em] max-w-lg">
            Analyze How Competitors Win Customers Through Ads.
          </h2>
          <p className="mt-4 sm:mt-5 text-[14.5px] sm:text-[15.5px] text-[#64748B] leading-[1.65] font-normal max-w-md">
            Explore competitor advertising strategies across Meta and Google. Understand what they promote, how they communicate, which audiences they target, and how they attract potential customers.
          </p>
        </div>

        {/* Right Column: Visual Artwork (Scaled Down & Balanced) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-4 sm:py-6">
          <div className="relative w-[260px] sm:w-[290px] lg:w-[320px]">
            {/* Green Rounded Background Card */}
            <div className="w-full h-[385px] sm:h-[430px] lg:h-[474px] rounded-[22px] sm:rounded-[26px] bg-[#7CBF00] shadow-[0_16px_40px_rgba(124,191,0,0.16)]" />

            {/* Overlaid Newspaper Reading Illustration */}
            <div className="absolute -top-2.5 -left-2.5 sm:-top-3.5 sm:-left-4 w-[102%] h-[102%] pointer-events-none select-none flex items-center justify-center">
              <img
                src={newsreadingImg}
                alt="Competitor Advertising Analysis across Google Ads and Meta Ads"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating 3D Google Logo (Top-Left) */}
            <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 w-[70px] sm:w-[82px] lg:w-[92px] z-20 pointer-events-none select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:scale-105">
              <img
                src={googleLogoImg}
                alt="Google Ads"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating 3D Meta Logo (Bottom-Right) */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-[70px] sm:w-[82px] lg:w-[92px] z-20 pointer-events-none select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:scale-105">
              <img
                src={metaLogoImg}
                alt="Meta Ads"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingAnalysisSection;
