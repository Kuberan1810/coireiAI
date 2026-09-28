import React from 'react';
import { Globe, Sparkles } from 'lucide-react';

interface CompanyRow {
  id: number;
  name: string;
  website: string;
  industry: string;
  industryBg: string;
  industryColor: string;
  logoBg: string;
  logoText: string;
  logoTextColor: string;
  ceoAvatar?: string;
  ceoLinkedin?: string;
}

const COMPANIES: CompanyRow[] = [
  {
    id: 1,
    name: 'clay',
    website: 'http://clay.run/',
    industry: 'MarTech',
    industryBg: 'bg-[#F3E8FF]',
    industryColor: 'text-[#9333EA]',
    logoBg: 'bg-[#FF4F00]',
    logoText: 'C',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/kareem-amin/',
  },
  {
    id: 2,
    name: 'ramp',
    website: 'http://ramp.com/',
    industry: 'FinTech',
    industryBg: 'bg-[#E0F2FE]',
    industryColor: 'text-[#0284C7]',
    logoBg: 'bg-[#E4F835]',
    logoText: '↗',
    logoTextColor: 'text-black',
    ceoAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/eric-glyman/',
  },
  {
    id: 3,
    name: 'Cursor',
    website: 'https://cursor.com/',
    industry: 'Developer Tools',
    industryBg: 'bg-[#FEF3C7]',
    industryColor: 'text-[#D97706]',
    logoBg: 'bg-black',
    logoText: '⌘',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/anysphere/',
  },
  {
    id: 4,
    name: 'plaid',
    website: 'https://www.plaid.com/',
    industry: 'FinTech',
    industryBg: 'bg-[#E0F2FE]',
    industryColor: 'text-[#0284C7]',
    logoBg: 'bg-black',
    logoText: '▦',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/zach-perret/',
  },
  {
    id: 5,
    name: 'ro',
    website: 'https://ro.co/weight-loss/we/',
    industry: 'HealthTech',
    industryBg: 'bg-[#F3E8FF]',
    industryColor: 'text-[#9333EA]',
    logoBg: 'bg-black',
    logoText: 'ro',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/zachariah-reitano/',
  },
  {
    id: 6,
    name: 'airtable',
    website: 'http://airtable.com/',
    industry: 'B2B SaaS',
    industryBg: 'bg-[#EDE9FE]',
    industryColor: 'text-[#7C3AED]',
    logoBg: 'bg-[#FCB400]',
    logoText: '◬',
    logoTextColor: 'text-black',
    ceoAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/howie-liu/',
  },
  {
    id: 7,
    name: 'amplitude',
    website: 'https://amplitude.com/',
    industry: 'Data & Analytics',
    industryBg: 'bg-[#FEF3C7]',
    industryColor: 'text-[#D97706]',
    logoBg: 'bg-[#1D4ED8]',
    logoText: '▲',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/spenser-skates/',
  },
  {
    id: 8,
    name: 'Scopely',
    website: 'http://scopely.com/',
    industry: 'Consumer',
    industryBg: 'bg-[#FFE4E6]',
    industryColor: 'text-[#E11D48]',
    logoBg: 'bg-black',
    logoText: '✕',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/walter-driver/',
  },
  {
    id: 9,
    name: 'Solugen',
    website: 'https://solugen.com/',
    industry: 'CleanTech',
    industryBg: 'bg-[#DCFCE7]',
    industryColor: 'text-[#16A34A]',
    logoBg: 'bg-black',
    logoText: '✦',
    logoTextColor: 'text-emerald-400',
    ceoAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/gaurab-chakrabarti/',
  },
  {
    id: 10,
    name: 'stripe',
    website: 'http://stripe.com/',
    industry: 'FinTech',
    industryBg: 'bg-[#E0F2FE]',
    industryColor: 'text-[#0284C7]',
    logoBg: 'bg-[#635BFF]',
    logoText: 'S',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/patrick-collison/',
  },
  {
    id: 11,
    name: 'warp',
    website: 'https://warp.dev/',
    industry: 'Developer Tools',
    industryBg: 'bg-[#FEF3C7]',
    industryColor: 'text-[#D97706]',
    logoBg: 'bg-black',
    logoText: '>',
    logoTextColor: 'text-[#00FFA3]',
    ceoAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/zach-lloyd/',
  },
  {
    id: 12,
    name: 'zipline',
    website: 'http://www.flyzipline.com/',
    industry: 'Logistics & Supply Chain',
    industryBg: 'bg-[#FFEDD5]',
    industryColor: 'text-[#EA580C]',
    logoBg: 'bg-[#E11D48]',
    logoText: 'Z',
    logoTextColor: 'text-white',
    ceoAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face',
    ceoLinkedin: 'https://www.linkedin.com/in/keller-rinaudo/',
  },
];

