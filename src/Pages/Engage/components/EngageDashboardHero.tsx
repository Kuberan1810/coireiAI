import React, { useState, useEffect, useRef } from 'react';
import {
  Inbox,
  Users,
  Bot,
  BarChart3,
  Send,
  FileText,
  Settings,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Plus,

  Smile,
  MoreVertical,
  ArrowLeft,
  Archive,
  AlertOctagon,
  Trash2,
  Mail,
  Clock,
  CheckSquare,
  FolderInput,
  Tag,
  Printer,
  ExternalLink,
  Star,
  Reply,
  Forward,
  X,
  Sparkles,
} from 'lucide-react';

interface Conversation {
  id: string;
  sender: string;
  channel: 'instagram' | 'whatsapp' | 'email' | 'linkedin' | 'chat';
  time: string;
  preview: string;
  userMessage: string;
  aiResponse: string;
  userFollowup?: string;
  email: string;
  location: string;
  leadScore: number;
  about: string;
  tags: string[];
}

const CONVERSATIONS_DATA: Conversation[] = [
  {
    id: 'nextwave',
    sender: 'team@nextwave.com',
    channel: 'email',
    time: '10:34 AM',
    preview: 'Pricing details for 50 users',
    userMessage: 'Could you share enterprise pricing tiers for 50+ agent seats?',
    aiResponse:
      'I’ve sent our volume pricing tier breakdown directly to your inbox and notified our solutions architect.',
    userFollowup: 'Thanks! Can we get a quick 15-min walkthrough as well?',
    email: 'team@nextwave.com',
    location: 'San Francisco • 10:34 AM',
    leadScore: 94,
    about: 'Enterprise SaaS company looking to replace manual support tickets with AI agent routing.',
    tags: ['Enterprise', 'Pricing', 'High Intent'],
  },
  {
    id: 'alex',
    sender: '@alex_design',
    channel: 'instagram',
    time: '10:34 AM',
    preview: "Hi, I'm interested in your product...",
    userMessage: "Hi, I'm interested in your product. Can you tell me more?",
    aiResponse:
      'Absolutely! I’d be happy to help. Our product helps teams automate their customer conversations across multiple channels.',
    userFollowup: 'That sounds great. Can we schedule a demo?',
    email: 'alex@example.com',
    location: 'India • 10:34 AM',
    leadScore: 85,
    about: 'Interested in automation tools for their marketing team.',
    tags: ['Product interest', 'SMB'],
  },
  {
    id: 'phone',
    sender: '+91 98•••••421',
    channel: 'whatsapp',
    time: '09:42 AM',
    preview: 'Can we schedule a demo?',
    userMessage: 'Hey there! Can we schedule a quick demo for our sales team tomorrow?',
    aiResponse:
      'Certainly! I have slots open tomorrow at 11:00 AM and 3:30 PM EST. Which works best for you?',
    userFollowup: '11:00 AM works perfectly for us.',
    email: 'contact@enterprise.in',
    location: 'Mumbai • 09:42 AM',
    leadScore: 92,
    about: 'Evaluating multi-channel AI agents for 20-seat team.',
    tags: ['High Intent', 'Demo Requested'],
  },
  {
    id: 'sarah',
    sender: 'Sarah Johnson',
    channel: 'linkedin',
    time: 'Yesterday',
    preview: 'Thanks for the info! Can we...',
    userMessage: 'Thanks for the info! Can we integrate Coirei with HubSpot CRM?',
    aiResponse:
      'Yes, Coirei provides 2-way native sync with HubSpot, Salesforce, and custom webhooks.',
    email: 'sarah.j@growthlab.io',
    location: 'London • Yesterday',
    leadScore: 88,
    about: 'VP of Growth exploring social lead nurturing.',
    tags: ['Integration', 'HubSpot'],
  },
  {
    id: 'michael',
    sender: 'Michael Park',
    channel: 'chat',
    time: 'Feb 20',
    preview: 'Is there a free trial available?',
    userMessage: 'Is there a free trial available for the Engage Agent?',
    aiResponse:
      'Yes! We offer a 14-day fully featured trial with 1,000 automated conversations included.',
    email: 'm.park@startup.co',
    location: 'Austin • Feb 20',
    leadScore: 72,
    about: 'Founder seeking automated customer qualification.',
    tags: ['Self-serve', 'Trial'],
  },
  {
    id: 'priya',
    sender: 'Priya Sharma',
    channel: 'instagram',
    time: 'Feb 19',
    preview: 'Do you have a student discount?',
    userMessage: 'Do you have startup or student discount plans available?',
    aiResponse:
      'We do offer our Startup Growth Grant with up to 50% credits for early-stage teams.',
    email: 'priya@creators.in',
    location: 'Bengaluru • Feb 19',
    leadScore: 65,
    about: 'Content creator community exploring automated DM replies.',
    tags: ['Community', 'Creator'],
  },
  {
    id: 'david',
    sender: 'David Lee',
    channel: 'linkedin',
    time: 'Feb 18',
    preview: 'Can we integrate with our CRM?',
    userMessage: 'Can we integrate Engage with custom PostgreSQL pipelines?',
    aiResponse:
      'Yes, we provide secure REST webhooks and streaming APIs for real-time warehouse ingestion.',
    email: 'david@fintechsys.com',
    location: 'New York • Feb 18',
    leadScore: 81,
    about: 'Technical lead evaluating webhook pipelines.',
    tags: ['Technical', 'API'],
  },
];

