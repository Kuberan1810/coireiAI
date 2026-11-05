import React, { useEffect, useRef } from 'react';
import bgForVoice from '../../../assets/competitor/bgforvoice.svg';

/**
 * Shimmering matrix tick marks canvas in the corner of each card
 */
const TicksCanvas: React.FC<{ color?: string; scale?: number }> = ({
  color = 'rgba(255, 255, 255, 0.25)',
  scale = 1.4,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let ticks: Array<{ x: number; y: number; baseAlpha: number; phase: number }> = [];

    const tickWidth = 2;
    const tickHeight = 6;
    const spacingX = 6;
    const spacingY = 9;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width < 1 || height < 1) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const vx = spacingX * scale;
      const vy = spacingY * scale;
      const countX = Math.ceil(width / vx);
      const countY = Math.ceil(height / vy);
      const startX = width - (countX - 1) * vx - tickWidth * scale;

      const newTicks = [];
      for (let i = 0; i < countX; i++) {
        const x = startX + i * vx;
        const normX = Math.max(0, 1 - (width - x) / (width * 0.9));
        if (normX <= 0) continue;

        for (let j = 0; j < countY; j++) {
          const y = j * vy;
          const normY = Math.max(0, 1 - y / (height * 0.8));
          const factor = normX * normY;

          if (factor > 0.05 && Math.random() < factor * 1.2) {
            newTicks.push({
              x,
              y,
              baseAlpha: (0.2 + Math.random() * 0.8) * factor,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }
      ticks = newTicks;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const render = (time: number) => {
      animRef.current = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      const w = tickWidth * scale;
      const h = tickHeight * scale;

      for (const t of ticks) {
        const wave = 0.55 + 0.45 * Math.sin(time * 0.0011 + t.phase);
        ctx.globalAlpha = t.baseAlpha * wave;
        ctx.fillRect(t.x, t.y, w, h);
      }
      ctx.globalAlpha = 1;
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      ro.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [color, scale]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 right-0 w-2/3 h-1/2 pointer-events-none z-0"
    />
  );
};

export interface CardData {
  id: string;
  title: string;
  description: string;
  background: string;
  titleColor: string;
  descColor: string;
  ticksColor: string;
  graphicStyle: React.CSSProperties;
  renderIcon: () => React.ReactNode;
}

const CARDS_DATA: CardData[] = [
  {
    id: 'who-is-looking',
    title: 'Who Is Looking for It?',
    description:
      'Identify growing interest in products, services, and solutions across your target market.',
    background: 'linear-gradient(180deg, #053440 0%, #155364 45%, #3A8699 100%)',
    titleColor: '#ffffff',
    descColor: 'rgba(255, 255, 255, 0.85)',
    ticksColor: 'rgba(165, 243, 252, 0.22)',
    graphicStyle: {
      ['--line' as string]: 'rgba(255, 255, 255, 0.65)',
      ['--guide' as string]: 'rgba(255, 255, 255, 0.3)',
      ['--accent' as string]: '#A5F3FC',
    },
    renderIcon: () => (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="w-[96px] h-[96px] lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r="55" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" className="graphic-dash" />
        <circle cx="60" cy="60" r="32" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <ellipse cx="60" cy="60" rx="32" ry="10.5" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <ellipse cx="60" cy="60" rx="32" ry="32" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" className="graphic-tilt" />
        <line x1="16" y1="60" x2="104" y2="60" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" className="graphic-dash" />
        <line x1="60" y1="16" x2="60" y2="104" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" className="graphic-dash" />
        <g className="graphic-register">
          <g className="graphic-target" style={{ animationDelay: '0s' }}>
            <line x1="16" y1="16" x2="30" y2="16" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
            <line x1="16" y1="16" x2="16" y2="30" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          </g>
          <g className="graphic-target" style={{ animationDelay: '-1.5s' }}>
            <line x1="104" y1="16" x2="90" y2="16" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
            <line x1="104" y1="16" x2="104" y2="30" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          </g>
          <g className="graphic-target" style={{ animationDelay: '-3.0s' }}>
            <line x1="16" y1="104" x2="30" y2="104" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
            <line x1="16" y1="104" x2="16" y2="90" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          </g>
          <g className="graphic-target" style={{ animationDelay: '-4.5s' }}>
            <line x1="104" y1="104" x2="90" y2="104" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
            <line x1="104" y1="104" x2="104" y2="90" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 'therapeutics',
    title: 'Who Are Your Ideal Customers?',
    description:
      'Understand customer demographics, behaviors, and purchasing patterns to reach the right audience.',
    background: '#0e1016',
    titleColor: '#ffffff',
    descColor: 'rgba(255, 255, 255, 0.65)',
    ticksColor: 'rgba(163, 137, 238, 0.25)',
    graphicStyle: {
      ['--line' as string]: 'rgba(255, 255, 255, 0.72)',
      ['--guide' as string]: 'rgba(255, 255, 255, 0.3)',
      ['--accent' as string]: '#a389ee',
    },
    renderIcon: () => (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="w-[96px] h-[96px] lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r="55" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" className="graphic-dash" />
        <ellipse cx="62" cy="60" rx="40" ry="13" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" />
        <path d="M 32.75 32.72 A 40 40 0 1 1 32.75 87.28" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 41.52 40.9 A 28 28 0 1 1 41.52 79.1" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        <g className="graphic-dock">
          <circle cx="27" cy="60" r="9" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          <ellipse cx="27" cy="60" rx="3.6" ry="9" stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
        </g>
        <circle cx="62" cy="60" r="2.6" fill="var(--accent)" className="graphic-target" />
      </svg>
    ),
  },
  {
    id: 'market-gaps',
    title: 'Where Are the Market Gaps?',
    description:
      'Uncover underserved segments, unmet demands, and opportunities that existing competitors are overlooking.',
    background: '#ffffff',
    titleColor: '#1a1e2a',
    descColor: '#5e616b',
    ticksColor: 'rgba(102, 59, 227, 0.2)',
    graphicStyle: {
      ['--line' as string]: 'rgba(26, 30, 42, 0.75)',
      ['--guide' as string]: 'rgba(26, 30, 42, 0.3)',
      ['--accent' as string]: '#663be3',
    },
    renderIcon: () => (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="w-[96px] h-[96px] lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r="55" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" className="graphic-dash" />
        <circle cx="60" cy="60" r="40" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" />
        <path d="M 77.53 24.05 A 40 40 0 0 1 99.61 54.43" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 92.36 83.51 A 40 40 0 0 1 55.82 99.78" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 25.36 80 A 40 40 0 0 1 24.68 41.22" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        <ellipse cx="60" cy="60" rx="40" ry="13" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" />
        <g className="graphic-spin-fast">
          <path d="M 90.64 34.29 A 40 40 0 0 1 100 60" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" fill="none" />
          <line x1="68" y1="60" x2="100" y2="60" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
        </g>
        <circle cx="60" cy="60" r="6" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <circle cx="60" cy="60" r="2.4" fill="var(--accent)" />
      </svg>
    ),
  },
  {
    id: 'whats-next',
    title: "What's Next in the Market?",
    description:
      'Understand emerging trends and shifts in customer demand to anticipate future market needs.',
    background: 'linear-gradient(180deg, #2E4601 0%, #F6FEEB 100%)',
    titleColor: '#1B2A01',
    descColor: '#384918',
    ticksColor: 'rgba(46, 70, 1, 0.22)',
    graphicStyle: {
      ['--line' as string]: 'rgba(46, 70, 1, 0.72)',
      ['--guide' as string]: 'rgba(46, 70, 1, 0.28)',
      ['--accent' as string]: '#2E4601',
    },
    renderIcon: () => (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="w-[96px] h-[96px] lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r="55" stroke="var(--guide)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="0.5 5" strokeLinecap="round" className="graphic-dash" />
        <line x1="64.95" y1="64.95" x2="74.14" y2="74.14" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="74.14" y1="74.14" x2="96.82" y2="75.63" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="74.14" y1="74.14" x2="75.63" y2="96.82" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="55.05" y1="64.95" x2="45.86" y2="74.14" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="45.86" y1="74.14" x2="44.37" y2="96.82" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="45.86" y1="74.14" x2="23.18" y2="75.63" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="55.05" y1="55.05" x2="45.86" y2="45.86" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="45.86" y1="45.86" x2="23.18" y2="44.37" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="45.86" y1="45.86" x2="44.37" y2="23.18" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="64.95" y1="55.05" x2="74.14" y2="45.86" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="74.14" y1="45.86" x2="75.63" y2="23.18" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="74.14" y1="45.86" x2="96.82" y2="44.37" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <circle cx="96.82" cy="75.63" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '0s' }} />
        <circle cx="75.63" cy="96.82" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-0.8s' }} />
        <circle cx="44.37" cy="96.82" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-1.7s' }} />
        <circle cx="23.18" cy="75.63" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-2.5s' }} />
        <circle cx="23.18" cy="44.37" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-3.4s' }} />
        <circle cx="44.37" cy="23.18" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-4.2s' }} />
        <circle cx="75.63" cy="23.18" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-5.1s' }} />
        <circle cx="96.82" cy="44.37" r="3.4" fill="var(--accent)" className="graphic-breathe" style={{ animationDelay: '-5.9s' }} />
        <circle cx="60" cy="60" r="7" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <circle cx="60" cy="60" r="3" stroke="var(--accent)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      </svg>
    ),
  },
];

export const WhatsNextSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 select-none overflow-hidden bg-[#F6F6F8]">
      {/* Section Background: bgforvoice.svg instead of blue */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <img
          src={bgForVoice}
          alt=""
          className="w-full h-full object-cover object-center select-none"
        />
      </div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        {/* Header Grid: Eyebrow + Big Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Eyebrow badge */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[6px] bg-black/[0.06] border border-black/10 font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#0B0A09]">
              <span className="w-1.5 h-1.5 bg-[#0B0A09] rounded-[1px]" />
              WHAT'S NEXT
            </div>
          </div>

          {/* Headline */}
          <div className="lg:col-span-8">
            <h2
              className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[51  px] leading-[1.15] xl:leading-[76px] tracking-normal max-w-[820px]"
              style={{
                background: 'linear-gradient(180deg, #716A6A 0%, #332C2C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Discover Where Market Demand Is Growing and Evolving
            </h2>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {CARDS_DATA.map((card) => (
            <div
              key={card.id}
              className="group/card relative flex flex-col justify-between rounded-[16px] p-7 sm:p-8 min-h-[440px] lg:min-h-[460px] overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.25)] cursor-default border border-black/[0.06]"
              style={{
                background: card.background,
                ...card.graphicStyle,
              }}
            >
              {/* Ticks Canvas top-right */}
              <TicksCanvas color={card.ticksColor} scale={1.4} />

              {/* Top Graphic SVG */}
              <div className="relative z-10 mb-auto">
                {card.renderIcon()}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 pt-10">
                <h3
                  className="font-['Lay_Grotesk','Plus_Jakarta_Sans',sans-serif] font-medium text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.18] mb-3.5 tracking-[-0.02em]"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] font-normal"
                  style={{ color: card.descColor }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNextSection;

