import React from 'react';

export const UnderstandLeadsSection: React.FC = () => {
  return (
    <section className="relative z-20 w-full bg-white text-[#080817] font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden -mt-[30vh] sm:-mt-[34vh]">
      {/* ========================================================================= */}
      {/* 1. CLEAN HEADING SECTION (NO LINES) */}
      {/* ========================================================================= */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-10 pb-12 sm:pb-14 text-left relative z-10">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[36px] sm:text-[46px] lg:text-[56px] text-[#080817] leading-[1.12] tracking-[-0.025em] max-w-[850px]">
          Make Every Lead Interaction
          <br />
          More Meaningful
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[24px] text-[#64748B] max-w-[700px] mt-4">
          Know what your leads care about, what they need, and when they're ready to engage. Coirei analyzes customer interactions and buying signals to help you make every follow-up more relevant.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. CONTINUOUS FIGMA ARCHITECTURAL GRID (Desktop >= 1100px) */}
      {/* 3 Sections: 01 INTENT, 02 INSIGHTS, 03 PRIORITIZATION */}
      {/* Row height: 600px each, Separator row: 120px each */}
      {/* Vertical lines: Left (calc(50%-542px)), Center (50%), Right (calc(50%+542px)) */}
      {/* ========================================================================= */}
      <div className="relative w-full hidden xl:block select-none">
        {/* 3 Core Vertical Lines running continuously from top to bottom */}
        <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-20">
          {/* Left Content Line */}
          <div className="absolute left-[calc(50%-542px)] top-0 bottom-0 w-[1px] bg-[#080817]/[0.22]" />
          {/* Center Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#080817]/[0.22]" />
          {/* Right Content Line */}
          <div className="absolute left-[calc(50%+542px)] top-0 bottom-0 w-[1px] bg-[#080817]/[0.22]" />
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION 01: INTENT */}
        {/* ----------------------------------------------------------------------- */}
        <div className="relative w-full">
          {/* Horizontal Line 1: Top of grid */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Empty spacer row (120px) */}
          <div className="h-[120px] w-full" />

          {/* Horizontal Line 2: Top of 01 content row */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Content Row 01 (600px) */}
          <div className="max-w-[1440px] mx-auto h-[600px] flex">
            <div className="flex-1 h-[600px]" />

            {/* Copy: 01 INTENT */}
            <div className="w-[542px] shrink-0 h-[600px] flex flex-col justify-center px-12 lg:px-14 text-left relative z-10">
              <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] text-[#94A3B8] uppercase mb-4 inline-block">
                01 INTENT
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-[#080817] leading-[1.16] tracking-[-0.025em] mb-5">
                Identify high-intent leads
                <br />
                from recent activity.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[25px] text-[#64748B] max-w-[440px]">
                Analyze lead behavior, engagement patterns, website activity, and buying signals to identify high-potential prospects and understand their readiness to make a purchase.
              </p>
            </div>

            {/* Blue Gradient Cell (542px) */}
            <div
              className="w-[542px] shrink-0 h-[600px] flex flex-col items-center justify-center px-8 gap-4 relative z-10"
              style={{
                background: 'linear-gradient(180deg, #8FAEE0 0%, #A4C2ED 45%, #D8E6F9 100%)',
              }}
            >
              <div className="w-[350px] max-w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-medium text-[13px] sm:text-[14px] text-[#080817] leading-[20px]">
                  Track website activity and content engagement.
                </p>
              </div>
              <div className="w-[350px] max-w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-medium text-[13px] sm:text-[14px] text-[#080817] leading-[20px]">
                  Detect buying signals and intent in real time.
                </p>
              </div>
              <div className="w-[350px] max-w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-medium text-[13px] sm:text-[14px] text-[#080817] leading-[20px]">
                  Understand company context to find the right-fit leads.
                </p>
              </div>
            </div>

            <div className="flex-1 h-[600px]" />
          </div>

          {/* Horizontal Line 3: Bottom of 01 content row */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Empty spacer row (120px) */}
          <div className="h-[120px] w-full" />
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION 02: INSIGHTS (REVERSED: Dark Gradient Card Left, Copy Right) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="relative w-full">
          {/* Horizontal Line: Top of 02 content row */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Content Row 02 (600px) */}
          <div className="max-w-[1440px] mx-auto h-[600px] flex">
            <div className="flex-1 h-[600px]" />

            {/* Dark Navy / Electric Blue Gradient Card (542px) */}
            <div
              className="w-[542px] shrink-0 h-[600px] flex flex-col items-center justify-center px-8 gap-4 relative z-10"
              style={{
                background: 'linear-gradient(180deg, #030814 0%, #061533 45%, #1846A3 85%, #2B6BE8 100%)',
              }}
            >
              <div className="w-[350px] max-w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-medium text-[14px] sm:text-[15px] text-[#080817] leading-[20px]">
                  Previous Conversation
                </p>
              </div>
              <div className="w-[350px] max-w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-medium text-[14px] sm:text-[15px] text-[#080817] leading-[20px]">
                  Customer Interests
                </p>
              </div>
              <div className="w-[350px] max-w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-medium text-[14px] sm:text-[15px] text-[#080817] leading-[20px]">
                  Unresolved Objections
                </p>
              </div>
            </div>

            {/* Copy: 02.INSIGHTS */}
            <div className="w-[542px] shrink-0 h-[600px] flex flex-col justify-center px-12 lg:px-14 text-left relative z-10">
              <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] text-[#94A3B8] uppercase mb-4 inline-block">
                02.INSIGHTS
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-[#080817] leading-[1.16] tracking-[-0.025em] mb-5">
                Understand conversations,
                <br />
                interests, and objections.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[25px] text-[#64748B] max-w-[440px]">
                Analyze previous conversations, customer preferences, product interests, and unresolved objections to understand each lead's needs and deliver more personalized communication.
              </p>
            </div>

            <div className="flex-1 h-[600px]" />
          </div>

          {/* Horizontal Line: Bottom of 02 content row */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Empty spacer row (120px) */}
          <div className="h-[120px] w-full" />
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION 03: PRIORITIZATION (Copy Left, Teal Cyan Gradient Card Right) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="relative w-full">
          {/* Horizontal Line: Top of 03 content row */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Content Row 03 (600px) */}
          <div className="max-w-[1440px] mx-auto h-[600px] flex">
            <div className="flex-1 h-[600px]" />

            {/* Copy: 03 PRIORITIZATION */}
            <div className="w-[542px] shrink-0 h-[600px] flex flex-col justify-center px-12 lg:px-14 text-left relative z-10">
              <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] text-[#94A3B8] uppercase mb-4 inline-block">
                03 PRIORITIZATION
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-[#080817] leading-[1.16] tracking-[-0.025em] mb-5">
                Prioritize promising leads
                <br />
                and suggest next steps.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[25px] text-[#64748B] max-w-[440px]">
                Evaluate engagement history, buying intent, and conversion potential to prioritize the most valuable leads and recommend the right follow-up strategy at the right time.
              </p>
            </div>

            {/* Deep Teal Cyan Brushed Gradient Card (542px) */}
            <div
              className="w-[542px] shrink-0 h-[600px] flex flex-col justify-center px-8 sm:px-10 gap-4 relative z-10"
              style={{
                background: 'linear-gradient(180deg, #024E68 0%, #036885 45%, #057C9C 85%, #0894B8 100%)',
              }}
            >
              {/* Top Card: High-intent leads identified */}
              <div className="w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5">
                <p className="font-semibold text-[13px] text-[#080817] leading-[18px]">
                  High-intent leads identified
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  3 leads match your conversion criteria
                </p>
              </div>

              {/* Middle Card: Acme Technologies */}
              <div className="w-full bg-white rounded-[8px] px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5 flex items-center gap-3">
                <div className="w-7 h-7 rounded-[4px] bg-[#F1F5F9] shrink-0 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-[2px] bg-[#CBD5E1]" />
                </div>
                <div>
                  <p className="font-semibold text-[13px] text-[#080817] leading-[18px]">
                    Middle Card
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    Acme Technologies — High Priority
                  </p>
                </div>
              </div>

              {/* Bottom 2-Card Row */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {/* Schedule Follow-up */}
                <div className="bg-white rounded-[8px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-[4px] bg-[#F1F5F9] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-[2px] bg-[#CBD5E1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[12px] text-[#080817] leading-[16px]">
                      Schedule Follow-up
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-0.5 leading-[14px]">
                      Priority: High · Best time identified
                    </p>
                  </div>
                </div>

                {/* Generate Personalized Outreach */}
                <div className="bg-white rounded-[8px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-transform duration-200 text-left border border-black/5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-[4px] bg-[#F1F5F9] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-[2px] bg-[#CBD5E1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[12px] text-[#080817] leading-[16px]">
                      Generate Personalized Outreach
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-0.5 leading-[14px]">
                      Recommend next steps based on lead activity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 h-[600px]" />
          </div>

          {/* Horizontal Line: Bottom of 03 content row */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />

          {/* Empty spacer row (120px) */}
          <div className="h-[120px] w-full" />

          {/* Final Bottom Line */}
          <div className="w-full h-[1px] bg-[#080817]/[0.22]" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. RESPONSIVE FALLBACK (Tablets & Mobile < 1100px) */}
      {/* ========================================================================= */}
      <div className="xl:hidden relative w-full border-t border-b border-[#080817]/[0.22] divide-y divide-[#080817]/[0.22]">
        {/* Section 01 Mobile */}
        <div className="w-full max-w-[640px] mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="text-left">
            <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] text-[#94A3B8] uppercase mb-3 inline-block">
              01 INTENT
            </span>
            <h3 className="font-bold text-[28px] sm:text-[34px] text-[#080817] leading-[1.18] tracking-[-0.02em] mb-4">
              Identify high-intent leads
              <br />
              from recent activity.
            </h3>
            <p className="text-[14px] leading-[24px] text-[#64748B]">
              Analyze lead behavior, engagement patterns, website activity, and buying signals to identify high-potential prospects and understand their readiness to make a purchase.
            </p>
          </div>

          <div
            className="w-full rounded-[16px] py-12 px-5 flex flex-col items-center gap-4 border border-[#080817]/[0.16]"
            style={{
              background: 'linear-gradient(180deg, #8FAEE0 0%, #A4C2ED 45%, #D8E6F9 100%)',
            }}
          >
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5">
              <p className="font-medium text-[13px] text-[#080817] leading-[19px]">
                Track website activity and content engagement.
              </p>
            </div>
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5">
              <p className="font-medium text-[13px] text-[#080817] leading-[19px]">
                Detect buying signals and intent in real time.
              </p>
            </div>
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5">
              <p className="font-medium text-[13px] text-[#080817] leading-[19px]">
                Understand company context to find the right-fit leads.
              </p>
            </div>
          </div>
        </div>

        {/* Section 02 Mobile */}
        <div className="w-full max-w-[640px] mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="text-left">
            <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] text-[#94A3B8] uppercase mb-3 inline-block">
              02.INSIGHTS
            </span>
            <h3 className="font-bold text-[28px] sm:text-[34px] text-[#080817] leading-[1.18] tracking-[-0.02em] mb-4">
              Understand conversations,
              <br />
              interests, and objections.
            </h3>
            <p className="text-[14px] leading-[24px] text-[#64748B]">
              Analyze previous conversations, customer preferences, product interests, and unresolved objections to understand each lead's needs and deliver more personalized communication.
            </p>
          </div>

          <div
            className="w-full rounded-[16px] py-12 px-5 flex flex-col items-center gap-4 border border-[#080817]/[0.16]"
            style={{
              background: 'linear-gradient(180deg, #030814 0%, #061533 45%, #1846A3 85%, #2B6BE8 100%)',
            }}
          >
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-left border border-black/5">
              <p className="font-medium text-[14px] text-[#080817] leading-[20px]">
                Previous Conversation
              </p>
            </div>
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-left border border-black/5">
              <p className="font-medium text-[14px] text-[#080817] leading-[20px]">
                Customer Interests
              </p>
            </div>
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-left border border-black/5">
              <p className="font-medium text-[14px] text-[#080817] leading-[20px]">
                Unresolved Objections
              </p>
            </div>
          </div>
        </div>

        {/* Section 03 Mobile */}
        <div className="w-full max-w-[640px] mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="text-left">
            <span className="font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] text-[#94A3B8] uppercase mb-3 inline-block">
              03 PRIORITIZATION
            </span>
            <h3 className="font-bold text-[28px] sm:text-[34px] text-[#080817] leading-[1.18] tracking-[-0.02em] mb-4">
              Prioritize promising leads
              <br />
              and suggest next steps.
            </h3>
            <p className="text-[14px] leading-[24px] text-[#64748B]">
              Evaluate engagement history, buying intent, and conversion potential to prioritize the most valuable leads and recommend the right follow-up strategy at the right time.
            </p>
          </div>

          <div
            className="w-full rounded-[16px] py-12 px-5 flex flex-col justify-center gap-4 border border-[#080817]/[0.16]"
            style={{
              background: 'linear-gradient(180deg, #024E68 0%, #036885 45%, #057C9C 85%, #0894B8 100%)',
            }}
          >
            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5">
              <p className="font-semibold text-[13px] text-[#080817] leading-[18px]">
                High-intent leads identified
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                3 leads match your conversion criteria
              </p>
            </div>

            <div className="w-full bg-white rounded-[8px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5 flex items-center gap-3">
              <div className="w-7 h-7 rounded-[4px] bg-[#F1F5F9] shrink-0 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-[2px] bg-[#CBD5E1]" />
              </div>
              <div>
                <p className="font-semibold text-[13px] text-[#080817] leading-[18px]">
                  Middle Card
                </p>
                <p className="text-[11px] text-[#64748B]">
                  Acme Technologies — High Priority
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="bg-white rounded-[8px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-[4px] bg-[#F1F5F9] shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-[2px] bg-[#CBD5E1]" />
                </div>
                <div>
                  <p className="font-semibold text-[12px] text-[#080817] leading-[16px]">
                    Schedule Follow-up
                  </p>
                  <p className="text-[10px] text-[#64748B] mt-0.5 leading-[14px]">
                    Priority: High · Best time identified
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[8px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left border border-black/5 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-[4px] bg-[#F1F5F9] shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-[2px] bg-[#CBD5E1]" />
                </div>
                <div>
                  <p className="font-semibold text-[12px] text-[#080817] leading-[16px]">
                    Generate Personalized Outreach
                  </p>
                  <p className="text-[10px] text-[#64748B] mt-0.5 leading-[14px]">
                    Recommend next steps based on lead activity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandLeadsSection;
