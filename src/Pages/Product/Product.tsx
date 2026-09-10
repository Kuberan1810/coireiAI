import type { FC } from 'react';
import Hero from './section/Hero';

export const Product: FC = () => {
  return (
    <div className="min-h-screen py-16 px-4   text-center">
      <h1 className="text-4xl font-bold text-neutral-900">Product Overview</h1>
      <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
        Explore the complete autonomous GTM intelligence suite built by Coirei.
      </p>
      <div className="mt-12">
        <Hero />
      </div>
    </div>
  );
};

export default Product;