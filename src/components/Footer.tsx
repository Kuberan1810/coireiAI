import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LETTERS = ['c', 'o', 'i', 'r', 'e', 'i'];

const InstagramIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
  </svg>
);

// const XIcon: React.FC = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );

const LinkedInIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= (window.innerHeight || 600) + 80) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset only when scrolled well back up above the viewport
          if (entry.boundingClientRect.top > (window.innerHeight || 600) + 100) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px 100px 0px',
      }
    );

    observer.observe(el);
    checkVisibility();

    window.addEventListener('scroll', checkVisibility, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <footer className="w-full bg-black text-white relative z-20 overflow-hidden pt-10 sm:pt-14 pb-0 border-t border-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header Section */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 relative">

          {/* Left Block: Socials + Address + Contact Info */}
          <div className="w-full lg:w-[320px] shrink-0 pb-2 lg:pb-0 lg:pr-12">
            {/* Social Icons (Circles) */}
            <div className="flex items-center gap-3 mb-5">
              <a
                href="https://www.instagram.com/coirei_?stkn=YTNudGFybWd2dGY1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-neutral-700/90 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                <InstagramIcon />
              </a>

              {/* <a
                href="https://x.com/coirei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full border border-neutral-700/90 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                <XIcon />
              </a> */}

              <a
                href="https://linkedin.com/company/coirei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-neutral-700/90 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
            </div>

            {/* Address & Contact Info */}
            <div className="space-y-3 font-['Plus_Jakarta_Sans',sans-serif] text-[12px] sm:text-[12.5px] font-medium text-[#FFFFFF] tracking-normal leading-[1.4]">
              <div className="max-w-[280px]">
                <p>7th Floor, Spencer Plaza, Mount Road, Chennai, Tamil Nadu, India</p>
              </div>

              <div>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1.5 text-[#FFFFFF]">
                  <a
                    href="mailto:info@coirei.com"
                    className="hover:text-neutral-300 transition-colors"
                  >
                    info@coirei.com
                  </a>
                  <span className="hidden sm:inline text-neutral-500">/</span>
                  <a
                    href="mailto:coireitech@gmail.com"
                    className="hover:text-neutral-300 transition-colors"
                  >
                    coireitech@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <a
                  href="tel:+919840418139"
                  className="text-[#FFFFFF] hover:text-neutral-300 transition-colors inline-block"
                >
                  (+91) 9840418139
                </a>
              </div>
            </div>
          </div>

          {/* Line 174 from Figma: 1px width, 274px height, linear gradient #FFFFFF to #000000, starts flush at top edge */}
          <div
            className="hidden lg:block w-[1px] h-[274px] shrink-0 bg-gradient-to-b from-[#FFFFFF] to-[#000000] -mt-10 sm:-mt-14"
            aria-hidden="true"
          />

          {/* Right Navigation / Columns */}
          <div className="w-full lg:flex-1 grid grid-cols-2 gap-8 sm:gap-14 lg:flex lg:gap-24 lg:pl-14 pt-2 lg:pt-3 pb-6 sm:pb-25 lg:pb-24">
            {/* Site Index Column */}
            <div className="flex flex-col space-y-3">
              <span className="text-neutral-400 text-[14px] sm:text-[16px] font-normal select-none">
                Site Index
              </span>
              <div className="flex flex-col space-y-2 text-[13px] sm:text-[13.5px] font-normal">
                <Link
                  to="/competitor-analysis"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Competitor analysis
                </Link>
                {/* <Link
                  to="/marketing"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Market analysis
                </Link> */}
                <Link
                  to="/marketing"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Marketing
                </Link>
                <Link
                  to="/engage"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Engage
                </Link>
                <Link
                  to="/aeo"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Aeo
                </Link>
                <Link
                  to="/seo"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Seo
                </Link>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col space-y-3">
              <span className="text-neutral-400 text-[14px] sm:text-[16px] font-normal select-none lg:invisible">
                Links
              </span>
              <div className="flex flex-col space-y-2 text-[13px] sm:text-[13.5px] font-normal">
                <Link
                  to="/contact"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  About
                </Link>
                {/* <Link
                  to="/pricing"
                  className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  Pricing
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Coirei Wordmark in Gued Font with Letter-by-Letter Reveal */}
      <div className="w-full flex justify-center items-center overflow-hidden pointer-events-none select-none -mt-4 sm:-mt-24 md:-mt-40 lg:-mt-56 -mb-4 sm:-mb-9 h-[150px] sm:h-[200px] md:h-[350px] lg:h-[550px]">
        <span
          ref={wordmarkRef}
          className="text-[40vw] sm:text-[22vw] lg:text-[39vw] leading-none text-[#161616] select-none text-center flex items-center justify-center whitespace-nowrap"
          style={{
            fontFamily: "'Gued', sans-serif",
            letterSpacing: '0.04em',
          }}
        >
          {LETTERS.map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translate3d(0, 0, 0) scale(1)'
                  : 'translate3d(0, 50px, 0) scale(0.92)',
                filter: isVisible ? 'blur(0px)' : 'blur(6px)',
                transitionDelay: isVisible
                  ? `${index * 130}ms`
                  : `${(LETTERS.length - 1 - index) * 40}ms`,
                willChange: 'opacity, transform, filter',
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
