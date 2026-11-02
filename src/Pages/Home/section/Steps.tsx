import React, { useEffect, useRef } from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

// SVGs from Downloads
import bgForThem from '../../../assets/home/BGforthem.webp';
import websiteAnalysisCard from '../../../assets/home/websiteanalysiscard.webp';
import haveWeAnalysed from '../../../assets/home/haveweanalysed.webp';
import websiteAnalysisCsv from '../../../assets/home/websiteanalysiscsv.webp';
import icpMatch from '../../../assets/home/ICPmatch.png';
import icpOverview from '../../../assets/home/icpoverview.png';

interface StepCardItem {
  id: 'understand' | 'analyse' | 'find';
  title: string;
  description: string;
}

const STEP_CARDS: StepCardItem[] = [
  {
    id: 'understand',
    title: 'Understand',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience,',
  },
  {
    id: 'analyse',
    title: 'Analyse',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience, positioning, and what makes you different',
  },
  {
    id: 'find',
    title: 'Find',
    description:
      'We identify your ideal customer profiles (ICP), uncovering high-intent accounts, buyer personas, and verified decision-makers.',
  },
];

export const Steps: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1TopRef = useRef<HTMLDivElement>(null);
  const card1BtmRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3MatchRef = useRef<HTMLDivElement>(null);
  const card3OverviewRef = useRef<HTMLDivElement>(null);

  // Non-bouncing, very minute scroll movement: smooth glide with zero bounce / zero overshoot
  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let targetOffset = 0;
    let currentOffset = 0;
    let isTicking = false;
    let animId: number;

    const updatePhysics = () => {
      // Smooth linear interpolation with decay (critically damped - no bounce or oscillation)
      currentOffset += (targetOffset - currentOffset) * 0.12;
      targetOffset *= 0.88;

      // Very minute displacement (~1.5px to 2.5px max) without rotation
      if (card1TopRef.current) {
        card1TopRef.current.style.transform = `translate3d(0, ${(currentOffset * 0.6).toFixed(2)}px, 0)`;
      }
      if (card1BtmRef.current) {
        card1BtmRef.current.style.transform = `translate3d(0, ${(currentOffset * 0.9).toFixed(2)}px, 0)`;
      }
      if (card2Ref.current) {
        card2Ref.current.style.transform = `translate3d(0, ${(currentOffset * 0.75).toFixed(2)}px, 0)`;
      }
      if (card3MatchRef.current) {
        card3MatchRef.current.style.transform = `translate3d(0, ${(currentOffset * 0.65).toFixed(2)}px, 0)`;
      }
      if (card3OverviewRef.current) {
        card3OverviewRef.current.style.transform = `translate3d(0, ${(currentOffset * 1.0).toFixed(2)}px, 0)`;
      }

      // Continue animating until settled
      if (Math.abs(currentOffset) > 0.03 || Math.abs(targetOffset) > 0.03) {
        animId = requestAnimationFrame(updatePhysics);
      } else {
        isTicking = false;
        currentOffset = 0;
        targetOffset = 0;
        if (card1TopRef.current) card1TopRef.current.style.transform = 'translate3d(0, 0, 0)';
        if (card1BtmRef.current) card1BtmRef.current.style.transform = 'translate3d(0, 0, 0)';
        if (card2Ref.current) card2Ref.current.style.transform = 'translate3d(0, 0, 0)';
        if (card3MatchRef.current) card3MatchRef.current.style.transform = 'translate3d(0, 0, 0)';
        if (card3OverviewRef.current) card3OverviewRef.current.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Very minute impulse: clamped to max 2.5px shift
      const clampedDelta = Math.max(Math.min(delta, 12), -12);
      targetOffset += clampedDelta * 0.1;
      targetOffset = Math.max(Math.min(targetOffset, 2.5), -2.5);

      if (!isTicking) {
        isTicking = true;
        animId = requestAnimationFrame(updatePhysics);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="steps-section"
      data-custom-padding
      ref={sectionRef}
      className="w-full bg-white pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-t border-[#F1F5F9]"
    >
      <style>{`
        @keyframes levitateCard1A {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes levitateCard1B {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(2px);
          }
        }

        @keyframes levitateCard2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2.5px);
          }
        }

        @keyframes levitateCard3Match {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-1.8px);
          }
        }

        @keyframes levitateCard3Overview {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(2.5px);
          }
        }
      `}</style>
      <div className="max-w-[1284px] mx-auto w-full">
        {/* Section Heading */}
        <ScrollReveal variant="fade-up" duration={650} distance={20}>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-semibold text-[#0B0F19] tracking-[-1.2px] leading-[1.2] mb-8 sm:mb-12 text-left cursor-text select-text">
            From Understanding to Execution.
          </h2>
        </ScrollReveal>

        {/* 3-Column Unified Container Matching Figma Specs (1284px width, border 1px #E5E5E5) */}
        <ScrollReveal variant="fade-up" duration={650} distance={24}>
          <div className="w-full bg-white border-t border-l border-r border-[#E5E5E5] border-b border-[#E5E5E5] rounded-[20px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5] w-full">
              {STEP_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="p-5 sm:p-6 lg:p-7 flex flex-col justify-start text-left bg-white transition-all duration-300"
                >
                  {/* Top Illustration Box with BGforthem background */}
                  <div className="relative w-full aspect-[370/330] sm:aspect-[380/340] overflow-hidden rounded-[16px] border border-[#F1F5F9] flex items-center justify-center select-none bg-[#FAFBFF]">
                    {/* Background SVG: BGforthem */}
                    <img
                      src={bgForThem}
                      alt="Background glow"
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />

                    {/* Card 1 Visual: website_analysis + have_we_analysed */}
                    {card.id === 'understand' && (
                      <div className="relative w-full h-full flex flex-col items-start justify-center px-4 sm:px-6 py-4 gap-3.5 sm:gap-4">
                        <div
                          ref={card1TopRef}
                          className="w-full flex justify-center will-change-transform"
                        >
                          <img
                            src={websiteAnalysisCard}
                            alt="Website Analysis"
                            className="w-[84%] max-w-[270px] self-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.05)] relative z-10 select-none pointer-events-none will-change-transform"
                            style={{
                              animation: 'levitateCard1A 4.6s ease-in-out infinite',
                            }}
                            loading="lazy"
                          />
                        </div>
                        <div
                          ref={card1BtmRef}
                          className="w-full will-change-transform"
                        >
                          <img
                            src={haveWeAnalysed}
                            alt="Have we analysed all pages?"
                            className="w-[72%] max-w-[225px] ml-1 sm:ml-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] relative z-20 select-none pointer-events-none will-change-transform"
                            style={{
                              animation: 'levitateCard1B 3.8s ease-in-out infinite',
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Card 2 Visual: website_analysis.csv */}
                    {card.id === 'analyse' && (
                      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
                        <div
                          ref={card2Ref}
                          className="w-full flex justify-center will-change-transform"
                        >
                          <img
                            src={websiteAnalysisCsv}
                            alt="Website Analysis CSV"
                            className="w-[86%] max-w-[275px] drop-shadow-[0_6px_20px_rgba(0,0,0,0.06)] relative z-10 select-none pointer-events-none will-change-transform"
                            style={{
                              animation: 'levitateCard2 5.0s ease-in-out infinite',
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Card 3 Visual: ICPmatch + ICPoverview */}
                    {card.id === 'find' && (
                      <div
                        className="relative w-full h-full flex items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4"
                      >
                        <div
                          ref={card3MatchRef}
                          className="w-[62%] max-w-[204px] shrink-0 will-change-transform flex justify-center"
                        >
                          <img
                            src={icpMatch}
                            alt="ICP Match"
                            className="w-full h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] z-10 select-none pointer-events-none shrink-0 will-change-transform"
                            style={{
                              animation: 'levitateCard3Match 4.2s ease-in-out infinite',
                            }}
                            loading="lazy"
                          />
                        </div>
                        <div
                          ref={card3OverviewRef}
                          className="w-[28.5%] max-w-[94px] shrink-0 will-change-transform flex justify-center"
                        >
                          <img
                            src={icpOverview}
                            alt="ICP Overview"
                            className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.10)] z-20 select-none pointer-events-none shrink-0 will-change-transform"
                            style={{
                              animation: 'levitateCard3Overview 3.6s ease-in-out infinite',
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#111827] tracking-tight mt-6 sm:mt-7 mb-2.5 leading-snug cursor-text select-text">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#64748B] font-normal leading-[1.6] cursor-text select-text">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Steps;
