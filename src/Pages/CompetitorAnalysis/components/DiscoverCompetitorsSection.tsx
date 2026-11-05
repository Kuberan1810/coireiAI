import React from 'react';
import {
  Check,
  GitBranch,
  Hexagon,
  Activity,
  Network,
} from 'lucide-react';

export const DiscoverCompetitorsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#0B0A09] py-20 sm:py-28 px-6 sm:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-[1140px] w-full mx-auto">
        {/* Section Headline */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.14] text-[#0F172A] tracking-[-0.03em]">
            Discover Who You're
            <br />
            Competing Against
          </h2>
        </div>

        {/* 3 Columns Grid matching Figma: 352px width cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch justify-items-center">
          {/* ================= CARD 1: Connects the dots ================= */}
          <div className="w-full max-w-[352px] flex flex-col justify-between group">
            {/* Dark Metallic Visual Card (Figma: 352px x 400px, Radius 8px, Inner Shadow 1px rgba(255,255,255,0.20)) */}
            <div
              className="relative w-full h-[400px] rounded-[8px] p-4 sm:p-5 overflow-hidden flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              style={{
                background:
                  'radial-gradient(ellipse 95% 75% at 20% 15%, #46392F 0%, #221B17 45%, #100E0C 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.20)',
              }}
            >
              {/* Subtle ambient light sheen */}
              <div
                className="pointer-events-none absolute inset-0 opacity-35 mix-blend-overlay"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 45%, rgba(0,0,0,0.6) 100%)',
                }}
              />

              {/* Stack of Top Notification Pills */}
              <div className="relative z-10 flex flex-col gap-2">
                {/* Pill 1: Replica rollout merged */}
                <div className="bg-white/95 backdrop-blur-md rounded-[8px] p-2.5 px-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#181717] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] leading-snug text-[#111827]">
                        Replica rollout merged
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-[#78716C]">
                        Deployment diff
                      </span>
                    </div>
                  </div>
                  <Check className="w-3.5 h-3.5 text-[#A8A29E]" strokeWidth={2.5} />
                </div>

                {/* Pill 2: Database replica restarted */}
                <div className="bg-white/95 backdrop-blur-md rounded-[8px] p-2.5 px-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 text-white">
                      <Hexagon className="w-3 h-3 fill-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] leading-snug text-[#111827]">
                        Database replica restarted
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-[#78716C]">
                        Rollout events
                      </span>
                    </div>
                  </div>
                  <Check className="w-3.5 h-3.5 text-[#A8A29E]" strokeWidth={2.5} />
                </div>

                {/* Pill 3: Checkout timeouts rising */}
                <div className="bg-white/95 backdrop-blur-md rounded-[8px] p-2.5 px-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0 text-white">
                      <Activity className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] leading-snug text-[#111827]">
                        Checkout timeouts rising
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-[#78716C]">
                        Error traces
                      </span>
                    </div>
                  </div>
                  <Check className="w-3.5 h-3.5 text-[#A8A29E]" strokeWidth={2.5} />
                </div>
              </div>

              {/* Bottom Card: Likely cause */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[8px] p-3 px-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10.5px] font-medium text-[#78716C]">
                  Likely cause · 3 systems
                </span>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13.5px] text-[#111827] mt-0.5">
                  Stale database connections
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="px-2 py-0.5 rounded-[4px] border border-[#E7E5E4] bg-[#F5F5F4] text-[10.5px] text-[#57534E] font-mono">
                    ISS-2
                  </span>
                  <span className="px-2 py-0.5 rounded-[4px] border border-[#E7E5E4] bg-[#F5F5F4] text-[10.5px] text-[#57534E] font-mono">
                    checkout-svc
                  </span>
                </div>
              </div>
            </div>

            {/* Content Below Card 1 */}
            <div className="pt-5 text-left">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] sm:text-[19px] text-[#0F172A] leading-snug mb-1.5">
                Connects the dots.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6]">
                Links code changes, infrastructure events, and runtime behavior to show what's behind a problem.
              </p>
            </div>
          </div>

          {/* ================= CARD 2: Knows who owns what (Matches Figma) ================= */}
          <div className="w-full max-w-[352px] flex flex-col justify-between group">
            {/* Dark Metallic Visual Card (Figma: 352px x 400px, Radius 8px, Inner Shadow 1px rgba(255,255,255,0.20)) */}
            <div
              className="relative w-full h-[400px] rounded-[8px] p-4 sm:p-5 overflow-hidden flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              style={{
                background:
                  'radial-gradient(ellipse 95% 75% at 30% 15%, #42362E 0%, #201915 45%, #100E0C 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.20)',
              }}
            >
              {/* Subtle ambient light sheen */}
              <div
                className="pointer-events-none absolute inset-0 opacity-35 mix-blend-overlay"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 45%, rgba(0,0,0,0.6) 100%)',
                }}
              />

              {/* Stack of Top Notification Cards with Connector Line */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Pill 1: Recycle stale database connections */}
                <div className="w-full bg-white/95 backdrop-blur-md rounded-[8px] p-2.5 px-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded flex items-center justify-center shrink-0 text-[#10B981]">
                    <GitBranch className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] leading-snug text-[#111827]">
                      Recycle stale database connections
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-[#78716C] font-mono">
                      PR #3775 · checkout-svc
                    </span>
                  </div>
                </div>

                {/* Subtle vertical connector line */}
                <div className="w-[1px] h-3 bg-white/20" />

                {/* Card 2: Ownership Card (Payments team + Shreyas in separated rows) */}
                <div className="w-full bg-white/95 backdrop-blur-md rounded-[8px] p-2.5 px-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.14)] flex flex-col gap-2">
                  {/* Row 1: Payments team */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0ECE6]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-[6px] bg-[#D8C7B0] text-[#4A3B2C] font-bold text-[10.5px] flex items-center justify-center shrink-0">
                        PT
                      </div>
                      <div className="flex flex-col">
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-tight text-[#111827]">
                          Payments team
                        </span>
                        <div className="flex items-center gap-1 mt-0.5 text-[#78716C] font-mono text-[9.5px]">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>CODEOWNERS</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-[4px] bg-[#F5F5F4] text-[#57534E] text-[10px] font-medium border border-black/[0.04]">
                      Owner
                    </span>
                  </div>

                  {/* Row 2: Shreyas */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-[6px] bg-[#D8C7B0] text-[#4A3B2C] font-bold text-[10.5px] flex items-center justify-center shrink-0">
                        SI
                      </div>
                      <div className="flex flex-col">
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-tight text-[#111827]">
                          Shreyas
                        </span>
                        <div className="flex items-center gap-1 mt-0.5 text-[#78716C] text-[9.5px]">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>Recent GitHub reviews</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-[4px] bg-[#F5F5F4] text-[#57534E] text-[10px] font-medium border border-black/[0.04]">
                      Reviewer
                    </span>
                  </div>
                </div>

                {/* Subtle vertical connector line */}
                <div className="w-[1px] h-3 bg-white/20" />
              </div>

              {/* Centered Bottom Action Pill: Review requested */}
              <div className="relative z-10 flex justify-center pb-1">
                <div className="inline-flex items-center gap-1.5 bg-[#E8E4DC]/90 backdrop-blur-md rounded-full px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)] text-[11px] font-medium text-[#111827]">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={2.5} />
                  <span>Review requested</span>
                  <span className="text-[#78716C] font-normal">2 people</span>
                </div>
              </div>
            </div>

            {/* Content Below Card 2 */}
            <div className="pt-5 text-left">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] sm:text-[19px] text-[#0F172A] leading-snug mb-1.5">
                Knows who owns what.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6]">
                Uses code ownership and review history to identify service owners and the right people to review a fix.
              </p>
            </div>
          </div>

          {/* ================= CARD 3: Remembers your decisions (Matches Figma) ================= */}
          <div className="w-full max-w-[352px] flex flex-col justify-between group">
            {/* Dark Metallic Visual Card (Figma: 352px x 400px, Radius 8px, Inner Shadow 1px rgba(255,255,255,0.20)) */}
            <div
              className="relative w-full h-[400px] rounded-[8px] p-4 sm:p-5 overflow-hidden flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              style={{
                background:
                  'linear-gradient(135deg, #3C3129 0%, #1F1915 35%, #2B231D 65%, #0F0D0C 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.20)',
              }}
            >
              {/* Diagonal sheen highlight */}
              <div
                className="pointer-events-none absolute inset-0 opacity-35 mix-blend-overlay"
                style={{
                  background:
                    'linear-gradient(115deg, rgba(255,255,255,0.25) 0%, transparent 45%, rgba(0,0,0,0.7) 100%)',
                }}
              />

              {/* Top Notification: Your team's decision */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[8px] p-3 px-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.14)] flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-[6px] bg-[#D8C7B0] text-[#4A3B2C] font-bold text-[10.5px] flex items-center justify-center shrink-0 mt-0.5">
                  JL
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10.5px] font-medium text-[#78716C]">
                    Your team's decision
                  </span>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12.5px] leading-snug text-[#1C1917] mt-0.5">
                    Keep checkout at eight replicas. We need the capacity for peak traffic.
                  </p>
                </div>
              </div>

              {/* Middle Capsule: World Model updated (Figma style) */}
              <div className="relative z-10 flex justify-center my-auto py-1">
                <div className="inline-flex items-center gap-1.5 bg-[#E8E4DC]/90 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-white/40 text-[11px] text-[#2C2621]">
                  <Network className="w-3.5 h-3.5 text-[#059669]" />
                  <span className="font-medium text-[#1C1917]">World Model updated</span>
                  <span className="text-[#78716C] font-mono text-[10px]">checkout-svc</span>
                  <Check className="w-3 h-3 text-[#78716C]" strokeWidth={2} />
                </div>
              </div>

              {/* Bottom Card: Improvement - Next patrol run */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[8px] p-3 px-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10.5px] font-medium text-[#78716C]">
                  Improvement · Next patrol run
                </span>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13.5px] text-[#1C1917] mt-0.5">
                  Reduce idle capacity. Preserve checkout.
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="px-2 py-0.5 rounded-[4px] border border-[#E7E5E4] bg-[#F5F5F4] text-[10.5px] text-[#57534E] font-mono">
                    minReplicas 8
                  </span>
                  <span className="px-2 py-0.5 rounded-[4px] bg-[#F0FDF4] border border-[#BBF7D0] text-[10.5px] text-[#16A34A] font-medium flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#16A34A]" strokeWidth={2.5} />
                    <span>Your team's constraint</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Content Below Card 3 */}
            <div className="pt-5 text-left">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] sm:text-[19px] text-[#0F172A] leading-snug mb-1.5">
                Remembers your decisions.
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6]">
                Keeps past investigations, fixes, and team decisions in the World Model to guide future recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCompetitorsSection;
