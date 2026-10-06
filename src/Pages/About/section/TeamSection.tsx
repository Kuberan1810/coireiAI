import React from 'react';
import naveenImg from '../../../assets/about/naveen.png';
import lalithaImg from '../../../assets/about/lalitha.svg';
import kuberanImg from '../../../assets/about/kuberan.jpg';
import niranjanImg from '../../../assets/about/niranjan.jpg';
import aravindImg from '../../../assets/about/aravind.svg';
import rajdeepImg from '../../../assets/about/rajdeep.svg';
import pradeepImg from '../../../assets/about/pradeep.png';

export const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#F1F5F9]">
      <div className="max-w-[1216px] mx-auto">
        {/* Outer Grid Container with Rounded Corners */}
        <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-white shadow-xs border border-[#EEF3FA]">
          {/* Desktop & Tablet Grid (3 columns, 3 rows matching exact Figma layout) */}
          <div className="hidden md:grid grid-cols-3  bg-white">
            {/* ROW 1 */}
            {/* Row 1, Col 1: Naveen (Top-Left rounded) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={naveenImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Row 1, Col 2: Lalitha (Top-Center) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={lalithaImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Row 1, Col 3: Kuberan (Top-Right rounded) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={kuberanImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* ROW 2 */}
            {/* Row 2, Col 1: Niranjan (Middle-Left) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={niranjanImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Row 2, Col 2 & 3: Meet our Team Content Box (Spans 2 columns) */}
            <div className="col-span-2 relative w-full aspect-[828/300] bg-white flex flex-col justify-center px-8 lg:px-14 py-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#0B0F19] tracking-tight leading-[1.2] mb-3 sm:mb-4">
                Meet our Team
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#475569] leading-[1.65] font-normal max-w-xl">
                Meet the team behind Coirei—bringing together AI, product, design, and growth
                expertise to turn complex market intelligence into simple, actionable opportunities.
              </p>
            </div>

            {/* ROW 3 */}
            {/* Row 3, Col 1: Aravind (Bottom-Left rounded) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={aravindImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Row 3, Col 2: Rajdeep (Bottom-Center) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={rajdeepImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Row 3, Col 3: Pradeep (Bottom-Right rounded) */}
            <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
              <img
                src={pradeepImg}
                alt="Team member"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile & Small Screen Responsive Layout (< md) */}
          <div className="md:hidden flex flex-col bg-white">
            {/* Meet our Team heading at top on mobile */}
            <div className="p-6 sm:p-8 text-left border-b border-[#EEF3FA]">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0F19] tracking-tight leading-[1.2] mb-3">
                Meet our Team
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                Meet the team behind Coirei—bringing together AI, product, design, and growth
                expertise to turn complex market intelligence into simple, actionable opportunities.
              </p>
            </div>

            {/* Team Members Grid for Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[2px] bg-white">
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
                <img src={naveenImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
                <img src={lalithaImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
                <img src={kuberanImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
                <img src={niranjanImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
                <img src={aravindImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF]">
                <img src={rajdeepImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF] col-span-2 sm:col-span-1">
                <img src={pradeepImg} alt="Team member" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
