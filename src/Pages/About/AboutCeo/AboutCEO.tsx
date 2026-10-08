import React from 'react';

import firstImage from "../../../assets/about/firstimage.jpg"
import secondImage from '../../../assets/about/secondimage.jpg';
import lastImage from '../../../assets/about/lastimage.jpg';

export const AboutCEO: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Main Content Column */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24 sm:pb-32">
        {/* Header Block */}
        <header className="text-center mb-8 sm:mb-12">
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B] mb-3 sm:mb-4">
            ABOUT CEO
          </p>

          <h1 className="text-2xl sm:text-[36px] md:text-[42px] font-bold text-[#0D0D0D] tracking-[-0.03em] leading-[1.2] text-center">
            <span className="block sm:whitespace-nowrap">The Journey, Vision, and Leadership</span>
            <span className="block mt-1 sm:mt-1.5">Behind Coirei</span>
          </h1>

          {/* Intro paragraph matching Figma specs: Plus Jakarta Sans, Bold 700, 24px, line-height 30.1px, #47464A */}
          <p className="mt-6 sm:mt-8 font-medium text-[15px] sm:text-[16px] leading-[23px] sm:leading-[25px] tracking-normal text-center text-[#47464A] max-w-[720px] mx-auto">
            Naveen Kumar is the Founder and Chief Executive Officer of Coirei Innovations Private<br className="hidden sm:inline" /> Limited, an AI–focused technology company building intelligent systems and<br className="hidden sm:inline" /> solutions for modern businesses.
          </p>
        </header>

        {/* Image 1 (from downloads/firstimage.svg) */}
        <div className="w-full my-8 sm:my-10  overflow-hidden shadow-xs bg-neutral-100 flex justify-center">
          <img
            src={firstImage}
            alt="Naveen Kumar addressing audience at seminar"
            className="w-full h-auto object-cover block"
            loading="eager"
          />
        </div>

        {/* Section 1 Content */}
        <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
          <p>
            Naveen began his professional career in Artificial Intelligence in 2022 as an AI Engineer at Optimeyes.ai, a US-based startup now known as RiskOps.ai. His early experience in the AI industry gave him exposure to building and applying artificial intelligence to real-world business and technology challenges.
          </p>
          <p>
            Alongside his industry experience, Naveen has been actively involved in international research initiatives. He worked on a research project at the University of Malaya under the SATU scheme and was also involved in a research project under the MITACS program. These experiences strengthened his exposure to applied AI research and the development of technology-driven solutions.
          </p>
          <p>
            Naveen has also worked as an AI consultant, including providing AI consulting and technical guidance to employees at EY. His experience extends across corporate consulting, technology implementation, and professional AI education.
          </p>
        </div>

        {/* Image 2 (from downloads/secondimage.svg) */}
        <div className="w-full my-8 sm:my-10  overflow-hidden shadow-xs bg-neutral-100 flex justify-center">
          <img
            src={secondImage}
            alt="Naveen Kumar training students and professionals in AI"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>

        {/* Section 2 Content */}
        <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
          <p>
            As an AI Training Consultant, Naveen has worked with institutions and technology organizations across India, including Besant Technologies, Greens Technologies, Network Rhinos, TechPanda, and Courseinn Academy. Through these engagements, he has trained students, professionals, and aspiring technology practitioners in areas including Artificial Intelligence, Machine Learning, Generative AI, and emerging technologies.
          </p>
          <p>
            Naveen was also part of the founding team at Genik Technologies, where he gained valuable experience in entrepreneurship, technology development, and building technology initiatives from the ground up. This experience played an important role in shaping his approach toward innovation and eventually led him to establish Coirei Innovations.
          </p>
          <p>
            Over the years, Naveen has conducted numerous seminars, workshops, and technical sessions on Artificial Intelligence and emerging technologies across educational institutions. His academic engagements include Jeppiaar Institute of Technology, SRM Institute of Science and Technology, Salem College, Sarathi Engineering College in Salem, and Aasan Memorial College.
          </p>
          <p>
            His professional journey spans AI engineering, applied research, consulting, technical training, entrepreneurship, and product development. Working across startups, research institutions, corporate environments, educational institutions, and technology organizations has given him a broad perspective on both the technical and practical dimensions of Artificial Intelligence.
          </p>
        </div>

        {/* Image 3 (from downloads/lastimage.svg) */}
        <div className="w-full my-8 sm:my-10  overflow-hidden shadow-xs bg-neutral-100 flex justify-center">
          <img
            src={lastImage}
            alt="Naveen Kumar honored at academic conference"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>

        {/* Section 3 Content */}
        <div className="space-y-6 sm:space-y-8 font-medium text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30.1px] tracking-normal text-justify text-[#47464A]">
          <p>
            Today, as the Founder and CEO of Coirei Innovations Private Limited, Naveen leads the company's efforts to build AI-native products, intelligent automation systems, and innovative technology solutions designed to solve real-world business problems.
          </p>
          <p>
            His vision is to build Coirei Innovations into a technology company that does more than simply adopt Artificial Intelligence — a company that builds intelligent systems capable of transforming how organizations operate, make decisions, and grow.
          </p>
        </div>
      </article>
    </div>
  );
};

export default AboutCEO;
