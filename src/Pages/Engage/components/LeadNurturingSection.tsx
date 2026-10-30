import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import smartFrequencySvg from '../../../assets/engage/smartfrequency.svg';
import img01 from '../../../assets/engage/01.svg';
import img03 from '../../../assets/engage/03.svg';
import img04 from '../../../assets/engage/04.svg';

interface NurtureCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const NURTURE_CARDS: NurtureCardItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Intent-Based Messaging',
    description: "Relevant messages based on each lead's interests and buying signals.",
    image: img01,
  },
  {
    id: '02',
    number: '02',
    title: 'Smart Frequency Control',
    description:
      'Optimal message timing and frequency limits prevent spam fatigue, maintain engagement, and protect deliverability.',
    image: smartFrequencySvg,
  },
  {
    id: '03',
    number: '03',
    title: 'Unified Conversations',
    description: 'Cooldowns and follow-up limits prevent excessive messaging.',
    image: img03,
  },
  {
    id: '04',
    number: '04',
    title: 'Consent & Spam Protection',
    description: 'Respect opt-outs, check permissions, and monitor delivery quality.',
    image: img04,
  },
];

export const LeadNurturingSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCardId, setActiveCardId] = useState<string>('02');
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isHoveringRef = useRef(false);
  const animFrameIdRef = useRef<number | null>(null);
  const idleCenterRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const posRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0 });

  // Update idle button center once on enter or resize (eliminates layout thrashing)
  const updateIdleCenter = () => {
    if (!buttonRef.current) return;
    const idleContainer = buttonRef.current.parentElement;
    if (!idleContainer) return;
    const rect = idleContainer.getBoundingClientRect();
    idleCenterRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  };

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const startAnimationLoop = () => {
    if (animFrameIdRef.current) return;

    const tick = () => {
      if (!isHoveringRef.current) {
        animFrameIdRef.current = null;
        return;
      }

      // Smooth physics lerp
      posRef.current.currentX += (posRef.current.targetX - posRef.current.currentX) * 0.22;
      posRef.current.currentY += (posRef.current.targetY - posRef.current.currentY) * 0.22;

      if (buttonRef.current) {
        buttonRef.current.style.transform = `translate3d(${posRef.current.currentX.toFixed(2)}px, ${posRef.current.currentY.toFixed(2)}px, 0px) scale(1.05)`;
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    updateIdleCenter();
    if (buttonRef.current) {
      // Must have pointerEvents = none during follow so cursor never collides with button!
      buttonRef.current.style.pointerEvents = 'none';
      buttonRef.current.style.zIndex = '50';
      buttonRef.current.style.boxShadow = '0 12px 30px -4px rgba(0, 0, 0, 0.28)';
      buttonRef.current.style.transition = 'box-shadow 0.2s';
    }
    startAnimationLoop();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoveringRef.current) return;
    const dx = e.clientX - idleCenterRef.current.x;
    const dy = e.clientY - idleCenterRef.current.y - 26;

    posRef.current.targetX = dx;
    posRef.current.targetY = dy;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent false triggers when moving between child cards
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }

    isHoveringRef.current = false;
    setActiveCardId('02');

    // Cancel RAF loop
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }

    posRef.current.currentX = 0;
    posRef.current.currentY = 0;
    posRef.current.targetX = 0;
    posRef.current.targetY = 0;

    // Smooth return transition to idle position at bottom
    if (buttonRef.current) {
      buttonRef.current.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s';
      buttonRef.current.style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
      buttonRef.current.style.boxShadow = '';
      setTimeout(() => {
        if (!isHoveringRef.current && buttonRef.current) {
          buttonRef.current.style.pointerEvents = 'auto';
          buttonRef.current.style.zIndex = '10';
        }
      }, 450);
    }
  };

  return (
    <section className="relative w-full py-[56px] sm:py-[72px] lg:py-[88px] px-6 sm:px-8 lg:px-12 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 text-left">
            <ScrollReveal variant="fade-up" duration={600} distance={18}>
              <div className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-wider text-[#94A3B8] mb-3">
                LEAD NURTURING
              </div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-1.2px] leading-[1.14] text-[#0D0D0D]">
                Every Lead Gets the Right
                <br className="hidden sm:inline" /> Message. At the Right Time
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Paragraph */}
          <div className="lg:col-span-5 text-left lg:pt-6">
            <ScrollReveal variant="fade-up" duration={600} distance={18} delay={120}>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14.5px] sm:text-[15.5px] leading-[26px] text-[#64748B] max-w-lg">
                Coirei analyzes lead intent and engagement to send personalized messages through the
                right channels at the right time. Smart frequency controls and consent checks help
                reduce spam risks and improve deliverability.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Cards Container with Glitch-Free Cursor Tracking Area */}
        <div
          ref={cardsWrapperRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate('/lead-nurturing')}
          className="relative flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-5 min-h-[390px] py-3 select-none cursor-pointer"
        >
          {NURTURE_CARDS.map((card, idx) => {
            const isActive = card.id === activeCardId;

            return (
              <ScrollReveal
                key={card.id}
                variant="fade-up"
                duration={650}
                distance={24}
                delay={idx * 90}
                className="w-full sm:w-auto flex justify-center"
              >
                <div
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    if (activeCardId !== card.id) {
                      setActiveCardId(card.id);
                    }
                  }}
                  className={`group relative rounded-[10px] bg-white transition-all duration-300 cursor-pointer overflow-hidden text-left flex flex-col justify-between ${
                    isActive
                      ? 'w-full max-w-[320px] sm:w-[265px] h-[374px] p-4 border border-[#E2E8F0] shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] z-10 -translate-y-1'
                      : 'w-full max-w-[280px] sm:w-[175px] h-[306px] p-4 border border-[#F1F5F9] hover:border-[#CBD5E1] shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  {/* Top Area: Image reveals on hover/active, Left Corner Number shows when inactive */}
                  <div className="relative w-full h-[188px] rounded-[10px] overflow-hidden select-none bg-transparent pointer-events-none">
                    {/* Revealed Image on Hover / Active */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-400 ease-out ${
                        isActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-top rounded-[10px]"
                        loading="lazy"
                      />
                      {/* Figma spec: 29px linear gradient fade at bottom into white */}
                      <div className="absolute bottom-0 left-0 right-0 h-[29px] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    </div>

                    {/* Left Corner Number (Visible when inactive / idle)
                        Typography: Plus Jakarta Sans 800, Size: 128px, Line-height: 48px, Letter-spacing: -1px, Color: #F1F1F1
                        Figma spec: Top: 27px, Left: -21px */}
                    <div
                      className={`relative w-full h-full overflow-visible transition-all duration-300 ${
                        isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      <span
                        className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[128px] leading-[48px] tracking-[-1px] text-[#F1F1F1] select-none pointer-events-none"
                        style={{
                          top: '27px',
                          left: '-21px',
                        }}
                      >
                        {card.number}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="pt-2 z-10 relative pointer-events-none">
                    <h3
                      className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D0D0D] tracking-tight leading-snug mb-1.5 ${
                        isActive ? 'text-[17px]' : 'text-[16px]'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#64748B] ${
                        isActive
                          ? 'text-[13px] leading-[20px]'
                          : 'text-[12.5px] leading-[18.5px]'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        

        {/* View More Button Container (Idle at bottom center, tracks cursor smoothly when hovering over cards) */}
        <div className="mt-12 sm:mt-14 flex justify-center relative min-h-[44px]">
          <button
            ref={buttonRef}
            onClick={() => navigate('/lead-nurturing')}
            type="button"
            className="px-5 py-2.5 rounded-[8px] bg-[#1E1E1E] hover:bg-[#0D0D0D] text-white text-[13px] font-medium transition-colors shadow-2xs cursor-pointer active:scale-[0.98] select-none whitespace-nowrap will-change-transform z-10"
          >
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadNurturingSection;
