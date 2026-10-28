import React, { useState, useEffect } from 'react';
import { Megaphone, MoreHorizontal, Sparkles } from 'lucide-react';

interface MarketingAgentVisualProps {
  isActive?: boolean;
  className?: string;
}

export const MarketingAgentVisual: React.FC<MarketingAgentVisualProps> = ({
  isActive = true,
  className = '',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 1400; // 1.4s smooth animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawT = Math.min(elapsed / duration, 1);
      // Smooth ease-out cubic curve
      const easedT = 1 - Math.pow(1 - rawT, 3);

      setProgress(easedT);

      if (rawT < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Small delay so entrance animation or card transition settles nicely
    const timeoutId = setTimeout(() => {
      startTime = null;
      animationFrameId = requestAnimationFrame(animate);
    }, 180);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isActive]);

  // Interpolated animated values
  const currentCompletion = Math.round(progress * 72);
  const currentBarWidth = progress * 72;

  const currentReachVal = Math.round(progress * 284);
  const currentReachGain = Math.round(progress * 18);

  const currentEngagementVal = (progress * 8.7).toFixed(1);
  const currentEngagementGain = (progress * 2.1).toFixed(1);

  const currentLeadsVal = Math.round(progress * 1248).toLocaleString();
  const currentLeadsGain = Math.round(progress * 14);

  return (
    <div
      className={`w-full h-full bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col overflow-hidden select-none text-left transition-all duration-300 ${className}`}
    >
      {/* Top Bar Header matching CompetitorAgentTable */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white border-b border-slate-100 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-[#EB6658] shrink-0" />
        <span className="text-[12px] font-semibold text-slate-800 tracking-tight">
          launch targeted ad campaigns
        </span>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 min-h-0 p-3 sm:p-4 md:p-4.5 flex flex-col justify-between gap-2 sm:gap-3 overflow-hidden">
        {/* Top Agent Sub-Header */}
        <div className="flex items-center justify-between px-0.5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Megaphone Icon Badge */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-[10px] sm:rounded-[12px] bg-[#EB6658]/10 flex items-center justify-center shrink-0">
              <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#EB6658]" />
            </div>

            {/* Titles */}
            <div className="flex flex-col">
              <h4 className="text-[13.5px] sm:text-[15px] font-semibold text-[#0F172A] tracking-tight leading-snug">
                Marketing Agent
              </h4>
              <p className="text-[11px] sm:text-[12px] text-[#64748B] font-normal leading-tight mt-0.5 line-clamp-1">
                Turning market signals into campaigns
              </p>
            </div>
          </div>

          {/* More Options */}
          <button
            type="button"
            aria-label="More options"
            className="text-[#94A3B8] hover:text-[#475569] p-1 rounded-md transition-colors"
          >
            <MoreHorizontal className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Card 1: Q4 Product Launch */}
        <div
          className="w-full rounded-[12px] sm:rounded-[14px] bg-white border border-[#E2E8F0]/90 p-2.5 sm:pt-[11px] sm:pr-[14px] sm:pb-[10px] sm:pl-[14px] flex flex-col gap-2 sm:gap-[12px] transition-all hover:border-[#CBD5E1]"
        >
          {/* Campaign Header */}
          <div className="flex items-center justify-between leading-none">
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#0F172A] tracking-tight">
              Q4 Product Launch
            </span>
            <span className="text-[11px] sm:text-[12px] text-[#64748B] font-normal tabular-nums">
              {currentCompletion}% complete
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-[5px] bg-[#E2E8F0] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#063CB1] rounded-full transition-[width] duration-75 ease-out will-change-[width]"
              style={{ width: `${currentBarWidth}%` }}
            />
          </div>

          {/* Metrics Grid (Reach, Engagement, Leads) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-0.5">
            {/* Reach */}
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[11px] text-[#94A3B8] font-normal leading-none mb-0.5 sm:mb-1">
                Reach
              </span>
              <div className="flex items-baseline flex-wrap sm:flex-nowrap">
                <span className="text-[11px] sm:text-[13.5px] md:text-[14.5px] font-semibold text-[#0F172A] leading-tight tabular-nums">
                  {currentReachVal}K
                </span>
                <span className="text-[8.5px] sm:text-[10px] md:text-[11px] text-[#10B981] font-semibold ml-0.5 sm:ml-1 leading-tight inline-flex items-center tabular-nums">
                  ↑{currentReachGain}%
                </span>
              </div>
            </div>

            {/* Engagement */}
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[11px] text-[#94A3B8] font-normal leading-none mb-0.5 sm:mb-1">
                Engagement
              </span>
              <div className="flex items-baseline flex-wrap sm:flex-nowrap">
                <span className="text-[11px] sm:text-[13.5px] md:text-[14.5px] font-semibold text-[#0F172A] leading-tight tabular-nums">
                  {currentEngagementVal}%
                </span>
                <span className="text-[8.5px] sm:text-[10px] md:text-[11px] text-[#10B981] font-semibold ml-0.5 sm:ml-1 leading-tight inline-flex items-center tabular-nums">
                  ↑{currentEngagementGain}%
                </span>
              </div>
            </div>

            {/* Leads */}
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[11px] text-[#94A3B8] font-normal leading-none mb-0.5 sm:mb-1">
                Leads
              </span>
              <div className="flex items-baseline flex-wrap sm:flex-nowrap">
                <span className="text-[11px] sm:text-[13.5px] md:text-[14.5px] font-semibold text-[#0F172A] leading-tight tabular-nums">
                  {currentLeadsVal}
                </span>
                <span className="text-[8.5px] sm:text-[10px] md:text-[11px] text-[#10B981] font-semibold ml-0.5 sm:ml-1 leading-tight inline-flex items-center tabular-nums">
                  ↑{currentLeadsGain}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: AI Recommendation */}
        <div
          className="flex w-full rounded-[12px] sm:rounded-[14px] bg-[#EB6658]/[0.04] border border-[#EB6658]/25 p-2.5 sm:pt-[10px] sm:pr-[14px] sm:pb-[10px] sm:pl-[14px] flex-col gap-1.5 sm:gap-[10px] transition-all hover:border-[#EB6658]/45"
        >
          {/* Recommendation Header */}
          <div className="flex items-center gap-1.5 leading-none">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#EB6658]" />
            <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-[#EB6658] tracking-tight">
              AI Recommendation
            </span>
          </div>

          {/* Recommendation Body */}
          <p className="text-[11px] sm:text-[12.5px] text-[#334155] leading-[1.35] sm:leading-[1.45] font-normal">
            LinkedIn engagement is 23% higher for your target audience. Increase campaign focus on LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingAgentVisual;
