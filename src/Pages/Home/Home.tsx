import React from 'react';
import Hero from './section/Hero';
import Features from './section/Features';
import Steps from './section/Steps';

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Steps />
    </main>
  );
};

export default Home;