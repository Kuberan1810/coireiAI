import React from 'react';
import {
  X,
  Mail,
  CheckCircle2,
  Target,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import type { ICPLead } from './icpData';

// LinkedIn SVG Icon
const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 14,
  className = 'text-[#0A66C2]',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.9H5.06v8.6h2.8z" />
  </svg>
);

interface ICPDetailPanelProps {
  lead: ICPLead;
  onClose: () => void;
  buttonStyle?: React.CSSProperties;
}

export const ICPDetailPanel: React.FC<ICPDetailPanelProps> = ({
  lead,
  onClose,
}) => {
  return (
    <div className="w-[340px] sm:w-[380px] border-l border-[#EAE6DF] bg-[#FAF9F6] flex flex-col h-full shrink-0 shadow-lg z-20 animate-in slide-in-from-right duration-200">
      {/* Top Header */}
      <div className="p-4 border-b border-[#EAE6DF] flex items-center justify-between bg-white shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[12px] font-semibold text-gray-800 tracking-wide uppercase">
            Lead Dossier
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-black p-1 rounded-md transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body Area */}
      <div
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 text-left"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E1 transparent' }}
      >
        {/* Person Header Box */}
        <div className="p-3.5 bg-white rounded-xl border border-[#EAE6DF] shadow-2xs flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl ${lead.avatarBg} flex items-center justify-center font-bold text-sm shrink-0 shadow-xs`}
            >
              {lead.avatarText}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-gray-900 leading-tight truncate">
                {lead.name}
              </h3>
              <p className="text-[12px] text-gray-600 font-medium leading-tight truncate mt-0.5">
                {lead.title}
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[11.5px] text-gray-500">
                <span className="font-semibold text-gray-800">{lead.company}</span>
                <span>•</span>
                <span>{lead.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-[#F0ECE6]">
            {/* LinkedIn */}
            <a
              href={`https://${lead.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F0F7FF] border border-[#BFDBFE] text-[#0A66C2] text-[11px] font-semibold hover:bg-[#E0EFFF] transition-colors"
            >
              <LinkedInIcon size={12} />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-60" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${lead.email}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#EAE6DF] text-gray-700 text-[11px] font-medium hover:border-gray-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-gray-500" />
              <span>{lead.email}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5" title="Verified deliverability" />
            </a>
          </div>
        </div>

        {/* ICP Score & Persona Highlights */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-white rounded-xl border border-[#EAE6DF] shadow-2xs flex flex-col justify-between">
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
              Lead Score
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                {lead.icpScore}%
              </span>
              <span className="text-[11px] font-bold text-emerald-600">Exceptional</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#EAE6DF] shadow-2xs flex flex-col justify-between">
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
              Persona Tier
            </span>
            <span className="text-[12px] font-bold text-gray-900 mt-1 leading-tight">
              {lead.persona}
            </span>
          </div>
        </div>

        {/* Live Buying Intent Signal */}
        <div className="p-3.5 bg-white rounded-xl border border-[#EAE6DF] shadow-2xs flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Detected Buying Signal</span>
          </div>
          <p className="text-[12.5px] font-semibold text-gray-900">
            {lead.intentSignal}
          </p>
          <p className="text-[11.5px] text-gray-500 leading-relaxed mt-0.5">
            Triggers verified through recent corporate job postings, tech stack telemetry, and executive activity.
          </p>
        </div>

        {/* Recommended Outreach Pitch */}
        <div className="p-3.5 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-emerald-700" />
            <span>Recommended GTM Pitch</span>
          </div>
          <p className="text-[12px] text-emerald-950 font-normal leading-relaxed">
            {lead.recommendedOutreach}
          </p>
        </div>

        {/* Key Decision Maker Pain Points */}
        <div className="p-3.5 bg-white rounded-xl border border-[#EAE6DF] shadow-2xs flex flex-col gap-2">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Key Operational Pain Points
          </span>
          <ul className="flex flex-col gap-2 text-[12px] text-gray-700">
            {lead.painPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="leading-snug">{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Context */}
        <div className="p-3.5 bg-white rounded-xl border border-[#EAE6DF] shadow-2xs flex flex-col gap-2 text-[12px]">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Target Account Overview
          </span>
          <div className="flex items-center justify-between text-gray-600 border-b border-[#F0ECE6] pb-1.5">
            <span>Industry</span>
            <span className="font-semibold text-gray-900">{lead.industry}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600 border-b border-[#F0ECE6] pb-1.5">
            <span>Company Size</span>
            <span className="font-semibold text-gray-900">{lead.companySize} employees</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>Website</span>
            <a
              href={`https://${lead.companyDomain}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#2563EB] hover:underline font-semibold"
            >
              {lead.companyDomain}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICPDetailPanel;
