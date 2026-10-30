import React from 'react';

export const PersonalizationSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F7F7FB] text-[#080817] font-['Plus_Jakarta_Sans',sans-serif] rounded-t-[32px] sm:rounded-t-[48px] overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-32 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1440px] mx-auto text-left">
        {/* Header Grid: Tag on Left, Big Headline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-[#080817]/[0.08]">
          {/* Top-Left Tag */}
          <div className="lg:col-span-3 pt-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#080817] uppercase">
              <span className="w-2 h-2 rounded-[1px] " />
              PERSONALIZATION
            </span>
          </div>

          {/* Headline (Figma Specs: 57.24px / 70.1px line-height / 500 weight / 0.15px letter spacing / #7617D0 -> #837193) */}
          <div className="lg:col-span-9">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[32px] sm:text-[44px] lg:text-[57.24px] leading-[1.22] lg:leading-[70.1px] tracking-[0.15px] max-w-[989px]">
              <span
                className="bg-clip-text text-transparent inline"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #7617D0 0%, #837193 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Make Every Message Feel Personal.
              </span>{' '}
              <span className="text-[#080817]">
                Coirei tailors messages to each lead’s interests, conversations, and buying intent.
              </span>
            </h2>
          </div>
        </div>

        {/* Content Section: Left Column (Blurb) & Right Column (3 Rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-2.5 sm:pt-3">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <p className="font-normal text-[13px] sm:text-[14px] leading-[23px] text-[#64748B] max-w-[340px]">
              Having protein dynamics at our fingertips changes what we can ask of biology. We can learn what life's essential molecules do, not just what they look like.
            </p>
          </div>

          {/* Right Column: 3 Architectural Feature Rows */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#080817]/[0.08]">
            {/* Row 1: Predict */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 pb-12 sm:pb-20">
              <div className="sm:col-span-3">
                <h3 className="font-bold text-[17px] sm:text-[18px] text-[#080817]">
                  Personalize
                </h3>
              </div>
              <div className="sm:col-span-9 flex sm:justify-end">
                <p className="w-full sm:w-[450px] font-normal text-[13px] sm:text-[14px] leading-[23px] text-[#64748B]">
                  Coirei analyzes each lead’s interests, previous conversations, and buying intent to create relevant messages that feel personal and build stronger customer relationships.
                </p>
              </div>
            </div>

            {/* Row 2: Design */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 pt-2.5 sm:pt-3 pb-12 sm:pb-20">
              <div className="sm:col-span-3">
                <h3 className="font-bold text-[17px] sm:text-[18px] text-[#080817]">
                  Adapt
                </h3>
              </div>
              <div className="sm:col-span-9 flex sm:justify-end">
                <p className="w-full sm:w-[450px] font-normal text-[13px] sm:text-[14px] leading-[23px] text-[#64748B]">
                  Adjust messaging based on customer behavior, preferences, and engagement to make every interaction more meaningful.
                </p>
              </div>
            </div>

            {/* Row 3: Engineer */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 pt-2.5 sm:pt-3 pb-12 sm:pb-20">
              <div className="sm:col-span-3">
                <h3 className="font-bold text-[17px] sm:text-[18px] text-[#080817]">
                  Convert
                </h3>
              </div>
              <div className="sm:col-span-9 flex sm:justify-end">
                <p className="w-full sm:w-[450px] font-normal text-[13px] sm:text-[14px] leading-[23px] text-[#64748B]">
                  Deliver the right message at the right time to nurture leads, build trust, and move them closer to conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;
