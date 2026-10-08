
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FlowingWaveBackground } from './components/FlowingWaveBackground';
import HowWeWork from './section/HowWeWork';
import BuildSection from './section/BuildSection';
import TeamSection from './section/TeamSection';
import Partnersection from './section/Partnersection';
import IdeasToImpact from './section/IdeasToImpact';
import ciLogoSvg from '../../assets/CiLogoforaboutus.svg';
import { ScrollReveal } from '../../components/ui/ScrollReveal';



const INTELLIGENCE_ITEMS = [
  {
    title: 'Market Intelligence',
    description: 'Understand your market, trends, and opportunities.',
    link: '/market-intelligence',
  },
  {
    title: 'Competitor Intelligence',
    description: 'Know who you compete with and where you stand.',
    link: '/competitor-analysis',
  },
  {
    title: 'Audience Intelligence',
    description: 'Discover who your ideal customers really are.',
    link: '',
  },
  {
    title: 'Lead Intelligence',
    description: 'Find high-intent prospects built for your business.',
    link: '',
  },
];

export const About: React.FC = () => {
  const [isLogoInView, setIsLogoInView] = useState(false);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logoContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLogoInView(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  
  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION WITH BLUE WAVE BACKGROUND - FULL SCREEN HEIGHT */}
      <section
        data-custom-padding
        className="relative w-full min-h-[calc(100vh-80px)] min-h-[calc(100dvh-80px)] flex flex-col justify-center items-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Animated Flowing Wave Lines Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <FlowingWaveBackground
            className="w-full h-full opacity-95"
            lineCount={44}
            speed={0.8}
            spreadScale={1.0}
          />
        </div>

        {/* Soft Bottom Fade Effect */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-56 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center my-auto">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.16em] text-[#64748B] mb-4 sm:mb-6">
            ABOUT COIREI
          </p>

          {/* Main Headline */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-5xl md:text-[56px] lg:text-[62px] font-semibold tracking-[-1.5px] leading-[1.12] text-[#0D0D0D] max-w-[1000px] mx-auto text-center">
            <span className="block sm:whitespace-nowrap">Technology, built around how your</span>
            <span className="block">business works.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 font-['Plus_Jakarta_Sans',sans-serif] font-semibold italic text-[15px] sm:text-[16px] leading-[22px] tracking-[0px] text-[#192339]">
            Less complexity. More possibilities.
          </p>
        </div>
      </section>

      {/* 2. OUR MISSION & INTELLIGENCE SUITE SECTION */}
      <section className="w-full bg-white pt-4 sm:pt-8 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission, Headline, Description, Buttons */}
          <div className="lg:col-span-6 text-left">
            {/* Mission Tag */}
            <span className="inline-block px-2.5 py-0.5 rounded-[4px] border border-[#E2E8F0] text-[12px] text-[#64748B] font-normal mb-5 sm:mb-6">
              Our mission
            </span>


            
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-1.5px] leading-[1.12] text-[#0B0F19] mb-5 sm:mb-6">
              Intelligence That<br />
              Drives Growth
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.68] max-w-md font-normal mb-8 sm:mb-9">
              We build AI to turn market intelligence into growth — understanding your business, competitors, and customers to uncover the opportunities that matter most.
            </p>

            {/* Action Buttons: Join us & Contact (Figma: h-[44px], radius 9999px, px-[20px] py-[12px], gap-[12px]) */}
            <div className="flex items-center gap-[12px]">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-[44px] px-[20px] py-[12px] rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-[14px] font-medium leading-[20px] transition-colors shadow-xs active:scale-[0.99] cursor-pointer"
              >
                Join us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-[44px] px-[20px] py-[12px] rounded-full text-[#0A0A0A] hover:bg-neutral-100/80 text-[14px] font-medium leading-[20px] transition-colors active:scale-[0.99] cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Intelligence Items with Dividers & Arrows (Figma: title 16px/24px 500 #0A0A0A, desc 14px/20px 400 #0A0A0A 60%) */}
          <div className="lg:col-span-6 w-full divide-y divide-[#F1F5F9]">
            {INTELLIGENCE_ITEMS.map((item, idx) => (
              <Link
                key={item.title}
                to={item.link}
                className={`group block py-5 sm:py-6 transition-colors ${
                  idx === 0 ? 'pt-0 lg:pt-1' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] tracking-[0px] text-[#0A0A0A] group-hover:text-black">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-[14px] font-normal leading-[20px] tracking-[0px] text-[#0A0A0A]/60 mt-1">
                  {item.description}
                </p>
              </Link>
            ))}

            
          </div>
        </div>
      </section>


      {/* 3. QUOTE & 3D LOGO SHOWCASE SECTION (with homepage scale reveal animation) */}
      <section className="w-full bg-white pt-6 sm:pt-10 pb-16 sm:pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 3D Ci Logo Card with scale animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div
              ref={logoContainerRef}
              className="w-full max-w-[378px] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-[#F8FAFC]"
            >
              <img
                src={ciLogoSvg}
                alt="Coirei 3D Logo"
                className="w-full h-auto object-cover block"
                style={{
                  transform: isLogoInView ? 'scale(1)' : 'scale(0.88)',
                  transformOrigin: 'center center',
                  transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>

          {/* Right Column: Cormorant Garamond Quote with ScrollReveal */}
          <div className="lg:col-span-7 text-left">
            <ScrollReveal variant="fade-up" duration={750} distance={20}>
              <blockquote className="font-['Cormorant_Garamond',Georgia,serif] font-cormorant italic font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[1.22] lg:leading-[60px] tracking-[-0.6px] text-[#0A0A0A]">
                “Coirei transforms complex business <br className="hidden sm:inline" />
                data into intelligent insights, <br className="hidden sm:inline" />
                opportunities, and decisive growth”
              </blockquote>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* 4. FROM IDEAS TO IMPACT SECTION */}
      <IdeasToImpact />

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
