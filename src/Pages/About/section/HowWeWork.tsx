import React, { useRef, useState, useEffect } from 'react';

export const HOW_WE_WORK_STEPS = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Deep analysis of organizational workflows, legacy dependencies, edge cases, and human friction points before writing any code.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Architectural prototyping of interfaces that radically simplify cognitive load, standardizing design tokens and interaction physics.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'High-performance web and backend systems engineered for sub-second responses, resilient data pipelining, and enterprise reliability.',
  },
  {
    step: '04',
    title: 'Automate',
    description:
      'Integrating intelligent agentic loops and autonomous triggers that eliminate manual administrative chores and latency.',
  },
  {
    step: '05',
    title: 'Evolve',
    description:
      'Continuous model retraining, runtime telemetry monitoring, and modular refactors that scale smoothly alongside enterprise growth.',
  },
];

export const HowWeWork: React.FC = () => {
  const howWeWorkRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [lineMetrics, setLineMetrics] = useState({
    startX: 28,
    totalWidth: 0,
    stepProgressions: [0, 0.25, 0.5, 0.75, 1],
  });

  // Calculate badge center positions dynamically on any screen width
  useEffect(() => {
    const updateMetrics = () => {
      if (!trackRef.current) return;
      const trackRect = trackRef.current.getBoundingClientRect();
      const centers: number[] = [];

      badgeRefs.current.forEach((badge) => {
        if (badge) {
          const bRect = badge.getBoundingClientRect();
          const cx = bRect.left - trackRect.left + bRect.width / 2;
          centers.push(cx);
        }
      });

      if (centers.length >= 2) {
        const startX = centers[0];
        const endX = centers[centers.length - 1];
        const totalW = Math.max(endX - startX, 0);
        setLineMetrics({
          startX,
          totalWidth: totalW,
          stepProgressions: centers.map((c) => (totalW > 0 ? (c - startX) / totalW : 0)),
        });
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    const timer = setTimeout(updateMetrics, 200);

    return () => {
      window.removeEventListener('resize', updateMetrics);
      clearTimeout(timer);
    };
  }, []);

  // Viewport scroll progression for progressive line joining and card reveal
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (howWeWorkRef.current) {
            const rect = howWeWorkRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const triggerStart = windowHeight * 0.85;
            const scrollDistance = rect.height + windowHeight * 0.25;
            const scrolled = triggerStart - rect.top;
            const progress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={howWeWorkRef}
      className="w-full bg-[#FFFFFF] pt-14 sm:pt-18 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#F1F5F9]"
    >
      <div className="max-w-[1216px] w-full mx-auto text-left">
        {/* Eyebrow */}
        <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
          How We Work
        </p>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18] mb-4">
          From Complexity to Clarity
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] md:text-[15.5px] text-[#64748B] max-w-3xl leading-relaxed font-normal mb-12 sm:mb-14 md:mb-16">
          Every business has its own way of working. We understand the workflow first, identify
          where technology creates the most leverage, and engineer a solution around it.
        </p>

        {/* Desktop & Tablet Timeline (Fluid Responsive layout that fits all 5 cards seamlessly on all tablet/laptop screens) */}
        <div className="hidden sm:block relative pt-2 pb-6 w-full">
          {/* Cards Track: Uses fluid flex-1 with proportional gaps so cards never overflow or get cut off */}
          <div
            ref={trackRef}
            className="relative flex items-start justify-between gap-3 md:gap-5 lg:gap-8 xl:gap-10 w-full pt-1"
          >
            {/* Background Connecting Timeline Rail */}
            <div
              className="absolute top-[28px] h-[2px] bg-[#E2E2E2] z-0 rounded-full"
              style={{
                left: `${lineMetrics.startX}px`,
                width: lineMetrics.totalWidth > 0 ? `${lineMetrics.totalWidth}px` : 'calc(100% - 56px)',
              }}
            />

            {/* Active Joining Line that progressively grows to physically join the badges */}
            <div
              className="absolute top-[28px] h-[2px] bg-[#0B0F19] z-0 rounded-full transition-[width] duration-150 ease-out"
              style={{
                left: `${lineMetrics.startX}px`,
                width: `${Math.min(
                  lineMetrics.totalWidth,
                  Math.max(0, lineMetrics.totalWidth * scrollProgress)
                )}px`,
              }}
            />

            {/* Leading pulse tip joining the line */}
            {lineMetrics.totalWidth > 0 && scrollProgress > 0.02 && scrollProgress < 0.99 && (
              <div
                className="absolute top-[29px] w-[7px] h-[7px] rounded-full bg-[#0B0F19] ring-4 ring-[#0B0F19]/15 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-75 pointer-events-none"
                style={{
                  left: `${lineMetrics.startX + lineMetrics.totalWidth * scrollProgress}px`,
                }}
              />
            )}

            {HOW_WE_WORK_STEPS.map((step, index) => {
              const threshold =
                lineMetrics.stepProgressions[index] !== undefined
                  ? lineMetrics.stepProgressions[index] - 0.03
                  : index * 0.22;
              const isRevealed = index === 0 ? true : scrollProgress >= threshold;

              return (
                <div
                  key={step.step}
                  className="flex-1 min-w-0 max-w-[240px] text-left relative z-10"
                >
                  {/* Step Number Badge */}
                  <div
                    ref={(el) => {
                      badgeRefs.current[index] = el;
                    }}
                    className={`w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[8px] border flex items-center justify-center text-[13px] md:text-[13.5px] font-semibold select-none transition-all duration-400 ${
                      isRevealed
                        ? 'bg-white border-black/[0.06] text-[#0B0F19] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] opacity-100'
                        : 'bg-white border-[#E2E8F0] text-neutral-400 shadow-[0px_1px_3px_rgba(0,0,0,0.04)] opacity-40'
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Card Body */}
                  <div
                    className={`transition-all duration-500 ease-out ${
                      isRevealed
                        ? 'opacity-100 translate-y-0 filter-none'
                        : 'opacity-20 translate-y-3 filter blur-[0.5px] pointer-events-none'
                    }`}
                  >
                    {/* Step Title */}
                    <h3 className="text-[17px] md:text-[20px] lg:text-[22px] font-semibold text-[#1A1C1C] leading-[24px] md:leading-[28px] tracking-[-0.33px] mt-4 md:mt-6 mb-2">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[12px] md:text-[13px] text-[#64748B] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout (< 640px) */}
        <div className="sm:hidden relative pl-4 border-l-2 border-[#E2E8F0] space-y-8 mt-6">
          {HOW_WE_WORK_STEPS.map((step, index) => {
            const isRevealed = scrollProgress >= index * 0.18;

            return (
              <div key={`mobile-${step.step}`} className="relative pl-6">
                {/* Badge Dot */}
                <div
                  className={`absolute -left-[25px] top-0 w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-semibold ${
                    isRevealed
                      ? 'bg-white border-black/10 text-[#0B0F19] shadow-sm'
                      : 'bg-white border-[#E2E8F0] text-neutral-400'
                  }`}
                >
                  {step.step}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1C1C] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
