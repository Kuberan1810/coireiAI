import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Swords,
  Target,
  Globe,
  Megaphone,
  Users,
  Mail,
  TrendingUp,
} from 'lucide-react';

interface AgentCard {
  id: string;
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  style: React.CSSProperties;
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
    // Centered horizontally above the 287px dotted circle
    style: {
      left: '50%',
      top: 'calc(50% - 143.5px - 10px)',
      transform: 'translate(-50%, -100%)',
    },
  },
  {
    id: 'ads',
    name: 'Ads Agent',
    role: 'Create & run campaigns',
    icon: Megaphone,
    iconBg: 'bg-[#EFF6FF]',
    iconColor: 'text-[#2563EB]',
    // Centered horizontally below the 287px dotted circle
    style: {
      left: '50%',
      top: 'calc(50% + 143.5px + 10px)',
      transform: 'translate(-50%, 0)',
    },
  },
  {
    id: 'outreach',
    name: 'Outreach Agent',
    role: 'Email & follow-ups',
    icon: Mail,
    iconBg: 'bg-[#F5EEFD]',
    iconColor: 'text-[#9333EA]',
    // Positioned to the left outside the 287px dotted circle
    style: {
      left: 'calc(50% - 143.5px - 8px)',
      top: '50%',
      transform: 'translate(-100%, -50%)',
    },
  },
  {
    id: 'icp',
    name: 'ICP Agent',
    role: 'Find your best customers',
    icon: Target,
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
    // Positioned to the right outside the 287px dotted circle
    style: {
      left: 'calc(50% + 143.5px + 8px)',
      top: '50%',
      transform: 'translate(0, -50%)',
    },
  },
  {
    id: 'growth',
    name: 'Growth Agent',
    role: 'Measure & optimize',
    icon: TrendingUp,
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]',
    // Top-Left diagonal outside the 287px dotted circle
    style: {
      left: 'calc(50% - 118px)',
      top: 'calc(50% - 114px)',
      transform: 'translate(-100%, -50%)',
    },
  },
  {
    id: 'competitor',
    name: 'Competitor Agent',
    role: 'Track & analyse competitors',
    icon: Swords,
    iconBg: 'bg-[#EEF2FF]',
    iconColor: 'text-[#6366F1]',
    // Top-Right diagonal outside the 287px dotted circle
    style: {
      left: 'calc(50% + 118px)',
      top: 'calc(50% - 114px)',
      transform: 'translate(0, -50%)',
    },
  },
  {
    id: 'lead',
    name: 'Lead Agent',
    role: 'Find & qualify leads',
    icon: Users,
    iconBg: 'bg-[#E0F2FE]',
    iconColor: 'text-[#0284C7]',
    // Bottom-Left diagonal outside the 287px dotted circle
    style: {
      left: 'calc(50% - 118px)',
      top: 'calc(50% + 114px)',
      transform: 'translate(-100%, -50%)',
    },
  },
  {
    id: 'audience',
    name: 'Audience Agent',
    role: 'Where your customers are',
    icon: Globe,
    iconBg: 'bg-[#E0F7FA]',
    iconColor: 'text-[#0D9488]',
    // Bottom-Right diagonal outside the 287px dotted circle
    style: {
      left: 'calc(50% + 118px)',
      top: 'calc(50% + 114px)',
      transform: 'translate(0, -50%)',
    },
  },
];

export const AgentsSection: React.FC = () => {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white GlobalPadding">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center justify-between">
          
          {/* Left Column: Headline & Call to Action */}
          <div className="lg:col-span-5 text-left z-10 max-w-xl mx-auto lg:mx-0">
            {/* Pill Tag */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-100/70 mb-6 shadow-[0_1px_2px_rgba(37,99,235,0.06)]">
              <span className="text-[11px] sm:text-xs font-semibold text-[#2563EB] tracking-wider uppercase">
                AI AGENTS AT WORK
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-[1.12]">
              A team of specialized <br />
              agents, working for <br />
              you.
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed font-normal max-w-md">
              Our AI GTM Strategist coordinates a team of expert agents to research, plan, execute and optimize your growth.
            </p>

            {/* Dark Pill CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0B0F19] hover:bg-neutral-800 text-white font-medium text-[15px] px-7 py-3.5 rounded-full shadow-[0_4px_14px_rgba(11,15,25,0.15)] hover:shadow-[0_6px_20px_rgba(11,15,25,0.25)] transition-all duration-200 group cursor-pointer"
              >
                <span>Meet the agents</span>
                <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Orbital Hub Ecosystem */}
          <div className="lg:col-span-7 flex items-center justify-center relative w-full select-none py-4 sm:py-8 lg:py-10">
            {/* Scaled container for responsive sizing without horizontal overflow */}
            <div className="w-full flex items-center justify-center overflow-visible h-[280px] min-[375px]:h-[310px] min-[400px]:h-[340px] min-[460px]:h-[390px] sm:h-[440px] lg:h-[500px]">
              <div className="relative shrink-0 w-[630px] h-[480px] flex items-center justify-center transform origin-center scale-[0.50] min-[375px]:scale-[0.55] min-[400px]:scale-[0.60] min-[460px]:scale-[0.70] sm:scale-[0.80] md:scale-[0.90] lg:scale-100 transition-transform duration-200">
                
                {/* 287x287 Outer Dotted Circle (exactly 34.5px gap from the 218px inner circle on all sides) */}
                <svg
                  className="absolute inset-0 m-auto pointer-events-none z-0"
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

                {/* Central Core Node (Exact Figma Specs: 218x218, #020617, 4px solid #FFFFFF, shadow 0 1px 16px rgba(0,0,0,0.25), gap 6px, padding 12px) */}
                <div
                  className="relative z-10 flex flex-col items-center justify-center text-center select-none"
                  style={{
                    width: '218px',
                    height: '218px',
                    borderRadius: '9999px',
                    backgroundColor: '#020617',
                    border: '4px solid #FFFFFF',
                    padding: '12px',
                    gap: '6px',
                    boxShadow: '0px 1px 16px 0px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <h3 className="text-[22px] font-bold text-white tracking-tight leading-snug">
                    GTM Strategist
                  </h3>
                  <p className="text-[12.5px] text-[#94A3B8] font-normal tracking-wide">
                    Thinks • Analyses • Acts
                  </p>
                </div>

                {/* 8 Specialized Agent Cards (All placed outside the 287px dotted circle) */}
                {AGENTS.map((agent) => {
                  const IconComponent = agent.icon;
                  const isHovered = activeAgent === agent.id;

                  return (
                    <div
                      key={agent.id}
                      onMouseEnter={() => setActiveAgent(agent.id)}
                      onMouseLeave={() => setActiveAgent(null)}
                      style={agent.style}
                      className={`absolute z-20 transition-all duration-200 cursor-pointer ${
                        isHovered ? 'scale-105 z-30' : 'scale-100'
                      }`}
                    >
                      <div className="bg-white rounded-[12px] px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-neutral-100/90 hover:border-neutral-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] whitespace-nowrap transition-all duration-200">
                        {/* Agent Pastel Icon Container */}
                        <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 ${agent.iconBg} ${agent.iconColor}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>

                        {/* Agent Name & Description */}
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-bold text-[#0B0F19] tracking-tight leading-tight">
                            {agent.name}
                          </span>
                          <span className="text-[11px] text-[#64748B] font-normal leading-tight mt-0.5">
                            {agent.role}
                          </span>
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
