import React from 'react';
import firstMeetImg from '../../../assets/about/firstmeetimg.svg';
import secondMeetGreenShirt from '../../../assets/about/secondmeetgreenshirt.svg';
import thirdImageHall from '../../../assets/about/thirdimagehall.svg';
import ideathonImage from '../../../assets/about/ideathonimage.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface ImpactCardItem {
  id: string;
  title: string;
  description: string;
}

const IMPACT_CARDS: ImpactCardItem[] = [
  {
    id: '01',
    title: 'Cybersecurity event',
    description:
      'Invited as the Chief Guest at SRM University for a Cybersecurity event, engaging with students and sharing practical insights on cybersecurity, emerging threats, and the future of digital security.',
  },
  {
    id: '02',
    title: 'E-Summit Ideathon',
    description:
      "Invited as a Jury Member and Chief Guest at SRM IST's Ideathon, sharing insights with young innovators and reflecting on the journey from being a student participant to inspiring the next generation of builders",
  },
  {
    id: '03',
    title: 'Innovation & Industry Engagement',
    description:
      'Returned to SRM University as a Mentor, Jury Member, and Chief Guest at the THREX Hackathon, inspiring young builders while learning from their ambitious ideas and fresh perspectives.',
  },
];

export const IdeasToImpact: React.FC = () => {
  return (
    <section className="w-full bg-white pt-8 sm:pt-14 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
      <div className="max-w-[1216px] mx-auto text-left">
        {/* Section Heading & Subtitle */}
        <ScrollReveal variant="fade-up" duration={700} distance={20} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#0B0F19] tracking-[-1.2px] leading-[1.18] mb-3 sm:mb-4">
            Our Presence in the Ecosystem
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[15.5px] text-[#64748B] font-normal leading-relaxed max-w-2xl mx-auto">
            From industry discussions to academic communities, Coirei actively participates in conversations shaping the future of technology.
          </p>
        </ScrollReveal>

        {/* Photo Mosaic / Collage matching Figma coordinates and dimensions */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[35px] mb-14 sm:mb-18 md:mb-20">
          {/* 1. Large Conference Hall Photo (Figma: 626px × 417px, radius 20px) */}
          <div className="w-full lg:w-[626px] shrink-0">
            <img
              src={firstMeetImg}
              alt="Conference Presentation and Industry Engagement"
              className="w-full h-auto block"
            />
          </div>

          {/* Middle & Right Cluster */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-[24px] w-full">
            {/* Middle Column: Two photos */}
            <div className="flex flex-col gap-5 sm:gap-6 w-full sm:w-[298px] shrink-0">
              {/* 2. Top Photo: Three people sitting (Figma: 289.8px × 193.26px, radius 20px, rotation built into SVG) */}
              <div className="w-full">
                <img
                  src={secondMeetGreenShirt}
                  alt="Discussion and collaboration"
                  className="w-full h-auto block"
                />
              </div>

              {/* 3. Bottom Photo: Crowd in hall (radius 30px built into SVG) */}
              <div className="w-full">
                <img
                  src={thirdImageHall}
                  alt="Community Gathering"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* 4. Right Photo: Ideathon (Figma: 243.33px × 227.74px, radius 30px, rotation built into SVG) */}
            <div className="w-full sm:w-[255px] shrink-0 self-center sm:mt-10 lg:mt-16">
              <img
                src={ideathonImage}
                alt="Ideathon Team"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Bottom 3 Feature Cards (Matching exact design: Large 01/02/03 watermark, crisp card, subtle border & shadow, clean typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 w-full">
          {IMPACT_CARDS.map((card, idx) => (
            <ScrollReveal
              key={card.id}
              variant="fade-up"
              duration={650}
              distance={20}
              delay={idx * 120}
              className="h-full"
            >
              <div className="h-full bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col justify-start text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)]  transition-all duration-300">
                {/* Big Soft Light Number */}
                <div className="mb-6 sm:mb-7 select-none">
                  <span
                    className="block text-[88px] sm:text-[96px] lg:text-[104px] font-extrabold text-[#EDEDED] leading-[0.8] tracking-[-0.03em] -ml-6 -mt-5"
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    {card.id}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#111827] tracking-[-0.01em] mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14px] sm:text-[14.5px] text-[#4B5563] font-normal leading-[1.62]">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeasToImpact;