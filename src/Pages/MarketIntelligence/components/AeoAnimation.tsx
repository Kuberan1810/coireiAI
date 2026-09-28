import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

interface ModelTab {
  id: string;
  name: string;
  icon: (active: boolean) => React.ReactNode;
}

const MODELS: ModelTab[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: (active) => (
      <svg
        className={`w-4 h-4 shrink-0 transition-colors ${
          active ? 'text-black' : 'text-neutral-500'
        }`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.5 9.7a5.3 5.3 0 0 0-.4-4.2 5.5 5.5 0 0 0-5.3-2.6 5.3 5.3 0 0 0-4.1-1.9 5.5 5.5 0 0 0-5.2 3.8 5.3 5.3 0 0 0-3.6 2.6 5.5 5.5 0 0 0 .7 5.9 5.3 5.3 0 0 0 .4 4.2 5.5 5.5 0 0 0 5.3 2.6 5.3 5.3 0 0 0 4.1 1.9 5.5 5.5 0 0 0 5.2-3.8 5.3 5.3 0 0 0 3.6-2.6 5.5 5.5 0 0 0-.7-5.9zm-8.8 11.2a4.1 4.1 0 0 1-2.6-.9l.1-.1 4.3-2.5a.7.7 0 0 0 .4-.6v-6.1l1.8 1.1v4.9a4.2 4.2 0 0 1-4 4.2zm-7.6-3.3a4.1 4.1 0 0 1-.5-2.7l.1.1 4.3 2.5a.7.7 0 0 0 .7 0l5.3-3.1v2.1l-4.3 2.5a4.2 4.2 0 0 1-5.6-1.4zm-1.3-8.2a4.1 4.1 0 0 1 2.1-1.8v5.1a.7.7 0 0 0 .4.6l5.3 3.1-1.8 1.1-4.3-2.5a4.2 4.2 0 0 1-1.7-5.6zm14.3 2.3-5.3-3.1 1.8-1.1 4.3 2.5a4.2 4.2 0 0 1 1.7 5.6 4.1 4.1 0 0 1-2.1 1.8v-5.1a.7.7 0 0 0-.4-.6zm2.2-2.8a4.1 4.1 0 0 1 .5 2.7l-.1-.1-4.3-2.5a.7.7 0 0 0-.7 0l-5.3 3.1V9.4l4.3-2.5a4.2 4.2 0 0 1 5.6 1.4zm-9.8 1.4 2.5-1.4 2.5 1.4v2.9l-2.5 1.4-2.5-1.4z" />
      </svg>
    ),
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    icon: () => (
      <svg
        className="w-4 h-4 shrink-0 text-[#20B2AA]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
      </svg>
    ),
  },
  {
    id: 'gemini',
    name: 'Gemini',
    icon: () => (
      <svg className="w-4 h-4 shrink-0 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: () => (
      <svg className="w-4 h-4 shrink-0 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 0 1 1 1v4.06l2.87-2.87a1 1 0 1 1 1.41 1.41L14.41 8.5H18.5a1 1 0 1 1 0 2h-4.09l2.87 2.87a1 1 0 0 1-1.41 1.41L13 11.91V16a1 1 0 1 1-2 0v-4.09l-2.87 2.87a1 1 0 0 1-1.41-1.41L9.59 10.5H5.5a1 1 0 0 1 0-2h4.09L6.72 5.63a1 1 0 0 1 1.41-1.41L11 7.09V3a1 1 0 0 1 1-1z" />
      </svg>
    ),
  },
];

const QUERIES = [
  'what is the best CRM for small businesses',
  'which GTM intelligence software should we use',
  'how to track competitor positioning with AI',
];

export const AeoAnimation: React.FC = () => {
  const [activeModel, setActiveModel] = useState('chatgpt');
  const [queryIndex, setQueryIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect in prompt bar
  useEffect(() => {
    const currentTarget = QUERIES[queryIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < currentTarget.length) {
        timer = setTimeout(() => {
          setText(currentTarget.slice(0, text.length + 1));
        }, 65);
      } else {
        // Pause at full query before backspacing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3200);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentTarget.slice(0, text.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setQueryIndex((prev) => (prev + 1) % QUERIES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, queryIndex]);

  return (
    <div className="w-full max-w-[500px] mx-auto select-none">
      {/* Top Floating Badge: ✦ AEO */}
      <div className="flex items-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs text-[12px] font-medium text-neutral-700">
          <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
          <span>AEO</span>
        </div>
      </div>

      {/* Main White Card */}
      <div className="w-full bg-white rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-5 sm:p-7 min-h-[300px] sm:min-h-[330px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        
        {/* Top AI Engine Tabs */}
        <div className="flex items-center gap-5 sm:gap-6 border-b border-neutral-100 text-[12.5px] sm:text-[13px] overflow-x-auto no-scrollbar">
          {MODELS.map((model) => {
            const isActive = activeModel === model.id;
            return (
              <button
                key={model.id}
                type="button"
                onClick={() => setActiveModel(model.id)}
                className={`cursor-pointer pb-2.5 font-medium transition-colors flex items-center gap-1.5 relative whitespace-nowrap ${
                  isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {model.icon(isActive)}
                <span>{model.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Center Canvas */}
        <div className="py-12 sm:py-16 flex-1" />

        {/* Bottom AI Chat Input Bar */}
        <div className="w-full rounded-full border border-neutral-200/90 bg-white px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-xs hover:border-neutral-300 transition-colors">
          {/* Animated Typed Prompt */}
          <div className="flex-1 flex items-center overflow-hidden text-[13px] sm:text-[14px] text-neutral-800 font-normal mr-2">
            <span className="truncate">{text}</span>
            <span
              className={`inline-block w-[1.5px] h-4 bg-blue-600 ml-0.5 shrink-0 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Black Circular Send Button */}
          <button
            type="button"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F172A] hover:bg-black text-white flex items-center justify-center shrink-0 cursor-pointer shadow-2xs active:scale-95 transition-all"
            aria-label="Send query"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AeoAnimation;
