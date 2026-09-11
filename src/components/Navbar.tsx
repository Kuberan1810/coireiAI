import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import coireiLogo from '../assets/logo/coireiLogo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all animate-navbar-slide-down ">
      <div className="px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={coireiLogo}
            alt="coirei"
            className="h-7 sm:h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 text-[14.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1">
              <span>Product</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform group-hover:rotate-180" />
            </button>
          </div>

          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 text-[14.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1">
              <span>Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform group-hover:rotate-180" />
            </button>
          </div>

          <Link
            to="/customers"
            className="text-[14.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1"
          >
            Customers
          </Link>

          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 text-[14.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1">
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform group-hover:rotate-180" />
            </button>
          </div>

          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 text-[14.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1">
              <span>Pricing</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform group-hover:rotate-180" />
            </button>
          </div>
        </nav>

        {/* Right CTA / Auth */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/signin"
            className="text-[14.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Sign in
          </Link>
          <a
            href="#get-started"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                const elem = document.getElementById('get-started');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center bg-[#0B0F19] hover:bg-neutral-800 text-white text-[14px] font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>Get Started</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-100 bg-white px-6 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            to="/product"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-700 font-medium text-base"
          >
            Product
          </Link>
          <Link
            to="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-700 font-medium text-base"
          >
            Solutions
          </Link>
          <Link
            to="/customers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-700 font-medium text-base"
          >
            Customers
          </Link>
          <Link
            to="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-700 font-medium text-base"
          >
            Resources
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-700 font-medium text-base"
          >
            Pricing
          </Link>
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <Link
              to="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-neutral-800 font-medium border border-neutral-200 rounded-full"
            >
              Sign in
            </Link>
            <a
              href="#get-started"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const elem = document.getElementById('get-started');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full text-center py-2.5 bg-[#0B0F19] text-white font-medium rounded-full cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
