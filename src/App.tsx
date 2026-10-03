import { useEffect } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import MarketIntelligence from './Pages/MarketIntelligence/MarketIntelligence';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import CompetitorAnalysis from './Pages/CompetitorAnalysis/CompetitorAnalysis';
import AEO from './Pages/AEO/AEO';
import SEO from './Pages/SEO/SEO';
import Engage from './Pages/Engage/Engage';


// Simple Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page placeholder helper
const PagePlaceholder: FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center max-w-4xl mx-auto">
    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4">
      Coirei Intelligence
    </div>
    <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B0F19] tracking-tight">{title}</h1>
    <p className="mt-4 text-neutral-500 max-w-lg mx-auto text-base">{subtitle}</p>
  </div>
);

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#0B0F19]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/market-intelligence" element={<MarketIntelligence />} />
            <Route path="/intelligence" element={<MarketIntelligence />} />
            <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
            <Route path="/competitors" element={<CompetitorAnalysis />} />
            <Route path="/competitor" element={<CompetitorAnalysis />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/search-engine-optimization" element={<SEO />} />
            <Route path="/aeo" element={<AEO />} />
            <Route path="/seo-aeo" element={<AEO />} />
            <Route path="/ai-search" element={<AEO />} />
            <Route path="/engage" element={<Engage />} />
            <Route path="/solutions" element={<MarketIntelligence />} />
            <Route
              path="/customers"
              element={
                <PagePlaceholder
                  title="Customer Stories"
                  subtitle="See how fast-growing revenue teams accelerate deal velocity and GTM execution with Coirei."
                />
              }
            />
            <Route
              path="/resources"
              element={
                <PagePlaceholder
                  title="Resources & Insights"
                  subtitle="Explore frameworks, case studies, and GTM guides designed to help you scale pipeline."
                />
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/company" element={<About />} />
            <Route
              path="/signin"
              element={
                <PagePlaceholder
                  title="Sign In to Coirei"
                  subtitle="Welcome back! Access your autonomous GTM strategist dashboard."
                />
              }
            />
            <Route path="/get-started" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
