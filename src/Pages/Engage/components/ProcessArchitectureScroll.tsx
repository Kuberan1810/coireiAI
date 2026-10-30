import React, { useState, useEffect, useRef } from 'react';
import captureCard from '../../../assets/engage/capture.svg';
import understandCard from '../../../assets/engage/understand.svg';
import respondCard from '../../../assets/engage/respond.svg';
import followupCard from '../../../assets/engage/followup.svg';

interface ProcessStepItem {
  step: string;
  title: string;
  stage: string;
  description: string;
  image: string;
}

const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Capture',
    stage: 'Ingest',
    description: 'Identify potential Leads, initiate targeted outreach, and capture incoming messages across connected channels.',
    image: captureCard,
  },
  {
    step: '02',
    title: 'Understand',
    stage: 'Analyze',
    description: 'Interpret intent, conversation history, and engagement signals to understand prospects and qualify potential leads.',
    image: understandCard,
  },
  {
    step: '03',
    title: 'Respond',
    stage: 'Execute',
    description: 'Send personalized outreach, respond to enquiries, and adapt conversations to each prospects context and your brand voice.',
    image: respondCard,
  },
  {
    step: '04',
    title: 'Follow-Up',
    stage: 'Nurture',
    description: 'Automate follow-ups, re-engage prospects, schedule meetings, and hand qualified opportunities to your sales team.',
    image: followupCard,
  },
];

export const ProcessArchitectureScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to compute card width based on screen width
  const getCardW = (winW: number) => {
    return winW >= 1024 ? 534 : winW >= 768 ? Math.min(480, Math.floor(winW * 0.55)) : Math.min(360, Math.floor(winW * 0.82));
  };

  // Helper to compute startX so that Card 1 is well-revealed (at least ~270px / ~48-50%) at idle state
  // This ensures the title "Capture", description, and "Ingest" watermark are clearly visible and not tucked away inside the right margin.
  const getStartX = (winW: number, cardW: number) => {
    const visibleAtIdle = Math.min(cardW * 0.50, Math.max(270, Math.floor(cardW * 0.48)));
    return winW - visibleAtIdle;
  };

  // Helper to compute total scrollable distance
  const getDist = (winW: number, cardW: number) => {
    const gap = winW >= 640 ? 24 : 16;
    const endMargin = winW >= 1024 ? 48 : 24;
    const startX = getStartX(winW, cardW);
    const totalTrackW = 4 * cardW + 3 * gap;
    const endX = winW - totalTrackW - endMargin;
    return Math.max(0, startX - endX);
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize state synchronously to prevent any layout shift on load
  const [cardWidth, setCardWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      const winW = document.documentElement.clientWidth || window.innerWidth;
      return getCardW(winW);
    }
    return 534;
  });

  const [initialOffset, setInitialOffset] = useState(() => {
    if (typeof window !== 'undefined') {
      const winW = document.documentElement.clientWidth || window.innerWidth;
      const cardW = getCardW(winW);
      return getStartX(winW, cardW);
    }
    return 755;
  });

  const [totalDistance, setTotalDistance] = useState(() => {
    if (typeof window !== 'undefined') {
      const winW = document.documentElement.clientWidth || window.innerWidth;
      const cardW = getCardW(winW);
      return getDist(winW, cardW);
    }
    return 2000;
  });

  // Keep metrics in sync with window resize
  const updateMetrics = () => {
    if (typeof window === 'undefined') return;
    const winW = document.documentElement.clientWidth || window.innerWidth;
    const cardW = getCardW(winW);
    setCardWidth(cardW);

    const startX = getStartX(winW, cardW);
    setInitialOffset(startX);

    const dist = getDist(winW, cardW);
    setTotalDistance(dist);
  };

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  // Track window vertical scroll to calculate horizontal translation
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      setScrollProgress(progress);
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
  }, []);

  // Compute horizontal translateX:
  // Starts at initialOffset (Card 1 peeking clearly from the right edge)
  // Glides smoothly left by totalDistance as progress goes from 0 to 1
  const currentTranslate = initialOffset - scrollProgress * totalDistance;

  return (
    <section ref={containerRef} className="relative w-full bg-white h-[280vh]">
      {/* Sticky Fullscreen / Pinned Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-white select-none">
        {/* Top Header: Eyebrow, Title & Subtitle (Left-aligned with container) */}
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 text-left mb-6 sm:mb-8 shrink-0">
          <div className="font-['Manrope',sans-serif] font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider text-[#94A3B8] mb-2 sm:mb-2.5">
            PROCESS ARCHITECTURE
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-1px] leading-[1.15] text-[#0D0D0D] mb-2.5">
            One agent. Every conversation.
          </h2>
          <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed max-w-2xl">
            Continuous ingestion to qualification without human bottlenecks.
          </p>
        </div>

        {/* Horizontal Card Track:
            - Idle state: Card 1 (Capture) is clearly revealed on the right edge (~270px visible)
            - On scroll down: Glides into view to reveal 100%, followed sequentially by Understand, Respond, Follow up */}
        <div className="w-full overflow-hidden flex items-center shrink-0">
          <div
            className="flex gap-4 sm:gap-6 will-change-transform"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: 'transform 80ms cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.title}
                style={{ width: `${cardWidth}px` }}
                className="relative aspect-[534/399] shrink-0 rounded-[20px] overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Background photo (Figma SVG) */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover block select-none pointer-events-none"
                />

                {/* Overlay Card (Exact Figma Specs: Frame 449x284, Top: 57px/399px [14.28%], Left: 42px/534px [7.86%], Radius: 10px, Color: #FFFFFF) */}
                <div className="absolute top-[14.28%] bottom-[14.53%] left-[7.86%] right-[8.05%] bg-white rounded-[10px] overflow-hidden p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col justify-between">
                  {/* Content (Title & Description) */}
                  <div className="relative z-10">
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#0D0D0D] tracking-[-0.02em] leading-tight mb-2 sm:mb-2.5">
                      {item.title}
                    </h3>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14.5px] lg:text-[16px] text-[#475569] leading-[1.38] font-normal max-w-[393px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: Stage Watermark (Figma Spec: Plus Jakarta Sans, Regular 400, 80px, Line-height 120%, #94A3B8 16%) & Diagonal Arrow */}
                  <div className="relative flex items-end justify-between -mb-2 sm:-mb-2.5 overflow-hidden pointer-events-none select-none">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[50px] sm:text-[66px] lg:text-[80px] leading-[1.2] text-[#94A3B8]/[0.16] tracking-normal">
                      {item.stage}
                    </span>
                    <div className="text-[#94A3B8]/[0.22] flex-shrink-0 pb-1.5 sm:pb-2.5">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="7" x2="17" y2="17" />
                        <polyline points="7 17 17 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessArchitectureScroll;
