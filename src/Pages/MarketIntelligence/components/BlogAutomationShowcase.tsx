import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

interface BlogCardItem {
  id: string;
  img: string;
  title: string;
  desc: string;
  isNew?: boolean;
}

const DEFAULT_DESC =
  'while other GTM products focus on AI-driven ICP, market research, signals, prospecting and GTM execution';

const INITIAL_CARDS: BlogCardItem[] = [
  {
    id: 'card-1',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-2',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-3',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-4',
    img: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-5',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-6',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-7',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
  {
    id: 'card-8',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
    title: 'Automated research',
    desc: DEFAULT_DESC,
  },
];

// Queue of prompts with matching relevant content that appears behind in the background
const PROMPT_QUEUE = [
  {
    prompt: 'Create a blog for generative SEO',
    card: {
      title: 'Generative SEO & AEO',
      desc: 'Ranking your brand in generative search engines like ChatGPT, Perplexity, and Google SGE.',
      img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    prompt: 'Create a blog for gen ai',
    card: {
      title: 'GenAI in Modern Workflows',
      desc: 'Automating content creation and multi-channel marketing campaigns with generative AI.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    prompt: 'Create a blog for competitor signals',
    card: {
      title: 'Competitor Movement Tracking',
      desc: 'Real-time alerts on competitor campaign changes, messaging pivots, and pricing updates.',
      img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    prompt: 'Create a blog for audience targeting',
    card: {
      title: 'High-Intent ICP Discovery',
      desc: 'Pinpointing active buyers based on real-time search behavior, signals, and buyer demand.',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    },
  },
];

type CursorState = 'hidden' | 'gliding' | 'clicking' | 'clicked' | 'leaving';

export const BlogAutomationShowcase: React.FC = () => {
  const [cards, setCards] = useState<BlogCardItem[]>(INITIAL_CARDS);
  const [queueIndex, setQueueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isKnobPressed, setIsKnobPressed] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('hidden');

  // FLIP Animation References
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevRectsRef = useRef<Map<string, DOMRect>>(new Map());

  // FLIP (First, Last, Invert, Play) effect to animate the entire grid rearrangement
  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current;
    if (prevRects.size === 0) return;

    itemRefs.current.forEach((el, id) => {
      if (!el) return;
      const prevRect = prevRects.get(id);

      if (prevRect) {
        // Existing card moving to its new position in the grid
        const newRect = el.getBoundingClientRect();
        const dx = prevRect.left - newRect.left;
        const dy = prevRect.top - newRect.top;

        if (dx !== 0 || dy !== 0) {
          // INVERT: Immediately snap element back to where it was visually
          el.style.transform = `translate(${dx}px, ${dy}px)`;
          el.style.transition = 'none';

          // PLAY: Smoothly glide it to its new slot
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.style.transition = 'transform 750ms cubic-bezier(0.2, 0.9, 0.25, 1)';
              el.style.transform = 'translate(0, 0)';
            });
          });
        }
      } else {
        // Brand new card dropping into slot 0
        el.style.transform = 'scale(0.35) translateY(-30px)';
        el.style.opacity = '0';
        el.style.transition = 'none';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition =
              'transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease-out';
            el.style.transform = 'scale(1) translateY(0)';
            el.style.opacity = '1';
          });
        });
      }
    });

    // Clear recorded rects after applying FLIP
    prevRectsRef.current = new Map();
  }, [cards]);

  useEffect(() => {
    const currentItem = PROMPT_QUEUE[queueIndex % PROMPT_QUEUE.length];
    const fullText = currentItem.prompt;
    let charIndex = 0;

    // Reset state for each loop
    setDisplayedText('');
    setIsKnobPressed(false);
    setCursorState('hidden');

    // 1. Initial pause before typing starts
    const startTimeout = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          charIndex++;
          setDisplayedText(fullText.slice(0, charIndex));
        } else {
          clearInterval(typeInterval);

          // 2. Pause after typing finishes (260ms), then mouse cursor glides into view towards the send knob
          setTimeout(() => {
            setCursorState('gliding');

            // 3. Cursor arrives at send knob and clicks (420ms glide)
            setTimeout(() => {
              setCursorState('clicking');
              setIsKnobPressed(true);

              // 4. Knob press release & trigger adding relevant card behind
              setTimeout(() => {
                setCursorState('clicked');
                setIsKnobPressed(false);

                // RECORD CURRENT POSITIONS BEFORE STATE CHANGE FOR FLIP REARRANGEMENT
                const rects = new Map<string, DOMRect>();
                itemRefs.current.forEach((el, id) => {
                  if (el) {
                    rects.set(id, el.getBoundingClientRect());
                  }
                });
                prevRectsRef.current = rects;

                // Add the RELEVANT blog card to the background grid
                const newCard: BlogCardItem = {
                  id: `card-new-${Date.now()}`,
                  img: currentItem.card.img,
                  title: currentItem.card.title,
                  desc: currentItem.card.desc,
                  isNew: true,
                };

                setCards((prev) => [newCard, ...prev.slice(0, 7)]);

                // 5. Cursor glides away and fades out
                setTimeout(() => {
                  setCursorState('leaving');
                  setTimeout(() => setCursorState('hidden'), 350);
                }, 180);

                // 6. Pause with the newly added relevant content visible behind, then advance to next topic
                setTimeout(() => {
                  setQueueIndex((prev) => prev + 1);
                }, 2800);

              }, 140); // Click duration
            }, 420); // Glide duration
          }, 260); // Pause after typing
        }
      }, 42); // Typing speed per character
    }, 700);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [queueIndex]);

  return (
    <div className="w-full flex items-center justify-center">
      {/* Outer Container matching Figma inspect: 610px × 450px, radius 10px, background #F3F3F3 */}
      <div className="relative w-full max-w-[610px] h-[450px] rounded-[10px] bg-[#F3F3F3] p-4 sm:p-5 overflow-hidden flex flex-col justify-between select-none">
        
        {/* Background 4x2 Blog Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-3.5 w-full h-full">
          {cards.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(item.id, el);
                } else {
                  itemRefs.current.delete(item.id);
                }
              }}
              className="flex flex-col w-[130px] sm:w-[135px] relative will-change-transform z-10"
            >
              {/* Thumbnail Image: 135px × 135px, rounded-[10px], crop/cover */}
              <div className="w-[130px] sm:w-[135px] h-[130px] sm:h-[135px] rounded-[10px] overflow-hidden bg-neutral-900 shrink-0 shadow-2xs">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content under image */}
              <div className="pt-1.5 text-left w-full">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] sm:text-[11.5px] font-semibold text-[#111827] truncate leading-tight">
                  {item.title}
                </div>
                {/* Description: Plus Jakarta Sans, 300 Light, clear and legible */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-[8px] sm:text-[8.5px] leading-[1.25] text-[#373737] mt-1 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Floating Prompt Card (Same as Find My Competitors search box) */}
        <div className="absolute inset-0 m-auto w-[86%] sm:w-[76%] max-w-[340px] h-[170px] sm:h-[180px] bg-white rounded-[16px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E7EB]/80 z-20 flex flex-col justify-center items-center">
          
          {/* Pill Input */}
          <div className="w-full flex items-center justify-between px-3.5 sm:px-4 py-2.5 rounded-full border border-[#E5E7EB] bg-white shadow-2xs relative">
            {/* Typing text simulator */}
            <div className="flex items-center text-[12px] sm:text-[13px] text-[#111827] font-normal truncate min-h-[20px]">
              <span>{displayedText}</span>
              {/* Blinking Cursor */}
              <span className="inline-block w-[1.5px] h-3.5 bg-[#111827] ml-0.5 animate-pulse" />
            </div>

            {/* Dark Circle Send Knob */}
            <div className="relative shrink-0 flex items-center justify-center ml-2">
              <div
                aria-hidden="true"
                className={`w-[26px] h-[26px] rounded-full bg-black shrink-0 flex items-center justify-center transition-transform duration-200 select-none ${
                  isKnobPressed ? 'scale-90 opacity-75' : ''
                }`}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              {/* Click Ripple Effect */}
              {isKnobPressed && (
                <span className="absolute inset-0 -m-1.5 rounded-full bg-black/25 animate-ping pointer-events-none" />
              )}

              {/* Animated Pointer Cursor (Identical to Find My Competitors animation) */}
              <div
                className={`absolute pointer-events-none z-50 transition-all ease-out ${
                  cursorState === 'hidden'
                    ? 'opacity-0 translate-x-10 translate-y-10 scale-90 duration-300'
                    : cursorState === 'gliding'
                      ? 'opacity-100 translate-x-1 translate-y-1.5 scale-100 duration-400'
                      : cursorState === 'clicking'
                        ? 'opacity-100 translate-x-1 translate-y-1.5 scale-[0.82] duration-100 ease-in'
                        : cursorState === 'clicked'
                          ? 'opacity-100 translate-x-1 translate-y-1.5 scale-100 duration-120'
                          : 'opacity-0 translate-x-6 translate-y-8 scale-90 duration-350 ease-in'
                }`}
                style={{
                  top: '-2px',
                  left: '-2px',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] filter"
                >
                  <path
                    d="M5.65376 2.39417C5.16335 1.9548 4.3999 2.30237 4.3999 2.95543V21.463C4.3999 22.1466 5.22818 22.4862 5.71184 21.9961L10.7423 16.8995C10.963 16.676 11.2647 16.5504 11.5794 16.5504H19.5768C20.2587 16.5504 20.6014 15.7279 20.1206 15.2447L5.65376 2.39417Z"
                    fill="#0F172A"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogAutomationShowcase;
