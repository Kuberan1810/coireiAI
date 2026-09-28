import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import coireiLogo from '../assets/logo/coireiLogo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isStepsActive, setIsStepsActive] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const isScrolledRef = useRef(false);
  const isAtTopRef = useRef(true);
  const isStepsActiveRef = useRef(false);
  const hideNavbarRef = useRef(false);
  const progressBarFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;

      // Track if at the very top of the page
      const atTop = scrollY <= 20;
      if (atTop !== isAtTopRef.current) {
        isAtTopRef.current = atTop;
        setIsAtTop(atTop);
      }

      if (!isHomePage) {
        let nextScrolled = isScrolledRef.current;
        if (scrollY <= 30 || scrollDelta < -6) {
          nextScrolled = false;
        } else if (scrollDelta > 6 && scrollY > 40) {
          nextScrolled = true;
        }
        if (nextScrolled !== isScrolledRef.current) {
          isScrolledRef.current = nextScrolled;
          setIsScrolled(nextScrolled);
        }
        if (isStepsActiveRef.current) {
          isStepsActiveRef.current = false;
          setIsStepsActive(false);
        }
        if (hideNavbarRef.current) {
          hideNavbarRef.current = false;
          setHideNavbar(false);
        }
        lastScrollY = scrollY;
        return;
      }

      // Scroll direction & threshold logic:
      // 1. If at or near top (<= 30px) -> always original state
      // 2. If scrolling UP (scrollDelta < -6) -> return to original state!
      // 3. If scrolling DOWN (scrollDelta > 6 && scrollY > 60) -> compact pill state
      let nextScrolled = isScrolledRef.current;
      if (scrollY <= 30) {
        nextScrolled = false;
      } else if (scrollDelta < -6) {
        nextScrolled = false; // user is scrolling up: return to original full navbar state
      } else if (scrollDelta > 6 && scrollY > 60) {
        nextScrolled = true; // user is scrolling down: shrink to pill
      }

      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      lastScrollY = scrollY;

      // Steps section scroll progress tracking
      const stepsSection = document.getElementById('steps-section');
      if (stepsSection) {
        const rect = stepsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollable = rect.height - windowHeight;

        const inSteps = rect.top <= 80 && rect.bottom > 80;
        if (inSteps !== isStepsActiveRef.current) {
          isStepsActiveRef.current = inSteps;
          setIsStepsActive(inSteps);
        }

        // Direct DOM update on GPU compositor: zero React re-renders during active scrolling!
        if (inSteps && progressBarFillRef.current && totalScrollable > 0) {
          const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
          progressBarFillRef.current.style.transform = `scaleX(${progress})`;
        }
      } else if (isStepsActiveRef.current) {
        isStepsActiveRef.current = false;
        setIsStepsActive(false);
      }

      // Hide navbar when scrolling into fixed black Quote section
      const topSurface = document.querySelector('.relative.z-20.bg-white');
      if (topSurface) {
        const bottom = topSurface.getBoundingClientRect().bottom;
        const nextHide = bottom <= 90;
        if (nextHide !== hideNavbarRef.current) {
          hideNavbarRef.current = nextHide;
          setHideNavbar(nextHide);
        }
      } else if (hideNavbarRef.current) {
        hideNavbarRef.current = false;
        setHideNavbar(false);
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

    updateNavbar();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomePage]);

  return (
    <>
      <header 
        className={`fixed z-50 left-1/2 -translate-x-1/2 will-change-[width,top,height,border-radius,box-shadow] transition-[width,top,height,border-radius,box-shadow,background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hideNavbar 
            ? '-translate-y-28 opacity-0 pointer-events-none' 
            : 'translate-y-0 opacity-100 pointer-events-auto'
        } ${
          isScrolled
            ? 'top-3 sm:top-4 w-[92vw] sm:w-[420px] md:w-[460px] h-[52px] sm:h-[54px] rounded-full border'
            : 'top-0 w-full max-w-full h-20 rounded-none border-b border-transparent bg-white'
        }`}
        style={{
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.38)'
            : isAtTop
              ? '#ffffff'
              : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isScrolled
            ? 'blur(12px) saturate(160%)'
            : isAtTop
              ? 'none'
              : 'blur(12px)',
          WebkitBackdropFilter: isScrolled
            ? 'blur(12px) saturate(160%)'
            : isAtTop
              ? 'none'
              : 'blur(12px)',
          boxShadow: isScrolled 
            ? '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.7)' 
            : isAtTop
              ? 'none'
              : '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          borderColor: isScrolled
            ? 'rgba(255, 255, 255, 0.6)'
            : isAtTop
              ? 'transparent'
              : 'rgba(241, 245, 249, 0.9)',
        }}
      >
        {/* Scroll Progress Bar: Very thin (2px), active only when inside Steps section */}
        <div 
          className={`absolute top-0 inset-x-5 h-[2px] rounded-full overflow-hidden pointer-events-none transition-opacity duration-300 ${
            isStepsActive ? 'opacity-100 bg-neutral-200/50' : 'opacity-0'
          }`}
        >
          <div 
            ref={progressBarFillRef}
            className="h-full bg-black origin-left w-full will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

        {/* Navbar Inner Content */}
        <div 
          className={`w-full h-full relative flex items-center justify-between transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'px-4 sm:px-5' 
              : 'px-6 sm:px-8 max-w-full'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={coireiLogo}
              alt="coirei"
              className={`w-auto object-contain group-hover:opacity-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled ? 'h-5 sm:h-6' : 'h-7 sm:h-8'
              }`}
            />
          </Link>

          {/* Center Desktop Navigation: Positioned absolute in center so fading out never shifts Logo or Log in */}
          <nav 
            className={`hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 ease-out whitespace-nowrap ${
              isScrolled 
                ? 'opacity-0 pointer-events-none' 
                : 'opacity-100 pointer-events-auto'
            }`}
          >
            <Link
              to="/docs"
              className="text-[14.5px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-1"
            >
              API Docs
            </Link>

            <Link
              to="/pricing"
              className="text-[14.5px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-1"
            >
              Pricing
            </Link>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-[14.5px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-1 cursor-pointer">
                <span>Case Studies</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-[14.5px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-1 cursor-pointer">
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform group-hover:rotate-180" />
              </button>
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/signin"
              className={`inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-medium rounded-full shadow-xs hover:shadow transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer shrink-0 ${
                isScrolled 
                  ? 'text-[12.5px] sm:text-[13px] px-4 py-1.5 sm:py-2' 
                  : 'text-[13.5px] px-5 py-2'
              }`}
            >
              Log in
            </Link>

            {/* Mobile menu toggle (visible only when not scrolled) */}
            <div 
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                isScrolled ? 'max-w-0 opacity-0 pointer-events-none' : 'max-w-[40px] opacity-100 ml-1.5'
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

        {/* Mobile dropdown menu (only when not scrolled) */}
        {!isScrolled && mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-100 bg-white/95 backdrop-blur-md px-6 pt-2 pb-6 space-y-3 shadow-lg">
            <Link
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base"
            >
              Product
            </Link>
            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base"
            >
              Solutions
            </Link>
            <Link
              to="/customers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base"
            >
              Customers
            </Link>
            <Link
              to="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base"
            >
              Resources
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 font-medium text-base"
            >
              Pricing
            </Link>
            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-neutral-800 font-medium border border-neutral-200 rounded-full"
              >
                Sign in
              </Link>
              <a
                href="#get-started"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const elem = document.getElementById('get-started');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full text-center py-2.5 bg-[#0B0F19] text-white font-medium rounded-full cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Spacer so document flow is preserved at initial top position */}
      <div className="h-20 w-full bg-white shrink-0 pointer-events-none" />
    </>
  );
};

export default Navbar;