// Official Instagram Logo from Downloads (instalogo.svg)
const InstaLogoSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="11.6" fill="url(#paint0_linear_insta_official)" />
    <circle cx="27.3016" cy="12.2996" r="1.7" fill="white" />
    <path
      d="M24.7992 20.0002C24.7992 22.6512 22.6502 24.8002 19.9992 24.8002C17.3483 24.8002 15.1992 22.6512 15.1992 20.0002C15.1992 17.3492 17.3483 15.2002 19.9992 15.2002C22.6502 15.2002 24.7992 17.3492 24.7992 20.0002Z"
      strokeWidth="2"
      stroke="white"
    />
    <path
      d="M14.8016 8.69961H25.2016C28.5705 8.69961 31.3016 11.4307 31.3016 14.7996V25.1996C31.3016 28.5685 28.5705 31.2996 25.2016 31.2996H14.8016C11.4326 31.2996 8.70156 28.5685 8.70156 25.1996V14.7996C8.70156 11.4307 11.4326 8.69961 14.8016 8.69961Z"
      strokeWidth="2.2"
      stroke="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_insta_official"
        x1="34"
        y1="0"
        x2="34"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE00CF" />
        <stop offset="0.47" stopColor="#FF008A" />
        <stop offset="0.8" stopColor="#FF6746" />
        <stop offset="1" stopColor="#FFCB40" />
      </linearGradient>
    </defs>
  </svg>
);

