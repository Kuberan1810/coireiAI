import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowRight, Zap, Shield, ArrowLeftRight, MessageSquare, Clock, PenLine, User, Calendar } from 'lucide-react';
import EngageAgentVisual from '../Home/section/EngageAgentVisual';

interface ConversationItem {
  id: string;
  sender: string;
  channel: 'instagram' | 'whatsapp' | 'email' | 'linkedin' | 'chat';
  time: string;
  preview: string;
  userMessage: string;
  aiResponse: string;
}

const CONVERSATIONS: ConversationItem[] = [
  {
    id: 'alex',
    sender: '@alex_design',
    channel: 'instagram',
    time: '10:34 AM',
    preview: "Hi, I'm interested in your product...",
    userMessage: "Hi, I'm interested in your product. Can you tell me more?",
    aiResponse: "Absolutely! I'd be happy to help. What would you like to know more about?",
  },
  {
    id: 'phone',
    sender: '+91 98•••••421',
    channel: 'whatsapp',
    time: '09:42 AM',
    preview: 'Can we schedule a demo?',
    userMessage: 'Hey there! Can we schedule a quick demo for our sales team tomorrow?',
    aiResponse: "Certainly! I have slots open tomorrow at 11:00 AM and 3:30 PM EST. Which works best for you?",
  },
  {
    id: 'partnership',
    sender: 'Partnership enquiry',
    channel: 'email',
    time: 'Yesterday',
    preview: "Thanks for reaching out. We've...",
    userMessage: "Thanks for reaching out. We've reviewed your platform and would love to explore co-marketing.",
    aiResponse: "Thanks for connecting! I've shared your proposal with our partnerships team. Would you like to review our integration guide?",
  },
];

