import React, { useState, useEffect, useRef } from 'react';

interface SearchCardData {
  id: string;
  name: string;
  displayUrl: string;
  title: string;
  snippet: string;
  iconBg: string;
  icon: React.ReactNode;
}

const CARDS_DATA: SearchCardData[] = [
  {
    id: 'dribbble',
    name: 'Dribbble',
    displayUrl: 'https://dribbble.com',
    title: "Dribbble - Discover the World's Top Designers & ...",
    snippet:
      'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs....',
    iconBg: '#EA4C89',
    icon: (
      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.842 6.551a10.024 10.024 0 0 1 2.052 5.06 17.065 17.065 0 0 0-5.727-1.018 25.042 25.042 0 0 0-.825-1.742 10.518 10.518 0 0 1 4.5-2.3zm-6.17 1.096c.32.7.625 1.417.912 2.15-2.885.864-5.617 1.258-7.994 1.344a10.023 10.023 0 0 1 4.606-4.664c.828.37 1.66.764 2.476 1.17zM4.093 9.42c2.193-.075 4.747-.436 7.458-1.242.17.397.33.8.48 1.206-3.805 1.272-6.425 3.528-7.79 5.385A9.957 9.957 0 0 1 4.093 9.42zm2.083 8.358c1.233-1.63 3.65-3.69 7.228-4.887a17.653 17.653 0 0 1 1.693 5.485 10.038 10.038 0 0 1-8.921-.598zm10.742.06c-.407-1.76-1.047-3.69-1.92-5.305a15.42 15.42 0 0 1 5.25.92 10.04 10.04 0 0 1-3.33 4.385z" />
      </svg>
    ),
  },
  {
    id: 'awwwards',
    name: 'Awwwards',
    displayUrl: 'https://www.awwwards.com › we...',
    title: 'Winning websites. Web Design Inspirat...',
    snippet:
      'Discover the best website designs of the world. Awwwards recognizes the talent and effort of the best designers, developers and agencies.',
    iconBg: '#000000',
    icon: <span className="text-[7px] text-white font-bold leading-none">www</span>,
  },
  {
    id: 'webflow',
    name: 'Webflow',
    displayUrl: 'https://webflow.com › Blog › Design',
    title: '16 best websites for design inspiration ...',
    snippet:
      '13 Jan 2026 — Why design inspiration matters - 1. SVZ Design - 2. Wave Studio - 3. Curated showcase of modern website experiences.',
    iconBg: '#146EF5',
    icon: <span className="text-[8px] text-white font-bold leading-none">w</span>,
  },
];

export const ShufflingSearchCard: React.FC = () => {
  // activeIndex points to the card currently in FRONT
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isPaused) return;

    // Smoothly switch cards back-to-back every 2.8 seconds
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS_DATA.length);
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Determine slot for each card:
  // slot 0 = FRONT (center, elevated, 308px, white, full opacity)
  // slot 1 = BACK TOP (peeking top, 268px, #F7F8F6, opacity 0.85)
  // slot 2 = BACK BOTTOM (peeking bottom, 268px, #F7F8F6, opacity 0.85)
  const getSlotStyle = (cardIndex: number): React.CSSProperties => {
    const total = CARDS_DATA.length;
    const slot = (cardIndex - activeIndex + total) % total;

    if (slot === 0) {
      // FRONT CARD
      return {
        zIndex: 30,
        transform: 'translate3d(-50%, -50%, 0) scale(1)',
        opacity: 1,
        width: '308px',
        height: '84px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 12px 28px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        transition: 'all 650ms cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }

    if (slot === 1) {
      // BACK TOP CARD
      return {
        zIndex: 10,
        transform: 'translate3d(-50%, calc(-50% - 38px), 0) scale(0.92)',
        opacity: 0.85,
        width: '268px',
        height: '78px',
        backgroundColor: '#F7F8F6',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
        transition: 'all 650ms cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }

    // BACK BOTTOM CARD (slot === 2)
    return {
      zIndex: 10,
      transform: 'translate3d(-50%, calc(-50% + 38px), 0) scale(0.92)',
      opacity: 0.85,
      width: '268px',
      height: '78px',
      backgroundColor: '#F7F8F6',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
      transition: 'all 650ms cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div
      className="relative w-full h-[190px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards Switcher Deck Container */}
      <div className="relative w-[320px] h-[170px]">
        {CARDS_DATA.map((card, idx) => {
          const style = getSlotStyle(idx);
          const isFront = (idx - activeIndex + CARDS_DATA.length) % CARDS_DATA.length === 0;

          return (
            <div
              key={card.id}
              className="absolute left-1/2 top-1/2 rounded-[6px] px-3.5 py-2.5 border border-gray-150 flex flex-col justify-center overflow-hidden pointer-events-none will-change-transform"
              style={style}
            >
              {/* Header row: Favicon, Site Name, Display URL, 3 dots */}
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1.5 truncate">
                  <div
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-[#202124]">{card.name}</span>
                  <span className="text-[8.5px] text-[#5F6368] truncate">{card.displayUrl}</span>
                </div>
                <span className="text-gray-400 text-[10px] leading-none shrink-0 font-bold tracking-widest pl-1">
                  ⋮
                </span>
              </div>

              {/* Title */}
              <h4 className="text-[11px] text-[#1A0DAB] font-normal leading-tight truncate">
                {card.title}
              </h4>

              {/* Snippet preview */}
              <p
                className={`text-[8px] text-[#4D5156] mt-0.5 leading-tight ${
                  isFront ? 'line-clamp-2' : 'line-clamp-1 opacity-75'
                }`}
              >
                {card.snippet}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShufflingSearchCard;