export const CompetitorAgentTable: React.FC = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col overflow-hidden select-none pointer-events-none text-left">
      {/* Top Bar Header */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white border-b border-slate-100 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-[#EB6658] shrink-0" />
        <span className="text-[12px] font-semibold text-slate-800 tracking-tight">
          scrape all the competitors
        </span>
      </div>

      {/* Spreadsheet Table Container */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto max-h-[340px] no-scrollbar">
        <table className="w-full border-collapse text-left text-[11.5px] whitespace-nowrap">
          {/* Table Header */}
          <thead className="bg-[#FAFBFD] sticky top-0 z-10 border-b border-slate-100 text-slate-400 font-normal">
            <tr>
              <th className="w-7 pl-3 pr-1 py-2 text-center">
                <div className="w-3 h-3 rounded-[3px] border border-slate-300 mx-auto" />
              </th>
              <th className="w-5 px-1 py-2 text-slate-300 font-normal">#</th>
              <th className="px-2.5 py-2 font-normal text-slate-500">name</th>
              <th className="px-2.5 py-2 font-normal text-slate-500">website</th>
              <th className="px-3 py-2 font-normal text-slate-500 pr-4">
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Company Industry</span>
                </span>
              </th>
            </tr>
          </thead>

          {/* Table Body - Non-clickable, display-only */}
          <tbody className="divide-y divide-slate-100/80 bg-white">
            {COMPANIES.map((company) => {
              const isChecked = company.id <= 4;

              return (
                <tr
                  key={company.id}
                  className={isChecked ? 'bg-[#EB6658]/[0.05]' : ''}
                >
                  {/* Static Checkbox */}
                  <td className="pl-3 pr-1 py-2 text-center">
                    <div
                      className={`w-3 h-3 rounded-[3px] border mx-auto flex items-center justify-center ${isChecked
                        ? 'bg-[#EB6658] border-[#EB6658] text-white'
                        : 'border-slate-300 bg-white'
                        }`}
                    >
                      {isChecked && (
                        <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.2L4.8 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </td>

                  {/* Row Number */}
                  <td className="px-1 py-2 text-slate-400 text-[10.5px] font-mono">
                    {company.id}
                  </td>

                  {/* Company Name */}
                  <td className="px-2.5 py-2 font-medium text-slate-900">
                    {company.name}
                  </td>

                  {/* Website with Favicon */}
                  <td className="px-2.5 py-2">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <div
                        className={`w-3.5 h-3.5 rounded-[3px] flex items-center justify-center font-semibold text-[8px] shrink-0 shadow-2xs ${company.logoBg} ${company.logoTextColor}`}
                      >
                        {company.logoText}
                      </div>
                      <span className="text-slate-500 max-w-[125px] truncate">
                        {company.website}
                      </span>
                    </div>
                  </td>

                  {/* Industry Badge Pill */}
                  <td className="px-3 py-2 pr-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-medium ${company.industryBg} ${company.industryColor}`}
                    >
                      {company.industry}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitorAgentTable;
