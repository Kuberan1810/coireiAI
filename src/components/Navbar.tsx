import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BarChart3, TrendingUp, Search, Bot, Sparkles } from 'lucide-react';
import coireiLogo from '../assets/logo/coireiLogo.png';

interface FeatureSubItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  iconColor: string;
}

interface FeatureCategory {
  category: string;
  items: FeatureSubItem[];
}

const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    category: 'RESEARCH',
    items: [
      // {
      //   title: 'Analysis Engine',
      //   description: 'Track competitor moves, pricing, and messaging shifts in real-time.',
      //   href: '/competitor-analysis',
      //   icon: BarChart3,
      //   iconColor: '#F97316', // Orange
      // },
      {
        title: 'Marketing Intelligence',
        description: 'Create targeted campaigns and improve marketing performance.',
        href: '/marketing',
        icon: TrendingUp,
        iconColor: '#3B82F6', // Blue
      },
    ],
  },
  {
    category: 'AGENTS',
    items: [
      {
        title: 'Engage Agent',
        description: 'Autonomous multi-channel buyer engagement and pipeline conversion.',
        href: '/engage',
        icon: Sparkles,
        iconColor: '#EC4899', // Pink / Rose
      },
      {
        title: 'Lead-Nurturing',
        description: 'Build meaningful customer relationships with personalized engagement and timely follow-ups.',
        href: '/lead-nurturing',
        icon: TrendingUp,
        iconColor: '#8B5CF6', // Purple
      },

    ],
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hideNavbar, setHideNavbar] = useState(false);

  const isStartupInit = location.pathname.toLowerCase().includes('startup') ||
    location.pathname.toLowerCase().includes('coirei-for-startups');
  const [inStartupHero, setInStartupHero] = useState(isStartupInit);
  const inStartupHeroRef = useRef(isStartupInit);
  const isScrolledRef = useRef(false);
  const isAtTopRef = useRef(true);
  const hideNavbarRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);
  const heroStepRef = useRef(0);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    isScrolledRef.current = false;
    setIsScrolled(false);
    isAtTopRef.current = true;
    setIsAtTop(true);
    lastScrollYRef.current = 0;
    accumulatedDeltaRef.current = 0;
    heroStepRef.current = 0;
    const isStartup = location.pathname.toLowerCase().includes('startup') ||
      location.pathname.toLowerCase().includes('coirei-for-startups');
    inStartupHeroRef.current = isStartup;
    setInStartupHero(isStartup);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    const isStartup = location.pathname.toLowerCase().includes('startup') ||
      location.pathname.toLowerCase().includes('coirei-for-startups');

    let ticking = false;
    const updateNavbar = () => {
      const scrollY = Math.max(0, window.scrollY);
      const diff = scrollY - lastScrollYRef.current;

      // On Startups page, user is only at the top if scrollY <= 25 AND hero is on Step 0
      const atTop = scrollY <= 25 && (!isStartup || heroStepRef.current === 0);
      if (atTop !== isAtTopRef.current) {
        isAtTopRef.current = atTop;
        setIsAtTop(atTop);
      }

      // Track floating pill state on scroll:
      // At the very top -> always expand (full width)
      if (atTop) {
        accumulatedDeltaRef.current = 0;
        if (isScrolledRef.current) {
          isScrolledRef.current = false;
          setIsScrolled(false);
        }
      } else {
        // Scrolled down in the page:
        // Scroll DOWN -> shrink to small pill (isScrolled = true)
        // Scroll UP -> expand to full navbar with links (isScrolled = false)
        if (diff > 0) {
          if (accumulatedDeltaRef.current < 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current += diff;

          if (accumulatedDeltaRef.current > 12 && (scrollY > 50 || isStartup)) {
            if (!isScrolledRef.current) {
              isScrolledRef.current = true;
              setIsScrolled(true);
            }
          }
        } else if (diff < 0) {
          if (accumulatedDeltaRef.current > 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current += diff;

          if (accumulatedDeltaRef.current < -12) {
            if (isScrolledRef.current) {
              isScrolledRef.current = false;
              setIsScrolled(false);
            }
          }
        }
      }

      if (isStartup) {
        const inHero = heroStepRef.current <= 2 && scrollY < 120;
        if (inHero !== inStartupHeroRef.current) {
          inStartupHeroRef.current = inHero;
          setInStartupHero(inHero);
        }
      }

      lastScrollYRef.current = scrollY;

      // Hide navbar ONLY when the user is viewing a fixed black parallax section
      let nextHide = false;

      const awardSpacer = document.getElementById('award-parallax-spacer');
      const buildSpacer = document.getElementById('build-parallax-spacer');
      const quoteSpacer = document.getElementById('quote-parallax-spacer');

      if (awardSpacer) {
        const rect = awardSpacer.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          nextHide = true;
        }
      }

      if (buildSpacer && !nextHide) {
        const rect = buildSpacer.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          nextHide = true;
        }
      }

      if (quoteSpacer && !nextHide) {
        const rect = quoteSpacer.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          nextHide = true;
        }
      }

      if (nextHide !== hideNavbarRef.current) {
        hideNavbarRef.current = nextHide;
        setHideNavbar(nextHide);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Listen to Startups hero step transitions
    const handleHeroStepChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ step: number; direction: 'up' | 'down' }>;
      if (!customEvent.detail) return;
      const { step, direction } = customEvent.detail;
      heroStepRef.current = step;

      const inHero = step <= 2;
      if (inHero !== inStartupHeroRef.current) {
        inStartupHeroRef.current = inHero;
        setInStartupHero(inHero);
      }

      if (step === 0) {
        isAtTopRef.current = true;
        setIsAtTop(true);
        isScrolledRef.current = false;
        setIsScrolled(false);
      } else {
        isAtTopRef.current = false;
        setIsAtTop(false);
        if (direction === 'down') {
          isScrolledRef.current = true;
          setIsScrolled(true);
        } else if (direction === 'up') {
          isScrolledRef.current = false;
          setIsScrolled(false);
        }
      }
    };

    updateNavbar();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('hero-step-change', handleHeroStepChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('hero-step-change', handleHeroStepChange);
    };
  }, [isHomePage, location.pathname]);

  const isStartupPage = location.pathname.toLowerCase().includes('startup') ||
    location.pathname.toLowerCase().includes('coirei-for-startups') ||
    Boolean(typeof document !== 'undefined' && document.getElementById('startups-hero'));

  return (
    <>
      <header
        className={`fixed z-50 left-1/2 -translate-x-1/2 will-change-[width,top,height,border-radius,box-shadow] transition-[width,top,height,border-radius,box-shadow,background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${hideNavbar
          ? '-translate-y-28 opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100 pointer-events-auto'
          } ${isScrolled
            ? 'top-3 sm:top-4 w-[92vw] sm:w-[420px] md:w-[460px] h-[52px] sm:h-[54px] rounded-full border'
            : 'top-0 w-full max-w-full h-20 rounded-none border-b border-transparent bg-transparent'
          }`}
        style={{
          backgroundColor: isScrolled
            ? isStartupPage && inStartupHero
              ? 'rgba(255, 255, 255, 0.22)'
              : 'rgba(255, 255, 255, 0.88)'
            : mobileMenuOpen
              ? '#ffffff'
              : isAtTop
                ? isStartupPage
                  ? 'transparent'
                  : '#ffffff'
                : isStartupPage && inStartupHero
                  ? 'transparent'
                  : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isScrolled
            ? isStartupPage && inStartupHero
              ? 'blur(16px) saturate(140%)'
              : 'blur(12px) saturate(160%)'
            : isStartupPage && inStartupHero
              ? 'none'
              : isAtTop
                ? 'none'
                : 'blur(12px)',
          WebkitBackdropFilter: isScrolled
            ? isStartupPage && inStartupHero
              ? 'blur(16px) saturate(140%)'
              : 'blur(12px) saturate(160%)'
            : isStartupPage && inStartupHero
              ? 'none'
              : isAtTop
                ? 'none'
                : 'blur(12px)',
          boxShadow: isScrolled
            ? isStartupPage && inStartupHero
              ? '0 8px 24px -4px rgba(0, 0, 0, 0.05), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)'
              : '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.7)'
            : mobileMenuOpen
              ? '0 4px 12px -2px rgba(0, 0, 0, 0.06)'
              : isStartupPage && inStartupHero
                ? 'none'
                : isAtTop
                  ? 'none'
                  : '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
          borderColor: isScrolled
            ? isStartupPage && inStartupHero
              ? 'rgba(255, 255, 255, 0.35)'
              : 'rgba(255, 255, 255, 0.6)'
            : isStartupPage && inStartupHero
              ? 'transparent'
              : isAtTop
                ? 'transparent'
                : 'rgba(241, 245, 249, 0.9)',
        }}
      >
        {/* Scroll Progress Bar: Very thin (2px), active only when inside Steps section */}


        {/* Navbar Inner Content */}
        <div
          className={`w-full h-full relative flex items-center justify-between transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
            ? 'px-4 sm:px-5'
            : 'px-6 sm:px-8 max-w-full'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={coireiLogo}
              alt="coirei"
              className={`w-auto object-contain group-hover:opacity-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'h-5 sm:h-6' : 'h-7 sm:h-8'
                }`}
            />
          </Link>

          {/* Center Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-7 lg:gap-8 absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 ease-out whitespace-nowrap ${isScrolled
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 pointer-events-auto'
              }`}
          >
            <Link
              to="/"
              className={`text-[14.5px] font-medium transition-colors py-1 ${location.pathname === '/'
                ? 'text-black font-semibold'
                : 'text-neutral-700 hover:text-neutral-900'
                }`}
            >
              Home
            </Link>

            {/* Features Link Trigger */}
            <div
              className="py-4 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center text-[14.5px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-1 cursor-pointer select-none group"
                aria-expanded={dropdownOpen}
              >
                <span>Features</span>
              </button>
            </div>

            <Link
              to="/about"
              className={`text-[14.5px] font-medium transition-colors py-1 ${location.pathname === '/about'
                ? 'text-black font-semibold'
                : 'text-neutral-700 hover:text-neutral-900'
                }`}
            >
              About
            </Link>

            <Link
              to="/startups"
              className={`text-[14.5px] font-medium transition-colors py-1 flex items-center gap-1.5 ${location.pathname.startsWith('/startup')
                ? 'text-black font-semibold'
                : 'text-neutral-700 hover:text-neutral-900'
                }`}
            >
              <span>Startups</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5"></span>
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className={`${isScrolled ? 'inline-flex' : 'hidden md:inline-flex'
                } items-center justify-center bg-black hover:bg-neutral-800 text-white font-medium rounded-full shadow-xs hover:shadow transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer shrink-0 ${isScrolled
                  ? 'text-[12.5px] sm:text-[13px] px-3.5 sm:px-4 py-1.5 sm:py-2'
                  : 'text-[13.5px] px-5 py-2'
                }`}
            >
              Contact Us
            </Link>

            {/* Mobile menu toggle (visible only when not scrolled) */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${isScrolled ? 'max-w-0 opacity-0 pointer-events-none' : 'max-w-[40px] opacity-100 ml-1.5'
                }`}
            >
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-neutral-600 hover:text-neutral-900 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Width Desktop Mega Menu (Figma W: 1536 / Full-width container) */}
        {!isScrolled && (
          <div
            className={`hidden md:block absolute top-full left-0 right-0 w-full bg-white border-b border-neutral-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] transition-all duration-200 ease-out origin-top ${dropdownOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto visible'
              : 'opacity-0 -translate-y-2 pointer-events-none invisible'
              }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-15 pb-15">
              <div className="grid grid-cols-2 gap-12 lg:gap-20 max-w-4xl text-left">
                {FEATURE_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="flex flex-col">
                    <span className="text-[11px] font-medium tracking-widest text-neutral-400 uppercase mb-4 px-2">
                      {cat.category}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-150 group ${isActive
                              ? 'bg-neutral-50 text-black'
                              : 'hover:bg-neutral-50/80 text-neutral-700 hover:text-black'
                              }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              <Icon
                                className="w-5 h-5 transition-transform duration-150 group-hover:scale-110"
                                style={{ color: item.iconColor }}
                                strokeWidth={1.8}
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[14px] font-semibold tracking-tight text-neutral-900 group-hover:text-black leading-snug">
                                {item.title}
                              </span>
                              <span className="text-[12.5px] text-neutral-500 font-normal leading-relaxed mt-0.5 group-hover:text-neutral-600">
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile dropdown menu (only active page routes matching App.tsx) */}
        {!isScrolled && mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-100 bg-white/98 backdrop-blur-xl px-6 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-medium text-base hover:text-black ${location.pathname === '/' ? 'text-black font-semibold' : 'text-neutral-700'
                }`}
            >
              Home
            </Link>

            {/* Features Accordion */}
            <div>
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="w-full flex items-center justify-between py-2 text-neutral-900 font-semibold text-base cursor-pointer"
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileFeaturesOpen && (
                <div className="pl-2 pr-1 py-2 space-y-4 border-l-2 border-neutral-100 ml-1 mt-2 text-left">
                  {FEATURE_CATEGORIES.map((cat) => (
                    <div key={cat.category} className="space-y-2">
                      <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase px-2">
                        {cat.category}
                      </span>
                      <div className="space-y-1">
                        {cat.items.map((item) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-start gap-3 py-2 px-2.5 rounded-lg text-sm transition-colors ${isActive
                                ? 'bg-neutral-100 text-black font-semibold'
                                : 'text-neutral-700 hover:text-black hover:bg-neutral-50'
                                }`}
                            >
                              <Icon
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: item.iconColor }}
                                strokeWidth={1.8}
                              />
                              <div className="flex flex-col">
                                <span className="font-semibold text-[13.5px] text-neutral-900">{item.title}</span>
                                <span className="text-[11.5px] text-neutral-500 font-normal mt-0.5 leading-snug">{item.description}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base hover:text-black"
            >
              About
            </Link>

            <Link
              to="/startups"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base hover:text-black flex items-center justify-between"
            >
              <span>Startups</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full">New</span>
            </Link>

            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium rounded-full cursor-pointer shadow-xs transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Spacer so document flow is preserved at initial top position (hidden on startups page for full-bleed hero) */}
      {!isStartupPage && (
        <div className="h-20 w-full bg-white shrink-0 pointer-events-none" />
      )}
    </>
  );
};

export default Navbar;