export const EngageDashboardHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetCardRef = useRef<HTMLDivElement>(null);
  const animationTimersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  // State
  const [activeId, setActiveId] = useState<string>('');

  // Storytelling automated walkthrough states
  type CursorState = 'hidden' | 'gliding' | 'clicking' | 'clicked' | 'leaving';
  const [cursorState, setCursorState] = useState<CursorState>('hidden');
  const [visibleDmCount, setVisibleDmCount] = useState<number>(0);
  const [isChatRevealed, setIsChatRevealed] = useState<boolean>(false);
  const [visibleMsgCount, setVisibleMsgCount] = useState<number>(0);
  const [isProfileRevealed, setIsProfileRevealed] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 390, y: 230 });

  const activeConv =
    CONVERSATIONS_DATA.find((c) => c.id === activeId) || CONVERSATIONS_DATA[0];

  // Clear running timers
  const clearAllTimers = () => {
    animationTimersRef.current.forEach(clearTimeout);
    animationTimersRef.current = [];
  };

  // Continuous automated loop sequence using exact Home Screen Hero cursor speed & click:
  // 1. DMs list line by line
  // 2. Cursor glides to target (420ms glide matching Home Hero)
  // 3. Cursor clicks (130ms press, scale-[0.82] matching Home Hero)
  // 4. Click releases (120ms release) -> DM list slides left & disappears
  // 5. Gmail UI conversation & Profile reveal and take over the full window
  const startWalkthroughAnimation = () => {
    clearAllTimers();

    // 0. Reset to initial state
    setVisibleDmCount(0);
    setIsChatRevealed(false);
    setIsProfileRevealed(false);
    setVisibleMsgCount(0);
    setActiveId('');
    setCursorState('hidden');

    // Initial resting position for the virtual cursor
    setCursorPos({ x: 390, y: 230 });

    // Step 1: DMs list LINE BY LINE
    const tDm1 = setTimeout(() => {
      setVisibleDmCount(1);
    }, 90);

    const tDm2 = setTimeout(() => {
      setVisibleDmCount(2);
    }, 180);

    const tDm3 = setTimeout(() => {
      setVisibleDmCount(3);
    }, 270);

    const tDm4 = setTimeout(() => {
      setVisibleDmCount(4);
    }, 360);

    const tDm5 = setTimeout(() => {
      setVisibleDmCount(5);
    }, 450);

    const tDm6 = setTimeout(() => {
      setVisibleDmCount(6);
    }, 540);

    const tDm7 = setTimeout(() => {
      setVisibleDmCount(CONVERSATIONS_DATA.length);
    }, 630);

    // Step 2: Brief pause (220ms matching Home Hero) after lines list, then cursor glides directly to target in 420ms
    const tCursorGlide = setTimeout(() => {
      setCursorState('gliding');
      if (containerRef.current && targetCardRef.current) {
        const cRect = containerRef.current.getBoundingClientRect();
        const tRect = targetCardRef.current.getBoundingClientRect();
        setCursorPos({
          x: tRect.left - cRect.left + tRect.width / 2 + 10,
          y: tRect.top - cRect.top + tRect.height / 2,
        });
      } else {
        setCursorPos({ x: 260, y: 155 });
      }
    }, 850);

    // Step 3: Clicks immediately on arrival (420ms glide matching Home Hero)
    const tClick = setTimeout(() => {
      setCursorState('clicking');
    }, 1270);

    // Step 4: Click releases (130ms press matching Home Hero)
    // -> Triggers DM list to slide to the left and disappear!
    // -> Reveals Gmail conversation UI
    const tReveal = setTimeout(() => {
      setCursorState('clicked');
      setActiveId('nextwave');
      setIsChatRevealed(true);
      setVisibleMsgCount(1);
    }, 1400);

    // Step 5: Cursor glides away and fades out (150ms then leaving, 350ms hidden matching Home Hero)
    const tCursorLeaving = setTimeout(() => {
      setCursorState('leaving');
    }, 1550);

    // Step 6: Profile slides in from right smoothly, taking place beside the Gmail UI
    const tProfile = setTimeout(() => {
      setIsProfileRevealed(true);
    }, 1650);

    const tCursorHidden = setTimeout(() => {
      setCursorState('hidden');
    }, 1900);

    // Step 7: Engage AI replies in the Gmail conversation thread
    const tAi = setTimeout(() => {
      setVisibleMsgCount(2);
    }, 2400);

    // Step 8: User follow-up reveals automatically
    const tUser = setTimeout(() => {
      setVisibleMsgCount(3);
    }, 3200);

    // Step 9: Showcase complete automated workflow, then smoothly loop
    const tLoop = setTimeout(() => {
      startWalkthroughAnimation();
    }, 9800);

    animationTimersRef.current = [
      tDm1,
      tDm2,
      tDm3,
      tDm4,
      tDm5,
      tDm6,
      tDm7,
      tCursorGlide,
      tClick,
      tReveal,
      tCursorLeaving,
      tProfile,
      tCursorHidden,
      tAi,
      tUser,
      tLoop,
    ];
  };

  useEffect(() => {
    startWalkthroughAnimation();
    return () => {
      clearAllTimers();
    };
  }, []);

  const renderChannelIcon = (channel: string, size = 'w-7 h-7', iconSize = 'w-3.5 h-3.5') => {
    switch (channel) {
      case 'instagram':
        return (
          <div className={`${size} rounded-[9px] overflow-hidden shrink-0 shadow-2xs`}>
            <InstaLogoSvg />
          </div>
        );
      case 'whatsapp':
        return (
          <div className={`${size} rounded-[9px] bg-[#25D366] flex items-center justify-center shrink-0 shadow-2xs text-white`}>
            <svg
              className={`${iconSize} fill-current`}
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.63c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
            </svg>
          </div>
        );
      case 'email':
        return (
          <div className={`${size} rounded-[9px] bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-2xs`}>
            <svg
              className={`${iconSize} text-[#EA4335]`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
        );
      case 'linkedin':
        return (
          <div className={`${size} rounded-[9px] bg-[#0A66C2] flex items-center justify-center shrink-0 shadow-2xs`}>
            <span className="text-white font-bold text-[11px]">in</span>
          </div>
        );
      case 'chat':
      default:
        return (
          <div className={`${size} rounded-[9px] bg-[#00B2FF] flex items-center justify-center shrink-0 shadow-2xs`}>
            <svg
              className={`${iconSize} text-white fill-current`}
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section className="relative z-20 w-full pt-10 sm:pt-14 pb-10 sm:pb-14 px-3 sm:px-6 bg-white overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
      <div className="w-full max-w-[960px] mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-[#0D0D0D] tracking-[-0.6px] leading-[1.15]">
            A team of specialized
            <br />
            agents, working for you
          </h1>
          <p className="mt-2 text-[#64748B] text-xs sm:text-[13.5px] max-w-lg mx-auto leading-relaxed">
            Our AI GTM Strategist coordinates a team of expert agents to
            <br className="hidden sm:inline" /> research, plan, execute and
            optimize your growth.
          </p>
        </div>

        {/* FULLY AUTOMATED macOS Window Mockup: Pure automated showcase */}
        <div
          ref={containerRef}
          className="relative w-full rounded-[14px] border border-[#E2E8F0] bg-white shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden pointer-events-none select-none cursor-default"
        >
          {/* Animated Pointer Cursor: exact cursor & speeds from Home Screen Hero */}
          <div
            className={`absolute pointer-events-none z-50 transition-all ease-out ${
              cursorState === 'hidden'
                ? 'opacity-0 scale-90 duration-300 pointer-events-none'
                : cursorState === 'gliding'
                  ? 'opacity-100 scale-100 duration-400'
                  : cursorState === 'clicking'
                    ? 'opacity-100 scale-[0.82] duration-100 ease-in'
                    : cursorState === 'clicked'
                      ? 'opacity-100 scale-100 duration-120'
                      : 'opacity-0 scale-90 duration-350 ease-in'
            }`}
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: 'translate(-3px, -3px)',
            }}
          >
            {/* Click Ripple Effect */}
            {(cursorState === 'clicking' || cursorState === 'clicked') && (
              <span className="absolute inset-0 -m-1.5 rounded-full bg-black/25 animate-ping pointer-events-none" />
            )}
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

          {/* macOS Black Tab Top Bar */}
          <div className="bg-[#1E2028] px-3.5 py-2 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
            </div>   
          </div>

          {/* Subheader / App Header */}
          <div className="w-full h-[40px] bg-white border-b border-[#F1F5F9] px-3.5 flex items-center justify-between gap-3 select-none">
            {/* Brand */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12.5px] text-[#0D0D0D] tracking-wider uppercase">
                ENGAGE
              </div>
            </div>

            {/* Global Search Bar */}
            <div className="flex-1 max-w-[240px] hidden md:flex items-center gap-1.5 px-2 py-1 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#94A3B8]">
              <Search className="w-3 h-3 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search conversations, contacts..."
                className="w-full bg-transparent outline-none text-[#0D0D0D] placeholder-[#94A3B8] text-[11px]"
                readOnly
                disabled
              />
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-[6px] text-[10.5px] text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0]">
                <span>All channels</span>
                <ChevronDown className="w-3 h-3 text-[#64748B]" />
              </div>

              <div className="w-6 h-6 rounded-[6px] border border-[#E2E8F0] flex items-center justify-center text-[#64748B]">
                <SlidersHorizontal className="w-3 h-3" />
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] bg-[#1E293B] text-white text-[10.5px] font-medium shadow-2xs">
                <Plus className="w-3 h-3" />
                <span className="hidden sm:inline">New conversation</span>
              </div>

              {/* Profile Avatar */}
              <div className="relative w-6 h-6 rounded-full bg-[#E2E8F0] overflow-hidden shrink-0 border border-[#CBD5E1]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-[#22C55E] border-1 border-white" />
              </div>
            </div>
          </div>

          {/* Main App Body */}
          <div
            className="w-full flex overflow-x-hidden no-scrollbar h-[490px] min-h-[490px] max-h-[490px] text-left relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* ---------------- COLUMN 1: LEFT SIDEBAR (ALWAYS VISIBLE) ---------------- */}
            <div className="w-[160px] lg:w-[172px] shrink-0 border-r border-[#F1F5F9] bg-[#FAFAFA] py-3 px-2 flex flex-col justify-between hidden md:flex select-none z-10">
              <div className="space-y-1 min-w-[145px]">
                {/* Active Inbox */}
                <div className="w-full h-[34px] rounded-[8px] bg-[#EEEDFF] text-[#4F46E5] px-2.5 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <Inbox className="w-4 h-4 text-[#4F46E5] shrink-0" />
                    <span className="text-[12px] font-semibold">Inbox</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#4F46E5]">
                    24
                  </span>
                </div>

                <div className="w-full h-[32px] rounded-[8px] text-[#64748B] px-2.5 flex items-center gap-2.5 text-[12px] font-medium">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>Contacts</span>
                </div>

                <div className="w-full h-[32px] rounded-[8px] text-[#64748B] px-2.5 flex items-center gap-2.5 text-[12px] font-medium">
                  <Bot className="w-4 h-4 shrink-0" />
                  <span>Automations</span>
                </div>

                <div className="w-full h-[32px] rounded-[8px] text-[#64748B] px-2.5 flex items-center gap-2.5 text-[12px] font-medium">
                  <BarChart3 className="w-4 h-4 shrink-0" />
                  <span>Analytics</span>
                </div>

                <div className="w-full h-[32px] rounded-[8px] text-[#64748B] px-2.5 flex items-center gap-2.5 text-[12px] font-medium">
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Campaigns</span>
                </div>

                <div className="w-full h-[32px] rounded-[8px] text-[#64748B] px-2.5 flex items-center gap-2.5 text-[12px] font-medium">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>Templates</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EEF2F6] min-w-[145px]">
                <div className="w-full h-[32px] rounded-[8px] text-[#64748B] px-2.5 flex items-center gap-2.5 text-[12px] font-medium">
                  <Settings className="w-4 h-4 shrink-0" />
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* ---------------- COLUMN 2: CONVERSATIONS LIST (SLIDES LEFT & DISAPPEARS UPON SELECTION) ---------------- */}
            <div
              className={`shrink-0 border-r border-[#F1F5F9] bg-white flex flex-col transition-all duration-500 ease-in-out ${
                isChatRevealed
                  ? 'w-0 max-w-0 opacity-0 -translate-x-full overflow-hidden p-0 border-r-0 pointer-events-none'
                  : 'w-[245px] lg:w-[265px] opacity-100 translate-x-0'
              }`}
            >
              {/* Header */}
              <div className="p-2.5 border-b border-[#F1F5F9] min-w-[240px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] text-[#0D0D0D]">
                    Conversations
                  </span>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>

                {/* Filter Pills */}
                <div
                  className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar select-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {/* All (24) */}
                  <div className="w-[40px] h-[52px] rounded-[8px] flex flex-col items-center justify-center gap-1 shrink-0 bg-[#ECECFF] text-[#4F46E5] font-semibold border border-[#C7D2FE]">
                    <span className="text-[11px] font-medium leading-none">
                      All
                    </span>
                    <span className="text-[11px] font-bold leading-none">
                      24
                    </span>
                  </div>

                  {/* Gmail / Email (8) */}
                  <div className="w-[34px] py-1 flex flex-col items-center justify-center gap-1 shrink-0">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#EA4335]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.3"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold leading-none text-[#64748B]">
                      8
                    </span>
                  </div>

                  {/* Instagram (6) */}
                  <div className="w-[34px] py-1 flex flex-col items-center justify-center gap-1 shrink-0">
                    <div className="w-5 h-5 rounded-[5px] overflow-hidden flex items-center justify-center">
                      <InstaLogoSvg className="w-full h-full" />
                    </div>
                    <span className="text-[10px] font-semibold leading-none text-[#64748B]">
                      6
                    </span>
                  </div>

                  {/* WhatsApp (5) */}
                  <div className="w-[34px] py-1 flex flex-col items-center justify-center gap-1 shrink-0">
                    <div className="w-5 h-5 rounded-[5px] bg-[#25D366] flex items-center justify-center text-white">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.63c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold leading-none text-[#64748B]">
                      5
                    </span>
                  </div>

                  {/* LinkedIn (3) */}
                  <div className="w-[34px] py-1 flex flex-col items-center justify-center gap-1 shrink-0">
                    <div className="w-5 h-5 rounded-[5px] bg-[#0A66C2] flex items-center justify-center text-white font-bold text-[9px]">
                      in
                    </div>
                    <span className="text-[10px] font-semibold leading-none text-[#64748B]">
                      3
                    </span>
                  </div>

                  {/* Chat (2) */}
                  <div className="w-[34px] py-1 flex flex-col items-center justify-center gap-1 shrink-0">
                    <div className="w-5 h-5 rounded-[5px] bg-[#00B2FF] flex items-center justify-center text-white">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold leading-none text-[#64748B]">
                      2
                    </span>
                  </div>
                </div>
              </div>

              {/* Items List (Lists line by line) */}
              <div
                className="flex-1 overflow-y-auto no-scrollbar p-1.5 space-y-1 min-w-[240px]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {CONVERSATIONS_DATA.slice(0, visibleDmCount).map((item, idx) => {
                  const isSelected = item.id === activeId;
                  const isFirstItem = idx === 0;

                  return (
                    <div
                      key={item.id}
                      ref={isFirstItem ? targetCardRef : undefined}
                      className={`w-full min-h-[62px] rounded-[10px] pl-3 pr-2 py-2 flex items-center gap-2.5 transition-all duration-300 animate-[fadeIn_0.35s_ease-out] ${
                        isSelected
                          ? 'bg-[#EFF5FF] border border-[#BFDBFE] shadow-2xs scale-[1.01]'
                          : 'bg-white border border-transparent'
                      }`}
                    >
                      {/* Channel Icon */}
                      {renderChannelIcon(item.channel)}

                      {/* Content text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span
                            className={`text-[12px] truncate ${
                              isSelected
                                ? 'font-bold text-[#0D0D0D]'
                                : 'font-medium text-[#1E293B]'
                            }`}
                          >
                            {item.sender}
                          </span>
                          <div className="flex items-center gap-1 shrink-0 ml-1">
                            <span className="text-[9.5px] text-[#94A3B8]">
                              {item.time}
                            </span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                            )}
                          </div>
                        </div>
                        <p className="text-[10.5px] text-[#64748B] truncate leading-tight">
                          {item.preview}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ---------------- COLUMN 3: GMAIL UI CONVERSATION (EXPANDS TO FILL WHEN DM LIST SLIDES AWAY) ---------------- */}
            {!isChatRevealed ? (
              /* BLANK STATE: Clean placeholder before DM is clicked */
              <div className="flex-1 min-w-[260px] flex flex-col justify-center items-center p-6 text-center bg-white border-r border-[#F1F5F9] select-none animate-[fadeIn_0.3s_ease-out]">
                <div className="text-[13px] font-semibold text-[#0D0D0D] mb-1">
                  No conversation selected
                </div>
                <p className="text-[11px] text-[#94A3B8] max-w-[210px] leading-relaxed">
                  Engage Agent listening across customer channels and routing responses...
                </p>
              </div>
            ) : (
              /* REVEALED GMAIL UI: Authentic Gmail interface layout */
              <div className="flex-1 min-w-0 flex flex-col justify-between bg-white overflow-hidden transition-all duration-500 ease-in-out animate-[fadeIn_0.35s_ease-out]">
                {/* 1. Gmail Top Action Toolbar */}
                <div className="h-[42px] px-3 border-b border-[#E2E8F0] bg-white flex items-center justify-between shrink-0 select-none">
                  {/* Left Action Icons */}
                  <div className="flex items-center gap-1 text-[#444746]">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <Archive className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <AlertOctagon className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <Trash2 className="w-4 h-4" />
                    </div>

                    <div className="h-4 w-[1px] bg-[#E2E8F0] mx-1" />

                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <CheckSquare className="w-4 h-4" />
                    </div>

                    <div className="h-4 w-[1px] bg-[#E2E8F0] mx-1" />

                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <FolderInput className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <Tag className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer text-[#444746]">
                      <MoreVertical className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right Navigation / Counter */}
                  <div className="flex items-center gap-1.5 text-[#444746]">
                    <span className="text-[11px] text-[#444746] mr-1">
                      1 of 24
                    </span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                      <ChevronLeft className="w-3.5 h-3.5 text-[#444746]" />
                    </div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                      <ChevronRight className="w-3.5 h-3.5 text-[#444746]" />
                    </div>
                  </div>
                </div>

                {/* 2. Scrollable Email Conversation Body */}
                <div
                  className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {/* Subject Line & Inbox Pill */}
                  <div className="flex items-start justify-between gap-3 border-b border-[#F1F5F9] pb-3.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-[16px] sm:text-[18px] font-normal text-[#1F1F1F] tracking-[-0.2px] leading-snug">
                        Enquiry about multi-channel lead engagement
                      </h2>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] bg-[#E8EAED] text-[#444746] text-[10.5px] font-medium shrink-0">
                        <span>Inbox</span>
                        <X className="w-2.5 h-2.5 cursor-pointer hover:text-black" />
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 text-[#444746] shrink-0 pt-0.5">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                        <Printer className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Message 1: Incoming Customer Email */}
                  <div className="space-y-3">
                    {/* Sender Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E2E8F0] text-[#475569] flex items-center justify-center font-semibold text-[13px] shrink-0 mt-0.5">
                          T
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1.5 flex-wrap">
                            <span className="font-semibold text-[12.5px] text-[#1F1F1F]">
                              team@nextwave.com
                            </span>
                            <span className="text-[11px] text-[#5E5E5E]">
                              &lt;team@nextwave.com&gt;
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-[#5E5E5E] mt-0.5">
                            <span>to me</span>
                            <ChevronDown className="w-3 h-3 text-[#5E5E5E]" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#5E5E5E] shrink-0 text-[11px]">
                        <span>10:34 AM (2 mins ago)</span>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                          <Star className="w-3.5 h-3.5 text-[#5E5E5E]" />
                        </div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                          <Smile className="w-3.5 h-3.5 text-[#5E5E5E]" />
                        </div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                          <Reply className="w-3.5 h-3.5 text-[#5E5E5E]" />
                        </div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                          <MoreVertical className="w-3.5 h-3.5 text-[#5E5E5E]" />
                        </div>
                      </div>
                    </div>

                    {/* Email Body */}
                    <div className="pl-11 pr-2 text-[12.5px] text-[#1F1F1F] leading-[1.65] space-y-2.5">
                      <p>Hi Coirei Team,</p>
                      <p>
                        We're exploring AI-powered engagement solutions to streamline our lead communication and sales workflows.
                      </p>
                      <p>
                        We're also interested in understanding how it can help us engage prospects more effectively and convert conversations into business opportunities. </p>
                      <p>
Could we schedule a quick 15-minute walkthrough to explore the platform?

                      </p>
                      <div className="pt-2 text-[#5E5E5E] text-[11px] leading-relaxed border-t border-[#F1F5F9] mt-3">
                        <p className="font-medium text-[#1F1F1F]">Alex Morgan | Enterprise Operations</p>
                        <p className="text-[#0B57D0]">team@nextwave.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Message 2: Engage Agent Automated Reply (Threaded in Gmail) */}
                  {visibleMsgCount >= 2 && (
                    <div className="mt-4 pt-3.5 border-t border-[#F1F5F9] space-y-2.5 transition-all duration-300 animate-[fadeIn_0.35s_ease-out]">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#EEEDFF] text-[#4F46E5] flex items-center justify-center font-bold text-[12px] shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                          </div>
                          <div>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                              <span className="font-semibold text-[12.5px] text-[#1F1F1F]">
                                Coirei Engage Agent
                              </span>
                              <span className="text-[11px] text-[#5E5E5E]">
                                &lt;agent@coirei.com&gt;
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-[#5E5E5E] mt-0.5">
                              <span>to team@nextwave.com</span>
                              <ChevronDown className="w-3 h-3 text-[#5E5E5E]" />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[#5E5E5E] shrink-0 text-[11px]">
                          <span>10:34 AM (Just now)</span>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F1F5F9] cursor-pointer">
                            <Star className="w-3.5 h-3.5 text-[#5E5E5E]" />
                          </div>
                        </div>
                      </div>

                      <div className="pl-11 pr-2 text-[12.5px] text-[#1F1F1F] leading-[1.65] space-y-2">
                        <p>Hi Alex,</p>
                        <p>
                          I’ve sent our volume pricing tier breakdown directly to your inbox and notified our solutions architect.
                        </p>
                        <div className="mt-2 p-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-[11px] max-w-sm">
                          <div className="flex items-center gap-2 text-[#1E293B]">
                            <FileText className="w-4 h-4 text-[#4F46E5]" />
                            <span className="font-medium">Coirei_Enterprise_Tiers_50Seats.pdf</span>
                          </div>
                          <span className="text-[#64748B] text-[10px]">240 KB</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message 3: Customer follow-up */}
                  {visibleMsgCount >= 3 && (
                    <div className="mt-3 pt-3 border-t border-[#F1F5F9] space-y-2 transition-all duration-300 animate-[fadeIn_0.35s_ease-out]">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#E2E8F0] text-[#475569] flex items-center justify-center font-semibold text-[13px] shrink-0 mt-0.5">
                            T
                          </div>
                          <div>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                              <span className="font-semibold text-[12.5px] text-[#1F1F1F]">
                                team@nextwave.com
                              </span>
                              <span className="text-[11px] text-[#5E5E5E]">
                                &lt;team@nextwave.com&gt;
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-[#5E5E5E] mt-0.5">
                              <span>to me</span>
                              <ChevronDown className="w-3 h-3 text-[#5E5E5E]" />
                            </div>
                          </div>
                        </div>

                        <div className="text-[11px] text-[#5E5E5E]">
                          10:35 AM
                        </div>
                      </div>

                      <div className="pl-11 pr-2 text-[12.5px] text-[#1F1F1F] leading-[1.65]">
                        <p>Thanks! Can we get a quick 15-min walkthrough as well?</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Authentic Gmail Reply & Forward Action Buttons at the Bottom */}
                <div className="px-5 py-3 border-t border-[#F1F5F9] bg-white flex items-center gap-2.5 shrink-0 select-none">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#747775] text-[#1F1F1F] text-[12px] font-medium hover:bg-[#F8FAFC] transition-colors"
                  >
                    <Reply className="w-3.5 h-3.5 text-[#444746]" />
                    <span>Reply</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#747775] text-[#1F1F1F] text-[12px] font-medium hover:bg-[#F8FAFC] transition-colors"
                  >
                    <Forward className="w-3.5 h-3.5 text-[#444746]" />
                    <span>Forward</span>
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#747775] flex items-center justify-center text-[#444746] hover:bg-[#F8FAFC] transition-colors"
                  >
                    <Smile className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- COLUMN 4: CONTACT & LEAD PROFILE (APPEARS BESIDE GMAIL CONVERSATION) ---------------- */}
            <div
              className={`shrink-0 bg-[#FAFAFA] border-l border-[#F1F5F9] flex flex-col justify-between select-none overflow-y-auto no-scrollbar transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isProfileRevealed
                  ? 'w-[200px] lg:w-[220px] p-3 opacity-100 translate-x-0'
                  : 'w-0 p-0 border-l-0 opacity-0 translate-x-12 overflow-hidden pointer-events-none'
              }`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="space-y-3 min-w-[175px]">
                {/* Profile Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#6366F1] text-white font-bold text-[12px] flex items-center justify-center">
                      {activeConv.sender[0]?.toUpperCase() || 'N'}
                    </div>
                    <div>
                      <div className="font-bold text-[11.5px] text-[#0D0D0D] leading-tight truncate max-w-[100px]">
                        {activeConv.sender}
                      </div>
                      <div className="text-[9.5px] text-[#64748B] truncate max-w-[100px]">
                        {activeConv.email}
                      </div>
                    </div>
                  </div>
                  <MoreVertical className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>

                <div className="text-[9.5px] text-[#94A3B8]">
                  {activeConv.location}
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="px-1.5 py-0.5 rounded-[4px] bg-[#DCFCE7] text-[#16A34A] text-[9.5px] font-semibold">
                    New Lead
                  </span>
                  <span className="px-1.5 py-0.5 rounded-[4px] bg-[#FEE2E2] text-[#DC2626] text-[9.5px] font-semibold">
                    High Intent
                  </span>
                </div>

                {/* Mini Tabs */}
                <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] pb-0.5 text-[10px]">
                  <span className="font-semibold text-[#2563EB] border-b-2 border-[#2563EB] pb-0.5">
                    Details
                  </span>
                  <span className="text-[#64748B]">Activity</span>
                  <span className="text-[#64748B]">Notes</span>
                </div>

                {/* Details Fields */}
                <div className="space-y-2 text-[10px]">
                  <div>
                    <span className="font-semibold text-[#0D0D0D] block mb-0.5">
                      About
                    </span>
                    <p className="text-[#64748B] leading-relaxed text-[9.5px]">
                      {activeConv.about}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-[#0D0D0D] block mb-0.5">
                      Channel
                    </span>
                    <span className="capitalize text-[#475569] text-[9.5px]">
                      Gmail
                    </span>
                  </div>

                  {/* Lead Score Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-[#0D0D0D] text-[9.5px]">
                        Lead Score
                      </span>
                      <span className="font-bold text-[#16A34A] text-[9.5px]">
                        {activeConv.leadScore}%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#16A34A] rounded-full transition-all duration-500"
                        style={{ width: `${activeConv.leadScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <span className="font-semibold text-[#0D0D0D] block mb-0.5">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {activeConv.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#475569] text-[8.5px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity Footer */}
              <div className="pt-2 border-t border-[#E2E8F0] text-[9.5px] min-w-[175px]">
                <span className="font-semibold text-[#0D0D0D] block mb-0.5">
                  Recent Activity
                </span>
                <div className="flex items-center justify-between text-[#64748B]">
                  <div className="flex items-center gap-1 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                    <span className="truncate">Visited pricing</span>
                  </div>
                  <span className="text-[#2563EB]">View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
