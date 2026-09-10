import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Check,
  Home as HomeIcon,
  Compass,
  PieChart,
  Users,
  Megaphone,
  Mail,
  BarChart3,
  Sparkles,
  TrendingUp,
  X
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative w-full pt-6 md:pt-10 pb-16 overflow-hidden bg-white">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-[#EFF6FF] text-[#2563EB] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-xs">
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
            className="inline-flex items-center justify-center gap-2 bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[14.5px] px-6 sm:px-7 py-3 rounded-full shadow-sm hover:shadow transition-all group"
          >
            <span>Start your GTM journey</span>
            <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-0.5 transition-transform" />
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

        {/* Hero Mockup Preview Card */}
        <div className="mt-14 max-w-4xl mx-auto relative">
          {/* Framed Application Window */}
          <div className="relative rounded-2xl md:rounded-3xl border border-neutral-800/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] bg-white overflow-hidden text-left">
            <div className="flex flex-col md:flex-row min-h-[460px]">
              {/* Left Sidebar inside Mockup */}
              <div className="w-full md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-neutral-100 bg-[#FFFFFF] p-4 flex flex-col justify-between">
                <div>
                  {/* Mockup Brand */}
                  <div className="flex items-center gap-2 mb-6 px-2">
                    <div className="w-6 h-6 rounded-md bg-[#2563EB] flex items-center justify-center text-white">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.4 0 4.6-.85 6.32-2.27l-2.14-2.14C14.98 18.3 13.56 18.8 12 18.8c-3.76 0-6.8-3.04-6.8-6.8 0-3.76 3.04-6.8 6.8-6.8 2.8 0 5.2 1.68 6.24 4.08h3.24C20.16 5.34 16.42 2 12 2z" />
                      </svg>
                    </div>
                    <span className="font-bold text-[14px] text-neutral-900 tracking-tight">
                      Coirei
                    </span>
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-900 font-semibold text-[12px]">
                      <HomeIcon className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Home</span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 text-[12px] font-medium transition-colors">
                      <Compass className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Strategy</span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 text-[12px] font-medium transition-colors">
                      <PieChart className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Market</span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 text-[12px] font-medium transition-colors">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Audience</span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 text-[12px] font-medium transition-colors">
                      <Megaphone className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Campaigns</span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 text-[12px] font-medium transition-colors">
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Outreach</span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 text-[12px] font-medium transition-colors">
                      <BarChart3 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area inside Mockup */}
              <div className="flex-1 bg-[#F9FAFB] p-5 sm:p-6 flex flex-col justify-between relative">
                <div>
                  {/* User Greeting */}
                  <div className="mb-5">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                      Good morning, Rahul <span className="text-lg">👋</span>
                    </h3>
                    <p className="text-neutral-400 text-[11.5px] mt-0.5">
                      Your GTM strategist is working for you.
                    </p>
                  </div>

                  {/* 2-Column Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Left Column: Analysing Company Progress */}
                    <div className="md:col-span-7 bg-white rounded-xl p-4 sm:p-5 border border-neutral-100 shadow-xs">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-[13px] text-neutral-900">
                          Analysing your company...
                        </span>

                        {/* Circular Progress Gauge */}
                        <div className="relative w-10 h-10 flex items-center justify-center">
                          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-neutral-100"
                              strokeWidth="3.5"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-[#2563EB]"
                              strokeDasharray="68, 100"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="absolute text-[10px] font-bold text-neutral-900">
                            68%
                          </span>
                        </div>
                      </div>

                      {/* Checklist Items */}
                      <div className="space-y-2.5">
                        {/* Completed 1 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-[11.5px] font-semibold text-neutral-800">
                            Reading your website
                          </span>
                        </div>

                        {/* Completed 2 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-[11.5px] font-semibold text-neutral-800">
                            Understanding your product
                          </span>
                        </div>

                        {/* Completed 3 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-[11.5px] font-semibold text-neutral-800">
                            Analysing market & competitors
                          </span>
                        </div>

                        {/* Pending 4 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-neutral-300 shrink-0" />
                          <span className="text-[11.5px] text-neutral-400 font-normal">
                            Identifying your ideal customers
                          </span>
                        </div>

                        {/* Pending 5 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-neutral-300 shrink-0" />
                          <span className="text-[11.5px] text-neutral-400 font-normal">
                            Finding the best channels
                          </span>
                        </div>

                        {/* Pending 6 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-neutral-300 shrink-0" />
                          <span className="text-[11.5px] text-neutral-400 font-normal">
                            Building your GTM strategy
                          </span>
                        </div>

                        {/* Pending 7 */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-neutral-300 shrink-0" />
                          <span className="text-[11.5px] text-neutral-400 font-normal">
                            Preparing campaigns
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Projected Pipeline & Growth */}
                    <div className="md:col-span-5 flex flex-col gap-3">
                      {/* Top Metric Card */}
                      <div className="bg-white rounded-xl p-4 border border-neutral-100 shadow-xs">
                        <span className="text-[11px] font-medium text-neutral-400">
                          Projected Pipeline
                        </span>
                        <div className="text-2xl font-bold text-neutral-900 tracking-tight mt-0.5">
                          $1.2M
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            ↑ 32%
                          </span>
                          <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            ↑ 32%
                          </span>
                        </div>
                      </div>

                      {/* Chart Card */}
                      <div className="bg-white rounded-xl p-4 border border-neutral-100 shadow-xs">
                        {/* Wave Chart Graphic */}
                        <div className="h-16 w-full pt-1">
                          <svg
                            className="w-full h-full overflow-visible"
                            viewBox="0 0 160 50"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0 45 Q 35 44, 60 32 T 110 20 T 160 8 L 160 50 L 0 50 Z"
                              fill="url(#heroChartGrad)"
                            />
                            <path
                              d="M0 45 Q 35 44, 60 32 T 110 20 T 160 8"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-2 font-normal">
                          From strategic insights to real revenue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating GTM Strategist Widget */}
                <div className="absolute bottom-4 right-5 bg-[#0B101E] text-white rounded-xl px-4 py-3 shadow-xl border border-slate-700/60 flex items-center gap-3 backdrop-blur-md z-10 max-w-[260px]">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-white leading-tight">
                      GTM Strategist
                    </div>
                    <div className="text-[9.5px] text-slate-400 mt-0.5">
                      Thinking. Analysing. Acting.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Fade Overlay */}
            <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Feature Checkpoint Bullets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-600 text-[13.5px] font-medium">
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
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 transition-all"
                >
                  Start Your Free Trial →
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
