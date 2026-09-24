import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  PieChart,
  Users,
  User,
  Lightbulb,
  Swords,
  TrendingUp,
  Target,
  Globe,
  Briefcase,
  Zap,
  CheckCircle2,
  Sparkles,
  FileText,
  Share2,
  Mail,
  Send,
  Calendar,
  Activity,
  Rocket,
  Filter,
} from 'lucide-react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import CompetitorAgentTable from './CompetitorAgentTable';

interface MetricItem {
  label: string;
  value: number;
  barColor: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

interface AgentData {
  id: string;
  name: string;
  coverageTitle: string;
  description: string;
  link: string;
  metrics: MetricItem[];
}

const AGENTS: AgentData[] = [
  {
    id: 'research',
    name: 'Research Agent',
    coverageTitle: 'Research Coverage',
    description:
      'An AI-powered research agent that analyzes companies, markets, competitors, and customer signals to uncover valuable insights and opportunities.',
    link: '/product',
    metrics: [
      {
        label: 'Companies Analyzed',
        value: 100,
        barColor: 'bg-[#3B82F6]',
        icon: Building2,
        iconBg: 'bg-[#EFF6FF]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Market Mapped',
        value: 78,
        barColor: 'bg-[#8B5CF6]',
        icon: PieChart,
        iconBg: 'bg-[#F5F3FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Competitors Identified',
        value: 62,
        barColor: 'bg-[#06B6D4]',
        icon: Users,
        iconBg: 'bg-[#ECFEFF]',
        iconColor: 'text-[#0891B2]',
      },
      {
        label: 'Customer Segments',
        value: 45,
        barColor: 'bg-[#10B981]',
        icon: User,
        iconBg: 'bg-[#ECFDF5]',
        iconColor: 'text-[#059669]',
      },
      {
        label: 'Growth Opportunities',
        value: 28,
        barColor: 'bg-[#F59E0B]',
        icon: Lightbulb,
        iconBg: 'bg-[#FFFBEB]',
        iconColor: 'text-[#D97706]',
      },
    ],
  },
  {
    id: 'competitor',
    name: 'Competitor Agent',
    coverageTitle: 'Competitor Coverage',
    description:
      'Continuously monitors competitor offerings, messaging shifts, feature releases, and pricing in real time to expose market vulnerabilities you can capture.',
    link: '/product',
    metrics: [
      {
        label: 'Competitors Monitored',
        value: 100,
        barColor: 'bg-[#3B82F6]',
        icon: Swords,
        iconBg: 'bg-[#EFF6FF]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Pricing Shifts Tracked',
        value: 84,
        barColor: 'bg-[#8B5CF6]',
        icon: TrendingUp,
        iconBg: 'bg-[#F5F3FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Feature Gaps Mapped',
        value: 69,
        barColor: 'bg-[#06B6D4]',
        icon: Target,
        iconBg: 'bg-[#ECFEFF]',
        iconColor: 'text-[#0891B2]',
      },
      {
        label: 'SEO & Traffic Monitored',
        value: 52,
        barColor: 'bg-[#10B981]',
        icon: Globe,
        iconBg: 'bg-[#ECFDF5]',
        iconColor: 'text-[#059669]',
      },
      {
        label: 'Strategic Wedges Found',
        value: 35,
        barColor: 'bg-[#F59E0B]',
        icon: Lightbulb,
        iconBg: 'bg-[#FFFBEB]',
        iconColor: 'text-[#D97706]',
      },
    ],
  },
  {
    id: 'icp',
    name: 'ICP Agent',
    coverageTitle: 'Audience Coverage',
    description:
      'Pinpoints your highest-converting buyer personas, segments total addressable market, and builds actionable ICP profiles tailored for revenue impact.',
    link: '/product',
    metrics: [
      {
        label: 'Addressable Market Sized',
        value: 100,
        barColor: 'bg-[#3B82F6]',
        icon: Globe,
        iconBg: 'bg-[#EFF6FF]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Buyer Personas Mapped',
        value: 85,
        barColor: 'bg-[#8B5CF6]',
        icon: Users,
        iconBg: 'bg-[#F5F3FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Decision Makers Scored',
        value: 64,
        barColor: 'bg-[#06B6D4]',
        icon: Briefcase,
        iconBg: 'bg-[#ECFEFF]',
        iconColor: 'text-[#0891B2]',
      },
      {
        label: 'Buying Triggers Detected',
        value: 48,
        barColor: 'bg-[#10B981]',
        icon: Zap,
        iconBg: 'bg-[#ECFDF5]',
        iconColor: 'text-[#059669]',
      },
      {
        label: 'High-Intent Accounts',
        value: 31,
        barColor: 'bg-[#F59E0B]',
        icon: CheckCircle2,
        iconBg: 'bg-[#FFFBEB]',
        iconColor: 'text-[#D97706]',
      },
    ],
  },
  {
    id: 'ads',
    name: 'Ads Agent',
    coverageTitle: 'Campaign Coverage',
    description:
      'Generates high-converting multi-channel ad copy, creatives, and targeted funnels tailored precisely to each buyer persona and their unique pain points.',
    link: '/product',
    metrics: [
      {
        label: 'Ad Creatives Generated',
        value: 100,
        barColor: 'bg-[#3B82F6]',
        icon: Sparkles,
        iconBg: 'bg-[#EFF6FF]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Copy Variations Tested',
        value: 82,
        barColor: 'bg-[#8B5CF6]',
        icon: FileText,
        iconBg: 'bg-[#F5F3FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Channel Targeting Set',
        value: 66,
        barColor: 'bg-[#06B6D4]',
        icon: Share2,
        iconBg: 'bg-[#ECFEFF]',
        iconColor: 'text-[#0891B2]',
      },
      {
        label: 'Conversion Paths Active',
        value: 49,
        barColor: 'bg-[#10B981]',
        icon: TrendingUp,
        iconBg: 'bg-[#ECFDF5]',
        iconColor: 'text-[#059669]',
      },
      {
        label: 'Budget Efficiency Score',
        value: 29,
        barColor: 'bg-[#F59E0B]',
        icon: Lightbulb,
        iconBg: 'bg-[#FFFBEB]',
        iconColor: 'text-[#D97706]',
      },
    ],
  },
  {
    id: 'outreach',
    name: 'Outreach Agent',
    coverageTitle: 'Outreach Coverage',
    description:
      'Automates hyper-personalized multichannel outbound sequences, engages active prospects, and schedules qualified sales discovery calls on autopilot.',
    link: '/product',
    metrics: [
      {
        label: 'Prospects Enriched',
        value: 100,
        barColor: 'bg-[#3B82F6]',
        icon: Mail,
        iconBg: 'bg-[#EFF6FF]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Sequences Automated',
        value: 86,
        barColor: 'bg-[#8B5CF6]',
        icon: Send,
        iconBg: 'bg-[#F5F3FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Deliverability Verified',
        value: 71,
        barColor: 'bg-[#06B6D4]',
        icon: CheckCircle2,
        iconBg: 'bg-[#ECFEFF]',
        iconColor: 'text-[#0891B2]',
      },
      {
        label: 'Response Rate Boost',
        value: 53,
        barColor: 'bg-[#10B981]',
        icon: TrendingUp,
        iconBg: 'bg-[#ECFDF5]',
        iconColor: 'text-[#059669]',
      },
      {
        label: 'Meetings Booked',
        value: 30,
        barColor: 'bg-[#F59E0B]',
        icon: Calendar,
        iconBg: 'bg-[#FFFBEB]',
        iconColor: 'text-[#D97706]',
      },
    ],
  },
  {
    id: 'growth',
    name: 'Growth Agent',
    coverageTitle: 'Growth Coverage',
    description:
      'Analyzes conversion funnels, monitors pipeline health, and recommends high-leverage growth experiments to maximize customer lifetime value and ROI.',
    link: '/product',
    metrics: [
      {
        label: 'Funnel Drops Analyzed',
        value: 100,
        barColor: 'bg-[#3B82F6]',
        icon: Activity,
        iconBg: 'bg-[#EFF6FF]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Pipeline Velocity Tracked',
        value: 80,
        barColor: 'bg-[#8B5CF6]',
        icon: Rocket,
        iconBg: 'bg-[#F5F3FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Attribution Modeled',
        value: 63,
        barColor: 'bg-[#06B6D4]',
        icon: Filter,
        iconBg: 'bg-[#ECFEFF]',
        iconColor: 'text-[#0891B2]',
      },
      {
        label: 'Retention Triggers Set',
        value: 44,
        barColor: 'bg-[#10B981]',
        icon: Target,
        iconBg: 'bg-[#ECFDF5]',
        iconColor: 'text-[#059669]',
      },
      {
        label: 'Revenue Experiments Run',
        value: 27,
        barColor: 'bg-[#F59E0B]',
        icon: Lightbulb,
        iconBg: 'bg-[#FFFBEB]',
        iconColor: 'text-[#D97706]',
      },
    ],
  },
];

export const AgentsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation only when section reaches the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel smoothly every 4.2 seconds only when section is in view
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AGENTS.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [isVisible, isPaused]);

  // Trigger fluid progress bar animation whenever index changes or section becomes visible
  useEffect(() => {
    if (!isVisible) {
      setAnimateProgress(false);
      return;
    }

    setAnimateProgress(false);
    const animTimer = setTimeout(() => {
      setAnimateProgress(true);
    }, 60);

    return () => clearTimeout(animTimer);
  }, [currentIndex, isVisible]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + AGENTS.length) % AGENTS.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % AGENTS.length);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Helper to compute card transform, scale, opacity, and positioning
  const getCardStyle = (index: number) => {
    const total = AGENTS.length;
    let diff = (index - currentIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    if (diff === 0) {
      return {
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto' as const,
        cursor: 'default',
      };
    } else if (diff === -1) {
      return {
        transform: 'translate3d(-62%, 0, 0) scale(0.9)',
        opacity: 0.45,
        zIndex: 10,
        pointerEvents: 'auto' as const,
        cursor: 'pointer',
      };
    } else if (diff === 1) {
      return {
        transform: 'translate3d(62%, 0, 0) scale(0.9)',
        opacity: 0.45,
        zIndex: 10,
        pointerEvents: 'auto' as const,
        cursor: 'pointer',
      };
    } else {
      return {
        transform: `translate3d(${diff > 0 ? 120 : -120}%, 0, 0) scale(0.78)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full py-16 sm:py-24 bg-white overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal variant="fade-up" duration={700} distance={24}>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
              A team of specialized <br className="hidden sm:inline" />
              agents, working for you
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={120} duration={700} distance={20}>
            <p className="mt-3.5 sm:mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Our AI GTM Strategist coordinates a team of expert agents to research, plan, execute and optimize your growth.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mt-12 sm:mt-16 w-full flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Stage (889px x 446px exact Figma spec) */}
          <div className="relative w-full max-w-[889px] mx-auto min-h-[500px] sm:min-h-[460px] md:h-[446px] flex items-center justify-center">
            {AGENTS.map((agent, index) => {
              const isCenter = index === currentIndex;
              const cardStyle = getCardStyle(index);

              return (
                <div
                  key={agent.id}
                  style={cardStyle}
                  onClick={() => {
                    if (!isCenter) setCurrentIndex(index);
                  }}
                  className="absolute inset-x-0 mx-auto w-full max-w-[94%] sm:max-w-[780px] md:max-w-[840px] lg:w-[889px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                >
                  {/* Card Container: 889x446, Radius: 40px, Background: #FCFCFC, Border: 1px #F0F0F0, Drop shadow: 0 1px 150px rgba(70,70,70,0.25) */}
                  <div
                    className="w-full md:h-[446px] bg-[#FCFCFC] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border border-[#F0F0F0] p-6 sm:p-8 lg:p-10 transition-shadow duration-300 flex flex-col justify-center"
                    style={{
                      boxShadow: '0px 1px 150px 0px rgba(70, 70, 70, 0.25)',
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch h-full">
                      
                      {/* Left Column: Competitor Agent Table OR Metric Progress Bars */}
                      <div className="md:col-span-7 flex flex-col justify-center h-full overflow-hidden">
                        {agent.id === 'competitor' ? (
                          <div className="w-full h-full max-h-[365px] flex items-center justify-center">
                            <CompetitorAgentTable />
                          </div>
                        ) : (
                          <>
                            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0F172A] tracking-tight mb-5 sm:mb-6">
                              {agent.coverageTitle}
                            </h3>

                            <div className="space-y-4 sm:space-y-4.5">
                              {agent.metrics.map((metric, mIdx) => {
                                const IconComponent = metric.icon;
                                return (
                                  <div key={mIdx} className="flex items-center gap-3 sm:gap-3.5">
                                    {/* Icon Badge */}
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${metric.iconBg} ${metric.iconColor}`}
                                    >
                                      <IconComponent className="w-4 h-4" />
                                    </div>

                                    {/* Label */}
                                    <span className="text-[13px] sm:text-[14px] font-medium text-[#1E293B] shrink-0 w-[130px] sm:w-[155px] truncate">
                                      {metric.label}
                                    </span>

                                    {/* Percentage Value */}
                                    <span className="text-[12.5px] sm:text-[13px] font-medium text-[#64748B] shrink-0 w-8 sm:w-10 text-right tabular-nums">
                                      {metric.value}%
                                    </span>

                                    {/* Chunky Progress Bar Track */}
                                    <div className="flex-1 h-3.5 sm:h-4 bg-[#F1F5F9] rounded-md sm:rounded-[7px] overflow-hidden min-w-[70px] sm:min-w-[120px]">
                                      <div
                                        className={`h-full rounded-md sm:rounded-[7px] transition-all duration-1000 ease-out ${metric.barColor}`}
                                        style={{
                                          width: isCenter && animateProgress ? `${metric.value}%` : isCenter ? '0%' : `${metric.value}%`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Right Column: Inner Framed Box: Border 1px #F0F0F0 */}
                      <div className="md:col-span-5 flex flex-col">
                        <div className="border border-[#F0F0F0] rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between h-full bg-[#FCFCFC]">
                          <div>
                            <h4 className="text-[19px] sm:text-[21px] font-bold text-[#0F172A] tracking-tight">
                              {agent.name}
                            </h4>
                            <p className="mt-4 text-[#64748B] text-[13px] sm:text-[14px] leading-relaxed">
                              {agent.description}
                            </p>
                          </div>

                          <div className="mt-6 sm:mt-8">
                            <Link
                              to={agent.link}
                              className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#475569] hover:text-blue-600 transition-colors group/link"
                            >
                              <span>Learn more</span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-0.5 transition-all" />
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

            {/* Left Chevron Button: positioned in the left peek area */}
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous agent"
              className="absolute left-1 sm:left-4 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E2E8F0]/90 hover:bg-[#CBD5E1] active:scale-95 text-slate-700 flex items-center justify-center shadow-md transition-all z-30 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Right Chevron Button: positioned in the right peek area */}
            <button
              onClick={handleNext}
              type="button"
              aria-label="Next agent"
              className="absolute right-1 sm:right-4 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E2E8F0]/90 hover:bg-[#CBD5E1] active:scale-95 text-slate-700 flex items-center justify-center shadow-md transition-all z-30 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Pagination Indicators (pill & dots) */}
          <div className="flex items-center justify-center gap-2 mt-7 sm:mt-9">
            {AGENTS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 sm:w-7 bg-slate-400'
                    : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
