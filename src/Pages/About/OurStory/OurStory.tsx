import React from 'react';
import ciLogoSvg from '../../../assets/CiLogoforaboutus.svg';
import secondImage from '../../../assets/about/secondimage.jpg';

export const OurStory: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
            {/* Main Content Column */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24 sm:pb-32">
                {/* Header Block */}
                <header className="text-center mb-8 sm:mb-12">
                    <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B] mb-3 sm:mb-4">
                        Our Story
                    </p>

                    <h1 className="text-2xl sm:text-[36px] md:text-[42px] font-bold text-[#0D0D0D] tracking-[-0.03em] leading-[1.2] text-center">
                        <span className="block sm:whitespace-nowrap">Coirei Innovations</span>
                        <span className="block mt-1 sm:mt-1.5">Private Limited</span>
                    </h1>

                    {/* Intro paragraph */}
                    <p className="mt-6 sm:mt-8 font-medium text-[15px] sm:text-[16px] leading-[23px] sm:leading-[25px] tracking-normal text-center text-[#47464A] max-w-[760px] mx-auto">
                        COIREI Innovations Private Limited is a technology and innovation company building AI-native business solutions across Artificial Intelligence, Generative AI, AI agent engineering, intelligent automation and enterprise software.
                    </p>
                </header>

                {/* Image 1 - Brand showcase */}
                <div className="w-full my-8 sm:my-10 overflow-hidden shadow-xs flex justify-center">
                    <img
                        src={ciLogoSvg}
                        alt="COIREI Innovations"
                        className="w-full h-[500px] object-cover block"
                        loading="eager"
                    />
                </div>

                {/* Section 1 Content - Mission & Challenge */}
                <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
                    <p>
                        We turn emerging technologies into practical solutions for real business challenges, working at the intersection of AI, product engineering, business strategy and applied research. Businesses today struggle with scattered tools, manual workflows and inconsistent execution. We help them improve efficiency, automate complex workflows, strengthen decisions, enhance customer engagement and grow sustainably, with solutions designed around practical business needs rather than technology for its own sake.
                    </p>
                </div>

                {/* Section 2 - Our Products */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0D0D0D] tracking-[-0.02em] pt-10 sm:pt-14 mb-6 sm:mb-8 text-left">
                    Our Products
                </h2>

                <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">

                    <p>
                        <strong className="font-bold text-[#0D0D0D]">AI Go-To-Market (AI GTM).</strong> Our broader platform helps businesses plan, execute, optimise and scale their go-to-market operations. It brings intelligence, automation, customer context and coordinated AI workflows into one system covering target market identification, lead generation and qualification, pipeline management, consistent engagement and conversion of opportunities into revenue.
                    </p>

                    <p>
                        <strong className="font-bold text-[#0D0D0D]">Follei: Your Automated AI Voice Agent for Sales.</strong> Follei is a conversational AI product that reaches out to customers, calls leads and nurtures them automatically. Built as an agentic sales system, it has separate intelligence for lead nurturing and sentiment analysis, so every conversation is natural, context-aware and responsive to how the customer feels. Follei keeps engagement consistent and helps turn more leads into revenue without manual follow-up.
                    </p>
                    <p>
                        <strong className="font-bold text-[#0D0D0D]">Velei: AI-Powered Hiring, End to End.</strong> With Velei, companies simply type a job description in plain words or upload a document, and the AI builds a complete job post with requirements and every detail. Candidates can attend AI-led interviews and get hired through the platform, with mock interviews and preparation tools to help them succeed. Velei makes hiring faster for employers and more accessible for job seekers.
                    </p>

                </div>

                {/* Section 3 - Custom AI Solutions and Consulting */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0D0D0D] tracking-[-0.02em] pt-10 sm:pt-14 mb-6 sm:mb-8 text-left">
                    Custom AI Solutions and Consulting
                </h2>

                <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
                    <p>
                        We design and build business-specific AI agents and enterprise solutions for organisations across industries. We analyse business processes, identify opportunities for intelligent automation, design AI architectures, integrate data and applications, and deliver solutions for knowledge retrieval, conversational interfaces, workflow execution, decision support and operational intelligence. We also provide technology consulting to companies across India, helping them evaluate AI adoption, identify process inefficiencies and align implementation with business goals.
                    </p>
                </div>

                {/* Image 2 - Practical Sessions & Training */}
                <div className="w-full my-8 sm:my-10 overflow-hidden shadow-xs bg-neutral-100 flex justify-center">
                    <img
                        src={secondImage}
                        alt="COIREI Innovation & Training"
                        className="w-full h-auto object-cover block"
                        loading="lazy"
                    />
                </div>

                {/* Section 4 - Technology and Approach */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0D0D0D] tracking-[-0.02em] pt-6 sm:pt-8 mb-6 sm:mb-8 text-left">
                    Technology and Approach
                </h2>

                <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
                    <p>
                        Our expertise spans Generative AI and Large Language Models, Retrieval-Augmented Generation (RAG), Natural Language Processing, Conversational and Voice AI, intelligent workflow automation, multi-agent systems, API integrations, data-driven analytics and AI-enabled enterprise applications. We follow a product-oriented, problem-driven approach: understanding requirements, evaluating feasibility, designing architecture, prototyping, testing, integrating and improving continuously. Great AI needs more than powerful models, so we pay close attention to data management, system integration, security and responsible deployment.
                    </p>
                </div>

                {/* Section 5 - Why COIREI */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0D0D0D] tracking-[-0.02em] pt-10 sm:pt-14 mb-6 sm:mb-8 text-left">
                    Why COIREI
                </h2>

                <div className="space-y-5 sm:space-y-6 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
                    <p>
                        <strong className="font-bold text-[#0D0D0D]">AI Industry Experience:</strong> Building practical AI solutions for real-world business challenges.
                    </p>
                    <p>
                        <strong className="font-bold text-[#0D0D0D]">Global Research and Consulting:</strong> Experience across international research and enterprise AI consulting.
                    </p>
                    <p>
                        <strong className="font-bold text-[#0D0D0D]">AI Training and Education:</strong> Empowering students and professionals through AI and emerging technology.
                    </p>
                    <p>
                        <strong className="font-bold text-[#0D0D0D]">Entrepreneurship and Leadership:</strong> Leading COIREI to build intelligent products that solve real business problems.
                    </p>
                </div>

                {/* Image 3 - Collaboration & Partnerships */}
                {/* <div className="w-full my-8 sm:my-10 overflow-hidden shadow-xs bg-neutral-100 flex justify-center">
                    <img
                        src={signingImg}
                        alt="Industry-Academia MOU Signing"
                        className="w-full h-auto object-cover block"
                        loading="lazy"
                    />
                </div> */}

                {/* Section 6 - Industry–Academia Collaboration */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0D0D0D] tracking-[-0.02em] pt-6 sm:pt-8 mb-6 sm:mb-8 text-left">
                    Industry–Academia Collaboration
                </h2>

                <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
                    <p>
                        We bridge academic learning and industry needs through industry-oriented training, curriculum support, practical workshops, project-based learning, applied research and mentoring. Students experience the full engineering lifecycle, from problem identification and design to testing, integration and deployment, building technical competence, teamwork, communication and professional engineering practices. Institutions gain more relevant programmes, students gain real-world skills, and industry gains knowledge exchange.
                    </p>
                </div>

                {/* Section 7 - Our Vision and Partnerships */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0D0D0D] tracking-[-0.02em] pt-10 sm:pt-14 mb-6 sm:mb-8 text-left">
                    Our Vision and Partnerships
                </h2>

                <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
                    <p>
                        We aim to build intelligent, integrated and commercially relevant technology solutions while fostering innovation, continuous learning and industry-ready skills, driving the practical adoption of AI across business and education. We welcome collaborations with educational institutions and organisations in AI, Generative AI, AI agent engineering, software development, go-to-market technology, training, applied research and innovation. Scope and deliverables are mutually agreed and documented in an MoU or other applicable agreement.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default OurStory;
