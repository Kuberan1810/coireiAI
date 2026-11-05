import React, { useRef, useEffect, useState } from 'react';
import ciRoundedLogo from '../../assets/logo/ciroundedlogo.svg';
import quoraFlipImg from '../../assets/competitor/quoraflip.svg';
import trustpilotFlipImg from '../../assets/competitor/trustpilotflip.svg';
import { WhatsNextSection } from './components/WhatsNextSection';

interface CharInfo {
  char: string;
  delay: number;
}
interface WordInfo {
  word: string;
  chars: CharInfo[];
  spaceDelay: number | null;
}

const buildLineWords = (
  words: string[],
  baseDelay: number,
  msPerChar = 36,
  spacePause = 36
): { words: WordInfo[]; nextBase: number } => {
  let currentDelay = baseDelay;
  const result: WordInfo[] = [];

  words.forEach((word, wIdx) => {
    const chars: CharInfo[] = [];
    for (let i = 0; i < word.length; i++) {
      chars.push({
        char: word[i],
        delay: currentDelay,
      });
      currentDelay += msPerChar;
    }

    let spaceDelay: number | null = null;
    if (wIdx < words.length - 1) {
      spaceDelay = currentDelay;
      currentDelay += spacePause;
    }

    result.push({
      word,
      chars,
      spaceDelay,
    });
  });

  return { words: result, nextBase: currentDelay };
};

const line1Result = buildLineWords(['Understand', 'What', 'Your'], 60, 36, 36);
const line2Result = buildLineWords(['Customers', 'Really', 'Want'], line1Result.nextBase + 90, 36, 36);

const LINE1_DATA = line1Result.words;
const LINE2_DATA = line2Result.words;
const HEADING_TOTAL_DURATION = line2Result.nextBase + 280;

interface PainPointPill {
  id: number;
  type: 'pink' | 'red';
  align: 'start' | 'end';
  text: string;
  avatar: string;
}

