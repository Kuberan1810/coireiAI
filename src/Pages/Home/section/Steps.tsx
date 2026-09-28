import React, { useState, useEffect, useRef } from 'react';
import {
  Plus,
  ArrowRight,
  Link2,
  Mic,
  Building2,
  Users,
  MapPin,
  Calendar,
  Lightbulb,
  Loader2,
  ChevronRight,
  Globe,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { icpData } from './icpData';
import { ICPTable } from './ICPTable';

interface StepData {
  id: string;
  title: string;
  description: string;
  headerTitle: string;
}

const stepsList: StepData[] = [
  {
    id: 'understand',
    title: 'Understand',
    description:
      'We analyze and extract relevant data from your website to build a complete understanding of your company, product, services, target audience, positioning, and what makes you different.',
    headerTitle: 'Connect your website',
  },
  {
    id: 'analyse',
    title: 'Analyse',
    description:
      'Coirei analyzes your market, industry trends, competitors, positioning, and customer landscape to give you a clear view of where your business stands. It compares key players, identifies market gaps, uncovers emerging trends',
    headerTitle: 'Whole analyzes',
  },
  {
    id: 'find',
    title: 'Find',
    description:
      'We identify your ideal customer profiles (ICP), uncovering high-intent accounts, buyer personas, and verified decision-makers.',
    headerTitle: 'Leads',
  },
];

type OverviewTab = 'overview' | 'social' | 'email' | 'positioning' | 'pages';
type Step1Stage = 'input' | 'analyzing' | 'overview';

export const Steps: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<OverviewTab>('overview');
  const [inputUrl, setInputUrl] = useState('coirei.com');
  const [stage, setStage] = useState<Step1Stage>('input');
  const [animStep, setAnimStep] = useState(1);
  const [isSendPressed, setIsSendPressed] = useState(false);
  const [selectedIcpRows, setSelectedIcpRows] = useState<number[]>([]);
  const [icpSearchVal, setIcpSearchVal] = useState('');

  const toggleSelectAllIcp = () => {
    if (selectedIcpRows.length === icpData.length) {
      setSelectedIcpRows([]);
    } else {
      setSelectedIcpRows(icpData.map((item) => item.id));
    }
  };

  const filteredIcpData = icpData.filter(
    (item) =>
      item.name.toLowerCase().includes(icpSearchVal.toLowerCase()) ||
      item.title.toLowerCase().includes(icpSearchVal.toLowerCase()) ||
      item.company.toLowerCase().includes(icpSearchVal.toLowerCase()) ||
      item.persona.toLowerCase().includes(icpSearchVal.toLowerCase()) ||
      item.industry.toLowerCase().includes(icpSearchVal.toLowerCase()) ||
      item.intentSignal.toLowerCase().includes(icpSearchVal.toLowerCase()) ||
      item.location.toLowerCase().includes(icpSearchVal.toLowerCase())
  );

  const currentStep = stepsList[activeIdx] || stepsList[0];

  const cleanDomain = inputUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim() || 'coirei.com';
  const isCoirei = cleanDomain.toLowerCase().includes('coirei');

  const companyName = isCoirei
    ? 'Coirei GTM Intelligence'
    : cleanDomain.split('.')[0]
      ? cleanDomain.split('.')[0].charAt(0).toUpperCase() + cleanDomain.split('.')[0].slice(1) + ' Intelligence'
      : 'Coirei AI';
  const avatarLetter = companyName.charAt(0);

  const businessOverview = isCoirei
    ? 'Coirei builds autonomous GTM intelligence and real-time market research systems for modern revenue teams. Their platform helps businesses discover high-intent ICP accounts, track competitor moves, and accelerate pipeline velocity.'
    : `${companyName} provides modern software, technology, and customer solutions tailored for high-velocity, growth-driven businesses worldwide.`;

  const metadataList = isCoirei
    ? [
        { icon: Building2, label: 'Industry', value: 'B2B SaaS / GTM Intelligence' },
        { icon: Users, label: 'Company size', value: '21-50 employees (estimated)' },
        { icon: MapPin, label: 'Location', value: 'San Francisco, CA & Singapore' },
        { icon: Calendar, label: 'Founded', value: '2024' },
      ]
    : [
        { icon: Building2, label: 'Industry', value: 'Technology / Enterprise Software' },
        { icon: Users, label: 'Company size', value: '11-100 employees (estimated)' },
        { icon: MapPin, label: 'Location', value: 'Global Headquarters' },
        { icon: Calendar, label: 'Founded', value: '2022 (estimated)' },
      ];

  const offeringsList = isCoirei
    ? [
        'Autonomous GTM Intelligence Engine',
        'Real-time Competitor Battlecards & ICP Discovery',
        'Automated Account Scoring & Signal Tracking',
        'Enterprise Outbound Workflow Orchestration',
        'Custom Business Logic & Data Enrichment Pipelines',
      ]
    : [
        `${companyName} Core Platform`,
        'API & Workflow Automation',
        'Enterprise Intelligence & Analytics',
        'Integration & Support Services',
        'Custom Business Logic & Real-time Pipelines',
      ];

  const handleSend = () => {
    setIsSendPressed(true);
    setTimeout(() => {
      setIsSendPressed(false);
      setStage('analyzing');
      setAnimStep(1);

      // Animation lifecycle matching coireiGtm Conversation.tsx
      setTimeout(() => setAnimStep(2), 400);
      setTimeout(() => setAnimStep(3), 850);
      setTimeout(() => setAnimStep(4), 1250);
      setTimeout(() => {
        setStage('overview');
      }, 3000);
    }, 100);
  };

  // Scroll listener: detects user scrolling through sticky container
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const totalScrollable = sectionHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.min(Math.max(-sectionTop / totalScrollable, 0), 0.999);
      let newIdx = 0;
      if (progress < 0.35) {
        newIdx = 0;
      } else if (progress < 0.70) {
        newIdx = 1;
      } else {
        newIdx = 2;
      }
      setActiveIdx(newIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="steps-section"
      ref={sectionRef}
      className="relative w-full bg-white border-t border-[#E2E2E2]"
      style={{ height: `${stepsList.length * 110}vh` }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-0">
          {/* Clean 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            {/* Left Column: Title and Description - Smooth in-place dissolve */}
            <div className="lg:col-span-5 flex items-center min-h-[200px] sm:min-h-[220px] relative">
              {stepsList.map((step, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={step.id}
                    className={`w-full max-w-lg transition-opacity duration-350 ease-out ${
                      isActive
                        ? 'opacity-100 relative z-10 pointer-events-auto'
                        : 'opacity-0 absolute inset-0 pointer-events-none z-0'
                    }`}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                      {step.title}
                    </h3>
                    <p className="mt-4 sm:mt-5 text-[#4E4E4E] text-[14px] sm:text-[15px] leading-[1.7] font-normal">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Floating Mockup Window - In-place Cross Fade (No stack) */}
            <div className="lg:col-span-7 flex items-center justify-center lg:justify-end select-none w-full">
              <div className="w-full max-w-[700px] lg:max-w-[760px] h-[400px] sm:h-[430px] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.03)] border border-neutral-200/80 overflow-hidden flex flex-col transition-all duration-300 relative">
                {/* Header Top Bar - Same dark grey (#5C5C5C) for ALL steps, never changes color */}
                <div className="bg-[#5C5C5C] text-white py-2.5 px-4 flex items-center justify-center text-center text-xs sm:text-[12.5px] tracking-normal select-none shrink-0">
                  <span className="font-normal transition-opacity duration-300">
                    {currentStep.headerTitle}
                  </span>
                </div>

                {/* Card Interior - In Place Cross-fade (NO STACK) */}
                <div className="relative flex-1 w-full overflow-hidden bg-white">
                  {/* Step 0: Understand Card Interior */}
                  <div
                    className={`absolute inset-0 w-full h-full p-5 sm:p-6 flex flex-col justify-start overflow-y-auto bg-white transition-opacity duration-350 ease-out ${
                      activeIdx === 0
                        ? 'opacity-100 pointer-events-auto z-10'
                        : 'opacity-0 pointer-events-none z-0'
                    }`}
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E1 transparent' }}
                  >
                    {stage === 'overview' ? (
                      /* STATE 3: Full Overview Card matching coireiGtm with Company Name & Avatar */
                      <div className="w-full flex flex-col gap-5 select-text animate-in fade-in duration-200">
                        {/* 1. Company Profile Header Box */}
                        <div className="flex items-center gap-4 pt-1 shrink-0">
                          <div className="w-14 h-14 rounded-2xl bg-[#EEF2F6] border border-[#E2E8F0] flex items-center justify-center shadow-xs shrink-0">
                            <span className="font-semibold text-[24px] text-[#0F172A]">
                              {avatarLetter}
                            </span>
                          </div>

                          <div className="flex flex-col justify-center gap-0.5">
                            <div className="flex items-center gap-2">
                              <h2 className="text-[21px] sm:text-[23px] font-semibold text-[#0F172A] tracking-[-0.02em] leading-tight">
                                {companyName}
                              </h2>
                              <a
                                href={`https://${cleanDomain}`}
                                target="_blank"
                                rel="noreferrer"
                                className="w-5 h-5 rounded-[6px] border border-[#E0E0E0] bg-white flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors shrink-0 shadow-2xs"
                                title="Open website"
                              >
                                <ExternalLink className="w-3 h-3 text-[#898781]" />
                              </a>
                            </div>
                            <span className="text-[13px] sm:text-[13.5px] text-[#94A3B8] font-normal leading-normal">
                              https://www.{cleanDomain}
                            </span>
                          </div>
                        </div>

                        {/* 2. Top Horizontal Tabs */}
                        <div className="flex items-center gap-6 sm:gap-7 border-b border-neutral-200/90 overflow-x-auto pb-0 -mx-1 px-1 shrink-0">
                          {[
                            { key: 'overview', label: 'Overview' },
                            { key: 'social', label: 'Social Handles' },
                            { key: 'email', label: 'Email' },
                            { key: 'positioning', label: 'Positioning & Features' },
                            { key: 'pages', label: 'Pages' },
                          ].map((t) => {
                            const isCurrent = activeTab === t.key;
                            return (
                              <button
                                key={t.key}
                                type="button"
                                onClick={() => setActiveTab(t.key as OverviewTab)}
                                className={`pb-2.5 text-[13px] sm:text-[13.5px] cursor-pointer transition-colors relative whitespace-nowrap ${
                                  isCurrent
                                    ? 'text-[#0F172A] font-semibold'
                                    : 'text-[#64748B] hover:text-[#0F172A] font-medium'
                                }`}
                              >
                                {t.label}
                                {isCurrent && (
                                  <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#0E7A7A] rounded-full" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* 3. Tab 1: Overview Content */}
                        {activeTab === 'overview' && (
                          <div className="flex flex-col gap-4 animate-in fade-in duration-150">
                            <div className="flex flex-col gap-1.5 pt-1">
                              <h4 className="text-[15px] font-semibold text-[#1F1E1D]">
                                Business overview
                              </h4>
                              <p className="text-[13px] sm:text-[13.5px] text-[#4A453F] leading-relaxed">
                                {businessOverview}
                              </p>
                            </div>

                            <div className="flex flex-col gap-2.5 text-[13px] text-[#5A544D]">
                              {metadataList.map((meta) => {
                                const Icon = meta.icon;
                                return (
                                  <div key={meta.label} className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 w-36 text-[#7A736A]">
                                      <Icon className="w-4 h-4 text-[#7A736A] shrink-0" />
                                      <span>{meta.label}</span>
                                    </div>
                                    <span className="text-[#1F1E1D] font-medium">
                                      {meta.value}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="flex flex-col gap-1.5 mt-1">
                              <h4 className="text-[15px] font-semibold text-[#1F1E1D]">
                                What they offer
                              </h4>
                              <p className="text-[12.5px] sm:text-[13px] text-[#7A736A]">
                                Key products, capabilities, and solutions synthesized from website and uploaded context.
                              </p>

                              <ul className="flex flex-col gap-2 mt-1 text-[13px] sm:text-[13.5px] text-[#2C2622]">
                                {offeringsList.map((item, idx) => (
                                  <li key={idx} className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F1E1D] shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Tab 2: Social Handles */}
                        {activeTab === 'social' && (
                          <div className="flex flex-col gap-3 py-1.5 animate-in fade-in duration-150">
                            <h4 className="text-[14px] font-semibold text-[#1F1E1D]">Social Handles</h4>
                            <div className="p-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/60 flex flex-col gap-2.5 text-[12.5px]">
                              {[
                                { platform: 'LinkedIn', handle: `linkedin.com/company/${cleanDomain.split('.')[0] || 'coirei'}` },
                                { platform: 'X / Twitter', handle: `x.com/${cleanDomain.split('.')[0] || 'coirei'}_gtm` },
                                { platform: 'GitHub', handle: `github.com/${cleanDomain.split('.')[0] || 'coirei'}` },
                              ].map((soc, idx) => (
                                <div key={idx} className="flex items-center justify-between py-1 border-b border-neutral-200/50 last:border-0">
                                  <span className="text-[#7A736A] font-medium">{soc.platform}</span>
                                  <span className="text-[#0E7A7A] font-medium hover:underline cursor-pointer">{soc.handle}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tab 3: Email */}
                        {activeTab === 'email' && (
                          <div className="flex flex-col gap-3 py-1.5 animate-in fade-in duration-150">
                            <h4 className="text-[14px] font-semibold text-[#1F1E1D]">Email & Inquiries</h4>
                            <div className="p-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/60 flex flex-col gap-2.5 text-[12.5px]">
                              <div className="flex items-center justify-between py-1 border-b border-neutral-200/50">
                                <span className="text-[#7A736A] font-medium">General Inquiries</span>
                                <span className="text-[#0E7A7A] font-medium hover:underline cursor-pointer">hello@{cleanDomain}</span>
                              </div>
                              <div className="flex items-center justify-between py-1 border-b border-neutral-200/50">
                                <span className="text-[#7A736A] font-medium">Founders Office</span>
                                <span className="text-[#0E7A7A] font-medium hover:underline cursor-pointer">founders@{cleanDomain}</span>
                              </div>
                              <div className="flex items-center justify-between py-1">
                                <span className="text-[#7A736A] font-medium">Enterprise Partnerships</span>
                                <span className="text-[#0E7A7A] font-medium hover:underline cursor-pointer">enterprise@{cleanDomain}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Tab 4: Positioning & Features */}
                        {activeTab === 'positioning' && (
                          <div className="flex flex-col gap-3 py-1.5 animate-in fade-in duration-150">
                            <h4 className="text-[14px] font-semibold text-[#1F1E1D]">Positioning & Features</h4>
                            <div className="p-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/60 flex flex-col gap-2 text-[12.5px] text-[#334155] leading-relaxed">
                              <p>• <strong>Core Value Proposition:</strong> Autonomous B2B GTM copilot that turns real-time market signals into verified enterprise pipeline.</p>
                              <p>• <strong>Primary Audience:</strong> B2B Founders, Heads of Growth, and Revenue Operations leaders.</p>
                              <p>• <strong>Key Differentiator:</strong> Proprietary continuous web signals and verified account enrichment workflows.</p>
                            </div>
                          </div>
                        )}

                        {/* Tab 5: Pages */}
                        {activeTab === 'pages' && (
                          <div className="flex flex-col gap-3 py-1.5 animate-in fade-in duration-150">
                            <h4 className="text-[14px] font-semibold text-[#1F1E1D]">Discovered Pages ({isCoirei ? '6' : '4'})</h4>
                            <div className="p-3 rounded-xl border border-neutral-200/80 bg-neutral-50/60 flex flex-col gap-1.5 text-[12px] text-[#334155]">
                              {[
                                '/platform',
                                '/competitors',
                                '/pricing',
                                '/integrations',
                                '/case-studies',
                                '/company',
                              ].map((page) => (
                                <div key={page} className="flex items-center justify-between py-1 border-b border-neutral-200/50 last:border-0">
                                  <span className="font-mono text-[12px] text-[#2C2622]">{page}</span>
                                  <span className="text-emerald-600 font-medium text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">Indexed & Crawled</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : stage === 'analyzing' ? (
                      /* STATE 2: Animation Sequence */
                      <div className="w-full flex flex-col gap-2.5 py-1 select-text animate-in fade-in duration-200">
                        {animStep >= 1 && (
                          <div className="flex items-center gap-2 text-[#706B65] text-[13px] font-normal animate-in fade-in duration-200">
                            <Lightbulb className="w-3.5 h-3.5 text-[#706B65]" />
                            <span>Thinking...</span>
                          </div>
                        )}

                        {animStep >= 2 && (
                          <p className="text-[12px] text-[#2C2622] leading-normal animate-in fade-in duration-200 font-normal">
                            Reading{' '}
                            <span className="underline underline-offset-4 text-[#0D7A75] font-normal cursor-pointer">
                              Analyze {inputUrl ? inputUrl.replace(/^https?:\/\//, '') : 'https:'}
                            </span>{' '}
                            now — this usually takes a minute or two.
                          </p>
                        )}

                        {animStep >= 3 && (
                          <div className="flex items-center gap-1.5 text-[#706B65] font-normal text-[12px] animate-in fade-in duration-200 pt-0.5">
                            <Loader2 className="w-3 h-3 text-[#706B65] animate-spin shrink-0" />
                            <span>Analyzing your website</span>
                            <ChevronRight className="w-3 h-3 text-[#9A948C]" />
                          </div>
                        )}

                        {animStep >= 4 && (
                          <div className="w-full rounded-xl border border-[#E5E0D8] bg-[#F7F6F3] overflow-hidden animate-in fade-in duration-200 shadow-2xs mt-0.5">
                            <div className="flex items-center px-3 py-1.5 border-b border-[#E5E0D8] bg-[#FAF8F5]/90 text-[11px] font-normal text-[#706B65]">
                              <div className="flex items-center gap-1.5">
                                <Globe className="w-3 h-3 stroke-[1.5] text-[#706B65]" />
                                <span className="font-normal text-[#706B65]">Live browser</span>
                              </div>
                            </div>

                            <div className="w-full h-[115px] sm:h-[125px] bg-[#ECEAE6] flex items-center justify-center">
                              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                                <Loader2 className="w-3 h-3 animate-spin text-[#706B65]" />
                                <span>Synthesizing live DOM context...</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* STATE 1: Interactive Chatbar with Curved Corners */
                      <div className="w-full flex flex-col items-center max-w-[440px] mx-auto text-center my-auto animate-in fade-in duration-200">
                        <h3 className="text-xl sm:text-[22px] font-semibold text-[#1F1E1D] tracking-tight text-center font-sans">
                          Let's understand your business
                        </h3>

                        <p className="text-[12px] text-[#737373] text-center mt-1 mb-4 font-normal">
                          Connect your data and let Coirei do the research.
                        </p>

                        <div className="w-full flex flex-col items-center">
                          <div className="w-full bg-white rounded-[24px] px-3.5 py-2 flex items-center justify-between border border-[#E7E4DF] relative z-10 shadow-[0_2px_10px_rgba(0,0,0,0.03)] focus-within:border-neutral-400 transition-colors">
                            <div className="flex items-center gap-2 flex-1 mr-2">
                              <button
                                type="button"
                                className="text-neutral-400 hover:text-neutral-600 transition-colors p-0.5 shrink-0 cursor-pointer"
                                title="Add data"
                              >
                                <Plus className="w-3.5 h-3.5 stroke-[2]" />
                              </button>
                              <input
                                type="text"
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSend();
                                  }
                                }}
                                placeholder="Connect your website"
                                className="w-full text-[13px] text-neutral-800 placeholder-neutral-400 font-normal outline-none bg-transparent"
                              />
                            </div>

                            {inputUrl.trim().length > 0 ? (
                              <button
                                type="button"
                                onClick={handleSend}
                                className={`w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-all cursor-pointer shrink-0 shadow-xs active:scale-95 ${
                                  isSendPressed ? 'scale-90 opacity-80' : 'scale-100'
                                }`}
                                title="Send"
                              >
                                <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] text-white" />
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="w-7 h-7 rounded-full bg-[#FAF7F3] border border-[#ECE6DE] hover:bg-[#F2ECE3] text-neutral-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer shadow-2xs"
                                title="Voice input"
                              >
                                <Mic className="w-3.5 h-3.5 stroke-[1.8]" />
                              </button>
                            )}
                          </div>

                          <div
                            className="w-[98%] bg-[#F5F5F3] rounded-b-[20px] pt-3.5 pb-2 px-3.5 flex items-center gap-2 border-b border-x border-[#EAE8E4] relative z-0 -mt-2.5 shadow-2xs"
                            style={{
                              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.02)',
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                if (!inputUrl) setInputUrl('coirei.com');
                              }}
                              className="flex items-center gap-1.5 text-[12px] text-neutral-800 hover:text-black font-normal transition-colors cursor-pointer"
                            >
                              <Link2 className="w-3.5 h-3.5 stroke-[1.8] text-neutral-600" />
                              <span>Connect Website</span>
                            </button>
                          </div>
                        </div>

                        <p className="text-[10.5px] text-neutral-400 text-center mt-3 font-normal leading-relaxed">
                          We'll analyze your website and extract key information automatically.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Step 1: Whole Analyzes Card Interior - Ultra Minimal */}
                  <div
                    className={`absolute inset-0 w-full h-full p-8 sm:p-10 flex flex-col justify-center text-left bg-white transition-opacity duration-350 ease-out ${
                      activeIdx === 1
                        ? 'opacity-100 pointer-events-auto z-10'
                        : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <div className="flex flex-col gap-1 mb-7">
                      <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A8378]">
                        Market Intelligence
                      </span>
                      <h3 className="text-2xl sm:text-[26px] font-semibold text-[#1F1E1D] tracking-tight">
                        Positioning & Gap Analysis
                      </h3>
                    </div>

                    <div className="divide-y divide-[#F0ECE6] border-y border-[#F0ECE6] text-[13.5px]">
                      <div className="py-3.5 flex items-center justify-between">
                        <span className="text-[#7A736A]">Market Position</span>
                        <span className="font-semibold text-[#1F1E1D]">Category Challenger</span>
                      </div>
                      <div className="py-3.5 flex items-center justify-between">
                        <span className="text-[#7A736A]">Identified Gap</span>
                        <span className="font-semibold text-[#1F1E1D]">Fragmented Outbound Tooling</span>
                      </div>
                      <div className="py-3.5 flex items-center justify-between">
                        <span className="text-[#7A736A]">Competitive Advantage</span>
                        <span className="font-semibold text-[#1F1E1D]">Signal-Driven Prospecting</span>
                      </div>
                      <div className="py-3.5 flex items-center justify-between">
                        <span className="text-[#7A736A]">Target Audience</span>
                        <span className="font-semibold text-[#1F1E1D]">High-Growth B2B RevOps</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Find - Leads Table */}
                  <div
                    className={`absolute inset-0 w-full h-full flex flex-col bg-white overflow-hidden transition-opacity duration-350 ease-out ${
                      activeIdx === 2
                        ? 'opacity-100 pointer-events-auto z-10'
                        : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    {/* Top Header / Breadcrumbs: spans full width */}
                    <div className="w-full border-b border-[#F0ECE6] px-3.5 py-2 flex items-center shrink-0 bg-white">
                      <div className="flex items-center gap-1.5 text-[11.5px] text-gray-500 font-normal">
                        <span className="hover:text-gray-800 cursor-pointer">Projects</span>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-medium">Leads</span>
                      </div>
                    </div>

                    {/* Main Leads Area */}
                    <div className="flex-1 w-full min-h-0 flex flex-col gap-2.5 px-3.5 pt-2.5 pb-3 overflow-hidden bg-white">
                      {/* Title Header: Clean with no subheading and no buttons */}
                      <div className="flex items-center justify-between shrink-0">
                        <h1 className="text-base sm:text-lg font-semibold text-[#1F1E1D] tracking-tight leading-none">
                          Leads
                        </h1>
                      </div>

                      {/* Coirei AI Search Bar */}
                      <div
                        className="w-full bg-white flex items-center justify-between shadow-2xs shrink-0"
                        style={{
                          height: '34px',
                          borderRadius: '7px',
                          border: '1px solid #E2E8F0',
                          paddingTop: '4px',
                          paddingBottom: '4px',
                          paddingLeft: '10px',
                          paddingRight: '10px',
                          gap: '8px',
                        }}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#F43F5E] stroke-[2]" />
                          <input
                            type="text"
                            value={icpSearchVal}
                            onChange={(e) => setIcpSearchVal(e.target.value)}
                            placeholder="Search leads, title, company, or persona..."
                            className="w-full bg-transparent border-none outline-none text-[12.5px] placeholder:text-gray-400 text-gray-800"
                          />
                        </div>
                        <button
                          type="button"
                          className="w-5 h-5 rounded-full bg-gray-300/80 hover:bg-gray-400 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                        >
                          <ArrowRight className="w-3 h-3 stroke-[2]" />
                        </button>
                      </div>

                      {/* Leads Full Screen Table Container - Clean, No Popups */}
                      <div className="w-full flex-1 min-h-0 bg-white overflow-hidden shadow-2xs flex rounded-[7px] border border-[#E2E8F0]">
                        {/* Leads Table Component */}
                        <ICPTable
                          data={filteredIcpData}
                          totalCount={icpData.length}
                          selectedRows={selectedIcpRows}
                          onToggleSelectAll={toggleSelectAllIcp}
                        />
                      </div>
                    </div>
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

export default Steps;
