import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blueWaveSvg from '../../assets/bluewave.svg';
import HowWeWork from './section/HowWeWork';
import BuildSection from './section/BuildSection';
import TeamSection from './section/TeamSection';
import Partnersection from './section/Partnersection';

export const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION WITH BLUE WAVE BACKGROUND */}
      <section className="relative w-full overflow-hidden bg-white pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
        {/* Subtle Wave SVG Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <img
            src={blueWaveSvg}
            alt=""
            className="w-full min-w-[1100px] max-w-[1700px] h-auto object-cover opacity-90 translate-y-2 sm:translate-y-4"
          />
        </div>

        {/* Soft Bottom Fade Effect */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
            About Coirei
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] font-semibold tracking-[-1.5px] leading-[1.14] text-[#0B0F19] max-w-5xl mx-auto">
            <span className="block sm:inline sm:whitespace-nowrap">Technology, built around how your</span>{' '}
            <span className="block sm:inline sm:whitespace-nowrap">business works.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#475569] font-normal leading-relaxed max-w-xl mx-auto">
            Less complexity. More possibilities.
          </p>

          {/* Action Button */}
          <div className="mt-6 sm:mt-7">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (Left-aligned, seamless fade from hero) */}
      <section className="w-full bg-white pt-6 sm:pt-10 pb-16 sm:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1216px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-4">
            Who We Are
          </p>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18] mb-8">
            AI that works
            <br />
            beyond the screen.
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-[15.5px] sm:text-[16.5px] text-[#64748B] leading-[1.75] max-w-3xl font-normal">
            <p>
              We combine AI, software engineering, and deep problem-solving to create
              technology that fits the way businesses actually work.
            </p>
            <p>
              From intelligent search and automation to voice, analytics, and decision systems,
              we turn complex challenges into simple, scalable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD SECTION (Exact Figma: 1152 × 243 Hug, 1px Border #EEF3FA) */}
      <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
            What We Build
          </p>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18] mb-12 sm:mb-14">
            Intelligence,
            <br />
            built for impact.
          </h2>

          {/* 2x2 Grid with Outer Border 1px All Sides #EEF3FA and Inner Dividers */}
          <div className="w-full max-w-[1152px] border border-[#EEF3FA] rounded-[12px] bg-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#EEF3FA] overflow-hidden">
            {/* Top Left: AI Systems */}
            <div className="p-6 sm:py-[26px] sm:px-[32px] md:border-r md:border-b border-[#EEF3FA]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                AI Systems
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Context-aware AI designed to understand information and deliver meaningful outcomes.
              </p>
            </div>

            {/* Top Right: Intelligent Automation */}
            <div className="p-6 sm:py-[26px] sm:px-[32px] md:border-b border-[#EEF3FA]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                Intelligent Automation
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Reduce repetitive work and let AI handle processes that slow your teams down.
              </p>
            </div>

            {/* Bottom Left: AI-Powered Products */}
            <div className="p-6 sm:py-[26px] sm:px-[32px] md:border-r border-[#EEF3FA]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                AI-Powered Products
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Build products where intelligence is part of the experience — not an add-on.
              </p>
            </div>

            {/* Bottom Right: Data & Analytics */}
            <div className="p-6 sm:py-[26px] sm:px-[32px]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0B0F19] mb-1.5">
                Data & Analytics
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#8592A6] leading-relaxed max-w-md font-normal">
                Turn scattered information into insights that help teams make faster, better-informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 5. PARTNERS / COLLABORATION SECTION */}
      <Partnersection />


      {/* 8. BUILD WHAT'S NEXT KINETIC SCROLL SECTION */}
      <BuildSection />


        {/* 6. MEET OUR TEAM SECTION */}
      <TeamSection />


      {/* 7. HOW WE WORK (Modular & Fully Responsive across all screens) */}
      <HowWeWork />

    </div>
  );
};

export default About;
