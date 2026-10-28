import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ArrowUpRight,
  Check,
  Info
} from 'lucide-react';

import Hero from './section/Hero';
import CustomSelect from '../../components/ui/CustomSelect';
import ciLogoStartupProg from '../../assets/startups/Ciforstartupprogram.svg';
import firstmeetimgSvg from '../../assets/about/firstmeetimg.svg';
import redSquaresPng from '../../assets/startups/redsquares.png';
import purpleBgPng from '../../assets/startups/purplebg.png';
import lastGradientPng from '../../assets/startups/lastgradiend.png';

const STARTUP_STAGE_OPTIONS = [
  'Bootstrapped',
  'Pre-Seed',
  'Seed',
  'Series A',
  'Series B+',
];

const INDUSTRY_OPTIONS = [
  'AI / Machine Learning',
  'B2B SaaS',
  'Fintech',
  'Developer Tools',
  'E-commerce',
  'Healthcare',
  'Other',
];

const TEAM_SIZE_OPTIONS = [
  { value: '1-5', label: '1 - 5' },
  { value: '6-15', label: '6 - 15' },
  { value: '16-50', label: '16 - 50' },
  { value: '50+', label: '50+' },
];

const GROWTH_CHALLENGE_OPTIONS = [
  'Finding ICP & Leads',
  'Competitor Tracking',
  'SEO & AEO Visibility',
  'Market Demand Signals',
  'GTM Execution',
];

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who can apply for the Coirei Startup Program?",
    answer: "Any venture-backed, angel-funded, or bootstrapped tech startup founded within the last 5 years with under $5M in total funding is eligible to apply for up to 90% platform credits in Year 1."
  },
  {
    question: "What benefits are available to eligible startups?",
    answer: "Eligible startups receive platform credits (up to 90% off), full access to Coirei's AI-powered GTM intelligence suite, marketing tools, and founder community perks."
  },
  {
    question: "Is the program free?",
    answer: "Applying to the Coirei Startup Program is completely free. If accepted, you will receive substantial platform discounts and credit grants towards all features."
  },
  {
    question: "How long does the application review take?",
    answer: "Our team reviews applications on a rolling basis. You will typically hear back from our startup partnerships team within 24 to 48 business hours."
  },
  {
    question: "What happens after my application is approved?",
    answer: "Once approved, you'll receive a welcome email with instructions to activate your tier benefits, access your workspace, and begin exploring."
  },

];

