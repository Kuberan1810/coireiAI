import React, { useRef, useEffect } from 'react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);
  const pulseDotRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile refs
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileFillLineRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // High-performance direct DOM scroll animation with zero React re-renders
  useEffect(() => {
    let isIntersecting = false;
    let ticking = false;

    const updateScroll = () => {
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 640;
      const activeTrack = isMobile ? mobileTrackRef.current : trackRef.current;

      if (!activeTrack) return;
      const trackRect = activeTrack.getBoundingClientRect();

      // Trigger starts ONLY when the timeline track itself enters the comfortable viewing area (65% of viewport)
      const startPoint = windowHeight * 0.65;
      // Reaches 100% when the track is in the upper viewing area (22% of viewport)
      const endPoint = windowHeight * 0.22;

      const totalScrollRange = Math.max(startPoint - endPoint, 1);
      const currentScrolled = startPoint - trackRect.top;

      const rawProgress = currentScrolled / totalScrollRange;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      // 1. Desktop Direct DOM updates (GPU composited transform - 0 re-renders)
      if (fillLineRef.current) {
        fillLineRef.current.style.transform = `scaleX(${progress})`;
      }

      if (pulseDotRef.current && trackRef.current) {
        const totalTrackWidth = trackRef.current.offsetWidth - 56;
        if (totalTrackWidth > 0) {
          pulseDotRef.current.style.transform = `translate3d(${progress * totalTrackWidth}px, -50%, 0)`;
          pulseDotRef.current.style.opacity = progress > 0.02 && progress < 0.98 ? '1' : '0';
        }
      }

      // Step thresholds: precisely calibrated to badge positions (01 -> 02 -> 03 -> 04 -> 05)
      const thresholds = [0.03, 0.25, 0.50, 0.75, 0.96];
      cardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const isActive = progress >= thresholds[idx];
        cardEl.setAttribute('data-active', isActive ? 'true' : 'false');
      });

      // 2. Mobile Direct DOM updates
      if (mobileFillLineRef.current) {
        mobileFillLineRef.current.style.transform = `scaleY(${progress})`;
      }

      mobileCardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const isActive = progress >= thresholds[idx];
        cardEl.setAttribute('data-active', isActive ? 'true' : 'false');
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!isIntersecting) return;
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateScroll();
    };

    // IntersectionObserver to sleep when out of view and only listen to scroll when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          updateScroll();
        }
      },
      {
        threshold: 0,
        rootMargin: '100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    updateScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] pt-14 sm:pt-18 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#F1F5F9]"
    >
      <div className="max-w-[1216px] w-full mx-auto text-left">
        {/* Eyebrow */}
        <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3 cursor-text select-text">
          How We Work
        </p>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18] mb-4 cursor-text select-text">
          From Complexity to Clarity
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] md:text-[15.5px] text-[#64748B] max-w-3xl leading-relaxed font-normal mb-12 sm:mb-14 md:mb-16 cursor-text select-text">
          Every business has its own way of working. We understand the workflow first, identify
          where technology creates the most leverage, and engineer a solution around it.
        </p>

        {/* Desktop & Tablet Timeline (Zero-Lag direct GPU render) */}
        <div className="hidden sm:block relative pt-2 pb-4 w-full">
          {/* Cards Track */}
          <div
            ref={trackRef}
            className="relative flex items-start justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-full pt-1"
          >
            {/* Background Timeline Rail */}
            <div className="absolute top-[28px] left-[24px] right-[24px] md:left-[28px] md:right-[28px] h-[2px] bg-[#E2E8F0] z-0 rounded-full" />

            {/* Active Connecting Fill Line with direct GPU scaleX transform */}
            <div
              ref={fillLineRef}
              className="absolute top-[28px] left-[24px] right-[24px] md:left-[28px] md:right-[28px] h-[2px] bg-[#0B0F19] z-0 rounded-full origin-left will-change-transform"
              style={{ transform: 'scaleX(0)' }}
            />

            {/* Leading Pulse Dot */}
            <div
              ref={pulseDotRef}
              className="absolute top-[29px] left-[24px] md:left-[28px] w-[8px] h-[8px] rounded-full bg-[#0B0F19] ring-4 ring-[#0B0F19]/20 -translate-x-1/2 -translate-y-1/2 z-10 will-change-transform pointer-events-none opacity-0 transition-opacity duration-150"
            />

            {HOW_WE_WORK_STEPS.map((step, index) => (
              <div
                key={step.step}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-active="false"
                className="group flex-1 min-w-0 max-w-[240px] text-left relative z-10 cursor-pointer select-text transition-all duration-300 ease-out data-[active=false]:opacity-35 data-[active=true]:opacity-100 hover:opacity-100 hover:-translate-y-0.5"
              >
                {/* Step Number Badge */}
                <div
                  className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[10px] border flex items-center justify-center text-[13px] md:text-[14px] font-semibold select-none transition-all duration-300 group-data-[active=true]:bg-white group-data-[active=true]:border-black/15 group-data-[active=true]:text-[#0B0F19] group-data-[active=true]:shadow-[0px_2px_6px_rgba(0,0,0,0.06)] group-data-[active=false]:bg-white group-data-[active=false]:border-[#E2E8F0] group-data-[active=false]:text-neutral-400 group-hover:border-black/30 group-hover:text-black group-hover:shadow-sm"
                >
                  {step.step}
                </div>

                {/* Card Body */}
                <div className="mt-4 md:mt-6 transition-all duration-300 group-data-[active=false]:translate-y-1 group-data-[active=true]:translate-y-0">
                  {/* Step Title */}
                  <h3 className="text-[17px] md:text-[19px] lg:text-[21px] font-semibold text-[#1A1C1C] leading-[24px] md:leading-[28px] tracking-[-0.33px] mb-2 group-hover:text-black cursor-text select-text">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[12px] md:text-[13px] text-[#64748B] leading-relaxed font-normal group-hover:text-slate-800 cursor-text select-text">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout (< 640px) */}
        <div ref={mobileTrackRef} className="sm:hidden relative pl-4 mt-6">
          {/* Background vertical rail */}
          <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#E2E8F0] z-0 rounded-full" />

          {/* Active vertical fill line */}
          <div
            ref={mobileFillLineRef}
            className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#0B0F19] z-0 rounded-full origin-top will-change-transform"
            style={{ transform: 'scaleY(0)' }}
          />

          <div className="space-y-8">
            {HOW_WE_WORK_STEPS.map((step, index) => (
              <div
                key={`mobile-${step.step}`}
                ref={(el) => {
                  mobileCardRefs.current[index] = el;
                }}
                data-active="false"
                className="group relative pl-7 transition-all duration-300 ease-out data-[active=false]:opacity-35 data-[active=true]:opacity-100"
              >
                {/* Badge Dot */}
                <div className="absolute -left-[16px] top-0 w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-semibold select-none z-10 transition-colors duration-300 group-data-[active=true]:bg-white group-data-[active=true]:border-black/20 group-data-[active=true]:text-[#0B0F19] group-data-[active=true]:shadow-xs group-data-[active=false]:bg-white group-data-[active=false]:border-[#E2E8F0] group-data-[active=false]:text-neutral-400">
                  {step.step}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1C1C] mb-1 cursor-text select-text">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#64748B] leading-relaxed cursor-text select-text">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
