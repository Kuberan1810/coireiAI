import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Rocket,
  ArrowUpRight,
  Check,
  Info 
} from 'lucide-react';

import amongManyPng from '../../assets/startups/Amongmany.png';
import standApartPng from '../../assets/startups/StandApart.png';
import startupUnlockedPng from '../../assets/startups/StartupUnlocked.png';
import ciLogoStartupProg from '../../assets/startups/Ciforstartupprogram.svg';
import startupCommunityImg from '../../assets/startups/startup_community.png';
import redSquaresPng from '../../assets/startups/redsquares.png';
import purpleBgPng from '../../assets/startups/purplebg.png';
import lastGradientPng from '../../assets/startups/lastgradiend.png';
import coireiLogo from '../../assets/logo/coireiLogo.png';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who can apply for the Coirei Startup Program?",
    answer: "Any venture-backed, angel-funded, or bootstrapped tech startup founded within the last 5 years with under $5M in total funding is eligible to apply for up to 90% platform credits in Year 1."
  },
  {
    question: "What benefits are available to eligible startups?",
    answer: "Eligible startups receive platform credits (up to 90% off), full access to Coirei's AI-powered GTM intelligence suite, marketing tools, and founder community perks."
  },
  {
    question: "Is the program free?",
    answer: "Applying to the Coirei Startup Program is completely free. If accepted, you will receive substantial platform discounts and credit grants towards all features."
  },
  {
    question: "How long does the application review take?",
    answer: "Our team reviews applications on a rolling basis. You will typically hear back from our startup partnerships team within 24 to 48 business hours."
  },
  {
    question: "What happens after my application is approved?",
    answer: "Once approved, you'll receive a welcome email with instructions to activate your tier benefits, access your workspace, and begin exploring."
  },
  {
    question: "Can an existing Coirei customer apply?",
    answer: "Yes! Existing customers who meet the early-stage criteria and have not previously utilized startup program credits are eligible to apply."
  }
];

