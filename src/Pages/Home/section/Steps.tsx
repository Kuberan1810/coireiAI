import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

// SVGs from Downloads
import bgForThem from '../../../assets/home/BGforthem.svg';
import websiteAnalysisCard from '../../../assets/home/websiteanalysiscard.svg';
import haveWeAnalysed from '../../../assets/home/haveweanalysed.svg';
import websiteAnalysisCsv from '../../../assets/home/websiteanalysiscsv.svg';
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
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="steps-section"
      data-custom-padding
      ref={sectionRef}
      className="w-full bg-white pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-t border-[#F1F5F9]"
    >
      <style>{`
        @keyframes realalignUnderstandTop {
          0% {
            transform: translateY(-6px) rotate(-1.2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes realignUnderstandBottom {
          0% {
            transform: translateY(8px) translateX(5px) rotate(1.8deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }

        @keyframes realignAnalyse {
          0% {
            transform: translateY(-6px) rotate(1.2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes realignFindMatch {
          0% {
            transform: translateY(-4px) rotate(-1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes realignFindOverview {
          0% {
            transform: translateY(-6px) translateX(4px) rotate(2.5deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
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
                  className="p-5 sm:p-6 lg:p-7 flex flex-col justify-start text-left bg-white"
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
                        <img
                          src={websiteAnalysisCard}
                          alt="Website Analysis"
                          className="w-[84%] max-w-[270px] self-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.05)] relative z-10 select-none pointer-events-none"
                          style={
                            shouldAnimate
                              ? {
                                  animation:
                                    'realignUnderstandTop 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                                }
                              : {
                                  transform: 'translateY(-6px) rotate(-1.2deg)',
                                }
                          }
                          loading="lazy"
                        />
                        <img
                          src={haveWeAnalysed}
                          alt="Have we analysed all pages?"
                          className="w-[72%] max-w-[225px] ml-1 sm:ml-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] relative z-20 select-none pointer-events-none"
                          style={
                            shouldAnimate
                              ? {
                                  animation:
                                    'realignUnderstandBottom 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                                }
                              : {
                                  transform:
                                    'translateY(8px) translateX(5px) rotate(1.8deg)',
                                }
                          }
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Card 2 Visual: website_analysis.csv */}
                    {card.id === 'analyse' && (
                      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
                        <img
                          src={websiteAnalysisCsv}
                          alt="Website Analysis CSV"
                          className="w-[86%] max-w-[275px] drop-shadow-[0_6px_20px_rgba(0,0,0,0.06)] relative z-10 select-none pointer-events-none"
                          style={
                            shouldAnimate
                              ? {
                                  animation:
                                    'realignAnalyse 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                                }
                              : {
                                  transform: 'translateY(-6px) rotate(1.2deg)',
                                }
                          }
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Card 3 Visual: ICPmatch + ICPoverview */}
                    {card.id === 'find' && (
                      <div
                        className="relative w-full h-full flex items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4"
                      >
                        <img
                          src={icpMatch}
                          alt="ICP Match"
                          className="w-[62%] max-w-[204px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] z-10 select-none pointer-events-none shrink-0"
                          style={
                            shouldAnimate
                              ? {
                                  animation:
                                    'realignFindMatch 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                                }
                              : {
                                  transform: 'translateY(-4px) rotate(-1deg)',
                                }
                          }
                          loading="lazy"
                        />
                        <img
                          src={icpOverview}
                          alt="ICP Overview"
                          className="w-[28.5%] max-w-[94px] h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.10)] z-20 select-none pointer-events-none shrink-0"
                          style={
                            shouldAnimate
                              ? {
                                  animation:
                                    'realignFindOverview 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                                }
                              : {
                                  transform:
                                    'translateY(-6px) translateX(4px) rotate(2.5deg)',
                                }
                          }
                          loading="lazy"
                        />
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
