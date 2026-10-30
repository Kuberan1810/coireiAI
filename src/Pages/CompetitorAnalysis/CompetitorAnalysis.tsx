import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Users,
  MapPin,
  Globe,
  Calendar,
  Radio,
  Tag,
  TrendingUp,
  Target,
  Cpu,
  CreditCard,
  MoreHorizontal,
  ShieldCheck,
  Lock,
  BarChart2,
  Zap,
  Clock,
  Box,
} from 'lucide-react';
import { DeepResearchSection } from './components/DeepResearchSection';

import marketPositionSvg from '../../assets/competitor/marketposition.svg';
import compAnalysisSvg from '../../assets/competitor/companalysis.svg';
import trendAnalysisSvg from '../../assets/competitor/trendanalysis.svg';
import actionableInsightsSvg from '../../assets/competitor/actionableinsights.svg';

// ExportSquare Icon matching CoireiGTM CompanyDetails
const ExportSquareIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 12,
  className = 'text-[#64748B]',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      d="M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
    />
  </svg>
);

const DEEP_RESEARCH_CARDS = [
  {
    title: 'Market Positioning',
    description: 'Compare your brand against competitors and uncover market gaps and opportunities.',
    svg: marketPositionSvg,
    svgClass: 'w-[104px] h-[98px] right-0 bottom-0',
  },
  {
    title: 'Competitor Intelligence',
    description: 'Strengths, weaknesses, pricing and positioning.',
    svg: compAnalysisSvg,
    svgClass: 'w-[97px] h-[103px] right-0 bottom-0',
  },
  {
    title: 'Trend Analysis',
    description: 'Emerging trends, customer behaviour and industry shifts.',
    svg: trendAnalysisSvg,
    svgClass: 'w-[102px] h-[104px] right-0 bottom-0',
  },
  {
    title: 'Actionable Insights',
    description: 'Clear recommendations to stay ahead.',
    svg: actionableInsightsSvg,
    svgClass: 'w-[107px] h-[110px] right-0 bottom-0',
  },
];

const activeCluster = {
  id: 'workspace',
  name: 'Modern B2B Workspace Tools',
  urlPill: 'coirei.ai/live/market-intel-saas',
  activeCount: 14,
  stats: {
    positioningUpdates: 48,
    pricingOverhauls: 12,
    changelogs: 85,
    saturation: 'Moderate (64%)',
  },
  gap: {
    badge: 'PRIMARY MARKET GAP DETECTED',
    confidence: '94.2%',
    headline: 'Untapped segment: Growing SaaS companies seeking faster GTM execution',
    description:
      'Competitor analysis reveals gaps in integrated market intelligence and GTM planning. Growing SaaS companies may benefit from a unified approach to market research, lead discovery, and marketing strategy.',
    tags: [
      'Differentiation: Self-serve setup',
      'Speed to value under 10m',
      'Transparent flat tier',
    ],
  },
};

const MARKET_DELTA_EVENTS = [
  {
    category: 'PRICING',
    categoryColor: 'bg-[#EEF2FF] text-[#4F46E5]',
    time: 'Yesterday, 14:20',
    title: 'Pricing changed',
    description:
      'Competitor A updated its pricing structure, adding an annual minimum on enterprise tiers.',
  },
  {
    category: 'PRODUCT',
    categoryColor: 'bg-[#ECFDF5] text-[#059669]',
    time: '3 days ago',
    title: 'New feature launched',
    description:
      'Competitor B introduced AI-powered workflows and automated roadmap triage.',
  },
  {
    category: 'POSITIONING',
    categoryColor: 'bg-[#FAF5FF] text-[#9333EA]',
    time: 'May 12',
    title: 'Messaging updated',
    description:
      'Competitor C shifted its homepage positioning from "Agile tracker" to "Autonomous software studio."',
  },
  {
    category: 'CAMPAIGN',
    categoryColor: 'bg-[#FFFBEB] text-[#D97706]',
    time: 'May 09',
    title: 'New campaign detected',
    description:
      'Competitor A launched a new acquisition campaign targeting unhappy Jira Cloud customers.',
  },
];

