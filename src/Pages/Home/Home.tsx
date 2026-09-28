import React from 'react';
import Hero from './section/Hero';
import Features from './section/Features';
import Steps from './section/Steps';
import AgentsSection from './section/AgentsSection';
import VisibilitySection from './section/VisibilitySection';
import QuoteSection from './section/QuoteSection';
import BusinessSection from './section/BusinessSection';

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      {/* Top Sections Surface (z-20, slides up to reveal fixed black screen) */}
      <div className="relative z-20 bg-white">
        <Hero />
        <Features />
        <Steps />
        <AgentsSection />
        <VisibilitySection />
      </div>

      {/* Middle: Fixed Black Quote Section (z-10, does not move AT ALL) */}
      <QuoteSection />

      {/* Bottom Sections Surface (z-20, slides up to cover fixed black screen) */}
      <div className="relative z-20">
        <BusinessSection />
      </div>
    </main>
  );
};

export default Home;