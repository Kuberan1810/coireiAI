import React from 'react';
import footerLogo from '../assets/footerLogo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black relative z-20 overflow-hidden select-none">
      <div className="w-full flex justify-center items-center overflow-hidden">
        <img
          src={footerLogo}
          alt="Coirei"
          className="w-full h-auto max-w-[1440px] object-contain pointer-events-none select-none block"
        />
      </div>
    </footer>
  );
};

export default Footer;
