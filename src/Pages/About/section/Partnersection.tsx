import React from 'react';
import skillpointSvg from '../../../assets/about/collab/skillpoint.svg';
import networkSvg from '../../../assets/about/collab/network.svg';
import jeppiaarSvg from '../../../assets/about/collab/jeppiaar.svg';
import prodocSvg from '../../../assets/about/collab/prodoc.svg';
import techpanda from '../../../assets/about/collab/techpanda.webp';

const PARTNER_LOGOS = [
  {
    name: 'Skill Point',
    src: skillpointSvg,
    className: 'h-14 sm:h-[64px] w-auto object-contain max-w-[210px] sm:max-w-[240px]',
  },
  {
    name: 'Network Rhinos',
    src: networkSvg,
    className: 'h-12 sm:h-[54px] w-auto object-contain max-w-[280px] sm:max-w-[320px]',
  },
  {
    name: 'Jeppiaar',
    src: jeppiaarSvg,
    className: 'h-12 sm:h-[54px] w-auto object-contain max-w-[240px] sm:max-w-[280px]',
  },
  {
    name: 'Prodoc',
    src: prodocSvg,
    className: 'h-12 sm:h-[54px] w-auto object-contain max-w-[220px] sm:max-w-[260px]',
  },
  {
    name: 'Techpanda',
    src: techpanda,
    className: 'h-12 sm:h-[54px] w-auto object-contain max-w-[220px] sm:max-w-[260px]',
  },
];

// Duplicate for smooth 10-facet 3D cylinder wheel
const CYLINDER_FACETS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
const TOTAL_FACETS = CYLINDER_FACETS.length;
const RADIUS_PX = 190; // Cylinder 3D curve radius

export const Partnersection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
      <div className="max-w-[1216px] mx-auto">
        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-semibold tracking-[-0.8px] text-[#0B0F19] leading-[1.18] text-center max-w-[860px] mx-auto mb-6 sm:mb-8 md:mb-14">
          Partnering with innovators to turn intelligence into meaningful growth.
        </h2>

        {/* 2-Column Exact Alignment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Collaboration Text */}
          <div className="text-left max-w-lg md:pr-2">
            <h3 className="text-xl sm:text-[22px] md:text-[24px] font-semibold text-[#1A1C1C] tracking-tight mb-5 sm:mb-6">
              Collaboration with
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#555E6D] leading-[1.75] font-normal max-w-[480px]">
              We collaborate with forward-thinking teams, partners, and innovators to combine
              expertise, technology, and market intelligence—creating meaningful solutions that unlock
              new opportunities and drive sustainable growth.
            </p>
          </div>

          {/* Right Column: Centered 3D Cylinder Rotating Drum */}
          <div className="flex items-center justify-center w-full">
            <div className="relative h-[340px] sm:h-[380px] w-full max-w-[420px] overflow-hidden perspective-cylinder-stage flex items-center justify-center">
              {/* Top 3D Receding Fade Gradient Mask (matching screenshot where top curved logo fades into white) */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/85 to-transparent z-20" />

              {/* Bottom Soft Fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

              {/* 3D Cylinder Rotating Drum Container */}
              <div className="cylinder-3d-drum">
                {CYLINDER_FACETS.map((logo, idx) => {
                  const angle = idx * (360 / TOTAL_FACETS);
                  return (
                    <div
                      key={`facet-${idx}`}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                      style={{
                        transform: `rotateX(${angle}deg) translateZ(${RADIUS_PX}px)`,
                        WebkitTransform: `rotateX(${angle}deg) translateZ(${RADIUS_PX}px)`,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className={logo.className}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnersection;
