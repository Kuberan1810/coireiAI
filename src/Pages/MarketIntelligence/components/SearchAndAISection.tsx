import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  ArrowUp,
  Bookmark,
  ChevronRight,
} from 'lucide-react';

// Brand & Engine Icons
const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.41 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.59 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.5045 4.5045 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4947 4.4947 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4997 4.4997 0 0 1 6.1802 2.1812zm-9.2882 4.2541l2.7582-1.5878 2.7582 1.5878v3.1756l-2.7582 1.5878-2.7582-1.5878z" />
  </svg>
);

const PerplexityIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.2 2v7.2L19.5 4l1.2 1.2-5.9 6.8H22v1.7h-7.2l5.9 6.8-1.2 1.2-6.3-5.2V22h-2.4v-7.2L4.5 20l-1.2-1.2 5.9-6.8H2v-1.7h7.2L3.3 3.5l1.2-1.2 6.3 5.2V2h2.4z" />
  </svg>
);

const GeminiIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
  </svg>
);

const ClaudeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a1 1 0 0 1 1 1v7.2l5.1-5.1a1 1 0 1 1 1.4 1.4L14.4 11.6l7.2.4a1 1 0 1 1 0 2l-7.2-.4 5.1 5.1a1 1 0 1 1-1.4 1.4L13 14.8V22a1 1 0 1 1-2 0v-7.2l-5.1 5.1a1 1 0 1 1-1.4-1.4l5.1-5.1-7.2-.4a1 1 0 1 1 0-2l7.2.4-5.1-5.1a1 1 0 1 1 1.4-1.4L11 10.2V3a1 1 0 0 1 1-1z" />
  </svg>
);

type AIEngine = 'chatgpt' | 'perplexity' | 'gemini' | 'claude';
type AnimStage = 'typing' | 'sent' | 'thinking' | 'result';

interface EngineConfig {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  response: React.ReactNode;
}

const GOOGLE_QUERY = 'best CRM for small business';
const CHAT_QUERY = 'what is the best CRM for small businesses?';

const AI_ENGINES: Record<AIEngine, EngineConfig> = {
  chatgpt: {
    name: 'ChatGPT',
    icon: ChatGPTIcon,
    color: 'text-black',
    response: (
      <>
        For small businesses, <strong className="text-slate-900 font-semibold">YourBrand</strong> is a great CRM choice. It offers easy lead management, automation for follow-ups, and helps you close more deals — all in one platform.
      </>
    ),
  },
  perplexity: {
    name: 'Perplexity',
    icon: PerplexityIcon,
    color: 'text-[#20B2AA]',
    response: (
      <>
        Based on user ratings and workflow depth, <strong className="text-slate-900 font-semibold">YourBrand</strong> stands out for growing teams with intuitive pipeline automation and fast time-to-value.
      </>
    ),
  },
  gemini: {
    name: 'Gemini',
    icon: GeminiIcon,
    color: 'text-[#4E82EE]',
    response: (
      <>
        <strong className="text-slate-900 font-semibold">YourBrand</strong> is frequently ranked as a top CRM for small businesses, combining intelligent follow-ups with seamless contact enrichment.
      </>
    ),
  },
  claude: {
    name: 'Claude',
    icon: ClaudeIcon,
    color: 'text-[#D97706]',
    response: (
      <>
        After analyzing solutions for modern small teams, <strong className="text-slate-900 font-semibold">YourBrand</strong> offers the ideal balance of actionable sales tracking, automated outreach, and reliability.
      </>
    ),
  },
};

