import React from 'react';
import firstMeetImg from '../../../assets/about/firstmeetimg.svg';
import secondMeetGreenShirt from '../../../assets/about/secondmeetgreenshirt.svg';
import thirdImageHall from '../../../assets/about/thirdimagehall.svg';
import ideathonImage from '../../../assets/about/ideathonimage.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const IdeasToImpact: React.FC = () => {
  return (
    <section className="w-full bg-white pt-8 sm:pt-14 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
      <div className="max-w-[1216px] mx-auto text-left">
        {/* Section Heading & Subtitle */}
        <ScrollReveal variant="fade-up" duration={700} distance={20}>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#0B0F19] tracking-[-1.2px] leading-[1.18] mb-3">
            From Ideas to Impact
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] font-normal leading-relaxed max-w-2xl mb-10 sm:mb-14">
            We believe meaningful innovation happens when technology, industry, and people come together.
          </p>
        </ScrollReveal>

        {/* Photo Mosaic / Collage matching Figma coordinates and dimensions */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[35px] mb-14 sm:mb-18 md:mb-20">
          {/* 1. Large Conference Hall Photo (Figma: 626px × 417px, radius 20px) */}
          <div className="w-full lg:w-[626px] shrink-0">
            <img
              src={firstMeetImg}
              alt="Conference Presentation and Industry Engagement"
              className="w-full h-auto block"
            />
          </div>

          {/* Middle & Right Cluster */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-[24px] w-full">
            {/* Middle Column: Two photos */}
            <div className="flex flex-col gap-5 sm:gap-6 w-full sm:w-[298px] shrink-0">
              {/* 2. Top Photo: Three people sitting (Figma: 289.8px × 193.26px, radius 20px, rotation built into SVG) */}
              <div className="w-full">
                <img
                  src={secondMeetGreenShirt}
                  alt="Discussion and collaboration"
                  className="w-full h-auto block"
                />
              </div>

              {/* 3. Bottom Photo: Crowd in hall (radius 30px built into SVG) */}
              <div className="w-full">
                <img
                  src={thirdImageHall}
                  alt="Community Gathering"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* 4. Right Photo: Ideathon (Figma: 243.33px × 227.74px, radius 30px, rotation built into SVG) */}
            <div className="w-full sm:w-[255px] shrink-0 self-center sm:mt-10 lg:mt-16">
              <img
                src={ideathonImage}
                alt="Ideathon Team"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Bottom 3 Feature Columns Card (Figma: 01, 02, 03 - Fill: #F9F8F6, Height: 308px, Padding: 40px, White gap between) */}
        <div className="w-full rounded-[24px] overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white">
            {/* 01 Industry Engagement */}
            <div className="bg-[#F9F8F6] p-8 sm:p-10 lg:p-[40px] flex flex-col justify-start min-h-[260px] md:min-h-[308px] text-left">
              <span className="block text-4xl sm:text-5xl font-light text-[#CBD5E1] mb-7 select-none font-['Plus_Jakarta_Sans',sans-serif]">
                01
              </span>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#0B0F19] tracking-tight mb-3">
                Industry Engagement
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] font-normal leading-relaxed">
                Partnering with enterprise leaders to bridge frontier AI capabilities with real-world commercial challenges and sustainable growth.
              </p>
            </div>

            {/* 02 Knowledge Exchange */}
            <div className="bg-[#F9F8F6] p-8 sm:p-10 lg:p-[40px] flex flex-col justify-start min-h-[260px] md:min-h-[308px] text-left">
              <span className="block text-4xl sm:text-5xl font-light text-[#CBD5E1] mb-7 select-none font-['Plus_Jakarta_Sans',sans-serif]">
                02
              </span>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#0B0F19] tracking-tight mb-3">
                Knowledge Exchange
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] font-normal leading-relaxed">
                Mentoring and empowering emerging builders through hands-on ideathons, technical workshops, and practical playbooks.
              </p>
            </div>

            {/* 03 Community Impact */}
            <div className="bg-[#F9F8F6] p-8 sm:p-10 lg:p-[40px] flex flex-col justify-start min-h-[260px] md:min-h-[308px] text-left">
              <span className="block text-4xl sm:text-5xl font-light text-[#CBD5E1] mb-7 select-none font-['Plus_Jakarta_Sans',sans-serif]">
                03
              </span>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#0B0F19] tracking-tight mb-3">
                Community Impact
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] font-normal leading-relaxed">
                Cultivating open tech ecosystems and enduring partnerships that turn ambitious ideas into meaningful, long-term impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeasToImpact;
