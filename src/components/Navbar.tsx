import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2563EB] to-[#3B82F6] flex items-center justify-center shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.4 0 4.6-.85 6.32-2.27l-2.14-2.14C14.98 18.3 13.56 18.8 12 18.8c-3.76 0-6.8-3.04-6.8-6.8 0-3.76 3.04-6.8 6.8-6.8 2.8 0 5.2 1.68 6.24 4.08h3.24C20.16 5.34 16.42 2 12 2z" />
            </svg>
          </div>
          <span className="text-[22px] font-bold tracking-tight text-[#0B0F19]">
            coirei
          </span>
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
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 bg-[#0B0F19] hover:bg-neutral-800 text-white text-[14px] font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </Link>
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
            <Link
              to="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-[#0B0F19] text-white font-medium rounded-full"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
