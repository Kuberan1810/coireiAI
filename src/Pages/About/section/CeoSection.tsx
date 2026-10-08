import React from 'react';
import { Link } from 'react-router-dom';
import ceoImg from '../../../assets/about/ceo.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

interface HighlightItem {
    title: string;
    description: string;
}

const HIGHLIGHTS: HighlightItem[] = [
    {
        title: 'AI Industry Experience',
        description: 'Building practical AI solutions for real-world business challenges.',
    },
    {
        title: 'Global Research & Consulting',
        description: 'Experience across international research and enterprise AI consulting.',
    },
    {
        title: 'AI Training & Education',
        description: 'Empowering students and professionals through AI and emerging technology.',
    },
    {
        title: 'Entrepreneurship & Leadership',
        description: 'Leading Coirei to build intelligent products that solve real business problems.',
    },
];

export const CeoSection: React.FC = () => {
    return (
        <section className="w-full bg-white pt-10 sm:pt-14 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
            <div className="max-w-[1180px] mx-auto text-left">
                {/* Section Header */}
                <ScrollReveal variant="fade-up" duration={700} distance={20} className="mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B0F19] tracking-[-1px] leading-[1.2]">
                        Meet The Founder
                    </h2>
                    <p className="mt-2 font-normal italic text-[15px] sm:text-[16px] text-[#64748B]">
                        The vision and leadership behind Coirei.
                    </p>
                </ScrollReveal>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column: Founder Card with Photo & Quote */}
                    <div className="lg:col-span-7">
                        <ScrollReveal variant="fade-up" duration={750} distance={20}>
                            <div className="bg-[#F8F8FF] rounded-r-[32px] rounded-l-[110px]  flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pr-5 ">
                                {/* Arch-shaped Founder Image */}
                                <div className="w-[180px] sm:w-[195px] md:w-[210px] shrink-0 flex justify-center">
                                    <img
                                        src={ceoImg}
                                        alt="Naveen Kumar - Founder & CEO"
                                        className="w-full h-auto object-contain block select-none pointer-events-none"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Quote text */}
                                <div className="flex-1 text-left">
                                    <p className="text-[14px] sm:text-[15px] md:text-[19px] text-[#2A2C33] font-normal leading-[1.72] tracking-normal">
                                        “At Coirei, we’re building more than just another AI platform. We’re creating intelligence that helps businesses understand their market, discover meaningful opportunities, and make confident decisions. Our vision is to bring powerful technology closer to every business and turn complexity into clarity, insight, and action.”
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Highlights & View More Button */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left h-full">
                        <ScrollReveal variant="fade-up" duration={800} distance={20}>
                            <div className="divide-y divide-[#E6EBF1]">
                                {HIGHLIGHTS.map((item, idx) => (
                                    <div
                                        key={item.title}
                                        className={`py-3.5 sm:py-4 ${idx === 0 ? 'pt-0' : ''}`}
                                    >
                                        <h3 className="text-[15px] sm:text-[15.5px] font-semibold text-[#0B0F19] leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[12.5px] sm:text-[13px] text-[#64748B] mt-1 font-normal leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* View more CTA Button linking to /about/ceo */}
                            <div className="pt-5 sm:pt-6">
                                <Link
                                    to="/about/ceo"
                                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1E232B] hover:bg-black text-white text-[13.5px] sm:text-[14px] font-medium leading-[20px] transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                                >
                                    View more
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CeoSection;
