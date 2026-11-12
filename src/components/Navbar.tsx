import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import coireiLogo from '../assets/logo/coireiLogo.png';

interface FeatureSubItem {
  title: string;
  description: string;
  href: string;
}

interface NavFeatureSection {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  items: FeatureSubItem[];
}

const NAV_FEATURE_SECTIONS: NavFeatureSection[] = [
  {
    id: 'research',
    title: 'Research Agent',
    subtitle: 'Competitor & market intelligence',
    href: '/competitor-analysis',
    items: [
      {
        title: 'Competitor Analysis',
        description: 'Track competitor moves, positioning, messaging, pricing, and ad strategies in real-time.',
        href: '/competitor-analysis',
      },
      {
        title: 'Voice of Customer',
        description: 'Capture customer sentiment, reviews, and buyer conversations across channels.',
        href: '/voice-of-customer',
      },
      // {
      //   title: 'Product Analysis',
      //   description: 'Analyze competitor product capabilities, core features, and discover feature gaps.',
      //   href: '#',
      // },
    ],
  },
  {
    id: 'engage',
    title: 'Engage Agent',
    subtitle: 'Autonomous buyer engagement & pipeline',
    href: '/engage',
    items: [
      {
        title: 'Lead-Nurturing',
        description: 'Build meaningful customer relationships with personalized engagement and timely follow-ups.',
        href: '/lead-nurturing',
      },
      {
        title: 'Multi-Channel Outreach',
        description: 'Reach high-intent prospects across email, social channels, and web touchpoints automatically.',
        href: '/engage#omnichannel',
      },
      {
        title: 'The Intelligence of Engagement',
        description: 'Automate lead qualification and accelerate conversion across every deal stage.',
        href: '/engage#intelligence',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing Intelligence',
    subtitle: 'Campaign strategy & cross-media performance',
    href: '/marketing',
    items: [
      {
        title: 'Targeted Campaign Strategy',
        description: 'Create targeted campaigns and improve marketing ROI across all segments.',
        href: '/marketing',
      },
      {
        title: 'Cross-Media Optimization',
        description: 'Optimize ad creative, messaging, and channel distribution with unified insights.',
        href: '/marketing#cross-media',
      },
      {
        title: 'SEO & AEO',
        description: 'Improve search rankings with SEO and help AI platforms discover and cite your content.',
        href: '/marketing#seo-aeo',
      },
      {
        title: 'Automated Blog Posting',
        description: 'Create, optimize, and publish SEO blogs directly to your website automatically.',
        href: '/marketing#automated-blog',
      },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState<string>('research');
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
    setActiveNavTab('research');
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
      const customerDecisionsSpacer = document.getElementById('customer-decisions-parallax-spacer');

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

      if (customerDecisionsSpacer && !nextHide) {
        const rect = customerDecisionsSpacer.getBoundingClientRect();
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

            {/* Features Trigger with Floating Two-Pane Mega-Dropdown */}
            <div
              className="relative py-4 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-[14.5px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-1 cursor-pointer select-none group"
                aria-expanded={dropdownOpen}
              >
                <span>Features</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-black' : ''
                  }`}
                />
              </button>

              {/* Floating Two-Pane Dropdown Card matching requested navbar example */}
              {!isScrolled && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ease-out origin-top ${
                    dropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                      : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.15)] p-5 flex w-[980px] max-w-[95vw] text-left whitespace-normal">
                    {/* Left Pane: Categories / Agents list */}
                    <div className="w-[320px] shrink-0 flex flex-col gap-2 pr-4 border-r border-neutral-200/70">
                      {NAV_FEATURE_SECTIONS.map((section) => {
                        const isSelected = activeNavTab === section.id;
                        return (
                          <Link
                            key={section.id}
                            to={section.href}
                            onMouseEnter={() => setActiveNavTab(section.id)}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl min-h-[76px] transition-all duration-150 text-left group ${
                              isSelected
                                ? 'bg-neutral-100/90 text-black font-semibold'
                                : 'hover:bg-neutral-50/80 text-neutral-800 hover:text-black'
                            }`}
                          >
                            <div className="flex flex-col min-w-0 pr-2">
                              <span className="text-[15px] font-semibold text-neutral-900 group-hover:text-black leading-snug">
                                {section.title}
                              </span>
                              <span className="text-[13px] text-neutral-500 font-normal leading-normal mt-1 group-hover:text-neutral-600">
                                {section.subtitle}
                              </span>
                            </div>
                            {isSelected && (
                              <ChevronRight className="w-4.5 h-4.5 text-neutral-500 shrink-0 transition-transform group-hover:translate-x-0.5 ml-2" />
                            )}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right Pane: Sub-items of active category */}
                    <div className="flex-1 min-w-0 flex flex-col gap-2 pl-4 pr-1">
                      {NAV_FEATURE_SECTIONS.find((s) => s.id === activeNavTab)?.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={(e) => {
                            if (item.href === '#' || !item.href) {
                              e.preventDefault();
                              return;
                            }
                            setDropdownOpen(false);
                            if (item.href.includes('#')) {
                              const [path, hashId] = item.href.split('#');
                              if (location.pathname === path) {
                                const el = document.getElementById(hashId);
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }
                          }}
                          className="px-4 py-3.5 rounded-xl min-h-[76px] hover:bg-neutral-50/90 transition-all duration-150 flex flex-col justify-center text-left group"
                        >
                          <span className="text-[15px] font-semibold text-neutral-900 group-hover:text-black leading-snug">
                            {item.title}
                          </span>
                          <span className="text-[13px] text-neutral-500 font-normal leading-normal mt-1 group-hover:text-neutral-600 break-words">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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

        {/* Mobile dropdown menu */}
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
                  {NAV_FEATURE_SECTIONS.map((section) => (
                    <div key={section.id} className="space-y-2">
                      <div className="px-2">
                        <Link
                          to={section.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-bold text-[13.5px] text-neutral-900 hover:text-black flex items-center justify-between"
                        >
                          <span>{section.title}</span>
                          <span className="text-[10px] uppercase font-semibold text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                            Agent
                          </span>
                        </Link>
                        <p className="text-[11.5px] text-neutral-500 mt-0.5">{section.subtitle}</p>
                      </div>

                      <div className="space-y-1 pl-2 border-l border-neutral-100 ml-2">
                        {section.items.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.href}
                            onClick={(e) => {
                              if (sub.href === '#' || !sub.href) {
                                e.preventDefault();
                                return;
                              }
                              setMobileMenuOpen(false);
                              if (sub.href.includes('#')) {
                                const [path, hashId] = sub.href.split('#');
                                if (location.pathname === path) {
                                  const el = document.getElementById(hashId);
                                  if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }
                              }
                            }}
                            className="block py-1.5 px-2 rounded-lg text-xs hover:bg-neutral-50 transition-colors"
                          >
                            <span className="font-semibold text-[12.5px] text-neutral-800 block">
                              {sub.title}
                            </span>
                            <span className="text-[11px] text-neutral-500 block leading-snug mt-0.5">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
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
