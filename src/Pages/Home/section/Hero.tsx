import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mockupImg from '../../../assets/home/mockups.svg';
import {
  Play,
  Check,
  Sparkles,
  TrendingUp,
  X
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="GlobalPading relative w-full overflow-hidden bg-white">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="toggle">
            THE AI GTM STRATEGIST
          </div>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          A GTM that thinks, analyses <br className="hidden sm:inline" />
          and acts.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-normal">
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
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-600 text-[13.5px] font-medium relative z-20">
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

      {/* Trusted By Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8">
        <p className="text-center text-[11px] sm:text-xs font-bold tracking-[0.18em] text-neutral-800 uppercase mb-8">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>

        {/* Logo Cloud Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 text-neutral-700">
          {/* Stripe */}
          <div className="flex items-center gap-2 hover:text-neutral-950 transition-colors cursor-pointer group">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[10px] font-bold">
              ✕
            </div>
            <span className="text-[17px] font-bold tracking-tight">stripe</span>
          </div>

          {/* Notion */}
          <div className="flex items-center gap-2 hover:text-neutral-950 transition-colors cursor-pointer group">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[10px] font-bold">
              ✕
            </div>
            <span className="text-[17px] font-bold tracking-tight">Notion</span>
          </div>

          {/* Calendly */}
          <div className="flex items-center gap-2 hover:text-neutral-950 transition-colors cursor-pointer group">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[10px] font-bold">
              ✕
            </div>
            <span className="text-[17px] font-bold tracking-tight">Calendly</span>
          </div>

          {/* Webflow */}
          <div className="flex items-center gap-2 hover:text-neutral-950 transition-colors cursor-pointer group">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[10px] font-bold">
              ✕
            </div>
            <span className="text-[17px] font-bold tracking-tight">Webflow</span>
          </div>

          {/* Scale */}
          <div className="flex items-center gap-2 hover:text-neutral-950 transition-colors cursor-pointer group">
            <svg
              className="w-5 h-5 text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="M7 21h10" />
              <path d="M12 3v18" />
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            </svg>
            <span className="text-[17px] font-bold tracking-tight">Scale</span>
          </div>

          {/* Replit */}
          <div className="flex items-center gap-2 hover:text-neutral-950 transition-colors cursor-pointer group">
            <div className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[10px] font-bold">
              ✕
            </div>
            <span className="text-[17px] font-bold tracking-tight">replit</span>
          </div>
        </div>
      </div>

      {/* Interactive Demo Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 text-white">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-lg">Coirei AI GTM Strategist in Action</h4>
              </div>
              <button
                onClick={() => setIsDemoOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h5 className="text-xl font-bold text-white">Autonomous GTM Execution Demo</h5>
              <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                Watch how Coirei analyzes your ICP, orchestrates multi-channel outbound campaigns, and automates customer acquisition from day one.
              </p>
              <div className="pt-2">
                <Link
                  to="/get-started"
                  onClick={() => setIsDemoOpen(false)}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 transition-all"
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
