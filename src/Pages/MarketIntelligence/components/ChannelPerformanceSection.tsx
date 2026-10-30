import React from 'react';
import instagramCard from '../../../assets/market/instagramcardchannel.svg';
import linkedinCard from '../../../assets/market/linkedincardchannel.svg';
import whatsappCard from '../../../assets/market/whatsappcardchannel.svg';
import emailCard from '../../../assets/market/emailcardchannel.svg';

export const ChannelPerformanceSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Introductory Statement */}
      <div className="max-w-4xl mx-auto text-center mt-20 sm:mt-28 mb-14 sm:mb-20 px-4">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[22px] sm:text-[28px] lg:text-[34px] leading-[1.3] text-[#71717A] max-w-[860px] mx-auto tracking-[-0.02em]">
          <span className="font-bold text-[#0D0D0D]">Turn your SEO and AEO</span> strategy into a powerful growth engine that helps your brand rank higher, get discovered faster, and reach the right audience across every search experience.
        </p>
      </div>

      {/* 2. Channel Performance Showcase Grid */}
      <div className="max-w-[1240px] mx-auto mb-16 sm:mb-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[48px] text-[#0D0D0D] leading-[1.12] tracking-tight mb-4 sm:mb-5">
              Know where your
              <br />
              message will perform.
            </h2>
            <p className="font-['Manrope',sans-serif] text-[14px] sm:text-[15px] text-[#71717A] leading-[25px] max-w-[440px]">
              Discover the best channels for your message by analyzing audience engagement, search demand, and content opportunities to maximize your marketing impact.
            </p>
          </div>

          {/* Right Column: 4 Channel Cards Quadrant */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[640px] aspect-[519/327] select-none">
              {/* Top-Left: Instagram */}
              <img
                src={instagramCard}
                alt="Instagram"
                className="absolute left-0 top-0 w-[53.8%] h-auto object-contain"
              />

              {/* Top-Right: LinkedIn */}
              <img
                src={linkedinCard}
                alt="LinkedIn"
                className="absolute right-0 top-0 w-[61.3%] h-auto object-contain"
              />

              {/* Bottom-Left: Email */}
              <img
                src={emailCard}
                alt="Email"
                className="absolute left-0 bottom-0 w-[53.8%] h-auto object-contain"
              />

              {/* Bottom-Right: WhatsApp */}
              <img
                src={whatsappCard}
                alt="WhatsApp"
                className="absolute right-0 bottom-0 w-[60.7%] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPerformanceSection;

