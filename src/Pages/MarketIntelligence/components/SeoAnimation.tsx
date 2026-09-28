import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const TABS = ['All', 'Images', 'Videos', 'News', 'Shopping', 'Web'];

const QUERIES = [
  'best CRM for small business',
  'best B2B GTM intelligence software',
  'competitor positioning & gap analysis',
];

export const SeoAnimation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
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

  // Typewriter effect
  useEffect(() => {
    const currentTarget = QUERIES[queryIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < currentTarget.length) {
        timer = setTimeout(() => {
          setText(currentTarget.slice(0, text.length + 1));
        }, 65);
      } else {
        // Pause at full query before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
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
      {/* Top Floating Badge: Q SEO */}
      <div className="flex items-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs text-[12px] font-medium text-neutral-700">
          <Search className="w-3.5 h-3.5 text-neutral-600" />
          <span>SEO</span>
        </div>
      </div>

      {/* Main White Card */}
      <div className="w-full bg-white rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-5 sm:p-7 min-h-[300px] sm:min-h-[330px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        
        {/* Top Search Area */}
        <div className="space-y-4">
          {/* Google Search Bar */}
          <div className="w-full rounded-full border border-neutral-200/90 bg-white px-4 py-2.5 sm:py-3 flex items-center gap-3 shadow-xs hover:border-neutral-300 transition-colors">
            {/* Google Multi-Color G Icon */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            {/* Typed Text with Cursor */}
            <div className="flex-1 flex items-center overflow-hidden text-[13px] sm:text-[14px] text-neutral-800 font-normal">
              <span className="truncate">{text}</span>
              <span
                className={`inline-block w-[1.5px] h-4 bg-blue-600 ml-0.5 shrink-0 ${
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Magnifying Glass Right Icon */}
            <Search className="w-4 h-4 text-neutral-400 shrink-0" />
          </div>

          {/* Navigation Category Tabs */}
          <div className="flex items-center gap-4 sm:gap-6 border-b border-neutral-100 text-[12px] sm:text-[13px] overflow-x-auto no-scrollbar pt-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-2 font-medium transition-colors relative whitespace-nowrap ${
                    isActive ? 'text-blue-600' : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Canvas / Ready to search */}
        <div className="py-12 sm:py-16 text-center">
          <span className="text-[13px] sm:text-[14px] font-normal text-neutral-300 select-none">
            Ready to search...
          </span>
        </div>

        {/* Bottom spacer for balance */}
        <div className="h-2" />
      </div>
    </div>
  );
};

export default SeoAnimation;
