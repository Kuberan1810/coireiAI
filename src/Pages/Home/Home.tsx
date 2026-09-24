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
      <Hero />
      <Features />
      <Steps />
      <AgentsSection />
      <VisibilitySection />
      <QuoteSection />
      <BusinessSection />
    </main>
  );
};

export default Home;