import React, { useState, useRef, useEffect } from 'react';
import {
  Database,
  Folder,
  ChevronDown,
  ChevronRight,
  Plus,
  RotateCcw,
  ArrowRight,
  GripVertical,
  Link2,
  ArrowUp,
} from 'lucide-react';

interface CompetitorRow {
  id: string;
  name: string;
  outerBg: string;
  focusArea: string;
  keyStrengths: string;
}

const COMPETITOR_ROWS: CompetitorRow[] = [
  {
    id: 'hubspot',
    name: 'HubSpot',
    outerBg: '#E6A8F1',
    focusArea: 'Marketing',
    keyStrengths: 'All-in-one CRM',
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    outerBg: '#FFDE6A',
    focusArea: 'Email Marketing',
    keyStrengths: 'Easy to use',
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    outerBg: '#4C51F7',
    focusArea: 'Automation',
    keyStrengths: 'Advanced flows',
  },
  {
    id: 'zoho',
    name: 'Zoho Marketing Plus',
    outerBg: '#E05D52',
    focusArea: 'Multi-channel',
    keyStrengths: 'Cost effective',
  },
  {
    id: 'brevo',
    name: 'Brevo (Sendinblue)',
    outerBg: '#458575',
    focusArea: 'Email + CRM',
    keyStrengths: 'SME focused',
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    outerBg: '#333336',
    focusArea: 'Ecommerce',
    keyStrengths: 'Strong analytics',
  },
];

