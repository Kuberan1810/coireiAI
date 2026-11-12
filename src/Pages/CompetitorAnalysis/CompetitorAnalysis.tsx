import React from 'react';
import { Link } from 'react-router-dom';
import { CompetitorHeroMockup } from './components/CompetitorHeroMockup';
import { ScrollShowcaseSection } from './components/ScrollShowcaseSection';
import { AdvertisingAnalysisSection } from './components/AdvertisingAnalysisSection';
import { GoogleAdsSection } from './components/GoogleAdsSection';
import { MetaAdsSection } from './components/MetaAdsSection';
import { StopGuessingSection } from './components/StopGuessingSection';

export const CompetitorAnalysis: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#38BDF8]/20 selection:text-black">
      {/* Subtle Ambient Background Lighting */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(56, 189, 248, 0.04) 0%, rgba(14, 165, 233, 0.015) 40%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10 sm:pb-12">
        {/* 1. HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[58px] lg:text-[64px] font-bold tracking-tight text-[#0D0D0D] leading-[1.1] text-center">
            <span>Know your competitors</span>
            <br />
            <span>before they move.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16.5px] text-[#64748B] max-w-2xl mx-auto text-center leading-[1.6] font-normal">
            AI-powered competitor research that reveals positioning, messaging, pricing, audience, and market gaps — all in one place.
          </p>

          {/* CTA Pill */}
          <div className="mt-6 sm:mt-7 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-[12px] bg-[#1E1E1E] hover:bg-[#0D0D0D] text-white text-[13.5px] font-medium transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.12)] group"
            >
              <span>Analyze Competitors</span>
              <span className="text-neutral-400 group-hover:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 2. MAIN APPLICATION MOCKUP (Interactive Coded Figma Mockup) */}
        <CompetitorHeroMockup />
      </div>

      {/* 2.5 HORIZONTAL SHOWCASE ANIMATION (Infinite Wrap, Inertia, Center Zoom) */}
      <ScrollShowcaseSection />

      {/* 3. ADVERTISING ANALYSIS OVERVIEW SECTION */}
      <AdvertisingAnalysisSection />

      {/* 4. ADVERTISING INTELLIGENCE SECTIONS (Google Ads & Meta Ads) */}
      <div className="relative z-10 pointer-events-auto flex flex-col gap-6 sm:gap-8 pb-12 sm:pb-16">
        <GoogleAdsSection />
        <MetaAdsSection />
      </div>

      {/* 5. STOP GUESSING STATEMENT SECTION */}
      <StopGuessingSection />
    </div>
  );
};

export default CompetitorAnalysis;
