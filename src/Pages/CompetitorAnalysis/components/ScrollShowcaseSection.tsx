import React, { useRef, useEffect, useCallback } from 'react';
import './ScrollShowcaseSection.css';
import productFeatureBg from '../../../assets/competitor/product&featureanalysisbg.svg';
import pricingPlansBg from '../../../assets/competitor/pricing&plansbg.svg';
import strengthWeakBg from '../../../assets/competitor/strength&weakbg.svg';
import marketPresenceBg from '../../../assets/competitor/marketpresencebg.svg';

interface GlassCardData {
  badge: string;
  title: string;
  description: string;
  pills: string[];
  gradient?: string;
  bgImage?: string;
}

interface ShowcaseItem {
  id: string;
  title: string;
  category?: string;
  image?: string;
  color: string;
  archive?: boolean;
  glassCard?: GlassCardData;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'work-archive',
    title: 'Competitor Analysis',
    archive: true,
    color: '#FF8C00',
  },
  {
    id: 'product-features',
    title: 'Product & Features Analysis',
    color: '#0d1b24',
    glassCard: {
      badge: 'Product & Features Analysis',
      title: 'Explore Their Product Capabilities',
      description:
        'Analyze competitor products, core features, and integrations to understand their capabilities, identify feature gaps, and discover areas where your product can stand out.',
      pills: ['Capabilities', 'Gaps'],
      bgImage: productFeatureBg,
      gradient: 'radial-gradient(circle at 85% 85%, #1d3846 0%, #11222e 50%, #0a141b 100%)',
    },
  },
  {
    id: 'pricing-plans',
    title: 'Pricing & Plans',
    color: '#16202e',
    glassCard: {
      badge: 'Pricing & Plans',
      title: 'Compare Pricing Strategies',
      description:
        'Analyze competitor pricing structures, subscription models, and plan offerings to understand their value propositions and affordability.',
      pills: ['Affordability', 'Scalability'],
      bgImage: pricingPlansBg,
      gradient: 'radial-gradient(circle at 85% 85%, #253347 0%, #16202e 50%, #0d141e 100%)',
    },
  },
  {
    id: 'strengths-weaknesses',
    title: 'Strengths & Weaknesses',
    color: '#1a2918',
    glassCard: {
      badge: 'Strengths & Weaknesses',
      title: 'Evaluate Competitive Advantages',
      description:
        'Identify competitor strengths, limitations, and strategic advantages to understand where they excel and where your product can outperform them.',
      pills: ['Strengths', 'Weaknesses'],
      bgImage: strengthWeakBg,
      gradient: 'radial-gradient(circle at 85% 85%, #2a4026 0%, #1a2918 50%, #0d160c 100%)',
    },
  },
  {
    id: 'market-positioning',
    title: 'Market Positioning',
    color: '#15171c',
    glassCard: {
      badge: 'Market Positioning',
      title: 'Understand Market Presence',
      description:
        'Analyze competitor branding, messaging, target audiences, and unique value propositions to understand how they differentiate themselves in the market.',
      pills: ['Differentiation', 'Audience'],
      bgImage: marketPresenceBg,
      gradient: 'radial-gradient(circle at 85% 85%, #22252b 0%, #15171c 50%, #0c0e11 100%)',
    },
  },
];

