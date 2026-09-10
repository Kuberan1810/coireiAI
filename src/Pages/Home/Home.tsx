import React from 'react';
import Hero from './section/Hero';
import Features from './section/Features';
import Steps from './section/Steps';
import AgentsSection from './section/AgentsSection';


export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Steps />
      <AgentsSection />

    </main>
  );
};

export default Home;