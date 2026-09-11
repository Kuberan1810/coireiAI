import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Swords,
  Target,
  Globe,
  Megaphone,
  Users,
  Mail,
  TrendingUp,
} from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface AgentCard {
  id: string;
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  style: React.CSSProperties;
  fromCenter: { x: number; y: number };
  burstDelay: number;
}

// 287px outer dotted circle has radius 143.5px
// Center circle is 218px (radius 109px)
// Gap is exactly (287 - 218) / 2 = 34.5px on all sides
const AGENTS: AgentCard[] = [
  {
    id: 'research',
    name: 'Research Agent',
    role: 'Company, market, insights',
    icon: Search,
    iconBg: 'bg-[#EBF5FF]',
    iconColor: 'text-[#2563EB]',
    style: {
      left: '50%',
      top: 'calc(50% - 143.5px - 10px)',
      transform: 'translate(-50%, -100%)',
    },
    fromCenter: { x: 0, y: 153.5 },
    burstDelay: 0,
  },
  {
    id: 'competitor',
    name: 'Competitor Agent',
    role: 'Track & analyse competitors',
    icon: Swords,
    iconBg: 'bg-[#EEF2FF]',
    iconColor: 'text-[#6366F1]',
    style: {
      left: 'calc(50% + 118px)',
      top: 'calc(50% - 114px)',
      transform: 'translate(0, -50%)',
    },
    fromCenter: { x: -118, y: 114 },
    burstDelay: 60,
  },
  {
    id: 'icp',
    name: 'ICP Agent',
    role: 'Find your best customers',
    icon: Target,
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
    style: {
      left: 'calc(50% + 143.5px + 8px)',
      top: '50%',
      transform: 'translate(0, -50%)',
    },
    fromCenter: { x: -151.5, y: 0 },
    burstDelay: 120,
  },
  {
    id: 'audience',
    name: 'Audience Agent',
    role: 'Where your customers are',
    icon: Globe,
    iconBg: 'bg-[#E0F7FA]',
    iconColor: 'text-[#0D9488]',
    style: {
      left: 'calc(50% + 118px)',
      top: 'calc(50% + 114px)',
      transform: 'translate(0, -50%)',
    },
    fromCenter: { x: -118, y: -114 },
    burstDelay: 180,
  },
  {
    id: 'ads',
    name: 'Ads Agent',
    role: 'Create & run campaigns',
    icon: Megaphone,
    iconBg: 'bg-[#EFF6FF]',
    iconColor: 'text-[#2563EB]',
    style: {
      left: '50%',
      top: 'calc(50% + 143.5px + 10px)',
      transform: 'translate(-50%, 0)',
    },
    fromCenter: { x: 0, y: -153.5 },
    burstDelay: 240,
  },
  {
    id: 'lead',
    name: 'Lead Agent',
    role: 'Find & qualify leads',
    icon: Users,
    iconBg: 'bg-[#E0F2FE]',
    iconColor: 'text-[#0284C7]',
    style: {
      left: 'calc(50% - 118px)',
      top: 'calc(50% + 114px)',
      transform: 'translate(-100%, -50%)',
    },
    fromCenter: { x: 118, y: -114 },
    burstDelay: 300,
  },
  {
    id: 'outreach',
    name: 'Outreach Agent',
    role: 'Email & follow-ups',
    icon: Mail,
    iconBg: 'bg-[#F5EEFD]',
    iconColor: 'text-[#9333EA]',
    style: {
      left: 'calc(50% - 143.5px - 8px)',
      top: '50%',
      transform: 'translate(-100%, -50%)',
    },
    fromCenter: { x: 151.5, y: 0 },
    burstDelay: 360,
  },
  {
    id: 'growth',
    name: 'Growth Agent',
    role: 'Measure & optimize',
    icon: TrendingUp,
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]',
    style: {
      left: 'calc(50% - 118px)',
      top: 'calc(50% - 114px)',
      transform: 'translate(-100%, -50%)',
    },
    fromCenter: { x: 118, y: 114 },
    burstDelay: 420,
  },
];