const PAIN_POINT_PILLS: PainPointPill[] = [
  {
    id: 1,
    type: 'pink',
    align: 'start',
    text: 'It takes too long to understand the platform',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    type: 'red',
    align: 'end',
    text: "The features aren't worth the price",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    type: 'pink',
    align: 'start',
    text: 'It takes too long to understand the platform',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    type: 'red',
    align: 'end',
    text: "The features aren't worth the price",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
];

interface RedditSegment {
  text: string;
  isHighlight: boolean;
  highlightIndex?: number;
}

const REDDIT_TEXT_SEGMENTS: RedditSegment[] = [
  { text: 'Our current CRM has become ', isHighlight: false },
  { text: 'too expensive.', isHighlight: true, highlightIndex: 0 },
  { text: ' We need something ', isHighlight: false },
  { text: 'affordable', isHighlight: true, highlightIndex: 1 },
  { text: ' with ', isHighlight: false },
  { text: 'AI automation.', isHighlight: true, highlightIndex: 2 },
  { text: ' ', isHighlight: false },
  { text: 'before our next renewal.', isHighlight: true, highlightIndex: 3 },
];

const TOTAL_REDDIT_TEXT_CHARS = REDDIT_TEXT_SEGMENTS.reduce(
  (sum, seg) => sum + seg.text.length,
  0
);

const DECISION_CARDS = [
  {
    number: '01',
    title: 'What Makes Them Buy',   
    description:
      'Discover the key triggers that motivate customers to purchase a product, from solving critical problems to improving efficiency and achieving business goals.',
  },
  {
    number: '02',
    title: 'What Do They Want More?',
    description:
      'Identify the additional features, capabilities, and improvements customers are actively seeking in existing products.',
  },
  {
    number: '03',
    title: 'What Matters Most to Them?',
    description:
      'Understand which product features, benefits, and attributes customers prioritize when evaluating and comparing solutions',
  },
  {
    number: '04',
    title: 'When Are They Ready to Switch?',
    description:
      'Detect customers who are dissatisfied with existing solutions and actively exploring alternatives or planning to change providers.',
  },
];

const EXTENDED_DECISION_CARDS = [
  ...DECISION_CARDS.map((c, i) => ({ ...c, key: `set0-${i}` })),
  ...DECISION_CARDS.map((c, i) => ({ ...c, key: `set1-${i}` })),
  ...DECISION_CARDS.map((c, i) => ({ ...c, key: `set2-${i}` })),
];

export const VoiceOfCustomer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const unmetNeedsRef = useRef<HTMLDivElement>(null);
  const buyerIntentRef = useRef<HTMLDivElement>(null);
  const customerDecisionsRef = useRef<HTMLDivElement>(null);
  const [isHeadingComplete, setIsHeadingComplete] = useState(false);
  const [isCardInView, setIsCardInView] = useState(false);
  const [isUnmetNeedsInView, setIsUnmetNeedsInView] = useState(false);
  const [isBuyerIntentInView, setIsBuyerIntentInView] = useState(false);
  const [isCustomerDecisionsInView, setIsCustomerDecisionsInView] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Reddit Buyer Intent Typing & Redact Animation State
  const [redditTypedChars, setRedditTypedChars] = useState(0);
  const [redditRedactions, setRedditRedactions] = useState<boolean[]>([false, false, false, false]);
  const [isRedditTypingComplete, setIsRedditTypingComplete] = useState(false);
  const [isBuyingIntentHighlighted, setIsBuyingIntentHighlighted] = useState(false);

  // 3D Card Flip Platform State: 'reddit' | 'quora' | 'trustpilot'
  const [activePlatform, setActivePlatform] = useState<'reddit' | 'quora' | 'trustpilot'>('reddit');
  const [flipAnimation, setFlipAnimation] = useState<'none' | 'flip-out' | 'flip-in'>('none');

  // Customer Decisions Carousel State (auto-switch & mouse drag with seamless infinite looping)
  const [activeDecisionIndex, setActiveDecisionIndex] = useState(4);
  const activeDecisionIndexRef = useRef(activeDecisionIndex);
  useEffect(() => {
    activeDecisionIndexRef.current = activeDecisionIndex;
  }, [activeDecisionIndex]);

  const [withTransition, setWithTransition] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDraggingCards, setIsDraggingCards] = useState(false);
  const isDraggingCardsRef = useRef(false);
  useEffect(() => {
    isDraggingCardsRef.current = isDraggingCards;
  }, [isDraggingCards]);

  const dragStartX = useRef(0);
  const currentDragDelta = useRef(0);
  const wasDragged = useRef(false);
  const isCardsHovered = useRef(false);
  const nextAdvanceTimeRef = useRef(Date.now() + 2600);

  // Custom Cursor Overlay (← DRAG →) following the mouse over the cards
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isCursorInsideCards, setIsCursorInsideCards] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Restore transition cleanly after seamless boundary reset (double RAF ensures instant reposition paints first)
  useEffect(() => {
    if (!withTransition && !isDraggingCards) {
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setWithTransition(true);
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    }
  }, [withTransition, isDraggingCards]);

  // Safety watchdog: ensure activeDecisionIndex never runs away or stays out of bounds
  useEffect(() => {
    if (activeDecisionIndex >= 8) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setActiveDecisionIndex((prev) => (prev >= 8 ? prev - 4 : prev));
      }, 500);
      return () => clearTimeout(timer);
    } else if (activeDecisionIndex < 4) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setActiveDecisionIndex((prev) => (prev < 4 ? prev + 4 : prev));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeDecisionIndex]);

  // When section enters view, ensure activeDecisionIndex is safely in bounds (card 01 = index 4)
  useEffect(() => {
    if (isCustomerDecisionsInView) {
      setActiveDecisionIndex((prev) => (prev >= 8 || prev < 4 ? 4 : prev));
    }
  }, [isCustomerDecisionsInView]);

  // Autoplay for Customer Decisions Cards:
  // - When cursor is over cards: automatically advances after 7 seconds
  // - When cursor is NOT over cards: automatically advances after 2.6 seconds
  // - Pauses during active mouse / touch dragging
  useEffect(() => {
    if (!isCustomerDecisionsInView) return;

    nextAdvanceTimeRef.current = Date.now() + (isCardsHovered.current ? 7000 : 2600);

    const interval = setInterval(() => {
      if (isDraggingCardsRef.current) return;

      if (Date.now() >= nextAdvanceTimeRef.current) {
        setWithTransition(true);
        setActiveDecisionIndex((prev) => prev + 1);
        const delay = isCardsHovered.current ? 7000 : 2600;
        nextAdvanceTimeRef.current = Date.now() + delay;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isCustomerDecisionsInView]);

  const handleCardsPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    wasDragged.current = false;
    setIsDraggingCards(true);
    setWithTransition(false);
    dragStartX.current = e.clientX;
    currentDragDelta.current = 0;
    setDragOffset(0);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleCardsPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (cardsContainerRef.current) {
      const rect = cardsContainerRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    if (!isDraggingCards) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      wasDragged.current = true;
    }
    currentDragDelta.current = delta;
    setDragOffset(delta);
  };

  const handleCardsMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardsContainerRef.current) return;
    const rect = cardsContainerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardsPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingCards) return;
    setIsDraggingCards(false);
    setWithTransition(true);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    const delta = currentDragDelta.current;
    setDragOffset(0);
    if (delta < -45) {
      setActiveDecisionIndex((prev) => prev + 1);
    } else if (delta > 45) {
      setActiveDecisionIndex((prev) => prev - 1);
    }
    nextAdvanceTimeRef.current = Date.now() + (isCardsHovered.current ? 7000 : 2600);
  };

  const handleCardsTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Only respond to transform transition on the track itself (ignore bubbled child transitions)
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
    const currentIdx = activeDecisionIndexRef.current;
    if (currentIdx >= 8) {
      setWithTransition(false);
      setActiveDecisionIndex(currentIdx - 4);
    } else if (currentIdx < 4) {
      setWithTransition(false);
      setActiveDecisionIndex(currentIdx + 4);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  // Intersection observer to detect when section 3 enters viewport
  useEffect(() => {
    const el = unmetNeedsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsUnmetNeedsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Intersection observer to detect when section 4 (buyer intent) enters viewport
  useEffect(() => {
    const el = buyerIntentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBuyerIntentInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fixed Black Decisions Screen: Only active during decisions reveal, exactly like QuoteSection on Home page
  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      const topSurface = document.querySelector('.voc-top-surface');
      if (topSurface) {
        const rect = topSurface.getBoundingClientRect();
        // Activate fixed black screen ONLY when the top surface is actually scrolling off screen
        setIsCustomerDecisionsInView(rect.bottom <= window.innerHeight);
      } else {
        setIsCustomerDecisionsInView(false);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Intersection observer to detect when card enters viewport
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Continuous looping one-by-one popup animation
  useEffect(() => {
    if (!isCardInView) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let isCancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!isCancelled) fn();
      }, ms);
      timeouts.push(id);
      return id;
    };

    const startLoop = () => {
      if (isCancelled) return;
      setIsExiting(false);
      setVisibleCount(0);

      // Quick and snappy sequential popups
      schedule(() => setVisibleCount(1), 150);
      schedule(() => setVisibleCount(2), 480);
      schedule(() => setVisibleCount(3), 810);
      schedule(() => setVisibleCount(4), 1140);

      // Hold all 4 pills visible for reading (~3.2s)
      schedule(() => setIsExiting(true), 4400);

      // Gracefully reset and restart loop
      schedule(() => {
        setIsExiting(false);
        setVisibleCount(0);
        schedule(startLoop, 200);
      }, 4850);
    };

    startLoop();

    return () => {
      isCancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [isCardInView]);

  // Ultra-smooth GPU-composited typewriter bloom: reveals paragraph upon heading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeadingComplete(true);
    }, HEADING_TOTAL_DURATION);
    return () => clearTimeout(timer);
  }, []);

  // Buyer Intent Intelligence: Typewriter text + animated redactions + 3D card flips (Reddit -> Quora -> Trustpilot)
  useEffect(() => {
    if (!isBuyerIntentInView) return;

    let isCancelled = false;
    let intervalId: ReturnType<typeof setInterval>;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!isCancelled) fn();
      }, ms);
      timeouts.push(id);
    };

    const triggerFlip = (next: 'reddit' | 'quora' | 'trustpilot', onComplete?: () => void) => {
      setFlipAnimation('flip-out');
      schedule(() => {
        setActivePlatform(next);
        setFlipAnimation('flip-in');
        schedule(() => {
          setFlipAnimation('none');
          if (onComplete) onComplete();
        }, 380);
      }, 320);
    };

    const runQuoraPhase = () => {
      schedule(() => {
        // Flip from Quora to Trustpilot
        triggerFlip('trustpilot', runTrustpilotPhase);
      }, 3800);
    };

    const runTrustpilotPhase = () => {
      schedule(() => {
        // Flip from Trustpilot back to Reddit
        setRedditTypedChars(0);
        setRedditRedactions([false, false, false, false]);
        setIsRedditTypingComplete(false);
        setIsBuyingIntentHighlighted(false);

        triggerFlip('reddit', () => {
          schedule(startRedditCycle, 250);
        });
      }, 3800);
    };

    const startRedditCycle = () => {
      setRedditTypedChars(0);
      setRedditRedactions([false, false, false, false]);
      setIsRedditTypingComplete(false);
      setIsBuyingIntentHighlighted(false);

      let currentChars = 0;
      intervalId = setInterval(() => {
        if (isCancelled) {
          clearInterval(intervalId);
          return;
        }

        currentChars += 1;
        setRedditTypedChars(currentChars);

        if (currentChars >= TOTAL_REDDIT_TEXT_CHARS) {
          clearInterval(intervalId);
          setIsRedditTypingComplete(true);

          // Typing finished: brief pause, then sequential redact wipes
          schedule(() => setRedditRedactions([true, false, false, false]), 350);
          schedule(() => setRedditRedactions([true, true, false, false]), 580);
          schedule(() => setRedditRedactions([true, true, true, false]), 810);
          schedule(() => setRedditRedactions([true, true, true, true]), 1040);

          // Buying intent alert accent
          schedule(() => setIsBuyingIntentHighlighted(true), 1350);

          // Hold completed highlighted state for 3.5s, then flip to Quora!
          schedule(() => {
            triggerFlip('quora', runQuoraPhase);
          }, 4850);
        }
      }, 24);
    };

    startRedditCycle();

    return () => {
      isCancelled = true;
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  }, [isBuyerIntentInView]);

  return (
    <div className="w-full min-h-screen bg-[#F7F7F7] text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Keyframe animation for buttery-smooth GPU compositor letter bloom */}
      <style>{`
        @keyframes smoothCharReveal {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(8px) scale(0.96);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0) scale(1);
          }
        }
        @keyframes cardFlipOut {
          0% {
            transform: perspective(1200px) rotateY(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: perspective(1200px) rotateY(-90deg) scale(0.92);
            opacity: 0.2;
          }
        }
        @keyframes cardFlipIn {
          0% {
            transform: perspective(1200px) rotateY(90deg) scale(0.92);
            opacity: 0.2;
          }
          100% {
            transform: perspective(1200px) rotateY(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>

      {/* 1, 2 & 3. Top Sections Surface (z-20, slides up to reveal fixed black screen) */}
      <div className="voc-top-surface relative z-20 bg-[#F7F7F7]">
        {/* Hero Section with 3D Animated White Blocks Video Background */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        >
          <source src="/videos/voice-of-customer-bg.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-auto mx-auto text-center flex flex-col items-center justify-center select-none">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] tracking-[-1.5px] sm:tracking-[-2.5px] leading-[1.12] text-[#262626] mb-5 sm:mb-6 min-h-[1.25em] sm:min-h-[2.3em]">
            {/* Line 1 Words */}
            <span className="inline-block">
              {LINE1_DATA.map((w, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {w.chars.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-block will-change-[transform,opacity,filter]"
                      style={{
                        opacity: 0,
                        animation: 'smoothCharReveal 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${c.delay}ms`,
                      }}
                    >
                      {c.char}
                    </span>
                  ))}
                  {w.spaceDelay !== null && (
                    <span
                      className="inline-block"
                      style={{
                        opacity: 0,
                        animation: 'smoothCharReveal 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${w.spaceDelay}ms`,
                      }}
                    >
                      &nbsp;
                    </span>
                  )}
                </span>
              ))}
            </span>

            <br className="hidden sm:inline" />
            <span className="inline sm:hidden">&nbsp;</span>

            {/* Line 2 Words */}
            <span className="inline-block">
              {LINE2_DATA.map((w, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {w.chars.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-block will-change-[transform,opacity,filter]"
                      style={{
                        opacity: 0,
                        animation: 'smoothCharReveal 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${c.delay}ms`,
                      }}
                    >
                      {c.char}
                    </span>
                  ))}
                  {w.spaceDelay !== null && (
                    <span
                      className="inline-block"
                      style={{
                        opacity: 0,
                        animation: 'smoothCharReveal 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${w.spaceDelay}ms`,
                      }}
                    >
                      &nbsp;
                    </span>
                  )}
                </span>
              ))}
            </span>
          </h1>

          <p
            className={`font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[1.4] sm:leading-[1.45] text-[#4D4D4D] text-center max-w-[640px] mx-auto tracking-normal transition-all duration-700 ease-out ${
              isHeadingComplete
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
             Discover customer pain points, unmet needs, buying intentions,
            <br className="hidden sm:inline" /> and decision-making factors through real customer
            <br className="hidden sm:inline" /> conversations and feedback.
          </p>
        </div>
      </section>

      {/* 2 & 3. Unified 2x2 Grid Section: Customer Pain Points & Unmet Customer Needs */}
      <section className="relative w-full bg-[#F7F7F7] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto border-x border-[#E5E7EB]">
          {/* Row 1: Customer Pain Points */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#E5E7EB]">
            {/* Left Column: Eyebrow, Heading & Narrative */}
            <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] sm:text-[14px] text-[#475569] mb-3 sm:mb-4 tracking-normal">
                Customer Pain Points
              </span>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-[-1.2px] leading-[1.14] text-[#0D0D0D] mb-5 sm:mb-6">
                Discover What Frustrates
                <br />
                Your Customers
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#475569] max-w-lg">
                Identify recurring problems, complaints, and friction points experienced by customers using
                competing products. Understand where existing solutions fall short and uncover opportunities
                to do better.
              </p>
            </div>

            {/* Right Column: Visual Card with Staggered Feedback Pills */}
            <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex items-center justify-center">
              <div
                ref={cardRef}
                className="w-full max-w-[562px] min-h-[415px] rounded-[16px] p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-4 sm:gap-5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-[#EDEDED]"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
                }}
              >
                {PAIN_POINT_PILLS.map((pill, index) => {
                  const isPink = pill.type === 'pink';
                  const isVisible = index < visibleCount && !isExiting;

                  return (
                    <div
                      key={pill.id}
                      className={`${pill.align === 'start' ? 'self-start' : 'self-end'} transform-gpu will-change-transform`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? 'scale(1) translateY(0)'
                          : isExiting
                          ? 'scale(0.96) translateY(-8px)'
                          : 'scale(0.5) translateY(24px)',
                        transition: isExiting
                          ? 'opacity 250ms ease-in, transform 250ms ease-in'
                          : 'opacity 180ms ease-out, transform 280ms cubic-bezier(0.175, 0.885, 0.32, 1.35)',
                      }}
                    >
                      <div
                        className={`flex items-center gap-[10px] rounded-full py-[12px] px-[20px] sm:px-[24px] select-none ${
                          isPink ? 'text-[#1E1E1E]' : 'bg-[#E50914] text-white'
                        }`}
                        style={{
                          backgroundColor: isPink ? '#FFE5E5' : '#E50914',
                          boxShadow: isPink
                            ? '0px 4px 16px rgba(10, 102, 194, 0.12)'
                            : '0px 4px 16px rgba(229, 9, 20, 0.25)',
                        }}
                      >
                        <div className="w-[30px] h-[30px] rounded-full overflow-hidden shrink-0 bg-neutral-200">
                          <img
                            src={pill.avatar}
                            alt="Customer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14.5px] font-normal">
                          {pill.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Row 2: Unmet Customer Needs */}
          <div ref={unmetNeedsRef} className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#E5E7EB]">
            {/* Left Column: Visual Card with Dot Grid, Customer Quotes & Identified Need Badges */}
            <div className="order-2 lg:order-1 p-8 sm:p-12 lg:p-16 xl:p-20 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <div
                className="w-full max-w-[562px] min-h-[420px] rounded-[16px] p-4 sm:p-8 flex flex-col justify-center gap-7 relative select-none"
                style={{
                  backgroundColor: '#F7F7F7',
                  backgroundImage: 'radial-gradient(#9CA3AF 1.5px, transparent 1.5px)',
                  backgroundSize: '32px 32px',
                }}
              >
                {/* Bubble 1: Top Left / Customer quote + Identified Need */}
                <div
                  className="self-start w-full max-w-[390px] flex flex-col items-start transition-all duration-700 ease-out transform-gpu"
                  style={{
                    opacity: isUnmetNeedsInView ? 1 : 0,
                    transform: isUnmetNeedsInView ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: '150ms',
                  }}
                >
                  <div className="w-full bg-white/95 backdrop-blur-sm rounded-[12px] p-[12px] sm:p-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center gap-[10px]">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden shrink-0 bg-neutral-200">
                      <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=140&auto=format&fit=crop&q=80"
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] sm:text-[14px] leading-[18px] text-[#818181]">
                      I wish this tool could automatically assign tasks based on workload instead of doing it manually
                    </p>
                  </div>

                  {/* Scaled Blue Pill */}
                  <div
                    className="mt-[8px] inline-flex items-center gap-[8px] rounded-full h-[38px] sm:h-[40px] px-[14px] sm:px-[16px] select-none text-white transition-all duration-500 ease-out transform-gpu"
                    style={{
                      backgroundColor: '#0011FF',
                      borderTop: '1px solid rgba(10, 102, 194, 0.25)',
                      boxShadow: '0px 4px 16px rgba(0, 17, 255, 0.25)',
                      opacity: isUnmetNeedsInView ? 1 : 0,
                      transform: isUnmetNeedsInView ? 'scale(1)' : 'scale(0.8)',
                      transitionDelay: '350ms',
                    }}
                  >
                    <img
                      src={ciRoundedLogo}
                      alt="Ci Logo"
                      className="w-[20px] h-[20px] rounded-full object-contain shrink-0"
                    />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] sm:text-[13px] font-normal text-white tracking-normal whitespace-nowrap">
                      The features aren’t worth the price
                    </span>
                  </div>
                </div>

                {/* Bubble 2: Bottom Right / Customer quote + Identified Need */}
                <div
                  className="self-end w-full max-w-[390px] flex flex-col items-end transition-all duration-700 ease-out transform-gpu"
                  style={{
                    opacity: isUnmetNeedsInView ? 1 : 0,
                    transform: isUnmetNeedsInView ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: '350ms',
                  }}
                >
                  <div className="w-full bg-white/95 backdrop-blur-sm rounded-[12px] p-[12px] sm:p-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-end gap-[10px]">
                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] sm:text-[14px] leading-[18px] text-[#818181] text-right">
                      The food price is reasonable, but after adding delivery and other charges, it becomes too expensive
                    </p>
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden shrink-0 bg-neutral-200">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&auto=format&fit=crop&q=80"
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Scaled Blue Pill for Bubble 2 */}
                  <div
                    className="mt-[8px] inline-flex items-center gap-[8px] rounded-full h-[38px] sm:h-[40px] px-[14px] sm:px-[16px] select-none text-white transition-all duration-500 ease-out transform-gpu"
                    style={{
                      backgroundColor: '#0011FF',
                      borderTop: '1px solid rgba(10, 102, 194, 0.25)',
                      boxShadow: '0px 4px 16px rgba(0, 17, 255, 0.25)',
                      opacity: isUnmetNeedsInView ? 1 : 0,
                      transform: isUnmetNeedsInView ? 'scale(1)' : 'scale(0.8)',
                      transitionDelay: '550ms',
                    }}
                  >
                    <img
                      src={ciRoundedLogo}
                      alt="Ci Logo"
                      className="w-[20px] h-[20px] rounded-full object-contain shrink-0"
                    />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] sm:text-[13px] font-normal text-white tracking-normal whitespace-nowrap">
                      The features aren’t worth the price
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="order-1 lg:order-2 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14px] font-medium text-[#475569] tracking-normal mb-3 sm:mb-4 block">
                Unmet Customer Needs
              </span>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-[-1.2px] leading-[1.14] text-[#0D0D0D] mb-5 sm:mb-6">
                Find What Existing
                <br />
                Products Are Missing
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#475569] max-w-lg">
                Uncover features, capabilities, and experiences customers wish their current solutions offered. Identify gaps between what the market provides and what customers actually need.
              </p>
            </div>
          </div>

          {/* Row 3: Buyer Intent Intelligence */}
          <div ref={buyerIntentRef} className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Eyebrow, Heading & Narrative */}
            <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14px] font-medium text-[#475569] tracking-normal mb-3 sm:mb-4 block">
                Buyer Intent Intelligence
              </span>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-[-1.2px] leading-[1.14] text-[#0D0D0D] mb-5 sm:mb-6">
                Understand What Drives
                <br />
                Customers to Buy
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#475569] max-w-lg">
                Analyze customer conversations to uncover buying signals, purchase readiness, and the specific needs driving customers to search for alternative solutions.
              </p>
            </div>

            {/* Right Column: 3D Flipping Visual Buyer Intent Card (Reddit -> Quora -> Trustpilot) */}
            <div className="p-4 sm:p-10 lg:p-16 xl:p-20 flex items-center justify-center bg-[#F7F7F7]">
              <div
                className="w-full max-w-[485px] min-h-[310px] sm:h-[450px] flex items-center justify-center transition-all duration-700 ease-out transform-gpu"
                style={{
                  perspective: '1200px',
                  opacity: isBuyerIntentInView ? 1 : 0,
                  transform: isBuyerIntentInView ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: '150ms',
                }}
              >
                <div
                  className="w-full min-h-[310px] sm:h-[450px] flex items-center justify-center transform-gpu will-change-transform"
                  style={{
                    animation:
                      flipAnimation === 'flip-out'
                        ? 'cardFlipOut 320ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
                        : flipAnimation === 'flip-in'
                        ? 'cardFlipIn 380ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        : undefined,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Card 1: Reddit */}
                  {activePlatform === 'reddit' && (
                    <div
                      className="w-full max-w-[485px] min-h-[420px] sm:h-[450px] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 border border-[#FFF0E9] flex flex-col justify-between select-none"
                      style={{
                        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 65%, #FCFAFF 100%)',
                        boxShadow: '0px 12px 24px rgba(99, 58, 0, 0.25)',
                      }}
                    >
                      {/* Header: Reddit Brand + Buyer Intent Signal Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          {/* Reddit Alien Icon Circle */}
                          <div className="w-[32px] h-[32px] rounded-full bg-[#FF4500] flex items-center justify-center shrink-0 shadow-sm">
                            <svg viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]">
                              <path
                                fill="white"
                                d="M20 12c0-.9-.7-1.6-1.6-1.6-.4 0-.8.2-1.1.4-1.3-.9-3-1.5-4.9-1.6l.8-3.9 2.7.6c0 .8.7 1.4 1.5 1.4.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-.6 0-1.2.4-1.4 1l-3-.6c-.2 0-.4.1-.4.3L11.5 10c-2 .1-3.8.7-5.1 1.6-.3-.3-.7-.5-1.1-.5-.9 0-1.6.7-1.6 1.6 0 .6.3 1.1.8 1.4-.1.3-.1.6-.1.9 0 3.3 3.8 6 8.5 6s8.5-2.7 8.5-6c0-.3 0-.6-.1-.9.5-.3.8-.8.8-1.4zm-11.5.5c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2zm6.6 4.7c-.8.8-2.1.9-3.1.9-1 0-2.3-.1-3.1-.9-.2-.2-.2-.4 0-.6.2-.2.4-.2.6 0 .6.6 1.6.7 2.5.7.9 0 1.9-.1 2.5-.7.2-.2.4-.2.6 0 .2.2.2.4 0 .6zm-.6-3.5c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .7-.5 1.2-1.2 1.2z"
                              />
                            </svg>
                          </div>
                          <span className="font-['Arimo',sans-serif] font-bold text-[26px] sm:text-[32px] tracking-[-1px] text-[#0B0A09] leading-none">
                            reddit
                          </span>
                        </div>

                        <span className="px-2.5 sm:px-[13px] py-1 sm:py-[5px] rounded-full bg-[#FFEFE5] text-[#D94E00] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[11px] sm:text-[13px] tracking-normal whitespace-nowrap">
                          Buyer Intent Signal
                        </span>
                      </div>

                      {/* Subreddit & Author Meta */}
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <div className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] rounded-full bg-[#FF9A00] flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-[11px] sm:w-[12px] h-[11px] sm:h-[12px]">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        </div>
                        <span className="font-['Arimo',sans-serif] font-bold text-[13.5px] sm:text-[14.5px] leading-none text-[#0B0A09]">
                          r/SaaS
                        </span>
                        <span className="font-['Arimo',sans-serif] font-normal text-[13px] sm:text-[14.5px] leading-none text-[#6E675C] truncate">
                          · Posted by u/growthbuilder 3 days ago
                        </span>
                      </div>

                      {/* Post Title */}
                      <h3 className="font-['Arimo',sans-serif] font-bold text-[17px] sm:text-[20px] tracking-[-0.3px] text-[#0B0A09] leading-[1.25]">
                        Looking for a better CRM alternative
                      </h3>

                      {/* Post Body with Typewriter & Animated Redact Effect */}
                      <p className="font-['Arimo',sans-serif] text-[13.5px] sm:text-[15.5px] leading-[24px] sm:leading-[28px] text-[#262626] min-h-[72px] sm:min-h-[84px]">
                        {(() => {
                          let cumulative = 0;
                          return REDDIT_TEXT_SEGMENTS.map((seg, idx) => {
                            const start = cumulative;
                            const end = cumulative + seg.text.length;
                            cumulative = end;

                            if (redditTypedChars <= start) {
                              return null;
                            }

                            const charsToShow = Math.min(redditTypedChars - start, seg.text.length);
                            const visibleText = seg.text.slice(0, charsToShow);

                            if (!seg.isHighlight) {
                              return <span key={idx}>{visibleText}</span>;
                            }

                            const isRedacted =
                              seg.highlightIndex !== undefined && redditRedactions[seg.highlightIndex];

                            return (
                              <span
                                key={idx}
                                className="relative inline-flex items-center justify-center px-[3.5px] h-[22px] rounded-[2px] align-middle overflow-hidden mx-[1px]"
                              >
                                {/* Redact fill bar that sweeps smoothly from left to right */}
                                <span
                                  className="absolute inset-0 bg-[#FF4500] origin-left rounded-[2px]"
                                  style={{
                                    transform: isRedacted ? 'scaleX(1)' : 'scaleX(0)',
                                    transition: 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                                  }}
                                />
                                {/* Text inside highlight: turns crisp white after redact sweeps */}
                                <span
                                  className={`relative z-10 font-semibold text-[15px] sm:text-[15.5px] transition-colors duration-200 ${
                                    isRedacted ? 'text-white' : 'text-[#262626]'
                                  }`}
                                >
                                  {visibleText}
                                </span>
                              </span>
                            );
                          });
                        })()}
                        {!isRedditTypingComplete && (
                          <span className="inline-block w-[2px] h-[17px] bg-[#FF4500] ml-0.5 animate-pulse align-middle" />
                        )}
                      </p>

                      {/* Engagement Footer Row */}
                      <div className="flex items-center gap-4 sm:gap-5 pt-1 text-[#6E675C] text-[13.5px] font-medium border-t border-[#F3F4F6]">
                        {/* Upvotes */}
                        <div className="flex items-center gap-1.5 font-bold text-[#FF4500]">
                          <svg viewBox="0 0 24 24" fill="#FF4500" stroke="#FF4500" strokeWidth="1" className="w-[16px] h-[16px]">
                            <path d="M12 4l-7 7h4v9h6v-9h4l-7-7z" />
                          </svg>
                          <span>142</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="#6E675C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px]">
                            <path d="M12 20l7-7h-4V4h-6v9H5l7 7z" />
                          </svg>
                        </div>

                        {/* Comments */}
                        <div className="flex items-center gap-1.5">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span>58 Comments</span>
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-1.5">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                          </svg>
                          <span>Share</span>
                        </div>

                        {/* More */}
                        <div className="ml-auto text-[#9CA3AF] text-[16px] tracking-[2px] leading-none cursor-pointer">
                          ···
                        </div>
                      </div>

                      {/* Bottom Alert: BUYING INTENT DETECTED */}
                      <div
                        className={`rounded-[14px] border p-3 sm:p-3.5 flex items-center gap-3 shadow-sm transition-all duration-500 ${
                          isBuyingIntentHighlighted
                            ? 'border-[#FF4500] bg-gradient-to-r from-[#FFF5ED] to-[#FFEFE5] shadow-[0_0_24px_rgba(255,69,0,0.18)] scale-[1.01]'
                            : 'border-[#FF8A50] bg-gradient-to-r from-[#FFF9F5] to-[#FFF5ED]'
                        }`}
                      >
                        <div
                          className={`w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isBuyingIntentHighlighted ? 'bg-[#FF4500] scale-105 shadow-sm' : 'bg-[#FFEFE5]'
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill={isBuyingIntentHighlighted ? '#FFFFFF' : '#FF4500'}
                            className="w-[17px] h-[17px] transition-colors duration-300"
                          >
                            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-['Arimo',sans-serif] font-bold text-[13px] sm:text-[13.5px] tracking-[0.4px] text-[#FF4500]">
                            BUYING INTENT DETECTED
                          </span>
                          <span className="font-['Arimo',sans-serif] font-normal text-[11.5px] sm:text-[12.5px] text-[#262626]">
                            High intent · Switching solution · Pricing + AI automation
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 2: Quora */}
                  {activePlatform === 'quora' && (
                    <div
                      className="w-full max-w-[485px] aspect-[191/180] sm:aspect-auto sm:h-[450px] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-[#FFF0E9] bg-white select-none transition-shadow"
                      style={{
                        boxShadow: '0px 12px 24px rgba(99, 58, 0, 0.25)',
                      }}
                    >
                      <img
                        src={quoraFlipImg}
                        alt="Quora Buyer Intent"
                        className="w-full h-full object-contain sm:object-cover block"
                      />
                    </div>
                  )}

                  {/* Card 3: Trustpilot */}
                  {activePlatform === 'trustpilot' && (
                    <div
                      className="w-full max-w-[485px] aspect-[248/225] sm:aspect-auto sm:h-[450px] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-[#FFF0E9] bg-white select-none transition-shadow"
                      style={{
                        boxShadow: '0px 12px 24px rgba(99, 58, 0, 0.25)',
                      }}
                    >
                      <img
                        src={trustpilotFlipImg}
                        alt="Trustpilot Buyer Intent"
                        className="w-full h-full object-contain sm:object-cover block"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Spacer in document flow defining the scroll distance (exact same code as QuoteSection on Home page) */}
      <div
        id="customer-decisions-parallax-spacer"
        className="relative w-full h-[120vh] sm:h-[135vh] pointer-events-none"
      />

      {/* 4. Middle: Fixed Black Decisions Screen: Only active during decisions reveal, exactly like QuoteSection on Home page (z-10, does not move AT ALL) */}
      {isCustomerDecisionsInView && (
        <section
          ref={customerDecisionsRef}
          className="fixed top-0 left-0 w-full h-screen bg-black text-white px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10 select-none z-10 pointer-events-auto"
        >
          {/* Subtle ambient lighting for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[350px] bg-neutral-800/40 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10 my-auto">
            {/* Left Column: Heading with gradient line accent */}
            <div className="w-full lg:w-[36%] xl:w-[34%] flex flex-col justify-center select-none pt-2 lg:pt-0 shrink-0">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[34px] xl:text-[42px] font-bold tracking-tight text-white leading-[1.18]">
                <span className="block whitespace-nowrap">UNDERSTAND CUSTOMER</span>
                <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
                  <div className="w-[60px] sm:w-[200px] h-[4px] bg-gradient-to-r from-via-white/50 to-white shrink-0" />
                  <span>DECISIONS</span>
                </div>
              </h2>
            </div>

          {/* Right Column: Architectural Chamfered Cards Carousel (Draggable & Auto-switching) */}
          <div
            className="w-full lg:w-[62%] xl:w-[64%] flex flex-col items-start select-none"
            style={
              {
                '--card-width': 'min(388px, 82vw)',
                '--card-gap': '28px',
              } as React.CSSProperties
            }
          >
            {/* Draggable Carousel Track Wrapper */}
            <div
              ref={cardsContainerRef}
              className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-none select-none py-2 px-1"
              onMouseMove={handleCardsMouseMove}
              onMouseEnter={() => {
                isCardsHovered.current = true;
                setIsCursorInsideCards(true);
                nextAdvanceTimeRef.current = Date.now() + 7000;
              }}
              onMouseLeave={() => {
                isCardsHovered.current = false;
                setIsCursorInsideCards(false);
                setCursorPos({ x: 0, y: 0 });
                nextAdvanceTimeRef.current = Date.now() + 2600;
              }}
              onPointerDown={handleCardsPointerDown}
              onPointerMove={handleCardsPointerMove}
              onPointerUp={handleCardsPointerUp}
              onPointerCancel={handleCardsPointerUp}
            >
              {/* Custom Cursor Overlay: ← DRAG → (Floating alongside the hand cursor) */}
              <div
                className="pointer-events-none absolute z-30 transition-opacity duration-150 select-none hidden md:block"
                style={{
                  left: `${cursorPos.x}px`,
                  top: `${cursorPos.y}px`,
                  transform: 'translate(-50%, -50%)',
                  opacity: isCursorInsideCards && cursorPos.x > 30 && cursorPos.y > 20 ? 1 : 0,
                  willChange: 'left, top',
                }}
              >
                <div className="bg-black text-white px-3.5 py-1.5 border border-white/20 shadow-lg flex items-center gap-2.5">
                  <span className="text-white text-[13px] font-mono leading-none font-bold">←</span>
                  <span className="text-white text-[12px] font-bold tracking-[0.2em] font-mono leading-none">
                    DRAG
                  </span>
                  <span className="text-white text-[13px] font-mono leading-none font-bold">→</span>
                </div>
              </div>

              <div
                className="flex items-center gap-[28px] will-change-transform"
                onTransitionEnd={handleCardsTransitionEnd}
                style={{
                  transform: `translateX(calc(-${activeDecisionIndex} * (var(--card-width) + var(--card-gap)) + ${dragOffset}px))`,
                  transition:
                    withTransition && !isDraggingCards
                      ? 'transform 480ms cubic-bezier(0.16, 1, 0.3, 1)'
                      : 'none',
                }}
              >
                {EXTENDED_DECISION_CARDS.map((card, idx) => {
                  return (
                    <div
                      key={card.key}
                      onClick={() => {
                        if (!wasDragged.current) {
                          setWithTransition(true);
                          setActiveDecisionIndex(idx);
                          nextAdvanceTimeRef.current = Date.now() + (isCardsHovered.current ? 7000 : 2600);
                        }
                      }}
                      className="relative shrink-0 select-none transform-gpu"
                      style={{
                        width: 'var(--card-width)',
                        filter: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.45))',
                        opacity: 1,
                      }}
                    >
                      <div
                        className="w-full h-[440px] sm:h-[470px] lg:h-[500px] xl:h-[520px] bg-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between select-none relative"
                        style={{
                          clipPath:
                            'polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 44px 100%, 0 calc(100% - 44px))',
                        }}
                      >
                        <div>
                          {/* Top Line & Index */}
                          <div className="flex items-center gap-3 pt-2">
                            <div className="w-[60px] sm:w-[72px] h-[2px] bg-gradient-to-r from-transparent via-[#0B0A09]/40 to-[#0B0A09]" />
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#0B0A09] tracking-wider">
                              {card.number}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] text-[#0B0A09] mt-6 sm:mt-8 tracking-tight leading-snug">
                            {card.title}
                          </h3>

                          {/* Description */}
                          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#475569] mt-4 sm:mt-5">
                            {card.description}
                          </p>
                        </div>

                        {/* Bottom-right Barcode */}
                        <div className="self-end pb-2">
                          <svg width="28" height="24" viewBox="0 0 28 24" fill="none" className="text-[#0B0A09]">
                            <rect x="0" y="0" width="2" height="24" fill="currentColor" />
                            <rect x="4" y="0" width="1.5" height="24" fill="currentColor" />
                            <rect x="8" y="0" width="3" height="24" fill="currentColor" />
                            <rect x="13" y="0" width="1.5" height="24" fill="currentColor" />
                            <rect x="17" y="0" width="2.5" height="24" fill="currentColor" />
                            <rect x="22" y="0" width="1.5" height="24" fill="currentColor" />
                            <rect x="25" y="0" width="3" height="24" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Bottom Sections Surface (z-20, slides up to cover fixed black screen with shadow overlap) */}
      <div className="voc-bottom-surface relative z-20 w-full shadow-[0_-30px_70px_rgba(0,0,0,0.95)] bg-black">
        <WhatsNextSection />
      </div>
    </div>
  );
};

export default VoiceOfCustomer;

