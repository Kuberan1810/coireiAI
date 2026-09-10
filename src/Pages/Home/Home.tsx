import React from 'react';
import Hero from './section/Hero';
import AgentsSection from './section/AgentsSection';

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <AgentsSection />
    </main>
  );
};

export default Home;