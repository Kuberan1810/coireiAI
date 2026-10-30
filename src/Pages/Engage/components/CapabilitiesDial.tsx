import React, { useState, useEffect, useRef } from 'react';

interface Capability {
  num: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    num: '01',
    title: 'Intent detection',
    description: 'Understand what every conversation is actually about and detect real customer intent automatically.',
  },
  {
    num: '02',
    title: 'Context-aware replies',
    description: 'Respond using previous conversation context, customer information and your brand guidelines.',
  },
  {
    num: '03',
    title: 'Conversation routing',
    description: 'Generate and send context-aware replies automatically, based on your brand voice and rules.',
  },
  {
    num: '04',
    title: 'Lead qualification',
    description: 'Identify high-intent prospects automatically and qualify opportunities without human bottlenecks.',
  },
  {
    num: '05',
    title: 'Smart follow-ups',
    description: 'Know when to follow up without manually tracking every conversation across channels.',
  },
  {
    num: '06',
    title: 'Brand voice',
    description: 'Keep every AI response aligned with your tone, messaging and communication rules.',
  },
];

export const CapabilitiesDial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Continuous linear scroll step for silky-smooth rotation
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Dial Geometry
  const cx = 500;
  const cy = 840;
  const rArc = 460;
  const rText = 532;
  const N = capabilities.length; // 6 items
  const angleStep = 28; // 28 degrees between adjacent numbers along the arc

  // Continuous arc curve spanning from 176 deg to 4 deg across the entire view
  // ensuring all visible grey dots are continuously connected to the arc line
  const startRad = (176 * Math.PI) / 180;
  const endRad = (4 * Math.PI) / 180;
  const arcStartX = cx + rArc * Math.cos(startRad);
  const arcStartY = cy - rArc * Math.sin(startRad);
  const arcEndX = cx + rArc * Math.cos(endRad);
  const arcEndY = cy - rArc * Math.sin(endRad);
  const arcPath = `M ${arcStartX.toFixed(1)} ${arcStartY.toFixed(1)} A ${rArc} ${rArc} 0 0 1 ${arcEndX.toFixed(1)} ${arcEndY.toFixed(1)}`;

  // Continuous, 1:1 scroll tracking for pure buttery smoothness
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // Progress normalized from 0 to 1
      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));

      // Continuous linear step from 0 to 5
      const step = progress * (N - 1);
      setCurrentStep(step);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [N]);

  // Active capability is the one closest to the center apex (90 deg)
  const activeIndex = Math.min(N - 1, Math.max(0, Math.round(currentStep)));

  // Calculate coordinates and opacity for each milestone.
  // The grey dot and number are locked to the EXACT same angle, so they spin together!
  const nodes = capabilities.map((item, index) => {
    let diff = index - currentStep;
    // Circular wrap so numbers wrap naturally around the dial
    while (diff < -N / 2) diff += N;
    while (diff > N / 2) diff -= N;

    // Angle along the arc: 90 deg is center apex
    const angle = 90 - diff * angleStep;
    const rad = (angle * Math.PI) / 180;

    // Grey dot coordinates on the arc
    const dotX = cx + rArc * Math.cos(rad);
    const dotY = cy - rArc * Math.sin(rad);

    // Number coordinates radially outward from the grey dot
    const textX = cx + rText * Math.cos(rad);
    const textY = cy - rText * Math.sin(rad);
    const rotation = -angle;

    // Smooth fade in on right and fade out on left
    let opacity = 0;
    if (angle >= 10 && angle <= 170) {
      if (angle > 142) {
        opacity = Math.max(0, (170 - angle) / 28);
      } else if (angle < 38) {
        opacity = Math.max(0, (angle - 10) / 28);
      } else {
        opacity = 1;
      }
    }

    const distFromApex = Math.abs(angle - 90);
    const isCenter = distFromApex < angleStep * 0.5;

    return {
      ...item,
      index,
      angle,
      dotX,
      dotY,
      textX,
      textY,
      rotation,
      opacity,
      isCenter,
    };
  });

  // Clicking any milestone smoothly scrolls the page so that number spins to center
  const handleSelect = (targetIndex: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const containerTop = scrollTop + rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable > 0) {
        const targetProgress = targetIndex / (N - 1);
        window.scrollTo({
          top: containerTop + targetProgress * totalScrollable,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white h-[280vh]"
    >
      {/* Sticky Fullscreen Pinned Container - Fixed below navbar with generous spacing between sections */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start items-center bg-white px-4 sm:px-6 lg:px-8 select-none pt-[86px] sm:pt-[94px] lg:pt-[100px] pb-8">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center">
          {/* Main Section Header */}
          <div className="text-center max-w-[760px] mx-auto mb-7 sm:mb-9 md:mb-11 shrink-0">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-semibold tracking-[-1.2px] leading-[1.14] text-[#0D0D0D] mb-2 sm:mb-2.5">
              It doesn't just reply.
              <br />
              It understands.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#64748B] leading-relaxed max-w-[620px] mx-auto">
              Engage Agent goes beyond automated replies, understanding intent and context to qualify leads, personalize conversations, and ensure every interaction moves toward the right outcome.
            </p>
          </div>

          {/* Active Capability Title & Subtitle with smooth transition */}
          <div className="text-center max-w-[500px] mx-auto min-h-[58px] sm:min-h-[64px] flex flex-col items-center justify-start mb-3 sm:mb-4 shrink-0">
            <h3
              key={`title-${activeIndex}`}
              className="font-['Plus_Jakarta_Sans',sans-serif] text-lg sm:text-xl lg:text-[22px] font-semibold text-[#0D0D0D] tracking-tight mb-1 transition-all duration-300"
            >
              {capabilities[activeIndex].title}
            </h3>
            <p
              key={`desc-${activeIndex}`}
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[12.5px] sm:text-[13.5px] text-[#64748B] leading-[1.45] max-w-[440px] mx-auto transition-all duration-300"
            >
              {capabilities[activeIndex].description}
            </p>
          </div>

          {/* Rotary Dial Widget */}
          <div className="w-full max-w-[780px] lg:max-w-[820px] mx-auto select-none shrink-0">
            <svg
              viewBox="0 230 1000 450"
              className="w-full h-auto overflow-visible"
              role="region"
              aria-label="Rotating Capabilities Dial"
            >
              {/* Continuous Connected Arc Curve */}
              <path
                d={arcPath}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.75"
                strokeLinecap="round"
              />

              {/* Rotating Grey Dots on the Arc (spin together with their numbers) */}
              {nodes.map(
                (node) =>
                  node.opacity > 0 && (
                    <circle
                      key={`dot-${node.num}`}
                      cx={node.dotX}
                      cy={node.dotY}
                      r={3}
                      fill="#CBD5E1"
                      opacity={node.opacity}
                      className="transition-colors duration-200"
                    />
                  )
              )}

              {/* Stationary Black Indicator Dot at Center Apex (500, 380) */}
              {/* Perfectly aligns with the rotating grey dot when it reaches the center */}
              <circle
                cx={cx}
                cy={cy - rArc}
                r="5.5"
                fill="#0D0D0D"
              />

              {/* Rotating Number Nodes (spin together with the grey dots directly behind them) */}
              {nodes.map((node) => {
                if (node.opacity <= 0.01) return null;

                return (
                  <g
                    key={`node-${node.num}`}
                    onClick={() => handleSelect(node.index)}
                    className="cursor-pointer group focus:outline-none"
                    role="button"
                    tabIndex={0}
                    aria-pressed={node.isCenter}
                    aria-label={`Select ${node.title}`}
                    style={{ opacity: node.opacity }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelect(node.index);
                      }
                    }}
                  >
                    {/* Invisible hit area for easy clicking */}
                    <circle
                      cx={node.dotX}
                      cy={node.dotY - 35}
                      r="55"
                      fill="transparent"
                    />

                    {/* Rotated Number with Slashed Zero styling */}
                    <text
                      x={node.textX}
                      y={node.textY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      transform={`rotate(${node.rotation}, ${node.textX}, ${node.textY})`}
                      fill={node.isCenter ? '#0D0D0D' : '#CBD5E1'}
                      fontSize={node.isCenter ? '74' : '64'}
                      fontWeight={node.isCenter ? '800' : '700'}
                      letterSpacing="-0.04em"
                      className="group-hover:fill-[#94A3B8]"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontFeatureSettings: '"zero" 1',
                        fontVariantNumeric: 'slashed-zero',
                        transition: 'fill 0.2s ease, font-size 0.2s ease',
                      }}
                    >
                      {node.num}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