export const Engage: React.FC = () => {
  const [selectedConvoId, setSelectedConvoId] = useState<string>('alex');
  const [activeChannel, setActiveChannel] = useState<string>('all');
  const [replyText, setReplyText] = useState<string>('');

  const activeConvo = CONVERSATIONS.find((c) => c.id === selectedConvoId) || CONVERSATIONS[0];

  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* =========================================================
          SECTION 1: ENGAGE HERO & ORBIT SECTION (From Home Section)
          ========================================================= */}
      <section className="relative z-20 w-full pt-20 sm:pt-28 md:pt-32 pb-[40px] px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[58px] font-semibold text-[#0D0D0D] tracking-[-0.45px] leading-[1.15] lg:leading-[62px]">
              A team of specialized agents, <br className="hidden sm:inline" />
              working for you
            </h1>

            <p className="mt-3.5 sm:mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Coirei GTM orchestrates a team of AI agents to turn market intelligence into strategy, execution, and measurable growth.
            </p>
          </div>

          {/* Engage Agent Main Card Container (889x446 exact Figma spec from Home) */}
          <div className="relative mt-12 sm:mt-16 w-full flex flex-col items-center justify-center">
            <div
              className="w-full max-w-[889px] mx-auto min-h-[500px] sm:min-h-[460px] md:h-[446px] bg-[#FCFCFC] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border border-[#F0F0F0] p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
              style={{
                boxShadow: '0px 1px 150px 0px rgba(70, 70, 70, 0.25)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch h-full">
                {/* Left Column: Engage Celestial Orbit Visual */}
                <div className="md:col-span-7 flex flex-col justify-center h-full overflow-visible">
                  <div className="w-full h-full max-h-[365px] flex items-center justify-center">
                    <EngageAgentVisual />
                  </div>
                </div>

                {/* Right Column: Inner Framed Box (300px × 369px Home spec) */}
                <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center">
                  <div
                    className="w-full md:w-[300px] md:h-[369px] rounded-tr-[10px] rounded-br-[10px] rounded-l-none bg-[#FCFCFC] pt-[33px] pr-[30px] sm:pr-[40px] md:pr-[53px] pb-[40px] md:pb-[82px] pl-[20px] flex flex-col justify-between"
                    style={{
                      borderTop: '1px solid #EDEDED',
                      borderRight: '1px solid #DCDCDC',
                      borderBottom: '1px solid #D4D4D4',
                      borderLeft: 'none',
                    }}
                  >
                    <div className="flex flex-col gap-[10px]">
                      <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#0F172A] tracking-tight leading-snug">
                        Engage Agent
                      </h2>
                      <p className="text-[#64748B] text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                        An AI-powered engagement engine that creates personalized outreach, nurtures prospects, and builds meaningful customer relationships across every stage of the sales journey.
                      </p>
                    </div>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-[#475569] hover:text-blue-600 transition-colors group/link"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-0.5 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: CONVERSATION TO OPPORTUNITY (Figma Section)
          ========================================================= */}
      <section
        className="relative w-full py-[40px] sm:py-[56px] px-6 sm:px-8 lg:px-12 bg-[#FBFBFC]"
        style={{
          borderTop: '1px solid rgba(11, 15, 25, 0.05)',
          borderBottom: '1px solid rgba(11, 15, 25, 0.05)',
        }}
      >
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Narrative & Description */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="font-['Manrope',sans-serif] font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider text-[#2563EB] mb-4">
              ENGAGE AGENT
            </div>

            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-1.2px] leading-[1.12] text-[#0D0D0D] mb-5">
              Turn every
              <br />
              conversation into an
              <br />
              opportunity.
            </h2>

            {/* Description Paragraph */}
            <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#475569] max-w-lg">
              Engage is an AI-powered communication agent that manages conversations across your customer
              channels — responding instantly, following up automatically, and keeping every interaction
              moving forward.
            </p>
          </div>

          {/* Right Column: Interactive AI Communication Agent Card */}
          <div className="lg:col-span-7 flex justify-start lg:justify-end w-full">
            <div
              className="w-full max-w-[660px] bg-white rounded-[20px] p-5 sm:p-6"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.05), 0 2px 6px 0 rgba(0, 0, 0, 0.02)',
              }}
            >
              {/* Card Header: Logo & Title */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2.5">
                  {/* Blue Star Logo */}
                  <div className="w-[26px] h-[26px] rounded-[7px] bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-2xs">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-[13px] text-[#0B0F19] tracking-wider uppercase inline-block mr-2">
                      ENGAGE
                    </span>
                    <span className="text-[12px] text-[#94A3B8] font-normal">
                      AI Communication Agent
                    </span>
                  </div>
                </div>
              </div>

              {/* Channel Selector Pills Row */}
              <div className="flex items-center gap-4 sm:gap-5 overflow-x-auto py-2.5 px-1 border-b border-[#F8FAFC] text-[11.5px] text-[#64748B] select-none">
                {/* Instagram */}
                <button
                  type="button"
                  onClick={() => setActiveChannel(activeChannel === 'instagram' ? 'all' : 'instagram')}
                  className="flex items-center gap-1.5 hover:text-[#0B0F19] transition-colors cursor-pointer shrink-0"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" />
                  </svg>
                  <span>Instagram</span>
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => setActiveChannel(activeChannel === 'whatsapp' ? 'all' : 'whatsapp')}
                  className="flex items-center gap-1.5 hover:text-[#0B0F19] transition-colors cursor-pointer shrink-0"
                >
                  <svg className="w-3.5 h-3.5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.63c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
                  </svg>
                  <span>WhatsApp</span>
                </button>

                {/* Email */}
                <button
                  type="button"
                  onClick={() => setActiveChannel(activeChannel === 'email' ? 'all' : 'email')}
                  className="flex items-center gap-1.5 hover:text-[#0B0F19] transition-colors cursor-pointer shrink-0"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="#EA4335"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="#EA4335"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Email</span>
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  onClick={() => setActiveChannel(activeChannel === 'linkedin' ? 'all' : 'linkedin')}
                  className="flex items-center gap-1.5 hover:text-[#0B0F19] transition-colors cursor-pointer shrink-0"
                >
                  <svg className="w-3.5 h-3.5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </button>

                {/* Website Chat */}
                <button
                  type="button"
                  onClick={() => setActiveChannel(activeChannel === 'chat' ? 'all' : 'chat')}
                  className="flex items-center gap-1.5 hover:text-[#0B0F19] transition-colors cursor-pointer shrink-0"
                >
                  <svg className="w-3.5 h-3.5 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                  <span>Website Chat</span>
                </button>
              </div>

              {/* Chat Split View (Left: Conversations List, Right: Active Thread) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-3 items-stretch">

                {/* Left Sub-Column: Conversations List */}
                <div className="md:col-span-5 flex flex-col space-y-1.5 border-b md:border-b-0 md:border-r border-[#F1F5F9] pb-3 md:pb-0 md:pr-3">
                  {CONVERSATIONS.map((convo) => {
                    const isSelected = convo.id === selectedConvoId;
                    return (
                      <div
                        key={convo.id}
                        onClick={() => setSelectedConvoId(convo.id)}
                        className={`p-2.5 rounded-[10px] cursor-pointer transition-all ${isSelected
                            ? 'bg-[#EFF6FF] border border-[#DBEAFE]'
                            : 'bg-transparent hover:bg-[#F8FAFC] border border-transparent'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            {/* Black Avatar Circle */}
                            <div className="w-4 h-4 rounded-full bg-[#0D0D0D] flex items-center justify-center shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                            <span className="text-[12px] font-semibold text-[#0D0D0D] truncate max-w-[100px]">
                              {convo.sender}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#94A3B8] font-normal">
                            {convo.time}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] font-normal truncate pl-6">
                          {convo.preview}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Right Sub-Column: Active Chat Thread */}
                <div className="md:col-span-7 flex flex-col justify-between pl-0 md:pl-2 min-h-[220px]">
                  <div>
                    {/* Active Contact Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded-full bg-[#0D0D0D] flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <span className="text-[12px] font-semibold text-[#0D0D0D]">
                        {activeConvo.sender}
                      </span>
                      <span className="text-[10px] text-[#94A3B8] ml-auto">
                        {activeConvo.time}
                      </span>
                    </div>

                    {/* Messages Container */}
                    <div className="space-y-3">
                      {/* Incoming Customer Message Bubble */}
                      <div className="flex justify-start">
                        <div className="bg-[#F4F4F5] rounded-[14px] rounded-tl-[3px] p-3 text-[12px] sm:text-[12.5px] leading-relaxed text-[#1E293B] max-w-[88%]">
                          {activeConvo.userMessage}
                        </div>
                      </div>

                      {/* Outgoing AI Response Message Bubble */}
                      <div className="flex justify-end">
                        <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[14px] rounded-tr-[3px] p-3 text-[12px] sm:text-[12.5px] leading-relaxed text-[#1E293B] max-w-[88%] text-left">
                          {activeConvo.aiResponse}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Rounded Input Bar with Send Button */}
                  <div className="relative mt-5">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (replyText.trim()) {
                          setReplyText('');
                        }
                      }}
                      className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-full pl-3.5 pr-1.5 py-1"
                    >
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type a message or let Engage reply..."
                        className="w-full bg-transparent text-[12px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-hidden"
                      />
                      <button
                        type="submit"
                        className="w-7 h-7 rounded-full bg-[#0B0F19] hover:bg-neutral-800 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                        aria-label="Send message"
                      >
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3: PROCESS ARCHITECTURE (Exact Figma Spec)
          ========================================================= */}
      <section className="relative w-full py-[40px] sm:py-[56px] px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto text-left">
          {/* Eyebrow */}
          <div className="font-['Manrope',sans-serif] font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider text-[#94A3B8] mb-3">
            PROCESS ARCHITECTURE
          </div>

          {/* Headline */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.15] text-[#0D0D0D] mb-3">
            One agent. Every conversation.
          </h2>

          {/* Subtitle */}
          <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed mb-10 max-w-2xl">
            Continuous ingestion to qualification without human bottlenecks.
          </p>

          {/* 4 Cards Grid (Figma: 276 Fill × 217 Hug, Radius: 16px, Border: 1px #E2E8F0 85%, Padding: 20px, space-between) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Capture */}
            <div
              className="bg-white rounded-[16px] p-[20px] flex flex-col justify-between min-h-[217px] transition-all duration-200 hover:shadow-xs"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
              }}
            >
              <div>
                {/* Top Row: Number Badge & Stage */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-0.5 rounded-[5px] bg-[#EFF6FF] border border-[#DBEAFE] text-[12px] font-semibold text-[#2563EB] tabular-nums">
                    01
                  </span>
                  <span className="text-[11.5px] text-[#94A3B8] font-normal">
                    Ingest
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#0D0D0D] mt-3.5 mb-2">
                  Capture
                </h3>

                {/* Description */}
                <p className="font-['Manrope',sans-serif] text-[13px] leading-[20px] text-[#64748B] font-normal">
                  Automatically collect incoming messages, enquiries and responses across connected channels.
                </p>
              </div>

              {/* Bottom Micro-tag */}
              <div className="pt-3 border-t border-[#F8FAFC] text-[11.5px] text-[#94A3B8] font-normal">
                Webhooks &amp; native APIs
              </div>
            </div>

            {/* Card 2: Understand */}
            <div
              className="bg-white rounded-[16px] p-[20px] flex flex-col justify-between min-h-[217px] transition-all duration-200 hover:shadow-xs"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
              }}
            >
              <div>
                {/* Top Row: Number Badge & Stage */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-0.5 rounded-[5px] bg-[#EFF6FF] border border-[#DBEAFE] text-[12px] font-semibold text-[#2563EB] tabular-nums">
                    02
                  </span>
                  <span className="text-[11.5px] text-[#94A3B8] font-normal">
                    Analyze
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#0D0D0D] mt-3.5 mb-2">
                  Understand
                </h3>

                {/* Description */}
                <p className="font-['Manrope',sans-serif] text-[13px] leading-[20px] text-[#64748B] font-normal">
                  AI identifies intent, sentiment, context and whether the person is a potential lead.
                </p>
              </div>

              {/* Bottom Micro-tag */}
              <div className="pt-3 border-t border-[#F8FAFC] text-[11.5px] text-[#94A3B8] font-normal">
                Contextual memory model
              </div>
            </div>

            {/* Card 3: Respond */}
            <div
              className="bg-white rounded-[16px] p-[20px] flex flex-col justify-between min-h-[217px] transition-all duration-200 hover:shadow-xs"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
              }}
            >
              <div>
                {/* Top Row: Number Badge & Stage */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-0.5 rounded-[5px] bg-[#EFF6FF] border border-[#DBEAFE] text-[12px] font-semibold text-[#2563EB] tabular-nums">
                    03
                  </span>
                  <span className="text-[11.5px] text-[#94A3B8] font-normal">
                    Execute
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#0D0D0D] mt-3.5 mb-2">
                  Respond
                </h3>

                {/* Description */}
                <p className="font-['Manrope',sans-serif] text-[13px] leading-[20px] text-[#64748B] font-normal">
                  Generate and send context-aware replies automatically, based on your brand voice and rules.
                </p>
              </div>

              {/* Bottom Micro-tag */}
              <div className="pt-3 border-t border-[#F8FAFC] text-[11.5px] text-[#94A3B8] font-normal">
                Deterministic guardrails
              </div>
            </div>

            {/* Card 4: Follow up */}
            <div
              className="bg-white rounded-[16px] p-[20px] flex flex-col justify-between min-h-[217px] transition-all duration-200 hover:shadow-xs"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
              }}
            >
              <div>
                {/* Top Row: Number Badge & Stage */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-0.5 rounded-[5px] bg-[#EFF6FF] border border-[#DBEAFE] text-[12px] font-semibold text-[#2563EB] tabular-nums">
                    04
                  </span>
                  <span className="text-[11.5px] text-[#94A3B8] font-normal">
                    Nurture
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#0D0D0D] mt-3.5 mb-2">
                  Follow up
                </h3>

                {/* Description */}
                <p className="font-['Manrope',sans-serif] text-[13px] leading-[20px] text-[#64748B] font-normal">
                  Continue the conversation, schedule follow-ups and hand qualified opportunities to your team.
                </p>
              </div>

              {/* Bottom Micro-tag */}
              <div className="pt-3 border-t border-[#F8FAFC] text-[11.5px] text-[#94A3B8] font-normal">
                Automated handoff &amp; CRM sync
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: OMNICHANNEL CONNECTIVITY (Exact Figma Spec)
          ========================================================= */}
      <section className="relative w-full py-[40px] sm:py-[56px] px-6 sm:px-8 lg:px-12 bg-[#FAF9F6] border-t border-[#F1F5F9]">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Eyebrow */}
          <div className="font-['Manrope',sans-serif] font-semibold text-[13px] uppercase tracking-wider text-[#64748B] mb-2.5">
            OMNICHANNEL CONNECTIVITY
          </div>

          {/* Headline */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-1px] leading-[1.15] text-[#0D0D0D] mb-2.5">
            Your conversations, in one place.
          </h2>

          {/* Subtitle */}
          <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed mb-8 max-w-2xl">
            Engage connects the channels where your customers already talk to you.
          </p>

          {/* Omnichannel List Card (Figma: Fill 1,152px, Hug 391px, Radius 16px, Border 1px #E2E8F0 85%, Background #FFFFFF) */}
          <div
            className="w-full bg-white rounded-[16px] overflow-hidden"
            style={{
              border: '1px solid rgba(226, 232, 240, 0.85)',
            }}
          >
            <div className="divide-y divide-[#F1F5F9]">

              {/* Row 1: Instagram */}
              <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:bg-[#FBFBFC] transition-colors">
                {/* Channel Title & Subtitle */}
                <div className="w-full md:w-[220px] flex items-center gap-3 shrink-0">
                  <div className="w-[26px] h-[26px] shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="ig-real-gradient" cx="0.2" cy="1" r="1">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                      <rect width="24" height="24" rx="6" fill="url(#ig-real-gradient)" />
                      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="white" strokeWidth="1.8" />
                      <circle cx="12" cy="12" r="3.7" stroke="white" strokeWidth="1.8" />
                      <circle cx="16.5" cy="7.5" r="1.1" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-tight">
                      Instagram
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[11px] leading-[16.5px] text-[#64748B] mt-0.5">
                      Direct Messages &amp; Comments
                    </p>
                  </div>
                </div>

                {/* 4 Feature Bullets */}
                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Auto-reply to DMs</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Respond to enquiries</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Qualify prospects</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Follow up automatically</span>
                  </div>
                </div>
              </div>

              {/* Row 2: WhatsApp */}
              <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:bg-[#FBFBFC] transition-colors">
                <div className="w-full md:w-[220px] flex items-center gap-3 shrink-0">
                  <div className="w-[26px] h-[26px] shrink-0 flex items-center justify-center">
                    <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                        stroke="#25D366"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.56 15.3C16.31 15.17 15.09 14.58 14.86 14.49C14.63 14.41 14.47 14.36 14.3 14.62C14.13 14.87 13.66 15.43 13.51 15.59C13.37 15.76 13.22 15.78 12.97 15.65C12.72 15.52 11.91 15.26 10.95 14.4C10.2 13.73 9.69 12.9 9.54 12.65C9.39 12.4 9.52 12.26 9.65 12.14C9.76 12.03 9.9 11.85 10.02 11.7C10.15 11.55 10.19 11.45 10.27 11.28C10.35 11.11 10.31 10.97 10.25 10.84C10.19 10.71 9.69 9.49 9.48 8.99C9.28 8.5 9.07 8.57 8.92 8.56H8.44C8.27 8.56 8 8.62 7.77 8.87C7.54 9.12 6.89 9.73 6.89 10.97C6.89 12.21 7.79 13.41 7.92 13.58C8.05 13.75 9.69 16.28 12.21 17.37C12.81 17.63 13.28 17.78 13.65 17.9C14.25 18.09 14.8 18.06 15.23 18C15.71 17.93 16.7 17.4 16.91 16.82C17.12 16.24 17.12 15.75 17.06 15.64C17 15.53 16.81 15.43 16.56 15.3Z"
                        fill="#25D366"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-tight">
                      WhatsApp
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[11px] leading-[16.5px] text-[#64748B] mt-0.5">
                      Business Cloud API
                    </p>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Automated conversations</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Lead qualification</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Appointment coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Follow-ups</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:bg-[#FBFBFC] transition-colors">
                <div className="w-full md:w-[220px] flex items-center gap-3 shrink-0">
                  <div className="w-[26px] h-[26px] shrink-0 flex items-center justify-center">
                    <svg
                      className="w-[24px] h-[24px]"
                      viewBox="0 0 512 512"
                      fill="none"
                    >
                      <path
                        d="M34.9 448h81.5V250.2L0 163v250.2C0 432.5 15.7 448 34.9 448"
                        fill="#4285F4"
                      />
                      <path
                        d="M395.6 448h81.5c19.3 0 34.9-15.7 34.9-34.9V163l-116.4 87.3"
                        fill="#34A853"
                      />
                      <path
                        d="M395.6 99v151.3L512 163v-46.5c0-43.2-49.3-67.8-83.8-41.9"
                        fill="#FBBC04"
                      />
                      <path
                        d="M116.4 250.2V99L256 203.7 395.6 99v151.3L256 355"
                        fill="#EA4335"
                      />
                      <path
                        d="M0 116.4V163l116.4 87.3V99L83.8 74.5C49.2 48.6 0 73.2 0 116.4"
                        fill="#C5221F"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-tight">
                      Email
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[11px] leading-[16.5px] text-[#64748B] mt-0.5">
                      Gmail, Outlook &amp; IMAP
                    </p>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Read incoming enquiries</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Draft and send replies</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Categorize conversations</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Automated follow-ups</span>
                  </div>
                </div>
              </div>

              {/* Row 4: LinkedIn */}
              <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:bg-[#FBFBFC] transition-colors">
                <div className="w-full md:w-[220px] flex items-center gap-3 shrink-0">
                  <div className="w-[26px] h-[26px] shrink-0 flex items-center justify-center">
                    <svg
                      className="w-[26px] h-[26px]"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1532 22.1536H18.3009V16.1205C18.3009 14.6818 18.2752 12.8298 16.2972 12.8298C14.2908 12.8298 13.9837 14.3974 13.9837 16.0158V22.1532H10.1315V9.74671H13.8297V11.4422H13.8815C14.2516 10.8094 14.7864 10.2888 15.429 9.93588C16.0715 9.58296 16.7978 9.41091 17.5304 9.43806C21.435 9.43806 22.1548 12.0064 22.1548 15.3476L22.1532 22.1536ZM5.78459 8.05092C4.5499 8.05112 3.5488 7.05033 3.54859 5.81563C3.54839 4.58094 4.54909 3.57984 5.78378 3.57963C7.01848 3.57933 8.01958 4.58012 8.01978 5.81482C8.01989 6.40775 7.78446 6.97643 7.36528 7.39578C6.94611 7.81512 6.37752 8.05079 5.78459 8.05092ZM7.71083 22.1537H3.8544V9.74671H7.71073V22.1536L7.71083 22.1537ZM24.0738 0.0018923H1.91862C0.871508 -0.00988894 0.0127969 0.828915 0 1.87602V24.1236C0.0123906 25.1712 0.871 26.0108 1.91852 25.9999H24.0738C25.1235 26.0129 25.9855 25.1732 26 24.1236V1.8743C25.9851 0.825158 25.123 -0.0135452 24.0738 0.000165739"
                        fill="#0A66C2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-tight">
                      LinkedIn
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[11px] leading-[16.5px] text-[#64748B] mt-0.5">
                      InMail &amp; Messaging
                    </p>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Respond to messages</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Engage prospects</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Follow up with leads</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Identify buying intent</span>
                  </div>
                </div>
              </div>

              {/* Row 5: Website Chat */}
              <div className="px-6 py-4 sm:px-8 sm:py-4.5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:bg-[#FBFBFC] transition-colors">
                <div className="w-full md:w-[220px] flex items-center gap-3 shrink-0">
                  <div className="w-[26px] h-[26px] shrink-0 flex items-center justify-center">
                    <svg
                      className="w-[24px] h-[24px] text-[#4BA2F2]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9.5" />
                      <ellipse cx="12" cy="12" rx="4.5" ry="9.5" />
                      <line x1="2.5" y1="12" x2="21.5" y2="12" />
                      <path d="M4.5 7.5h15" />
                      <path d="M4.5 16.5h15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-tight">
                      Website Chat
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[11px] leading-[16.5px] text-[#64748B] mt-0.5">
                      Embedded Widget
                    </p>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">24/7 AI responses</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Product questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Lead qualification</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-[#475569] font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="truncate">Meeting booking</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: INTELLIGENCE & CAPABILITIES (Exact Figma Spec)
          ========================================================= */}
      <section className="relative w-full py-[40px] sm:py-[56px] px-6 sm:px-8 lg:px-12 bg-white border-t border-[#F1F5F9]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Headline */}
          <div className="lg:col-span-4 text-left">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-1.2px] leading-[1.18] text-[#0D0D0D]">
              It doesn't just reply.
              <br />
              It understands.
            </h2>
          </div>

          {/* Right Column: 2-Column Grid of 6 Capabilities */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-12 gap-y-7 sm:gap-y-9">

            {/* 1. Intent detection */}
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-[17px] h-[17px] stroke-[1.9]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-snug mb-1">
                  Intent detection
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] leading-[19.5px] text-[#737373] max-w-[274px]">
                  Understand what every conversation is actually about.
                </p>
              </div>
            </div>

            {/* 2. Context-aware replies */}
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="w-[17px] h-[17px] stroke-[1.9]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-snug mb-1">
                  Context-aware replies
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] leading-[19.5px] text-[#737373] max-w-[274px]">
                  Respond using previous conversation context, customer information and your brand guidelines.
                </p>
              </div>
            </div>

            {/* 3. Lead qualification */}
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-[17px] h-[17px] stroke-[1.9]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-snug mb-1">
                  Lead qualification
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] leading-[19.5px] text-[#737373] max-w-[274px]">
                  Identify high-intent prospects automatically.
                </p>
              </div>
            </div>

            {/* 4. Smart follow-ups */}
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-[17px] h-[17px] stroke-[1.9]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-snug mb-1">
                  Smart follow-ups
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] leading-[19.5px] text-[#737373] max-w-[274px]">
                  Know when to follow up without manually tracking every conversation.
                </p>
              </div>
            </div>

            {/* 5. Conversation routing */}
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <ArrowLeftRight className="w-[17px] h-[17px] stroke-[1.9]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-snug mb-1">
                  Conversation routing
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] leading-[19.5px] text-[#737373] max-w-[274px]">
                  Send important conversations to the right person when human input is needed.
                </p>
              </div>
            </div>

            {/* 6. Brand voice */}
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <PenLine className="w-[17px] h-[17px] stroke-[1.9]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] text-[#0D0D0D] leading-snug mb-1">
                  Brand voice
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] leading-[19.5px] text-[#737373] max-w-[274px]">
                  Keep every AI response aligned with your tone, messaging and communication rules.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 6: HUMAN-IN-THE-LOOP / HANDOFF (Exact Figma Spec)
          ========================================================= */}
      <section className="relative w-full py-[40px] sm:py-[56px] px-6 sm:px-8 lg:px-12 bg-[#FAF9F6] border-t border-[#F1F5F9]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-semibold tracking-[-1.2px] leading-[1.18] text-[#0D0D0D] mb-5">
              <span className="block sm:whitespace-nowrap">AI handles the conversation.</span>
              <span className="block">Your team handles what matters.</span>
            </h2>

            {/* Main Description */}
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#475569] leading-relaxed max-w-lg mb-6">
              Engage manages repetitive conversations automatically while giving your team control when human attention is needed.
            </p>

            {/* Sub-note */}
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] sm:text-[12.5px] text-[#94A3B8] leading-[18px] max-w-md">
              The AI doesn't have to replace human conversations; it can hand conversations over when necessary.
            </p>
          </div>

          {/* Right Column: Interaction Card */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end w-full">
            <div
              className="w-full max-w-[660px] bg-white rounded-[20px] p-6 sm:p-7"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
                boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.02)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                {/* Left Sub-panel: Conversation Stream */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                  {/* Card Header: Instagram channel identity */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-[22px] h-[22px] shrink-0">
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                          <defs>
                            <radialGradient id="ig-real-grad-handoff" cx="0.2" cy="1" r="1">
                              <stop offset="0%" stopColor="#fdf497" />
                              <stop offset="5%" stopColor="#fdf497" />
                              <stop offset="45%" stopColor="#fd5949" />
                              <stop offset="60%" stopColor="#d6249f" />
                              <stop offset="90%" stopColor="#285AEB" />
                            </radialGradient>
                          </defs>
                          <rect width="24" height="24" rx="6" fill="url(#ig-real-grad-handoff)" />
                          <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="white" strokeWidth="1.8" />
                          <circle cx="12" cy="12" r="3.7" stroke="white" strokeWidth="1.8" />
                          <circle cx="16.5" cy="7.5" r="1.1" fill="white" />
                        </svg>
                      </div>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13.5px] text-[#0D0D0D]">
                        @alex_design
                      </span>
                    </div>
                    <span className="text-[11px] text-[#94A3B8] font-normal">
                      10:34 AM
                    </span>
                  </div>

                  {/* 3 Status / Event Rows */}
                  <div className="space-y-2.5">
                    {/* Row 1: AI handling conversation */}
                    <div className="p-3.5 rounded-[12px] bg-[#FBFBFC] border border-[#F1F5F9] text-left">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-medium text-[#1E293B]">
                        AI handling conversation
                      </span>
                    </div>

                    {/* Row 2: High-intent lead detected */}
                    <div className="p-3.5 rounded-[12px] bg-[#FBFBFC] border border-[#F1F5F9] text-left">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-medium text-[#1E293B]">
                        High-intent lead detected
                      </span>
                    </div>

                    {/* Row 3: Human handoff */}
                    <div className="p-3.5 rounded-[12px] bg-[#FBFBFC] border border-[#F1F5F9] text-left">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-medium text-[#1E293B]">
                        Human handoff
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Sub-panel: Take action sidebar */}
                <div className="md:col-span-5 md:border-l md:border-[#F1F5F9] md:pl-6 flex flex-col justify-between pt-2 md:pt-0">
                  <div>
                    <div className="text-[12px] font-semibold text-[#64748B] mb-3 text-left">
                      Take action
                    </div>

                    <div className="space-y-2">
                      {/* Button 1: Take over (Primary Blue) */}
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-2 px-3.5 rounded-[10px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12.5px] font-semibold transition-all shadow-xs cursor-pointer"
                      >
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <path
                            d="M2.33398 5.54171V7.00004M2.33398 5.54171V2.04171C2.33398 1.55878 2.72606 1.16671 3.20898 1.16671C3.69191 1.16671 4.08398 1.55878 4.08398 2.04171M2.33398 5.54171C2.33398 5.05878 1.94191 4.66671 1.45898 4.66671C0.976059 4.66671 0.583984 5.05878 0.583984 5.54171V6.70837C0.583984 9.123 2.54436 11.0834 4.95898 11.0834C7.37361 11.0834 9.33398 9.123 9.33398 6.70837V3.79171C9.33398 3.30878 8.94191 2.91671 8.45898 2.91671C7.97606 2.91671 7.58398 3.30878 7.58398 3.79171M4.08398 2.04171V5.25004M4.08398 2.04171V1.45837C4.08398 0.975448 4.47606 0.583374 4.95898 0.583374C5.44191 0.583374 5.83398 0.975448 5.83398 1.45837V2.04171M5.83398 2.04171V5.25004M5.83398 2.04171C5.83398 1.55878 6.22606 1.16671 6.70898 1.16671C7.19191 1.16671 7.58398 1.55878 7.58398 2.04171V3.79171M7.58398 3.79171V5.25004"
                            stroke="white"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Take over</span>
                      </button>

                      {/* Button 2: Assign */}
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-2 px-3.5 rounded-[10px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0D0D0D] text-[12.5px] font-medium transition-colors cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-[#64748B] stroke-[1.8]" />
                        <span>Assign</span>
                      </button>

                      {/* Button 3: Schedule */}
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-2 px-3.5 rounded-[10px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0D0D0D] text-[12.5px] font-medium transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#64748B] stroke-[1.8]" />
                        <span>Schedule</span>
                      </button>

                      {/* Button 4: Add note */}
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-2 px-3.5 rounded-[10px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0D0D0D] text-[12.5px] font-medium transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#64748B]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                        <span>Add note</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 7: FINAL CTA SECTION (Exact Design Spec)
          ========================================================= */}
      <section className="relative w-full py-[56px] sm:py-[72px] lg:py-[88px] px-6 sm:px-8 lg:px-12 bg-[#FAF9F6] border-t border-[#F1F5F9]">
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center justify-center">
          {/* Main Headline */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1.2px] leading-[1.18] text-[#0D0D0D]">
            Let AI handle the conversations.
            <br />
            You focus on the opportunities.
          </h2>

          {/* Primary CTA Button */}
          <div className="mt-7 sm:mt-8 mb-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-[10px] bg-[#1E1E1E] hover:bg-[#0D0D0D] text-white text-[13.5px] sm:text-[14px] font-medium transition-all shadow-xs active:scale-[0.99] cursor-pointer"
            >
              <span>Start with Engage</span>
              <span className="text-[14px] tracking-tight">→</span>
            </Link>
          </div>

          {/* Supporting Subtitle */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] sm:text-[12.5px] text-[#8E8E93] leading-relaxed mb-10 sm:mb-12">
            Connect your channels and let your AI agent start working.
          </p>

          {/* Back to Agents Link */}
          <div>
            <Link
              to="/#agents"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-medium text-[#2563EB] hover:text-[#1D4ED8] hover:underline transition-colors cursor-pointer"
            >
              <span className="text-[13px] leading-none">↑</span>
              <span>Back to agents</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Engage;