export const Startups: React.FC = () => {
  const whatIsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  // Inline Application Form state
  const [applyForm, setApplyForm] = useState({
    founderName: '',
    workEmail: '',
    companyName: '',
    companyWebsite: '',
    startupStage: '',
    industry: '',
    teamSize: '',
    growthChallenge: '',
    description: '',
  });
  const [isApplySubmitted, setIsApplySubmitted] = useState(false);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToWhatIs = () => {
    whatIsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToApply = () => {
    document.getElementById('apply-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#bad9db] text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-sky-200">

      {/* 2. PINNED SCROLL HERO SECTION */}
      <Hero
        scrollToWhatIs={scrollToWhatIs}
        scrollToApply={scrollToApply}
      />

      {/* 3. SECTION 2: "What Is Coirei for Startups" */}
      <section
        ref={whatIsRef}
        id="what-is-coirei"
        data-custom-padding
        className="relative z-30 w-full bg-white px-6 sm:px-8 lg:px-12 text-center border-0"
        style={{ paddingTop: '111px', paddingBottom: '111px' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Logo Badge */}
          <div className="relative select-none mb-6">
            <img
              src={ciLogoStartupProg}
              alt="Coirei for Startups Logo"
              className="relative w-28 sm:w-32 md:w-36 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] border-0"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0F172A] tracking-[-0.02em] leading-tight mb-5">
            What Is Coirei for Startups
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="max-w-[760px] text-neutral-600 text-base sm:text-[17px] md:text-[18px] leading-relaxed font-normal">
            Coirei for Startups is a dedicated program designed to help early-stage startups grow smarter with exclusive benefits and access to Coirei's AI-powered GTM intelligence and marketing platform.
          </p>
        </div>
      </section>

      {/* 3.1. BLUE BANNER: "THE STARTUP COMMUNITY" (Exact Figma recreation) */}
      <section
        data-custom-padding
        className="relative z-30 w-full bg-[#4A7DFF] py-16 lg:py-20 px-6 sm:px-10 lg:px-16 border-0"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14">

          {/* Left Photo with clean rounded card shape */}
          <div className="w-full md:w-[400px] lg:w-[440px] shrink-0">
            <img
              src={firstmeetimgSvg}
              alt="The Startup Community"
              className="w-full h-auto object-cover rounded-3xl shadow-xl border-0 block"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-left flex flex-col items-start text-white">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#DCE7FE]">
              The Startup Community
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-[-0.02em] leading-[1.18] mt-3 mb-4">
              Great things happen when startups connect.
            </h3>
            <p className="text-white/90 text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-xl">
              Connect with ambitious founders, exchange ideas, discover new opportunities, and build meaningful relationships to accelerate your startup's growth.
            </p>
            <div className="mt-7">
              <button
                onClick={scrollToBenefits}
                className="h-[36px] px-[12px] py-[8px] rounded-[6px] bg-white text-[#3562FF] font-medium text-[13.5px] inline-flex items-center gap-1.5 shadow-xs hover:bg-neutral-50 transition-colors cursor-pointer border-0"
              >
                <span>Explore Startup Benefits</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3562FF]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION: "What You Can Do with Coirei" (Exact Figma gap: 111px) */}
      <section
        ref={benefitsRef}
        data-custom-padding
        className="w-full bg-white px-6 sm:px-10 lg:px-16 border-0"
        style={{ paddingTop: '111px', paddingBottom: '111px' }}
      >
        <div className="max-w-[1240px] mx-auto">

          {/* Header: Left title, Right description (Figma: 814px, 32px Medium, 100% line height, #000000) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10 mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-black tracking-[-0.01em] leading-[1.15] shrink-0 max-w-[260px]">
              What You Can Do with Coirei
            </h3>
            <p className="text-[22px] sm:text-[26px] lg:text-[32px] text-black font-medium leading-[1.18] max-w-[814px] tracking-tight">
              Coirei helps startups understand their market, discover customers, analyze competitors, and unlock growth opportunities with AI-powered research and marketing tools.
            </p>
          </div>

          {/* 4 Feature Cards (Figma: 295px x 230px, Text: 272px x 90px, 24px Medium, #FFFFFF) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 justify-center">

            {/* Card 1: Dark Reflective Gradient */}
            <div
              className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none border border-neutral-800/10"
              style={{
                background: 'linear-gradient(135deg, #666A72 0%, #4D5057 52%, #2F3136 53%, #222427 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Understand market trends and uncover growth opportunities.
              </p>
            </div>

            {/* Card 2: Red Squares Pattern */}
            <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none bg-neutral-100">
              <img
                src={redSquaresPng}
                alt="Competitor Analysis Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.3] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Analyze competitors and uncover market opportunities.
              </p>
            </div>

            {/* Card 3: Purple Wave Gradient */}
            <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none bg-neutral-100">
              <img
                src={purpleBgPng}
                alt="Audience Discovery Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.25] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Discover your ideal audience and qualified leads.
              </p>
            </div>

            {/* Card 4: Last Gradient (Red/Purple Fluted) */}
            <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden px-3.5 sm:px-4 py-5 flex items-center shadow-md select-none bg-neutral-100">
              <img
                src={lastGradientPng}
                alt="Campaigns Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.25] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <p className="relative z-10 w-full max-w-[272px] text-white font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Launch targeted campaigns and drive measurable growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION: "WHO CAN APPLY" (Exact Figma recreation from inspector specs) */}
      <section
        data-custom-padding
        className="w-full bg-[#FBFBFB] border-0"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left Column (Figma width: ~492px) */}
          <div className="w-full lg:w-[492px] shrink-0 flex flex-col items-start text-left">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-neutral-400">
              WHO CAN APPLY
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.15] mt-3.5 mb-5">
              Designed for teams building what comes next.
            </h3>
            <p className="text-neutral-500 text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-[440px] mb-8">
              The Coirei Startup Program is intended for eligible early-stage businesses looking to accelerate their market understanding and growth.
            </p>

            {/* Pill note (Figma: 492.67px Fill x 50.67px Hug, r:8px, p:16px, gap:12px, #FFFFFF) */}
            <div className="w-full max-w-[492.67px] min-h-[50.67px] rounded-[8px] bg-[#FFFFFF] px-[16px] py-[12px] flex items-center gap-[12px] text-[13px] text-neutral-600 shadow-xs border border-neutral-100">
              <Info className="w-4 h-4 text-neutral-400 shrink-0" />
              <span className="leading-snug">Program eligibility and final benefits are subject to Coirei's review and approval.</span>
            </div>
          </div>

          {/* Right Column: Card Container (Figma: r:8px, p:16px, gap:12px, #FFFFFF) */}
          <div className="w-full lg:flex-1 max-w-[667px]">
            <div className="w-full bg-[#FFFFFF] rounded-[8px] p-[16px] flex flex-col gap-[12px] shadow-xs border border-neutral-100/60">
              {[
                "Early-stage startup or growing technology business",
                "Valid company website or product landing page",
                "Business email address (no personal webmail)",
                "Clear product, service, or business offering",
                "Willingness to complete the startup verification process"
              ].map((text, idx) => (
                /* Checklist row: Fill 635.33px x Hug 60px, r:8px, p:14px, gap:16px, #F9F9F9 */
                <div
                  key={idx}
                  className="w-full min-h-[60px] bg-[#F9F9F9] hover:bg-[#F3F4F6] transition-colors rounded-[8px] px-[16px] py-[14px] flex items-center gap-[16px]"
                >
                  <Check className="w-4 h-4 text-neutral-400 shrink-0 stroke-[2.2]" />
                  <span className="text-[14.5px] sm:text-[15px] font-medium text-[#1E293B] leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION: "GET STARTED" - Four steps from application to activation */}
      <section
        data-custom-padding
        className="w-full bg-white px-6 sm:px-10 lg:px-16 border-0 text-center"
        style={{ paddingTop: '111px', paddingBottom: '111px' }}
      >
        <div className="max-w-[1240px] mx-auto">

          {/* Section Header */}
          <div className="max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-neutral-400 block mb-3">
              GET STARTED
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-[-0.02em] leading-tight mb-4">
              Four steps from application to activation.
            </h3>
            <p className="text-neutral-500 text-[15px] sm:text-[16px] font-normal leading-relaxed">
              Simple, rapid verification designed to get your team building with high-velocity telemetry in days.
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-left">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Share your startup and business details through the application form."
              },
              {
                step: "02",
                title: "Verification",
                desc: "Coirei reviews your company information and eligibility criteria."
              },
              {
                step: "03",
                title: "Approval",
                desc: "Receive confirmation of your application and the applicable program benefits."
              },
              {
                step: "04",
                title: "Activate",
                desc: "Follow the onboarding instructions to activate your approved benefits and start exploring."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="text-5xl sm:text-6xl font-bold text-neutral-300 leading-none mb-4 select-none tracking-tight">
                  {item.step}
                </span>
                <h4 className="text-[19px] sm:text-[20px] font-bold text-[#0F172A] tracking-tight mb-2.5">
                  {item.title}
                </h4>
                <p className="text-neutral-500 text-[14px] sm:text-[14.5px] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECTION: "APPLY TO THE COIREI STARTUP PROGRAM" (Exact Figma Dark Form) */}
      <section
        id="apply-form-section"
        data-custom-padding
        className="w-full bg-[#000000] text-white px-6 sm:px-10 lg:px-16 border-0 text-center"
        style={{ paddingTop: '100px', paddingBottom: '110px' }}
      >
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="max-w-[755px] mx-auto mb-12 sm:mb-14 flex flex-col items-center text-center">
            <span
              className="text-[12px] font-bold uppercase text-[#C5C5C5] tracking-[0.6px] leading-[16px] block mb-3 font-['Plus_Jakarta_Sans',sans-serif]"
            >
              YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.02em] leading-tight mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Apply to the Coirei Startup Program.
            </h2>
            <p
              className="max-w-[755px] w-full text-[16px] font-normal leading-[24px] tracking-[-0.18px] text-[#C6C6C6] font-['Plus_Jakarta_Sans',sans-serif]"
            >
              Tell us about your startup. Our team will review your application and contact you regarding eligibility and next steps.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 shadow-2xl max-w-[680px] mx-auto text-left text-[#0F172A]">
            {isApplySubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                  Application Received!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying to the Coirei Startup Program. Our team is reviewing your details and will contact you at <span className="font-semibold text-black">{applyForm.workEmail}</span> within 24 to 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsApplySubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
                  {/* Founder name */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Founder or applicant name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={applyForm.founderName}
                      onChange={(e) => setApplyForm({ ...applyForm, founderName: e.target.value })}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={applyForm.workEmail}
                      onChange={(e) => setApplyForm({ ...applyForm, workEmail: e.target.value })}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                    <span className="block text-[11px] text-neutral-400 mt-1">
                      Business domain required (no webmail).
                    </span>
                  </div>

                  {/* Company name */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Company name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your company name"
                      value={applyForm.companyName}
                      onChange={(e) => setApplyForm({ ...applyForm, companyName: e.target.value })}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                  </div>

                  {/* Company website */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Company website <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="Enter your company website"
                      value={applyForm.companyWebsite}
                      onChange={(e) => setApplyForm({ ...applyForm, companyWebsite: e.target.value })}
                      className="w-full bg-[#F9F9F9] rounded-[8px] px-3.5 py-3 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                  </div>

                  {/* Startup stage */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Startup stage <span className="text-red-500">*</span>
                    </label>
                    <CustomSelect
                      required
                      placeholder="Select funding stage"
                      value={applyForm.startupStage}
                      onChange={(val) => setApplyForm({ ...applyForm, startupStage: val })}
                      options={STARTUP_STAGE_OPTIONS}
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <CustomSelect
                      required
                      placeholder="Select sector"
                      value={applyForm.industry}
                      onChange={(val) => setApplyForm({ ...applyForm, industry: val })}
                      options={INDUSTRY_OPTIONS}
                    />
                  </div>

                  {/* Team size */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Team size <span className="text-red-500">*</span>
                    </label>
                    <CustomSelect
                      required
                      placeholder="Select team count"
                      value={applyForm.teamSize}
                      onChange={(val) => setApplyForm({ ...applyForm, teamSize: val })}
                      options={TEAM_SIZE_OPTIONS}
                    />
                  </div>

                  {/* Primary growth challenge */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                      Primary growth challenge <span className="text-red-500">*</span>
                    </label>
                    <CustomSelect
                      required
                      placeholder="Select key focus area"
                      value={applyForm.growthChallenge}
                      onChange={(val) => setApplyForm({ ...applyForm, growthChallenge: val })}
                      options={GROWTH_CHALLENGE_OPTIONS}
                    />
                  </div>
                </div>

                {/* Brief description */}
                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                    Brief description of the company <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="What are you building and who are your initial customers?"
                    value={applyForm.description}
                    onChange={(e) => setApplyForm({ ...applyForm, description: e.target.value })}
                    className="w-full bg-[#F9F9F9] rounded-[8px] p-3.5 text-[14px] text-[#0F172A] placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-[8px] bg-[#E5E7EB] hover:bg-neutral-300 text-neutral-800 font-medium text-[14.5px] transition-colors cursor-pointer border-0"
                >
                  Submit Application
                </button>

                {/* Disclaimer */}
                <p className="text-[11.5px] text-neutral-400 text-center mt-4 leading-relaxed max-w-lg mx-auto">
                  By submitting this application, you agree to the applicable privacy policy and understand that submission does not guarantee program acceptance.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 8. SECTION: "QUESTIONS BEFORE YOU APPLY?" (Exact Figma Accordion) */}
      <section
        data-custom-padding
        className="w-full bg-white px-6 sm:px-8 border-0"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Questions before you apply?
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border-0 overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#F9FAFB] shadow-xs'
                      : 'bg-[#F9FAFB] hover:bg-neutral-100/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between font-semibold text-[15px] sm:text-[15.5px] text-[#0F172A] cursor-pointer border-0 select-none"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180 text-[#0F172A]' : ''
                      }`}
                    />
                  </button>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-0 transition-all duration-300 ease-out ${
                          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                        }`}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. SECTION: FINAL BOTTOM CTA CARD (Exact Figma specs from inspector) */}
      <section
        data-custom-padding
        className="w-full bg-white px-4 sm:px-8 border-0"
        style={{ paddingTop: '40px', paddingBottom: '100px' }}
      >
        <div
          className="max-w-[1280px] w-full min-h-[442px] mx-auto bg-[#FAFAFA]  py-[96px] px-6 sm:px-12 lg:px-[128px] text-center flex flex-col items-center justify-center border-0 select-none"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.15] max-w-[760px] mx-auto mb-4">
            Your next stage of growth starts with better intelligence.
          </h2>
          <p className="text-neutral-500 text-sm sm:text-[16px] max-w-xl mx-auto mb-9 font-normal leading-relaxed">
            Understand your market, find your opportunities, and build your next move with Coirei.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => {
                document.getElementById('apply-form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#0F172A] font-medium text-[13.5px] px-5 py-2.5 rounded-[8px] shadow-xs border border-neutral-200/60 transition-colors cursor-pointer"
            >
              <span>Apply for Startup Benefits</span>
             
            </button>
            <Link
              to="/about"
              className="text-neutral-500 hover:text-black font-medium text-[13.5px] px-4 py-2.5 transition-colors"
            >
              Explore Coirei
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Startups;
