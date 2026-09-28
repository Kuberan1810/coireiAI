import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Sparkles, Globe, Search, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { competitorsData } from './competitorsData';

// Export square icon from competitors table
const ExportSquareIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 12,
  className = 'text-[#64748B]',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      d="M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
    />
  </svg>
);

interface ScrollTextRevealProps {
  lines: string[];
  className?: string;
}

// Scroll-driven text reveal: starts in #4E4E4E, smoothly turns black one by one as user scrolls
const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({ lines, className = '' }) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  // Group words per line with global word index for seamless sequential animation
  const lineWords = useMemo(() => {
    let globalIndex = 0;
    return lines.map((line) => {
      const words = line.split(' ').filter(Boolean);
      return words.map((word) => ({
        text: word,
        index: globalIndex++,
      }));
    });
  }, [lines]);

  const totalWords = useMemo(() => {
    return lineWords.reduce((acc, curr) => acc + curr.length, 0);
  }, [lineWords]);

  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    let animId: number;

    const updateWordHighlight = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Start highlighting when headline reaches 85% of viewport
      // Complete highlight when headline reaches 45% of viewport
      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.45;
      const totalDistance = startY - endY;

      const currentDistance = startY - rect.top;
      const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));

      const targetWords = Math.round(progress * totalWords);
      setRevealedCount(targetWords);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(updateWordHighlight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on mount
    updateWordHighlight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [totalWords]);

  return (
    <h2 ref={containerRef} className={className}>
      {lineWords.map((line, lineIdx) => (
        <span key={lineIdx} className="block sm:whitespace-nowrap">
          {line.map(({ text, index }) => {
            const isBlack = index < revealedCount;
            return (
              <span
                key={index}
                className="inline-block transition-colors duration-300 ease-out mr-[0.28em] last:mr-0 select-text"
                style={{
                  color: isBlack ? '#000000' : '#A8A8A8',
                }}
              >
                {text}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
};

export const Hero: React.FC = () => {
  // 1. First search bar: Standard manual input (NOT automatic)
  const INITIAL_ROWS_COUNT = 4;

  // 1. First search bar: Standard manual input (NOT automatic)
  const [firstSearchUrl, setFirstSearchUrl] = useState('');

  // Typewriter effect for headline keywords: 'URL' -> 'DOC' -> 'prompt'
  const HEADLINE_WORDS = [
    { text: 'URL', styleKey: 'URL' },
    { text: 'DOC', styleKey: 'DOC' },
    { text: 'prompt', styleKey: 'Prompt' },
  ] as const;

  const [wordIndex, setWordIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState('URL');
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);

  useEffect(() => {
    const currentWord = HEADLINE_WORDS[wordIndex].text;
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeletingHeadline) {
      if (typedHeadline.length < currentWord.length) {
        // Typing speed per character
        timer = setTimeout(() => {
          setTypedHeadline(currentWord.slice(0, typedHeadline.length + 1));
        }, 110);
      } else {
        // Pause at completed word
        timer = setTimeout(() => {
          setIsDeletingHeadline(true);
        }, 2200);
      }
    } else {
      if (typedHeadline.length > 0) {
        // Backspacing speed
        timer = setTimeout(() => {
          setTypedHeadline(typedHeadline.slice(0, -1));
        }, 55);
      } else {
        // Transition to next word
        setIsDeletingHeadline(false);
        setWordIndex((prev) => (prev + 1) % HEADLINE_WORDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedHeadline, isDeletingHeadline, wordIndex]);

  // 2. Second search bar (floating Figma card on the left side): AUTOMATIC TYPEWRITER
  const targetText = 'Find My Competitors';
  const [typedUrl, setTypedUrl] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isKnobPressed, setIsKnobPressed] = useState(false);

  // Animated Cursor state: 'hidden' | 'gliding' | 'entering' | 'on-target' | 'clicking' | 'clicked' | 'leaving'
  type CursorState = 'hidden' | 'gliding' | 'entering' | 'on-target' | 'clicking' | 'clicked' | 'leaving';
  const [cursorState, setCursorState] = useState<CursorState>('hidden');

  // 3. Desktop mockup search query subheader: types out when send button is clicked
  const PROMPT_TARGET = 'scraping all the competitors';
  const [promptText, setPromptText] = useState('');
  const [isPromptTyping, setIsPromptTyping] = useState(false);
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const promptIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startPromptAnimation = () => {
    setIsPromptVisible(true);
    setIsPromptTyping(true);
    setPromptText('');

    if (promptIntervalRef.current) {
      clearInterval(promptIntervalRef.current);
    }

    let pIndex = 0;
    promptIntervalRef.current = setInterval(() => {
      if (pIndex < PROMPT_TARGET.length) {
        pIndex++;
        setPromptText(PROMPT_TARGET.slice(0, pIndex));
      } else {
        if (promptIntervalRef.current) {
          clearInterval(promptIntervalRef.current);
        }
        setIsPromptTyping(false);
      }
    }, 28);
  };

  // Table creation state: 'idle' (prefilled list) | 'adding' (new list adding & auto-scrolling) | 'ready' (infinite auto-scroll)
  const [tableStatus, setTableStatus] = useState<'idle' | 'adding' | 'ready'>('idle');
  const [createdRowsCount, setCreatedRowsCount] = useState<number>(INITIAL_ROWS_COUNT);

  const tableScrollRef = useRef<HTMLDivElement | null>(null);
  const scrollPosRef = useRef<number>(0);

  // Trigger addition helper
  const triggerTableAddition = (url: string = targetText) => {
    setTypedUrl(url);
    setIsTyping(false);
    setIsKnobPressed(true);
    setTimeout(() => {
      setIsKnobPressed(false);
      setTableStatus('adding');
      startPromptAnimation();
      let rowIdx = INITIAL_ROWS_COUNT;
      const addInterval = setInterval(() => {
        if (rowIdx < competitorsData.length) {
          rowIdx++;
          setCreatedRowsCount(rowIdx);
          if (tableScrollRef.current) {
            tableScrollRef.current.scrollTo({
              top: tableScrollRef.current.scrollHeight,
              behavior: 'smooth',
            });
            scrollPosRef.current = tableScrollRef.current.scrollTop;
          }
        } else {
          clearInterval(addInterval);
          setTimeout(() => setTableStatus('ready'), 350);
        }
      }, 220);
    }, 280);
  };

  // Sequence:
  // 1. Table is pre-filled with INITIAL_ROWS_COUNT (4 rows)
  // 2. Auto-type targetText
  // 3. Cursor appears and glides to send button
  // 4. Cursor clicks the send button (ripple + button press)
  // 5. New list rows add to table one-by-one and table automatically scrolls down
  // 6. Enters infinite smooth auto-scroll when ready
  useEffect(() => {
    let charIndex = 0;
    setTypedUrl('');
    setIsTyping(true);
    setIsKnobPressed(false);
    setCursorState('hidden');
    setTableStatus('idle');
    setCreatedRowsCount(INITIAL_ROWS_COUNT);
    scrollPosRef.current = 0;
    if (tableScrollRef.current) {
      tableScrollRef.current.scrollTop = 0;
    }
    if (promptIntervalRef.current) {
      clearInterval(promptIntervalRef.current);
    }
    setPromptText('');
    setIsPromptTyping(false);
    setIsPromptVisible(false);

    // Initial pause while showing pre-filled table before typing starts
    const startTimer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (charIndex < targetText.length) {
          charIndex++;
          setTypedUrl(targetText.slice(0, charIndex));
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          // Step 1: Brief pause (220ms) after typing, then cursor glides directly to the send button in a single animation
          setTimeout(() => {
            setCursorState('gliding');

            // Step 2: Clicks immediately when cursor reaches the send knob (420ms glide)
            setTimeout(() => {
              setCursorState('clicking');
              setIsKnobPressed(true);

              // Step 3: Click releases (130ms press) -> triggers table addition, prompt typing animation & ripple
              setTimeout(() => {
                setCursorState('clicked');
                setIsKnobPressed(false);
                setTableStatus('adding');
                startPromptAnimation();

                // Cursor glides away and fades out
                setTimeout(() => {
                  setCursorState('leaving');
                  setTimeout(() => setCursorState('hidden'), 350);
                }, 150);

                // Add new rows one-by-one and auto-scroll down
                let rowIdx = INITIAL_ROWS_COUNT;
                const addInterval = setInterval(() => {
                  if (rowIdx < competitorsData.length) {
                    rowIdx++;
                    setCreatedRowsCount(rowIdx);
                    if (tableScrollRef.current) {
                      tableScrollRef.current.scrollTo({
                        top: tableScrollRef.current.scrollHeight,
                        behavior: 'smooth',
                      });
                      scrollPosRef.current = tableScrollRef.current.scrollTop;
                    }
                  } else {
                    clearInterval(addInterval);
                    setTimeout(() => {
                      setTableStatus('ready');
                    }, 400);
                  }
                }, 220); // 220ms per new row added
              }, 130); // Click duration
            }, 420); // Glide duration: arrives at knob and clicks immediately
          }, 220); // Pause after typing before cursor enters
        }
      }, 35); // 35ms typing speed matching Features.tsx
    }, 900);

    return () => {
      clearTimeout(startTimer);
      if (promptIntervalRef.current) {
        clearInterval(promptIntervalRef.current);
      }
    };
  }, [targetText]);

  // Automatic smooth scrolling loop (pure animation, non-interactive)
  useEffect(() => {
    const el = tableScrollRef.current;
    if (!el) return;

    if (tableStatus === 'idle') {
      el.scrollTop = 0;
      scrollPosRef.current = 0;
      return;
    }

    let animId: number;
    let lastTime = performance.now();

    const scrollLoop = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (el) {
        scrollPosRef.current += (delta / 1000) * 26;

        // Reset for seamless infinite loop when ready
        const halfHeight = el.scrollHeight / 2;
        if (tableStatus === 'ready' && halfHeight > 0 && scrollPosRef.current >= halfHeight) {
          scrollPosRef.current -= halfHeight;
        }

        el.scrollTop = scrollPosRef.current;
      }

      animId = requestAnimationFrame(scrollLoop);
    };

    animId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animId);
  }, [tableStatus]);

  // First search bar manual submit triggers addition
  const handleFirstSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstSearchUrl) return;
    triggerTableAddition(firstSearchUrl);
  };

  // Table rows: prefilled list (4 rows) -> additions streamed -> infinite loop when ready
  const activeRows =
    tableStatus === 'ready'
      ? [...competitorsData, ...competitorsData]
      : competitorsData.slice(0, Math.max(INITIAL_ROWS_COUNT, createdRowsCount));

  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 sm:pt-14 pb-14 sm:pb-[80px]">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-blue-50/50 via-indigo-50/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <ScrollReveal variant="fade-up" delay={50} duration={650} distance={20}>
          <div className="mb-3 sm:mb-4 inline-flex items-center justify-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[24px] font-semibold tracking-tight text-center">
            <span className="text-[#0B0F19]">Coirei</span>
            <span className="text-[#EB6658]">GTM</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold text-[#0B0F19] tracking-normal leading-[1.2] md:leading-[1.15] max-w-4xl mx-auto font-['Plus_Jakarta_Sans',sans-serif] text-center select-none">
            <span className="block">
              <span>From One</span>{' '}
              <span className="relative inline-block text-left align-baseline whitespace-nowrap">
                {/* Static footprint matching "URL" in JetBrains Mono to anchor centering and eliminate gaps */}
                <span className="invisible select-none font-['JetBrains_Mono',monospace] font-medium" aria-hidden="true">
                  URL
                </span>
                {/* Active animated typing word starting exactly at the left edge */}
                <span
                  className={`absolute left-0 top-0 whitespace-nowrap transition-colors duration-150 ${HEADLINE_WORDS[wordIndex].styleKey === 'URL'
                    ? "font-['JetBrains_Mono',monospace] text-[#0B0F19] font-medium"
                    : HEADLINE_WORDS[wordIndex].styleKey === 'DOC'
                      ? 'font-black text-[#0B0F19] tracking-tight'
                      : "font-['Instrument_Serif',Georgia,cursive,serif] italic font-normal text-[#0B0F19]"
                    }`}
                >
                  {typedHeadline}
                </span>
              </span>
            </span>
            <span className="block mt-1 sm:mt-1.5">
              to Your Next Growth Move.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" delay={150} duration={650} distance={18}>
          <p className="mt-5 text-[18px] text-[#000000] max-w-2xl mx-auto leading-snug font-normal text-center">
            Coirei GTM is an AI-powered strategist that identifies the right customers, builds GTM strategies, and turns leads into sales.
          </p>
        </ScrollReveal>

        {/* FIRST SEARCH BAR: Standard static input (NOT automatic) */}
        <ScrollReveal variant="fade-up" delay={250} duration={650} distance={16}>
          <form
            onSubmit={handleFirstSearchSubmit}
            className="mt-8 w-[296px] h-[50px] mx-auto flex items-center justify-between rounded-[86px] border border-[#C6BBBB] bg-white pl-4 pr-1.5 transition-all hover:border-neutral-400 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5"
          >
            <input
              type="text"
              value={firstSearchUrl}
              onChange={(e) => setFirstSearchUrl(e.target.value)}
              placeholder="Connect your website"
              className="w-full bg-transparent text-[13px] text-[#000000] placeholder:text-[#8E8E93] placeholder:text-[13px] font-normal outline-none pr-2"
            />
            <button
              type="submit"
              aria-label="Connect"
              title="Connect your website"
              className="h-[38px] px-4 rounded-[86px] bg-black hover:bg-neutral-800 text-white text-[13px] font-medium flex items-center justify-center shrink-0 transition-all cursor-pointer active:scale-95"
            >
              Connect
            </button>
          </form>
        </ScrollReveal>

        {/* Hero Mockup Desktop Window Wrapper */}
        <ScrollReveal
          variant="fade-up"
          delay={350}
          duration={750}
          distance={25}
          className="mt-14 sm:mt-18 max-w-[1024px] mx-auto relative px-2 sm:px-4"
        >
          {/* Desktop Mockup Window (Frame 2147225336: 1022 x 550) */}
          <div className="relative z-10 rounded-t-2xl rounded-b-none bg-white overflow-hidden text-left w-full h-[550px] min-h-[550px] max-h-[550px] flex flex-col shadow-none">
            {/* Top Border: 2px solid #000000 (Figma: 2px, 2px, 0px, 2px border) */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-[#000000] z-30 rounded-t-2xl" />

            {/* Left Border: 2px, Linear Gradient #000000 to #FFFFFF (inner alignment) */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] z-30"
              style={{
                background: 'linear-gradient(to bottom, #000000 0%, #000000 15%, rgba(0, 0, 0, 0.65) 40%, rgba(0, 0, 0, 0.25) 68%, rgba(0, 0, 0, 0.05) 88%, rgba(255, 255, 255, 0) 100%)',
              }}
            />

            {/* Right Border: 2px, Linear Gradient #000000 to #FFFFFF (inner alignment) */}
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-[2px] z-30"
              style={{
                background: 'linear-gradient(to bottom, #000000 0%, #000000 15%, rgba(0, 0, 0, 0.65) 40%, rgba(0, 0, 0, 0.25) 68%, rgba(0, 0, 0, 0.05) 88%, rgba(255, 255, 255, 0) 100%)',
              }}
            />

            {/* Bottom Border: 0px (none, blends directly into background) */}

            {/* Window Top Mac Bar */}
            <div className="bg-[#1E2028] px-4 py-2.5 flex items-center justify-between shrink-0 rounded-t-2xl">
              {/* Left Mac Window Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>
            </div>

            {/* Prompt Search Query Subheader: animated only when send button is clicked */}
            <div className="px-4 sm:px-6 py-3 border-b border-neutral-200/80 bg-white flex items-center gap-2.5 text-neutral-700 text-sm shrink-0 select-none pointer-events-none min-h-[45px]">
              <Sparkles
                className={`w-4 h-4 shrink-0 transition-all duration-300 ${isPromptVisible
                  ? 'text-indigo-600 scale-100 animate-pulse'
                  : 'text-neutral-300 scale-95 opacity-30'
                  }`}
              />
              <span className="font-normal text-neutral-800 text-[13.5px] flex items-center min-h-[20px]">
                {promptText ? (
                  <>
                    <span>{promptText}</span>
                    {isPromptTyping && (
                      <span className="inline-block w-[1.5px] h-3.5 bg-indigo-600 ml-0.5 animate-pulse" />
                    )}
                  </>
                ) : null}
              </span>
            </div>

            {/* Addition scanning shimmer beam while adding new rows */}
            {tableStatus === 'adding' && (
              <div className="w-full h-0.5 bg-neutral-100 overflow-hidden shrink-0">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 animate-[marquee_1.5s_linear_infinite]" />
              </div>
            )}

            {/* The Data Grid / Table Container */}
            <div className="relative flex-1 overflow-hidden">
              {/* Main Table */}
              <div
                ref={tableScrollRef}
                className="w-full h-full overflow-hidden"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                <table className="w-full table-fixed text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-200 text-[12px] font-medium text-neutral-500 bg-neutral-50/95 sticky top-0 z-10 backdrop-blur-sm">
                      <th className="py-2.5 px-3.5 w-[46px] text-center font-normal">
                        <div className="w-3.5 h-3.5 rounded-[4px] border border-neutral-300 mx-auto" />
                      </th>
                      <th className="py-2.5 px-4 w-[160px] font-normal text-neutral-600">name</th>
                      <th className="py-2.5 px-4 w-[180px] font-normal text-neutral-600">website</th>
                      <th className="py-2.5 px-4 w-[190px] font-normal text-neutral-600">
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-neutral-400 stroke-[1.8] shrink-0" />
                          <span>Company Industry</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 w-[220px] font-normal text-neutral-600">
                        <div className="flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5 text-neutral-400 stroke-[1.8] shrink-0" />
                          <span>CEO Linkedin Url</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 font-normal text-neutral-600">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-neutral-400 stroke-[1.8] shrink-0" />
                          <span>Scrape Jobs</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-neutral-100 text-[12.5px] font-normal text-neutral-700">
                    {/* Always render activeRows: starts pre-filled, adds new list, then loops */}
                    {activeRows.map((row, index) => {
                      const isNewlyAdded =
                        tableStatus === 'adding' && index === createdRowsCount - 1;

                      return (
                        <tr
                          key={`${row.id}-${index}`}
                          className={`transition-colors duration-200 select-none ${isNewlyAdded
                            ? 'bg-blue-50/40 border-l-2 border-l-blue-600 animate-[fadeIn_0.35s_ease-out]'
                            : ''
                            }`}
                        >
                          {/* Checkbox Column */}
                          <td className="py-2.5 px-3.5 text-center">
                            <div className="w-3.5 h-3.5 rounded-[4px] border border-neutral-300/90 mx-auto" />
                          </td>

                          {/* Name & Favicon */}
                          <td className="py-2.5 px-4 font-medium text-neutral-900 whitespace-nowrap truncate">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded overflow-hidden bg-white border border-neutral-200/70 flex items-center justify-center shrink-0 shadow-xs">
                                <img
                                  src={row.logoUrl || `https://www.google.com/s2/favicons?domain=${row.website.replace(/^https?:\/\//, '').split('/')[0]}&sz=128`}
                                  alt={row.name}
                                  className="w-3.5 h-3.5 object-contain"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLElement).style.display = 'none';
                                  }}
                                />
                              </div>
                              <span className="capitalize truncate font-medium text-neutral-800">{row.name}</span>
                            </div>
                          </td>

                          {/* Website */}
                          <td className="py-2.5 px-4 text-[12.5px] text-neutral-600 whitespace-nowrap truncate font-normal">
                            <div className="flex items-center gap-1.5">
                              <span className="truncate max-w-[130px]">{row.website}</span>
                              <span className="text-neutral-400 p-0.5 shrink-0">
                                <ExportSquareIcon size={12} />
                              </span>
                            </div>
                          </td>

                          {/* Company Industry Tag */}
                          <td className="py-2.5 px-4 whitespace-nowrap truncate">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium truncate max-w-full ${row.industryColor}`}
                            >
                              {row.industry}
                            </span>
                          </td>

                          {/* CEO Linkedin Url */}
                          <td className="py-2.5 px-4 whitespace-nowrap truncate">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-500 text-white flex items-center justify-center text-[10px] font-medium shrink-0">
                                {row.name.charAt(0).toUpperCase()}
                              </div>
                              <span className="text-[12px] text-neutral-600 truncate max-w-[160px] font-normal">
                                {row.social || 'https://www.linkedin.com/in'}
                              </span>
                            </div>
                          </td>

                          {/* Scrape Jobs */}
                          <td className="py-2.5 px-4 whitespace-nowrap text-[12px] truncate">
                            {index === 0 ? (
                              <span className="text-neutral-700 font-medium">
                                6 open roles · Solutions Architect
                              </span>
                            ) : index === 1 ? (
                              <span className="text-neutral-700 font-medium">
                                20 open roles · Customer Success
                              </span>
                            ) : index === 2 ? (
                              <span className="text-neutral-700 font-medium">
                                4 open roles · AI Systems Engineer
                              </span>
                            ) : index === 3 ? (
                              <span className="text-neutral-700 font-medium">
                                15 open roles · Data Infrastructure
                              </span>
                            ) : isNewlyAdded && tableStatus === 'adding' ? (
                              <span className="flex items-center gap-1.5 text-blue-600 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping inline-block" />
                                Generating Scrape Jobs...
                              </span>
                            ) : (
                              <span className="text-neutral-700 font-medium">
                                {[
                                  '8 open roles · Full Stack Engineer',
                                  '12 open roles · Robotics Specialist',
                                  '5 open roles · Automation Engineer',
                                  '9 open roles · Logistics Systems',
                                  '7 open roles · AI Software Engineer',
                                  '3 open roles · Operations Lead',
                                  '11 open roles · Firmware Engineer',
                                  '6 open roles · Warehouse Robotics',
                                ][(index - INITIAL_ROWS_COUNT) % 8]}
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* THE FADE AT THE END OF THE TABLE: Ultra-clean harmonic scrim fade into 100% white */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 sm:h-52 z-20"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 18%, rgba(255, 255, 255, 0.22) 38%, rgba(255, 255, 255, 0.52) 60%, rgba(255, 255, 255, 0.82) 78%, rgba(255, 255, 255, 0.96) 90%, #FFFFFF 100%)',
                }}
              />
            </div>
          </div>

          {/* SECOND SEARCH BAR: FLOATING FIGMA CARD ON THE LEFT SIDE (Frame 2147225388) */}
          {/* Rendered after the desktop window with z-40 so it cleanly overlays the window and left border */}
          <div className="absolute top-[132px] -left-2 sm:-left-10 md:-left-16 lg:-left-24 z-40 pointer-events-none select-none">
            <div
              className="w-[320px] sm:w-[380px] h-[92px] sm:h-[100px] rounded-[10px] bg-[#F4F4F4] relative pointer-events-none select-none"
              style={{
                boxShadow: '0px 6px 24px 0px rgba(0, 0, 0, 0.22), 0px 1px 6px 0px rgba(0, 0, 0, 0.12)',
              }}
            >
              {/* Inner Text Field (Figma inspect: 338.22px x 36.45px, top: 32px, left: 21px, radius: 64px, #FFFFFF) */}
              <div className="w-[300px] sm:w-[338.22px] h-[36.45px] rounded-[64px] bg-[#FFFFFF] absolute top-[28px] sm:top-[32px] left-[10px] sm:left-[21px] pl-4 pr-1.5 flex items-center justify-between border border-black/5 shadow-xs">
                <span className="text-[12.5px] font-normal text-neutral-800 select-none flex items-center">
                  {typedUrl ? (
                    <span className="text-black flex items-center font-medium">
                      {typedUrl}
                      {isTyping && (
                        <span className="inline-block w-[1.5px] h-3.5 bg-black ml-0.5 animate-pulse" />
                      )}
                    </span>
                  ) : (
                    <span className="text-[12.5px] text-[#4C4C4C] font-normal leading-none flex items-center">
                      Connect your website
                      <span className="inline-block w-[1.5px] h-3.5 bg-[#2563EB] ml-1 animate-pulse" />
                    </span>
                  )}
                </span>
                <div className="relative shrink-0 flex items-center justify-center">
                  <div
                    aria-hidden="true"
                    className={`w-[26px] h-[26px] rounded-full bg-black shrink-0 flex items-center justify-center transition-transform duration-200 select-none ${isKnobPressed ? 'scale-90 opacity-75' : ''
                      }`}
                  >
                    <svg
                      width="10"
                      height="10"
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

                  {/* Click Ripple Effect */}
                  {isKnobPressed && (
                    <span className="absolute inset-0 -m-1.5 rounded-full bg-black/25 animate-ping pointer-events-none" />
                  )}

                  {/* Animated Pointer Cursor: single fluid glide directly to send point, clicks on arrival */}
                  <div
                    className={`absolute pointer-events-none z-50 transition-all ease-out ${cursorState === 'hidden'
                      ? 'opacity-0 translate-x-10 translate-y-10 scale-90 duration-300'
                      : cursorState === 'gliding'
                        ? 'opacity-100 translate-x-1 translate-y-1.5 scale-100 duration-400'
                        : cursorState === 'clicking'
                          ? 'opacity-100 translate-x-1 translate-y-1.5 scale-[0.82] duration-100 ease-in'
                          : cursorState === 'clicked'
                            ? 'opacity-100 translate-x-1 translate-y-1.5 scale-100 duration-120'
                            : 'opacity-0 translate-x-6 translate-y-8 scale-90 duration-350 ease-in'
                      }`}
                    style={{
                      top: '-2px',
                      left: '-2px',
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
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
        </ScrollReveal>

        {/* Value Proposition Headline below the window, exactly as in Figma design */}
        <ScrollReveal
          variant="fade-up"
          delay={250}
          duration={650}
          distance={20}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <ScrollTextReveal
            lines={[
              'Turn market intelligence into targeted opportunities,',
              'and sustainable growth with Coirei GTM.  ',
            ]}
            className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-semibold tracking-tight leading-[1.3] max-w-5xl mx-auto"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
