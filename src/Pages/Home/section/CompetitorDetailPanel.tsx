import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Building2,
  Users,
  MapPin,
  Globe,
  CreditCard,
  Target,
  Briefcase,
} from "lucide-react";
import type { Competitor } from "./types";

// iicon match wih that
const ExportSquareIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 12,
  className = "text-[#64748B]",
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

interface CompetitorDetailPanelProps {
  selectedCompany: Competitor;
  onClose: () => void;
  buttonStyle: React.CSSProperties;
}

export const CompetitorDetailPanel: React.FC<CompetitorDetailPanelProps> = ({
  selectedCompany,
  onClose,
  buttonStyle,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "pricing" | "team" | "jobs">("overview");

  return (
    <div className="w-[400px] lg:w-[440px] xl:w-[460px] h-full shrink-0 border-l border-[#E2E8F0] bg-white flex flex-col">
      {/* Profile Top Bar */}
      <div className="p-6 pb-4 flex items-start justify-between border-b border-[#F1EFEA]">
        <div className="flex items-center gap-3.5">
          <div
            className={`w-12 h-12 rounded-[14px] ${
              selectedCompany.name === "ro"
                ? "bg-[#EFF6FF] text-black"
                : selectedCompany.faviconBg || "bg-[#E0F2FE] text-gray-900"
            } flex items-center justify-center shadow-2xs shrink-0`}
          >
            <span className="text-[18px] font-semibold uppercase">
              {selectedCompany.faviconText || selectedCompany.name.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[17px] font-semibold text-gray-900 tracking-tight capitalize">
                {selectedCompany.name}
              </h3>
              <a
                href={selectedCompany.website}
                target="_blank"
                rel="noreferrer"
                className="size-5 rounded-[6px] border border-black/10 bg-white flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors shrink-0 cursor-pointer"
                style={{
                  boxShadow: "inset -4px -4px 4px rgba(0, 0, 0, 0.03)",
                }}
                title="Open external link"
              >
                <ExportSquareIcon size={12} className="text-[#64748B] hover:text-[#0F172A]" />
              </a>
            </div>
            <span className="text-[12px] text-gray-400 font-normal">
              {selectedCompany.website}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-1 rounded-md hover:bg-gray-100"
          title="Close panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="flex items-center gap-6 px-6 pt-3 border-b border-[#F1EFEA] text-[13px]">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`pb-2.5 font-medium transition-colors cursor-pointer ${
            activeTab === "overview"
              ? "text-gray-900 border-b-2 border-[#0D9488]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pricing")}
          className={`pb-2.5 font-medium transition-colors cursor-pointer ${
            activeTab === "pricing"
              ? "text-gray-900 border-b-2 border-[#0D9488]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Products & Pricing
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("team")}
          className={`pb-2.5 font-medium transition-colors cursor-pointer ${
            activeTab === "team"
              ? "text-gray-900 border-b-2 border-[#0D9488]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Team
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("jobs")}
          className={`pb-2.5 font-medium transition-colors cursor-pointer ${
            activeTab === "jobs"
              ? "text-gray-900 border-b-2 border-[#0D9488]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Jobs
        </button>
      </div>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar p-6">
        {activeTab === "overview" && (
          <>
            {/* Business Overview */}
            <div className="mb-5">
              <h4 className="text-[14px] font-semibold text-gray-900 mb-1.5">
                Business overview
              </h4>
              <p className="text-[13px] text-gray-600 leading-relaxed font-normal">
                {selectedCompany.overview}
              </p>
            </div>

            {/* Metadata Key-Value List */}
            <div className="flex flex-col gap- 2.5 py-3 border-y border-[#F3F4F6] text-[13px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Target className="w-4 h-4 stroke-[1.8]" />
                  <span>Similarity match</span>
                </div>
                <span className="text-gray-900 font-semibold">
                  {selectedCompany.similarityScore}% match with ICP
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Briefcase className="w-4 h-4 stroke-[1.8]" />
                  <span>Product type</span>
                </div>
                <span className="text-gray-900 font-medium text-right max-w-[220px]">
                  {selectedCompany.productType}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <CreditCard className="w-4 h-4 stroke-[1.8]" />
                  <span>Business model</span>
                </div>
                <span className="text-gray-900 font-medium text-right max-w-[220px]">
                  {selectedCompany.businessModel}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <CreditCard className="w-4 h-4 stroke-[1.8]" />
                  <span>Pricing model</span>
                </div>
                <span className="text-gray-900 font-medium text-right max-w-[220px]">
                  {selectedCompany.pricingStructure}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Building2 className="w-4 h-4 stroke-[1.8]" />
                  <span>Industry</span>
                </div>
                <span className="text-gray-900 font-medium">
                  {selectedCompany.industryDetail || selectedCompany.industry}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4 stroke-[1.8]" />
                  <span>Employee count</span>
                </div>
                <span className="text-gray-900 font-medium">
                  {selectedCompany.employeeCount} ({selectedCompany.companySize || "estimated"})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 stroke-[1.8]" />
                  <span>HQ Location</span>
                </div>
                <span className="text-gray-900 font-medium">
                  {selectedCompany.hqLocation}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="w-4 h-4 stroke-[1.8]" />
                  <span>Founded</span>
                </div>
                <span className="text-gray-900 font-medium">
                  {selectedCompany.founded || "2018 (estimated)"}
                </span>
              </div>
            </div>

            {/* What They Offer */}
            <div className="mt-5">
              <h4 className="text-[14px] font-semibold text-gray-900 mb-0.5">
                What they offer
              </h4>
              <p className="text-[12px] text-gray-400 mb-2.5">
                Key products and services extracted from their website.
              </p>
              <ul className="space-y-1.5 text-[13px] text-gray-700">
                {(
                  selectedCompany.offerings || [
                    "Autonomous warehouse robots",
                    "Fleet management software",
                  ]
                ).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                Pricing Architecture
              </span>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-700" />
                <span className="text-[14px] font-semibold text-gray-900">
                  {selectedCompany.pricingStructure}
                </span>
              </div>
              <p className="text-[12px] text-gray-500 mt-1.5 leading-relaxed">
                Evaluated against current GTM tier structures and competitive customer willingness-to-pay.
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold text-gray-900 mb-2">
                Key Product Offerings & Monetization
              </h4>
              <ul className="space-y-2 text-[13px]">
                {selectedCompany.offerings?.map((item, idx) => (
                  <li key={idx} className="p-3 rounded-lg border border-gray-100 bg-white flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-900 font-medium">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                  Total Workforce
                </span>
                <span className="text-[16px] font-semibold text-gray-900">
                  {selectedCompany.employeeCount} employees
                </span>
              </div>
              <Users className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                  Headquarters
                </span>
                <span className="text-[14px] font-medium text-gray-900">
                  {selectedCompany.hqLocation}
                </span>
              </div>
              <MapPin className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                  Founded Year
                </span>
                <span className="text-[14px] font-medium text-gray-900">
                  {selectedCompany.founded || "2018 (estimated)"}
                </span>
              </div>
              <Globe className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="space-y-3">
            <p className="text-[13px] text-gray-500">
              Live hiring momentum signals detected for {selectedCompany.name}:
            </p>
            <div className="p-3.5 rounded-lg border border-gray-100 bg-white flex items-center justify-between text-[13px]">
              <div>
                <div className="font-semibold text-gray-900">AI Engineering & Core Tech</div>
                <div className="text-[11px] text-gray-400">{selectedCompany.hqLocation} • Full-time</div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                Active
              </span>
            </div>
            <div className="p-3.5 rounded-lg border border-gray-100 bg-white flex items-center justify-between text-[13px]">
              <div>
                <div className="font-semibold text-gray-900">Enterprise Growth & Sales</div>
                <div className="text-[11px] text-gray-400">Remote / US • Full-time</div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                Active
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Sticky/Fixed Bottom Action Buttons */}
      <div className="p-6 py-4 border-t border-[#F1EFEA] bg-white shrink-0 flex items-center gap-3">
        <a
          href={selectedCompany.website}
          target="_blank"
          rel="noreferrer"
          className="flex-1 h-[38px] rounded-lg bg-[#0F172A] text-white text-[13px] font-medium flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer shadow-xs"
        >
          Visit Site
        </a>
        <button
          type="button"
          onClick={() => navigate(`/company-details/${selectedCompany.id}`)}
          style={buttonStyle}
          className="flex-1 !h-[38px] rounded-lg text-gray-700 text-[13px] font-medium flex items-center justify-center hover:text-black transition-colors cursor-pointer"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default CompetitorDetailPanel;
