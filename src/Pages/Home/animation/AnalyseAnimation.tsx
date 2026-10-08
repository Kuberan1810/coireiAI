import React, { useState, useEffect } from 'react';
import companyIcon from '../../../assets/home/animation/company.png';
import arrowIcon from '../../../assets/home/animation/arrow.png';
import peopleIcon from '../../../assets/home/animation/people.png';
import graphIcon from '../../../assets/home/animation/graph.png';
import cartIcon from '../../../assets/home/animation/cart.png';
import starIcon from '../../../assets/home/animation/star.png';
import zoomIcon from '../../../assets/home/animation/zoom.png';

interface AnalyseAnimationProps {
  className?: string;
}

export const AnalyseAnimation: React.FC<AnalyseAnimationProps> = ({ className = '' }) => {
  // Step sequence:
  // Step 0: 0ms   -> Start / reset (hidden)
  // Step 1: 200ms -> 1st: CENTER BROWSER reveals (spring pops up from center)
  // Step 2: 400ms -> 3D Magnifying Glass reveals & lands on dashboard
  // Step 3: 600ms -> Small Card 0 (Company - Purple) connects & spring pops up
  // Step 4: 800ms -> Small Card 1 (Target - Red) connects & spring pops up
  // Step 5: 1000ms -> Small Card 2 (People - Blue) connects & spring pops up
  // Step 6: 1200ms -> Small Card 3 (Graph - Green) connects & spring pops up
  // Step 7: 1400ms -> Small Card 4 (Cart - Amber) connects & spring pops up
  // Step 8: 1600ms -> Small Card 5 (Star - Pink) connects & spring pops up
  // Steps 9..26: All cards remain open, streaming data & live shimmers for ~3.6s before looping
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 26) return 0;
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const isBrowserPopped = activeStep >= 1;
  const isZoomPopped = activeStep >= 2;

  // 6 Floating Intelligence Category Cards in 450 x 300 SVG Coordinate Grid
  const cards = [
    {
      id: 0,
      title: 'Company',
      icon: companyIcon,
      color: '#8B5CF6',
      iconBg: '#F3E8FF',
      x: 42,
      y: 28,
      width: 58,
      height: 52,
      origin: 'right center',
      dotX: 100,
      dotY: 54,
      path: 'M 152 98 C 138 72, 118 56, 100 54',
      popStep: 3,
    },
    {
      id: 1,
      title: 'Target',
      icon: arrowIcon,
      color: '#EF4444',
      iconBg: '#FEE2E2',
      x: 350,
      y: 28,
      width: 58,
      height: 52,
      origin: 'left center',
      dotX: 350,
      dotY: 54,
      path: 'M 298 98 C 312 72, 332 56, 350 54',
      popStep: 4,
    },
    {
      id: 2,
      title: 'People',
      icon: peopleIcon,
      color: '#3B82F6',
      iconBg: '#DBEAFE',
      x: 24,
      y: 124,
      width: 58,
      height: 52,
      origin: 'right center',
      dotX: 82,
      dotY: 150,
      path: 'M 133 150 C 114 150, 98 150, 82 150',
      popStep: 5,
    },
    {
      id: 3,
      title: 'Graph',
      icon: graphIcon,
      color: '#10B981',
      iconBg: '#D1FAE5',
      x: 368,
      y: 124,
      width: 58,
      height: 52,
      origin: 'left center',
      dotX: 368,
      dotY: 150,
      path: 'M 317 150 C 336 150, 352 150, 368 150',
      popStep: 6,
    },
    {
      id: 4,
      title: 'Cart',
      icon: cartIcon,
      color: '#F59E0B',
      iconBg: '#FEF3C7',
      x: 46,
      y: 220,
      width: 58,
      height: 52,
      origin: 'right center',
      dotX: 104,
      dotY: 246,
      path: 'M 152 202 C 138 228, 120 244, 104 246',
      popStep: 7,
    },
    {
      id: 5,
      title: 'Star',
      icon: starIcon,
      color: '#EC4899',
      iconBg: '#FCE7F3',
      x: 346,
      y: 220,
      width: 58,
      height: 52,
      origin: 'left center',
      dotX: 346,
      dotY: 246,
      path: 'M 298 202 C 312 228, 330 244, 346 246',
      popStep: 8,
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center bg-white overflow-hidden select-none p-1 sm:p-2 ${className}`}
    >
      <style>{`
        @keyframes streamPulseAnalyse {
          0% {
            stroke-dashoffset: 19.2;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes subtleFloatBrowser {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        @keyframes popGlowAnalyse2s {
          0% {
            r: 2.8;
            opacity: 0.85;
          }
          50% {
            r: 5.5;
            opacity: 0.5;
          }
          100% {
            r: 7.0;
            opacity: 0;
          }
        }
        @keyframes skeletonPulseAnalyse {
          0%, 100% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.9;
          }
        }
        @keyframes zoomScanMotion {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(-10px, -6px) rotate(-3deg) scale(1.03);
          }
          45% {
            transform: translate(-16px, 4px) rotate(-1.5deg) scale(1.05);
          }
          70% {
            transform: translate(-5px, 8px) rotate(2deg) scale(1.02);
          }
          85% {
            transform: translate(3px, 2px) rotate(1deg) scale(1.01);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
        }
        @keyframes lensGleam {
          0%, 100% {
            opacity: 0.25;
            transform: rotate(0deg) scale(0.95);
          }
          50% {
            opacity: 0.75;
            transform: rotate(180deg) scale(1.06);
          }
        }
      `}</style>

      {/* SVG Canvas with 450 x 300 Proportions matching UnderstandVisual */}
      <svg
        viewBox="0 0 450 300"
        className="w-full h-full max-w-[450px] object-contain select-none"
      >
        <defs>
          {/* Card Elevation Drop Shadow */}
          <filter id="analyseCardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
          <filter id="analyseCardActiveShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="5.5" floodColor="#8B5CF6" floodOpacity="0.16" />
          </filter>

          {/* Central 3D Browser Window Shadow */}
          <filter id="browserShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748B" floodOpacity="0.12" />
          </filter>

          {/* Glowing Endpoint Dot Filter */}
          <filter id="dotGlowFilterAnalyse" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Skeleton Shimmer Sweep Gradient */}
          <linearGradient id="shimmerBeamAnalyse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Browser Window Gradient */}
          <linearGradient id="browserFrameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FBFDFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>

          {/* Image Placeholder Card Gradient */}
          <linearGradient id="imgCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#DCE4EE" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* ClipPaths for each card's skeleton bars */}
          {cards.map((card) => (
            <clipPath key={`clip-${card.id}`} id={`clip-${card.id}`}>
              <rect x={card.x + 10} y={card.y + 34} width="38" height="3.5" rx="1.75" />
              <rect x={card.x + 14} y={card.y + 41} width="30" height="3" rx="1.5" />
            </clipPath>
          ))}

          {/* ClipPath for Central Browser skeleton bars */}
          <clipPath id="browserSkeletonClip">
            <rect x="204" y="116" width="96" height="4.5" rx="2.25" />
            <rect x="204" y="125" width="82" height="4" rx="2" />
            <rect x="204" y="133" width="90" height="4" rx="2" />
            <rect x="204" y="141" width="64" height="3.5" rx="1.75" />
          </clipPath>
        </defs>

        {/* ========================================================================= */}
        {/* 1. CENTRAL 3D BROWSER DASHBOARD (Reveals 1st at Step 1 & 2)                */}
        {/* ========================================================================= */}
        <g
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center center',
            transform: isBrowserPopped ? 'scale(1)' : 'scale(0.75)',
            opacity: isBrowserPopped ? 1 : 0,
            transition:
              'transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.22s ease-out',
            animation: isBrowserPopped ? 'subtleFloatBrowser 5s ease-in-out infinite' : undefined,
          }}
        >
          {/* Outer Browser Card */}
          <rect
            x="133"
            y="87"
            width="184"
            height="126"
            rx="14"
            fill="url(#browserFrameGrad)"
            stroke="#E2E8F0"
            strokeWidth="0.9"
            filter="url(#browserShadow)"
          />

          {/* Window Top Bar Traffic Lights */}
          <circle cx="145" cy="97" r="3.2" fill="#FF5F56" />
          <circle cx="154" cy="97" r="3.2" fill="#FFBD2E" />
          <circle cx="163" cy="97" r="3.2" fill="#27C93F" />

          {/* Header Divider Line */}
          <line x1="133" y1="104" x2="317" y2="104" stroke="#F1F5F9" strokeWidth="0.8" />

          {/* Left: Image Placeholder (Mountain & Sun) */}
          <rect
            x="143"
            y="112"
            width="52"
            height="44"
            rx="6"
            fill="url(#imgCardGrad)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          {/* Sun Dot */}
          <circle cx="186" cy="120" r="2.2" fill="#94A3B8" />
          {/* Mountain Silhouettes */}
          <path d="M 147 152 L 160 134 L 174 152 Z" fill="#CBD5E1" />
          <path d="M 166 152 L 178 138 L 191 152 Z" fill="#94A3B8" opacity="0.8" />

          {/* Right: Paragraph Skeleton Lines */}
          <g>
            <rect
              x="204"
              y="116"
              width="96"
              height="4.5"
              rx="2.25"
              fill="#94A3B8"
              style={{ animation: 'skeletonPulseAnalyse 1.6s ease-in-out infinite' }}
            />
            <rect
              x="204"
              y="125"
              width="82"
              height="4"
              rx="2"
              fill="#CBD5E1"
              style={{ animation: 'skeletonPulseAnalyse 1.6s ease-in-out infinite' }}
            />
            <rect
              x="204"
              y="133"
              width="90"
              height="4"
              rx="2"
              fill="#CBD5E1"
              style={{ animation: 'skeletonPulseAnalyse 1.6s ease-in-out infinite' }}
            />
            <rect
              x="204"
              y="141"
              width="64"
              height="3.5"
              rx="1.75"
              fill="#E2E8F0"
              style={{ animation: 'skeletonPulseAnalyse 1.6s ease-in-out infinite' }}
            />

            {/* Sweep Shimmer on Paragraph Lines */}
            <g clipPath="url(#browserSkeletonClip)">
              <rect x="180" y="112" width="40" height="38" fill="url(#shimmerBeamAnalyse)" opacity="0.9">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 130 0; 130 0"
                  keyTimes="0; 0.7; 1"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          </g>

          {/* Bottom 3 Mini-Cards in Browser */}
          <rect x="143" y="164" width="48" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
          <rect x="149" y="172" width="36" height="3" rx="1.5" fill="#CBD5E1" />
          <rect x="149" y="179" width="24" height="2.5" rx="1.25" fill="#E2E8F0" />
          <rect x="149" y="186" width="30" height="2.5" rx="1.25" fill="#E2E8F0" />

          <rect x="201" y="164" width="48" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
          <rect x="207" y="172" width="36" height="3" rx="1.5" fill="#CBD5E1" />
          <rect x="207" y="179" width="24" height="2.5" rx="1.25" fill="#E2E8F0" />
          <rect x="207" y="186" width="30" height="2.5" rx="1.25" fill="#E2E8F0" />

          <rect x="259" y="164" width="48" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
          <rect x="265" y="172" width="36" height="3" rx="1.5" fill="#CBD5E1" />
          <rect x="265" y="179" width="24" height="2.5" rx="1.25" fill="#E2E8F0" />
          <rect x="265" y="186" width="30" height="2.5" rx="1.25" fill="#E2E8F0" />

          {/* 3D Magnifying Glass Artwork (zoom.png) with Smooth Entrance & Scanning */}
          <g
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center center',
              transform: isZoomPopped ? 'scale(1)' : 'scale(0)',
              opacity: isZoomPopped ? 1 : 0,
              transition:
                'transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.18s ease-out',
            }}
          >
            <g style={{ animation: isZoomPopped ? 'zoomScanMotion 7.5s ease-in-out infinite' : undefined }}>
              <image
                href={zoomIcon}
                x="208"
                y="108"
                width="92"
                height="92"
                preserveAspectRatio="xMidYMid meet"
                className="pointer-events-none select-none"
              />
              {/* Dynamic Glass Specular Flare */}
              <circle
                cx="237"
                cy="137"
                r="17"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                opacity="0.45"
                style={{ animation: 'lensGleam 4.5s ease-in-out infinite' }}
              />
            </g>
          </g>
        </g>

        {/* ========================================================================= */}
        {/* 2. DOTTED CONNECTOR LINES & STREAMING PULSES                              */}
        {/* ========================================================================= */}
        {cards.map((card) => {
          const isConnected = activeStep >= card.popStep;
          const isJustConnecting = activeStep === card.popStep;

          return (
            <g key={`conn-${card.id}`}>
              {/* Neutral Slate Dotted Line with Sequential Connection & Stream Pulse */}
              <path
                d={card.path}
                fill="none"
                stroke={isConnected ? '#94A3B8' : 'transparent'}
                strokeWidth="1.2"
                strokeDasharray="2 2.8"
                strokeLinecap="round"
                opacity={isConnected ? 0.75 : 0}
                style={{
                  animation: isConnected ? 'streamPulseAnalyse 1.2s linear infinite' : undefined,
                  transition: 'opacity 0.12s ease-in',
                }}
              />

              {/* Endpoint Solid Colored Dot Touching Border of Card */}
              <circle
                cx={card.dotX}
                cy={card.dotY}
                r={isJustConnecting ? 3.8 : isConnected ? 2.8 : 0}
                fill={card.color}
                opacity={isConnected ? 1 : 0}
                filter={isJustConnecting ? 'url(#dotGlowFilterAnalyse)' : undefined}
                style={{
                  transition: 'r 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.12s ease-out',
                  transformBox: 'fill-box',
                  transformOrigin: 'center center',
                }}
              />

              {/* Flash Glow Pulse when Dot first connects */}
              {isJustConnecting && (
                <circle
                  cx={card.dotX}
                  cy={card.dotY}
                  r="5.5"
                  fill="none"
                  stroke={card.color}
                  strokeWidth="1.2"
                  opacity="0.8"
                  style={{
                    animation: 'popGlowAnalyse2s 0.28s ease-out forwards',
                  }}
                />
              )}
            </g>
          );
        })}

        {/* ========================================================================= */}
        {/* 3. 6 FLOATING INTELLIGENCE CATEGORY CARDS (Pop after center card)         */}
        {/* ========================================================================= */}
        {cards.map((card) => {
          const isPopped = activeStep >= card.popStep;
          const isJustPopped = activeStep === card.popStep;

          return (
            <g
              key={`card-${card.id}`}
              style={{
                transformBox: 'fill-box',
                transformOrigin: card.origin,
                transform: isPopped ? 'scale(1)' : 'scale(0)',
                opacity: isPopped ? 1 : 0,
                transition:
                  'transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.14s ease-out',
              }}
            >
              {/* Card Container Box */}
              <rect
                x={card.x}
                y={card.y}
                width={card.width}
                height={card.height}
                rx="10"
                fill="#FFFFFF"
                stroke="#F1F5F9"
                strokeWidth="0.9"
                filter={isJustPopped ? 'url(#analyseCardActiveShadow)' : 'url(#analyseCardShadow)'}
              />

              {/* Category Icon */}
              <image
                href={card.icon}
                x={card.x + (card.width - 24) / 2}
                y={card.y + 6}
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                className="pointer-events-none select-none"
              />

              {/* Skeleton Loading Grey Bars Underneath Icon */}
              <g>
                {/* Top Skeleton Bar */}
                <rect
                  x={card.x + 10}
                  y={card.y + 34}
                  width="38"
                  height="3.5"
                  rx="1.75"
                  fill="#CBD5E1"
                  style={{ animation: 'skeletonPulseAnalyse 1.6s ease-in-out infinite' }}
                />

                {/* Bottom Skeleton Bar */}
                <rect
                  x={card.x + 14}
                  y={card.y + 41}
                  width="30"
                  height="3"
                  rx="1.5"
                  fill="#E2E8F0"
                  style={{ animation: 'skeletonPulseAnalyse 1.6s ease-in-out infinite' }}
                />

                {/* Shimmer Light Beam Sweeping Across Both Bars */}
                <g clipPath={`url(#clip-${card.id})`}>
                  <rect
                    x={card.x - 15}
                    y={card.y + 32}
                    width="24"
                    height="16"
                    fill="url(#shimmerBeamAnalyse)"
                    opacity="0.9"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={`0 0; ${card.width + 25} 0; ${card.width + 25} 0`}
                      keyTimes="0; 0.7; 1"
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default AnalyseAnimation;
