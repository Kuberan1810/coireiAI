import React, { useState, useEffect } from 'react';
import findCardAccounts from '../../../assets/home/find_card_accounts.png';
import findCardPersonas from '../../../assets/home/find_card_personas.png';
import findCardDecisionMakers from '../../../assets/home/find_card_decision_makers.png';
import findAvatarTop from '../../../assets/home/find_avatar_top.png';
import findAvatarRight from '../../../assets/home/find_avatar_right.png';
import findAvatarBottomLeft from '../../../assets/home/find_avatar_bottom_left.png';
import findAvatarBottomRight from '../../../assets/home/find_avatar_bottom_right.png';

interface FindVisualProps {
  className?: string;
}

export const FindVisual: React.FC<FindVisualProps> = ({ className = '' }) => {
  // Snappy sequence where all 4 PFPs and all 3 Cards pop up sequentially under 1.1s:
  // Step 0: 0ms   -> Radar scanning active
  // Step 1: 140ms -> PFP 1 (Top) pops up
  // Step 2: 280ms -> PFP 2 (Right) pops up
  // Step 3: 420ms -> PFP 3 (Bottom-Left) pops up
  // Step 4: 560ms -> PFP 4 (Bottom-Right) pops up
  // Step 5: 700ms -> Connector 1 & Card 1 (High-Intent Accounts) pop up
  // Step 6: 840ms -> Connector 2 & Card 2 (Buyer Personas) pop up
  // Step 7: 980ms -> Connector 3 & Card 3 (Verified Decision-Makers) pop up
  // Steps 8..24: All remain active, streaming data & skeleton shimmers for ~2.6s, then loop
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 24) return 0;
        return prev + 1;
      });
    }, 140);

    return () => clearInterval(timer);
  }, []);

  // 4 Orbiting Avatars (Profile Pictures) with exact centers matching master artwork
  const avatars = [
    {
      id: 0,
      name: 'Top Avatar',
      image: findAvatarTop,
      x: 182.7,
      y: 86.8,
      cx: 195.4,
      cy: 99.5,
      size: 25.4,
      popStep: 1,
    },
    {
      id: 1,
      name: 'Right Avatar',
      image: findAvatarRight,
      x: 260.8,
      y: 111.9,
      cx: 273.5,
      cy: 124.6,
      size: 25.4,
      popStep: 2,
    },
    {
      id: 2,
      name: 'Bottom-Left Avatar',
      image: findAvatarBottomLeft,
      x: 171.2,
      y: 156.7,
      cx: 183.9,
      cy: 169.4,
      size: 25.4,
      popStep: 3,
    },
    {
      id: 3,
      name: 'Bottom-Right Avatar',
      image: findAvatarBottomRight,
      x: 244.3,
      y: 175.6,
      cx: 257.0,
      cy: 188.2,
      size: 25.4,
      popStep: 4,
    },
  ];

  // 3 Floating Cards with precise paths and skeleton clip paths
  const cards = [
    {
      id: 0,
      title: 'High-Intent Accounts',
      image: findCardAccounts,
      x: 18,
      y: 52,
      width: 118,
      height: 86,
      origin: 'right center',
      popStep: 5,
      startDotX: 168,
      startDotY: 92,
      cardDotX: 136,
      cardDotY: 72,
      path: 'M 168 92 C 158 92, 147 78, 136 72',
    },
    {
      id: 1,
      title: 'Buyer Personas',
      image: findCardPersonas,
      x: 22,
      y: 164,
      width: 116,
      height: 87,
      origin: 'right center',
      popStep: 6,
      startDotX: 162,
      startDotY: 185,
      cardDotX: 138,
      cardDotY: 192,
      path: 'M 162 185 C 153 185, 146 190, 138 192',
    },
    {
      id: 2,
      title: 'Verified Decision-Makers',
      image: findCardDecisionMakers,
      x: 324,
      y: 56,
      width: 110,
      height: 122,
      origin: 'left center',
      popStep: 7,
      startDotX: 292,
      startDotY: 108,
      cardDotX: 324,
      cardDotY: 82,
      path: 'M 292 108 C 304 108, 315 86, 324 82',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center bg-white overflow-hidden select-none p-1 sm:p-2 ${className}`}
    >
      <style>{`
        @keyframes subtleFloatRadar {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2.5px);
          }
        }
        @keyframes popGlowFind {
          0% {
            r: 2.8;
            opacity: 0.8;
          }
          50% {
            r: 5.5;
            opacity: 0.5;
          }
          100% {
            r: 6.8;
            opacity: 0;
          }
        }
      `}</style>

      {/* SVG Canvas with 450 x 300 Proportions */}
      <svg
        viewBox="0 0 450 300"
        className="w-full h-full max-w-[450px] object-contain select-none"
      >
        <defs>
          {/* Card Drop Shadows */}
          <filter id="findCardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.06" />
          </filter>
          <filter id="findCardActiveShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="5.5" floodColor="#6366F1" floodOpacity="0.16" />
          </filter>

          {/* Soft Ambient Inner Radar Gradient */}
          <radialGradient id="innerRadarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.32" />
            <stop offset="40%" stopColor="#C7D2FE" stopOpacity="0.16" />
            <stop offset="75%" stopColor="#E0E7FF" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Comet Tail Gradient for Orbit 2 Dots */}
          <linearGradient id="orbitCometTail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="40%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.95" />
          </linearGradient>

          {/* Center User Hub Gradient & Drop Shadow */}
          <linearGradient id="centerUserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <filter id="centerUserShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4F46E5" floodOpacity="0.35" />
          </filter>

          {/* Avatar Elevation Drop Shadow */}
          <filter id="findAvatarShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0F172A" floodOpacity="0.14" />
          </filter>

          {/* Glowing Endpoint Dot Filter */}
          <filter id="findDotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Skeleton Shimmer Sweep Gradient */}
          <linearGradient id="findSkeletonBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Clip path for skeleton bars on Card 1 (High-Intent Accounts) */}
          <clipPath id="findClipAccounts">
            <rect x="36" y="96" width="76" height="4.5" rx="2.25" />
            <rect x="36" y="109" width="66" height="4.5" rx="2.25" />
            <rect x="36" y="122" width="60" height="4.5" rx="2.25" />
          </clipPath>

          {/* Clip path for skeleton bars on Card 2 (Buyer Personas) */}
          <clipPath id="findClipPersonas">
            <rect x="35" y="228" width="84" height="4.5" rx="2.25" />
            <rect x="35" y="238" width="50" height="4.5" rx="2.25" />
          </clipPath>

          {/* Clip path for skeleton bars on Card 3 (Verified Decision-Makers) */}
          <clipPath id="findClipDecisionMakers">
            <rect x="362" y="100" width="42" height="4.5" rx="2.25" />
            <rect x="362" y="108" width="26" height="4.5" rx="2.25" />
            <rect x="362" y="123" width="42" height="4.5" rx="2.25" />
            <rect x="362" y="131" width="26" height="4.5" rx="2.25" />
            <rect x="362" y="146" width="42" height="4.5" rx="2.25" />
            <rect x="362" y="154" width="26" height="4.5" rx="2.25" />
          </clipPath>
        </defs>

        {/* 1. Center Radar Hub (100% Pure Code / Clean SVG Vector) */}
        {/* 1. Center Radar Hub (Pure SVG Vector with Inner Gradient & Spinning Orbit Dots) */}
        <g style={{ animation: 'subtleFloatRadar 6s ease-in-out infinite' }}>
          {/* Soft Luminous Inner Ambient Gradient */}
          <circle
            cx="226"
            cy="134"
            r="52"
            fill="url(#innerRadarGradient)"
            className="pointer-events-none"
          />

          {/* 4 Vector Concentric Radar Orbit Rings */}
          <circle
            cx="226"
            cy="134"
            r="82"
            fill="none"
            stroke="#E8E9FD"
            strokeWidth="1.1"
            className="pointer-events-none"
          />
          <circle
            cx="226"
            cy="134"
            r="68"
            fill="none"
            stroke="#DFE1FD"
            strokeWidth="1.1"
            className="pointer-events-none"
          />
          <circle
            cx="226"
            cy="134"
            r="52"
            fill="none"
            stroke="#D6D8FC"
            strokeWidth="1.1"
            className="pointer-events-none"
          />
          <circle
            cx="226"
            cy="134"
            r="36"
            fill="none"
            stroke="#CDD0FC"
            strokeWidth="1.1"
            className="pointer-events-none"
          />

          {/* 3 Spinning Dots with Tails on Second Orbit From Inside (r=52) */}
          <g className="pointer-events-none">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 226 134"
              to="360 226 134"
              dur="12s"
              repeatCount="indefinite"
            />

            {/* Dot 1 with Tail (at 0 deg) */}
            <g>
              <path
                d="M 271.0 108.0 A 52 52 0 0 1 278 134"
                fill="none"
                stroke="url(#orbitCometTail)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="278" cy="134" r="2.8" fill="#6366F1" />
            </g>

            {/* Dot 2 with Tail (at 120 deg) */}
            <g transform="rotate(120 226 134)">
              <path
                d="M 271.0 108.0 A 52 52 0 0 1 278 134"
                fill="none"
                stroke="url(#orbitCometTail)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="278" cy="134" r="2.8" fill="#6366F1" />
            </g>

            {/* Dot 3 with Tail (at 240 deg) */}
            <g transform="rotate(240 226 134)">
              <path
                d="M 271.0 108.0 A 52 52 0 0 1 278 134"
                fill="none"
                stroke="url(#orbitCometTail)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="278" cy="134" r="2.8" fill="#6366F1" />
            </g>
          </g>

          {/* Central Purple User Badge */}
          <circle
            cx="226"
            cy="134"
            r="12.5"
            fill="url(#centerUserGrad)"
            filter="url(#centerUserShadow)"
            className="pointer-events-none"
          />

          {/* Crisp White User Silhouette Inside Badge */}
          {/* User Head */}
          <circle cx="226" cy="130.2" r="3.1" fill="#FFFFFF" className="pointer-events-none" />
          {/* User Body */}
          <path
            d="M 221.2 139.5 C 221.2 135.8, 223.2 134.2, 226 134.2 C 228.8 134.2, 230.8 135.8, 230.8 139.5 Z"
            fill="#FFFFFF"
            className="pointer-events-none"
          />

          {/* 2. Orbiting Profile Pictures (PFPs) with Spring Popup Animation */}
          {avatars.map((av) => {
            const isPopped = activeStep >= av.popStep;

            return (
              <g
                key={av.id}
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center center',
                  transform: isPopped ? 'scale(1)' : 'scale(0)',
                  opacity: isPopped ? 1 : 0,
                  transition:
                    'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.16s ease-out',
                }}
              >
                <image
                  href={av.image}
                  x={av.x}
                  y={av.y}
                  width={av.size}
                  height={av.size}
                  preserveAspectRatio="xMidYMid meet"
                  filter="url(#findAvatarShadow)"
                  className="select-none pointer-events-none"
                />
              </g>
            );
          })}
        </g>

        {/* 3. Curved Connector Lines & Glowing Connection Nodes */}
        {cards.map((card) => {
          const isConnected = activeStep >= card.popStep;
          const isJustConnecting = activeStep === card.popStep;

          return (
            <g key={card.id}>
              {/* Single Solid Curved Connector Line End-to-End */}
              <path
                d={card.path}
                fill="none"
                stroke={isConnected ? '#6366F1' : 'transparent'}
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity={isConnected ? 0.9 : 0}
                pathLength="1"
                strokeDasharray="1"
                style={{
                  strokeDashoffset: isConnected ? 0 : 1,
                  transition:
                    'stroke-dashoffset 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease-out',
                }}
              />

              {/* Start Dot on Radar Orbit */}
              <circle
                cx={card.startDotX}
                cy={card.startDotY}
                r={isConnected ? 3 : 0}
                fill="#6366F1"
                opacity={isConnected ? 1 : 0}
                style={{
                  transition: 'r 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.14s ease-out',
                }}
              />

              {/* Card Entrance Dot */}
              <circle
                cx={card.cardDotX}
                cy={card.cardDotY}
                r={isJustConnecting ? 4 : isConnected ? 3 : 0}
                fill="#4F46E5"
                opacity={isConnected ? 1 : 0}
                filter={isJustConnecting ? 'url(#findDotGlow)' : undefined}
                style={{
                  transition: 'r 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.14s ease-out',
                  transformBox: 'fill-box',
                  transformOrigin: 'center center',
                }}
              />

              {/* Expanding Flash Pulse on Card Connection */}
              {isJustConnecting && (
                <circle
                  cx={card.cardDotX}
                  cy={card.cardDotY}
                  r="5.5"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="1.2"
                  opacity="0.8"
                  style={{
                    animation: 'popGlowFind 0.28s ease-out forwards',
                  }}
                />
              )}
            </g>
          );
        })}

        {/* 4. Floating Detail Cards (Snappy Spring Popup + Skeleton Shimmer Sweep) */}
        {cards.map((card) => {
          const isPopped = activeStep >= card.popStep;
          const isJustPopped = activeStep === card.popStep;

          return (
            <g
              key={card.id}
              style={{
                transformBox: 'fill-box',
                transformOrigin: card.origin,
                transform: isPopped ? 'scale(1)' : 'scale(0)',
                opacity: isPopped ? 1 : 0,
                transition:
                  'transform 0.26s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.15s ease-out',
              }}
            >
              {/* Floating Card Image Layer */}
              <image
                href={card.image}
                x={card.x}
                y={card.y}
                width={card.width}
                height={card.height}
                preserveAspectRatio="xMidYMid meet"
                filter={isJustPopped ? 'url(#findCardActiveShadow)' : 'url(#findCardShadow)'}
                className="pointer-events-none select-none"
              />

              {/* Active Skeleton Loading Shimmer Beam on Card 1 */}
              {card.id === 0 && isPopped && (
                <g clipPath="url(#findClipAccounts)">
                  <rect
                    x="15"
                    y="90"
                    width="28"
                    height="42"
                    fill="url(#findSkeletonBeam)"
                    opacity="0.9"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 110 0; 110 0"
                      keyTimes="0; 0.7; 1"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              )}

              {/* Active Skeleton Loading Shimmer Beam on Card 2 */}
              {card.id === 1 && isPopped && (
                <g clipPath="url(#findClipPersonas)">
                  <rect
                    x="15"
                    y="222"
                    width="28"
                    height="26"
                    fill="url(#findSkeletonBeam)"
                    opacity="0.9"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 110 0; 110 0"
                      keyTimes="0; 0.7; 1"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              )}

              {/* Active Skeleton Loading Shimmer Beam on Card 3 */}
              {card.id === 2 && isPopped && (
                <g clipPath="url(#findClipDecisionMakers)">
                  <rect
                    x="340"
                    y="95"
                    width="26"
                    height="70"
                    fill="url(#findSkeletonBeam)"
                    opacity="0.9"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 80 0; 80 0"
                      keyTimes="0; 0.7; 1"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default FindVisual;
