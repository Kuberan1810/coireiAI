import React from 'react';
import { Link } from 'react-router-dom';

export const SEO: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-20 sm:pt-28 md:pt-32 pb-[40px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Eyebrow (Manrope, 500 Medium, #A1A1AA) */}
          <div className="flex items-center gap-2 font-['Manrope',sans-serif] font-[500] text-[13px] sm:text-[14px] uppercase tracking-wider text-[#A1A1AA] mb-5 sm:mb-6">
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span>SEO PLATFORM</span>
          </div>

          {/* Main Headline (Plus Jakarta Sans, Semibold, 76px/79px, -1.8px letter spacing, #0D0D0D) */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] font-semibold tracking-[-1.8px] leading-[1.05] sm:leading-[79px] text-[#0D0D0D] mb-6 sm:mb-7">
            Turn search data into
            <br />
            your next growth
            <br />
            opportunity.
          </h1>

          {/* Subtitle (Manrope, 500 Medium, 18px/28px, 0px letter spacing, #A1A1AA) */}
          <p className="font-['Manrope',sans-serif] font-[500] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] tracking-[0px] text-[#A1A1AA] max-w-2xl mb-8 sm:mb-10">
            Track keyword rankings, audit site health, analyze competitor gaps, and turn
            organic search data into pipeline — all in one enterprise-grade platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[8px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-xs cursor-pointer active:scale-[0.99]"
            >
              Get a Demo
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[8px] bg-white hover:bg-neutral-50 text-[#0B0F19] border border-[#E2E8F0] text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-2xs cursor-pointer active:scale-[0.99]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>      {/* 2. KEYWORD INTELLIGENCE SECTION */}
      <section className="relative w-full py-[40px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-5 text-left">
            <div className="font-['Manrope',sans-serif] font-[500] text-[13px] sm:text-[14px] uppercase tracking-wider text-[#94A3B8] mb-4">
              KEYWORD INTELLIGENCE
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.15] text-[#0D0D0D] mb-5">
              Every keyword your buyers are searching. Ranked by impact.
            </h2>
            <p className="font-['Manrope',sans-serif] font-[500] text-[15px] sm:text-[16px] leading-[26px] text-[#A1A1AA] max-w-lg">
              Discover high-intent keywords, track positions across 190+ countries, and surface opportunities before your competitors do.
            </p>
          </div>

          {/* Right Column: Expanded Table Card */}
          <div className="lg:col-span-7 flex justify-start lg:justify-end w-full">
            <div
              className="w-full max-w-[660px] bg-white rounded-[14px] p-5 sm:p-6"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
                boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10.5px] font-medium tracking-wider text-[#94A3B8] uppercase">
                    <th className="pb-4 pr-3 font-medium text-left whitespace-nowrap">KEYWORD</th>
                    <th className="pb-4 px-3 font-medium text-center whitespace-nowrap">INTENT</th>
                    <th className="pb-4 px-3 font-medium text-right whitespace-nowrap">VOLUME</th>
                    <th className="pb-4 px-3 font-medium text-center whitespace-nowrap">DIFFICULTY</th>
                    <th className="pb-4 px-3 font-medium text-center whitespace-nowrap">POSITION</th>
                    <th className="pb-4 pl-3 font-medium text-right whitespace-nowrap">OPPORTUNITY</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] leading-none">
                  {/* Row 1 */}
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">enterprise seo platform</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-block px-[8px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/90 text-[#4F46E5]">
                        Commercial
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">12,480</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 text-[#64748B] tabular-nums text-[11.5px]">
                        <span className="w-[16px] h-[2.5px] bg-[#F43F5E] rounded-full inline-block shrink-0" />
                        61
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-semibold text-[#16A34A] tabular-nums whitespace-nowrap">3</td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <span className="inline-block px-[10px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/70 text-[#4F46E5] border border-[#E0E7FF]">
                        High
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">seo automation software</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-block px-[8px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/90 text-[#4F46E5]">
                        Commercial
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">8,800</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 text-[#64748B] tabular-nums text-[11.5px]">
                        <span className="w-[16px] h-[2.5px] bg-[#F97316] rounded-full inline-block shrink-0" />
                        54
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-semibold text-[#F59E0B] tabular-nums whitespace-nowrap">7</td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <span className="inline-block px-[10px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/70 text-[#4F46E5] border border-[#E0E7FF]">
                        High
                      </span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">keyword rank tracker api</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-block px-[8px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#F1F5F9] text-[#64748B]">
                        Informational
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">4,200</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 text-[#64748B] tabular-nums text-[11.5px]">
                        <span className="w-[16px] h-[2.5px] bg-[#14B8A6] rounded-full inline-block shrink-0" />
                        38
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-semibold text-[#F59E0B] tabular-nums whitespace-nowrap">12</td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <span className="inline-block px-[10px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#FEF3C7]/70 text-[#D97706] border border-[#FDE68A]">
                        Med
                      </span>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">technical seo audit checklist</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-block px-[8px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#F1F5F9] text-[#64748B]">
                        Informational
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">18,100</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 text-[#64748B] tabular-nums text-[11.5px]">
                        <span className="w-[16px] h-[2.5px] bg-[#F97316] rounded-full inline-block shrink-0" />
                        44
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-semibold text-[#F59E0B] tabular-nums whitespace-nowrap">9</td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <span className="inline-block px-[10px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/70 text-[#4F46E5] border border-[#E0E7FF]">
                        High
                      </span>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">seo vs sem difference</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-block px-[8px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#F1F5F9] text-[#64748B]">
                        Informational
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">33,600</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 text-[#64748B] tabular-nums text-[11.5px]">
                        <span className="w-[16px] h-[2.5px] bg-[#14B8A6] rounded-full inline-block shrink-0" />
                        29
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-semibold text-[#EF4444] tabular-nums whitespace-nowrap">22</td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <span className="inline-block px-[10px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#FEF3C7]/70 text-[#D97706] border border-[#FDE68A]">
                        Med
                      </span>
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">competitor backlink analysis</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-block px-[8px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/90 text-[#4F46E5]">
                        Commercial
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">6,600</td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 text-[#64748B] tabular-nums text-[11.5px]">
                        <span className="w-[16px] h-[2.5px] bg-[#F97316] rounded-full inline-block shrink-0" />
                        57
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-semibold text-[#16A34A] tabular-nums whitespace-nowrap">5</td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <span className="inline-block px-[10px] py-[2.5px] rounded-[4px] text-[10.5px] leading-[11px] font-medium bg-[#EEF2FF]/70 text-[#4F46E5] border border-[#E0E7FF]">
                        High
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SEO SECTION */}
      <section className="relative w-full py-[40px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Stacked Cards (544px) */}
          <div className="lg:col-span-6 flex flex-col gap-4 max-w-[544px] w-full">
            {/* Top Card: Overall Site Health */}
            <div
              className="w-full bg-white rounded-[12px] p-[24px] flex flex-col gap-[24px]"
              style={{
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              {/* Top Row: Label & Circular Score */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-['Manrope',sans-serif] font-[500] text-[11px] uppercase tracking-wider text-[#94A3B8] block">
                    OVERALL SITE HEALTH
                  </span>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] text-[#64748B] mt-1">
                    meridianplatform.io · 4,281 pages crawled
                  </p>
                </div>

                {/* Circular Score Badge */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        className="stroke-[#E2E8F0]"
                        strokeWidth="3.5"
                        fill="none"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        className="stroke-[#0D9488]"
                        strokeWidth="3.5"
                        fill="none"
                        strokeDasharray={125.66}
                        strokeDashoffset={125.66 * (1 - 0.91)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] text-[#0D0D0D]">
                      91
                    </span>
                  </div>
                  <span className="font-['Manrope',sans-serif] font-medium text-[8.5px] tracking-wider text-[#94A3B8] uppercase mt-1">
                    HEALTH SCORE
                  </span>
                </div>
              </div>

              {/* Bottom Stat Boxes: Critical, Warnings, Notices */}
              <div className="grid grid-cols-3 gap-3">
                {/* Critical */}
                <div
                  className="rounded-[8px] p-[12px] bg-[#FFF1F2]"
                  style={{ border: '1px solid rgba(255, 228, 230, 0.8)' }}
                >
                  <span className="block font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] leading-tight text-[#E11D48]">
                    3
                  </span>
                  <span className="block font-['Manrope',sans-serif] font-medium text-[11.5px] text-[#E11D48] mt-1">
                    Critical
                  </span>
                </div>

                {/* Warnings */}
                <div
                  className="rounded-[8px] p-[12px] bg-[#FFFBEB]"
                  style={{ border: '1px solid rgba(254, 243, 199, 0.8)' }}
                >
                  <span className="block font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] leading-tight text-[#D97706]">
                    14
                  </span>
                  <span className="block font-['Manrope',sans-serif] font-medium text-[11.5px] text-[#D97706] mt-1">
                    Warnings
                  </span>
                </div>

                {/* Notices */}
                <div
                  className="rounded-[8px] p-[12px] bg-[#F8FAFC]"
                  style={{ border: '1px solid #F1F5F9' }}
                >
                  <span className="block font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] leading-tight text-[#334155]">
                    31
                  </span>
                  <span className="block font-['Manrope',sans-serif] font-medium text-[11.5px] text-[#64748B] mt-1">
                    Notices
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Issues Requiring Action */}
            <div
              className="w-full bg-white rounded-[12px] p-[24px] flex flex-col gap-[16px]"
              style={{
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <div className="font-['Manrope',sans-serif] font-[500] text-[11px] uppercase tracking-wider text-[#94A3B8]">
                ISSUES REQUIRING ACTION
              </div>

              <div className="flex flex-col divide-y divide-[#F1F5F9]">
                {/* Item 1 */}
                <div className="flex items-center gap-2.5 py-2.5 first:pt-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                  <span className="text-[13px] text-[#334155] font-normal">
                    Missing meta descriptions (48 pages)
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2.5 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                  <span className="text-[13px] text-[#334155] font-normal">
                    Duplicate title tags (12 pages)
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2.5 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                  <span className="text-[13px] text-[#334155] font-normal">
                    Broken internal links (7 found)
                  </span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-2.5 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                  <span className="text-[13px] text-[#334155] font-normal">
                    Images missing alt text (34)
                  </span>
                </div>

                {/* Item 5 */}
                <div className="flex items-center gap-2.5 py-2.5 last:pb-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                  <span className="text-[13px] text-[#334155] font-normal">
                    Slow page speed &gt; 3s (9 pages)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features Checklist */}
          <div className="lg:col-span-6 text-left">
            <div className="font-['Manrope',sans-serif] font-[500] text-[13px] sm:text-[14px] uppercase tracking-wider text-[#94A3B8] mb-4">
              TECHNICAL SEO
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.15] text-[#0D0D0D] mb-5">
              Find every technical issue before Google does.
            </h2>
            <p className="font-['Manrope',sans-serif] font-[500] text-[15px] sm:text-[16px] leading-[26px] text-[#A1A1AA] max-w-lg mb-8">
              Continuously audit your entire site for crawl errors, Core Web Vitals issues, broken links, duplicate content, and schema problems — with prioritized remediation guidance.
            </p>

            {/* Checklist items */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {[
                'Crawl up to 1M pages per audit',
                'Core Web Vitals monitoring (LCP, CLS, INP)',
                'JavaScript rendering with headless Chrome',
                'Automated re-audits on every deploy',
                'Direct export to Jira, Linear, and GitHub',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0">
                    <svg
                      className="w-[11px] h-[11px] text-[#4F46E5]"
                      fill="none"
                      viewBox="0 0 16 16"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                    </svg>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14.5px] sm:text-[15px] text-[#334155] font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTENT GAP ANALYSIS SECTION */}
      <section className="relative w-full py-[40px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Funnel Bars */}
          <div className="lg:col-span-5 text-left">
            <div className="font-['Manrope',sans-serif] font-[500] text-[13px] sm:text-[14px] uppercase tracking-wider text-[#94A3B8] mb-4">
              CONTENT GAP ANALYSIS
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.15] text-[#0D0D0D] mb-5">
              Content your buyers search for — that you haven't written yet.
            </h2>
            <p className="font-['Manrope',sans-serif] font-[500] text-[15px] sm:text-[16px] leading-[26px] text-[#A1A1AA] max-w-lg mb-8">
              Map every topic in your category. Identify gaps across the full funnel and get AI-assisted briefs to close them faster.
            </p>

            {/* Funnel Progress Bars */}
            <div className="flex flex-col gap-5 max-w-md">
              {/* ToFu */}
              <div>
                <div className="flex justify-between items-center text-[13.5px]">
                  <span className="font-['Manrope',sans-serif] font-medium text-[#334155]">
                    ToFu — 142 gaps
                  </span>
                  <span className="font-['Manrope',sans-serif] font-medium text-[#64748B] tabular-nums">
                    34%
                  </span>
                </div>
                <div className="w-full h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-[#14B8A6] rounded-full w-[34%]" />
                </div>
              </div>

              {/* MoFu */}
              <div>
                <div className="flex justify-between items-center text-[13.5px]">
                  <span className="font-['Manrope',sans-serif] font-medium text-[#334155]">
                    MoFu — 97 gaps
                  </span>
                  <span className="font-['Manrope',sans-serif] font-medium text-[#64748B] tabular-nums">
                    28%
                  </span>
                </div>
                <div className="w-full h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-[#4F46E5] rounded-full w-[28%]" />
                </div>
              </div>

              {/* BoFu */}
              <div>
                <div className="flex justify-between items-center text-[13.5px]">
                  <span className="font-['Manrope',sans-serif] font-medium text-[#334155]">
                    BoFu — 61 gaps
                  </span>
                  <span className="font-['Manrope',sans-serif] font-medium text-[#64748B] tabular-nums">
                    18%
                  </span>
                </div>
                <div className="w-full h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-[#9333EA] rounded-full w-[18%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Table Card */}
          <div className="lg:col-span-7 flex justify-start lg:justify-end w-full">
            <div
              className="w-full max-w-[660px] bg-white rounded-[14px] p-5 sm:p-6"
              style={{
                border: '1px solid rgba(226, 232, 240, 0.85)',
                boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              {/* Header row: Label & Export button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9] mb-1">
                <span className="font-['Manrope',sans-serif] font-[500] text-[10.5px] tracking-wider text-[#94A3B8] uppercase">
                  TOP CONTENT GAPS BY TRAFFIC POTENTIAL
                </span>
                <button
                  type="button"
                  className="px-2.5 py-1 text-[11px] font-medium text-[#475569] bg-white hover:bg-neutral-50 border border-[#E2E8F0] rounded-[6px] transition-colors shadow-2xs cursor-pointer"
                >
                  Export CSV
                </button>
              </div>

              {/* Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-medium tracking-wider text-[#94A3B8] uppercase">
                      <th className="py-3 pr-3 font-medium text-left whitespace-nowrap">TOPIC</th>
                      <th className="py-3 px-3 font-medium text-right whitespace-nowrap">TRAFFIC</th>
                      <th className="py-3 px-3 font-medium text-center whitespace-nowrap">STAGE</th>
                      <th className="py-3 px-3 font-medium text-center whitespace-nowrap">COVERED</th>
                      <th className="py-3 pl-3 font-medium text-right whitespace-nowrap">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] divide-y divide-[#F8FAFC]">
                    {/* Row 1 */}
                    <tr>
                      <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">
                        How to evaluate CRM vendors
                      </td>
                      <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">
                        14,200
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded-[4px] text-[10.5px] font-medium bg-[#F0FDFA] text-[#0D9488]">
                          ToFu
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-[#EF4444] font-medium whitespace-nowrap">
                        ✕ No
                      </td>
                      <td className="py-3 pl-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="px-3 py-1 rounded-[6px] bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[11px] font-medium transition-colors shadow-2xs cursor-pointer"
                        >
                          Create
                        </button>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">
                        CRM implementation checklist
                      </td>
                      <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">
                        9,800
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded-[4px] text-[10.5px] font-medium bg-[#EEF2FF] text-[#4F46E5]">
                          MoFu
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-[#EF4444] font-medium whitespace-nowrap">
                        ✕ No
                      </td>
                      <td className="py-3 pl-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="px-3 py-1 rounded-[6px] bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[11px] font-medium transition-colors shadow-2xs cursor-pointer"
                        >
                          Create
                        </button>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                      <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">
                        Enterprise vs SMB CRM
                      </td>
                      <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">
                        7,400
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded-[4px] text-[10.5px] font-medium bg-[#EEF2FF] text-[#4F46E5]">
                          MoFu
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-[#16A34A] font-medium whitespace-nowrap">
                        ✓ Yes
                      </td>
                      <td className="py-3 pl-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="px-2.5 py-1 rounded-[6px] bg-white hover:bg-neutral-50 border border-[#E2E8F0] text-[#475569] text-[11px] font-medium transition-colors shadow-2xs cursor-pointer"
                        >
                          Optimize
                        </button>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                      <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">
                        CRM ROI calculator
                      </td>
                      <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">
                        6,600
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded-[4px] text-[10.5px] font-medium bg-[#FAF5FF] text-[#9333EA]">
                          BoFu
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-[#EF4444] font-medium whitespace-nowrap">
                        ✕ No
                      </td>
                      <td className="py-3 pl-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="px-3 py-1 rounded-[6px] bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[11px] font-medium transition-colors shadow-2xs cursor-pointer"
                        >
                          Create
                        </button>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr>
                      <td className="py-3 pr-3 text-[#1E293B] font-normal whitespace-nowrap">
                        Salesforce alternatives 2025
                      </td>
                      <td className="py-3 px-3 text-right text-[#475569] font-normal tabular-nums whitespace-nowrap">
                        22,100
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded-[4px] text-[10.5px] font-medium bg-[#FAF5FF] text-[#9333EA]">
                          BoFu
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-[#16A34A] font-medium whitespace-nowrap">
                        ✓ Yes
                      </td>
                      <td className="py-3 pl-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="px-2.5 py-1 rounded-[6px] bg-white hover:bg-neutral-50 border border-[#E2E8F0] text-[#475569] text-[11px] font-medium transition-colors shadow-2xs cursor-pointer"
                        >
                          Optimize
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;