export const AgentsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when scrolled back above section so it animates again on scroll down
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full flex items-center justify-center overflow-hidden bg-white GlobalPadding">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center justify-between">

          {/* Left Column: Headline & Call to Action */}
          <div className="lg:col-span-5 text-left z-10 max-w-xl mx-auto lg:mx-0">
            {/* Pill Badge */}
            <ScrollReveal variant="fade-up" delay={50} duration={600} distance={20} className="mb-5">
              <div className="toggle">
                AI AGENTS AT WORK
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal variant="fade-up" delay={150} duration={750} distance={26}>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#0F172A] tracking-tight leading-[1.18]">
                A team of specialized <br />
                agents, working for <br />
                you.
              </h2>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal variant="fade-up" delay={250} duration={750} distance={24}>
              <p className="mt-4 text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed">
                Our AI GTM Strategist coordinates a team of expert agents to research, plan, execute and optimize your growth.
              </p>
            </ScrollReveal>

            {/* Explore Button */}
            <ScrollReveal variant="fade-up" delay={350} duration={700} distance={20} className="mt-8">
              <Link
                to="/product"
                className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-neutral-800 text-white text-[14.5px] font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>Meet the agents</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Orbital Hub Ecosystem */}
          <div className="lg:col-span-7 flex items-center justify-center relative w-full select-none">
            {/* Scaled container for responsive sizing without horizontal overflow */}
            <div className="w-full flex items-center justify-center overflow-visible h-[280px] min-[375px]:h-[310px] min-[400px]:h-[340px] min-[460px]:h-[390px] sm:h-[440px] lg:h-[500px]">
              <div className="relative shrink-0 w-[630px] h-[480px] flex items-center justify-center transform origin-center scale-[0.50] min-[375px]:scale-[0.55] min-[400px]:scale-[0.60] min-[460px]:scale-[0.70] sm:scale-[0.80] md:scale-[0.90] lg:scale-100 transition-transform duration-200">

                {/* 287x287 Outer Dotted Circle */}
                <svg
                  className="absolute inset-0 m-auto pointer-events-none z-0 transition-opacity duration-700"
                  style={{ opacity: isVisible ? 1 : 0.2 }}
                  width="287"
                  height="287"
                  viewBox="0 0 287 287"
                  fill="none"
                >
                  <circle
                    cx="143.5"
                    cy="143.5"
                    r="142.5"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Central Core Node with Smooth Pop & Glow */}
                <div
                  className="relative z-10 flex flex-col items-center justify-center text-center select-none cursor-pointer transition-transform duration-500 hover:scale-105"
                  style={{
                    width: '218px',
                    height: '218px',
                    borderRadius: '9999px',
                    backgroundColor: '#020617',
                    border: '4px solid #FFFFFF',
                    padding: '12px',
                    gap: '6px',
                    boxShadow: isVisible
                      ? '0px 4px 24px 0px rgba(37, 99, 235, 0.35), 0px 1px 16px 0px rgba(0, 0, 0, 0.25)'
                      : '0px 1px 16px 0px rgba(0, 0, 0, 0.25)',
                    transform: isVisible ? 'scale(1)' : 'scale(0.85)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 400ms ease, box-shadow 800ms ease',
                  }}
                >
                  <h3 className="text-[22px] font-bold text-white tracking-tight leading-snug">
                    GTM Strategist
                  </h3>
                  <p className="text-[12.5px] text-[#94A3B8] font-normal tracking-wide">
                    Thinks • Analyses • Acts
                  </p>
                </div>

                {/* 8 Specialized Agent Cards (Cascading organic pop from center circle) */}
                {AGENTS.map((agent) => {
                  const IconComponent = agent.icon;

                  return (
                    <div
                      key={agent.id}
                      style={agent.style}
                      className="absolute z-20 select-none pointer-events-none"
                    >
                      <div
                        style={{
                          transform: isVisible
                            ? 'translate3d(0px, 0px, 0px) scale(1)'
                            : `translate3d(${agent.fromCenter.x}px, ${agent.fromCenter.y}px, 0px) scale(0)`,
                          opacity: isVisible ? 1 : 0,
                          transition: `transform 750ms cubic-bezier(0.34, 1.56, 0.64, 1) ${agent.burstDelay}ms, opacity 320ms ease-out ${agent.burstDelay}ms`,
                          transformOrigin: 'center center',
                          willChange: 'transform, opacity',
                        }}
                        className="pointer-events-auto"
                      >
                        <div className="bg-white rounded-[12px] px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.12)] hover:-translate-y-1 border border-neutral-100 whitespace-nowrap transition-all duration-200 cursor-pointer group">
                          {/* Agent Pastel Icon Container */}
                          <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 ${agent.iconBg} ${agent.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                            <IconComponent className="w-4 h-4" />
                          </div>

                          {/* Agent Name & Description */}
                          <div className="flex flex-col text-left">
                            <span className="text-[13px] font-bold text-[#0B0F19] tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                              {agent.name}
                            </span>
                            <span className="text-[11px] text-[#64748B] font-normal leading-tight mt-0.5">
                              {agent.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
