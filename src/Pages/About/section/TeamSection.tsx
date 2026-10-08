import React, { useState } from 'react';
import naveenImg from '../../../assets/about/naveen.jpg';
import lalithaImg from '../../../assets/about/lalitha.svg';
import kuberanImg from '../../../assets/about/kuberan.jpg';
import niranjanImg from '../../../assets/about/niranjan.jpg';
import vijiImg from '../../../assets/about/viji.jpg';
import rajdeepImg from '../../../assets/about/rajdeep.svg';
import pradeepImg from '../../../assets/about/pradeep.png';
import aravindImg from '../../../assets/about/aravind.svg';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  className?: string;
  isRevealed?: boolean;
  onToggle?: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  image,
  className = '',
  isRevealed = false,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      className={`group relative w-full aspect-[413/300] overflow-hidden bg-[#9CA3AF] cursor-pointer select-none active:scale-[0.99] transition-transform duration-200 ${className}`}
    >
      {/* Member Photo */}
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover object-center block select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 ${
          isRevealed ? 'scale-105' : 'scale-100'
        }`}
        loading="lazy"
      />

      {/* Frosted Glass Text Reveal Overlay (Hover on Desktop, Tap/Click on Mobile) */}
      <div
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-5 bg-black/50 backdrop-blur-md border-t border-white/15 flex flex-col justify-end text-left transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 select-none ${
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <h3 className="text-white text-[12px] sm:text-[15px] lg:text-[16px] font-bold tracking-[0.04em] sm:tracking-[0.05em] uppercase leading-tight">
          {name}
        </h3>
        <p className="text-white/85 text-[10px] sm:text-[11.5px] lg:text-[12px] font-medium tracking-[0.06em] uppercase mt-0.5 sm:mt-1 leading-snug">
          {role}
        </p>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveMember((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#F1F5F9]">
      <div className="max-w-[1216px] mx-auto">
        {/* Outer Grid Container with Rounded Corners */}
        <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-white shadow-xs border border-[#EEF3FA]">
          {/* Desktop & Tablet Grid (3 columns, 3 rows matching exact Figma layout) */}
          <div className="hidden md:grid grid-cols-3 bg-white">
            {/* ROW 1 */}
            {/* Row 1, Col 1: Naveen */}
            <MemberCard
              name="NAVEENKUMAR S"
              role="FOUNDER & CEO"
              image={naveenImg}
              isRevealed={activeMember === 'desktop-naveen'}
              onToggle={() => handleToggle('desktop-naveen')}
            />

            {/* Row 1, Col 2: Lalitha */}
            <MemberCard
              name="KATTIMANI LALITHA BHAI"
              role="COO & CO-FOUNDER"
              image={lalithaImg}
              isRevealed={activeMember === 'desktop-lalitha'}
              onToggle={() => handleToggle('desktop-lalitha')}
            />

            {/* Row 1, Col 3: Kuberan */}
            <MemberCard
              name="KUBERAN S"
              role="LEAD FRONTEND DEVELOPER"
              image={kuberanImg}
              isRevealed={activeMember === 'desktop-kuberan'}
              onToggle={() => handleToggle('desktop-kuberan')}
            />

            {/* ROW 2 */}
            {/* Row 2, Col 1: Niranjan */}
            <MemberCard
              name="NIRANJAN U S"
              role="AI ENGINEER"
              image={niranjanImg}
              isRevealed={activeMember === 'desktop-niranjan'}
              onToggle={() => handleToggle('desktop-niranjan')}
            />

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
            {/* Row 3, Col 1: Vijalakshmi */}
            <MemberCard
              name="VIJALAKSHMI"
              role="AI ENGINEER"
              image={vijiImg}
              isRevealed={activeMember === 'desktop-viji'}
              onToggle={() => handleToggle('desktop-viji')}
            />

            {/* Row 3, Col 2: Rajdeep */}
            <MemberCard
              name="RAJDEEP KULKARNI"
              role="LEAD ENGINEER"
              image={rajdeepImg}
              isRevealed={activeMember === 'desktop-rajdeep'}
              onToggle={() => handleToggle('desktop-rajdeep')}
            />

            {/* Row 3, Col 3: Pradeep */}
            <MemberCard
              name="PRADEEP"
              role="LEAD ENGINEER"
              image={pradeepImg}
              isRevealed={activeMember === 'desktop-pradeep'}
              onToggle={() => handleToggle('desktop-pradeep')}
            />
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

            {/* Team Members Grid for Mobile (Symmetrical 8-Card Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-[2px] bg-white">
              <MemberCard
                name="NAVEENKUMAR S"
                role="FOUNDER & CEO"
                image={naveenImg}
                isRevealed={activeMember === 'mobile-naveen'}
                onToggle={() => handleToggle('mobile-naveen')}
              />
              <MemberCard
                name="KATTIMANI LALITHA BHAI"
                role="COO & CO-FOUNDER"
                image={lalithaImg}
                isRevealed={activeMember === 'mobile-lalitha'}
                onToggle={() => handleToggle('mobile-lalitha')}
              />
              <MemberCard
                name="KUBERAN S"
                role="LEAD FRONTEND DEVELOPER"
                image={kuberanImg}
                isRevealed={activeMember === 'mobile-kuberan'}
                onToggle={() => handleToggle('mobile-kuberan')}
              />
              <MemberCard
                name="NIRANJAN U S"
                role="AI ENGINEER"
                image={niranjanImg}
                isRevealed={activeMember === 'mobile-niranjan'}
                onToggle={() => handleToggle('mobile-niranjan')}
              />
              <MemberCard
                name="VIJALAKSHMI"
                role="AI ENGINEER"
                image={vijiImg}
                isRevealed={activeMember === 'mobile-viji'}
                onToggle={() => handleToggle('mobile-viji')}
              />
              <MemberCard
                name="RAJDEEP KULKARNI"
                role="LEAD ENGINEER"
                image={rajdeepImg}
                isRevealed={activeMember === 'mobile-rajdeep'}
                onToggle={() => handleToggle('mobile-rajdeep')}
              />
              <MemberCard
                name="ARAVIND A"
                role="FRONTEND DEVELOPER "
                image={aravindImg}
                isRevealed={activeMember === 'mobile-aravind'}
                onToggle={() => handleToggle('mobile-aravind')}
              />
              <MemberCard
                name="PRADEEP"
                role="LEAD ENGINEER"
                image={pradeepImg}
                isRevealed={activeMember === 'mobile-pradeep'}
                onToggle={() => handleToggle('mobile-pradeep')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
