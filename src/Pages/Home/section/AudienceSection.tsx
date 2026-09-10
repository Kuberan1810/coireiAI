import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import rightWhiteCardImg from '../../../assets/RightWhiteCardSection.png';

interface BenefitItem {
  id: number;
  text: string;
}

const b2bBenefits: BenefitItem[] = [
  { id: 1, text: 'Find high-intent companies and decision makers' },
  { id: 2, text: 'Enrich and qualify leads automatically' },
  { id: 3, text: 'Run personalized email outreach campaigns' },
  { id: 4, text: 'Get more meetings and close more deals' },
];

const b2cBenefits: BenefitItem[] = [
  { id: 1, text: 'Find high-intent consumer segments and target buyers' },
  { id: 2, text: 'Enrich customer profiles with behavioral data' },
  { id: 3, text: 'Run personalized omnichannel outreach campaigns' },
  { id: 4, text: 'Boost conversion rates and maximize customer lifetime value' },
];

export const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'B2B' | 'B2C'>('B2B');

  const currentBenefits = activeTab === 'B2B' ? b2bBenefits : b2cBenefits;

  return (
    <section className="GlobalPadding w-full bg-white relative overflow-hidden flex items-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Card Image */}
          <div className="w-full flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-[560px] relative group transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={rightWhiteCardImg}
                alt="High-quality leads, on autopilot"
                className="w-full h-auto object-contain rounded-[24px] sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-800/10"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full flex flex-col justify-center order-1 lg:order-2">
            {/* Top Bar: Toggle & Badge */}
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              {/* Segmented Control / Toggle */}
              <div className="inline-flex p-1 bg-[#F1F5F9] rounded-full border border-slate-200/80 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('B2B')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === 'B2B'
                      ? 'bg-[#0B0F19] text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  B2B
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('B2C')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === 'B2C'
                      ? 'bg-[#0B0F19] text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  B2C
                </button>
              </div>

              {/* Tag / Badge */}
              <div className="toggle">
                BUILT FOR B2B AND B2C
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.18] mb-8">
              Whether you're selling to businesses or consumers, we've got you covered.
            </h2>

            {/* Features Checklist */}
            <ul className="space-y-4 sm:space-y-5">
              {currentBenefits.map((item) => (
                <li key={item.id} className="flex items-center gap-3.5 text-neutral-600 sm:text-base text-sm font-medium">
                  <CheckCircle2
                    className="w-5 h-5 text-[#3B82F6] shrink-0"
                    strokeWidth={1.75}
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
