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
import VoiceOfCustomer from './Pages/CompetitorAnalysis/VoiceOfCustomer';
import AEO from './Pages/AEO/AEO';
import SEO from './Pages/SEO/SEO';
import Engage from './Pages/Engage/Engage';
import AboutCEO from './Pages/About/AboutCeo/AboutCEO';
import OurStory from './Pages/About/OurStory/OurStory';
// import Startups from './Pages/Startups/Startups';
import LeadNurturing from './Pages/LeadNurturing/LeadNurturing';

// Scroll to Top or Hash Target on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer1 = setTimeout(scrollToElement, 150);
        const timer2 = setTimeout(scrollToElement, 350);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const AppContent: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B0F19]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<MarketIntelligence />} />
          <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="/competitor-research" element={<CompetitorAnalysis />} />
          <Route path="/competitors" element={<CompetitorAnalysis />} />
          <Route path="/voice-of-customer" element={<VoiceOfCustomer />} />
          <Route path="/voice-of-the-customer" element={<VoiceOfCustomer />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/aeo" element={<AEO />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/lead-nurturing" element={<LeadNurturing />} />
          <Route path="/leadnurturing" element={<LeadNurturing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/ceo" element={<AboutCEO />} />
          <Route path="/about/our-story" element={<OurStory />} />
          {/* <Route path="/startups" element={<Startups />} />
          <Route path="/startup" element={<Startups />} />
          <Route path="/coirei-for-startups" element={<Startups />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
