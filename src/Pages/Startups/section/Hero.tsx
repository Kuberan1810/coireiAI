import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

import amongManyPng from '../../../assets/startups/Amongmany.png';
import standApartPng from '../../../assets/startups/StandApart.png';
import startupUnlockedPng from '../../../assets/startups/StartupUnlocked.png';

export interface HeroProps {
  onApply?: () => void;
  onExploreBenefits?: () => void;
  scrollToApply?: () => void;
  scrollToWhatIs?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onApply,
  onExploreBenefits,
  scrollToApply,
  scrollToWhatIs,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const currentStepRef = useRef<number>(0);
  currentStepRef.current = currentStep;

  // Strict page scroll lock:
  // Must remain false during Step 0 and Step 1 so the page cannot scroll to What Is Coirei prematurely
  const hasCompletedHeroRef = useRef<boolean>(false);

  // Discrete screen transition locks
  const isTransitioningRef = useRef<boolean>(false);
  const isGestureLockedRef = useRef<boolean>(false);
  const gestureTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const justArrivedAtTopRef = useRef<boolean>(false);
  const arriveTopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartYRef = useRef<number>(0);

  const handleApply = () => {
    hasCompletedHeroRef.current = true;
    window.dispatchEvent(
      new CustomEvent('hero-step-change', {
        detail: { step: 3, direction: 'down' },
      })
    );
    if (onApply) {
      onApply();
    } else if (scrollToApply) {
      scrollToApply();
    } else {
      document.getElementById('apply-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    hasCompletedHeroRef.current = true;
    window.dispatchEvent(
      new CustomEvent('hero-step-change', {
        detail: { step: 3, direction: 'down' },
      })
    );
    if (onExploreBenefits) {
      onExploreBenefits();
    } else if (scrollToWhatIs) {
      scrollToWhatIs();
    } else {
      document.getElementById('what-is-coirei')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Step transition helper with balanced upward/downward timings
  const advanceToStep = (nextStep: number, isScrollingUp = false) => {
    isGestureLockedRef.current = true;
    isTransitioningRef.current = true;

    setCurrentStep(nextStep);
    currentStepRef.current = nextStep;

    window.dispatchEvent(
      new CustomEvent('hero-step-change', {
        detail: { step: nextStep, direction: isScrollingUp ? 'up' : 'down' },
      })
    );

    // Upward transitions are quicker (420ms) so scroll-up never feels stiff or overly locked
    const lockDuration = isScrollingUp ? 420 : 600;

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, lockDuration);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY;

      // 1. If hero is already completed AND user is down in the page (scrollY > 20):
      // Allow 100% native free-speed scrolling with zero resistance!
      if (hasCompletedHeroRef.current && scrollY > 20) {
        justArrivedAtTopRef.current = true;
        return;
      }

      // 2. If user just arrived at top from scrolling up from below:
      // Absorb residual upward momentum with a short non-resetting 180ms window so it lands on Screen 2 smoothly
      if (justArrivedAtTopRef.current) {
        e.preventDefault();
        if (!arriveTopTimerRef.current) {
          arriveTopTimerRef.current = setTimeout(() => {
            justArrivedAtTopRef.current = false;
            hasCompletedHeroRef.current = false; // Re-arm hero lock at top
            isGestureLockedRef.current = false;
            arriveTopTimerRef.current = null;
          }, 180);
        }
        return;
      }

      // 3. In the hero (Step 0, Step 1, or Step 2 at top):
      // Prevent default so the page does not scroll to What Is Coirei prematurely
      e.preventDefault();

      const delta = e.deltaY;
      if (Math.abs(delta) < 6) return;

      // Upward gestures require less quiet time (140ms) for snappy, effortless upward scrolling
      const quietTimeNeeded = delta < 0 ? 140 : 200;
      if (gestureTimeoutRef.current) {
        clearTimeout(gestureTimeoutRef.current);
      }
      gestureTimeoutRef.current = setTimeout(() => {
        isGestureLockedRef.current = false;
      }, quietTimeNeeded);

      // If already locked during this continuous scroll action, absorb all remaining events:
      if (isGestureLockedRef.current || isTransitioningRef.current) {
        return;
      }

      const step = currentStepRef.current;

      // SCREEN 0: "Among Many"
      if (step === 0) {
        if (delta > 0) {
          advanceToStep(1, false); // 1st scroll -> ONLY reveals Screen 1 ("Stand Apart")
        }
        return;
      }

      // SCREEN 1: "Stand Apart"
      if (step === 1) {
        if (delta > 0) {
          advanceToStep(2, false); // 2nd scroll -> ONLY reveals Screen 2 ("Startup Unlocked")
        } else if (delta < 0) {
          advanceToStep(0, true);  // Scroll UP -> returns swiftly to Screen 0 ("Among Many")
        }
        return;
      }

      // SCREEN 2: "Startup Unlocked"
      if (step === 2) {
        if (delta < 0) {
          advanceToStep(1, true); // Scroll UP -> returns swiftly to Screen 1 ("Stand Apart")
        } else if (delta > 0) {
          // 3rd scroll (AFTER Startup Unlocked has been revealed):
          // Smoothly glide down into "What Is Coirei for Startups"
          hasCompletedHeroRef.current = true;
          isGestureLockedRef.current = true;
          isTransitioningRef.current = true;

          window.dispatchEvent(
            new CustomEvent('hero-step-change', {
              detail: { step: 3, direction: 'down' },
            })
          );

          const nextSection = document.getElementById('what-is-coirei');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }

          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 800);
        }
      }
    };

    // Touch swipe gestures
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const scrollY = window.scrollY;

      if (hasCompletedHeroRef.current && scrollY > 20) {
        return;
      }

      const currentY = e.touches[0].clientY;
      const diff = touchStartYRef.current - currentY; // diff > 0 is swiping UP (scrolling DOWN)

      if (Math.abs(diff) < 22) return;

      if (e.cancelable) e.preventDefault();

      if (isGestureLockedRef.current || isTransitioningRef.current) {
        return;
      }

      const step = currentStepRef.current;

      if (diff > 0) {
        // Swiping UP -> scrolling DOWN
        if (step === 0) {
          touchStartYRef.current = currentY;
          advanceToStep(1, false);
        } else if (step === 1) {
          touchStartYRef.current = currentY;
          advanceToStep(2, false);
        } else if (step === 2) {
          touchStartYRef.current = currentY;
          hasCompletedHeroRef.current = true;
          isGestureLockedRef.current = true;
          isTransitioningRef.current = true;
          window.dispatchEvent(
            new CustomEvent('hero-step-change', {
              detail: { step: 3, direction: 'down' },
            })
          );
          document.getElementById('what-is-coirei')?.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 800);
        }
      } else if (diff < 0) {
        // Swiping DOWN -> scrolling UP
        if (step === 2) {
          touchStartYRef.current = currentY;
          hasCompletedHeroRef.current = false;
          advanceToStep(1, true);
        } else if (step === 1) {
          touchStartYRef.current = currentY;
          advanceToStep(0, true);
        }
      }
    };

    const handleTouchEnd = () => {
      isGestureLockedRef.current = false;
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollY = window.scrollY;

      if (hasCompletedHeroRef.current && scrollY > 20) {
        return;
      }

      const step = currentStepRef.current;

      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(e.key)) {
        e.preventDefault();
      }

      if (isTransitioningRef.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (step === 0) {
          advanceToStep(1, false);
        } else if (step === 1) {
          advanceToStep(2, false);
        } else if (step === 2) {
          hasCompletedHeroRef.current = true;
          isTransitioningRef.current = true;
          document.getElementById('what-is-coirei')?.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 800);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (step === 2) {
          hasCompletedHeroRef.current = false;
          advanceToStep(1, true);
        } else if (step === 1) {
          advanceToStep(0, true);
        }
      }
    };

    // Scroll tracker
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= window.innerHeight * 0.4) {
        hasCompletedHeroRef.current = true;
        justArrivedAtTopRef.current = true;
        if (currentStepRef.current !== 2) {
          setCurrentStep(2);
          currentStepRef.current = 2;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (gestureTimeoutRef.current) clearTimeout(gestureTimeoutRef.current);
      if (arriveTopTimerRef.current) clearTimeout(arriveTopTimerRef.current);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="startups-hero"
      ref={containerRef}
      data-custom-padding
      className="relative w-full h-screen min-h-[600px] bg-[#bad9db] border-0 overflow-hidden select-none"
    >
      {/* Viewport Container */}
      <div className="relative h-full w-full overflow-hidden flex flex-col justify-between border-0">

        {/* EDGE-TO-EDGE FULL BLEED IMAGES */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden border-0">
          {/* Screen 1: Among Many */}
          <img
            src={amongManyPng}
            alt="Among Many"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out will-change-[opacity] border-0"
            style={{
              opacity: currentStep === 0 ? 1 : 0,
              objectPosition: 'center 28%'
            }}
          />

          {/* Screen 2: Stand Apart */}
          <img
            src={standApartPng}
            alt="Stand Apart"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out will-change-[opacity] border-0"
            style={{
              opacity: currentStep === 1 ? 1 : 0,
              objectPosition: 'center 28%'
            }}
          />

          {/* Screen 3: Startup Unlocked */}
          <img
            src={startupUnlockedPng}
            alt="Startup Unlocked"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out will-change-[opacity] border-0"
            style={{
              opacity: currentStep === 2 ? 1 : 0,
              objectPosition: 'center 28%'
            }}
          />
        </div>

        {/* Top spacer for navbar */}
        <div className="h-20 w-full shrink-0 pointer-events-none" />

        {/* DESKTOP HERO TEXT: EXACT FIGMA MEASUREMENTS & GAP */}
        <div className="hidden md:block absolute inset-0 w-full max-w-[1440px] mx-auto h-full pointer-events-none border-0">

          {/* Screen 0: "Among" & "Many" */}
          <div
            className="absolute inset-0 w-full h-full transition-all duration-700 ease-out will-change-[opacity,transform]"
            style={{
              opacity: currentStep === 0 ? 1 : 0,
              transform: currentStep === 0 ? 'translateY(0)' : currentStep > 0 ? 'translateY(-20px)' : 'translateY(20px)',
              pointerEvents: currentStep === 0 ? 'auto' : 'none',
            }}
          >
            <div
              className="absolute flex items-start select-none left-1/2 -translate-x-1/2 whitespace-nowrap"
              style={{
                top: 'clamp(55px, calc(80 / 1440 * 100vw), 90px)',
                columnGap: 'clamp(14px, calc(33 / 1440 * 100vw), 33px)',
              }}
            >
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#3F3F3F] leading-none tracking-normal"
                style={{
                  fontSize: 'clamp(44px, 8vw, 124px)',
                  lineHeight: '100%',
                }}
              >
                Among
              </span>
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#3F3F3F] leading-none tracking-normal"
                style={{
                  fontSize: 'clamp(44px, 8vw, 124px)',
                  lineHeight: '100%',
                  marginTop: 'clamp(12px, calc(28 / 1440 * 100vw), 28px)',
                }}
              >
                Many
              </span>
            </div>
          </div>

          {/* Screen 1: "Stand" & "Apart" */}
          <div
            className="absolute inset-0 w-full h-full transition-all duration-700 ease-out will-change-[opacity,transform]"
            style={{
              opacity: currentStep === 1 ? 1 : 0,
              transform: currentStep === 1 ? 'translateY(0)' : currentStep > 1 ? 'translateY(-20px)' : 'translateY(20px)',
              pointerEvents: currentStep === 1 ? 'auto' : 'none',
            }}
          >
            <div
              className="absolute flex items-start select-none left-1/2 -translate-x-1/2 whitespace-nowrap"
              style={{
                top: 'clamp(55px, calc(80 / 1440 * 100vw), 90px)',
                columnGap: 'clamp(14px, calc(33 / 1440 * 100vw), 33px)',
              }}
            >
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#3F3F3F] leading-none tracking-normal"
                style={{
                  fontSize: 'clamp(44px, 8vw, 124px)',
                  lineHeight: '100%',
                }}
              >
                Stand
              </span>
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#3F3F3F] leading-none tracking-normal"
                style={{
                  fontSize: 'clamp(44px, 8vw, 124px)',
                  lineHeight: '100%',
                  marginTop: 'clamp(12px, calc(28 / 1440 * 100vw), 28px)',
                }}
              >
                Apart
              </span>
            </div>
          </div>

          {/* Screen 2: "Startup" & "Unlocked" */}
          <div
            className="absolute inset-0 w-full h-full transition-all duration-700 ease-out will-change-[opacity,transform]"
            style={{
              opacity: currentStep === 2 ? 1 : 0,
              transform: currentStep === 2 ? 'translateY(0)' : 'translateY(20px)',
              pointerEvents: currentStep === 2 ? 'auto' : 'none',
            }}
          >
            <div
              className="absolute flex items-start select-none left-1/2 -translate-x-1/2 whitespace-nowrap"
              style={{
                top: 'clamp(55px, calc(80 / 1440 * 100vw), 90px)',
                columnGap: 'clamp(14px, calc(33 / 1440 * 100vw), 33px)',
              }}
            >
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#3F3F3F] leading-none tracking-normal"
                style={{
                  fontSize: 'clamp(44px, 8vw, 124px)',
                  lineHeight: '100%',
                }}
              >
                Startup
              </span>
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#3F3F3F] leading-none tracking-normal"
                style={{
                  fontSize: 'clamp(44px, 8vw, 124px)',
                  lineHeight: '100%',
                  marginTop: 'clamp(12px, calc(28 / 1440 * 100vw), 28px)',
                }}
              >
                Unlocked
              </span>
            </div>

            {/* Screen 2 Buttons & Quote positioned cleanly in open sky */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-700 ease-out will-change-[opacity,transform]"
              style={{
                opacity: currentStep === 2 ? 1 : 0,
                transform: currentStep === 2 ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: currentStep === 2 ? '100ms' : '0ms',
              }}
            >
              {/* Left Button: Apply for Benefits ↗ */}
              <div
                className="absolute pointer-events-auto"
                style={{
                  left: 'calc(287 / 1440 * 100%)',
                  top: 'clamp(320px, 46vh, 430px)',
                }}
              >
                <button
                  onClick={handleApply}
                  className="h-[36px] px-[12px] py-[8px] rounded-[6px] bg-[#111827] hover:bg-black text-white text-[13.5px] font-medium inline-flex items-center gap-1.5 shadow-md border-0 cursor-pointer active:scale-95 transition-transform"
                >
                  <span>Apply for Benefits</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
                </button>
              </div>

              {/* Right Button: Explore Benefits */}
              <div
                className="absolute pointer-events-auto"
                style={{
                  left: 'calc(989 / 1440 * 100%)',
                  bottom: 'clamp(130px, 24vh, 220px)',
                }}
              >
                <button
                  onClick={handleExplore}
                  className="h-[38px] px-[12px] py-[8px] rounded-[6px] bg-white hover:bg-neutral-50 text-[#1E293B] border-0 text-[13.5px] font-medium inline-flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] cursor-pointer active:scale-95 transition-all"
                >
                  Explore Benefits
                </button>
              </div>

              {/* Quote on right beside arm/chest */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: 'calc(989 / 1440 * 100%)',
                  bottom: 'clamp(50px, 12vh, 1px)',
                  maxWidth: '380px',
                }}
              >
                <p className="text-[14px] sm:text-[15.5px] font-normal leading-relaxed text-[#232F3E]">
                  “Give your startup the intelligence to understand your market, find the right customers, and build a smarter growth strategy”
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* MOBILE HERO TEXT (< md) */}
        <div
          className="md:hidden absolute inset-x-0 z-20 px-4 text-center pointer-events-none"
          style={{
            top: 'clamp(76px, 12vh, 100px)',
          }}
        >
          {/* Screen 0 */}
          <div
            className="transition-all duration-700 ease-out will-change-[opacity,transform]"
            style={{
              opacity: currentStep === 0 ? 1 : 0,
              transform: currentStep === 0 ? 'translateY(0)' : 'translateY(-14px)',
              pointerEvents: currentStep === 0 ? 'auto' : 'none',
              display: currentStep === 0 ? 'block' : 'none',
            }}
          >
            <div className="text-[36px] xs:text-[42px] sm:text-[48px] font-extrabold text-[#3F3F3F] leading-none tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Among Many
            </div>
          </div>

          {/* Screen 1 */}
          <div
            className="transition-all duration-700 ease-out will-change-[opacity,transform]"
            style={{
              opacity: currentStep === 1 ? 1 : 0,
              transform: currentStep === 1 ? 'translateY(0)' : 'translateY(-14px)',
              pointerEvents: currentStep === 1 ? 'auto' : 'none',
              display: currentStep === 1 ? 'block' : 'none',
            }}
          >
            <div className="text-[36px] xs:text-[42px] sm:text-[48px] font-extrabold text-[#3F3F3F] leading-none tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Stand Apart
            </div>
          </div>

          {/* Screen 2 */}
          <div
            className="transition-all duration-700 ease-out will-change-[opacity,transform] flex flex-col items-center"
            style={{
              opacity: currentStep === 2 ? 1 : 0,
              transform: currentStep === 2 ? 'translateY(0)' : 'translateY(14px)',
              pointerEvents: currentStep === 2 ? 'auto' : 'none',
              display: currentStep === 2 ? 'flex' : 'none',
            }}
          >
            <div className="text-[32px] xs:text-[38px] sm:text-[44px] font-extrabold text-[#3F3F3F] leading-none tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Startup Unlocked
            </div>
            <div className="mt-3.5 flex items-center justify-center gap-2.5 pointer-events-auto">
              <button
                onClick={handleApply}
                className="h-[36px] inline-flex items-center justify-center gap-1.5 bg-[#111827] text-white text-[12.5px] font-medium px-3.5 py-1.5 rounded-[6px] shadow-md border-0 cursor-pointer active:scale-95 transition-transform"
              >
                <span>Apply for Benefits</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
              </button>
              <button
                onClick={handleExplore}
                className="h-[36px] inline-flex items-center justify-center bg-white text-[#1E293B] text-[12.5px] font-medium px-3.5 py-1.5 rounded-[6px] shadow-sm border-0 cursor-pointer active:scale-95 transition-transform"
              >
                Explore Benefits
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE HERO QUOTE (< md) */}
        <div className="md:hidden">
          {currentStep === 2 && (
            <div
              className="absolute bottom-6 inset-x-4 z-20 pointer-events-none transition-all duration-700 ease-out will-change-[opacity,transform] animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div className="bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/60 shadow-lg max-w-sm mx-auto text-center">
                <p className="text-[12px] sm:text-[13px] font-normal leading-relaxed text-[#232F3E]">
                  “Give your startup the intelligence to understand your market, find the right customers, and build a smarter growth strategy”
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;
