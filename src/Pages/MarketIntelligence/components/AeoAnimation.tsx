import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUp, Bookmark, ChevronRight } from 'lucide-react';
import {
  AI_ENGINES,
  CHAT_QUERY,
  type AIEngine,
  type AnimStage,
} from './visibilityData';

export interface AeoAnimationProps {
  animStage?: AnimStage;
  typedChat?: string;
  activeEngine?: AIEngine;
  onEngineSelect?: (engine: AIEngine) => void;
  onInstantSearch?: () => void;
}

export const AeoAnimation: React.FC<AeoAnimationProps> = ({
  animStage: propAnimStage,
  typedChat: propTypedChat,
  activeEngine: propActiveEngine,
  onEngineSelect,
  onInstantSearch,
}) => {
  // Local state fallbacks if rendered standalone without parent coordinator
  const [localEngine, setLocalEngine] = useState<AIEngine>('chatgpt');
  const [localAnimStage, setLocalAnimStage] = useState<AnimStage>('result');
  const [localTyped, setLocalTyped] = useState(CHAT_QUERY);

  const isControlled = propAnimStage !== undefined;
  const animStage = isControlled ? propAnimStage : localAnimStage;
  const typedChat = isControlled ? (propTypedChat ?? '') : localTyped;
  const activeEngine = isControlled ? (propActiveEngine ?? 'chatgpt') : localEngine;

  useEffect(() => {
    if (isControlled) return;
    // Simple standalone loop if unmounted from parent
    let isCancelled = false;
    const engines: AIEngine[] = ['chatgpt', 'perplexity', 'gemini', 'claude'];
    let idx = 0;

    const runStandalone = async () => {
      while (!isCancelled) {
        setLocalAnimStage('typing');
        setLocalTyped('');
        for (let i = 1; i <= CHAT_QUERY.length; i++) {
          if (isCancelled) return;
          await new Promise((r) => setTimeout(r, 40));
          setLocalTyped(CHAT_QUERY.slice(0, i));
        }
        setLocalAnimStage('sent');
        await new Promise((r) => setTimeout(r, 300));
        setLocalAnimStage('thinking');
        await new Promise((r) => setTimeout(r, 800));
        setLocalAnimStage('result');
        await new Promise((r) => setTimeout(r, 4500));

        idx = (idx + 1) % engines.length;
        setLocalEngine(engines[idx]);
      }
    };
    runStandalone();
    return () => {
      isCancelled = true;
    };
  }, [isControlled]);

  const handleEngineClick = (engineKey: AIEngine) => {
    if (onEngineSelect) {
      onEngineSelect(engineKey);
    } else {
      setLocalEngine(engineKey);
      setLocalAnimStage('result');
    }
  };

  const handleSearchClick = () => {
    if (onInstantSearch) {
      onInstantSearch();
    } else {
      setLocalAnimStage('result');
    }
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* Pill Header */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-semibold mb-4 border border-slate-200/80 shadow-2xs shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-slate-700" />
        <span>AEO</span>
      </div>

      {/* AI Engine Card */}
      <div className="w-full min-h-[350px] bg-white rounded-[26px] border border-slate-200/90 shadow-[0_16px_48px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.03)] p-5 sm:p-6 flex flex-col justify-between flex-1">
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
                  onClick={() => handleEngineClick(engineKey)}
                  className={`flex items-center gap-1.5 pb-2.5 -mb-[11px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
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
          <div className="mt-3.5 min-h-[160px] flex flex-col justify-start">
            {animStage === 'typing' ? (
              <div className="flex-1" />
            ) : (
              <>
                {/* User Prompt Query Bubble */}
                <div className="w-full flex justify-end mb-2.5 animate-in fade-in duration-200">
                  <div className="bg-[#F1F5F9] rounded-2xl rounded-tr-xs px-3 py-1.5 text-[11px] sm:text-[11.5px] text-slate-700 shadow-2xs cursor-text select-text">
                    {CHAT_QUERY}
                  </div>
                </div>

                {animStage === 'thinking' ? (
                  <div className="flex items-center gap-2 text-slate-500 text-[13.5px] font-normal py-6 animate-in fade-in duration-200">
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
                      <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed cursor-text select-text">
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
                          <span className="text-[12px] sm:text-[12.5px] font-semibold text-slate-900 leading-tight cursor-text select-text">
                            YourBrand
                          </span>
                          <span className="text-[10.5px] text-slate-400 leading-tight mt-0.5 cursor-text select-text">
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
          <div
            onClick={handleSearchClick}
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 flex items-center justify-between shadow-2xs hover:shadow-xs transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-2 overflow-hidden flex-1 mr-2">
              <span className="text-[13px] sm:text-[14px] text-slate-800 font-normal truncate cursor-text select-text">
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
            <button
              type="button"
              aria-label="Send query"
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                animStage === 'typing' && typedChat.length > 0
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700'
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeoAnimation;
