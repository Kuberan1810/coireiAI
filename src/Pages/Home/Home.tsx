import React from 'react';
import Hero from './section/Hero';
import Features from './section/Features';
import Steps from './section/Steps';
import AgentsSection from './section/AgentsSection';
import AudienceSection from './section/AudienceSection';
import CtaSection from './section/CtaSection';


export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Steps />
      <AgentsSection />
      <AudienceSection />
      <CtaSection />
    </main>
  );
};

export default Home;