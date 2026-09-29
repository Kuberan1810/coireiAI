import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blueWaveSvg from '../../assets/bluewave.svg';

const HOW_WE_WORK_STEPS = [
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

export const About: React.FC = () => {
  const howWeWorkRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [lineMetrics, setLineMetrics] = useState({
    startX: 20,
    totalWidth: 0,
    stepProgressions: [0, 0.25, 0.5, 0.75, 1],
  });

  // Calculate badge center positions for pixel-perfect line joining
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

            // Progress smoothly triggers as the section scrolls into view
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
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION WITH BLUE WAVE BACKGROUND */}
      <section className="relative w-full overflow-hidden bg-white pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
        {/* Subtle Wave SVG Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <img
            src={blueWaveSvg}
            alt=""
            className="w-full min-w-[1100px] max-w-[1700px] h-auto object-cover opacity-90 translate-y-2 sm:translate-y-4"
          />
        </div>

        {/* Soft Bottom Fade Effect */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
            About Coirei
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] font-semibold tracking-[-1.5px] leading-[1.14] text-[#0B0F19] max-w-5xl mx-auto">
            <span className="block sm:inline sm:whitespace-nowrap">Technology, built around how your</span>{' '}
            <span className="block sm:inline sm:whitespace-nowrap">business works.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#475569] font-normal leading-relaxed max-w-xl mx-auto">
            Less complexity. More possibilities.
          </p>

          {/* Action Button */}
          <div className="mt-6 sm:mt-7">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (Left-aligned, seamless fade from hero) */}
      <section className="w-full bg-white pt-6 sm:pt-10 pb-16 sm:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1216px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-4">
            Who We Are
          </p>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18] mb-8">
            AI that works
            <br />
            beyond the screen.
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-[15.5px] sm:text-[16.5px] text-[#64748B] leading-[1.75] max-w-3xl font-normal">
            <p>
              We combine AI, software engineering, and deep problem-solving to create
              technology that fits the way businesses actually work.
            </p>
            <p>
              From intelligent search and automation to voice, analytics, and decision systems,
              we turn complex challenges into simple, scalable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD SECTION (Exact Figma: 1152 × 243 Hug, 1px Border #EEF3FA) */}
      <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
            What We Build
          </p>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18] mb-12 sm:mb-14">
            Intelligence,
            <br />
            built for impact.
          </h2>

          {/* 2x2 Grid with Outer Border 1px All Sides #EEF3FA and Inner Dividers */}
          <div className="w-full max-w-[1152px] border border-[#EEF3FA] rounded-[12px] bg-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#EEF3FA] overflow-hidden">
            {/* Top Left: AI Systems */}
            <div className="p-6 sm:py-[26px] sm:px-[32px] md:border-r md:border-b border-[#EEF3FA]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                AI Systems
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Context-aware AI designed to understand information and deliver meaningful outcomes.
              </p>
            </div>

            {/* Top Right: Intelligent Automation */}
            <div className="p-6 sm:py-[26px] sm:px-[32px] md:border-b border-[#EEF3FA]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                Intelligent Automation
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Reduce repetitive work and let AI handle processes that slow your teams down.
              </p>
            </div>

            {/* Bottom Left: AI-Powered Products */}
            <div className="p-6 sm:py-[26px] sm:px-[32px] md:border-r border-[#EEF3FA]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                AI-Powered Products
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Build products where intelligence is part of the experience — not an add-on.
              </p>
            </div>

            {/* Bottom Right: Data & Analytics */}
            <div className="p-6 sm:py-[26px] sm:px-[32px]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                Data & Analytics
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Turn scattered information into insights that help teams make faster, better-informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (Line joins, One-by-one reveal on scroll) */}
      <section
        ref={howWeWorkRef}
        className="w-full bg-[#FFFFFF] pt-16 sm:pt-20 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]"
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
          <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] max-w-3xl leading-relaxed font-normal mb-14 sm:mb-16">
            Every business has its own way of working. We understand the workflow first, identify
            where technology creates the most leverage, and engineer a solution around it.
          </p>

          {/* Horizontal Timeline Track */}
          <div className="relative pt-2 pb-6 overflow-x-auto md:overflow-visible no-scrollbar">
            {/* Cards Container - Completely stationary in place (no horizontal movement) */}
            <div
              ref={trackRef}
              className="relative flex items-start gap-8 sm:gap-10 md:gap-12 min-w-max md:min-w-0 pt-1"
            >
              {/* Connecting Timeline Rail (Runs behind badges from Badge 01 center to Badge 05 center) */}
              <div
                className="hidden md:block absolute top-[28px] h-[2px] bg-[#E2E2E2] z-0 rounded-full"
                style={{
                  left: `${lineMetrics.startX}px`,
                  width: lineMetrics.totalWidth > 0 ? `${lineMetrics.totalWidth}px` : 'calc(100% - 56px)',
                }}
              />

              {/* Active Joining Line that progressively grows to physically join the badges */}
              <div
                className="hidden md:block absolute top-[28px] h-[2px] bg-[#0B0F19] z-0 rounded-full transition-[width] duration-150 ease-out"
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
                  className="hidden md:block absolute top-[29px] w-[7px] h-[7px] rounded-full bg-[#0B0F19] ring-4 ring-[#0B0F19]/15 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-75 pointer-events-none"
                  style={{
                    left: `${lineMetrics.startX + lineMetrics.totalWidth * scrollProgress}px`,
                  }}
                />
              )}

              {HOW_WE_WORK_STEPS.map((step, index) => {
                // Determine when active line reaches this card
                const threshold =
                  lineMetrics.stepProgressions[index] !== undefined
                    ? lineMetrics.stepProgressions[index] - 0.03
                    : index * 0.22;
                const isRevealed = index === 0 ? true : scrollProgress >= threshold;

                return (
                  <div
                    key={step.step}
                    className="flex-1 min-w-[200px] max-w-[240px] text-left relative z-10"
                  >
                    {/* Step Number Badge (Exact Figma: 56px x 56px, rounded 8px, #FFFFFF, dual drop shadow) */}
                    <div
                      ref={(el) => {
                        badgeRefs.current[index] = el;
                      }}
                      className={`w-[56px] h-[56px] rounded-[8px] border flex items-center justify-center text-[13.5px] font-semibold select-none transition-all duration-400 ${
                        isRevealed
                          ? 'bg-white border-black/[0.06] text-[#0B0F19] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] opacity-100'
                          : 'bg-white border-[#E2E8F0] text-neutral-400 shadow-[0px_1px_3px_rgba(0,0,0,0.04)] opacity-40'
                      }`}
                    >
                      {step.step}
                    </div>

                    {/* Card Body - Reveals one by one in place as line reaches badge */}
                    <div
                      className={`transition-all duration-500 ease-out ${
                        isRevealed
                          ? 'opacity-100 translate-y-0 filter-none'
                          : 'opacity-20 translate-y-3 filter blur-[0.5px] pointer-events-none'
                      }`}
                    >
                      {/* Step Title (Exact Figma: Plus Jakarta Sans, 600 SemiBold, 22px, line-height 28px, tracking -0.33px, #1A1C1C) */}
                      <h3 className="text-[22px] font-semibold text-[#1A1C1C] leading-[28px] tracking-[-0.33px] mt-6 mb-2.5">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-[13px] text-[#64748B] leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING SECTION (Matching Screenshot) */}
      <section className="w-full bg-[#FFFFFF] pt-10 sm:pt-14 pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 sm:gap-12">
          {/* Left Text */}
          <div className="max-w-3xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-semibold tracking-[-1.5px] leading-[1.15] text-[#0B0F19] md:whitespace-nowrap">
              The future should feel simpler.
            </h2>
            <p className="mt-5 text-[15px] sm:text-[16px] text-[#64748B] max-w-2xl leading-relaxed font-normal">
              Technology should take complexity away from businesses — not add to it. Coirei builds
              intelligent systems that help teams work better, move faster, and focus on what
              actually matters.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0 pt-2 md:pt-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.99] whitespace-nowrap"
            >
              <span>Let&apos;s build what&apos;s next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
