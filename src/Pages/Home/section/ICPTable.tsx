import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import type { ICPLead } from './icpData';

// LinkedIn SVG Icon
const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 13,
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

export interface ICPTableProps {
  data: ICPLead[];
  totalCount: number;
  selectedRows: number[];
  onToggleSelectAll: () => void;
}

export const ICPTable: React.FC<ICPTableProps> = ({
  data,
  totalCount,
  selectedRows,
  onToggleSelectAll,
}) => {
  return (
    <div className="flex-1 h-full overflow-y-auto overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse min-w-[1400px]">
        <thead className="sticky top-0 bg-[#FFFFFF] z-10">
          <tr className="border-b border-[#EAE6DF] divide-x divide-[#EAE6DF] text-[12px] font-semibold text-gray-500 h-[45px]">
            {/* 0. Selection Checkbox */}
            <th className="sticky left-0 z-20 bg-white py-3 px-3.5 w-12 text-center border-r border-[#EAE6DF]">
              <input
                type="checkbox"
                checked={selectedRows.length === totalCount && totalCount > 0}
                onChange={onToggleSelectAll}
                className="rounded border-gray-300 text-black focus:ring-black cursor-pointer"
              />
            </th>

            {/* 1. Decision Maker */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap min-w-[190px]">
              Decision Maker
            </th>

            {/* 2. LinkedIn */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap min-w-[190px]">
              LinkedIn Profile
            </th>

            {/* 3. Verified Work Email */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap min-w-[170px]">
              Work Email
            </th>

            {/* 4. Lead Score */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">
              Lead Score
            </th>

            {/* 5. Persona / Tier */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">
              Persona Tier
            </th>

            {/* 6. Live Buying Intent Signal */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap min-w-[210px]">
              Buying Intent Signal
            </th>

            {/* 7. Industry */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">
              Industry
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#F3F4F6] text-[13px]">
          {data.map((row) => {
            return (
              <tr
                key={row.id}
                className="transition-colors hover:bg-gray-50/70 divide-x divide-[#EAE6DF]"
              >
                {/* 0. Index / Checkbox */}
                <td className="sticky left-0 z-10 py-3 px-3.5 text-center text-[#94A3B8] font-medium text-[13px] w-12 border-r border-[#EAE6DF] bg-white group-hover:bg-[#F9FAFB]">
                  {row.id}
                </td>

                {/* 1. Decision Maker (Static, no popups) */}
                <td className="py-3 px-4 whitespace-nowrap select-text">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg ${row.avatarBg} flex items-center justify-center text-[11px] font-semibold shrink-0 shadow-2xs`}
                    >
                      {row.avatarText}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 leading-tight">
                        {row.name}
                      </span>
                      <span className="text-[11.5px] text-gray-500 leading-tight">
                        {row.title}
                      </span>
                    </div>
                  </div>
                </td>

                {/* 2. LinkedIn Profile */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <a
                    href={`https://${row.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#F0F7FF] hover:bg-[#E0EFFF] border border-[#BFDBFE] text-[#0A66C2] text-[11.5px] font-medium transition-colors"
                  >
                    <LinkedInIcon size={13} />
                    <span className="truncate max-w-[140px]">
                      {row.linkedin.replace('linkedin.com/in/', '')}
                    </span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </td>

                {/* 3. Work Email */}
                <td className="py-3 px-4 whitespace-nowrap select-text">
                  <div className="flex items-center gap-1.5 text-gray-700 text-[12px]">
                    <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{row.email}</span>
                    <span
                      className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
                      title="Deliverability verified"
                    >
                      Verified
                    </span>
                  </div>
                </td>

                {/* 4. Lead Score */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] text-[11.5px] font-semibold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]/60">
                      {row.icpScore}% Match
                    </span>
                  </div>
                </td>

                {/* 5. Persona Tier */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-[5px] text-[11px] font-semibold border ${row.personaColor}`}
                  >
                    {row.persona}
                  </span>
                </td>

                {/* 6. Buying Intent Signal */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-[5px] text-[11px] font-medium ${row.intentColor}`}
                  >
                    {row.intentSignal}
                  </span>
                </td>

                {/* 7. Industry */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-[4px] text-[11px] font-medium ${row.industryColor}`}
                  >
                    {row.industry}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ICPTable;
