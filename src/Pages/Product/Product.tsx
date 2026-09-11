import type { FC } from 'react';
import Hero from './section/Hero';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

export const Product: FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 text-center">
      <ScrollReveal variant="fade-up" delay={50} duration={650}>
        <h1 className="text-4xl font-bold text-neutral-900">Product Overview</h1>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={150} duration={700}>
        <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
          Explore the complete autonomous GTM intelligence suite built by Coirei.
        </p>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={250} duration={750} className="mt-12">
        <Hero />
      </ScrollReveal>
    </div>
  );
};

export default Product;