import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Plus,
  ArrowRight,
  ArrowUp,
  Bookmark,
  ChevronRight,
} from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

// Custom Brand / Google / AI Icons
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
    color: 'text-[#10A37F]',
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

export const VisibilitySection: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<AIEngine>('chatgpt');
  const [animStage, setAnimStage] = useState<AnimStage>('typing');
  const [typedGoogle, setTypedGoogle] = useState('');
  const [typedChat, setTypedChat] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation only when the section reaches the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolled out of view so it plays freshly when reached again
          setIsVisible(false);
          setAnimStage('typing');
          setTypedGoogle('');
          setTypedChat('');
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Synchronized typing and automated send cycle:
  // Starts ONLY when section reaches the viewport (isVisible === true)
  useEffect(() => {
    if (!isVisible || isPaused) return;

    let isCancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    const startCycle = () => {
      // 1. Reset to typing state
      setAnimStage('typing');
      setTypedGoogle('');
      setTypedChat('');

      let charIdx = 0;
      const maxLen = Math.max(GOOGLE_QUERY.length, CHAT_QUERY.length);

      intervalId = setInterval(() => {
        if (isCancelled) return;
        charIdx++;
        setTypedGoogle(GOOGLE_QUERY.slice(0, Math.min(charIdx, GOOGLE_QUERY.length)));
        setTypedChat(CHAT_QUERY.slice(0, Math.min(charIdx, CHAT_QUERY.length)));

        if (charIdx >= maxLen) {
          clearInterval(intervalId);

          // 2. Pause briefly (180ms) then automatically send
          timeoutId = setTimeout(() => {
            if (isCancelled) return;
            setAnimStage('sent');

            // 3. Move to Thinking/Searching after 180ms
            timeoutId = setTimeout(() => {
              if (isCancelled) return;
              setAnimStage('thinking');

              // 4. Move to Results after 800ms thinking
              timeoutId = setTimeout(() => {
                if (isCancelled) return;
                setAnimStage('result');

                // 5. Stay on result for 3800ms then loop
                timeoutId = setTimeout(() => {
                  if (isCancelled) return;
                  startCycle();
                }, 3800);
              }, 800);
            }, 180);
          }, 180);
        }
      }, 22);
    };

    startCycle();

    return () => {
      isCancelled = true;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isVisible, isPaused]);

  return (
    <section ref={sectionRef} className="relative w-full py-16 sm:py-24 bg-white overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow / Pill Badge */}
          <ScrollReveal variant="fade-up" duration={600} distance={18}>
            <div className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#64748B] uppercase mb-3">
              TURN VISIBILITY INTO GROWTH
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal variant="fade-up" delay={80} duration={700} distance={24}>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
              Be found. Be understood. Be recommended.
            </h2>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal variant="fade-up" delay={160} duration={700} distance={20}>
            <p className="mt-3 sm:mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              AI-powered GTM that helps your business show up where buyers are looking.
            </p>
          </ScrollReveal>

          {/* CTA Link */}
          <ScrollReveal variant="fade-up" delay={240} duration={650} distance={16} className="mt-6">
            <a
              href="#optimize"
              className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-[#0F172A] hover:text-blue-600 transition-colors group cursor-pointer"
            >
              <span>Optimize My Presence</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>

        {/* Dual Cards Container: Google & AI Visibility (Simultaneously Animated) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mt-12 sm:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Left Column: Search Visibility (Google) */}
          <div className="flex flex-col items-start w-full">
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold mb-4 border border-blue-100/60 shadow-2xs">
              <Search className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Search Visibility</span>
            </div>

            {/* Google Card */}
            <div className="w-full bg-white rounded-[28px] border border-slate-200/90 shadow-[0_16px_48px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.03)] p-6 sm:p-7 min-h-[420px] flex flex-col justify-start">

              {/* Google Search Bar */}
              <div className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 flex items-center justify-between shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3 overflow-hidden">
                  <GoogleGIcon className="w-5 h-5 shrink-0" />
                  <span className="text-[13px] sm:text-[14px] text-slate-800 font-normal truncate">
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
                  className={`w-4 h-4 shrink-0 ml-2 transition-colors ${animStage === 'sent' || animStage === 'thinking' ? 'text-blue-600 animate-pulse' : 'text-slate-400'
                    }`}
                />
              </div>

              {/* Google Category Tabs */}
              <div className="flex items-center gap-4 sm:gap-5 text-xs sm:text-[13px] text-slate-500 mt-4 border-b border-slate-100 pb-2.5 overflow-x-auto">
                <span className="text-blue-600 font-medium relative pb-2.5 border-b-2 border-blue-600 -mb-[11px] whitespace-nowrap cursor-pointer">
                  All
                </span>
                <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Images</span>
                <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Videos</span>
                <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">News</span>
                <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Shopping</span>
                <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Web</span>
              </div>

              {/* Content Area: Typing State vs Searching State vs Top Ranked Result */}
              <div className="flex-1 flex flex-col justify-center">
                {animStage === 'typing' ? (
                  <div className="py-14 sm:py-16 flex items-center justify-center text-slate-400 text-xs sm:text-[13px] font-normal select-none">
                    <span className="opacity-60">Ready to search...</span>
                  </div>
                ) : animStage === 'sent' || animStage === 'thinking' ? (
                  <div className="py-14 sm:py-16 flex items-center justify-center gap-2 text-slate-500 text-[13.5px] font-normal select-none animate-in fade-in duration-200">
                    <span>Searching</span>
                    <span className="flex items-center gap-1.5 ml-0.5">
                      <span
                        className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                        style={{ animationDuration: '0.9s', animationDelay: '0ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                        style={{ animationDuration: '0.9s', animationDelay: '180ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                        style={{ animationDuration: '0.9s', animationDelay: '360ms' }}
                      />
                    </span>
                  </div>
                ) : (
                  <div className="mt-5 border border-slate-200/80 rounded-2xl p-4 sm:p-5 bg-[#FCFCFC] transition-all duration-500 transform translate-y-0 opacity-100 shadow-2xs animate-in fade-in slide-in-from-bottom-2">
                    {/* Site Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0 shadow-2xs">
                        <Bookmark className="w-4 h-4 text-white fill-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-slate-900 leading-tight">
                          yourbrand.com
                        </span>
                        <span className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          https://www.yourbrand.com
                        </span>
                      </div>
                    </div>

                    {/* Blue Title Link */}
                    <h4 className="text-[14.5px] sm:text-[15.5px] font-medium text-[#1A0DAB] hover:underline cursor-pointer mt-3 leading-snug">
                      The Best CRM for Small Business | YourBrand
                    </h4>

                    {/* Description Snippet */}
                    <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed mt-1.5">
                      Simple, powerful and built for growth. YourBrand helps small businesses manage leads, automate follow-ups and close more deals.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: AI Visibility (ChatGPT / Perplexity / Gemini / Claude) */}
          <div className="flex flex-col items-start w-full">
            {/* Pill Header */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold mb-4 border border-blue-100/60 shadow-2xs">
              <Plus className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>AI Visibility</span>
            </div>

            {/* AI Engine Card */}
            <div className="w-full bg-white rounded-[28px] border border-slate-200/90 shadow-[0_16px_48px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.03)] p-6 sm:p-7 min-h-[440px] flex flex-col justify-between">

              {/* Top: Engine Tabs & Middle Conversation Area */}
              <div>
                {/* Engine Tabs: ChatGPT, Perplexity, Gemini, Claude */}
                <div className="flex items-center gap-5 sm:gap-6 text-xs sm:text-[13px] border-b border-slate-100 pb-2.5 overflow-x-auto w-full">
                  {(Object.keys(AI_ENGINES) as AIEngine[]).map((engineKey) => {
                    const engine = AI_ENGINES[engineKey];
                    const Icon = engine.icon;
                    const isActive = activeEngine === engineKey;

                    return (
                      <button
                        key={engineKey}
                        type="button"
                        onClick={() => setActiveEngine(engineKey)}
                        className={`flex items-center gap-1.5 pb-2.5 -mb-[11px] font-medium transition-all whitespace-nowrap cursor-pointer ${isActive
                            ? 'text-slate-900 border-b-2 border-blue-600'
                            : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
                          }`}
                      >
                        <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${engine.color}`} />
                        <span>{engine.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Middle Conversation Area */}
                <div className="mt-4 min-h-[220px] flex flex-col justify-start">
                  {animStage === 'typing' ? (
                    <div className="flex-1" />
                  ) : (
                    <>
                      {/* User Prompt Query Bubble */}
                      <div className="w-full flex justify-end mb-3 animate-in fade-in duration-200">
                        <div className="bg-[#F1F5F9] rounded-2xl rounded-tr-xs px-3.5 py-1.5 text-[11.5px] sm:text-xs text-slate-700 shadow-2xs">
                          {CHAT_QUERY}
                        </div>
                      </div>

                      {animStage === 'thinking' ? (
                        <div className="flex items-center gap-2 text-slate-500 text-[13.5px] font-normal select-none py-6 animate-in fade-in duration-200">
                          <span>Thinking</span>
                          <span className="flex items-center gap-1.5 ml-0.5">
                            <span
                              className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                              style={{ animationDuration: '0.9s', animationDelay: '0ms' }}
                            />
                            <span
                              className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                              style={{ animationDuration: '0.9s', animationDelay: '180ms' }}
                            />
                            <span
                              className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce"
                              style={{ animationDuration: '0.9s', animationDelay: '360ms' }}
                            />
                          </span>
                        </div>
                      ) : animStage === 'result' ? (
                        <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                          {/* AI Response Text */}
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700 shadow-2xs">
                              {React.createElement(AI_ENGINES[activeEngine].icon, {
                                className: `w-3.5 h-3.5 ${AI_ENGINES[activeEngine].color}`,
                              })}
                            </div>
                            <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed">
                              {AI_ENGINES[activeEngine].response}
                            </p>
                          </div>

                          {/* Cited Source Card */}
                          <div className="mt-2 border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer group shadow-2xs">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0">
                                <Bookmark className="w-3.5 h-3.5 text-white fill-white" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[12px] sm:text-[12.5px] font-semibold text-slate-900 leading-tight">
                                  YourBrand
                                </span>
                                <span className="text-[10.5px] text-slate-400 leading-tight mt-0.5">
                                  www.yourbrand.com
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </div>

              {/* Bottom: Permanent ChatGPT Search Bar */}
              <div className="pt-2">
                <div className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2 overflow-hidden flex-1 mr-2">
                    <span className="text-[13px] sm:text-[14px] text-slate-800 font-normal truncate">
                      {animStage === 'typing' ? (
                        <>
                          {typedChat}
                          <span className="inline-block w-0.5 h-4 bg-blue-600 animate-pulse ml-0.5 align-middle" />
                        </>
                      ) : (
                        <span className="text-slate-400">Ask {AI_ENGINES[activeEngine].name}...</span>
                      )}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${animStage === 'typing' && typedChat.length > 0
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-400'
                      }`}
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisibilitySection;
