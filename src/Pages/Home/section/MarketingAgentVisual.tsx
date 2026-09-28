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
      className={`w-full max-w-[394px] bg-white rounded-[24px] border border-[#E2E8F0]/80 p-4 sm:p-5 flex flex-col gap-3.5 select-none transition-all duration-300 ${className}`}
      style={{
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
      }}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-0.5">
        <div className="flex items-center gap-3">
          {/* Megaphone Icon Badge */}
          <div className="w-10 h-10 rounded-[12px] bg-[#EB6658]/10 flex items-center justify-center shrink-0">
            <Megaphone className="w-5 h-5 text-[#EB6658]" />
          </div>

          {/* Titles */}
          <div className="flex flex-col">
            <h4 className="text-[15px] font-semibold text-[#0F172A] tracking-tight leading-snug">
              Marketing Agent
            </h4>
            <p className="text-[12px] text-[#64748B] font-normal leading-tight mt-0.5">
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
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Card 1: Q4 Product Launch (Figma: Fill 362px, Hug 105.25px, Radius 14px, Border 1px #E2E8F0 90%, Padding: 11px 14px 10px 14px, Gap: 12px) */}
      <div
        className="w-full rounded-[14px] bg-white border border-[#E2E8F0]/90 pt-[11px] pr-[14px] pb-[10px] pl-[14px] flex flex-col gap-[12px] transition-all hover:border-[#CBD5E1]"
      >
        {/* Campaign Header */}
        <div className="flex items-center justify-between leading-none">
          <span className="text-[13px] font-semibold text-[#0F172A] tracking-tight">
            Q4 Product Launch
          </span>
          <span className="text-[12px] text-[#64748B] font-normal tabular-nums">
            {currentCompletion}% complete
          </span>
        </div>

        {/* Progress Bar Track (Figma: 239.04 x 5, Radius 9999px, #063CB1) */}
        <div className="w-full h-[5px] bg-[#E2E8F0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#063CB1] rounded-full transition-[width] duration-75 ease-out will-change-[width]"
            style={{ width: `${currentBarWidth}%` }}
          />
        </div>

        {/* Metrics Grid (Reach, Engagement, Leads) */}
        <div className="grid grid-cols-3 gap-2 pt-0.5">
          {/* Reach */}
          <div className="flex flex-col">
            <span className="text-[11px] text-[#94A3B8] font-normal leading-none mb-1">
              Reach
            </span>
            <div className="flex items-baseline">
              <span className="text-[14.5px] font-semibold text-[#0F172A] leading-tight tabular-nums">
                {currentReachVal}K
              </span>
              <span className="text-[11px] text-[#10B981] font-semibold ml-1 leading-tight inline-flex items-center tabular-nums">
                ↑{currentReachGain}%
              </span>
            </div>
          </div>

          {/* Engagement */}
          <div className="flex flex-col">
            <span className="text-[11px] text-[#94A3B8] font-normal leading-none mb-1">
              Engagement
            </span>
            <div className="flex items-baseline">
              <span className="text-[14.5px] font-semibold text-[#0F172A] leading-tight tabular-nums">
                {currentEngagementVal}%
              </span>
              <span className="text-[11px] text-[#10B981] font-semibold ml-1 leading-tight inline-flex items-center tabular-nums">
                ↑{currentEngagementGain}%
              </span>
            </div>
          </div>

          {/* Leads */}
          <div className="flex flex-col">
            <span className="text-[11px] text-[#94A3B8] font-normal leading-none mb-1">
              Leads
            </span>
            <div className="flex items-baseline">
              <span className="text-[14.5px] font-semibold text-[#0F172A] leading-tight tabular-nums">
                {currentLeadsVal}
              </span>
              <span className="text-[11px] text-[#10B981] font-semibold ml-1 leading-tight inline-flex items-center tabular-nums">
                ↑{currentLeadsGain}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: AI Recommendation */}
      <div
        className="w-full rounded-[14px] bg-[#EB6658]/[0.04] border border-[#EB6658]/25 pt-[10px] pr-[14px] pb-[10px] pl-[14px] flex flex-col gap-[12px] transition-all hover:border-[#EB6658]/45"
      >
        {/* Recommendation Header */}
        <div className="flex items-center gap-1.5 leading-none">
          <Sparkles className="w-3.5 h-3.5 text-[#EB6658]" />
          <span className="text-[12.5px] font-semibold text-[#EB6658] tracking-tight">
            AI Recommendation
          </span>
        </div>

        {/* Recommendation Body */}
        <p className="text-[12.5px] text-[#334155] leading-[1.45] font-normal">
          LinkedIn ment is 23% higher for your target audience. Increase campaign focus on LinkedIn.
        </p>
      </div>
    </div>
  );
};

export default MarketingAgentVisual;
