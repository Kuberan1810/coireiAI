import React, { useEffect, useRef } from 'react';
import { Mail, User } from 'lucide-react';

export const EngageAgentVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const capsule1Ref = useRef<HTMLDivElement>(null);
  const capsule2Ref = useRef<HTMLDivElement>(null);
  const capsule3Ref = useRef<HTMLDivElement>(null);

  const spoke1Ref = useRef<SVGLineElement>(null);
  const spoke2Ref = useRef<SVGLineElement>(null);
  const spoke3Ref = useRef<SVGLineElement>(null);

  const dot1Ref = useRef<SVGCircleElement>(null);
  const dot2Ref = useRef<SVGCircleElement>(null);
  const dot3Ref = useRef<SVGCircleElement>(null);

  const circleOrbitRef = useRef<SVGCircleElement>(null);
  const ellipseRef = useRef<SVGEllipseElement>(null);

  const isPausedRef = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Center coordinates in SVG viewBox (450 x 360)
    const cx = 225;
    const cy = 180;

    // Initial angles matching nodes on the inner circle:
    // Capsule 1 ("Personalized Outreach"): top-left (~ -108 deg)
    // Capsule 2 ("Smart Follow-ups"): center-right (~ 14 deg)
    // Capsule 3 ("Build Relationships"): bottom-left (~ 135 deg)
    const initialAngles = [
      -Math.PI * 0.6, // ~-108 deg (top-left)
      Math.PI * 0.08, // ~14 deg (center-right)
      Math.PI * 0.75, // ~135 deg (bottom-left)
    ];

    let currentAngleOffset = 0;
    let lastTime = performance.now();
    let animId: number;

    const capsules = [capsule1Ref.current, capsule2Ref.current, capsule3Ref.current];
    const spokes = [spoke1Ref.current, spoke2Ref.current, spoke3Ref.current];
    const dots = [dot1Ref.current, dot2Ref.current, dot3Ref.current];

    const updatePositions = (angleOffset: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width || 450;
      const h = rect?.height || 360;

      const isMobile = w < 480;

      // Well-proportioned orbit radius so enlarged capsules fit comfortably inside the card
      const radius = isMobile ? 70 : 84;
      const ellipseRx = isMobile ? 168 : 202.22;
      const ellipseRy = isMobile ? 100 : 119;

      // Update SVG orbit guide paths
      if (circleOrbitRef.current) {
        circleOrbitRef.current.setAttribute('r', String(radius));
      }
      if (ellipseRef.current) {
        ellipseRef.current.setAttribute('rx', String(ellipseRx));
        ellipseRef.current.setAttribute('ry', String(ellipseRy));
      }

      // SVG scale and centering within containerRef (preserveAspectRatio="xMidYMid meet")
      const svgScale = Math.min(w / 450, h / 360);
      const svgRenderW = 450 * svgScale;
      const svgRenderH = 360 * svgScale;
      const offsetX = (w - svgRenderW) / 2;
      const offsetY = (h - svgRenderH) / 2;

      // Enlarged capsule scale for mobile (0.82 instead of 0.65)
      const capScale = isMobile ? 0.82 : 1;

      for (let i = 0; i < 3; i++) {
        const theta = initialAngles[i] + angleOffset;
        // Circular coords in SVG viewBox space
        const svgX = cx + radius * Math.cos(theta);
        const svgY = cy + radius * Math.sin(theta);

        // Update Capsule Position in container HTML coords
        const posX = offsetX + svgX * svgScale;
        const posY = offsetY + svgY * svgScale;

        const cap = capsules[i];
        if (cap) {
          cap.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%) scale(${capScale})`;
        }

        // Update SVG Spoke Line
        const spoke = spokes[i];
        if (spoke) {
          spoke.setAttribute('x1', String(cx));
          spoke.setAttribute('y1', String(cy));
          spoke.setAttribute('x2', String(svgX));
          spoke.setAttribute('y2', String(svgY));
        }

        // Update Orbital Node Dot
        const dot = dots[i];
        if (dot) {
          dot.setAttribute('cx', String(svgX));
          dot.setAttribute('cy', String(svgY));
        }
      }
    };

    // Set initial positions immediately
    updatePositions(0);

    const handleResize = () => {
      updatePositions(currentAngleOffset);
    };
    window.addEventListener('resize', handleResize);

    if (prefersReducedMotion) {
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    // Smooth continuous orbit loop (24 seconds per full 360 revolution)
    const orbitDuration = 24000; // ms
    const speed = (2 * Math.PI) / orbitDuration;

    const loop = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPausedRef.current) {
        currentAngleOffset += delta * speed;
        if (currentAngleOffset >= 2 * Math.PI) {
          currentAngleOffset -= 2 * Math.PI;
        }
        updatePositions(currentAngleOffset);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      className="relative w-full h-[270px] sm:h-[320px] md:h-[365px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Background SVG Orbital Geometry */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 450 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer Guide Ellipse from Figma */}
        <ellipse
          ref={ellipseRef}
          cx="225"
          cy="180"
          rx="202.22"
          ry="119"
          transform="rotate(-15.46 225 180)"
          stroke="#3B82F6"
          strokeOpacity="0.1"
          strokeWidth="1.24"
        />

        {/* Inner Dotted Circle */}
        <circle
          ref={circleOrbitRef}
          cx="225"
          cy="180"
          r="84"
          stroke="#93C5FD"
          strokeWidth="1.24"
          strokeOpacity="0.65"
          strokeDasharray="3.3 3.3"
        />

        {/* Dynamic Dashed Radial Spokes (Figma inspect: border 1.24px, dashed 2.47px, color #93C5FD 50%) */}
        <line
          ref={spoke1Ref}
          stroke="#93C5FD"
          strokeWidth="1.24"
          strokeOpacity="0.5"
          strokeDasharray="2.47 2.47"
          strokeLinecap="round"
        />
        <line
          ref={spoke2Ref}
          stroke="#93C5FD"
          strokeWidth="1.24"
          strokeOpacity="0.5"
          strokeDasharray="2.47 2.47"
          strokeLinecap="round"
        />
        <line
          ref={spoke3Ref}
          stroke="#93C5FD"
          strokeWidth="1.24"
          strokeOpacity="0.4"
          strokeDasharray="2.47 2.47"
          strokeLinecap="round"
        />

        {/* Dynamic Orbital Node Dots riding along with the capsules */}
        <circle ref={dot1Ref} r="3" fill="#93C5FD" fillOpacity="0.85" />
        <circle ref={dot2Ref} r="3" fill="#93C5FD" fillOpacity="0.85" />
        <circle ref={dot3Ref} r="3" fill="#93C5FD" fillOpacity="0.85" />
      </svg>

      {/* Central Core Glowing Celestial Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 scale-90 sm:scale-100">
        {/* Ambient Outer Halo Blur (96x96, Linear gradient #F5F9FE to #D3E4FB 54%, Layer blur 12) */}
        <div
          className="absolute w-[96px] h-[96px] rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #F5F9FE 0%, rgba(211, 228, 251, 0.54) 100%)',
            filter: 'blur(12px)',
          }}
        />

        {/* Middle Light Blue Ring (64x64, Radius 9999px, #D8E9FE) */}
        <div className="w-[64px] h-[64px] rounded-full bg-[#D8E9FE]/80 flex items-center justify-center shadow-xs">
          {/* Inner Deep Blue Star Core Button (44x44, Radius 9999px, Linear Gradient #004EF8 to #052E8A) */}
          <div
            className="w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,78,248,0.35)]"
            style={{
              background: 'linear-gradient(180deg, #004EF8 0%, #052E8A 100%)',
            }}
          >
            {/* White 4-Point Concave AI Sparkle Star */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Orbiting Capsule 1: "Personalized Outreach" (Figma: Inter 600, 14px, #1E293B, 17.5px line-height) */}
      <div
        ref={capsule1Ref}
        className="absolute top-0 left-0 will-change-transform z-20 pointer-events-auto"
      >
        <div
          className="w-max h-[42px] sm:h-[48px] bg-white/95 backdrop-blur-[4px] rounded-full py-[6px] sm:py-[8px] pl-[10px] sm:pl-[14px] pr-[14px] sm:pr-[18px] gap-[8px] sm:gap-[12px] flex items-center border border-[#F1F5F9]/90 transition-shadow duration-200 hover:shadow-md cursor-default font-['Inter',sans-serif]"
          style={{
            boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Icon Badge */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EB6658]/10 flex items-center justify-center shrink-0 text-[#EB6658]">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
          </div>
          {/* Label Text */}
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-[12.5px] sm:text-[14px] font-semibold text-[#1E293B] leading-[15px] sm:leading-[17.5px] tracking-[0px]">
              Personalized Outreach
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#64748B] font-normal leading-[12px] sm:leading-[14px] mt-0.5">
              Emails that get replies
            </span>
          </div>
        </div>
      </div>

      {/* Orbiting Capsule 2: "Smart Follow-ups" (Figma: Inter 600, 14px, #1E293B, 17.5px line-height) */}
      <div
        ref={capsule2Ref}
        className="absolute top-0 left-0 will-change-transform z-20 pointer-events-auto"
      >
        <div
          className="w-max h-[42px] sm:h-[48px] bg-white/95 backdrop-blur-[4px] rounded-full py-[6px] sm:py-[8px] pl-[10px] sm:pl-[14px] pr-[14px] sm:pr-[18px] gap-[8px] sm:gap-[12px] flex items-center border border-[#F1F5F9]/90 transition-shadow duration-200 hover:shadow-md cursor-default font-['Inter',sans-serif]"
          style={{
            boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Icon Badge with 3-Dot Chat Bubble */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EB6658]/10 flex items-center justify-center shrink-0 text-[#EB6658]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EB6658"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-[15px] sm:h-[15px]"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="8" cy="10" r="0.9" fill="#EB6658" />
              <circle cx="12" cy="10" r="0.9" fill="#EB6658" />
              <circle cx="16" cy="10" r="0.9" fill="#EB6658" />
            </svg>
          </div>
          {/* Label Text */}
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-[12.5px] sm:text-[14px] font-semibold text-[#1E293B] leading-[15px] sm:leading-[17.5px] tracking-[0px]">
              Smart Follow-ups
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#64748B] font-normal leading-[12px] sm:leading-[14px] mt-0.5">
              At the right time
            </span>
          </div>
        </div>
      </div>

      {/* Orbiting Capsule 3: "Build Relationships" (Figma: Inter 600, 14px, #1E293B, 17.5px line-height) */}
      <div
        ref={capsule3Ref}
        className="absolute top-0 left-0 will-change-transform z-20 pointer-events-auto"
      >
        <div
          className="w-max h-[42px] sm:h-[48px] bg-white/95 backdrop-blur-[4px] rounded-full py-[6px] sm:py-[8px] pl-[10px] sm:pl-[14px] pr-[14px] sm:pr-[18px] gap-[8px] sm:gap-[12px] flex items-center border border-[#F1F5F9]/90 transition-shadow duration-200 hover:shadow-md cursor-default font-['Inter',sans-serif]"
          style={{
            boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Icon Badge */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EB6658]/10 flex items-center justify-center shrink-0 text-[#EB6658]">
            <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
          </div>
          {/* Label Text */}
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-[12.5px] sm:text-[14px] font-semibold text-[#1E293B] leading-[15px] sm:leading-[17.5px] tracking-[0px]">
              Build Relationships
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#64748B] font-normal leading-[12px] sm:leading-[14px] mt-0.5">
              Long-term engagement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngageAgentVisual;