export const ScrollShowcaseSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animFrameId = useRef<number | null>(null);
  const smoothedScroll = useRef(0);
  const lastTime = useRef(performance.now());
  const copyWidthRef = useRef(0);
  const isPointerDown = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const hasInteracted = useRef(false);

  // Update center magnification, labels, and inertia
  const updateTiles = useCallback((_c: number, sLag: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const viewportWidth = window.innerWidth;
    const centerZone = viewportWidth * 0.58;
    const ee = 0.04;
    const te = 0.18;

    // Translation lag across copies
    copyRefs.current.forEach((copy) => {
      if (!copy) return;
      if (Math.abs(sLag) > 0.3) {
        copy.style.transform = `translate3d(${sLag.toFixed(2)}px, 0, 0)`;
      } else {
        copy.style.transform = '';
      }
    });

    // Process all cards across copies using true screen coordinates (guarantees animation works on EVERY card)
    const tiles = scroller.querySelectorAll('.scroll-showcase-tile') as NodeListOf<HTMLElement>;
    tiles.forEach((tile) => {
      const rect = tile.getBoundingClientRect();
      const tileCenterScreen = rect.left + rect.width / 2;
      const distFromCenter = Math.abs(tileCenterScreen - viewportWidth / 2);
      const u = Math.min(distFromCenter / centerZone, 1);

      // Cosine magnification curve (1.00x to 1.20x)
      const scale = (1 + 0.10 * (1 + Math.cos(u * Math.PI))).toFixed(4);
      tile.style.setProperty('--tile-magnification', scale);

      // Parallax inertia
      if (Math.abs(sLag) > 0.3) {
        const xRatio = Math.min(Math.max(rect.left / viewportWidth, 0), 1);
        const parallax = ee + (te - ee) * xRatio;
        tile.style.transform = `translate3d(${(sLag * parallax).toFixed(2)}px, 0, 0)`;
      } else {
        tile.style.transform = '';
      }
    });
  }, []);

  // Animation frame loop
  const tick = useCallback(
    (timestamp: number) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const dt = Math.min((timestamp - lastTime.current) / 16.667, 3);
      lastTime.current = timestamp;

      const currentScroll = scroller.scrollLeft;
      const decay = 1 - Math.pow(0.86, dt);
      smoothedScroll.current += (currentScroll - smoothedScroll.current) * decay;

      let sLag = currentScroll - smoothedScroll.current;
      if (Math.abs(sLag) > 600) {
        sLag = Math.sign(sLag) * 600;
        smoothedScroll.current = currentScroll - sLag;
      }

      if (Math.abs(sLag) < 0.25) {
        sLag = 0;
        smoothedScroll.current = currentScroll;
      }

      updateTiles(smoothedScroll.current, sLag);

      animFrameId.current = requestAnimationFrame(tick);
    },
    [updateTiles]
  );

  // Seamless Infinite Loop Wrapping
  const checkInfiniteWrap = useCallback(() => {
    const scroller = scrollerRef.current;
    const copy0 = copyRefs.current[0];
    const copy1 = copyRefs.current[1];
    if (!scroller || !copy0 || !copy1) return;

    const copyWidth = copy1.offsetLeft - copy0.offsetLeft;
    if (copyWidth <= 0) return;
    copyWidthRef.current = copyWidth;

    const scrollLeft = scroller.scrollLeft;
    if (scrollLeft < copyWidth * 0.5 || scrollLeft > copyWidth * 1.5) {
      const offset = Math.floor((scrollLeft - copyWidth * 0.5) / copyWidth) * copyWidth;
      scroller.scrollLeft = scrollLeft - offset;
      smoothedScroll.current += scroller.scrollLeft - scrollLeft;
    }
  }, []);

  // Initialize
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const initTimer = setTimeout(() => {
      const copy0 = copyRefs.current[0];
      const copy1 = copyRefs.current[1];
      if (copy0 && copy1) {
        copyWidthRef.current = copy1.offsetLeft - copy0.offsetLeft;
      }

      const initialScroll = copy1 ? copy1.offsetLeft : 0;
      scroller.scrollLeft = Math.max(0, initialScroll);
      smoothedScroll.current = scroller.scrollLeft;

      lastTime.current = performance.now();
      animFrameId.current = requestAnimationFrame(tick);
    }, 50);

    const onScroll = () => {
      checkInfiniteWrap();
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      hasInteracted.current = true;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const multiplier = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? scroller.clientWidth : 1;
      scroller.scrollLeft += delta * multiplier;
      checkInfiniteWrap();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        hasInteracted.current = true;
        const step = e.key === 'ArrowRight' ? 360 : -360;
        scroller.scrollBy({ left: step, behavior: 'smooth' });
      }
    };

    const onResize = () => {
      checkInfiniteWrap();
    };

    scroller.addEventListener('scroll', onScroll, { passive: true });
    scroller.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(initTimer);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      scroller.removeEventListener('scroll', onScroll);
      scroller.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [checkInfiniteWrap, tick]);

  // Pointer drag
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    isPointerDown.current = true;
    hasInteracted.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current || !scrollerRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollerRef.current.scrollLeft = dragStartScroll.current - dx;
    checkInfiniteWrap();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current || !scrollerRef.current) return;
    isPointerDown.current = false;
    scrollerRef.current.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section className="scroll-showcase-section" data-custom-padding>
      {/* Section Heading */}
      <div className="scroll-showcase-header">
        <h2 className="scroll-showcase-heading">
          Explore every competitor in detail, compare their strategies, and uncover opportunities to stay ahead.
        </h2>
      </div>

      <div className="scroll-showcase-container">
        <div
          className="scroll-showcase-scroller"
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-label="Selected showcase projects"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* 3 Continuous Loop Buffers */}
          {[0, 1, 2].map((copyIndex) => (
            <div
              key={copyIndex}
              className="scroll-showcase-copy"
              data-copy={copyIndex}
              ref={(el) => {
                copyRefs.current[copyIndex] = el;
              }}
              aria-hidden={copyIndex !== 1}
            >
              {SHOWCASE_ITEMS.map((item, idx) => (
                <div
                  key={`${copyIndex}-${item.id}`}
                  className="scroll-showcase-tile"
                  data-tile-id={item.id}
                  data-index={idx}
                  style={{
                    ['--tile-bg' as string]: item.color,
                  }}
                  tabIndex={copyIndex === 1 ? 0 : -1}
                >
                  <div className="scroll-showcase-tile__wrapper">
                    {item.glassCard ? (
                      <div
                        className="scroll-showcase-product-card"
                        style={{
                          backgroundImage: item.glassCard.bgImage
                            ? `url("${item.glassCard.bgImage}")`
                            : item.glassCard.gradient,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div className="scroll-showcase-product-card__badge">
                          {item.glassCard.badge}
                        </div>
                        <div className="scroll-showcase-product-card__glass">
                          <h3 className="scroll-showcase-product-card__title">
                            {item.glassCard.title}
                          </h3>
                          <p className="scroll-showcase-product-card__desc">
                            {item.glassCard.description}
                          </p>
                          <div className="scroll-showcase-product-card__pills">
                            {item.glassCard.pills.map((pill) => (
                              <span key={pill} className="scroll-showcase-product-card__pill">
                                {pill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : item.archive ? (
                      <div className="scroll-showcase-archive">
                        <span className="scroll-showcase-archive__eyebrow">
                          IN-DEPTH COMPETITOR ANALYSIS
                        </span>
                        <h2 className="scroll-showcase-archive__title">
                          Understand Your
                          <br />
                          Competitors Inside Out
                        </h2>
                        <p className="scroll-showcase-archive__desc">
                          Analyze competitors in depth to uncover their strengths, weaknesses,
                          strategies, and market positioning. Discover what they do well, where they
                          fall short, and how your product can stand out.
                        </p>
                      </div>
                    ) : (
                      <img
                        className="scroll-showcase-tile__image"
                        src={item.image}
                        alt={item.title}
                        loading="eager"
                        decoding="async"
                        draggable={false}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollShowcaseSection;

