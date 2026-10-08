import React, { useState, useEffect } from 'react';
import understandCoreHub from '../../../assets/home/understand_core_hub.png';

interface UnderstandVisualProps {
  className?: string;
}

export const UnderstandVisual: React.FC<UnderstandVisualProps> = ({ className = '' }) => {
  // Sequence precisely timed so ALL 5 cards popup sequentially within 2 seconds:
  // Step 0: 0ms   -> Start (cards ready)
  // Step 1: 220ms -> Card 0 (Company) connects and pops up
  // Step 2: 440ms -> Card 1 (Product & Services) connects and pops up
  // Step 3: 660ms -> Card 2 (Target Audience) connects and pops up
  // Step 4: 880ms -> Card 3 (Positioning) connects and pops up
  // Step 5: 1100ms -> Card 4 (What Makes You Different) connects and pops up (< 1.2s total!)
  // Steps 6..17: All cards remain fully open and streaming with data for ~2.6s before looping
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 17) return 0;
        return prev + 1;
      });
    }, 220);

    return () => clearInterval(timer);
  }, []);

  // 450 x 300 Coordinate System Matching Figma & User's Screenshot Exactly
  // Left: 3D browser + volumetric fluid stream ribbons + AI hub
  // Hub center: (226, 147), outer ring radius: 29px
  // All connector lines are neutral slate dashed lines (no line colors)
  // All 5 cards have stacked grey skeleton bars underneath the title (never overflowing)
  const cards = [
    {
      id: 0,
      title: 'Company',
      color: '#8B5CF6',
      iconBg: '#F3E8FF',
      iconColor: '#7C3AED',
      x: 286,
      y: 18,
      width: 100,
      dotX: 282,
      dotY: 37,
      barW1: 46,
      barW2: 28,
      // Starts at outer ring (241, 122), arches upward into purple dot at (282, 37)
      path: 'M 241 122 C 248 88, 260 52, 282 37',
    },
    {
      id: 1,
      title: 'Product & Services',
      color: '#0091FF',
      iconBg: '#EBF4FF',
      iconColor: '#0091FF',
      x: 312,
      y: 74,
      width: 122,
      dotX: 308,
      dotY: 93,
      barW1: 68,
      barW2: 42,
      // Starts at outer ring (252, 135), bows upward into blue dot at (308, 93)
      path: 'M 252 135 C 272 118, 290 102, 308 93',
    },
    {
      id: 2,
      title: 'Target Audience',
      color: '#00C853',
      iconBg: '#DCFCE7',
      iconColor: '#00C853',
      x: 320,
      y: 128,
      width: 118,
      dotX: 316,
      dotY: 147,
      barW1: 64,
      barW2: 40,
      // Starts at outer ring (255, 147), subtle horizontal wave into green dot at (316, 147)
      path: 'M 255 147 C 275 152, 295 143, 316 147',
    },
    {
      id: 3,
      title: 'Positioning',
      color: '#FF7A00',
      iconBg: '#FFEDD5',
      iconColor: '#FF7A00',
      x: 312,
      y: 182,
      width: 108,
      dotX: 308,
      dotY: 201,
      barW1: 52,
      barW2: 32,
      // Starts at outer ring (252, 159), bows downward into orange dot at (308, 201)
      path: 'M 252 159 C 272 176, 290 192, 308 201',
    },
    {
      id: 4,
      title: 'What Makes You Different',
      color: '#FF2D78',
      iconBg: '#FCE7F3',
      iconColor: '#FF2D78',
      x: 286,
      y: 236,
      width: 150,
      dotX: 282,
      dotY: 255,
      barW1: 94,
      barW2: 58,
      // Starts at outer ring (241, 172), arches downward into pink dot at (282, 255)
      path: 'M 241 172 C 248 206, 260 238, 282 255',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center bg-white overflow-hidden select-none p-1 sm:p-2 ${className}`}
    >
      <style>{`
        @keyframes streamPulse {
          0% {
            stroke-dashoffset: 19.2;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        @keyframes popGlow2s {
          0% {
            r: 2.8;
            opacity: 0.8;
          }
          50% {
            r: 5.4;
            opacity: 0.5;
          }
          100% {
            r: 6.8;
            opacity: 0;
          }
        }
        @keyframes skeletonPulse {
          0%, 100% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.9;
          }
        }
      `}</style>

      {/* SVG Canvas with 450 x 300 Proportions */}
      <svg
        viewBox="0 0 450 300"
        className="w-full h-full max-w-[450px] object-contain select-none"
      >
        <defs>
          {/* Card Elevation Drop Shadow */}
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.06" />
          </filter>
          <filter id="cardActiveShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="5.5" floodColor="#8B5CF6" floodOpacity="0.14" />
          </filter>

          {/* Glowing Endpoint Dot Filter */}
          <filter id="dotGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Skeleton Shimmer Highlight Gradient */}
          <linearGradient id="skeletonShimmerBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Precise ClipPaths for each card's stacked skeleton bars */}
          {cards.map((card) => (
            <clipPath key={`skeletonClip-${card.id}`} id={`skeletonClip-${card.id}`}>
              {/* Primary Top Bar (Long) */}
              <rect
                x={card.x + 36}
                y={card.y + 20}
                width={card.barW1}
                height="2.8"
                rx="1.4"
              />
              {/* Secondary Bottom Bar (Short) */}
              <rect
                x={card.x + 36}
                y={card.y + 26}
                width={card.barW2}
                height="2.8"
                rx="1.4"
              />
            </clipPath>
          ))}
        </defs>

        {/* 1. Left Graphic: 3D Browser + Volumetric Translucent Silk Wave Stream + Normal AI Hub */}
        <g style={{ animation: 'subtleFloat 5s ease-in-out infinite' }}>
          <image
            href={understandCoreHub}
            x="6"
            y="42"
            width="244"
            height="210"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none select-none"
          />
        </g>

        {/* 2. Neutral Dotted Curved Connector Lines (NO Colors on lines) & Solid Colored Endpoint Dots */}
        {cards.map((card) => {
          const isConnected = activeStep > card.id;
          const isJustConnecting = activeStep === card.id + 1;

          return (
            <g key={card.id}>
              {/* Neutral Slate Dotted Line with Sequential Connection */}
              <path
                d={card.path}
                fill="none"
                stroke={isConnected ? '#94A3B8' : 'transparent'}
                strokeWidth="1.2"
                strokeDasharray="2 2.8"
                strokeLinecap="round"
                opacity={isConnected ? 0.75 : 0}
                style={{
                  animation: isConnected ? 'streamPulse 1.2s linear infinite' : undefined,
                  transition: 'opacity 0.12s ease-in',
                }}
              />

              {/* Endpoint Solid Colored Dot Touching Left Border of Card */}
              <circle
                cx={card.dotX}
                cy={card.dotY}
                r={isJustConnecting ? 3.8 : isConnected ? 2.8 : 0}
                fill={card.color}
                opacity={isConnected ? 1 : 0}
                filter={isJustConnecting ? 'url(#dotGlowFilter)' : undefined}
                style={{
                  transition: 'r 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.12s ease-out',
                  transformBox: 'fill-box',
                  transformOrigin: 'center center',
                }}
              />

              {/* Flash Glow Pulse when Dot first touches the Box */}
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
                    animation: 'popGlow2s 0.28s ease-out forwards',
                  }}
                />
              )}
            </g>
          );
        })}

        {/* 3. Right Floating Intelligence Category Cards (Spring Popup within 2 seconds) */}
        {cards.map((card) => {
          const isPopped = activeStep > card.id;
          const isJustPopped = activeStep === card.id + 1;

          return (
            <g
              key={card.id}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'left center',
                transform: isPopped ? 'scale(1)' : 'scale(0)',
                opacity: isPopped ? 1 : 0,
                transition: 'transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.14s ease-out',
              }}
            >
              {/* Card Container Box - Clean White Card with Rounded Corners and Drop Shadow */}
              <rect
                x={card.x}
                y={card.y}
                width={card.width}
                height="38"
                rx="8"
                fill="#FFFFFF"
                stroke="#F1F5F9"
                strokeWidth="0.8"
                filter={isJustPopped ? 'url(#cardActiveShadow)' : 'url(#cardShadow)'}
              />

              {/* Category Colored Icon Box (26x26 squircle) */}
              <rect
                x={card.x + 5}
                y={card.y + 6}
                width="26"
                height="26"
                rx="6"
                fill={card.iconBg}
              />

              {/* Distinct Category Vector Icons */}
              {card.id === 0 && (
                /* Company - Architecture landmark */
                <g transform={`translate(${card.x + 5}, ${card.y + 6})`}>
                  <path
                    d="M 5 9 L 13 4.5 L 21 9 L 21 10.5 L 5 10.5 Z M 7 10.5 L 7 17.5 M 10.5 10.5 L 10.5 17.5 M 15.5 10.5 L 15.5 17.5 M 19 10.5 L 19 17.5 M 4 17.5 L 22 17.5 L 22 20 L 4 20 Z"
                    fill="none"
                    stroke={card.iconColor}
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              )}

              {card.id === 1 && (
                /* Product & Services - 3D Isometric Blue Cube with Gloss Specular Gleam matching image */
                <g transform={`translate(${card.x + 5}, ${card.y + 6})`}>
                  <path d="M 13 5.5 L 19.5 9.5 L 13 13.5 L 6.5 9.5 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="0.4" />
                  <path d="M 6.5 9.5 L 13 13.5 L 13 21 L 6.5 17 Z" fill="#0084FF" stroke="#0284C7" strokeWidth="0.4" />
                  <ellipse cx="9.8" cy="14.8" rx="2" ry="2.8" fill="#FFFFFF" opacity="0.85" />
                  <path d="M 13 13.5 L 19.5 9.5 L 19.5 17 L 13 21 Z" fill="#0066D6" stroke="#0284C7" strokeWidth="0.4" />
                </g>
              )}

              {card.id === 2 && (
                /* Target Audience - 2 Users / People */
                <g transform={`translate(${card.x + 5}, ${card.y + 6})`}>
                  <circle cx="10" cy="8.5" r="2.8" fill={card.iconColor} />
                  <path
                    d="M 5 20 C 5 16, 7.5 14.5, 10 14.5 C 12.5 14.5, 15 16, 15 20"
                    fill="none"
                    stroke={card.iconColor}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <circle cx="17" cy="10" r="2.2" fill={card.iconColor} opacity="0.85" />
                  <path
                    d="M 16 15.5 C 17.5 16, 20 17.2, 20 20"
                    fill="none"
                    stroke={card.iconColor}
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </g>
              )}

              {card.id === 3 && (
                /* Positioning - Bullseye Target */
                <g transform={`translate(${card.x + 5}, ${card.y + 6})`}>
                  <circle cx="13" cy="13" r="8" stroke={card.iconColor} strokeWidth="1.3" fill="none" opacity="0.3" />
                  <circle cx="13" cy="13" r="5" stroke={card.iconColor} strokeWidth="1.3" fill="none" />
                  <circle cx="13" cy="13" r="2.2" fill={card.iconColor} />
                </g>
              )}

              {card.id === 4 && (
                /* What Makes You Different - Faceted Gem / Diamond */
                <g transform={`translate(${card.x + 5}, ${card.y + 6})`}>
                  <path
                    d="M 7.5 7.5 L 18.5 7.5 L 22 12 L 13 21 L 4 12 Z"
                    fill="#FCE7F3"
                    stroke={card.iconColor}
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 4 12 L 22 12 M 7.5 7.5 L 13 12 L 18.5 7.5 M 13 12 L 13 21"
                    fill="none"
                    stroke={card.iconColor}
                    strokeWidth="1.1"
                  />
                </g>
              )}

              {/* Title Text */}
              <text
                x={card.x + 36}
                y={card.y + 13}
                fill="#1E293B"
                fontSize="8.5"
                fontWeight="500"
                fontFamily="Inter, system-ui, -apple-system, sans-serif"
                dominantBaseline="middle"
              >
                {card.title}
              </text>

              {/* Skeleton Loading Grey Bars (Stacked Vertically Under Title) */}
              <g>
                {/* Primary Top Bar (Long) */}
                <rect
                  x={card.x + 36}
                  y={card.y + 20}
                  width={card.barW1}
                  height="2.8"
                  rx="1.4"
                  fill="#CBD5E1"
                  style={{ animation: 'skeletonPulse 1.6s ease-in-out infinite' }}
                />

                {/* Secondary Bottom Bar (Short) */}
                <rect
                  x={card.x + 36}
                  y={card.y + 26}
                  width={card.barW2}
                  height="2.8"
                  rx="1.4"
                  fill="#CBD5E1"
                  opacity="0.75"
                  style={{ animation: 'skeletonPulse 1.6s ease-in-out infinite' }}
                />

                {/* Animated Shimmer Light Beam Sweeping Across Both Bars */}
                <g clipPath={`url(#skeletonClip-${card.id})`}>
                  <rect
                    x={card.x + 36 - 25}
                    y={card.y + 18}
                    width="26"
                    height="13"
                    fill="url(#skeletonShimmerBeam)"
                    opacity="0.9"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={`0 0; ${card.barW1 + 35} 0; ${card.barW1 + 35} 0`}
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

export default UnderstandVisual;
