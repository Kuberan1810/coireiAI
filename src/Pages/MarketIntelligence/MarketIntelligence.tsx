import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SeoAnimation from './components/SeoAnimation';
import AeoAnimation from './components/AeoAnimation';
import BlogAutomationShowcase from './components/BlogAutomationShowcase';
import AdPerformanceParallax from './components/AdPerformanceParallax';
import AskMarketingDataSection from './components/AskMarketingDataSection';
import {
  GOOGLE_QUERY,
  CHAT_QUERY,
  type AIEngine,
  type AnimStage,
} from './components/visibilityData';

export const MarketIntelligence: React.FC = () => {
  // Synchronized animation state across SEO and AEO cards
  const [activeEngine, setActiveEngine] = useState<AIEngine>('chatgpt');
  const [activeGoogleTab, setActiveGoogleTab] = useState('All');
  const [animStage, setAnimStage] = useState<AnimStage>('typing');
  const [typedGoogle, setTypedGoogle] = useState('');
  const [typedChat, setTypedChat] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const userInteractedRef = useRef(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Intersection observer to start/pause animation when visible in viewport
  useEffect(() => {
    const el = cardsContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Synchronized typing and automated send cycle matching Home page
  useEffect(() => {
    if (!isVisible) return;

    let isCancelled = false;
    let timerId: ReturnType<typeof setTimeout>;

    const wait = (ms: number): Promise<void> =>
      new Promise((resolve) => {
        timerId = setTimeout(() => resolve(), ms);
      });

    const engines: AIEngine[] = ['chatgpt', 'perplexity', 'gemini', 'claude'];
    let engineIdx = 0;

    const runCycle = async () => {
      while (!isCancelled) {
        if (userInteractedRef.current) {
          await wait(12000);
          if (isCancelled) return;
          userInteractedRef.current = false;
        }

        // 1. Reset to typing state
        setAnimStage('typing');
        setTypedGoogle('');
        setTypedChat('');

        const totalSteps = 40;
        const stepDelay = 32; // ~1.3s smooth typing duration

        for (let i = 1; i <= totalSteps; i++) {
          if (isCancelled || userInteractedRef.current) break;
          await wait(stepDelay);
          if (isCancelled || userInteractedRef.current) break;

          const googleChars = Math.round((i / totalSteps) * GOOGLE_QUERY.length);
          const chatChars = Math.round((i / totalSteps) * CHAT_QUERY.length);

          setTypedGoogle(GOOGLE_QUERY.slice(0, googleChars));
          setTypedChat(CHAT_QUERY.slice(0, chatChars));
        }

        if (isCancelled || userInteractedRef.current) continue;

        // 2. Sent / Trigger phase (250ms)
        setAnimStage('sent');
        await wait(250);
        if (isCancelled || userInteractedRef.current) continue;

        // 3. Move to Thinking/Searching phase (800ms)
        setAnimStage('thinking');
        await wait(800);
        if (isCancelled || userInteractedRef.current) continue;

        // 4. Move to Results phase (4200ms)
        setAnimStage('result');
        await wait(4200);
        if (isCancelled || userInteractedRef.current) continue;

        // Cycle to next engine for the next demonstration
        engineIdx = (engineIdx + 1) % engines.length;
        setActiveEngine(engines[engineIdx]);
      }
    };

    runCycle();

    return () => {
      isCancelled = true;
      clearTimeout(timerId);
    };
  }, [isVisible]);

  const handleEngineSelect = (engineKey: AIEngine) => {
    setActiveEngine(engineKey);
    userInteractedRef.current = true;
    setAnimStage('result');

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      userInteractedRef.current = false;
    }, 12000);
  };

  const handleGoogleTabSelect = (tab: string) => {
    setActiveGoogleTab(tab);
    userInteractedRef.current = true;
    setAnimStage('result');

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      userInteractedRef.current = false;
    }, 12000);
  };

  const handleInstantSearch = () => {
    userInteractedRef.current = true;
    setAnimStage('result');

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      userInteractedRef.current = false;
    }, 12000);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Sections Surface (z-20, slides up to reveal fixed black parallax screen) */}
      <div className="relative z-20 bg-white pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
      {/* Top Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-3xl sm:text-4xl md:text-[48px] leading-[1.25] sm:leading-[56px] md:leading-[65px] tracking-[-1.1px] text-center max-w-4xl mx-auto">
          <span className="text-[#0B0F19]">Turn Market Intelligence Into </span>
          <span
            className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-lg sm:rounded-xl text-white mx-1 sm:mx-1.5 align-middle shadow-xs shrink-0"
            style={{ backgroundColor: '#EB6658' }}
          >
            {/* Custom Curved Right Arrow Matching Image */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H7a4 4 0 00-4 4v1a1 1 0 11-2 0v-1a6 6 0 016-6h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-[#9CA3AF]"> Your</span>
          <span className="block text-[#9CA3AF] mt-0.5">Next Growth Opportunity.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-[15.5px] text-neutral-500 max-w-2xl mx-auto text-center leading-relaxed">
          Discover your ideal customers, understand your competitors, and uncover high-value
          opportunities with AI-powered market intelligence.
        </p>

        {/* Optimize My Presence indicator from second image */}
        {/* <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-neutral-800 hover:text-black transition-colors cursor-pointer group">
            <span>Optimize My Presence</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div> */}
      </div>

      {/* Two Comparison Cards Side-by-Side */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1240px] mx-auto mt-8 sm:mt-10"
      >
        
        {/* Card 1: SEO Card */}
        <div className="bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] border border-neutral-200/70 p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-neutral-300/80">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-[32px] md:text-[36px] font-bold text-[#0B0F19] text-center tracking-tight leading-snug">
              Be found where your<br className="hidden sm:inline" /> buyers are searching.
            </h2>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-[14px] text-neutral-500 text-center max-w-md mx-auto leading-relaxed">
              GTM helps your brand discover valuable search opportunities, understand competitor visibility, and identify content gaps that can increase organic discovery.
            </p>
          </div>

          {/* Animated Interactive SEO Box Field */}
          <div className="flex-1 flex items-center justify-center my-6 w-full">
            <SeoAnimation
              animStage={animStage}
              typedGoogle={typedGoogle}
              activeGoogleTab={activeGoogleTab}
              onTabSelect={handleGoogleTabSelect}
              onInstantSearch={handleInstantSearch}
            />
          </div>

          {/* Bottom Action Button (Links to /seo) */}
          <div className="pt-2 text-center">
            <Link
              to="/seo"
              className="cursor-pointer group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] hover:bg-black text-white px-6 sm:px-7 py-3 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
            >
              <span>Explore SEO Intelligence</span>
             
            </Link>
          </div>
        </div>

        {/* Card 2: AEO Card */}
        <div className="bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] border border-neutral-200/70 p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-neutral-300/80">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-[32px] md:text-[36px] font-bold text-[#0B0F19] text-center tracking-tight leading-snug">
              Be the answer when<br className="hidden sm:inline" /> buyers ask AI.
            </h2>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-[14px] text-neutral-500 text-center max-w-md mx-auto leading-relaxed">
              GTM helps your brand understand and improve its visibility across AI-powered search and answer engines.
            </p>
          </div>

          {/* Animated Interactive AEO Box Field */}
          <div className="flex-1 flex items-center justify-center my-6 w-full">
            <AeoAnimation
              animStage={animStage}
              typedChat={typedChat}
              activeEngine={activeEngine}
              onEngineSelect={handleEngineSelect}
              onInstantSearch={handleInstantSearch}
            />
          </div>

          {/* Bottom Action Button (Links to /aeo) */}
          <div className="pt-2 text-center">
            <Link
              to="/aeo"
              className="cursor-pointer group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] hover:bg-black text-white px-6 sm:px-7 py-3 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
            >
              <span>Explore AEO Intelligence</span>
             
            </Link>
          </div>
        </div>

      </div>

      {/* Turn your SEO and AEO Strategy Section */}
      <div className="max-w-4xl mx-auto text-center mt-24 sm:mt-32 px-4">
        <p className="text-2xl sm:text-3xl md:text-[34px] leading-snug sm:leading-[1.4] text-neutral-400 font-normal tracking-tight">
          <span className="font-semibold text-neutral-900">Turn your SEO and AEO</span>{' '}
          strategy into a powerful growth engine that helps your brand rank higher, get discovered
          faster, and reach the right audience across every search experience.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[1240px] mx-auto border-t border-neutral-100 my-16 sm:my-20" />

      {/* Channel Performance Section: Know where your message will perform */}
      <div className="max-w-[1240px] mx-auto text-left overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-neutral-950 tracking-tight leading-tight mb-8 sm:mb-10">
          Know where your message<br />will perform.
        </h2>

        {/* Carousel / Marquee Track Moving to the Left */}
        <div className="relative w-full overflow-hidden py-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Scrolling Cards Row */}
          <div
            className="flex gap-5 sm:gap-6 w-max animate-marquee"
            style={{ animationDuration: '30s' }}
          >
            {[
              {
                channel: 'LinkedIn',
                badge: 'HIGH',
                score: 85,
                line1: 'Audience engagement ↑',
                line2: 'Thought leadership & ads',
              },
              {
                channel: 'Google',
                badge: 'MEDIUM',
                score: 62,
                line1: 'Search demand ↑',
                line2: 'Performance & brand',
              },
              {
                channel: 'Email',
                badge: 'HIGH',
                score: 78,
                line1: 'Existing audience fit',
                line2: 'Nurture sequences',
              },
              {
                channel: 'Content',
                badge: 'HIGH',
                score: 91,
                line1: 'Strong information gap',
                line2: 'Comparison & guides',
              },
              {
                channel: 'AI Answers',
                badge: 'HIGH',
                score: 94,
                line1: 'Generative search citations ↑',
                line2: 'Perplexity & ChatGPT inclusion',
              },
              {
                channel: 'Community',
                badge: 'HIGH',
                score: 82,
                line1: 'High-intent buyer discussions ↑',
                line2: 'Reddit & dev forums',
              },
            ]
              .concat([
                {
                  channel: 'LinkedIn',
                  badge: 'HIGH',
                  score: 85,
                  line1: 'Audience engagement ↑',
                  line2: 'Thought leadership & ads',
                },
                {
                  channel: 'Google',
                  badge: 'MEDIUM',
                  score: 62,
                  line1: 'Search demand ↑',
                  line2: 'Performance & brand',
                },
                {
                  channel: 'Email',
                  badge: 'HIGH',
                  score: 78,
                  line1: 'Existing audience fit',
                  line2: 'Nurture sequences',
                },
                {
                  channel: 'Content',
                  badge: 'HIGH',
                  score: 91,
                  line1: 'Strong information gap',
                  line2: 'Comparison & guides',
                },
                {
                  channel: 'AI Answers',
                  badge: 'HIGH',
                  score: 94,
                  line1: 'Generative search citations ↑',
                  line2: 'Perplexity & ChatGPT inclusion',
                },
                {
                  channel: 'Community',
                  badge: 'HIGH',
                  score: 82,
                  line1: 'High-intent buyer discussions ↑',
                  line2: 'Reddit & dev forums',
                },
              ])
              .map((item, idx) => (
                <div
                  key={`${item.channel}-${idx}`}
                  className="w-[286px] h-[198px] bg-white rounded-[24px] border border-[#F0F1F3] p-5 flex flex-col justify-between shrink-0 select-none"
                  style={{
                    boxShadow:
                      '0px 2px 6px -1px rgba(0, 0, 0, 0.02), 0px 4px 20px -2px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div>
                    {/* Header: Title + Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <h3 className="text-[18px] font-semibold text-neutral-900 tracking-tight">
                        {item.channel}
                      </h3>
                      <span
                        className="inline-flex items-center justify-center font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] tracking-[0.6px] uppercase px-2.5 py-0.5 rounded-full"
                        style={{
                          color: item.badge === 'HIGH' ? '#059669' : '#D97706',
                          backgroundColor: item.badge === 'HIGH' ? '#E8F7F0' : '#FEF3C7',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-[200.59px] h-[6px] bg-[#EFF2F6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.score}%`,
                          backgroundColor: '#2563EB',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>

                    {/* Score */}
                    <div
                      className="mt-2 text-[12px] font-medium leading-none"
                      style={{ color: '#2563EB' }}
                    >
                      {item.score}% opportunity score
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="pt-2 text-left">
                    <div className="text-[12px] text-neutral-600 font-normal leading-tight">
                      {item.line1}
                    </div>
                    <div className="text-[11.5px] text-neutral-400 mt-1 leading-tight">
                      {item.line2}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[1240px] mx-auto border-t border-neutral-100 my-16 sm:my-20" />

      {/* Blog Automation Section: Create, Optimize & Publish Blogs Automatically */}
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading and Large Paragraph */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[22px] sm:text-[26px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[46.8px] tracking-[-1.56px] text-[#2F2F2F] mb-4 sm:mb-6">
              Create, Optimize &amp; Publish Blogs<br />
              Automatically
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[24px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[50px] lg:leading-[66.8px] tracking-[-1.56px] text-[#818181]">
              Coirei creates and publishes SEO optimized blogs directly to your website, keeping your content fresh, relevant, and ready to attract the right audience.
            </p>
          </div>

          {/* Right Column: 4x2 Blog Grid with Centered Floating Prompt Card (Auto typing & live generation) */}
          <div className="lg:col-span-7 flex justify-start lg:justify-end w-full">
            <BlogAutomationShowcase />
          </div>

        </div>
      </div>
      </div>

      {/* Middle: Fixed Black Ad Performance Parallax Section (z-10, does not move, revealed as top surface slides up) */}
      <AdPerformanceParallax />

      {/* Bottom Surface (z-20, slides up to cover the fixed black screen) */}
      <div className="relative z-20 bg-white px-4 sm:px-6 lg:px-8">
        <AskMarketingDataSection />

        {/* Closing CTA Section (clean white background, no gradient) */}
        <section className="w-full max-w-4xl mx-auto text-center py-20 sm:py-28 md:py-32">
          {/* Headline */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-5xl lg:text-[54px] font-semibold text-[#0D0D0D] tracking-[-1.5px] leading-[1.14] mb-4 sm:mb-5">
            Make your next campaign <br className="hidden sm:inline" />
            evidence-led.
          </h2>

          {/* Subtitle */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#64748B] leading-[26px] max-w-xl mx-auto mb-8 sm:mb-9">
            Let AI continuously monitor your market and turn meaningful signals into marketing opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-[10px] bg-[#111827] hover:bg-black text-white text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-xs active:scale-[0.99] cursor-pointer"
            >
              Start with Coirei
            </Link>
            <Link
              to="/product"
              className="px-6 py-3.5 rounded-[10px] bg-white hover:bg-neutral-50 border border-[#E2E8F0] text-[#0F172A] text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-2xs active:scale-[0.99] cursor-pointer"
            >
              Explore the Platform
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketIntelligence;
