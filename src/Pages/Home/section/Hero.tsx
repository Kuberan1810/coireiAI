import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mockupImg from '../../../assets/home/mockups.svg';
import {
  Play,
  Pause,
  Check,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  X
} from 'lucide-react';

const companyLogos = [
  {
    name: 'stripe',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Calendly',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Webflow',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Scale',
    icon: (
      <svg className="w-5 h-5 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    name: 'replit',
    icon: (
      <svg className="w-4.5 h-4.5 text-current shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M7 7l6 6M13 7l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const Hero: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="GlobalPading max-w-7xl mx-auto text-center mt-5">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="toggle">
            THE AI GTM STRATEGIST
          </div>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-semibold text-[#0B0F19] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          A GTM that thinks, analyses <br className="hidden sm:inline" />
          and acts.
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us about your company. Our AI understands your product, market and ideal customers then builds and executes the right GTM strategy.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[14.5px] px-6 sm:px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Start your GTM journey</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsDemoOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-[14.5px] px-6 py-3 rounded-full border border-neutral-200 shadow-xs hover:border-neutral-300 transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800 ml-0.5" />
            <span>Watch demo</span>
          </button>
        </div>

        {/* Hero Mockup Image Container with Seamless Fade */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto px-2 relative">
          {/* Ambient Soft Glow Behind Mockup */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-64 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="relative pt-2 pb-2">
            {/* The 3D Mockup Graphic with Smooth Mask */}
            <div className="[mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_96%)]">
              <img
                src={mockupImg}
                alt="Coirei AI GTM Strategist Platform"
                className="w-full h-auto object-contain mx-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] select-none"
              />
            </div>

            {/* Bottom Pure White Gradient Overlay */}
            <div className="absolute bottom-0 inset-x-0 h-40 sm:h-56 md:h-64 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Feature Checkpoint Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-600 text-[13.5px] font-medium relative z-20">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
            <span>No credit card required</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
            <span>Setup in minutes</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
            <span>Built for growth</span>
          </div>
        </div>
      </div>

      {/* Trusted By Section with Short Width and Horizontal Shadow Fade */}
      <div className="w-full bg-[#F8FAFC] py-10 md:py-12 text-center relative overflow-hidden">
        <p className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em] text-neutral-800 uppercase mb-7">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>

        {/* Short Width Container with Horizontal Shadow/Fade Masks */}
        <div className="max-w-4xl sm:max-w-5xl mx-auto px-4 relative overflow-hidden">
          {/* Left and Right Horizontal Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none z-10" />

          {/* Masked Infinite Looping Track */}
          <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] py-1">
            <div className="animate-marquee gap-14 sm:gap-20 md:gap-24 items-center">
              {[...companyLogos, ...companyLogos, ...companyLogos].map((company, idx) => (
                <div
                  key={`${company.name}-${idx}`}
                  className="flex items-center gap-2.5 shrink-0 text-[#64748B] hover:text-neutral-900 transition-colors cursor-pointer group select-none"
                >
                  {company.icon}
                  <span className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#64748B] group-hover:text-neutral-900 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* High-End Interactive SaaS Demo Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700/80 rounded-3xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.7)] text-white overflow-hidden flex flex-col">
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B1120]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-px bg-slate-800 mx-1" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                    Coirei AI Strategist — Live Simulation
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsDemoOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Simulated Live Product Screen / Player */}
            <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]">
              {/* Simulated Command Bar */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner">
                <div className="flex items-center gap-3 text-sm">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-400 font-mono text-xs sm:text-sm">
                    Target: <span className="text-white">Enterprise AI & B2B SaaS Decision Makers</span>
                  </span>
                </div>
                <span className="text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                  Automating
                </span>
              </div>

              {/* Execution Pipeline Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
                    <Target className="w-4 h-4" />
                    <span>ICP Discovery</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">1,420</div>
                  <p className="text-[11px] text-slate-400 mt-0.5">High-intent accounts matched</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Multi-Channel Angle</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">28.4%</div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Predicted response velocity</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span>Pipeline Goal</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">$1.2M</div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Autonomous Q3 target</p>
                </div>
              </div>

              {/* Live Playback Timeline Controls */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-105"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                    </button>
                    <span>Simulation Progress</span>
                  </div>
                  <span>01:24 / 02:00</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 w-3/4 rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Modal CTA Bar */}
            <div className="p-6 bg-[#0B1120] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h5 className="font-bold text-sm text-white">Ready to automate your Go-To-Market?</h5>
                <p className="text-xs text-slate-400 mt-0.5">Set up in minutes. No credit card required.</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsDemoOpen(false)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/get-started"
                  onClick={() => setIsDemoOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/25 transition-all"
                >
                  Start Your Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
