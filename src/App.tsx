import { useEffect } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import MarketIntelligence from './Pages/MarketIntelligence/MarketIntelligence';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import CompetitorAnalysis from './Pages/CompetitorAnalysis/CompetitorAnalysis';
import AEO from './Pages/AEO/AEO';
import SEO from './Pages/SEO/SEO';
import Engage from './Pages/Engage/Engage';
import AboutCEO from './Pages/About/AboutCeo/AboutCEO';


// Simple Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#0B0F19]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketing" element={<MarketIntelligence />} />
            <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/aeo" element={<AEO />} />
            <Route path="/engage" element={<Engage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/ceo" element={<AboutCEO />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
