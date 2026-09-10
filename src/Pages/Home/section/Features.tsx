
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    Users,
    ShieldCheck,
    Zap,
    Megaphone,
    Sparkles,
    BarChart3,
} from 'lucide-react';

interface FeatureCard {
    id: string;
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    description: string;
}

const featuresList: FeatureCard[] = [
    {
        id: 'market-analysis',
        icon: <Search className="w-5 h-5 text-[#2563EB]" />,
        iconBg: 'bg-[#EFF6FF]',
        title: 'Market & Competitor Analysis',
        description: 'Deep research, real insights.',
    },
    {
        id: 'audience-intel',
        icon: <Users className="w-5 h-5 text-[#6366F1]" />,
        iconBg: 'bg-[#EEF2FF]',
        title: 'Audience Intelligence',
        description: 'Find where your customers are.',
    },
    {
        id: 'gtm-strategy',
        icon: <ShieldCheck className="w-5 h-5 text-[#F43F5E]" />,
        iconBg: 'bg-[#FFF1F2]',
        title: 'GTM Strategy',
        description: 'Positioning, messaging, channels.',
    },
    {
        id: 'lead-generation',
        icon: <Zap className="w-5 h-5 text-[#D97706]" />,
        iconBg: 'bg-[#FFFBEB]',
        title: 'Lead Generation (B2B)',
        description: 'Find, enrich and qualify leads.',
    },
    {
        id: 'ad-campaigns',
        icon: <Megaphone className="w-5 h-5 text-[#9333EA]" />,
        iconBg: 'bg-[#FAF5FF]',
        title: 'Ad Campaigns (B2C)',
        description: 'Create, launch and optimise.',
    },
    {
        id: 'autonomous-execution',
        icon: <Sparkles className="w-5 h-5 text-[#0891B2]" />,
        iconBg: 'bg-[#ECFEFF]',
        title: 'Autonomous Execution',
        description: 'Run campaigns & outreach 24/7.',
    },
    {
        id: 'revenue-analytics',
        icon: <BarChart3 className="w-5 h-5 text-[#059669]" />,
        iconBg: 'bg-[#ECFDF5]',
        title: 'Revenue Attribution',
        description: 'Track pipeline from day one.',
    },
];

export const Features: React.FC = () => {
    // Duplicate the list for infinite continuous marquee loop
    const marqueeItems = [...featuresList, ...featuresList];

    return (
        <section className="GlobalPading w-full bg-white overflow-hidden">
            <div className=" ">
                {/* Top Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
                    {/* Left Column: Badge, Title & Button */}
                    <div className="lg:col-span-7 text-left">
                        {/* Pill Badge */}
                        <div className="mb-5">
                            <div className="toggle">
                                FEATURES
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#0F172A] tracking-tight leading-[1.18]">
                            Everything you need to go <br className="hidden sm:inline" />
                            from strategy to revenue
                        </h2>

                        {/* Explore Button */}
                        <div className="mt-8">
                            <Link
                                to="/product"
                                className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-neutral-800 text-white text-[14.5px] font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
                            >
                                <span>Explore all features</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Explanatory Subtext */}
                    <div className="lg:col-span-5 text-left lg:pt-14">
                        <p className="text-neutral-500 text-base md:text-[17px] leading-relaxed font-normal">
                            Coirei brings together AI-powered research, strategy and execution — so you can reach the right audience, with the right message, at the right time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Infinite Horizontal Looping Marquee Track */}
            <div className="mt-16 w-full relative overflow-hidden py-4">
                {/* Soft edge gradient fade masks */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

                <div className="animate-marquee gap-6 px-4">
                    {marqueeItems.map((feature, idx) => (
                        <div
                            key={`${feature.id}-${idx}`}
                            className="w-72 sm:w-80 shrink-0 bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[170px] text-left group cursor-pointer"
                        >
                            {/* Icon Container */}
                            <div
                                className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 transition-transform group-hover:scale-105`}
                            >
                                {feature.icon}
                            </div>

                            {/* Text Information */}
                            <div>
                                <h3 className="text-[15px] sm:text-base font-bold text-neutral-900 tracking-tight group-hover:text-Black transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="mt-1 text-[13px] text-neutral-500 font-normal">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
