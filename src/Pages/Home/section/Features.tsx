import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';


// Animated Eyes: pupils face downwards and scan left & right smoothly
const AnimatedEyes: React.FC<{ isScanning: boolean }> = ({ isScanning }) => {
  return (
    <span className="inline-flex items-center w-[21px] h-[15px] relative overflow-hidden align-middle select-none">
      <svg viewBox="0 0 38 22" className="w-full h-full overflow-visible">
        {/* Left Sclera */}
        <ellipse cx="11" cy="11" rx="8" ry="9" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
        {/* Left Pupil Group */}
        <g
          className={isScanning ? 'animate-eyes-down-scan' : 'transition-transform duration-300'}
          style={{
            transform: !isScanning ? 'translate(0px, 2.8px)' : undefined,
          }}
        >
          <circle cx="11" cy="11" r="4.2" fill="#0F172A" />
          <circle cx="9.5" cy="9.5" r="1.3" fill="#FFFFFF" />
        </g>

        {/* Right Sclera */}
        <ellipse cx="27" cy="11" rx="8" ry="9" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
        {/* Right Pupil Group */}
        <g
          className={isScanning ? 'animate-eyes-down-scan' : 'transition-transform duration-300'}
          style={{
            transform: !isScanning ? 'translate(0px, 2.8px)' : undefined,
          }}
        >
          <circle cx="27" cy="11" r="4.2" fill="#0F172A" />
          <circle cx="25.5" cy="9.5" r="1.3" fill="#FFFFFF" />
        </g>
      </svg>
    </span>
  );
};

