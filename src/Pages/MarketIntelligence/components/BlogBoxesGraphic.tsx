import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

interface BoxCardItem {
  id: string;
  isNew?: boolean;
}

const INITIAL_BOXES: BoxCardItem[] = [
  { id: 'box-1' },
  { id: 'box-2' },
  { id: 'box-3' },
  { id: 'box-4' },
  { id: 'box-5' },
  { id: 'box-6' },
  { id: 'box-7' },
  { id: 'box-8' },
];

const PROMPT_QUEUE = [
  'Create a blog for generative SEO',
  'Create a blog for gen ai',
  'Create a blog for competitor signals',
  'Create a blog for audience targeting',
];

type CursorState = 'hidden' | 'gliding' | 'clicking' | 'clicked' | 'leaving';

export const BlogBoxesGraphic: React.FC = () => {
  const [boxes, setBoxes] = useState<BoxCardItem[]>(INITIAL_BOXES);
  const [queueIndex, setQueueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isKnobPressed, setIsKnobPressed] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('hidden');

  // FLIP Animation References
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevRectsRef = useRef<Map<string, DOMRect>>(new Map());

  // FLIP (First, Last, Invert, Play) effect to animate the 4x2 white boxes rearrangement
  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current;
    if (prevRects.size === 0) return;

    itemRefs.current.forEach((el, id) => {
      const first = prevRects.get(id);
      if (!first || !el) return;

      const last = el.getBoundingClientRect();
      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;

      if (deltaX !== 0 || deltaY !== 0) {
        // Invert: Apply transform to snap back to old position immediately
        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        el.style.transition = 'transform 0s';

        // Play: Animate back to new layout position smoothly
        requestAnimationFrame(() => {
          el.style.transform = '';
          el.style.transition = 'transform 650ms cubic-bezier(0.25, 1, 0.5, 1)';
        });
      }
    });

    // Handle the newly inserted white box entrance
    const firstBox = boxes[0];
    if (firstBox && firstBox.isNew) {
      const newEl = itemRefs.current.get(firstBox.id);
      if (newEl) {
        newEl.style.transform = 'scale(0.85) translateY(-8px)';
        newEl.style.opacity = '0';
        newEl.style.transition = 'none';

        requestAnimationFrame(() => {
          newEl.style.transform = 'scale(1) translateY(0)';
          newEl.style.opacity = '1';
          newEl.style.transition =
            'transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms ease-out';
        });
      }
    }

    prevRectsRef.current.clear();
  }, [boxes]);

  // Main interactive workflow cycle
  useEffect(() => {
    const fullPrompt = PROMPT_QUEUE[queueIndex % PROMPT_QUEUE.length];

    setDisplayedText('');
    setCursorState('hidden');

    let charIdx = 0;
    const startTimeout = setTimeout(() => {
      // 1. Simulate human typing of the search prompt
      const typingInterval = setInterval(() => {
        charIdx++;
        setDisplayedText(fullPrompt.slice(0, charIdx));

        if (charIdx >= fullPrompt.length) {
          clearInterval(typingInterval);

          // 2. Cursor glides in towards the dark send button
          setTimeout(() => {
            setCursorState('gliding');

            // 3. Cursor clicks the knob
            setTimeout(() => {
              setCursorState('clicking');
              setIsKnobPressed(true);

              // 4. Knob press release & trigger adding white box to 4x2 grid
              setTimeout(() => {
                setCursorState('clicked');
                setIsKnobPressed(false);

                // Record current positions before state change for FLIP rearrangement
                const rects = new Map<string, DOMRect>();
                itemRefs.current.forEach((el, id) => {
                  if (el) {
                    rects.set(id, el.getBoundingClientRect());
                  }
                });
                prevRectsRef.current = rects;

                // Add new white box, keep exactly 8 (4x2)
                const newBox: BoxCardItem = {
                  id: `box-new-${Date.now()}`,
                  isNew: true,
                };

                setBoxes((prev) => [newBox, ...prev.slice(0, 7)]);

                // 5. Cursor glides away and fades out
                setTimeout(() => {
                  setCursorState('leaving');
                  setTimeout(() => setCursorState('hidden'), 350);
                }, 180);

                // 6. Pause then advance to next topic
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
    <div className="w-full flex items-center justify-center select-none">
      {/* Outer Container matching 4x2 grid layout inside the card box: max-w-[500px], h-[210px] sm:h-[225px] */}
      <div className="relative w-full max-w-[500px] h-[210px] sm:h-[225px] rounded-[10px] bg-transparent p-2 overflow-hidden flex flex-col justify-between">
        
        {/* Background 4x2 Grid: Exactly 8 pure white boxes behind, NO text, NO images */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full h-full">
          {boxes.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(item.id, el);
                } else {
                  itemRefs.current.delete(item.id);
                }
              }}
              className="w-full h-full bg-white rounded-[8px] sm:rounded-[10px] border border-[#E5E7EB]/90 shadow-[0_2px_6px_rgba(0,0,0,0.03)] relative will-change-transform z-10"
            />
          ))}
        </div>

        {/* Centered Floating Prompt Card (White Box with typing animation and cursor) */}
        <div className="absolute inset-0 m-auto w-[82%] sm:w-[68%] max-w-[310px] h-[125px] sm:h-[135px] bg-white rounded-[16px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E7EB]/90 z-20 flex flex-col justify-center items-center">
          
          {/* Pill Input */}
          <div className="w-full flex items-center justify-between px-3.5 sm:px-4 py-2 rounded-full border border-[#E5E7EB] bg-white shadow-2xs relative">
            {/* Typing text simulator */}
            <div className="flex items-center text-[11.5px] sm:text-[12px] text-[#111827] font-normal truncate min-h-[18px]">
              <span>{displayedText}</span>
              {/* Blinking Cursor */}
              <span className="inline-block w-[1.5px] h-3 bg-[#111827] ml-0.5 animate-pulse" />
            </div>

            {/* Dark Circle Send Knob */}
            <div className="relative shrink-0 flex items-center justify-center ml-2">
              <div
                aria-hidden="true"
                className={`w-[24px] h-[24px] rounded-full bg-black shrink-0 flex items-center justify-center transition-transform duration-200 select-none ${
                  isKnobPressed ? 'scale-90 opacity-75' : ''
                }`}
              >
                <svg
                  width="9"
                  height="9"
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
                <span className="absolute inset-0 -m-1 rounded-full bg-black/25 animate-ping pointer-events-none" />
              )}

              {/* Animated Pointer Cursor */}
              <div
                className={`absolute pointer-events-none z-50 transition-all ease-out ${
                  cursorState === 'hidden'
                    ? 'opacity-0 translate-x-10 translate-y-10 scale-90 duration-300'
                    : cursorState === 'gliding'
                      ? 'opacity-100 translate-x-1 translate-y-1 scale-100 duration-400'
                      : cursorState === 'clicking'
                        ? 'opacity-100 translate-x-1 translate-y-1 scale-[0.82] duration-100 ease-in'
                        : cursorState === 'clicked'
                          ? 'opacity-100 translate-x-1 translate-y-1 scale-100 duration-120'
                          : 'opacity-0 translate-x-6 translate-y-8 scale-90 duration-350 ease-in'
                }`}
                style={{
                  top: '-2px',
                  left: '-2px',
                }}
              >
                <svg
                  width="24"
                  height="24"
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

export default BlogBoxesGraphic;