export const CompetitorAnalysis: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Competitor Profile State (Exact from CoireiGTM CompanyDetails)
  const [activeTab, setActiveTab] = useState<
    'overview' | 'products-pricing' | 'team' | 'jobs' | 'news'
  >('products-pricing');
  const [isTracked, setIsTracked] = useState(false);

  const companyName = 'clay';
  const companyWebsite = 'http://clay.run/';
  const companyIndustry = 'MarTech / Sales Intelligence';
  const companySize = '51-200 employees (estimated)';
  const companyHq = 'New York, NY, United States';
  const companyFunding = '$240M Series C (Valued at $1.3B)';
  const companyFounded = '2017 (estimated)';

  const productType = 'GTM Intelligence / AI Outreach';
  const productCategory = 'MarTech / Sales Intelligence';
  const productRevenue = '$35M ARR (estimated)';
  const productPricingModel = 'Credit-based / Freemium';
  const targetMarket =
    'B2B SaaS GTM teams, Outbound SDRs, Growth Marketing Agencies & Enterprise RevOps.';

  const coreProductFeatures = [
    'Automated prospecting & enrichment',
    'AI email personalization & outreach',
    'Waterfall data provider orchestration',
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      desc: 'Pilot deployments, up to 5 units, standard analytics dashboard & email support.',
      price: '$149/mo',
    },
    {
      name: 'Growth / Pro',
      desc: 'High-throughput facilities, up to 25 units, real-time telemetry API & priority SLA.',
      price: '$399/mo',
    },
  ];

  const companyDescription =
    'Clay is a GTM and sales intelligence platform that helps businesses discover prospects, enrich company and contact data, identify buying signals, and automate personalized outreach.';

  const buttonStyle: React.CSSProperties = {
    height: '32px',
    backgroundColor: '#FFFFFF',
    border: '0.8px solid #EAE6DF',
    boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.03), inset -4px -4px 4px rgba(0, 0, 0, 0.03)',
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION (Matching User Figma Screenshot Exactly) */}
      <section className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] font-medium tracking-tight leading-[1.08] text-[#0B0F19]">
            <span>Know your competitors</span>
            <br />
            <span className="text-[#94A3B8]">before they move.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[15.5px] sm:text-[17px] text-[#64748B] max-w-2xl mx-auto leading-relaxed font-normal">
            AI-powered competitor research that reveals positioning, messaging, pricing, audience,
            and market gaps — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-sm cursor-pointer active:scale-[0.99] w-full sm:w-auto"
            >
              <span>Analyze Competitors</span>
             
            </Link>

            <a
              href="#sample-report"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0B0F19] text-[13.5px] font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.99] w-full sm:w-auto"
            >
              Explore a Sample Report
            </a>
          </div>
        </div>

        {/* 2. BROWSER WINDOW MOCKUP CARD (Exact Figma: Fixed 300px Cards, 340x30 URL bar) */}
        <div className="mt-14 sm:mt-16 max-w-[1140px] mx-auto">
          <div
            id="sample-report"
            className="w-full bg-white rounded-[16px] border border-[#E2E8F0] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            {/* Browser Top Navigation Bar (Figma: URL 340x30, radius 13px, pad 16px, gap 8px, #F6F7F9) */}
            <div className="w-full h-[52px] px-5 sm:px-6 bg-white border-b border-[#F1F5F9] flex items-center justify-between">
              {/* Left: Window Dots & URL Bar */}
              <div className="flex items-center gap-4 sm:gap-5">
                {/* 3 Mac Traffic Light Dots */}
                <div className="flex items-center gap-[7px] shrink-0">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]" />
                </div>

                {/* URL Pill Bar (Figma: 340px x 30px, radius 13px, #F6F7F9, px 16px, gap 8px) */}
                <div className="w-[260px] sm:w-[340px] h-[30px] rounded-[13px] bg-[#F6F7F9] px-4 flex items-center gap-2 text-[12px] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif]">
                  <Lock className="w-3 h-3 text-[#64748B] stroke-[2.2] shrink-0" />
                  <span className="truncate">{activeCluster.urlPill}</span>
                </div>
              </div>     
            </div>

            {/* Inner Dashboard Content */}
            <div className="p-5 sm:p-6 lg:p-7 bg-[#FFFFFF]">
              <div className="flex flex-col lg:flex-row gap-5 items-stretch">
                {/* Left Card: Target Cluster (Figma: 356px x 300px, radius 14px, border 1px #E9EDF4, pad 24px, gap 11px, linear gradient #FAFAFC to #FCFCFD) */}
                <div className="w-full lg:w-[356px] min-h-[300px] rounded-[14px] border border-[#E9EDF4] bg-gradient-to-b from-[#FAFAFC] to-[#FCFCFD] p-6 flex flex-col justify-between text-left shrink-0">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8C9BAE] mb-2">
                      TARGET CLUSTER
                    </p>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] sm:text-[20px] font-bold text-[#0D0D0D] tracking-tight leading-snug mb-2">
                      {activeCluster.name}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] leading-[18.5px] text-[#64748B] font-normal">
                      Analyzed {activeCluster.stats.positioningUpdates} positioning updates,{' '}
                      {activeCluster.stats.pricingOverhauls} pricing overhauls, and{' '}
                      {activeCluster.stats.changelogs} product changelogs over the past 30 days.
                    </p>
                  </div>

                  {/* Bottom Metrics Rows */}
                  <div className="pt-3 border-t border-[#EEF2F6] flex flex-col gap-2.5">
                    {/* Row 1: Market Saturation */}
                    <div className="flex items-center justify-between text-[12.5px]">
                      <div className="flex items-center gap-2 text-[#475569]">
                        <BarChart2 className="w-3.5 h-3.5 text-[#64748B] stroke-[2]" />
                        <span className="font-normal">Market Saturation</span>
                      </div>
                      <span className="font-medium text-[#0D0D0D]">{activeCluster.stats.saturation}</span>
                    </div>

                    {/* Row 2: Key Competitors */}
                    <div className="flex items-center justify-between text-[12.5px]">
                      <div className="flex items-center gap-2 text-[#475569]">
                        <Users className="w-3.5 h-3.5 text-[#64748B] stroke-[2]" />
                        <span className="font-normal">Key Competitors</span>
                      </div>
                      <span className="font-medium text-[#0D0D0D]">12</span>
                    </div>
                  </div>
                </div>

                {/* Right Card: Primary Market Gap Detected (Figma: 740px x 300px, radius 14px, border 1px linear gradient #D8F1EB to #E1E5FF, bg linear gradient #FAFDFC to #F8FAFF) */}
                <div className="w-full lg:flex-1 min-h-[300px] rounded-[14px] p-[1px] bg-gradient-to-r from-[#D8F1EB] to-[#E1E5FF] shadow-xs">
                  <div className="w-full h-full rounded-[13px] bg-gradient-to-b from-[#FAFDFC] to-[#F8FAFF] p-6 flex flex-col justify-between text-left">
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white border border-[#E2E8F0] shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span className="text-[10px] font-bold tracking-[0.06em] text-[#0D0D0D] uppercase">
                            {activeCluster.gap.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[12px] font-normal text-[#64748B]">
                          <BarChart2 className="w-3.5 h-3.5 text-[#64748B] stroke-[2]" />
                          <span>Confidence: {activeCluster.gap.confidence}</span>
                        </div>
                      </div>

                      {/* Headline */}
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[20px] font-bold text-[#0D0D0D] tracking-tight leading-snug mb-2">
                        {activeCluster.gap.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-[12.5px] sm:text-[13px] leading-[19px] text-[#64748B] font-normal max-w-2xl">
                        {activeCluster.gap.description}
                      </p>
                    </div>

                    {/* Bottom 3 Feature Pills */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4">
                      {/* Pill 1: Differentiation */}
                      <div className="bg-white rounded-[12px] border border-[#F1F5F9] shadow-[0_1px_3px_rgba(0,0,0,0.03)] px-3.5 py-2 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#D1FAE5]/60 flex items-center justify-center shrink-0">
                          <Zap className="w-3.5 h-3.5 text-[#059669] fill-[#059669]" />
                        </div>
                        <div className="text-left">
                          <span className="block text-[10px] text-[#64748B] leading-none mb-0.5">
                            Differentiation:
                          </span>
                          <span className="block text-[12px] font-medium text-[#0D0D0D] leading-none">
                            Unified GTM intelligence
                          </span>
                        </div>
                      </div>

                      {/* Pill 2: Speed to value */}
                      <div className="bg-white rounded-[12px] border border-[#F1F5F9] shadow-[0_1px_3px_rgba(0,0,0,0.03)] px-3.5 py-2 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#E0F2FE]/70 flex items-center justify-center shrink-0">
                          <Clock className="w-3.5 h-3.5 text-[#0284C7] stroke-[2.2]" />
                        </div>
                        <div className="text-left">
                          <span className="block text-[10px] text-[#64748B] leading-none mb-0.5">
                            Speed to Insight
                          </span>
                          <span className="block text-[12px] font-medium text-[#0D0D0D] leading-none">
                            Real-time market signals
                          </span>
                        </div>
                      </div>

                      {/* Pill 3: Transparent flat tier */}
                      <div className="bg-white rounded-[12px] border border-[#F1F5F9] shadow-[0_1px_3px_rgba(0,0,0,0.03)] px-3.5 py-2 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#CCFBF1]/70 flex items-center justify-center shrink-0">
                          <Box className="w-3.5 h-3.5 text-[#0D9488] stroke-[2.2]" />
                        </div>
                        <div className="text-left">
                          <span className="block text-[10px] text-[#64748B] leading-none mb-0.5">
                            Growth Focus
                          </span>
                          <span className="block text-[12px] font-medium text-[#0D0D0D] leading-none">
                            Data-driven targeting
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP RESEARCH SECTION */}
      <DeepResearchSection />

      {/* 3. DEEP PROFILE EXTRACTION */}
      <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Eyebrow & Title Header */}
          <div className="mb-8">
            <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
              Deep Profile Extraction
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18]">
              Understand how competitors position themselves.
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748B] max-w-2xl font-normal leading-relaxed">
              Coirei GTM analyze competitor websites, messaging, products, pricing, and positioning to
              reveal how each brand approaches the market.
            </p>
          </div>

          {/* Competitor Profile Details (Exact from CoireiGTM CompanyDetails) */}
          <div className="w-full bg-white rounded-[16px] border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 sm:p-8 flex flex-col gap-6">
            {/* Top Company Title Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Logo Box */}
                <div className="w-12 h-12 rounded-[14px] bg-[#EBF2F7] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0F172A]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-[#111827] tracking-tight">
                      {companyName}
                    </h3>
                    <a
                      href={companyWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="size-5 rounded-[6px] border border-black/10 bg-white flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors shrink-0"
                      title="Visit website"
                    >
                      <ExportSquareIcon size={12} className="text-[#64748B] hover:text-[#0F172A]" />
                    </a>
                  </div>
                  <span className="text-[13px] text-gray-400 font-normal">
                    {companyWebsite}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                
                <button
                  type="button"
                  style={{ ...buttonStyle, width: '32px' }}
                  className="flex items-center justify-center rounded-lg text-gray-500 hover:text-black transition-colors cursor-pointer"
                  title="More options"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-[#E5E7EB] flex items-center gap-7 text-[13.5px]">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'products-pricing', label: 'Products & Pricing' },
                { id: 'team', label: 'Team' },
                { id: 'jobs', label: 'Jobs' },
                { id: 'news', label: 'News' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 font-medium transition-all cursor-pointer relative ${activeTab === tab.id
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0D9488] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="flex flex-col gap-8 pt-1">
                {/* Business overview */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] font-semibold text-[#111827]">Business overview</h4>
                  <p className="text-[14px] text-[#4B5563] leading-[1.65] max-w-4xl font-normal">
                    {companyDescription}
                  </p>
                </div>

                {/* 2-Column Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3.5 max-w-4xl">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <Building2 className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Industry</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companyIndustry}</span>
                    </div>

                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <Users className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Company size</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companySize}</span>
                    </div>

                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <MapPin className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Headquarters</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companyHq}</span>
                    </div>

                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <Globe className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Funding</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companyFunding}</span>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <Building2 className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Industry</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companyIndustry}</span>
                    </div>

                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <Users className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Company size</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companySize}</span>
                    </div>

                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <MapPin className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Location</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companyHq}</span>
                    </div>

                    <div className="flex items-center text-[13.5px]">
                      <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                        <Calendar className="w-4 h-4 stroke-[1.8]" />
                        <span className="text-gray-500 font-normal">Founded</span>
                      </div>
                      <span className="text-gray-900 font-medium">{companyFounded}</span>
                    </div>
                  </div>
                </div>

                {/* Product & Features */}
                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="text-[16px] font-semibold text-[#111827]">Product & Features</h4>
                  <p className="text-[13px] text-gray-400 mb-1 font-normal">
                    Key products and services extracted from their website.
                  </p>
                  <div className="flex flex-col gap-2.5 text-[13.5px] text-[#374151]">
                    {coreProductFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111827] shrink-0" />
                        <span className="font-normal text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PRODUCTS & PRICING (Exact from user screenshot) */}
            {activeTab === 'products-pricing' && (
              <div className="flex flex-col gap-8 pt-1">
                {/* Product Details & Economics */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[16px] font-semibold text-[#111827]">
                    Product Details & Economics
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3.5 max-w-4xl pt-1">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-start text-[13.5px]">
                        <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                          <Cpu className="w-4 h-4 stroke-[1.8]" />
                          <span className="text-gray-500 font-normal">Product type</span>
                        </div>
                        <span className="text-gray-900 font-medium">{productType}</span>
                      </div>

                      <div className="flex items-start text-[13.5px]">
                        <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                          <Tag className="w-4 h-4 stroke-[1.8]" />
                          <span className="text-gray-500 font-normal">Product category</span>
                        </div>
                        <span className="text-gray-900 font-medium">{productCategory}</span>
                      </div>

                      <div className="flex items-start text-[13.5px]">
                        <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                          <TrendingUp className="w-4 h-4 stroke-[1.8]" />
                          <span className="text-gray-500 font-normal">Product revenue</span>
                        </div>
                        <span className="text-gray-900 font-medium">{productRevenue}</span>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-start text-[13.5px]">
                        <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                          <CreditCard className="w-4 h-4 stroke-[1.8]" />
                          <span className="text-gray-500 font-normal">Pricing model</span>
                        </div>
                        <span className="text-gray-900 font-medium">{productPricingModel}</span>
                      </div>

                      <div className="flex items-start text-[13.5px]">
                        <div className="w-40 flex items-center gap-2.5 text-gray-400 shrink-0">
                          <Target className="w-4 h-4 stroke-[1.8]" />
                          <span className="text-gray-500 font-normal">Target market</span>
                        </div>
                        <span className="text-gray-900 font-medium leading-relaxed">
                          {targetMarket}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Features of the Product */}
                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="text-[16px] font-semibold text-[#111827]">
                    Core Features of the Product
                  </h4>
                  <p className="text-[13px] text-gray-400 mb-1 font-normal">
                    Key capabilities and primary system components extracted from website.
                  </p>
                  <div className="flex flex-col gap-2.5 text-[13.5px] text-[#374151] max-w-4xl">
                    {coreProductFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111827] shrink-0 mt-2" />
                        <span className="font-normal text-gray-800 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Pricing Plans */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <h4 className="text-[16px] font-semibold text-[#111827]">
                    Commercial Pricing Plans
                  </h4>
                  <p className="text-[13px] text-gray-400 mb-1 font-normal">
                    Published subscription tiers and commercial licensing models.
                  </p>

                  <div className="divide-y divide-[#F0ECE6] border-y border-[#F0ECE6] max-w-4xl text-[13.5px]">
                    {pricingTiers.map((tier, idx) => (
                      <div
                        key={idx}
                        className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900 w-32 shrink-0">
                            {tier.name}
                          </span>
                          <span className="text-gray-600 font-normal">{tier.desc}</span>
                        </div>
                        <span className="font-semibold text-gray-900 shrink-0 self-start sm:self-auto">
                          {tier.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TEAM */}
            {activeTab === 'team' && (
              <div className="flex flex-col gap-6 pt-1">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Key Leadership & Team</h4>
                  <p className="text-[13px] text-gray-400 mt-1">Identified executives and key department leaders.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Kareem Amin', role: 'Chief Executive Officer', initials: 'KA', prev: 'Co-founder & CEO' },
                    { name: 'Varun Anand', role: 'Head of Operations', initials: 'VA', prev: 'Co-founder' },
                    { name: 'Michael Rader', role: 'Head of Engineering', initials: 'MR', prev: 'Core Infra Lead' },
                  ].map((leader, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-[#E5E7EB] bg-white flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#F3F4F6] text-[#1F2937] font-semibold text-xs flex items-center justify-center shrink-0">
                        {leader.initials}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13.5px] font-semibold text-gray-900 truncate">{leader.name}</span>
                        <span className="text-[12px] text-gray-600 truncate">{leader.role}</span>
                        <span className="text-[11px] text-gray-400 truncate mt-0.5">{leader.prev}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: JOBS */}
            {activeTab === 'jobs' && (
              <div className="flex flex-col gap-4 pt-1">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Active Open Roles</h4>
                  <p className="text-[13px] text-gray-400 mt-0.5">Live hiring signals detected for clay.</p>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-[#E2E8F0] bg-[#FAFBFD] flex items-center justify-between text-[13.5px]">
                    <div>
                      <div className="font-semibold text-[#0B0F19]">Senior Full-stack Engineer</div>
                      <div className="text-[11.5px] text-[#8592A6]">New York, NY • Full-time</div>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#E2E8F0] bg-[#FAFBFD] flex items-center justify-between text-[13.5px]">
                    <div>
                      <div className="font-semibold text-[#0B0F19]">Enterprise Account Executive</div>
                      <div className="text-[11.5px] text-[#8592A6]">Remote / US • Full-time</div>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: NEWS */}
            {activeTab === 'news' && (
              <div className="flex flex-col gap-4 pt-1 text-[13.5px]">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Recent Developments</h4>
                  <p className="text-[13px] text-gray-400 mt-0.5">Public news, funding announcements and milestone releases.</p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#FAFBFD]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0B0F19]">Clay Announces $240M Series C Funding at $1.3B Valuation</span>
                    <span className="text-[11.5px] text-[#8592A6]">Recent</span>
                  </div>
                  <p className="text-[13px] text-[#64748B] mt-1.5 leading-relaxed">
                    Clay raises $240M Series C led by ICONIQ Growth with participation from existing investors to scale its GTM data orchestration engine.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. ACTIONABLE INTELLIGENCE */}
      <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1024px] mx-auto text-left">
          {/* Eyebrow & Title Header */}
          <div className="mb-8">
            <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#777779] mb-3">
              Actionable Intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#0B0F19] leading-[1.18]">
              Research is useful. Insights are better.
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748B] max-w-2xl font-normal leading-relaxed">
              Coirei GTM transforms competitor intelligence into actionable insights that sharpen product positioning, refine messaging, and guide smarter go-to-market decisions.
            </p>
          </div>

          {/* Actionable Intelligence Card (1024 Fill x 433 Hug, bg #FBFBFE) */}
          <div
            className="w-full bg-[#FBFBFE] rounded-[20px] border border-[#E0E7FF] p-7 sm:p-9 md:p-10 flex flex-col justify-between"
            style={{
              boxShadow:
                '0 4px 12px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Top Row: Meta Text */}
            <div className="flex justify-end mb-6">
              <span className="text-[12px] sm:text-[13px] text-[#94A3B8] font-normal">
                Calculated across 5 active competitor changelogs
              </span>
            </div>

            {/* Main Insight Quote (Exact Figma: Plus Jakarta Sans, 500 Medium, 24px/32px, 0px tracking, #111827) */}
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-[500] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[0px] text-[#111827] mb-8">
              “While competitors heavily push complex automation, We address friction-free onboarding for small teams. This creates a prime opportunity to win on simplicity, rapid setup, and immediate time-to-value.”
            </p>

            {/* Opportunity Tag Capsules */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[12.5px] font-medium text-[#334155] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                <span>Messaging Gap: Simplicity &amp; Speed</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[12.5px] font-medium text-[#334155] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                <span>Audience Gap: Teams under 20 employees</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[12.5px] font-medium text-[#334155] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                <span>Feature Opportunity: Zero-config templates</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[12.5px] font-medium text-[#334155] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                <span>Positioning Opportunity: 5-minute migration</span>
              </div>
            </div>

            {/* Bottom Query Model Prompt Bar */}
            <div className="flex items-center justify-between border border-[#E2E8F0] rounded-[12px] bg-white p-1.5 pl-4 sm:pl-5 shadow-xs focus-within:border-[#94A3B8] transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask Coirei: 'How should we price against Cortex Workspaces in Q3?'"
                className="w-full bg-transparent text-[13px] sm:text-[13.5px] text-[#0B0F19] placeholder:text-[#94A3B8] outline-none pr-3 font-normal"
              />
              <button
                type="button"
                className="shrink-0 flex items-center gap-1.5 bg-[#0B0F19] hover:bg-neutral-800 text-white text-[12px] sm:text-[12.5px] font-medium px-4 py-2 sm:py-2.5 rounded-[8px] transition-colors cursor-pointer"
              >
                <span>Query Model</span>
                <span className="text-[13px]">↵</span>
              </button>
            </div>
          </div>
        </div>
      </section>

     
      {/* 7. CLOSING CTA SECTION */}
      <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] font-semibold tracking-tight text-[#0B0F19] leading-[1.12] max-w-2xl">
            Stop guessing what your competitors are doing.
          </h2>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-[16px] sm:text-[17.5px] text-[#64748B] max-w-lg leading-relaxed font-normal">
            Understand the market. Find the gaps. Build a stronger GTM strategy.
          </p>

          {/* CTA Button & Note */}
          <div className="mt-8 sm:mt-9 flex flex-col items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 sm:py-4 rounded-[12px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[14px] sm:text-[14.5px] font-semibold transition-all duration-200 shadow-sm cursor-pointer active:scale-[0.99]"
            >
              <span>Analyze Your Market</span>
              
            </Link>


          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitorAnalysis;