// Card 1: Find the right leads, faster (Typewriter -> Cursor Send -> Scanning Eyes -> Profiles Pop up)
const LeadGenCard: React.FC = () => {
  type CursorState = 'hidden' | 'gliding' | 'entering' | 'on-target' | 'clicking' | 'clicked' | 'leaving';

  const fullText = 'give the customer list';
  const [displayText, setDisplayText] = useState('');
  const [cursorState, setCursorState] = useState<CursorState>('hidden');
  const [isKnobPressed, setIsKnobPressed] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showProfile1, setShowProfile1] = useState(false);
  const [showProfile2, setShowProfile2] = useState(false);
  const [showProfile3, setShowProfile3] = useState(false);
  const [showProfile4, setShowProfile4] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let active = true;

    const runSequence = () => {
      // 1. Reset state
      setDisplayText('');
      setCursorState('hidden');
      setIsKnobPressed(false);
      setShowStatus(false);
      setIsScanning(false);
      setShowProfile1(false);
      setShowProfile2(false);
      setShowProfile3(false);
      setShowProfile4(false);

      let charIdx = 0;

      // Small delay before typing starts
      timeoutId = setTimeout(() => {
        if (!active) return;

        // Step 1: Type text automatically
        const typeChar = () => {
          if (!active) return;
          if (charIdx < fullText.length) {
            charIdx++;
            setDisplayText(fullText.slice(0, charIdx));
            timeoutId = setTimeout(typeChar, 35);
          } else {
            // Step 2: Typing finished -> Cursor glides in a single motion directly to send button
            timeoutId = setTimeout(() => {
              if (!active) return;
              setCursorState('gliding');

              // Click immediately when cursor reaches the send point (single animation, no hover pause)
              timeoutId = setTimeout(() => {
                if (!active) return;
                setCursorState('clicking');
                setIsKnobPressed(true);

                // Cursor releases click
                timeoutId = setTimeout(() => {
                  if (!active) return;
                  setCursorState('clicked');
                  setIsKnobPressed(false);

                  // Step 3: The eye animation along with "your leads are getting ready..." POPS UP
                  setShowStatus(true);
                  setIsScanning(true);

                  // Cursor leaves smoothly
                  timeoutId = setTimeout(() => {
                    if (!active) return;
                    setCursorState('leaving');
                    setTimeout(() => {
                      if (active) setCursorState('hidden');
                    }, 350);
                  }, 150);

                  // Step 4: After eyes pop up and scan, profiles popup one by one
                  timeoutId = setTimeout(() => {
                    if (!active) return;
                    setShowProfile1(true);

                    timeoutId = setTimeout(() => {
                      if (!active) return;
                      setShowProfile2(true);

                      timeoutId = setTimeout(() => {
                        if (!active) return;
                        setShowProfile3(true);

                        timeoutId = setTimeout(() => {
                          if (!active) return;
                          setShowProfile4(true);

                          // Eyes finish scanning after all profiles appear
                          timeoutId = setTimeout(() => {
                            if (!active) return;
                            setIsScanning(false);

                            // Hold all 4 profiles for 4 seconds
                            timeoutId = setTimeout(() => {
                              if (!active) return;
                              setShowStatus(false);
                              setShowProfile1(false);
                              setShowProfile2(false);
                              setShowProfile3(false);
                              setShowProfile4(false);

                              timeoutId = setTimeout(() => {
                                if (!active) return;
                                runSequence();
                              }, 600);
                            }, 4000);
                          }, 800);
                        }, 380);
                      }, 380);
                    }, 380);
                  }, 800); // 800ms dedicated scanning time before profiles start popping up
                }, 130); // click press duration
              }, 420); // glide duration: reaches send point and clicks immediately
            }, 220); // brief pause after typing
          }
        };

        typeChar();
      }, 500);
    };

    runSequence();

    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px] sm:min-h-[420px] group">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1.25px,transparent_1.25px)] [background-size:16px_16px] pointer-events-none opacity-80" />

      {/* Title */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-[22px] font-normal text-[#4E4E4E] leading-snug">
          Find the right<br />
          leads, <span className="font-bold text-[#0F172A]">faster</span>
        </h3>
      </div>

      {/* Center Visual: Staggered Floating Company Pills with Pop-up Animation */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-start pl-1 sm:pl-3 min-h-[150px] justify-center gap-2">
        {/* Pill 1: versel.com */}
        <div
          className={`inline-flex items-center gap-2.5 bg-[#9333EA] hover:bg-[#8B5CF6] text-white px-3 py-1.5 rounded-full shadow-[0_4px_14px_rgba(147,51,234,0.28)] text-[12px] font-medium transition-all duration-500 select-none cursor-default ${showProfile1
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold">
            ▲
          </span>
          <span>versel.com</span>
        </div>

        {/* Pill 2: urbacvc.com */}
        <div
          className={`inline-flex items-center gap-2.5 bg-[#EF4444] hover:bg-[#F43F5E] text-white px-3 py-1.5 rounded-full shadow-[0_4px_14px_rgba(239,68,68,0.28)] text-[12px] font-medium ml-5 sm:ml-7 transition-all duration-500 select-none cursor-default ${showProfile2
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold">
            👤
          </span>
          <span>urbacvc.com</span>
        </div>

        {/* Pill 3: stripe.com */}
        <div
          className={`inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#3B82F6] text-white px-3 py-1.5 rounded-full shadow-[0_4px_14px_rgba(37,99,235,0.28)] text-[12px] font-medium ml-2 sm:ml-3 transition-all duration-500 select-none cursor-default ${showProfile3
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold">
            ⚡
          </span>
          <span>stripe.com</span>
        </div>

        {/* Pill 4: supabase.com */}
        <div
          className={`inline-flex items-center gap-2.5 bg-[#059669] hover:bg-[#10B981] text-white px-3 py-1.5 rounded-full shadow-[0_4px_14px_rgba(5,150,105,0.28)] text-[12px] font-medium ml-6 sm:ml-8 transition-all duration-500 select-none cursor-default ${showProfile4
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold">
            ◈
          </span>
          <span>supabase.com</span>
        </div>
      </div>

      {/* Bottom Search Bar with Typewriter, Cursor and Animated Eyes */}
      <div className="relative z-10 w-full pt-2">
        {/* Status Line with Animated Eyes: Pops up when sent */}
        <div className="h-5 mb-1.5 flex items-center overflow-visible">
          <p
            className={`text-[11px] text-neutral-400 font-normal flex items-center gap-1.5 select-none transition-all duration-400 ease-out ${showStatus
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-75 translate-y-2 pointer-events-none'
              }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <AnimatedEyes isScanning={isScanning} />
            <span>your leads are getting ready...</span>
          </p>
        </div>

        <div className="w-full bg-white border border-neutral-200/90 rounded-full py-1.5 pl-3.5 pr-1.5 flex items-center justify-between shadow-xs relative">
          <span className="text-[12px] text-neutral-700 truncate select-none font-normal flex items-center">
            {displayText}
            <span className="inline-block w-0.5 h-3.5 bg-neutral-800 ml-0.5 animate-pulse" />
          </span>

          {/* Knob Submit Button & Animated Cursor */}
          <div className="relative flex items-center justify-center shrink-0">
            <div
              className={`w-6 h-6 rounded-full bg-[#1E293B] shrink-0 transition-transform duration-150 relative flex items-center justify-center ${isKnobPressed ? 'scale-75' : 'scale-100'
                }`}
            >
              {/* Click Ripple Effect */}
              {isKnobPressed && (
                <span className="absolute inset-0 -m-1.5 rounded-full bg-black/25 animate-ping pointer-events-none" />
              )}
              {/* Arrow Icon inside knob */}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* Animated Pointer Cursor: single fluid glide directly to send point, clicks on arrival */}
            <div
              className={`absolute pointer-events-none z-50 transition-all ease-out ${cursorState === 'hidden'
                  ? 'opacity-0 translate-x-10 translate-y-10 scale-90 duration-300'
                  : cursorState === 'gliding'
                    ? 'opacity-100 translate-x-0 translate-y-1 scale-100 duration-400'
                    : cursorState === 'clicking'
                      ? 'opacity-100 translate-x-0 translate-y-1 scale-[0.82] duration-100 ease-in'
                      : cursorState === 'clicked'
                        ? 'opacity-100 translate-x-0 translate-y-1 scale-100 duration-120'
                        : 'opacity-0 translate-x-6 translate-y-8 scale-90 duration-350 ease-in'
                }`}
              style={{
                top: '-2px',
                left: '-2px',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] filter"
              >
                <path
                  d="M5.65376 2.39417C5.16335 1.9548 4.3999 2.30237 4.3999 2.95543V21.463C4.3999 22.1466 5.22818 22.4862 5.71184 21.9961L10.7423 16.8995C10.963 16.676 11.2647 16.5504 11.5794 16.5504H19.5768C20.2587 16.5504 20.6014 15.7279 20.1206 15.2447L5.65376 2.39417Z"
                  fill="#0F172A"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card 2: Analyze markets, competitors, and opportunities (Vector 51 & Vector 52 Wave Train + Stationary Pop-up PFPs)
const MarketAnalysisCard: React.FC = () => {
  const purplePathRef = useRef<SVGPathElement | null>(null);
  const orangePathRef = useRef<SVGPathElement | null>(null);

  const [revealed, setRevealed] = useState([false, false, false, false]);
  const [failedImgs, setFailedImgs] = useState<Record<number, boolean>>({});

  // Exact vector geometry from Figma downloads: Vector 51 & Vector 52
  const v51Segments = [
    { p0: [2.69202, 71.1505], cp1: [2.69202, 71.1505], cp2: [30.192, 15.1507], p1: [57.192, 12.6507] },
    { p0: [57.192, 12.6507], cp1: [84.192, 10.1507], cp2: [78.8079, 127.555], p1: [132.692, 128.151] },
    { p0: [132.692, 128.151], cp1: [175.218, 128.621], cp2: [173.676, 64.2287], p1: [215.692, 57.6506] },
    { p0: [215.692, 57.6506], cp1: [259.391, 50.809], cp2: [274.857, 107.038], p1: [318.692, 101.131] },
    { p0: [318.692, 101.131], cp1: [382.246, 92.5674], cp2: [393.192, 40.1311], p1: [401.692, 0.631104] },
  ];

  const v52Segments = [
    { p0: [2.83032, 164.013], cp1: [2.83032, 164.013], cp2: [33.7817, 75.7332], p1: [81.8303, 52.5131] },
    { p0: [81.8303, 52.5131], cp1: [156.374, 16.4891], cp2: [210.719, 183.68], p1: [277.33, 134.513] },
    { p0: [277.33, 134.513], cp1: [321.893, 101.62], cp2: [322.33, 0.0130615], p1: [322.33, 0.0130615] },
  ];

  // Fixed coordinates matching Screenshot 1 exactly relative to viewBox (415 x 170):
  // PFPs remain strictly stationary and do not move with the wave
  const pfpData = [
    {
      name: 'Alex',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&auto=format&fit=crop&q=80',
      initial: 'A',
      // Crest 1 of Vector 51
      x: `${(57.2 / 415) * 100}%`,
      y: `${(15.0 / 170) * 100}%`,
    },
    {
      name: 'David',
      src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=96&auto=format&fit=crop&q=80',
      initial: 'D',
      // Dip near Trough 1
      x: `${(116.0 / 415) * 100}%`,
      y: `${(120.0 / 170) * 100}%`,
    },
    {
      name: 'Michael',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&auto=format&fit=crop&q=80',
      initial: 'M',
      // Crest 2 of Vector 51
      x: `${(215.7 / 415) * 100}%`,
      y: `${(57.7 / 170) * 100}%`,
    },
    {
      name: 'Marcus',
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&auto=format&fit=crop&q=80',
      initial: 'M',
      // Valley between purple & orange sweep on right
      x: `${(312.0 / 415) * 100}%`,
      y: `${(90.0 / 170) * 100}%`,
    },
  ];

  // Pop-up Sequence: Staggered spring bounce pop-up in fixed positions
  useEffect(() => {
    let active = true;
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const runPopupLoop = () => {
      setRevealed([false, false, false, false]);

      const t1 = setTimeout(() => {
        if (active) setRevealed([true, false, false, false]);
      }, 400);

      const t2 = setTimeout(() => {
        if (active) setRevealed([true, true, false, false]);
      }, 850);

      const t3 = setTimeout(() => {
        if (active) setRevealed([true, true, true, false]);
      }, 1300);

      const t4 = setTimeout(() => {
        if (active) setRevealed([true, true, true, true]);
      }, 1750);

      // Keep all 4 visible in their spots, then gracefully loop
      const tLoop = setTimeout(() => {
        if (active) {
          runPopupLoop();
        }
      }, 9000);

      timeoutIds = [t1, t2, t3, t4, tLoop];
    };

    runPopupLoop();

    return () => {
      active = false;
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  // Multi-harmonic pattern-changing wave animation
  useEffect(() => {
    let animId: number;
    let time = 0;

    // Helper: evaluate cubic Bezier segment at parameter t in [0, 1]
    const evalBezier = (seg: { p0: number[]; cp1: number[]; cp2: number[]; p1: number[] }, t: number) => {
      const u = 1 - t;
      const tt = t * t;
      const uu = u * u;
      const x = uu * u * seg.p0[0] + 3 * uu * t * seg.cp1[0] + 3 * u * tt * seg.cp2[0] + tt * t * seg.p1[0];
      const y = uu * u * seg.p0[1] + 3 * uu * t * seg.cp1[1] + 3 * u * tt * seg.cp2[1] + tt * t * seg.p1[1];
      return [x, y] as [number, number];
    };

    // Pre-sample the exact vector curves
    const sampleCurve = (segments: typeof v51Segments, stepsPerSeg: number) => {
      const pts: [number, number][] = [];
      segments.forEach((seg, sIdx) => {
        for (let i = sIdx === 0 ? 0 : 1; i <= stepsPerSeg; i++) {
          pts.push(evalBezier(seg, i / stepsPerSeg));
        }
      });
      return pts;
    };

    const base51 = sampleCurve(v51Segments, 12);
    const base52 = sampleCurve(v52Segments, 18);

    // Convert points to smooth Catmull-Rom cubic Bezier path
    const pointsToSvgPath = (pts: [number, number][]) => {
      if (pts.length < 2) return '';
      let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = i > 0 ? pts[i - 1] : pts[i];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = i < pts.length - 2 ? pts[i + 2] : p2;

        const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
        const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
        const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
        const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

        d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
      }
      return d;
    };

    // Dynamic pattern morphing: changes shape and undulates continuously
    const morphPattern = (
      basePts: [number, number][],
      t: number,
      isSecondLine: boolean,
      dx = 0
    ) => {
      const totalW = basePts[basePts.length - 1][0] - basePts[0][0];
      const startX = basePts[0][0];

      return basePts.map(([bx, by]) => {
        const relX = (bx - startX) / totalW;
        // Strict boundary envelope: exactly 0 at ends so faded gradient tips stay stationary
        const env = Math.sin(Math.max(0, Math.min(1, relX)) * Math.PI);

        // Pattern-changing wave equation:
        // 1. Primary traveling wave train
        const wave1 = 13 * Math.sin(t * 0.038 - relX * 6.8 + (isSecondLine ? 1.6 : 0));
        // 2. Secondary counter-harmonic wave for fluid texture
        const wave2 = 7.5 * Math.sin(t * 0.024 - relX * 11.5 + (isSecondLine ? 3.1 : 0.8));
        // 3. Slow pattern evolution morpher: changes the overall wave shape and crests every few seconds
        const morpher = 9.5 * Math.sin(t * 0.012) * Math.sin(relX * 8.2 + (isSecondLine ? Math.PI : 0));

        const dy = env * (wave1 + wave2 + morpher);
        return [bx + dx, by + dy] as [number, number];
      });
    };

    const animate = () => {
      time += 1;

      const pts1 = morphPattern(base51, time, false, 0);
      const pts2 = morphPattern(base52, time, true, 48);

      const path1 = pointsToSvgPath(pts1);
      const path2 = pointsToSvgPath(pts2);

      if (purplePathRef.current) purplePathRef.current.setAttribute('d', path1);
      if (orangePathRef.current) orangePathRef.current.setAttribute('d', path2);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px] sm:min-h-[420px] border-t md:border-t-0 md:border-l border-neutral-200/90 group">
      {/* Dot Grid Background matching Figma */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none opacity-80" />

      {/* Title */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-[22px] font-normal text-[#4E4E4E] leading-snug">
          Analyze markets,<br />
          competitors, <span className="font-bold text-[#0F172A]">and</span><br />
          <span className="font-bold text-[#0F172A]">opportunities.</span>
        </h3>
      </div>

      {/* Center Visual: Vector 51 & Vector 52 Wave Train + Stationary Pop-up PFPs */}
      <div className="relative z-10 my-auto w-full max-w-[430px] mx-auto h-[180px] flex items-center justify-center select-none">
        <div className="relative w-full h-full">
          <svg
            viewBox="0 0 415 170"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Exact Linear Gradient from Vector 51 (Purple) */}
              <linearGradient
                id="paint0_linear_870_1022"
                x1="4.19202"
                y1="68.6397"
                x2="401.692"
                y2="6.63112"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#E3CDFF" stopOpacity="0" />
                <stop offset="0.03" stopColor="#E3CDFF" stopOpacity="0.3" />
                <stop offset="0.08" stopColor="#9644F9" />
                <stop offset="0.12" stopColor="#9444F6" />
                <stop offset="0.16" stopColor="#9243F3" />
                <stop offset="0.22" stopColor="#9042F0" />
                <stop offset="0.70" stopColor="#642DA6" />
                <stop offset="0.82" stopColor="#824AC7" stopOpacity="0.5" />
                <stop offset="0.92" stopColor="#824AC7" stopOpacity="0" />
                <stop offset="1" stopColor="#824AC7" stopOpacity="0" />
              </linearGradient>

              {/* Exact Linear Gradient from Vector 52 (Orange/Pink) */}
              <linearGradient
                id="paint0_linear_870_1023"
                x1="52.03145"
                y1="87.4756"
                x2="375.029"
                y2="56.1028"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#FF8363" stopOpacity="0" />
                <stop offset="0.03" stopColor="#FF8363" stopOpacity="0.4" />
                <stop offset="0.08" stopColor="#FF8363" />
                <stop offset="0.14" stopColor="#FF8062" />
                <stop offset="0.20" stopColor="#FD8769" />
                <stop offset="0.45" stopColor="#FF6B88" />
                <stop offset="0.60" stopColor="#FF58A4" />
                <stop offset="0.72" stopColor="#FF8AC4" />
                <stop offset="0.82" stopColor="#FF54AA" stopOpacity="0.6" />
                <stop offset="0.92" stopColor="#FF54AA" stopOpacity="0" />
                <stop offset="1" stopColor="#FF54AA" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Vector 51 Wave (Purple) with 6px border and faded ends */}
            <path
              ref={purplePathRef}
              stroke="url(#paint0_linear_870_1022)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="filter drop-shadow-[0_2px_8px_rgba(150,68,249,0.22)]"
            />

            {/* Vector 52 Wave (Orange/Pink) with 6px border and faded ends */}
            <path
              ref={orangePathRef}
              stroke="url(#paint0_linear_870_1023)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="filter drop-shadow-[0_2px_8px_rgba(255,84,170,0.22)]"
            />
          </svg>

          {/* 4 Stationary PFPs that pop up into their design spots with purple border rings */}
          {pfpData.map((pfp, idx) => {
            const isRevealed = revealed[idx];
            const isFailed = failedImgs[idx];

            return (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 select-none z-20 pointer-events-none"
                style={{
                  left: pfp.x,
                  top: pfp.y,
                }}
              >
                <div
                  className={`transition-all duration-500 ease-out ${isRevealed
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0 pointer-events-none'
                    }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {isFailed ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-bold text-[11px] flex items-center justify-center ring-[2.5px] ring-[#9644F9] shadow-[0_4px_12px_rgba(150,68,249,0.25)]">
                      {pfp.initial}
                    </div>
                  ) : (
                    <img
                      src={pfp.src}
                      alt={pfp.name}
                      onError={() => setFailedImgs((prev) => ({ ...prev, [idx]: true }))}
                      className="w-8 h-8 rounded-full object-cover ring-[2.5px] ring-[#9644F9] ring-offset-1 ring-offset-white shadow-[0_4px_12px_rgba(150,68,249,0.25)] bg-white"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6" />
    </div>
  );
};

// Card 3: Audience Intelligence. Find ideal customers. (Chat centered -> Glides down on typing -> Knob click -> LinkedIn Profiles pop up)
const AudienceIntelligenceCard: React.FC = () => {
  type CursorState = 'hidden' | 'entering' | 'on-target' | 'clicking' | 'clicked' | 'leaving';

  const fullText = 'Find where my customers active';
  const [displayText, setDisplayText] = useState('');
  const [isChatBottom, setIsChatBottom] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('hidden');
  const [isKnobPressed, setIsKnobPressed] = useState(false);
  const [showProfile1, setShowProfile1] = useState(false);
  const [showProfile2, setShowProfile2] = useState(false);
  const [showProfile3, setShowProfile3] = useState(false);
  const [showProfile4, setShowProfile4] = useState(false);

  const timersRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const addTimeout = (fn: () => void, ms: number) => {
    const t = window.setTimeout(fn, ms);
    timersRef.current.push(t);
    return t;
  };

  const triggerSequence = () => {
    clearAllTimers();

    // Reset to center initial state
    setIsChatBottom(false);
    setDisplayText('');
    setCursorState('hidden');
    setIsKnobPressed(false);
    setShowProfile1(false);
    setShowProfile2(false);
    setShowProfile3(false);
    setShowProfile4(false);

    // Initial pause in center before typing begins (700ms)
    addTimeout(() => {
      // 1. As typing starts, smoothly glide the chat bar down to the bottom
      setIsChatBottom(true);

      // Typewriter effect
      let charIdx = 0;
      intervalRef.current = setInterval(() => {
        charIdx++;
        setDisplayText(fullText.slice(0, charIdx));

        if (charIdx >= fullText.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }

          // 2. Chat is docked at bottom and text is complete -> Cursor enters
          addTimeout(() => {
            setCursorState('entering');

            addTimeout(() => {
              setCursorState('on-target');

              addTimeout(() => {
                // Click knob
                setCursorState('clicking');
                setIsKnobPressed(true);

                addTimeout(() => {
                  // Release knob with ripple
                  setCursorState('clicked');
                  setIsKnobPressed(false);

                  // Cursor leaves
                  addTimeout(() => {
                    setCursorState('leaving');
                    addTimeout(() => setCursorState('hidden'), 350);
                  }, 150);

                  // 3. Staggered LinkedIn profiles pop up into center canvas
                  addTimeout(() => {
                    setShowProfile1(true);

                    addTimeout(() => {
                      setShowProfile2(true);

                      addTimeout(() => {
                        setShowProfile3(true);

                        addTimeout(() => {
                          setShowProfile4(true);

                          // Keep profiles visible for 4.5 seconds, then reset and loop
                          addTimeout(() => {
                            setShowProfile1(false);
                            setShowProfile2(false);
                            setShowProfile3(false);
                            setShowProfile4(false);

                            addTimeout(() => {
                              triggerSequence();
                            }, 500);
                          }, 4500);
                        }, 320);
                      }, 320);
                    }, 320);
                  }, 400);
                }, 180);
              }, 260);
            }, 400);
          }, 260);
        }
      }, 35);
    }, 700);
  };

  useEffect(() => {
    triggerSequence();
    return () => clearAllTimers();
  }, []);

  return (
    <div className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px] sm:min-h-[420px] border-t lg:border-t-0 lg:border-l border-neutral-200/90 bg-white group select-none">
      {/* Title */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-[22px] font-normal leading-snug">
          <span className="font-bold text-[#0F172A] block">Audience Intelligence.</span>
          <span className="text-[#6B7280]">Find ideal customers.</span>
        </h3>
      </div>

      {/* Center Canvas: 4 LinkedIn Profiles Staggered Pop-ups */}
      <div className="relative z-10 my-auto w-full py-2 flex flex-col gap-2.5 sm:gap-3 pointer-events-none select-none">
        {/* Profile 1: Sarah Connor */}
        <div
          className={`inline-flex items-center gap-2.5 bg-white border border-[#0A66C2]/25 text-[#0F172A] px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(10,102,194,0.12)] text-[12px] font-medium mr-auto transition-all duration-500 select-none ${showProfile1
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&auto=format&fit=crop&q=80"
            alt="Sarah"
            className="w-5 h-5 rounded-full object-cover ring-1 ring-white"
          />
          <span className="w-4 h-4 rounded bg-[#0A66C2] text-white flex items-center justify-center text-[10px] font-bold leading-none">
            in
          </span>
          <span className="font-semibold text-neutral-800">linkedin.com/in/sarah-vp</span>
          <span className="text-[10px] text-neutral-400 font-normal hidden sm:inline">· VP Growth</span>
        </div>

        {/* Profile 2: David Chen */}
        <div
          className={`inline-flex items-center gap-2.5 bg-[#0A66C2] text-white px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(10,102,194,0.28)] text-[12px] font-medium ml-auto transition-all duration-500 select-none ${showProfile2
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&auto=format&fit=crop&q=80"
            alt="David"
            className="w-5 h-5 rounded-full object-cover ring-1 ring-white/50"
          />
          <span className="w-4 h-4 rounded bg-white text-[#0A66C2] flex items-center justify-center text-[10px] font-bold leading-none">
            in
          </span>
          <span className="font-medium">linkedin.com/in/david-chen</span>
          <span className="text-[10px] text-white/80 font-normal hidden sm:inline">· Active now</span>
        </div>

        {/* Profile 3: Alex Rivera */}
        <div
          className={`inline-flex items-center gap-2.5 bg-white border border-[#0A66C2]/25 text-[#0F172A] px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(10,102,194,0.12)] text-[12px] font-medium ml-4 sm:ml-6 mr-auto transition-all duration-500 select-none ${showProfile3
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=96&auto=format&fit=crop&q=80"
            alt="Alex"
            className="w-5 h-5 rounded-full object-cover ring-1 ring-white"
          />
          <span className="w-4 h-4 rounded bg-[#0A66C2] text-white flex items-center justify-center text-[10px] font-bold leading-none">
            in
          </span>
          <span className="font-semibold text-neutral-800">linkedin.com/in/alex-rivera</span>
          <span className="text-[10px] text-neutral-400 font-normal hidden sm:inline">· Founder & CEO</span>
        </div>

        {/* Profile 4: Marcus Vance */}
        <div
          className={`inline-flex items-center gap-2.5 bg-[#004182] text-white px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,65,130,0.28)] text-[12px] font-medium ml-auto mr-4 transition-all duration-500 select-none ${showProfile4
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-3 pointer-events-none'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&auto=format&fit=crop&q=80"
            alt="Marcus"
            className="w-5 h-5 rounded-full object-cover ring-1 ring-white/50"
          />
          <span className="w-4 h-4 rounded bg-white text-[#004182] flex items-center justify-center text-[10px] font-bold leading-none">
            in
          </span>
          <span className="font-medium">linkedin.com/in/marcus-gtm</span>
          <span className="text-[10px] text-white/80 font-normal hidden sm:inline">· GTM Lead</span>
        </div>
      </div>

      {/* Bottom Spacer so profiles stay centered in upper canvas when chat is docked */}
      <div className="h-10 w-full pointer-events-none shrink-0" />

      {/* Animated Search / Chat Pill (Starts in center, glides to bottom when typing starts) */}
      <div
        style={{
          top: isChatBottom ? 'calc(100% - 58px)' : '52%',
          transform: isChatBottom ? 'translateY(0)' : 'translateY(-50%)',
        }}
        className="absolute left-6 right-6 sm:left-8 sm:right-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-30 pointer-events-none select-none"
      >
        <div className="w-full bg-white border border-neutral-200/90 rounded-full py-1.5 pl-4 pr-1.5 flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.06)] select-none">
          <span className="text-[12px] sm:text-[12.5px] text-neutral-800 font-medium truncate select-none flex items-center">
            {displayText ? (
              <>
                <span>{displayText}</span>
                {displayText.length < fullText.length && (
                  <span className="inline-block w-[1.5px] h-3.5 bg-[#0A66C2] ml-0.5 animate-pulse" />
                )}
              </>
            ) : (
              <span className="text-neutral-400 font-normal">
                Find where my customers active
              </span>
            )}
          </span>

          {/* Knob Submit Button & Animated Cursor */}
          <div className="relative flex items-center justify-center shrink-0">
            <div
              className={`w-6 h-6 rounded-full bg-[#1E293B] shrink-0 transition-transform duration-150 relative flex items-center justify-center ${isKnobPressed ? 'scale-75' : 'scale-100'
                }`}
            >
              {/* Click Ripple Effect */}
              {isKnobPressed && (
                <span className="absolute inset-0 -m-1.5 rounded-full bg-[#0A66C2]/35 animate-ping pointer-events-none" />
              )}
              {/* Arrow Icon inside knob */}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* Animated Pointer Cursor */}
            <div
              className={`absolute pointer-events-none z-50 transition-all ease-out ${cursorState === 'hidden'
                  ? 'opacity-0 translate-x-10 translate-y-10 scale-90 duration-300'
                  : cursorState === 'entering'
                    ? 'opacity-100 translate-x-6 translate-y-6 scale-100 duration-500'
                    : cursorState === 'on-target'
                      ? 'opacity-100 translate-x-0 translate-y-1 scale-100 duration-400'
                      : cursorState === 'clicking'
                        ? 'opacity-100 translate-x-0 translate-y-1 scale-[0.82] duration-100'
                        : cursorState === 'clicked'
                          ? 'opacity-100 translate-x-0 translate-y-1 scale-100 duration-150'
                          : 'opacity-0 translate-x-6 translate-y-8 scale-90 duration-500'
                }`}
              style={{ top: '-2px', left: '-2px' }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] filter"
              >
                <path
                  d="M5.65376 2.39417C5.16335 1.9548 4.3999 2.30237 4.3999 2.95543V21.463C4.3999 22.1466 5.22818 22.4862 5.71184 21.9961L10.7423 16.8995C10.963 16.676 11.2647 16.5504 11.5794 16.5504H19.5768C20.2587 16.5504 20.6014 15.7279 20.1206 15.2447L5.65376 2.39417Z"
                  fill="#0F172A"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card 5: Track Every Touchpoint (Stock Market White Line Climbing Grey Bars)
const TouchpointStockChart: React.FC = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [totalLength, setTotalLength] = useState(300);
  const [dashOffset, setDashOffset] = useState(300);
  const [arrowPos, setArrowPos] = useState({ x: 44, y: 143, angle: -45, visible: false });

  // Stock Market trajectory matching user sketch:
  // Starts on top of Bar 1 (Y=143) -> arc -> touches exactly on top of Bar 2 (Y=105) -> arc -> touches exactly on top of Bar 3 (Y=67) -> arc -> touches exactly on top of Bar 4 (Y=43) -> breakout rocket ray to top-right
  const linePath =
    'M 44,143 C 54,124 74,104 84,100 L 94,105 C 106,85 126,65 136,62 L 146,67 C 158,47 178,38 188,38 L 198,43 L 258,2';

  // Area under the stock curve closed to base (Y=195)
  const areaPath = `${linePath} L 258,195 L 44,195 Z`;

  useEffect(() => {
    let active = true;
    let animId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const path = pathRef.current;
    if (!path) return;

    const len = path.getTotalLength();
    setTotalLength(len);
    setDashOffset(len);

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const runLoop = () => {
      // 1. Reset to start
      setDashOffset(len);
      setArrowPos({ x: 44, y: 143, angle: -45, visible: false });

      // 2. Start climbing after brief pause
      timeoutId = setTimeout(() => {
        if (!active) return;

        const duration = 2100; // 2.1s duration for the climb
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          if (!active) return;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(progress);
          const currentDist = eased * len;

          const p = path.getPointAtLength(currentDist);
          const pForward = path.getPointAtLength(Math.min(currentDist + 1.5, len));
          const pBack = path.getPointAtLength(Math.max(currentDist - 1.5, 0));
          const angle = Math.atan2(pForward.y - pBack.y, pForward.x - pBack.x) * (180 / Math.PI);

          setDashOffset(len - currentDist);
          setArrowPos({
            x: p.x,
            y: p.y,
            angle,
            visible: true,
          });

          if (progress < 1) {
            animId = requestAnimationFrame(animate);
          } else {
            // Reached summit together! Hold line and arrow at summit for 3.6s
            timeoutId = setTimeout(() => {
              if (!active) return;
              setArrowPos((prev) => ({ ...prev, visible: false }));
              setDashOffset(len);

              timeoutId = setTimeout(() => {
                if (!active) return;
                runLoop();
              }, 500);
            }, 3600);
          }
        };

        animId = requestAnimationFrame(animate);
      }, 400);
    };

    runLoop();

    return () => {
      active = false;
      cancelAnimationFrame(animId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative z-10 flex-1 flex items-center justify-center w-full my-auto py-4 select-none">
      <svg
        viewBox="0 0 270 215"
        className="w-[280px] sm:w-[330px] md:w-[370px] lg:w-[390px] h-[220px] sm:h-[260px] md:h-[290px] lg:h-[305px] overflow-visible max-w-full"
      >
        <defs>
          {/* Drop shadow to make the white stock line stand out vividly */}
          <filter id="stockShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.32" />
          </filter>

          {/* Soft white gradient for stock market area under the curve */}
          <linearGradient id="stockAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Chart Axes matching user's sketch */}
        <line x1="18" y1="-10" x2="18" y2="195" stroke="#CBD5E1" strokeWidth="1.25" strokeLinecap="round" />
        <line x1="18" y1="195" x2="252" y2="195" stroke="#CBD5E1" strokeWidth="1.25" strokeLinecap="round" />

        {/* 4 Ascending Flat-Topped Grey Bars */}
        {/* Bar 1 */}
        <rect
          x="34"
          y="143"
          width="36"
          height="52"
          rx="1.5"
          fill="#D4D4D8"
          className="pointer-events-none"
        />
        {/* Bar 2 */}
        <rect
          x="86"
          y="105"
          width="36"
          height="90"
          rx="1.5"
          fill="#D4D4D8"
          className="pointer-events-none"
        />
        {/* Bar 3 */}
        <rect
          x="138"
          y="67"
          width="36"
          height="128"
          rx="1.5"
          fill="#D4D4D8"
          className="pointer-events-none"
        />
        {/* Bar 4 */}
        <rect
          x="190"
          y="43"
          width="36"
          height="152"
          rx="1.5"
          fill="#D4D4D8"
          className="pointer-events-none"
        />

        {/* Area fill under the climbing line */}
        <path
          d={areaPath}
          fill="url(#stockAreaGrad)"
          className="transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: arrowPos.visible ? 0.9 : 0.05,
          }}
        />

        {/* The White Stock Market Line climbing through the grey bars */}
        <path
          ref={pathRef}
          d={linePath}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#stockShadow)"
          strokeDasharray={totalLength}
          strokeDashoffset={dashOffset}
          className="transition-opacity duration-300"
          style={{
            opacity: arrowPos.visible ? 1 : 0,
          }}
        />

        {/* Arrow sticking directly to the moving tip of the line */}
        {arrowPos.visible && (
          <g
            transform={`translate(${arrowPos.x}, ${arrowPos.y}) rotate(${arrowPos.angle})`}
            filter="url(#stockShadow)"
          >
            <polyline
              points="-11,-7 0,0 -11,7"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

// Profile data for View 3 Worldwide Reach Globe
interface GlobeProfileData {
  id: number;
  top: string;
  left: string;
  avatar: string;
  greeting?: string;
  greetingPos?: 'top' | 'right' | 'bottom' | 'left';
  delay: number;
}

const globeProfiles: GlobeProfileData[] = [
  {
    id: 1,
    top: '18%',
    left: '28%',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    greeting: 'Hello!',
    greetingPos: 'top',
    delay: 150,
  },
  {
    id: 2,
    top: '22%',
    left: '68%',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    greeting: 'नमस्ते!',
    greetingPos: 'top',
    delay: 300,
  },
  {
    id: 3,
    top: '30%',
    left: '84%',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    delay: 450,
  },
  {
    id: 4,
    top: '29%',
    left: '12%',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    delay: 250,
  },
  {
    id: 5,
    top: '34%',
    left: '30%',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    delay: 550,
  },
  {
    id: 6,
    top: '39%',
    left: '14%',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
    greeting: 'Hola!',
    greetingPos: 'bottom',
    delay: 200,
  },
  {
    id: 7,
    top: '43%',
    left: '42%',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    delay: 400,
  },
  {
    id: 8,
    top: '38%',
    left: '68%',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    greeting: 'Bonjour!',
    greetingPos: 'right',
    delay: 500,
  },
  {
    id: 9,
    top: '49%',
    left: '78%',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
    greeting: '你好!',
    greetingPos: 'bottom',
    delay: 600,
  },
  {
    id: 10,
    top: '56%',
    left: '22%',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80',
    delay: 650,
  },
  {
    id: 11,
    top: '56%',
    left: '52%',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
    delay: 700,
  },
  {
    id: 12,
    top: '64%',
    left: '40%',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    greeting: 'مرحبًا',
    greetingPos: 'right',
    delay: 750,
  },
];

// Card 4: Automate ads, amplify your reach
// (View 1: Details & Bullets -> Cursor clicks send knob -> View 2: Dashboard card with "Upload post" -> Cursor clicks Upload post -> View 3: Steps 2, 3, 4 with CiLogo card, platform fan-out, and globe.svg with popping profiles & greetings)
const AutomateAdsCard: React.FC = () => {
  type CursorState =
    | 'hidden'
    | 'gliding-to-send'
    | 'clicking-send'
    | 'clicked-send'
    | 'gliding-to-upload'
    | 'clicking-upload'
    | 'clicked-upload'
    | 'leaving';

  const [viewMode, setViewMode] = useState<'details' | 'dashboard' | 'distribution'>('details');
  const [isFading, setIsFading] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('hidden');
  const [isSendPressed, setIsSendPressed] = useState(false);
  const [isUploadPressed, setIsUploadPressed] = useState(false);
  const [showProfiles, setShowProfiles] = useState(false);
  const [showGlobeLines, setShowGlobeLines] = useState(false);
  const [isPlatformsShifted, setIsPlatformsShifted] = useState(false);

  useEffect(() => {
    let active = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const runLoop = () => {
      // 1. Reset state to details view
      setViewMode('details');
      setIsFading(false);
      setCursorState('hidden');
      setIsSendPressed(false);
      setIsUploadPressed(false);
      setShowProfiles(false);
      setShowGlobeLines(false);
      setIsPlatformsShifted(false);

      // 2. Hold details view for 2.2s before cursor enters to click send
      timeoutId = setTimeout(() => {
        if (!active) return;

        // 3. Cursor glides directly to the send button (right knob in bottom pill)
        setCursorState('gliding-to-send');

        timeoutId = setTimeout(() => {
          if (!active) return;

          // 4. Cursor clicks on send knob
          setCursorState('clicking-send');
          setIsSendPressed(true);

          timeoutId = setTimeout(() => {
            if (!active) return;

            // 5. Knob released
            setCursorState('clicked-send');
            setIsSendPressed(false);

            // 6. Cursor leaves
            timeoutId = setTimeout(() => {
              if (!active) return;
              setCursorState('leaving');
              setTimeout(() => {
                if (active) setCursorState('hidden');
              }, 250);
            }, 120);

            // 7. Fade out current view (View 1)
            timeoutId = setTimeout(() => {
              if (!active) return;
              setIsFading(true);

              // 8. Swap to View 2 (dashboard view) and fade in
              timeoutId = setTimeout(() => {
                if (!active) return;
                setViewMode('dashboard');
                setIsFading(false);

                // 9. Hold dashboard view briefly (~750ms), then cursor quickly glides to "Upload post" button!
                timeoutId = setTimeout(() => {
                  if (!active) return;

                  // 10. Cursor glides quickly to "Upload post" button
                  setCursorState('gliding-to-upload');

                  timeoutId = setTimeout(() => {
                    if (!active) return;

                    // 11. Cursor clicks "Upload post" button
                    setCursorState('clicking-upload');
                    setIsUploadPressed(true);

                    timeoutId = setTimeout(() => {
                      if (!active) return;

                      // 12. Upload button released crisply
                      setCursorState('clicked-upload');
                      setIsUploadPressed(false);

                      // 13. Cursor leaves quickly
                      timeoutId = setTimeout(() => {
                        if (!active) return;
                        setCursorState('leaving');
                        setTimeout(() => {
                          if (active) setCursorState('hidden');
                        }, 180);
                      }, 70);

                      // 14. Fade out View 2
                      timeoutId = setTimeout(() => {
                        if (!active) return;
                        setIsFading(true);

                        // 15. Swap to View 3 (distribution diagram with CiLogo & globe.svg)
                        timeoutId = setTimeout(() => {
                          if (!active) return;
                          setViewMode('distribution');
                          setIsFading(false);
                          setShowProfiles(false);
                          setShowGlobeLines(false);
                          setIsPlatformsShifted(false);

                          // 16. First: ONLY the Ci to platforms line connects gracefully. Hold for 2.6s:
                          timeoutId = setTimeout(() => {
                            if (!active) return;

                            // 17. After that: Ci fades & platforms shift to the left:
                            setIsPlatformsShifted(true);

                            // 18. Globe connecting lines appear quickly as Ci fades to the left:
                            timeoutId = setTimeout(() => {
                              if (!active) return;
                              setShowGlobeLines(true);

                              // 19. Then the profiles pop up over the globe:
                              timeoutId = setTimeout(() => {
                                if (!active) return;
                                setShowProfiles(true);

                                // 20. Hold shifted state for 5.5s so user can view platforms feeding the globe
                                timeoutId = setTimeout(() => {
                                  if (!active) return;
                                  setIsFading(true);

                                  // 21. Fade back to View 1 and restart loop
                                  timeoutId = setTimeout(() => {
                                    if (!active) return;
                                    runLoop();
                                  }, 450);
                                }, 5500);
                              }, 650);
                            }, 120);
                          }, 2600);
                        }, 250);
                      }, 130);
                    }, 90);
                  }, 240);
                }, 750);
              }, 350);
            }, 250);
          }, 130);
        }, 420);
      }, 2200);
    };

    runLoop();

    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="col-span-1 lg:col-span-7 xl:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[480px] sm:min-h-[520px] md:min-h-[550px] bg-white">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1.25px,transparent_1.25px)] [background-size:16px_16px] pointer-events-none opacity-80" />

      {/* Title */}
      <div className="relative z-10 mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-[22px] font-normal text-[#4E4E4E] leading-snug">
          <span className="font-bold text-[#0F172A]">Automate ads</span>, amplify your reach.
        </h3>
      </div>

      {/* Dynamic Animated Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center my-auto min-h-[300px]">
        {/* VIEW 1: Feature List and Overview */}
        {viewMode === 'details' && (
          <div
            className={`transition-all duration-400 ease-out flex items-start gap-3 sm:gap-3.5 ${isFading
                ? 'opacity-0 scale-[0.98] -translate-y-2 pointer-events-none'
                : 'opacity-100 scale-100 translate-y-0'
              }`}
          >
            {/* Custom Sidebar/App Icon matching screenshot */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
              <rect width="4" height="4" x="14" y="14" fill="currentColor" stroke="none" />
            </svg>

            <div className="space-y-4">
              <p className="text-[13px] sm:text-[13.5px] text-[#4E4E4E] leading-[1.65] font-normal max-w-xl">
                Create and launch smarter ad campaigns with AI-powered audience targeting, messaging, and
                creative suggestions. Coirei helps you identify the right channels, reach high-intent customers,
                and optimize your campaigns for better results.
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-[13px] sm:text-[13.5px] text-[#4E4E4E] font-normal">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  <span>AI-powered audience targeting</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  <span>Smart ad creative suggestions</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  <span>Platform &amp; channel recommendations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  <span>Campaign setup &amp; automation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  <span>Personalized ad messaging</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  <span>Performance &amp; optimization insights</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* VIEW 2: Dashboard Preview Card & "Upload post" button */}
        {viewMode === 'dashboard' && (
          <div
            className={`transition-all duration-400 ease-out w-full ${isFading
                ? 'opacity-0 scale-[0.98] translate-y-2 pointer-events-none'
                : 'opacity-100 scale-100 translate-y-0'
              }`}
          >
            {/* Soft Light Container matching user reference */}
            <div className="w-full bg-[#F3F6FA] rounded-2xl p-4 sm:p-5 flex flex-col items-center">
              {/* White Inner Card */}
              <div className="w-full bg-white rounded-xl p-3.5 sm:p-4.5 border border-neutral-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                {/* Left: Smart Dashboard Dark Poster */}
                <div className="w-full sm:w-[170px] shrink-0 bg-[#0C0F17] rounded-xl p-3 border border-white/10 shadow-md relative overflow-hidden flex flex-col justify-between select-none">
                  {/* Bottom Purple/Violet ambient illumination */}
                  <div className="absolute -bottom-6 -left-6 -right-6 h-20 bg-gradient-to-t from-[#8B5CF6]/40 via-[#6366F1]/20 to-transparent blur-md pointer-events-none" />

                  <div className="relative z-10">
                    {/* Header: Coirei brand + amber mark */}
                    <div className="flex items-center gap-1 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="text-[11px] font-bold text-[#F59E0B] tracking-tight">Coirei</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="text-center mb-2.5">
                      <h4 className="text-[11.5px] sm:text-[12px] font-semibold text-white tracking-tight leading-tight">
                        Smart Dashboard
                      </h4>
                      <p className="text-[7.5px] text-neutral-400 mt-0.5 leading-tight font-normal">
                        See everything in one place: students, courses, and activity.
                      </p>
                    </div>

                    {/* Miniature UI Mockup */}
                    <div className="bg-[#141824] rounded-md p-1.5 border border-white/5 space-y-1.5">
                      {/* Top mini tabs/search */}
                      <div className="flex items-center justify-between px-0.5">
                        <div className="w-10 h-1.5 bg-neutral-700/80 rounded-xs" />
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                        </div>
                      </div>

                      {/* Mini metric cards */}
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-[#1A202F] p-1 rounded-xs">
                          <div className="w-5 h-1 bg-neutral-600 rounded-xs mb-0.5" />
                          <div className="text-[7px] font-bold text-white">8,420</div>
                        </div>
                        <div className="bg-[#1A202F] p-1 rounded-xs">
                          <div className="w-5 h-1 bg-neutral-600 rounded-xs mb-0.5" />
                          <div className="text-[7px] font-bold text-emerald-400">+24.6%</div>
                        </div>
                      </div>

                      {/* Mini Activity / Schedule Grid */}
                      <div className="bg-[#1A202F] p-1 rounded-xs">
                        <div className="grid grid-cols-7 gap-0.5">
                          {Array.from({ length: 21 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-xs ${i % 4 === 0
                                  ? 'bg-purple-500/80'
                                  : i % 3 === 0
                                    ? 'bg-amber-500/70'
                                    : 'bg-neutral-700/50'
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Powered by Coirei */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 mt-2">
                    <span className="text-[6.5px] text-neutral-400 font-medium">Powered by Coirei</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
                  </div>
                </div>

                {/* Right: Paragraph description matching screenshot */}
                <div className="flex-1 sm:pt-1">
                  <p className="text-[12.5px] sm:text-[13px] text-[#4E4E4E] leading-[1.65] font-normal">
                    Create and launch smarter ad campaigns with AI-powered audience targeting, messaging, and
                    creative suggestions. Coirei helps you identify the right channels, reach high-intent customers,
                    and optimize your campaigns for better results.
                  </p>
                </div>
              </div>

              {/* Upload Post Button with Animated Click Cursor */}
              <div className="mt-3.5 sm:mt-4 relative flex items-center justify-center">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-xs sm:text-[13px] font-medium shadow-sm transition-all duration-75 select-none ${isUploadPressed ? 'scale-95 bg-black' : 'scale-100'
                    }`}
                >
                  {isUploadPressed && (
                    <span className="absolute inset-0 -m-1 rounded-lg bg-black/25 animate-ping pointer-events-none" />
                  )}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  <span>Upload post</span>
                </button>

                {/* Animated Pointer Cursor Gliding Directly to Upload Post Button */}
                <div
                  className={`absolute pointer-events-none z-50 transition-all ease-out ${cursorState === 'gliding-to-upload'
                      ? 'opacity-100 translate-x-4 translate-y-1 scale-100 duration-200'
                      : cursorState === 'clicking-upload'
                        ? 'opacity-100 translate-x-4 translate-y-1 scale-[0.82] duration-75 ease-in'
                        : cursorState === 'clicked-upload'
                          ? 'opacity-100 translate-x-4 translate-y-1 scale-100 duration-90 ease-out'
                          : 'opacity-0 translate-x-12 translate-y-12 scale-90 duration-150'
                    }`}
                  style={{
                    top: '4px',
                    left: '52%',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                  >
                    <path
                      d="M5.5 3.5L18.5 11.5L12 13.5L9.5 19.5L5.5 3.5Z"
                      fill="#0F172A"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: Global Ad Distribution Workflow (Steps 2, 3, 4 with CiLogo & Globe.svg) */}
        {viewMode === 'distribution' && (
          <div
            className={`transition-all duration-500 ease-out w-full flex flex-col justify-between h-full ${isFading
                ? 'opacity-0 scale-[0.98] translate-y-2 pointer-events-none'
                : 'opacity-100 scale-100 translate-y-0'
              }`}
          >
            {/* Top Interactive Diagram Area */}
            <div className="relative w-full flex items-center justify-between gap-1 sm:gap-2 my-auto py-2 overflow-hidden">
              {/* Left Spacer: Centers [Ci - Platforms] in Stage 1, collapses when shifted */}
              <div
                className={`transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted ? 'w-0 max-w-0 flex-none' : 'flex-1'
                  }`}
              />

              {/* Left: Step 2 - Coirei Dark Card with CiLogo.png (Slides left & disappears) */}
              <div
                className={`relative shrink-0 select-none overflow-hidden transition-all duration-700 ease-in-out ${isPlatformsShifted
                    ? '-translate-x-28 opacity-0 max-w-0 mr-0 pl-0 pr-0 pointer-events-none'
                    : 'translate-x-0 opacity-100 max-w-[130px] pl-1 sm:pl-2'
                  }`}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-[#0F172A] border border-neutral-800 shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center p-2">
                  <img
                    src="/CiLogo.png"
                    alt="Ci Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain mb-1"
                  />
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                    Coirei
                  </span>
                </div>
              </div>

              {/* SVG Connecting Fanout Curves: Coirei -> Platforms (Longer connector lines with wide elegant fanout) */}
              <div
                className={`relative transition-all duration-700 ease-in-out overflow-visible shrink-0 ${isPlatformsShifted ? 'opacity-0 max-w-0 w-0' : 'opacity-100 w-28 sm:w-36 md:w-44 lg:w-52 mr-0 sm:mr-0.5'
                  }`}
              >
                <svg
                  className="w-full h-56 sm:h-64 overflow-visible pointer-events-none"
                  viewBox="0 0 140 240"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <style>{`
                    @keyframes drawLineOnce {
                      from { stroke-dashoffset: 220; }
                      to { stroke-dashoffset: 0; }
                    }
                    @keyframes popDotOnce {
                      0%, 78% { transform: scale(0); opacity: 0; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                  `}</style>
                  {[18, 52, 86, 120, 154, 188, 222].map((y, idx) => (
                    <g key={idx}>
                      {/* One-time drawing line from Ci that touches the platform icon */}
                      <path
                        d={`M 0 120 C 60 120, 85 ${y}, 138 ${y}`}
                        stroke="#93C5FD"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeDasharray="220"
                        strokeDashoffset="220"
                        style={{
                          animation: 'drawLineOnce 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards',
                          animationDelay: `${idx * 0.06}s`,
                        }}
                      />
                      {/* Terminal dot that arrives with the line, not pre-dotted, perfect circle */}
                      <ellipse
                        cx="138"
                        cy={y}
                        rx="2.1"
                        ry="2.5"
                        fill="#2563EB"
                        style={{
                          transformOrigin: `138px ${y}px`,
                          animation: 'popDotOnce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both',
                          animationDelay: `${idx * 0.06}s`,
                        }}
                      />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Middle/Left: Step 3 - Vertical Stack of Platform Icons (Slides left to take Ci's place and increases size) */}
              <div
                className={`flex flex-col items-center justify-center shrink-0 select-none z-10 transition-all duration-700 ease-in-out ${isPlatformsShifted
                    ? 'pl-2 sm:pl-3 gap-1 sm:gap-1.5'
                    : 'pl-0 gap-1.5 sm:gap-2'
                  }`}
              >
                {/* 1. LinkedIn */}
                <div
                  className={`bg-[#0A66C2] flex items-center justify-center text-white transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="LinkedIn"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>

                {/* 2. Meta */}
                <div
                  className={`bg-white border border-neutral-200/90 flex items-center justify-center transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="Meta"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <path
                      d="M16.92 6.5C14.77 6.5 13.06 7.84 12 9.24C10.94 7.84 9.23 6.5 7.08 6.5C3.72 6.5 1 9.17 1 12.5C1 15.83 3.72 18.5 7.08 18.5C9.23 18.5 10.94 17.16 12 15.76C13.06 17.16 14.77 18.5 16.92 18.5C20.28 18.5 23 15.83 23 12.5C23 9.17 20.28 6.5 16.92 6.5ZM7.08 16.17C5.01 16.17 3.33 14.53 3.33 12.5C3.33 10.47 5.01 8.83 7.08 8.83C8.75 8.83 10.22 10.08 10.99 11.59C10.74 12.06 10.47 12.5 10.18 12.92C9.44 13.97 8.44 16.17 7.08 16.17ZM16.92 16.17C15.56 16.17 14.56 13.97 13.82 12.92C13.53 12.5 13.26 12.06 13.01 11.59C13.78 10.08 15.25 8.83 16.92 8.83C18.99 8.83 20.67 10.47 20.67 12.5C20.67 14.53 18.99 16.17 16.92 16.17Z"
                      fill="#0081FB"
                    />
                  </svg>
                </div>

                {/* 3. Google */}
                <div
                  className={`bg-white border border-neutral-200/90 flex items-center justify-center transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="Google"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>

                {/* 4. YouTube */}
                <div
                  className={`bg-white border border-neutral-200/90 flex items-center justify-center transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="YouTube"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FF0000"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>

                {/* 5. Instagram */}
                <div
                  className={`bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="Instagram"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>

                {/* 6. TikTok */}
                <div
                  className={`bg-black flex items-center justify-center text-white transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="TikTok"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.52c1.42 1.02 3.16 1.62 5.04 1.62V6.69z" />
                  </svg>
                </div>

                {/* 7. More (...) */}
                <div
                  className={`bg-[#EEF2F6] border border-neutral-200/60 flex items-center justify-center text-[#64748B] transition-all duration-700 ease-in-out ${isPlatformsShifted
                      ? 'w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-9.5 md:h-9.5 rounded-xl shadow-md'
                      : 'w-6 h-6 sm:w-7 sm:h-7 rounded-lg shadow-xs'
                    }`}
                  title="More Platforms"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`transition-transform duration-700 ease-in-out ${isPlatformsShifted ? 'scale-125' : 'scale-100'
                      }`}
                  >
                    <circle cx="5" cy="12" r="2.5" />
                    <circle cx="12" cy="12" r="2.5" />
                    <circle cx="19" cy="12" r="2.5" />
                  </svg>
                </div>
              </div>

              {/* SVG Connecting Dashed Lines: Platforms -> Globe with Animated Flow (Revealed only after platforms shift) */}
              <div
                className={`h-56 sm:h-64 flex items-center overflow-visible pointer-events-none transition-all duration-700 ease-in-out ${isPlatformsShifted
                    ? 'flex-1 mx-1 sm:mx-2 min-w-[32px] ' + (showGlobeLines ? 'opacity-100 scale-100' : 'opacity-0 scale-95')
                    : 'w-0 max-w-0 flex-none opacity-0 scale-95 overflow-hidden'
                  }`}
              >
                <svg
                  className="w-full h-full overflow-visible pointer-events-none"
                  viewBox="0 0 100 240"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <style>{`
                    @keyframes flowDottedDashes {
                      from { stroke-dashoffset: 24; }
                      to { stroke-dashoffset: 0; }
                    }
                  `}</style>
                  {[
                    // 0. LinkedIn: arches UP towards top of globe, then down-right into globe
                    { d: 'M 0 18 C 30 2, 65 8, 100 34' },
                    // 1. Meta: arches UP towards upper globe, then down-right into globe
                    { d: 'M 0 52 C 30 36, 65 44, 100 66' },
                    // 2. Google: arches UP gently, then down-right into globe
                    { d: 'M 0 86 C 35 74, 68 80, 100 96' },
                    // 3. YouTube: smooth center flow
                    { d: 'M 0 120 C 45 120, 70 124, 100 124' },
                    // 4. Instagram: scoops DOWN towards bottom, then up-right into globe
                    { d: 'M 0 154 C 35 174, 68 168, 100 148' },
                    // 5. TikTok: scoops DOWN towards bottom, then up-right into globe
                    { d: 'M 0 188 C 30 216, 65 208, 100 172' },
                    // 6. More (...): scoops DOWN along bottom, then steeply up-right into globe
                    { d: 'M 0 222 C 30 248, 65 244, 100 194' },
                  ].map((l, idx) => (
                    <path
                      key={idx}
                      d={l.d}
                      stroke="#93C5FD"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      vectorEffect="non-scaling-stroke"
                      style={{
                        animation: 'flowDottedDashes 0.9s linear infinite',
                      }}
                      opacity="0.9"
                    />
                  ))}
                </svg>
              </div>

              {/* Right: Step 4 - Globe with Popping Profiles and Greetings (Hidden at first, expands when platforms shift) */}
              <div
                className={`relative h-56 sm:h-72 md:h-80 shrink-0 flex items-center justify-center select-none pr-1 transition-all duration-700 ease-out ${isPlatformsShifted
                    ? 'w-56 sm:w-72 md:w-80 opacity-100 scale-100 translate-x-0'
                    : 'w-0 max-w-0 opacity-0 scale-90 translate-x-6 pointer-events-none overflow-hidden'
                  }`}
              >
                {/* Dotted Globe Graphic from downloads: public/globe.svg */}
                <img
                  src="/globe.svg"
                  alt="Global Reach Globe"
                  className="w-full h-full object-contain pointer-events-none opacity-90 select-none min-w-[224px] sm:min-w-[288px] md:min-w-[320px]"
                />

                {/* Overlaid Avatars with Pop-up Animation */}
                {globeProfiles.map((p) => (
                  <div
                    key={p.id}
                    className={`absolute transition-all duration-500 ease-out select-none ${showProfiles
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-0 translate-y-2 pointer-events-none'
                      }`}
                    style={{
                      top: p.top,
                      left: p.left,
                      transitionDelay: `${p.delay}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div className="relative">
                      {/* Avatar circle */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full overflow-hidden border-2 border-white shadow-[0_2px_6px_rgba(0,0,0,0.18)] bg-neutral-200">
                        <img
                          src={p.avatar}
                          alt="Customer profile"
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Speech greeting bubble */}
                      {p.greeting && (
                        <div
                          className={`absolute whitespace-nowrap bg-white text-neutral-800 text-[8.5px] sm:text-[9.5px] md:text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-neutral-100/90 pointer-events-none transition-all duration-500 ${showProfiles ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                            }`}
                          style={{
                            transitionDelay: `${p.delay + 180}ms`,
                            ...(p.greetingPos === 'top'
                              ? { bottom: '115%', left: '50%', transform: 'translateX(-50%)' }
                              : p.greetingPos === 'bottom'
                                ? { top: '115%', left: '50%', transform: 'translateX(-50%)' }
                                : p.greetingPos === 'left'
                                  ? { right: '115%', top: '50%', transform: 'translateY(-50%)' }
                                  : { left: '115%', top: '50%', transform: 'translateY(-50%)' }),
                          }}
                        >
                          {p.greeting}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Spacer: Centers [Ci - Platforms] in Stage 1, collapses when shifted */}
              <div
                className={`transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted ? 'w-0 max-w-0 flex-none' : 'flex-1'
                  }`}
              />
            </div>

            {/* Bottom Step Badges (Step 2 collapses left when CiLogo disappears, Centered in Stage 1) */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-neutral-100/90 mt-auto select-none w-full overflow-hidden">
              {/* Left Spacer to Center Badges in Stage 1 */}
              <div
                className={`transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted ? 'w-0 max-w-0 flex-none' : 'flex-1'
                  }`}
              />

              {/* Step 2 (Coirei) - Slides left and disappears with CiLogo */}
              <div
                className={`flex flex-col items-center text-center transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted
                    ? '-translate-x-16 opacity-0 max-w-0 overflow-hidden pointer-events-none'
                    : 'translate-x-0 opacity-100 max-w-[160px] flex-1'
                  }`}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] sm:text-xs font-semibold mb-1 border border-blue-100">
                  2
                </div>
                <p className="text-[10px] sm:text-[11.5px] font-medium text-neutral-800 leading-tight whitespace-nowrap">
                  Coirei automatically<br />runs the ads
                </p>
              </div>

              {/* Middle Spacer between Step 2 and Step 3 matching wider connector lines */}
              <div
                className={`transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted ? 'w-0 max-w-0 flex-none' : 'w-12 sm:w-20 md:w-28'
                  }`}
              />

              {/* Step 3 (Platforms) - Smoothly moves towards left under platform icons */}
              <div
                className={`flex flex-col text-center transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted
                    ? 'flex-1 pl-2 sm:pl-4 items-start text-left'
                    : 'items-center max-w-[170px] flex-1'
                  }`}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] sm:text-xs font-semibold mb-1 border border-blue-100">
                  3
                </div>
                <p className="text-[10px] sm:text-[11.5px] font-medium text-neutral-800 leading-tight whitespace-nowrap">
                  Coirei runs the ad<br />across multiple platforms
                </p>
              </div>

              {/* Step 4 (Worldwide Reach - Appears with the globe) */}
              <div
                className={`flex flex-col items-center text-center transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted
                    ? (showGlobeLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none') + ' flex-1 max-w-[180px]'
                    : 'w-0 max-w-0 opacity-0 translate-y-2 pointer-events-none overflow-hidden'
                  }`}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] sm:text-xs font-semibold mb-1 border border-blue-100">
                  4
                </div>
                <p className="text-[10px] sm:text-[11.5px] font-medium text-neutral-800 leading-tight">
                  Reaches various<br />customers around the world
                </p>
              </div>

              {/* Right Spacer to Center Badges in Stage 1 */}
              <div
                className={`transition-all duration-700 ease-in-out shrink-0 ${isPlatformsShifted ? 'w-0 max-w-0 flex-none' : 'flex-1'
                  }`}
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Rounded Pill Bar with Black Send Button (Shown in View 1 & View 2) */}
      {viewMode !== 'distribution' && (
        <div className="relative z-10 w-full bg-white border border-neutral-200/90 rounded-2xl h-12 sm:h-14 px-4 flex items-center justify-end shadow-[0_2px_8px_rgba(0,0,0,0.03)] mt-6 select-none">
          {/* Default Black Send Button with Cursor Animation */}
          <div className="relative flex items-center justify-center shrink-0">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black shrink-0 transition-transform duration-150 relative flex items-center justify-center text-white ${isSendPressed ? 'scale-75' : 'scale-100'
                }`}
            >
              {/* Ripple effect on click */}
              {isSendPressed && (
                <span className="absolute inset-0 -m-1.5 rounded-full bg-black/25 animate-ping pointer-events-none" />
              )}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* Animated Pointer Cursor: single fluid glide directly to send point, clicks on arrival */}
            <div
              className={`absolute pointer-events-none z-50 transition-all ease-out ${cursorState === 'hidden'
                  ? 'opacity-0 translate-x-12 translate-y-12 scale-90 duration-300'
                  : cursorState === 'gliding-to-send'
                    ? 'opacity-100 translate-x-0 translate-y-1 scale-100 duration-400'
                    : cursorState === 'clicking-send'
                      ? 'opacity-100 translate-x-0 translate-y-1 scale-[0.82] duration-100 ease-in'
                      : cursorState === 'clicked-send'
                        ? 'opacity-100 translate-x-0 translate-y-1 scale-100 duration-150 ease-out'
                        : 'opacity-0 translate-x-6 translate-y-6 scale-90 duration-300'
                }`}
              style={{
                top: '-4px',
                left: '10px',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
              >
                <path
                  d="M5.5 3.5L18.5 11.5L12 13.5L9.5 19.5L5.5 3.5Z"
                  fill="#0F172A"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="GlobalPading w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline exactly matching Figma */}
        <ScrollReveal variant="fade-up" delay={50} duration={650} distance={20} className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] font-normal tracking-tight text-[#4E4E4E] leading-[1.14]">
            Everything you need to go<br />
            from <span className="font-bold text-[#0F172A]">strategy to revenue</span>
          </h2>
        </ScrollReveal>

        {/* Bento Grid Container */}
        <ScrollReveal
          variant="fade-up"
          delay={150}
          duration={750}
          distance={24}
          className="w-full border border-neutral-200/90 rounded-2xl bg-white overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]"
        >
          {/* Top Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. Find the right leads, faster */}
            <LeadGenCard />

            {/* 2. Analyze markets, competitors, and opportunities. */}
            <MarketAnalysisCard />

            {/* 3. Audience Intelligence. Find ideal customers. */}
            <AudienceIntelligenceCard />
          </div>

          {/* Bottom Row: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-neutral-200/90">
            {/* 4. Automate ads, amplify your reach. */}
            <AutomateAdsCard />

            {/* 5. Track Every Touchpoint. Measure Revenue Impact. */}
            <div className="col-span-1 lg:col-span-5 xl:col-span-5 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[290px] sm:min-h-[330px] border-t lg:border-t-0 lg:border-l border-neutral-200/90 group">
              {/* Dot Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1.25px,transparent_1.25px)] [background-size:16px_16px] pointer-events-none opacity-80" />

              {/* Title */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-[22px] font-normal text-[#4E4E4E] leading-snug">
                  Track Every<br />
                  Touchpoint. <span className="font-bold text-[#0F172A]">Measure</span><br />
                  <span className="font-bold text-[#0F172A]">Revenue Impact.</span>
                </h3>
              </div>

              {/* Stock Market Climbing Line Chart over Grey Bars */}
              <TouchpointStockChart />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