export const SearchAndAISection: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<AIEngine>('chatgpt');
  const [activeGoogleTab, setActiveGoogleTab] = useState('All');
  const [animStage, setAnimStage] = useState<AnimStage>('typing');
  const [typedGoogle, setTypedGoogle] = useState('');
  const [typedChat, setTypedChat] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const userInteractedRef = useRef(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Trigger animation when the section enters the viewport
  useEffect(() => {
    const el = sectionRef.current;
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

  // Synchronized typing and automated send cycle
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
        const stepDelay = 32;

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

        // 2. Sent phase
        setAnimStage('sent');
        await wait(250);
        if (isCancelled || userInteractedRef.current) continue;

        // 3. Thinking phase
        setAnimStage('thinking');
        await wait(800);
        if (isCancelled || userInteractedRef.current) continue;

        // 4. Results phase
        setAnimStage('result');
        await wait(4200);
        if (isCancelled || userInteractedRef.current) continue;

        // Cycle to next engine
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
    <div ref={sectionRef} className="w-full">
      {/* 4. GET FOUND ON SEARCH. GET CITED BY AI. SECTION */}
      <div className="max-w-4xl mx-auto text-center mt-20 sm:mt-28 mb-12 sm:mb-16 px-4">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl md:text-[46px] font-bold text-[#0D0D0D] tracking-tight leading-tight mb-4">
          Get Found on Search. Get Cited by AI.
        </h2>
        <p className="font-['Manrope',sans-serif] text-sm sm:text-base md:text-[17px] text-[#71717A] max-w-2xl mx-auto leading-relaxed">
          Improve your search rankings with SEO and help AI platforms discover, understand, and cite your content with AEO.
        </p>
      </div>

      {/* DUAL SHOWCASE CARDS (FIGMA SPECIFICATIONS) */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch px-4 sm:px-6 lg:px-8">

        {/* LEFT CARD: SEO SEARCH VISIBILITY */}
        <div className="w-full bg-[#F4F5F6] rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          {/* Card Title & Description */}
          <div className="text-center mb-6">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0D0D0D] tracking-tight leading-[1.2] mb-3">
              Be found where your<br />buyers are searching.
            </h3>
            <p className="font-['Manrope',sans-serif] text-[13px] sm:text-[14px] text-[#71717A] max-w-[420px] mx-auto leading-relaxed">
              GTM helps your brand discover valuable search opportunities, understand competitor visibility, and identify content gaps that can increase organic discovery.
            </p>
          </div>

          {/* Pill Badge: SEO */}
          <div className="flex items-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/80 text-[11.5px] font-semibold text-gray-700 shadow-2xs">
              <Search className="w-3.5 h-3.5 text-gray-600" />
              <span>SEO</span>
            </span>
          </div>

          {/* Google Mockup Card */}
          <div className="w-full bg-white rounded-[18px] sm:rounded-[20px] border border-gray-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] p-4 sm:p-6 flex flex-col justify-start min-h-[350px]">
            {/* Search Input Bar */}
            <div
              onClick={handleInstantSearch}
              className="w-full rounded-full border border-gray-200 bg-white px-3.5 py-2 sm:py-2.5 flex items-center justify-between shadow-2xs hover:shadow-xs transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden flex-1">
                <GoogleGIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-[12.5px] sm:text-[13.5px] text-gray-800 font-normal truncate">
                  {animStage === 'typing' ? (
                    <>
                      {typedGoogle}
                      <span className="inline-block w-0.5 h-4 bg-blue-600 animate-pulse ml-0.5 align-middle" />
                    </>
                  ) : (
                    GOOGLE_QUERY
                  )}
                </span>
              </div>
              <Search
                className={`w-4 h-4 shrink-0 transition-colors ${
                  animStage === 'sent' || animStage === 'thinking' ? 'text-blue-600 animate-pulse' : 'text-gray-400'
                }`}
              />
            </div>

            {/* Google Tabs */}
            <div className="flex items-center border-b border-gray-100 pb-2 px-1 text-[11.5px] sm:text-[12px] text-gray-500 font-medium select-none mt-3.5">
              <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {['All', 'Images', 'Videos', 'News', 'Shopping', 'Web'].map((tab) => {
                  const isActive = activeGoogleTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => handleGoogleTabSelect(tab)}
                      className={`font-medium relative pb-2 -mb-[9px] whitespace-nowrap cursor-pointer transition-colors ${
                        isActive
                          ? 'text-[#1A73E8] border-b-2 border-[#1A73E8] font-semibold'
                          : 'text-gray-500 hover:text-gray-800 border-b-2 border-transparent'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Google Results Area */}
            <div className="flex-1 flex flex-col justify-start mt-3">
              {animStage === 'typing' ? (
                <div className="flex-1 flex items-center justify-center text-gray-400 text-xs sm:text-[13px] py-10">
                  <span className="opacity-60">Ready to search...</span>
                </div>
              ) : animStage === 'sent' || animStage === 'thinking' ? (
                <div className="flex-1 flex items-center justify-center gap-2 text-gray-500 text-[13px] py-10 animate-in fade-in duration-200">
                  <span>Searching</span>
                  <span className="flex items-center gap-1.5 ml-0.5">
                    <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '180ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '360ms' }} />
                  </span>
                </div>
              ) : (
                /* Primary Result Snippet (No outline, clean flat soft background) */
                <div className="w-full bg-[#F8F9FA] rounded-[14px] p-4 shadow-2xs animate-slide-down">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-6 h-6 rounded-md bg-[#0D1117] flex items-center justify-center text-white shrink-0">
                      <Bookmark className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-gray-900 leading-tight">yourbrand.com</div>
                      <div className="text-[10px] text-gray-400 leading-tight">https://www.yourbrand.com</div>
                    </div>
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#1A0DAB] hover:underline cursor-pointer leading-snug mb-1">
                    The Best CRM for Small Business | YourBrand
                  </h4>
                  <p className="text-[11.5px] text-[#4D5156] leading-relaxed">
                    Simple, powerful and built for growth. YourBrand helps small businesses manage leads, automate follow-ups and close more deals.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Button */}
          <div className="pt-6 flex justify-center">
            <Link
              to="/seo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-[13px] font-medium transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>Explore SEO Intelligence</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT CARD: AEO AI ANSWER VISIBILITY */}
        <div className="w-full bg-[#F4F5F6] rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          {/* Card Title & Description */}
          <div className="text-center mb-6">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0D0D0D] tracking-tight leading-[1.2] mb-3">
              Be the answer when<br />buyers ask AI.
            </h3>
            <p className="font-['Manrope',sans-serif] text-[13px] sm:text-[14px] text-[#71717A] max-w-[420px] mx-auto leading-relaxed">
              GTM helps your brand understand and improve its visibility across AI-powered search and answer engines.
            </p>
          </div>

          {/* Pill Badge: AEO */}
          <div className="flex items-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/80 text-[11.5px] font-semibold text-gray-700 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>AEO</span>
            </span>
          </div>

          {/* AI Chat Mockup Card */}
          <div className="w-full bg-white rounded-[18px] sm:rounded-[20px] border border-gray-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] p-4 sm:p-6 flex flex-col justify-between min-h-[350px]">
            <div>
              {/* Engine Tabs: ChatGPT, Perplexity, Gemini, Claude */}
              <div className="flex items-center border-b border-gray-100 pb-2 px-1 text-[11.5px] sm:text-[12px] font-medium select-none">
                <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {(Object.keys(AI_ENGINES) as AIEngine[]).map((engineKey) => {
                    const engine = AI_ENGINES[engineKey];
                    const Icon = engine.icon;
                    const isActive = activeEngine === engineKey;

                    return (
                      <button
                        key={engineKey}
                        type="button"
                        onClick={() => handleEngineSelect(engineKey)}
                        className={`flex items-center gap-1.5 pb-2 -mb-[9px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'text-gray-900 border-b-2 border-[#1A73E8] font-semibold'
                            : 'text-gray-500 hover:text-gray-800 border-b-2 border-transparent'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${engine.color}`} />
                        <span>{engine.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Chat Thread */}
              <div className="mt-3.5 flex flex-col justify-start">
                {animStage === 'typing' ? (
                  <div className="flex items-center justify-center text-gray-400 text-xs sm:text-[13px] py-10">
                    <span className="opacity-60">Waiting for prompt...</span>
                  </div>
                ) : (
                  <>
                    {/* User Prompt Bubble (Aligned Right) */}
                    <div className="w-full flex justify-end mb-3 animate-in fade-in duration-200">
                      <div className="bg-[#F1F5F9] rounded-2xl rounded-tr-xs px-3.5 py-1.5 text-[11.5px] text-gray-700 shadow-2xs">
                        {CHAT_QUERY}
                      </div>
                    </div>

                    {animStage === 'thinking' ? (
                      <div className="flex items-center gap-2 text-gray-500 text-[13px] py-6 animate-in fade-in duration-200">
                        <span>Thinking</span>
                        <span className="flex items-center gap-1.5 ml-0.5">
                          <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '180ms' }} />
                          <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '360ms' }} />
                        </span>
                      </div>
                    ) : (
                      /* AI Response & Citation (Matches Figma screenshot) */
                      <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                        <div className="flex items-start gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            {React.createElement(AI_ENGINES[activeEngine].icon, {
                              className: `w-3.5 h-3.5 ${AI_ENGINES[activeEngine].color}`,
                            })}
                          </div>
                          <p className="text-[12px] text-gray-700 leading-relaxed">
                            {AI_ENGINES[activeEngine].response}
                          </p>
                        </div>

                        {/* Citation Card */}
                        <div className="border border-gray-200/90 rounded-[12px] p-2.5 px-3 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer group shadow-2xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-md bg-[#0D1117] flex items-center justify-center shrink-0">
                              <Bookmark className="w-3.5 h-3.5 text-white fill-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[11.5px] font-semibold text-gray-900 leading-tight">
                                YourBrand
                              </span>
                              <span className="text-[10px] text-gray-400 leading-tight mt-0.5">
                                www.yourbrand.com
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Bottom Prompt Bar */}
            <div className="pt-3">
              <div className="w-full rounded-full border border-gray-200 bg-white px-3.5 py-1.5 sm:py-2 flex items-center justify-between shadow-2xs">
                <span className="text-[12px] text-gray-800 font-normal truncate mr-2">
                  {animStage === 'typing' ? (
                    <>
                      {typedChat}
                      <span className="inline-block w-0.5 h-4 bg-blue-600 animate-pulse ml-0.5 align-middle" />
                    </>
                  ) : (
                    <span className="text-gray-400">Ask {AI_ENGINES[activeEngine].name}...</span>
                  )}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    animStage === 'typing' && typedChat.length > 0
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Button */}
          <div className="pt-6 flex justify-center">
            <Link
              to="/aeo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-[13px] font-medium transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>Explore AEO Intelligence</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchAndAISection;
