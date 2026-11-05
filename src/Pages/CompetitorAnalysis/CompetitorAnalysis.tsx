import React from 'react';
import { Link } from 'react-router-dom';
import bgForCompAnalysis from '../../assets/competitor/bgforcompanalysis.svg';
import { DeepResearchSection } from './components/DeepResearchSection';
import { DiscoverCompetitorsSection } from './components/DiscoverCompetitorsSection';

export const CompetitorAnalysis: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#38BDF8]/30 selection:text-white">
      {/* Subtle Ambient Background Lighting */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(56, 189, 248, 0.08) 0%, rgba(14, 165, 233, 0.03) 40%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-28 sm:pt-36 pb-24">
        {/* 1. HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[64px] lg:text-[72px] font-bold tracking-tight text-white leading-[1.08] text-center">
            <span>Know your competitors</span>
            <br />
            <span>before they move.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[15px] sm:text-[17px] text-[#9CA3AF] max-w-2xl mx-auto text-center leading-[1.65] font-normal">
            AI-powered competitor research that reveals positioning, messaging, pricing, audience, and market gaps — all in one place.
          </p>

          {/* CTA Pill */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-[12px] bg-[#12151D] hover:bg-[#1A1F2C] border border-[#232938] text-white text-[13.5px] font-medium transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:border-[#38BDF8]/40 hover:shadow-[0_4px_25px_rgba(56,189,248,0.15)] group"
            >
              <span>Analyze Competitors</span>
              <span className="text-[#9CA3AF] group-hover:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 2. MAIN APPLICATION MOCKUP (Figma SVG) */}
        <div className="mt-14 sm:mt-18 max-w-[1240px] xl:max-w-[1280px] mx-auto rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] border border-[#1A1F2C]">
          <img
            src={bgForCompAnalysis}
            alt="AI Competitor Analysis Workspace"
            className="w-full h-auto block select-none"
          />
        </div>

        {/* Bottom Row below Mockup */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-[#1A1F2C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-[1240px] xl:max-w-[1280px] mx-auto">
          <div className="max-w-xl text-left">
            <h4 className="text-[15px] sm:text-[16px] font-semibold text-white">
              Analyze your product and competitors with AI.
            </h4>
            <p className="text-[13px] sm:text-[13.5px] text-[#8C95A6] leading-relaxed mt-1">
              Get a detailed competitor analysis, feature comparison, pricing insights, and market opportunities. Understand where you stand and find ways to grow.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white hover:text-[#38BDF8] transition-colors shrink-0 group"
          >
            <span>Try Coirei AI</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* 3. UNDERSTAND YOUR COMPETITORS, BACKED BY REAL DATA (Deep Research) */}
      <DeepResearchSection />

      {/* 4. DISCOVER WHO YOU'RE COMPETING AGAINST SECTION */}
      <DiscoverCompetitorsSection />
    </div>
  );
};

export default CompetitorAnalysis;