export const CompetitorHeroMockup: React.FC = () => {
  const activeTab: string = 'insights';
  const selectedRow = 'hubspot';
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  // Staged Animation Sequence:
  // stage 0: Small card typing initial prompt
  // stage 1: First, RIGHT section reveals
  // stage 2: Then, LEFT section reveals
  // stage 3: Then, list inside table runs/populates row-by-row
  const [stage, setStage] = useState<number>(0);
  const [typedFollowUp, setTypedFollowUp] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [visibleRowsCount, setVisibleRowsCount] = useState<number>(0);

  const FOLLOW_UP_TARGET =
    'Explore every competitor in detail, compare their strategies, and uncover opportunities to stay ahead.';

  // Responsive scaling observer
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const newScale = Math.min(1, Math.max(0.24, width / 1534));
        setScale(newScale);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  // Stage 0: Quick typing inside small card
  useEffect(() => {
    if (stage !== 0) return;

    let charIdx = 0;
    setTypedFollowUp('');
    setIsSubmitting(false);
    setVisibleRowsCount(0);

    const startTimer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (charIdx < FOLLOW_UP_TARGET.length) {
          setTypedFollowUp(FOLLOW_UP_TARGET.slice(0, charIdx + 1));
          charIdx++;
        } else {
          clearInterval(typeInterval);

          // Fast submit pulse
          setTimeout(() => {
            setIsSubmitting(true);
            setTimeout(() => {
              // Trigger Stage 1: Right section reveals first!
              setStage(1);
              setIsSubmitting(false);
            }, 220);
          }, 240);
        }
      }, 14);

      return () => clearInterval(typeInterval);
    }, 250);

    return () => clearTimeout(startTimer);
  }, [stage]);

  // Stage 1 -> Stage 2: After right section reveals, reveal left section!
  useEffect(() => {
    if (stage !== 1) return;

    const leftTimer = setTimeout(() => {
      setStage(2);
    }, 450);

    return () => clearTimeout(leftTimer);
  }, [stage]);

  // Stage 2 -> Stage 3: After left section reveals, run the list row by row!
  useEffect(() => {
    if (stage !== 2) return;

    const rowTimer = setTimeout(() => {
      setStage(3);
    }, 350);

    return () => clearTimeout(rowTimer);
  }, [stage]);

  // Stage 3: Run/populate table rows one by one
  useEffect(() => {
    if (stage !== 3) return;

    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleRowsCount(count);
      if (count >= COMPETITOR_ROWS.length) {
        clearInterval(interval);
      }
    }, 130);

    return () => clearInterval(interval);
  }, [stage]);

  
  const dashboardHeight = Math.round(814 * scale);
  const isDashboardActive = stage >= 1;
  const currentWrapperHeight = isDashboardActive ? dashboardHeight : 210;

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1060px] mx-auto flex flex-col items-center mt-6 sm:mt-8 select-none pointer-events-none cursor-default"
    >
      {/* Outer Smooth Height Transitioning Box */}
      <div
        className="w-full relative flex flex-col items-center overflow-hidden transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height: `${currentWrapperHeight}px` }}
      >
        {/* ======================================================== */}
        {/* 1. INITIAL PHASE: ONLY THIS SMALL CARD (Clean Neutral) */}
        {/* ======================================================== */}
        <div
          className={`w-full absolute top-0 left-0 right-0 py-6 flex flex-col items-center transition-all duration-500 ease-out ${
            stage === 0
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-none'
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}
        >
          <div
            
            className={`w-full max-w-[420px] sm:max-w-[460px] min-h-[148px] rounded-[20px] bg-white border border-[#E2E8F0] p-4 sm:p-5 flex flex-col justify-between shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06),0_4px_12px_-2px_rgba(0,0,0,0.03)] cursor-default transition-all duration-200 ${
              isSubmitting
                ? 'scale-[0.98] border-[#94A3B8] shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                : 'hover:border-[#CBD5E1] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)]'
            }`}
          >
            {/* Typing text area */}
            <div className="text-left min-h-[56px]">
              <p className="text-[13.5px] sm:text-[14px] text-[#0F172A] leading-[1.55] font-normal">
                {typedFollowUp}
                {stage === 0 && (
                  <span className="inline-block w-[2px] h-[15px] bg-[#0F172A] ml-1 animate-pulse align-middle" />
                )}
              </p>
            </div>

            {/* Bottom controls */}
            <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
              <div className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold tracking-wider text-[#475569] select-none">
                <span>COIREI</span>
                <ChevronDown size={11} className="text-[#94A3B8]" />
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  className="w-7 h-7 rounded-[7px] bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] flex items-center justify-center transition-colors shadow-2xs"
                  title="Send"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 3 10.5 19.5 13.5 13.5 19.5 10.5 3 3" /></svg>
                </button>
                <button
                  type="button"
                  className="w-7 h-7 rounded-[7px] bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] flex items-center justify-center transition-colors shadow-2xs"
                  title="Add"
                >
                  <Plus size={13} />
                </button>
                <button
                  type="button"
                  
                  className={`w-7 h-7 rounded-[7px] flex items-center justify-center transition-all duration-150 shadow-2xs ${
                    isSubmitting
                      ? 'bg-black text-white scale-105'
                      : 'bg-[#1E1E1E] hover:bg-black text-white'
                  }`}
                  title="Submit"
                >
                  <ArrowUp size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. REVEALED PHASE: CHOREOGRAPHED MULTI-STAGE REVEAL */}
        {/* Stage 1: Right Section reveals first */}
        {/* Stage 2: Left Section reveals */}
        {/* Stage 3: Inside list runs row-by-row */}
        {/* ======================================================== */}
        <div
          className={`w-full flex flex-col items-center transition-all duration-600 ease-out ${
            isDashboardActive
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-none'
              : 'opacity-0 scale-98 translate-y-3 pointer-events-none'
          }`}
        >

          {/* Main Scaled Canvas */}
          <div
            className="w-full flex justify-center overflow-hidden"
            style={{ height: `${dashboardHeight}px` }}
          >
            <div
              className="shrink-0 transition-transform duration-150 ease-out"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                width: '1534px',
                height: '814px',
              }}
            >
              {/* Side-by-side Unified Layout */}
              <div className="relative flex flex-row items-start justify-center gap-6 w-[1534px]">
                
                {/* ======================================================== */}
                {/* 1. LEFT MAIN WORKSPACE: 1,177px × 812px */}
                {/* Reveals in Stage >= 2 (AFTER right section has revealed) */}
                {/* ======================================================== */}
                <div
                  className={`w-[1177px] h-[812px] shrink-0 rounded-[32px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] p-7 lg:p-9 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-600 ease-out ${
                    stage >= 2
                      ? 'opacity-100 translate-x-0 scale-100 pointer-events-none'
                      : 'opacity-0 -translate-x-8 scale-[0.98] pointer-events-none'
                  }`}
                >
                  {/* Inner Workspace Card */}
                  <div className="w-full rounded-[20px] bg-white border border-[#E2E8F0] overflow-hidden flex flex-col shadow-xs">
                    
                    {/* Top Bar: Product Analysis & Website Pill */}
                    <div className="h-[52px] bg-[#F8FAFC] border-b border-[#E2E8F0] px-6 flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] text-[13px] font-medium transition-colors shadow-2xs"
                      >
                        <span>Product Analysis</span>
                        <ChevronDown size={13} className="text-[#64748B]" />
                      </button>

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[7px] bg-white border border-[#E2E8F0] text-[12.5px] text-[#64748B] shadow-2xs">
                        <span>Website -</span>
                        <div className="inline-flex items-center gap-1.5 text-[#334155]">
                          <Link2 size={12} className="text-[#94A3B8]" />
                          <span>yourdomain.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Workspace Body: Sidebar + Table */}
                    <div className="relative flex flex-row h-[530px] overflow-hidden">
                      
                      {/* Left Sidebar */}
                      <div className="w-[275px] shrink-0 bg-[#F8FAFC] border-r border-[#E2E8F0] p-4 flex flex-col justify-between">
                        <div>
                          {/* Tabs */}
                          <div className="flex items-center gap-1.5 pb-3 border-b border-[#E2E8F0]">
                            <button
                              type="button"
                              
                              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-all ${
                                activeTab === 'insights'
                                  ? 'bg-white text-[#0F172A] border border-[#E2E8F0] shadow-xs'
                                  : 'text-[#64748B] hover:text-[#0F172A]'
                              }`}
                            >
                              Insights
                            </button>
                            <button
                              type="button"
                              
                              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-all ${
                                activeTab === 'data'
                                  ? 'bg-white text-[#0F172A] border border-[#E2E8F0] shadow-xs'
                                  : 'text-[#64748B] hover:text-[#0F172A]'
                              }`}
                            >
                              Data
                            </button>
                            <button
                              type="button"
                              
                              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-all ${
                                activeTab === 'reports'
                                  ? 'bg-white text-[#0F172A] border border-[#E2E8F0] shadow-xs'
                                  : 'text-[#64748B] hover:text-[#0F172A]'
                              }`}
                            >
                              Reports
                            </button>
                          </div>

                          {/* Folder Tree */}
                          <div className="mt-3.5 space-y-1">
                            <div className="h-[34px] px-2.5 rounded-[8px] hover:bg-[#F1F5F9] flex items-center gap-2 text-[12.5px] text-[#64748B] cursor-default transition-colors">
                              <ChevronRight size={13} className="text-[#94A3B8]" />
                              <Folder size={14} className="text-[#94A3B8]" />
                              <span>Overview</span>
                            </div>

                            <div>
                              <div className="h-[34px] px-2.5 rounded-[8px] flex items-center gap-2 text-[12.5px] text-[#0F172A] font-semibold cursor-default">
                                <ChevronDown size={13} className="text-[#0F172A]" />
                                <Folder size={14} className="text-[#0F172A]" />
                                <span>Competitors</span>
                              </div>

                              <div className="pl-3 pr-1 py-0.5">
                                <div className="h-[39px] rounded-[10px] bg-white pl-3.5 pr-3 flex items-center justify-between text-[#0F172A] border border-[#E2E8F0] shadow-xs">
                                  <div className="flex items-center gap-2.5">
                                    <Database size={14} className="text-[#475569] shrink-0" />
                                    <span className="text-[12.5px] font-semibold text-[#0F172A]">Competitor List</span>
                                  </div>
                                  <span className="text-[11px] text-[#64748B] font-medium tracking-tight">
                                    {stage >= 3 ? `${Math.max(6, visibleRowsCount * 2)} found` : '12 found'}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="h-[34px] px-2.5 rounded-[8px] hover:bg-[#F1F5F9] flex items-center gap-2 text-[12.5px] text-[#64748B] cursor-default transition-colors">
                              <ChevronRight size={13} className="text-[#94A3B8]" />
                              <Folder size={14} className="text-[#94A3B8]" />
                              <span>Market Analysis</span>
                            </div>

                            <div className="h-[34px] px-2.5 rounded-[8px] hover:bg-[#F1F5F9] flex items-center gap-2 text-[12.5px] text-[#64748B] cursor-default transition-colors">
                              <ChevronRight size={13} className="text-[#94A3B8]" />
                              <Folder size={14} className="text-[#94A3B8]" />
                              <span>Target Audience</span>
                            </div>

                            <div className="h-[34px] px-2.5 rounded-[8px] hover:bg-[#F1F5F9] flex items-center gap-2 text-[12.5px] text-[#64748B] cursor-default transition-colors">
                              <ChevronRight size={13} className="text-[#94A3B8]" />
                              <Folder size={14} className="text-[#94A3B8]" />
                              <span>Feature Comparison</span>
                            </div>

                            <div className="h-[34px] px-2.5 rounded-[8px] hover:bg-[#F1F5F9] flex items-center gap-2 text-[12.5px] text-[#64748B] cursor-default transition-colors">
                              <ChevronRight size={13} className="text-[#94A3B8]" />
                              <Folder size={14} className="text-[#94A3B8]" />
                              <span>Pricing Analysis</span>
                            </div>

                            <div className="h-[34px] px-2.5 rounded-[8px] hover:bg-[#F1F5F9] flex items-center gap-2 text-[12.5px] text-[#64748B] cursor-default transition-colors">
                              <ChevronRight size={13} className="text-[#94A3B8]" />
                              <Folder size={14} className="text-[#94A3B8]" />
                              <span>Growth Opportunities</span>
                            </div>

                            <div className="pt-2 px-3 flex items-center gap-2 text-[12px] text-[#94A3B8] hover:text-[#64748B] cursor-default transition-colors">
                              <Plus size={13} />
                              <span>Add...</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Table View */}
                      <div className="flex-1 min-w-0 bg-white flex flex-col overflow-x-auto relative">
                        <div className="h-[52px] border-b border-[#E2E8F0] px-6 flex items-center gap-[19px] shrink-0 bg-white select-none">
                          {/* 1. Plus Icon */}
                          <svg width="18" height="17" viewBox="0 0 19 17" fill="none" stroke="#A3A3A3" strokeWidth="1.8" strokeLinecap="round">
                            <line x1="9.5" y1="3" x2="9.5" y2="14" />
                            <line x1="4" y1="8.5" x2="15" y2="8.5" />
                          </svg>

                          {/* 2. Sort Icon (↓↑ 18.75px × 16.66px, #A3A3A3, stroke: 1.8px) */}
                          <svg width="18" height="17" viewBox="0 0 19 17" fill="none" stroke="#A3A3A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 3v10M2 10.5l2.5 2.5 2.5-2.5" />
                            <path d="M14.5 14V4M12 6.5l2.5-2.5 2.5 2.5" />
                          </svg>

                          {/* 3. Filter Icon (☰ Descending 3-lines filter) */}
                          <svg width="18" height="17" viewBox="0 0 19 17" fill="none" stroke="#A3A3A3" strokeWidth="1.8" strokeLinecap="round">
                            <line x1="2" y1="4.5" x2="17" y2="4.5" />
                            <line x1="4.5" y1="8.5" x2="14.5" y2="8.5" />
                            <line x1="7" y1="12.5" x2="12" y2="12.5" />
                          </svg>

                          {/* 4. Search Icon (🔍) */}
                          <svg width="18" height="17" viewBox="0 0 19 17" fill="none" stroke="#A3A3A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="8" cy="7.5" r="5" />
                            <line x1="12" y1="11.5" x2="16.5" y2="15.5" />
                          </svg>
                        </div>

                        <div className="h-[44px] border-b border-[#E2E8F0] px-5 flex items-center text-[12px] font-medium text-[#64748B] bg-[#FAFAFA] shrink-0">
                          <div className="w-[42px] flex items-center justify-center">
                            <div className="w-3.5 h-3.5 rounded-[4px] border border-[#CBD5E1]" />
                          </div>
                          <div className="w-[165px] pl-2 text-left">Competitor</div>
                          <div className="w-[145px] text-left">Website</div>
                          <div className="w-[165px] text-left">Focus Area</div>
                          <div className="flex-1 text-left">Key Strengths</div>
                        </div>

                        {/* Table Rows: Populates row-by-row in Stage 3! */}
                        <div className="divide-y divide-[#F1F5F9]">
                          {COMPETITOR_ROWS.map((row, idx) => {
                            // In Stage 3, rows populate progressively; otherwise hidden or revealed if skipped
                            const isRowVisible = stage >= 3 ? idx < visibleRowsCount : false;

                            return (
                              <div
                                key={row.id}
                                
                                className={`h-[62px] px-5 flex items-center text-[13px] cursor-default transition-all duration-300 ease-out ${
                                  isRowVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-2 pointer-events-none'
                                } ${selectedRow === row.id ? 'bg-[#F1F5F9]/70' : 'hover:bg-[#F8FAFC]'}`}
                              >
                                <div className="w-[42px] flex items-center gap-1.5 justify-start text-[#94A3B8]">
                                  <GripVertical size={13} className="text-[#CBD5E1]" />
                                  <div
                                    className={`w-3.5 h-3.5 rounded-[4px] border flex items-center justify-center ${
                                      selectedRow === row.id
                                        ? 'bg-[#0F172A] border-[#0F172A] text-white'
                                        : 'border-[#CBD5E1]'
                                    }`}
                                  >
                                    {selectedRow === row.id && <div className="w-1.5 h-1.5 bg-white rounded-2xs" />}
                                  </div>
                                </div>

                                <div className="w-[165px] pl-2 font-semibold text-[#0F172A] text-left truncate">
                                  {row.name}
                                </div>

                                <div className="w-[145px] flex items-center">
                                  {/* Figma Website Preview Card: 68px × 29px, Radius: 6px, Border: 1px #FFFFFF 20.78% */}
                                  <svg
                                    width="68"
                                    height="29"
                                    viewBox="0 0 68 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0 select-none shadow-2xs"
                                  >
                                    {/* Outer Card with 1px border at 20.78% opacity */}
                                    <rect
                                      x="0.5"
                                      y="0.5"
                                      width="67"
                                      height="28"
                                      rx="6"
                                      fill={row.outerBg}
                                      stroke="white"
                                      strokeOpacity="0.2078"
                                    />

                                    {/* Top Address Bar Capsule */}
                                    <rect
                                      x="8"
                                      y="3"
                                      width="52"
                                      height="3.5"
                                      rx="1.75"
                                      fill="white"
                                      fillOpacity="0.85"
                                    />

                                    {/* Inner Card: 47px × 21.5px, Centered, Radius: 3px, Fill: #FFFFFF 88% */}
                                    <rect
                                      x="10.5"
                                      y="7.5"
                                      width="47"
                                      height="21.5"
                                      rx="3"
                                      fill="white"
                                      fillOpacity="0.88"
                                    />

                                    {/* Typography: Inter, 700 Bold, Size: 3.5px, Color: #343434 (Figma spec) */}
                                    <text
                                      x="13.5"
                                      y="12.8"
                                      fontFamily="'Inter', sans-serif"
                                      fontSize="3.5"
                                      fontWeight="700"
                                      fill="#343434"
                                      letterSpacing="0"
                                    >
                                      {row.name}
                                    </text>

                                    {/* Neutral light grey skeleton placeholder bars (Figma spec) */}
                                    <rect
                                      x="13.5"
                                      y="15.2"
                                      width="22"
                                      height="1.8"
                                      rx="0.9"
                                      fill="#D4D4D8"
                                      fillOpacity="0.75"
                                    />
                                    <rect
                                      x="13.5"
                                      y="18.2"
                                      width="14"
                                      height="1.4"
                                      rx="0.7"
                                      fill="#D4D4D8"
                                      fillOpacity="0.55"
                                    />
                                  </svg>
                                </div>

                                <div className="w-[165px] flex items-center">
                                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] text-[12px] text-[#334155] shadow-2xs">
                                    <span>{row.focusArea}</span>
                                    <ChevronDown size={11} className="text-[#94A3B8]" />
                                  </div>
                                </div>

                                <div className="flex-1 text-[#64748B] text-left truncate text-[12.5px]">
                                  {row.keyStrengths}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom White Gradient & Blur Fade Overlay */}
                        <div
                          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[72px] bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[1.5px] z-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row inside Left Frame */}
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-row items-center justify-between gap-4">
                    <div className="max-w-2xl text-left">
                      <h4 className="text-[17px] font-semibold text-[#0F172A] tracking-tight">
                        Analyze your product and competitors with AI.
                      </h4>
                      <p className="text-[13px] text-[#64748B] leading-relaxed mt-0.5">
                        Get a detailed competitor analysis, feature comparison, pricing insights, and market opportunities.
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#1E1E1E] hover:bg-[#0D0D0D] text-white flex items-center justify-center transition-all duration-200 group shrink-0 shadow-xs">
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* 2. RIGHT AI ASSISTANT FRAME: 333px × 812px */}
                {/* Reveals FIRST in Stage >= 1 */}
                {/* ======================================================== */}
                <div
                  className={`w-[333px] h-[812px] shrink-0 rounded-[32px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] p-[13px] flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out ${
                    stage >= 1
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-none'
                      : 'opacity-0 translate-y-4 scale-98 pointer-events-none'
                  }`}
                >
                  {/* Top Section */}
                  <div className="flex flex-col">
                    {/* Main prompt Box */}
                    <div className="w-[307px] min-h-[112px] rounded-[20px] bg-white border border-[#E2E8F0] p-4 flex flex-col justify-between shadow-xs">
                      <p className="text-[12.5px] leading-[1.55] text-[#334155] text-left">
                        <span className="text-[#0F172A] font-semibold">/analyze</span>{' '}
                        Find the top competitors for our product and analyze their features, pricing, and key strengths
                      </p>
                      <div className="flex justify-end pt-2">
                        <button
                          type="button"
                          
                          className="text-[#94A3B8] hover:text-[#0F172A] transition-colors cursor-default"
                          title="Replay sequence"
                        >
                          <RotateCcw size={13} />
                        </button>
                      </div>
                    </div>

                    {/* AI Thought & Response */}
                    <div className="mt-4 px-1 text-left">
                      <span className="text-[11px] font-mono text-[#94A3B8] tracking-wide block">
                        Thought 12s
                      </span>
                      <p className="mt-1.5 text-[12.5px] text-[#64748B] leading-relaxed">
                        Analyzing your product and searching for relevant competitors. I'll create a Competitor Analysis collection with key insights.
                      </p>
                    </div>

                    {/* Changes Card */}
                    <div className="w-[307px] mt-4 rounded-[18px] bg-white border border-[#E2E8F0] p-3.5 shadow-xs">
                      <div className="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
                        <span className="text-[12.5px] font-semibold text-[#0F172A]">Changes</span>
                        <button
                          type="button"
                          className="text-[11px] text-[#475569] hover:text-[#0F172A] px-2 py-0.5 rounded-[6px] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#E2E8F0] transition-colors"
                        >
                          Undo
                        </button>
                      </div>

                      <div className="mt-3 space-y-2.5">
                        <div className="flex items-center justify-between text-[12px]">
                          <div className="flex items-center gap-2 text-[#334155]">
                            <Database size={13} className="text-[#94A3B8]" />
                            <span>Competitor List</span>
                          </div>
                          <span className="text-[11px] text-[#94A3B8] font-mono">12 Items</span>
                        </div>

                        <div className="flex items-center justify-between text-[12px]">
                          <div className="flex items-center gap-2 text-[#334155]">
                            <Database size={13} className="text-[#94A3B8]" />
                            <span>Feature Comparison</span>
                          </div>
                          <span className="text-[11px] text-[#94A3B8] font-mono">12 Items</span>
                        </div>

                        <div className="flex items-center justify-between text-[12px]">
                          <div className="flex items-center gap-2 text-[#334155]">
                            <Database size={13} className="text-[#94A3B8]" />
                            <span>Pricing Analysis</span>
                          </div>
                          <span className="text-[11px] text-[#94A3B8] font-mono">12 Items</span>
                        </div>

                        <div className="flex items-center justify-between text-[12px]">
                          <div className="flex items-center gap-2 text-[#334155]">
                            <Database size={13} className="text-[#94A3B8]" />
                            <span>Market Insights</span>
                          </div>
                          <span className="text-[11px] text-[#94A3B8] font-mono">8 Items</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Follow-up Box */}
                  <div
                    className="w-[307px] min-h-[148px] rounded-[20px] bg-white border border-[#E2E8F0] p-4 flex flex-col justify-between shadow-xs"
                  >
                    <div className="text-left min-h-[56px]">
                      <p className="text-[13px] text-[#0F172A] leading-relaxed font-normal">
                        {FOLLOW_UP_TARGET}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
                      <div className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold tracking-wider text-[#475569] select-none">
                        <span>COIREI</span>
                        <ChevronDown size={11} className="text-[#94A3B8]" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          className="w-7 h-7 rounded-[7px] bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] flex items-center justify-center transition-colors shadow-2xs"
                          title="Send"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 3 10.5 19.5 13.5 13.5 19.5 10.5 3 3" /></svg>
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 rounded-[7px] bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] flex items-center justify-center transition-colors shadow-2xs"
                          title="Add"
                        >
                          <Plus size={13} />
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 rounded-[7px] bg-[#1E1E1E] hover:bg-black text-white flex items-center justify-center transition-colors shadow-2xs"
                          title="Submit"
                        >
                          <ArrowUp size={13} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorHeroMockup;
