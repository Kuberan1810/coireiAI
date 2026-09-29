import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckMark: React.FC = () => (
  <svg
    className="w-3.5 h-3.5 text-neutral-800"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
  </svg>
);

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  priceSubtext: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isExternal?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for individuals exploring AI-powered GTM.',
    monthlyPrice: 0,
    annualPrice: 0,
    priceSubtext: 'Per user/month, billed annually',
    features: [
      'Basic market insights',
      'Basic lead discovery',
      'Limited AI agent runs',
      'Essential GTM workflows',
      '1 workspace',
    ],
    ctaText: 'Start for free',
    ctaHref: '/signin',
  },
  {
    id: 'plus',
    name: 'Plus',
    description: 'For professionals building repeatable GTM workflows.',
    monthlyPrice: 36,
    annualPrice: 29,
    priceSubtext: 'Per user/month, billed annually',
    features: [
      'Advanced market research',
      'More AI agent runs',
      'Personalized outreach',
      'Automated lead discovery',
      '3 workspaces',
    ],
    ctaText: 'Continue with Plus',
    ctaHref: '/signin',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For teams scaling pipeline across every channel.',
    monthlyPrice: 109,
    annualPrice: 89,
    priceSubtext: 'Per user/month, billed annually',
    isPopular: true,
    features: [
      'Unlimited core agent runs',
      'Full GTM orchestration',
      'Verified contact enrichment',
      'Campaign analytics',
      'Up to 10 workspaces',
    ],
    ctaText: 'Start Pro trial',
    ctaHref: '/signin',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations that need control and support.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    priceSubtext: 'Billed annually',
    features: [
      'Custom agent capacity',
      'SSO and access controls',
      'Priority data sources',
      'Dedicated success manager',
      'Custom integrations',
    ],
    ctaText: 'Talk to sales',
    ctaHref: '/contact',
  },
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif] pt-20 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
        {/* Eyebrow */}
        <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
          Simple, Transparent Pricing
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold tracking-[-1.2px] leading-[1.15] max-w-4xl mx-auto">
          <span className="inline sm:whitespace-nowrap">
            <span className="text-[#0B0F19]">AI-powered GTM, </span>
            <span className="text-[#8798AD]">built for every</span>
          </span>
          <br className="hidden sm:inline" />{' '}
          <span className="text-[#8798AD] inline sm:whitespace-nowrap">stage of your growth.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15.5px] text-neutral-500 max-w-[680px] mx-auto leading-relaxed">
          From finding the right leads to closing deals, GTM&apos;s AI agents work across your entire
          go-to-market process — so you can grow faster, smarter and with less manual work.
        </p>

        {/* Billing Interval Toggle (Figma Specs: 213.74px × 38px, bg #FFFFFF, border 1px #E2E8F0, padding 4px, shadow 0 1 2 5%) */}
        <div className="mt-6 sm:mt-7 inline-flex items-center h-[38px] p-[4px] rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`h-[30px] px-3.5 sm:px-4 flex items-center justify-center rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-[#0B0F19] text-white shadow-xs'
                : 'text-neutral-600 hover:text-[#0B0F19]'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`h-[30px] px-3.5 sm:px-4 flex items-center gap-1.5 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              billingCycle === 'annual'
                ? 'bg-[#0B0F19] text-white shadow-xs'
                : 'text-neutral-600 hover:text-[#0B0F19]'
            }`}
          >
            <span>Annual</span>
            <span
              className={`text-[12px] font-semibold transition-colors ${
                billingCycle === 'annual' ? 'text-blue-300' : 'text-[#2563EB]'
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const subtext =
              plan.id === 'enterprise'
                ? 'Billed annually'
                : billingCycle === 'annual'
                  ? 'Per user/month, billed annually'
                  : 'Per user/month, billed monthly';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-[16px] p-[28px] transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#FFFFFF] border-2 border-[#0B0F19] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] z-10'
                    : 'bg-[#FFFFFF] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B0F19] text-white text-[10px] sm:text-[10.5px] font-bold tracking-[0.1em] px-3.5 py-1 rounded-full uppercase shadow-xs">
                    Most Popular
                  </div>
                )}

                {/* Card Top: Title, Description, Price */}
                <div>
                  <h3 className="text-[20px] font-bold text-[#0B0F19] tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-neutral-500 leading-normal min-h-[38px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-1 flex items-baseline gap-1">
                    {typeof price === 'number' ? (
                      <span className="text-[38px] sm:text-[42px] font-bold text-[#0B0F19] tracking-tight leading-none">
                        ${price}
                      </span>
                    ) : (
                      <span className="text-[34px] sm:text-[38px] font-bold text-[#0B0F19] tracking-tight leading-none">
                        {price}
                      </span>
                    )}
                  </div>

                  {/* Billing frequency */}
                  <p className="text-[11.5px] font-medium text-neutral-400 mb-6">{subtext}</p>

                  {/* Features List */}
                  <div className="space-y-3 pt-1 border-t border-neutral-100">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#334155]">
                        <svg
                          className="w-3.5 h-3.5 text-[#0B0F19] shrink-0 mt-0.5"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <div className="mt-8 pt-2">
                  {plan.isExternal ? (
                    <a
                      href={plan.ctaHref}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-[10px] text-[13.5px] font-semibold transition-all duration-200 cursor-pointer bg-[#FFFFFF] text-[#0B0F19] border border-[#E2E8F0] hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99] shadow-2xs"
                    >
                      {plan.ctaText}
                    </a>
                  ) : (
                    <Link
                      to={plan.ctaHref}
                      className={`w-full flex items-center justify-center py-2.5 px-4 rounded-[10px] text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                        plan.isPopular
                          ? 'bg-[#0B0F19] text-white hover:bg-neutral-800 active:scale-[0.99] shadow-xs'
                          : 'bg-[#FFFFFF] text-[#0B0F19] border border-[#E2E8F0] hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99] shadow-2xs'
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Capabilities Matrix / Compare all features Section (Exact Figma Specs: 1216px container, 24px radius, 40px padding, shadow 0 1 2 5%) */}
      <div className="max-w-[1216px] mx-auto mt-20 sm:mt-28">
        <div className="border border-[#E2E8F0] rounded-[24px] p-6 sm:p-[40px] bg-[#FFFFFF] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
          <div className="overflow-x-auto">
            <div className="w-[1134px]">
              {/* Header Row: Left Text (407.32px) + Right 4 Plan Columns (181.67px each) */}
              <div className="flex items-end pb-8 border-b border-[#E2E8F0]">
                {/* Left Header Info (407.32px) */}
                <div className="w-[407.32px] shrink-0 pr-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8592A6] mb-2">
                    Capabilities Matrix
                  </p>
                  <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-[#0B0F19] leading-[1.2]">
                    Compare all features
                  </h2>
                  <p className="mt-2 text-[13px] text-neutral-500 leading-relaxed max-w-[340px]">
                    See how each plan helps you go further, with the right mix of AI agents, automation and support.
                  </p>
                </div>

                {/* 4 Plan Columns (181.67px each) */}
                <div className="flex items-end">
                  {/* Plan 1: Free */}
                  <div className="w-[181.67px] shrink-0 flex flex-col items-center justify-end px-2">
                    <span className="text-[14px] font-medium text-neutral-700">Free</span>
                    <span className="text-[24px] font-bold text-[#0B0F19] mt-0.5 leading-none">$0</span>
                    <span className="text-[11.5px] text-neutral-400 mt-1 mb-3.5">For individuals</span>
                    <Link
                      to="/signin"
                      className="w-full h-[36px] flex items-center justify-center rounded-[10px] text-[13px] font-semibold text-[#0B0F19] bg-white border border-[#E2E8F0] hover:border-neutral-300 hover:bg-neutral-50 transition-all text-center"
                    >
                      Start free
                    </Link>
                  </div>

                  {/* Plan 2: Plus */}
                  <div className="w-[181.67px] shrink-0 flex flex-col items-center justify-end px-2">
                    <span className="text-[14px] font-medium text-neutral-700">Plus</span>
                    <span className="text-[24px] font-bold text-[#0B0F19] mt-0.5 leading-none">$29</span>
                    <span className="text-[11.5px] text-neutral-400 mt-1 mb-3.5">Small teams</span>
                    <Link
                      to="/signin"
                      className="w-full h-[36px] flex items-center justify-center rounded-[10px] text-[13px] font-semibold text-[#0B0F19] bg-white border border-[#E2E8F0] hover:border-neutral-300 hover:bg-neutral-50 transition-all text-center"
                    >
                      Get Plus
                    </Link>
                  </div>

                  {/* Plan 3: Pro (Figma Specs: Fixed 181.67px × Hug 128px, Radius 16px, Border 1px #E2E8F0, Padding 14px 10px 10px 10px, Color #F8FAFC 70%) */}
                  <div className="w-[181.67px] shrink-0 px-1 relative">
                    <div className="w-[181.67px] min-h-[128px] border border-[#E2E8F0] rounded-[16px] pt-[14px] px-[10px] pb-[10px] flex flex-col items-center justify-between bg-[#F8FAFC]/70 relative shadow-2xs">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B0F19] text-white text-[8.5px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase whitespace-nowrap shadow-2xs">
                        Most Popular
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[14px] font-semibold text-[#0B0F19]">Pro</span>
                        <span className="text-[24px] font-bold text-[#0B0F19] mt-0.5 leading-none">$89</span>
                        <span className="text-[11px] text-neutral-500 mt-1">Scaling GTM teams</span>
                      </div>
                      <Link
                        to="/signin"
                        className="w-full h-[36px] mt-2.5 flex items-center justify-center rounded-[10px] text-[13px] font-semibold text-white bg-[#0B0F19] hover:bg-neutral-800 transition-all text-center shadow-xs"
                      >
                        Start Pro trial
                      </Link>
                    </div>
                  </div>

                  {/* Plan 4: Enterprise */}
                  <div className="w-[181.67px] shrink-0 flex flex-col items-center justify-end px-2">
                    <span className="text-[14px] font-medium text-neutral-700">Enterprise</span>
                    <span className="text-[24px] font-bold text-[#0B0F19] mt-0.5 leading-none">Custom</span>
                    <span className="text-[11.5px] text-neutral-400 mt-1 mb-3.5">High volume</span>
                    <Link
                      to="/contact"
                      className="w-full h-[36px] flex items-center justify-center rounded-[10px] text-[13px] font-semibold text-[#0B0F19] bg-white border border-[#E2E8F0] hover:border-neutral-300 hover:bg-neutral-50 transition-all text-center"
                    >
                      Talk to sales
                    </Link>
                  </div>
                </div>
              </div>

              {/* Table Body Content (Rows: 1,134px × 56px, Radius 8px) */}
              <div className="pt-6 space-y-8">
                {/* 01 AI AGENTS */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[13px] font-bold text-[#0B0F19]">01</span>
                    <span className="text-[13px] font-bold uppercase tracking-wider text-[#0B0F19]">AI AGENTS</span>
                    <span className="text-[12.5px] text-[#8592A6] font-normal">specialized agents that work 24/7 for your gtm.</span>
                  </div>

                  <div>
                    {/* Research Agent */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Research Agent</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Company, market & competitor insights</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* Competitor Agent */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Competitor Agent</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Track & analyze competitors</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* ICP Agent */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">ICP Agent</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Find and score your ideal customers</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* Lead Agent */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Lead Agent</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Discover, qualify and enrich leads</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* AI Agent Runs */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">AI Agent Runs</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Monthly agent execution limits</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Basic</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">More</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">High</div>
                    </div>

                    {/* Workspaces */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Workspaces</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Collaborative workspaces</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">1</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Unlimited</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Custom</div>
                    </div>
                  </div>
                </div>

                {/* 02 LEAD GENERATION */}
                <div>
                  <div className="flex items-center gap-2 mb-2 pt-1">
                    <span className="text-[13px] font-bold text-[#0B0F19]">02</span>
                    <span className="text-[13px] font-bold uppercase tracking-wider text-[#0B0F19]">LEAD GENERATION</span>
                    <span className="text-[12.5px] text-[#8592A6] font-normal">find, engage and convert the right leads, faster.</span>
                  </div>

                  <div>
                    {/* Lead Discovery */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Lead Discovery</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Identify high-potential leads</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* Lead Qualification */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Lead Qualification</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">AI-powered qualification & scoring</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* Lead Enrichment */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Lead Enrichment</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Enrich with verified data</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Custom</div>
                    </div>

                    {/* ICP Fit Scoring */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">ICP Fit Scoring</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Match with your ideal customer profile</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Custom</div>
                    </div>
                  </div>
                </div>

                {/* 03 ANALYTICS */}
                <div>
                  <div className="flex items-center gap-2 mb-2 pt-1">
                    <span className="text-[13px] font-bold text-[#0B0F19]">03</span>
                    <span className="text-[13px] font-bold uppercase tracking-wider text-[#0B0F19]">ANALYTICS</span>
                    <span className="text-[12.5px] text-[#8592A6] font-normal">turn data into actionable growth insights.</span>
                  </div>

                  <div>
                    {/* GTM Analytics */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">GTM Analytics</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Pipeline, performance & revenue insights</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Basic</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Advanced</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Custom</div>
                    </div>

                    {/* AI Insights */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">AI Insights</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Predictive and prescriptive recommendations</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>

                    {/* Growth Insights */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center border-b border-[#F1F5F9] hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Growth Insights</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Growth opportunities & trends</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-neutral-300 select-none font-light">—</div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                      <div className="w-[181.67px] shrink-0 flex justify-center"><CheckMark /></div>
                    </div>
                  </div>
                </div>

                {/* 04 SUPPORT */}
                <div>
                  <div className="flex items-center gap-2 mb-2 pt-1">
                    <span className="text-[13px] font-bold text-[#0B0F19]">04</span>
                    <span className="text-[13px] font-bold uppercase tracking-wider text-[#0B0F19]">SUPPORT</span>
                    <span className="text-[12.5px] text-[#8592A6] font-normal">we&apos;re here when you need us.</span>
                  </div>

                  <div>
                    {/* Support Level */}
                    <div className="w-[1134px] h-[56px] rounded-[8px] flex items-center hover:bg-neutral-50/50 transition-colors">
                      <div className="w-[407.32px] shrink-0 pr-4">
                        <div className="text-[12px] font-medium leading-[16px] text-[#1E293B] tracking-normal">Support Level</div>
                        <div className="text-[11px] leading-[15px] text-[#94A3B8] font-normal mt-0.5">Response time & dedicated support</div>
                      </div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Community</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Email</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Priority</div>
                      <div className="w-[181.67px] shrink-0 text-center text-[12.5px] font-medium text-[#1E293B]">Dedicated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA & Support Link (Scrolls back to top plan selection) */}
      <div className="max-w-[1216px] mx-auto mt-12 sm:mt-14 text-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-sm active:scale-[0.99] cursor-pointer"
        >
          <span>Choose your plan</span>
          <span>&rarr;</span>
        </button>
        <p className="mt-3.5 text-[12.5px] text-[#8592A6]">
          Have questions?{' '}
          <Link
            to="/contact"
            className="text-[#2563EB] hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            Contact our sales team
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
