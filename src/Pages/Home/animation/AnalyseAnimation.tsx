import React, { useState, useEffect } from 'react';
import companyIcon from '../../../assets/home/animation/company.png';
import peopleIcon from '../../../assets/home/animation/people.png';
import cartIcon from '../../../assets/home/animation/cart.png';
import arrowIcon from '../../../assets/home/animation/arrow.png';
import graphIcon from '../../../assets/home/animation/graph.png';
import starIcon from '../../../assets/home/animation/star.png';
import zoomIcon from '../../../assets/home/animation/zoom.png';

interface AnalyseAnimationProps {
  className?: string;
}

export const AnalyseAnimation: React.FC<AnalyseAnimationProps> = ({ className = '' }) => {
  // Stage controller for sequential line formation & card reveal:
  // Stage 0: Reset / Idle
  // Stage 1: Line 1 draws -> Stage 2: Company card reveals
  // Stage 3: Line 2 draws -> Stage 4: Target card reveals
  // Stage 5: Line 3 draws -> Stage 6: People card reveals
  // Stage 7: Line 4 draws -> Stage 8: Graph card reveals
  // Stage 9: Line 5 draws -> Stage 10: Cart card reveals
  // Stage 11: Line 6 draws -> Stage 12: Star card reveals (All visible)
  // Hold full showcase, then smooth reset and loop.
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isMounted = true;

    // Timeline sequence: [targetStage, durationMsToNextStage]
    const timeline: [number, number][] = [
      [1, 460],   // Line 1 draws from browser top-left to Company card
      [2, 420],   // Company card pops & reveals
      [3, 460],   // Line 2 draws from browser top-right to Target card
      [4, 420],   // Target card pops & reveals
      [5, 460],   // Line 3 draws from browser left to People card
      [6, 420],   // People card pops & reveals
      [7, 460],   // Line 4 draws from browser right to Graph card
      [8, 420],   // Graph card pops & reveals
      [9, 460],   // Line 5 draws from browser bottom-left to Cart card
      [10, 420],  // Cart card pops & reveals
      [11, 460],  // Line 6 draws from browser bottom-right to Star card
      [12, 3800], // Star card pops & reveals -> Hold all cards visible
      [0, 500],   // Clean reset transition -> loop
    ];

    let currentIndex = 0;

    const tick = () => {
      if (!isMounted) return;
      const [nextStage, delay] = timeline[currentIndex];
      setStage(nextStage);
      currentIndex = (currentIndex + 1) % timeline.length;
      timeoutId = setTimeout(tick, delay);
    };

    // Initial start delay
    timeoutId = setTimeout(tick, 300);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Helper flags:
  const isLineActive = (itemIndex: number) => stage >= 2 * itemIndex - 1;
  const isCardActive = (itemIndex: number) => stage >= 2 * itemIndex;

  return (
    <div
      className={`relative w-full h-full select-none flex items-center justify-center overflow-hidden pointer-events-none p-2 ${className}`}
    >
      {/* Ambient background soft glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-indigo-100/20 via-purple-50/15 to-blue-100/20 blur-2xl opacity-60" />
      </div>

      {/* Main Coordinate Stage: 400 x 360 coordinate grid with balanced whitespace */}
      <div className="relative w-full aspect-[400/360] max-w-[350px] flex items-center justify-center">
        
        {/* ========================================================================= */}
        {/* SVG CONNECTOR LINES & OUTWARD FORMING MASKS                               */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 400 360"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
        >
          <defs>
            {/* Outward Mask Animations: Stroke drawn from browser edge to card bead */}
            <mask id="lineMask1">
              <path
                d="M 165 120 C 165 85, 135 52, 105 50"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={isLineActive(1) ? 0 : 100}
                style={{
                  transition: 'stroke-dashoffset 460ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </mask>

            <mask id="lineMask2">
              <path
                d="M 238 120 C 245 85, 280 72, 310 77"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={isLineActive(2) ? 0 : 100}
                style={{
                  transition: 'stroke-dashoffset 460ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </mask>

            <mask id="lineMask3">
              <path
                d="M 138 168 C 124 168, 112 165, 104 165"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={isLineActive(3) ? 0 : 100}
                style={{
                  transition: 'stroke-dashoffset 460ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </mask>

            <mask id="lineMask4">
              <path
                d="M 268 168 C 295 168, 325 162, 348 162"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={isLineActive(4) ? 0 : 100}
                style={{
                  transition: 'stroke-dashoffset 460ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </mask>

            <mask id="lineMask5">
              <path
                d="M 155 218 C 148 245, 138 265, 132 280"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={isLineActive(5) ? 0 : 100}
                style={{
                  transition: 'stroke-dashoffset 460ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </mask>

            <mask id="lineMask6">
              <path
                d="M 252 218 C 280 240, 315 265, 348 281"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={isLineActive(6) ? 0 : 100}
                style={{
                  transition: 'stroke-dashoffset 460ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </mask>
          </defs>

          {/* 1. TOP-LEFT: Company Line */}
          <g>
            <path
              d="M 165 120 C 165 85, 135 52, 105 50"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.3"
              strokeDasharray="3 2.5"
              mask="url(#lineMask1)"
              style={{
                opacity: isLineActive(1) ? 1 : 0,
                transition: 'opacity 250ms ease-out',
              }}
            />
            {isCardActive(1) && (
              <circle r="1.5" fill="#8B5CF6" opacity="0.9">
                <animateMotion
                  path="M 105 50 C 135 52, 165 85, 165 120"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* 2. TOP-RIGHT: Target Line */}
          <g>
            <path
              d="M 238 120 C 245 85, 280 72, 310 77"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.3"
              strokeDasharray="3 2.5"
              mask="url(#lineMask2)"
              style={{
                opacity: isLineActive(2) ? 1 : 0,
                transition: 'opacity 250ms ease-out',
              }}
            />
            {isCardActive(2) && (
              <circle r="1.5" fill="#EF4444" opacity="0.9">
                <animateMotion
                  path="M 310 77 C 280 72, 245 85, 238 120"
                  dur="3.4s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* 3. MIDDLE-LEFT: People Line */}
          <g>
            <path
              d="M 138 168 C 124 168, 112 165, 104 165"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.3"
              strokeDasharray="3 2.5"
              mask="url(#lineMask3)"
              style={{
                opacity: isLineActive(3) ? 1 : 0,
                transition: 'opacity 250ms ease-out',
              }}
            />
            {isCardActive(3) && (
              <circle r="1.5" fill="#3B82F6" opacity="0.9">
                <animateMotion
                  path="M 104 165 C 112 165, 124 168, 138 168"
                  dur="3.6s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* 4. MIDDLE-RIGHT: Graph Line */}
          <g>
            <path
              d="M 268 168 C 295 168, 325 162, 348 162"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.3"
              strokeDasharray="3 2.5"
              mask="url(#lineMask4)"
              style={{
                opacity: isLineActive(4) ? 1 : 0,
                transition: 'opacity 250ms ease-out',
              }}
            />
            {isCardActive(4) && (
              <circle r="1.5" fill="#2563EB" opacity="0.9">
                <animateMotion
                  path="M 348 162 C 325 162, 295 168, 268 168"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* 5. BOTTOM-LEFT: Cart Line */}
          <g>
            <path
              d="M 155 218 C 148 245, 138 265, 132 280"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.3"
              strokeDasharray="3 2.5"
              mask="url(#lineMask5)"
              style={{
                opacity: isLineActive(5) ? 1 : 0,
                transition: 'opacity 250ms ease-out',
              }}
            />
            {isCardActive(5) && (
              <circle r="1.5" fill="#10B981" opacity="0.9">
                <animateMotion
                  path="M 132 280 C 138 265, 148 245, 155 218"
                  dur="3.8s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* 6. BOTTOM-RIGHT: Star Line */}
          <g>
            <path
              d="M 252 218 C 280 240, 315 265, 348 281"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.3"
              strokeDasharray="3 2.5"
              mask="url(#lineMask6)"
              style={{
                opacity: isLineActive(6) ? 1 : 0,
                transition: 'opacity 250ms ease-out',
              }}
            />
            {isCardActive(6) && (
              <circle r="1.5" fill="#F59E0B" opacity="0.9">
                <animateMotion
                  path="M 348 281 C 315 265, 280 240, 252 218"
                  dur="3.7s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        </svg>

        {/* ========================================================================= */}
        {/* 6 3D SATELLITE CARDS WITH EXACT JOINING BEAD PLACEMENTS                   */}
        {/* ========================================================================= */}

        {/* 1. TOP-LEFT: Company */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '30%',
            top: '20%',
            opacity: isCardActive(1) ? 1 : 0,
            transform: isCardActive(1)
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.85)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="relative w-[44px] sm:w-[48px] h-[40px] sm:h-[44px] rounded-[13px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFDFE] to-[#F7F9FC] p-1.5 flex flex-col items-center justify-between border border-white/95 shadow-[1px_1px_0_#E2E8F0,2px_2px_0_#DCE5EE,0_10px_20px_-3px_rgba(100,116,160,0.14),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
            style={{
              transform: 'perspective(600px) rotateX(10deg) rotateY(12deg) rotateZ(-2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Attached 3D Purple Bead on Right Edge */}
            <div className="absolute -right-1.5 top-[60%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#A855F7] to-[#6B21A8] shadow-[0_1.5px_3px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)] z-20" />
            
            <div className="w-4.5 h-4.5 flex items-center justify-center">
              <img
                src={companyIcon}
                alt="Company"
                className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>
            {/* Shimmering Skeleton Bars */}
            <div className="w-full flex flex-col items-center gap-[3px] pb-0.5">
              <div className="relative w-[75%] h-[3px] sm:h-[3.5px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.06)]">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]" />
              </div>
              <div className="relative w-[50%] h-[2.2px] sm:h-[2.6px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.04)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '180ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. TOP-RIGHT: Target */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '84.5%',
            top: '18.6%',
            opacity: isCardActive(2) ? 1 : 0,
            transform: isCardActive(2)
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.85)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="relative w-[44px] sm:w-[48px] h-[40px] sm:h-[44px] rounded-[13px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFDFE] to-[#F7F9FC] p-1.5 flex flex-col items-center justify-between border border-white/95 shadow-[1px_1px_0_#E2E8F0,2px_2px_0_#DCE5EE,0_10px_20px_-3px_rgba(100,116,160,0.14),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
            style={{
              transform: 'perspective(600px) rotateX(10deg) rotateY(-12deg) rotateZ(2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Attached 3D Red Bead on Left Edge */}
            <div className="absolute -left-1.5 top-[72%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#F87171] to-[#991B1B] shadow-[0_1.5px_3px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)] z-20" />

            <div className="w-4.5 h-4.5 flex items-center justify-center">
              <img
                src={arrowIcon}
                alt="Target"
                className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>
            {/* Shimmering Skeleton Bars */}
            <div className="w-full flex flex-col items-center gap-[3px] pb-0.5">
              <div className="relative w-[75%] h-[3px] sm:h-[3.5px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.06)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '120ms' }}
                />
              </div>
              <div className="relative w-[50%] h-[2.2px] sm:h-[2.6px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.04)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. MIDDLE-LEFT: People */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '19%',
            top: '45.8%',
            opacity: isCardActive(3) ? 1 : 0,
            transform: isCardActive(3)
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.85)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="relative w-[44px] sm:w-[48px] h-[40px] sm:h-[44px] rounded-[13px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFDFE] to-[#F7F9FC] p-1.5 flex flex-col items-center justify-between border border-white/95 shadow-[1px_1px_0_#E2E8F0,2px_2px_0_#DCE5EE,0_10px_20px_-3px_rgba(100,116,160,0.14),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
            style={{
              transform: 'perspective(600px) rotateX(4deg) rotateY(14deg) rotateZ(-1deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Attached 3D Blue Bead on Right Edge */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#60A5FA] to-[#1E40AF] shadow-[0_1.5px_3px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)] z-20" />

            <div className="w-4.5 h-4.5 flex items-center justify-center">
              <img
                src={peopleIcon}
                alt="People"
                className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>
            {/* Shimmering Skeleton Bars */}
            <div className="w-full flex flex-col items-center gap-[3px] pb-0.5">
              <div className="relative w-[75%] h-[3px] sm:h-[3.5px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.06)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '240ms' }}
                />
              </div>
              <div className="relative w-[50%] h-[2.2px] sm:h-[2.6px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.04)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '420ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. MIDDLE-RIGHT: Bar Graph */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '94%',
            top: '45%',
            opacity: isCardActive(4) ? 1 : 0,
            transform: isCardActive(4)
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.85)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="relative w-[44px] sm:w-[48px] h-[40px] sm:h-[44px] rounded-[13px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFDFE] to-[#F7F9FC] p-1.5 flex flex-col items-center justify-between border border-white/95 shadow-[1px_1px_0_#E2E8F0,2px_2px_0_#DCE5EE,0_10px_20px_-3px_rgba(100,116,160,0.14),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
            style={{
              transform: 'perspective(600px) rotateX(4deg) rotateY(-14deg) rotateZ(1deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Attached 3D Blue Bead on Left Edge */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#3B82F6] to-[#1D4ED8] shadow-[0_1.5px_3px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)] z-20" />

            <div className="w-4.5 h-4.5 flex items-center justify-center">
              <img
                src={graphIcon}
                alt="Bar Graph"
                className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>
            {/* Shimmering Skeleton Bars */}
            <div className="w-full flex flex-col items-center gap-[3px] pb-0.5">
              <div className="relative w-[75%] h-[3px] sm:h-[3.5px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.06)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '360ms' }}
                />
              </div>
              <div className="relative w-[50%] h-[2.2px] sm:h-[2.6px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.04)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '540ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM-LEFT: Cart */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '26%',
            top: '80%',
            opacity: isCardActive(5) ? 1 : 0,
            transform: isCardActive(5)
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.85)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="relative w-[44px] sm:w-[48px] h-[40px] sm:h-[44px] rounded-[13px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFDFE] to-[#F7F9FC] p-1.5 flex flex-col items-center justify-between border border-white/95 shadow-[1px_1px_0_#E2E8F0,2px_2px_0_#DCE5EE,0_10px_20px_-3px_rgba(100,116,160,0.14),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
            style={{
              transform: 'perspective(600px) rotateX(-8deg) rotateY(12deg) rotateZ(2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Attached 3D Teal Bead on Right Edge */}
            <div className="absolute -right-1.5 top-[32%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#34D399] to-[#047857] shadow-[0_1.5px_3px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)] z-20" />

            <div className="w-4.5 h-4.5 flex items-center justify-center">
              <img
                src={cartIcon}
                alt="Shopping Cart"
                className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>
            {/* Shimmering Skeleton Bars */}
            <div className="w-full flex flex-col items-center gap-[3px] pb-0.5">
              <div className="relative w-[75%] h-[3px] sm:h-[3.5px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.06)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '480ms' }}
                />
              </div>
              <div className="relative w-[50%] h-[2.2px] sm:h-[2.6px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.04)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '660ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT: Star */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '94%',
            top: '80.4%',
            opacity: isCardActive(6) ? 1 : 0,
            transform: isCardActive(6)
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.85)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="relative w-[44px] sm:w-[48px] h-[40px] sm:h-[44px] rounded-[13px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFDFE] to-[#F7F9FC] p-1.5 flex flex-col items-center justify-between border border-white/95 shadow-[1px_1px_0_#E2E8F0,2px_2px_0_#DCE5EE,0_10px_20px_-3px_rgba(100,116,160,0.14),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
            style={{
              transform: 'perspective(600px) rotateX(-8deg) rotateY(-12deg) rotateZ(-2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Attached 3D Gold Bead on Left Edge */}
            <div className="absolute -left-1.5 top-[32%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#FBBF24] to-[#B45309] shadow-[0_1.5px_3px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)] z-20" />

            <div className="w-4.5 h-4.5 flex items-center justify-center">
              <img
                src={starIcon}
                alt="Star"
                className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>
            {/* Shimmering Skeleton Bars */}
            <div className="w-full flex flex-col items-center gap-[3px] pb-0.5">
              <div className="relative w-[75%] h-[3px] sm:h-[3.5px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.06)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '600ms' }}
                />
              </div>
              <div className="relative w-[50%] h-[2.2px] sm:h-[2.6px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_0.8px_1px_rgba(0,0,0,0.04)]">
                <div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]"
                  style={{ animationDelay: '780ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTRAL 3D BROWSER WINDOW DASHBOARD                                       */}
        {/* ========================================================================= */}
        <div
          className="absolute z-20 left-1/2 top-[46.6%] -translate-x-1/2 -translate-y-1/2 w-[42.5%] aspect-[1.44/1]"
        >
          {/* 3D Browser Window Frame with Cross Tilt & Extruded Slab Edge */}
          <div
            className="w-full h-full rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#FBFDFF] to-[#F1F5F9] border border-white/95 p-1.5 sm:p-2 flex flex-col relative"
            style={{
              transform: 'perspective(700px) rotateX(10deg) rotateY(-13deg) rotateZ(1.5deg)',
              transformStyle: 'preserve-3d',
              boxShadow:
                '1px 1px 0px #E5EDF5, 2px 2px 0px #DEE8F2, 3px 3px 0px #D6E1EC, 4px 4px 0px #CDDBE7, 0 16px 32px -6px rgba(100, 116, 170, 0.16), inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(203, 213, 225, 0.35)',
            }}
          >
            {/* Top Bar: 3D Glossy Traffic Light Dots (Red, Yellow, Green) */}
            <div className="w-full flex items-center gap-1 pb-1 border-b border-slate-100/90">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#FF7B72] via-[#FF5F56] to-[#D93829] shadow-[0_1px_2px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.6)]" />
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#FFD269] via-[#FFBD2E] to-[#D99B16] shadow-[0_1px_2px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.6)]" />
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#52E36D] via-[#27C93F] to-[#1BA12E] shadow-[0_1px_2px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.6)]" />
            </div>

            {/* Browser Content Area */}
            <div className="flex-1 flex flex-col justify-between pt-1">
              {/* Top Split: Image placeholder (left) + Text lines (right) */}
              <div className="grid grid-cols-12 gap-1 items-center">
                {/* Left: 3D-styled Image Card with Mountain & Sun */}
                <div className="col-span-5 aspect-[1.15/1] rounded-lg bg-gradient-to-br from-[#E2E8F0] via-[#DCE4EE] to-[#CBD5E1] border border-white/80 p-0.5 flex flex-col justify-end relative overflow-hidden shadow-[inset_0_1.5px_2.5px_rgba(0,0,0,0.08),0_1.5px_2px_rgba(255,255,255,0.8)]">
                  {/* Sun Dot */}
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#94A3B8] shadow-inner" />
                  
                  {/* Mountain Graphic */}
                  <svg
                    viewBox="0 0 60 40"
                    className="w-full h-auto text-[#CBD5E1] drop-shadow-xs"
                    fill="currentColor"
                  >
                    <path d="M 3 36 L 20 14 L 38 36 Z" opacity="0.95" />
                    <path d="M 26 36 L 42 19 L 57 36 Z" opacity="0.75" />
                  </svg>

                  {/* Subtle Ambient Shimmer on image placeholder */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[skeleton-shimmer_3s_ease-in-out_infinite]" />
                </div>

                {/* Right: Paragraph Skeleton Lines with Clean Natural Shimmer */}
                <div className="col-span-7 flex flex-col gap-1 justify-center pr-0.5">
                  <div className="relative w-[88%] h-[3px] bg-[#94A3B8] rounded-full overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.08)]">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[skeleton-shimmer_2s_ease-in-out_infinite]" />
                  </div>
                  <div className="relative w-[100%] h-[2.8px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.06)]">
                    <div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[skeleton-shimmer_2s_ease-in-out_infinite]" 
                      style={{ animationDelay: '150ms' }}
                    />
                  </div>
                  <div className="relative w-[75%] h-[2.8px] bg-[#CBD5E1] rounded-full overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.06)]">
                    <div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[skeleton-shimmer_2s_ease-in-out_infinite]" 
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                  <div className="relative w-[55%] h-[2.4px] bg-[#E2E8F0] rounded-full overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)]">
                    <div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[skeleton-shimmer_2s_ease-in-out_infinite]" 
                      style={{ animationDelay: '450ms' }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row: 3 Rounded Cards with Subtle Shimmer */}
              <div className="grid grid-cols-3 gap-1 pt-0.5">
                <div className="relative h-2.5 sm:h-3 rounded-md bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1]/80 border border-white/70 overflow-hidden shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,255,255,0.9)]">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[skeleton-shimmer_2.4s_ease-in-out_infinite]" />
                </div>
                <div className="relative h-2.5 sm:h-3 rounded-md bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1]/80 border border-white/70 overflow-hidden shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,255,255,0.9)]">
                  <div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[skeleton-shimmer_2.4s_ease-in-out_infinite]" 
                    style={{ animationDelay: '200ms' }}
                  />
                </div>
                <div className="relative h-2.5 sm:h-3 rounded-md bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1]/80 border border-white/70 overflow-hidden shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,255,255,0.9)]">
                  <div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[skeleton-shimmer_2.4s_ease-in-out_infinite]" 
                    style={{ animationDelay: '400ms' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3D MAGNIFYING GLASS (ZOOM.PNG) - CLEAN SCANNING & INSPECTION MOTION       */}
        {/* ========================================================================= */}
        <div
          className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '58%',
            top: '50%',
            width: '22%',
            maxWidth: '96px',
          }}
        >
          {/* Smooth Natural Scanning Motion */}
          <div className="relative w-full aspect-square animate-[analyze-scan_7.5s_ease-in-out_infinite]">
            {/* 3D Magnifying Glass Artwork */}
            <img
              src={zoomIcon}
              alt="Zoom Analysis"
              className="w-full h-full object-contain drop-shadow-[0_10px_18px_rgba(79,70,229,0.25)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)] relative z-10"
              loading="lazy"
            />
            
            {/* Clean Optical Lens Reflection & Specular Sheen (Natural Glass Reflection) */}
            <div className="absolute top-[16%] left-[16%] w-[46%] h-[46%] rounded-full overflow-hidden pointer-events-none z-20">
              {/* Dynamic Glass Specular Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/40 to-transparent animate-[lens-flare_4.5s_ease-in-out_infinite]" />
              {/* Subtle Lens Focus Ring */}
              <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-white/40 animate-[lens-pulse_3s_ease-out_infinite]" />
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Keyframes for Scanning & Skeleton Loading */}
      <style>{`
        /* Smooth continuous skeleton loading shimmer sweep */
        @keyframes skeleton-shimmer {
          0% {
            transform: translateX(-150%);
          }
          50%, 100% {
            transform: translateX(250%);
          }
        }

        /* Smooth Natural Scanning Trajectory across content */
        @keyframes analyze-scan {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(-12px, -6px) rotate(-3deg) scale(1.04);
          }
          45% {
            transform: translate(-20px, 5px) rotate(-1.5deg) scale(1.06);
          }
          70% {
            transform: translate(-6px, 10px) rotate(2deg) scale(1.03);
          }
          85% {
            transform: translate(4px, 3px) rotate(1deg) scale(1.01);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
        }

        /* Natural Glass Specular Flare */
        @keyframes lens-flare {
          0%, 100% {
            transform: rotate(0deg) scale(0.95);
            opacity: 0.3;
          }
          50% {
            transform: rotate(180deg) scale(1.08);
            opacity: 0.75;
          }
        }

        /* Subtle Lens Focus Pulse */
        @keyframes lens-pulse {
          0% {
            transform: scale(0.3);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnalyseAnimation;