export const Startups: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  // Scroll progress from 0.0 to 1.0 within the pinned section
  const [scrollProgress, setScrollProgress] = useState(0);

  // The header remains completely transparent until the image section ends
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  // Inline Application Form state
  const [applyForm, setApplyForm] = useState({
    founderName: '',
    workEmail: '',
    companyName: '',
    companyWebsite: '',
    startupStage: '',
    industry: '',
    teamSize: '',
    growthChallenge: '',
    description: '',
  });
  const [isApplySubmitted, setIsApplySubmitted] = useState(false);

  // Application Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    startupName: '',
    website: '',
    founderName: '',
    email: '',
    fundingStage: 'Pre-Seed',
    targetAudience: ''
  });

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Track scroll within the hero track
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      animId = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableDist = container.offsetHeight - window.innerHeight;

        if (scrollableDist > 0) {
          const currentScroll = -rect.top;
          const progress = Math.min(Math.max(currentScroll / scrollableDist, 0), 1);
          setScrollProgress(progress);
        }

        // Header remains transparent throughout the entire image hero
        const isPastHero = rect.bottom <= 80;
        setIsNavScrolled(isPastHero);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Compute opacities for seamless image cross-fading
  // Stage 0: 0.00 - 0.33 ("Among Many")
  // Stage 1: 0.33 - 0.66 ("Stand Apart")
  // Stage 2: 0.66 - 1.00 ("Startup Unlocked")
  const { opacity0, opacity1, opacity2 } = useMemo(() => {
    const p = scrollProgress;

    let op0 = 0;
    let op1 = 0;
    let op2 = 0;

    if (p <= 0.28) {
      op0 = 1;
      op1 = 0;
      op2 = 0;
    } else if (p < 0.40) {
      const t = (p - 0.28) / 0.12;
      op0 = 1 - t;
      op1 = t;
      op2 = 0;
    } else if (p <= 0.60) {
      op0 = 0;
      op1 = 1;
      op2 = 0;
    } else if (p < 0.72) {
      const t = (p - 0.60) / 0.12;
      op0 = 0;
      op1 = 1 - t;
      op2 = t;
    } else {
      op0 = 0;
      op1 = 0;
      op2 = 1;
    }

    return { opacity0: op0, opacity1: op1, opacity2: op2 };
  }, [scrollProgress]);

  const scrollToWhatIs = () => {
    whatIsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
      }, 2000);
    }, 600);
  };

  return (
    <div className="w-full bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-sky-200">
      
      {/* 1. TOP NAVBAR (100% transparent, borderless, matching exact Figma design) */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 sm:px-12 flex items-center justify-between border-0 transition-colors duration-500 ease-out ${
          isNavScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-xs' 
            : 'bg-transparent shadow-none'
        }`}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src={coireiLogo}
            alt="coirei"
            className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
        </Link>

        {/* Center / Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[14.5px] font-medium text-neutral-800">
          <Link to="/" className="hover:text-black transition-colors">
            API Docs
          </Link>
          <Link to="/pricing" className="hover:text-black transition-colors">
            Pricing
          </Link>
          <div className="group relative cursor-pointer flex items-center gap-1.5 py-2 hover:text-black transition-colors">
            <span>Case Studies</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500 transition-transform group-hover:rotate-180" />
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-xl border-0 py-2 w-48 text-xs text-neutral-600">
              <Link to="/about" className="block px-4 py-2 hover:bg-neutral-50 hover:text-black">Fintech Scaleups</Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-neutral-50 hover:text-black">AI SaaS Leaders</Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-neutral-50 hover:text-black">Enterprise Growth</Link>
            </div>
          </div>
          <div className="group relative cursor-pointer flex items-center gap-1.5 py-2 hover:text-black transition-colors">
            <span>Resources</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500 transition-transform group-hover:rotate-180" />
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-xl border-0 py-2 w-48 text-xs text-neutral-600">
              <Link to="/marketing" className="block px-4 py-2 hover:bg-neutral-50 hover:text-black">Market Reports</Link>
              <Link to="/seo" className="block px-4 py-2 hover:bg-neutral-50 hover:text-black">SEO Playbooks</Link>
              <Link to="/aeo" className="block px-4 py-2 hover:bg-neutral-50 hover:text-black">AEO Search Guide</Link>
            </div>
          </div>
        </nav>

        {/* Right Action: Log in Pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[13.5px] px-5 py-2 rounded-full shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
          >
            Log in
          </button>
        </div>
      </header>

      {/* 2. PINNED SCROLL HERO SECTION (Full-bleed edge-to-edge image, zero borders) */}
      <section 
        ref={containerRef} 
        data-custom-padding
        className="relative w-full h-[320vh] border-0"
      >
        {/* Sticky 100vh Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between border-0">
          
          {/* EDGE-TO-EDGE FULL BLEED IMAGES (Zero borders on left, right, top, or bottom) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden border-0">
            {/* Stage 1: Among Many */}
            <img
              src={amongManyPng}
              alt="Among Many"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out will-change-[opacity] border-0"
              style={{ 
                opacity: opacity0,
                objectPosition: 'center 28%'
              }}
            />

            {/* Stage 2: Stand Apart */}
            <img
              src={standApartPng}
              alt="Stand Apart"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out will-change-[opacity] border-0"
              style={{ 
                opacity: opacity1,
                objectPosition: 'center 28%'
              }}
            />

            {/* Stage 3: Startup Unlocked */}
            <img
              src={startupUnlockedPng}
              alt="Startup Unlocked"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out will-change-[opacity] border-0"
              style={{ 
                opacity: opacity2,
                objectPosition: 'center 28%'
              }}
            />
          </div>

          {/* Top spacer for navbar */}
          <div className="h-20 w-full shrink-0 pointer-events-none" />

          {/* DESKTOP HERO TEXT: EXACT FIGMA MEASUREMENTS & GAP */}
          {/* Left word: Left 240px, Top 170px | Right word: Left 727px, Top 222px */}
          {/* Font: Plus Jakarta Sans ExtraBold (800), 128px, Color: #3F3F3F, Line height: 100% */}
          <div className="hidden md:block absolute inset-0 w-full max-w-[1440px] mx-auto h-full pointer-events-none border-0">
            
            {/* Stage 0: "Among" & "Many" */}
            <div 
              className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out will-change-[opacity]"
              style={{ opacity: opacity0, visibility: opacity0 > 0.01 ? 'visible' : 'hidden' }}
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

            {/* Stage 1: "Stand" & "Apart" (33px gap, 28px vertical offset from Figma) */}
            <div 
              className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out will-change-[opacity]"
              style={{ opacity: opacity1, visibility: opacity1 > 0.01 ? 'visible' : 'hidden' }}
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

            {/* Stage 2: "Startup" & "Unlocked" */}
            <div 
              className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out will-change-[opacity]"
              style={{ opacity: opacity2, visibility: opacity2 > 0.01 ? 'visible' : 'hidden' }}
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
            </div>

            {/* Stage 2 Buttons & Quote positioned cleanly in open sky (no overlap with subject) */}
            <div
              className="absolute inset-0 w-full h-full transition-all duration-500 ease-out pointer-events-none"
              style={{ opacity: opacity2 }}
            >
              {/* Left Button: Apply for Benefits ↗ (Figma: Left 287.43px, 155.16x36, r:6px, p:8px 12px, rot:2deg, #111827) */}
              <div 
                className="absolute pointer-events-auto"
                style={{
                  left: 'calc(287 / 1440 * 100%)',
                  top: 'clamp(320px, 46vh, 430px)',
                }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="h-[36px] px-[12px] py-[8px] rounded-[6px] bg-[#111827] hover:bg-black text-white text-[13.5px] font-medium inline-flex items-center gap-1.5 shadow-md border-0 cursor-pointer transform rotate-[2deg] hover:rotate-0 transition-transform duration-200"
                >
                  <span>Apply for Benefits</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
                </button>
              </div>

              {/* Right Button: Explore Benefits (Figma: 130.87x38, r:6px, p:8px 12px, #FFFFFF) */}
              <div 
                className="absolute pointer-events-auto"
                style={{
                  left: 'calc(840 / 1440 * 100%)',
                  top: 'clamp(320px, 46vh, 430px)',
                }}
              >
                <button
                  onClick={scrollToWhatIs}
                  className="h-[38px] px-[12px] py-[8px] rounded-[6px] bg-white hover:bg-neutral-50 text-[#1E293B] border-0 text-[13.5px] font-medium inline-flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] cursor-pointer transition-colors"
                >
                  Explore Benefits
                </button>
              </div>

              {/* Quote on right below Explore Benefits */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: 'calc(840 / 1440 * 100%)',
                  top: 'clamp(390px, 55vh, 510px)',
                  maxWidth: '360px',
                }}
              >
                <p className="text-[14px] sm:text-[15px] font-normal leading-relaxed text-[#232F3E]">
                  “Give your startup the intelligence to understand your market, find the right customers, and build a smarter growth strategy”
                </p>
              </div>
            </div>

          </div>

          {/* MOBILE HERO TEXT (< md) */}
          <div className="md:hidden relative z-10 w-full px-6 pt-24 text-center pointer-events-none">
            {/* Stage 0 */}
            <div style={{ display: opacity0 > 0.01 ? 'block' : 'none', opacity: opacity0 }}>
              <div className="text-[44px] font-extrabold text-[#3F3F3F] leading-none font-['Plus_Jakarta_Sans',sans-serif]">
                Among Many
              </div>
            </div>
            {/* Stage 1 */}
            <div style={{ display: opacity1 > 0.01 ? 'block' : 'none', opacity: opacity1 }}>
              <div className="text-[44px] font-extrabold text-[#3F3F3F] leading-none font-['Plus_Jakarta_Sans',sans-serif]">
                Stand Apart
              </div>
            </div>
            {/* Stage 2 */}
            <div style={{ display: opacity2 > 0.01 ? 'block' : 'none', opacity: opacity2 }}>
              <div className="text-[44px] font-extrabold text-[#3F3F3F] leading-none font-['Plus_Jakarta_Sans',sans-serif]">
                Startup Unlocked
              </div>
              <div className="mt-8 flex flex-col gap-3 items-center pointer-events-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full max-w-xs h-[38px] inline-flex items-center justify-center gap-1.5 bg-[#111827] text-white text-[13px] font-medium px-4 py-2 rounded-[6px] shadow-md border-0 cursor-pointer"
                >
                  <span>Apply for Benefits</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={scrollToWhatIs}
                  className="w-full max-w-xs h-[38px] inline-flex items-center justify-center bg-white text-[#1E293B] text-[13px] font-medium px-4 py-2 rounded-[6px] shadow-sm border-0 cursor-pointer"
                >
                  Explore Benefits
                </button>
                <p className="text-xs text-[#232F3E] max-w-xs mt-3 leading-relaxed">
                  “Give your startup the intelligence to understand your market, find the right customers, and build a smarter growth strategy”
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: "What Is Coirei for Startups" */}
      <section 
        ref={whatIsRef}
        id="what-is-coirei"
        data-custom-padding
        className="relative z-30 w-full bg-white px-6 sm:px-8 lg:px-12 text-center border-0"
        style={{ paddingTop: '111px', paddingBottom: '111px' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Logo Badge */}
          <div className="relative select-none mb-6">
            <img
              src={ciLogoStartupProg}
              alt="Coirei for Startups Logo"
              className="relative w-28 sm:w-32 md:w-36 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] border-0"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0F172A] tracking-[-0.02em] leading-tight mb-5">
            What Is Coirei for Startups
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="max-w-[760px] text-neutral-600 text-base sm:text-[17px] md:text-[18px] leading-relaxed font-normal">
            Coirei for Startups is a dedicated program designed to help early-stage startups grow smarter with exclusive benefits and access to Coirei's AI-powered GTM intelligence and marketing platform.
          </p>
        </div>
      </section>

      {/* 3.1. BLUE BANNER: "THE STARTUP COMMUNITY" (Exact Figma recreation) */}
      <section 
        data-custom-padding
        className="relative z-30 w-full bg-[#4A7DFF] py-16 lg:py-20 px-6 sm:px-10 lg:px-16 border-0"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14">
          
          {/* Left Photo with clean rounded card shape */}
          <div className="w-full md:w-[400px] lg:w-[440px] shrink-0">
            <img
              src={startupCommunityImg}
              alt="The Startup Community"
              className="w-full h-auto object-cover rounded-3xl shadow-xl border-0 block"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-left flex flex-col items-start text-white">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#DCE7FE]">
              The Startup Community
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-[-0.02em] leading-[1.18] mt-3 mb-4">
              Great things happen when startups connect.
            </h3>
            <p className="text-white/90 text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-xl">
              Connect with ambitious founders, exchange ideas, discover new opportunities, and build meaningful relationships to accelerate your startup's growth.
            </p>
            <div className="mt-7">
              <button
                onClick={scrollToBenefits}
                className="h-[36px] px-[12px] py-[8px] rounded-[6px] bg-white text-[#3562FF] font-medium text-[13.5px] inline-flex items-center gap-1.5 shadow-xs hover:bg-neutral-50 transition-colors cursor-pointer border-0"
              >
                <span>Explore Startup Benefits</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3562FF]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION: "What You Can Do with Coirei" (Exact Figma gap: 111px) */}
      <section 
        ref={benefitsRef} 
        data-custom-padding
        className="w-full bg-white px-6 sm:px-10 lg:px-16 border-0"
        style={{ paddingTop: '111px', paddingBottom: '111px' }}
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Header: Left title, Right description (Figma: 814px, 32px Medium, 100% line height, #000000) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10 mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-black tracking-[-0.01em] leading-[1.15] shrink-0 max-w-[260px]">
              What You Can Do with Coirei
            </h3>
            <p className="text-[22px] sm:text-[26px] lg:text-[32px] text-black font-medium leading-[1.18] max-w-[814px] tracking-tight">
              Coirei helps startups understand their market, discover customers, analyze competitors, and unlock growth opportunities with AI-powered research and marketing tools.
            </p>
          </div>

          {/* 4 Feature Cards (Figma: 295px x 230px, Text: 272px x 90px, 24px Medium, #FFFFFF) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 justify-center">
            
            {/* Card 1: Dark Reflective Gradient */}
            <div 
              className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none border border-neutral-800/10"
              style={{
                background: 'linear-gradient(135deg, #666A72 0%, #4D5057 52%, #2F3136 53%, #222427 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Understand market trends and uncover growth opportunities.
              </p>
            </div>

            {/* Card 2: Red Squares Pattern */}
            <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none bg-neutral-100">
              <img
                src={redSquaresPng}
                alt="Competitor Analysis Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.3] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Analyze competitors and uncover market opportunities.
              </p>
            </div>

            {/* Card 3: Purple Wave Gradient */}
            <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none bg-neutral-100">
              <img
                src={purpleBgPng}
                alt="Audience Discovery Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.25] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Discover your ideal audience and qualified leads.
              </p>
            </div>

            {/* Card 4: Last Gradient (Red/Purple Fluted) */}
            <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none bg-neutral-100">
              <img
                src={lastGradientPng}
                alt="Campaigns Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.25] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Launch targeted campaigns and drive measurable growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION: "WHO CAN APPLY" (Exact Figma recreation from inspector specs) */}
      <section 
        data-custom-padding
        className="w-full bg-[#FBFBFB] border-0"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Column (Figma width: ~492px) */}
          <div className="w-full lg:w-[492px] shrink-0 flex flex-col items-start text-left">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-neutral-400">
              WHO CAN APPLY
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.15] mt-3.5 mb-5">
              Designed for teams building what comes next.
            </h3>
            <p className="text-neutral-500 text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[440px] mb-8">
              The Coirei Startup Program is intended for eligible early-stage businesses looking to accelerate their market understanding and growth.
            </p>
            
            {/* Pill note (Figma: 492.67px Fill x 50.67px Hug, r:8px, p:16px, gap:12px, #FFFFFF) */}
            <div className="w-full max-w-[492.67px] min-h-[50.67px] rounded-[8px] bg-[#FFFFFF] px-[16px] py-[12px] flex items-center gap-[12px] text-[13px] text-neutral-600 shadow-xs border border-neutral-100">
              <Info className="w-4 h-4 text-neutral-400 shrink-0" />
              <span className="leading-snug">Program eligibility and final benefits are subject to Coirei's review and approval.</span>
            </div>
          </div>

          {/* Right Column: Card Container (Figma: r:8px, p:16px, gap:12px, #FFFFFF) */}
          <div className="w-full lg:flex-1 max-w-[667px]">
            <div className="w-full bg-[#FFFFFF] rounded-[8px] p-[16px] flex flex-col gap-[12px] shadow-xs border border-neutral-100/60">
              {[
                "Early-stage startup or growing technology business",
                "Valid company website or product landing page",
                "Business email address (no personal webmail)",
                "Clear product, service, or business offering",
                "Willingness to complete the startup verification process"
              ].map((text, idx) => (
                /* Checklist row: Fill 635.33px x Hug 60px, r:8px, p:14px, gap:16px, #F9F9F9 */
                <div 
                  key={idx}
                  className="w-full min-h-[60px] bg-[#F9F9F9] hover:bg-[#F3F4F6] transition-colors rounded-[8px] px-[16px] py-[14px] flex items-center gap-[16px]"
                >
                  <Check className="w-4 h-4 text-neutral-400 shrink-0 stroke-[2.2]" />
                  <span className="text-[14.5px] sm:text-[15px] font-medium text-[#1E293B] leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION: "GET STARTED" - Four steps from application to activation */}
      <section 
        data-custom-padding
        className="w-full bg-white px-6 sm:px-10 lg:px-16 border-0 text-center"
        style={{ paddingTop: '111px', paddingBottom: '111px' }}
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-neutral-400 block mb-3">
              GET STARTED
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-[-0.02em] leading-tight mb-4">
              Four steps from application to activation.
            </h3>
            <p className="text-neutral-500 text-[15px] sm:text-[16px] font-normal leading-relaxed">
              Simple, rapid verification designed to get your team building with high-velocity telemetry in days.
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-left">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Share your startup and business details through the application form."
              },
              {
                step: "02",
                title: "Verification",
                desc: "Coirei reviews your company information and eligibility criteria."
              },
              {
                step: "03",
                title: "Approval",
                desc: "Receive confirmation of your application and the applicable program benefits."
              },
              {
                step: "04",
                title: "Activate",
                desc: "Follow the onboarding instructions to activate your approved benefits and start exploring."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="text-5xl sm:text-6xl font-bold text-neutral-300 leading-none mb-4 select-none tracking-tight">
                  {item.step}
                </span>
                <h4 className="text-[19px] sm:text-[20px] font-bold text-[#0F172A] tracking-tight mb-2.5">
                  {item.title}
                </h4>
                <p className="text-neutral-500 text-[14px] sm:text-[14.5px] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECTION: "APPLY TO THE COIREI STARTUP PROGRAM" (Exact Figma Dark Form) */}
      <section 
        id="apply-form-section"
        data-custom-padding
        className="w-full bg-[#000000] text-white px-6 sm:px-10 lg:px-16 border-0 text-center"
        style={{ paddingTop: '100px', paddingBottom: '110px' }}
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-3">
              YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.02em] leading-tight mb-4">
              Apply to the Coirei Startup Program.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-[15.5px] font-normal leading-relaxed">
              Tell us about your startup. Our team will review your application and contact you regarding eligibility and next steps.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 shadow-2xl max-w-[680px] mx-auto text-left text-[#0F172A]">
            {isApplySubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                  Application Received!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying to the Coirei Startup Program. Our team is reviewing your details and will contact you at <span className="font-semibold text-black">{applyForm.workEmail}</span> within 24 to 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsApplySubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
                  {/* Founder name */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Founder or applicant name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Elena Vance"
                      value={applyForm.founderName}
                      onChange={(e) => setApplyForm({...applyForm, founderName: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="elena@company.com"
                      value={applyForm.workEmail}
                      onChange={(e) => setApplyForm({...applyForm, workEmail: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                    <span className="block text-[11px] text-neutral-400 mt-1">
                      Business domain required (no webmail).
                    </span>
                  </div>

                  {/* Company name */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Company name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Vance Intelligence Inc."
                      value={applyForm.companyName}
                      onChange={(e) => setApplyForm({...applyForm, companyName: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                  </div>

                  {/* Company website */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Company website <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="url"
                      required
                      placeholder="https://vanceintel.ai"
                      value={applyForm.companyWebsite}
                      onChange={(e) => setApplyForm({...applyForm, companyWebsite: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                  </div>

                  {/* Startup stage */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Startup stage <span className="text-red-500">*</span>
                    </label>
                    <select 
                      required
                      value={applyForm.startupStage}
                      onChange={(e) => setApplyForm({...applyForm, startupStage: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select funding stage</option>
                      <option value="Bootstrapped">Bootstrapped</option>
                      <option value="Pre-Seed">Pre-Seed</option>
                      <option value="Seed">Seed</option>
                      <option value="Series A">Series A</option>
                      <option value="Series B+">Series B+</option>
                    </select>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select 
                      required
                      value={applyForm.industry}
                      onChange={(e) => setApplyForm({...applyForm, industry: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select sector</option>
                      <option value="AI / Machine Learning">AI / Machine Learning</option>
                      <option value="B2B SaaS">B2B SaaS</option>
                      <option value="Fintech">Fintech</option>
                      <option value="Developer Tools">Developer Tools</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Team size */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Team size <span className="text-red-500">*</span>
                    </label>
                    <select 
                      required
                      value={applyForm.teamSize}
                      onChange={(e) => setApplyForm({...applyForm, teamSize: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select team count</option>
                      <option value="1-5">1 - 5</option>
                      <option value="6-15">6 - 15</option>
                      <option value="16-50">16 - 50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>

                  {/* Primary growth challenge */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Primary growth challenge <span className="text-red-500">*</span>
                    </label>
                    <select 
                      required
                      value={applyForm.growthChallenge}
                      onChange={(e) => setApplyForm({...applyForm, growthChallenge: e.target.value})}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select key focus area</option>
                      <option value="Finding ICP & Leads">Finding ICP & Leads</option>
                      <option value="Competitor Tracking">Competitor Tracking</option>
                      <option value="SEO & AEO Visibility">SEO & AEO Visibility</option>
                      <option value="Market Demand Signals">Market Demand Signals</option>
                      <option value="GTM Execution">GTM Execution</option>
                    </select>
                  </div>
                </div>

                {/* Brief description */}
                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                    Brief description of the company <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="What are you building and who are your initial customers?"
                    value={applyForm.description}
                    onChange={(e) => setApplyForm({...applyForm, description: e.target.value})}
                    className="w-full bg-[#F9F9F9] rounded-[8px] p-3.5 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-[8px] bg-[#E5E7EB] hover:bg-neutral-300 text-neutral-800 font-medium text-[14.5px] transition-colors cursor-pointer border-0"
                >
                  Submit Application →
                </button>

                {/* Disclaimer */}
                <p className="text-[11.5px] text-neutral-400 text-center mt-4 leading-relaxed max-w-lg mx-auto">
                  By submitting this application, you agree to the applicable privacy policy and understand that submission does not guarantee program acceptance.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 8. SECTION: "QUESTIONS BEFORE YOU APPLY?" (Exact Figma Accordion) */}
      <section 
        data-custom-padding
        className="w-full bg-white px-6 sm:px-8 border-0"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Questions before you apply?
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#F9FAFB] hover:bg-neutral-100/70 rounded-xl border-0 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between font-semibold text-[15px] sm:text-[15.5px] text-[#0F172A] cursor-pointer border-0"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-0">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. SECTION: FINAL BOTTOM CTA CARD (Exact Figma recreation) */}
      <section 
        data-custom-padding
        className="w-full bg-white px-6 sm:px-10 lg:px-16 border-0"
        style={{ paddingTop: '40px', paddingBottom: '110px' }}
      >
        <div className="max-w-[1240px] mx-auto bg-[#F9FAFB] rounded-[32px] px-6 sm:px-12 py-16 sm:py-20 text-center border border-neutral-100">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0F172A] tracking-[-0.02em] leading-tight max-w-2xl mx-auto mb-4">
            Your next stage of growth starts with better intelligence.
          </h2>
          <p className="text-neutral-500 text-sm sm:text-[16px] max-w-xl mx-auto mb-9 font-normal">
            Understand your market, find your opportunities, and build your next move with Coirei.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => {
                document.getElementById('apply-form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#0F172A] font-medium text-[13.5px] px-5 py-2.5 rounded-[8px] shadow-xs border border-neutral-200/60 transition-colors cursor-pointer"
            >
              <span>Apply for Startup Benefits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              to="/about"
              className="text-neutral-500 hover:text-black font-medium text-[13.5px] px-4 py-2.5 transition-colors"
            >
              Explore Coirei
            </Link>
          </div>
        </div>
      </section>

      {/* 8. APPLICATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1.5 rounded-full hover:bg-neutral-100 transition-colors border-0"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Application Received!</h3>
                <p className="text-neutral-600 text-sm max-w-sm">
                  Thank you! Our startup partnerships team will review your application and send your credits voucher within 24-48 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider mb-1">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>Fast-Track Application</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Apply for Coirei for Startups
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                    Fill in your details below to claim up to 90% platform credits.
                  </p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Startup / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme AI"
                      value={formData.startupName}
                      onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Company Website *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Funding Stage
                      </label>
                      <select
                        value={formData.fundingStage}
                        onChange={(e) => setFormData({ ...formData, fundingStage: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black bg-white"
                      >
                        <option value="Bootstrapped">Bootstrapped</option>
                        <option value="Pre-Seed">Pre-Seed</option>
                        <option value="Seed">Seed ($500k - $2M)</option>
                        <option value="Series A">Series A</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Founder Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.founderName}
                        onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Who are your target customers?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. B2B SaaS heads of sales, enterprise marketing leads"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-sm py-3 rounded-xl shadow-md border-0 transition-colors cursor-pointer"
                    >
                      Submit Application
                    </button>
                    <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                      No credit card required. Free tier access granted upon verification.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Startups;
