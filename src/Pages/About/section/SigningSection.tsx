import React from 'react';
import signingImg from '../../../assets/about/signing.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const SigningSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1180px] mx-auto">
        <ScrollReveal variant="fade-up" duration={750} distance={20}>
          <div className="bg-[#F3F3F4] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#EEF2F6] flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column: Signing Photo */}
            <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 flex justify-center">
              <img
                src={signingImg}
                alt="Building Partnerships for Innovation"
                className="w-full h-auto object-cover block select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Right Column: Title, Subtitle, Description */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0D0D0D] tracking-tight leading-[1.25]">
                Building Partnerships for Innovation
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[15.5px] text-[#64748B] font-normal mt-2 sm:mt-2.5 leading-relaxed">
                Strengthening the bridge between industry, education, and emerging technology.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333333] font-normal leading-[1.72] mt-5 sm:mt-6">
                Coirei Innovations joined hands with Jeppiaar Institute of Technology through a Memorandum of Understanding (MOU), marking a step toward deeper collaboration in technology, innovation, and AI. The partnership reflects a shared commitment to creating meaningful opportunities for students, advancing industry-oriented learning, and fostering the next generation of technology talent.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SigningSection;
