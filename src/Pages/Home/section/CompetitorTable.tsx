import React, { useState } from "react";
import { Plus, X, Users } from "lucide-react";
import type { Competitor } from "./types";

// Iconsax ExportSquare Icon matching Conversation & analysis page
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

export interface CompetitorTableProps {
  data: Competitor[];
  totalCount: number;
  selectedRows: number[];
  onToggleSelectAll: () => void;
  selectedCompany: Competitor | null;
  onSelectCompany: (company: Competitor) => void;
}

export const CompetitorTable: React.FC<CompetitorTableProps> = ({
  data,
  totalCount,
  selectedRows,
  onToggleSelectAll,
  selectedCompany,
  onSelectCompany,
}) => {
  const [customColumns, setCustomColumns] = useState<string[]>([]);

  const handleAddColumn = () => {
    setCustomColumns((prev) => [...prev, `Column ${prev.length + 1}`]);
  };

  const removeCustomColumn = (indexToRemove: number) => {
    setCustomColumns((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="flex-1 h-full overflow-y-auto overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse min-w-[1520px]">
        <thead className="sticky top-0 bg-[#FFFFFF] z-10">
          <tr className="border-b border-[#EAE6DF] divide-x divide-[#EAE6DF] text-[12px] font-semibold text-gray-500 h-[45px]">
            <th className="sticky left-0 z-20 bg-white py-3 px-4 w-12 text-center border-r border-[#EAE6DF]">
              <input
                type="checkbox"
                checked={selectedRows.length === totalCount && totalCount > 0}
                onChange={onToggleSelectAll}
                className="rounded border-gray-300 text-black focus:ring-black cursor-pointer"
              />
            </th>
            {/* Order: 1. Name */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Name</th>
            {/* Order: 2. Website */}
            <th className="py-3 px-6 font-medium text-gray-600 whitespace-nowrap">Website</th>
            {/* Order: 3. Social Handling */}
            <th className="py-3 px-6 font-medium text-gray-600 whitespace-nowrap">Social Handling</th>
            {/* Order: 4. Company Industry */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Company Industry</th>
            {/* Order: 5. Business Model */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Business Model</th>
            {/* Order: 6. Similarity Score */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Similarity Score</th>
            {/* Order: 7. HQ Location */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">HQ Location</th>
            {/* Order: 8. Product Type */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Product Type</th>
            {/* 9. Pricing Structure */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Pricing Structure</th>
            {/* 10. Employee Count */}
            <th className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">Employee Count</th>

            {/* Dynamic Custom Columns */}
            {customColumns.map((colName, idx) => (
              <th
                key={idx}
                className="py-3 px-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50/40 group/th"
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{colName}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCustomColumn(idx);
                    }}
                    className="opacity-0 group-hover/th:opacity-100 text-gray-400 hover:text-red-500 transition-opacity p-0.5 rounded cursor-pointer"
                    title="Delete column"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </th>
            ))}

            {/* Add Column Trigger */}
            <th className="py-3 px-4 font-medium text-gray-500 whitespace-nowrap bg-gray-50/60 hover:bg-gray-100/80 transition-colors">
              <button
                type="button"
                onClick={handleAddColumn}
                className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 hover:text-black cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-gray-500 stroke-[2.5]" />
                <span>Add Column</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3F4F6] text-[13px]">
          {data.map((row) => {
            const isSelected = selectedCompany?.id === row.id;
            return (
              <tr
                key={row.id}
                onClick={() => onSelectCompany(row)}
                className={`transition-colors cursor-pointer group divide-x divide-[#EAE6DF] ${
                  isSelected ? "bg-[#F9FAFB]" : "hover:bg-gray-50/70"
                }`}
              >
                {/* Selection / Index */}
                <td
                  className={`sticky left-0 z-10 py-3.5 px-4 text-center text-[#94A3B8] font-medium text-[13px] w-12 border-r border-[#EAE6DF] ${
                    isSelected ? "bg-[#F9FAFB]" : "bg-white group-hover:bg-[#F9FAFB]"
                  }`}
                >
                  {row.displayIndex ?? row.id}
                </td>

                {/* 1. Name */}
                <td className="py-3.5 px-4 font-semibold text-gray-900 whitespace-nowrap">
                  {row.name}
                </td>

                {/* 2. Website */}
                <td className="py-3.5 px-6 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-5 h-5 rounded-md ${row.faviconBg} flex items-center justify-center text-[10px] font-semibold uppercase shrink-0 ${
                        row.name === "ro" ? "text-black text-[12px] font-semibold lowercase" : "text-white"
                      }`}
                    >
                      {row.faviconText}
                    </div>
                    <a
                      href={row.website}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-600 hover:text-black truncate max-w-[200px]"
                    >
                      {row.website}
                    </a>
                    <a
                      href={row.website}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="size-5 rounded-[6px] border border-black/10 bg-white flex items-center justify-center text-[#64748B] hover:text-[#0F172A] opacity-0 group-hover:opacity-100 transition-all shrink-0 cursor-pointer"
                      style={{ boxShadow: "inset -4px -4px 4px rgba(0, 0, 0, 0.03)" }}
                      title="Open website"
                    >
                      <ExportSquareIcon size={12} className="text-[#64748B] hover:text-[#0F172A]" />
                    </a>
                  </div>
                </td>

                {/* 3. Social Handling */}
                <td className="py-3.5 px-6 text-gray-500 whitespace-nowrap">
                  {row.social}
                </td>

                {/* 4. Company Industry */}
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2 py-[1.5px] rounded-[4px] text-[11px] font-medium leading-none ${row.industryColor}`}
                  >
                    {row.industry}
                  </span>
                </td>

                {/* 5. Business Model */}
                <td className="py-3.5 px-4 text-gray-700 whitespace-nowrap">
                  <span className="text-[13px]">{row.businessModel}</span>
                </td>

                {/* 6. Similarity Score */}
                <td className="py-3.5 px-4 text-gray-900 font-medium whitespace-nowrap">
                  {row.similarityScore}%
                </td>

                {/* 7. HQ Location */}
                <td className="py-3.5 px-4 text-gray-600 whitespace-nowrap">
                  {row.hqLocation}
                </td>

                {/* 8. Product Type */}
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="text-gray-800 font-medium text-[13px]">
                    {row.productType}
                  </span>
                </td>

                {/* 9. Pricing Structure */}
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]">
                    {row.pricingStructure}
                  </span>
                </td>

                {/* 10. Employee Count */}
                <td className="py-3.5 px-4 text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gray-400 shrink-0 stroke-[1.8]" />
                    <span>{row.employeeCount}</span>
                  </div>
                </td>

                {/* Custom Columns Blank Cells */}
                {customColumns.map((_, idx) => (
                  <td
                    key={idx}
                    className="py-3.5 px-4 whitespace-nowrap"
                  ></td>
                ))}

                {/* Blank Cell under Add Column */}
                <td className="py-3.5 px-4 bg-gray-50/10"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitorTable;
