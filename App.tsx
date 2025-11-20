
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollText } from './components/ScrollText';
import { Portfolio } from './components/Portfolio';
import SpotlightCursor from './components/SpotlightCursor';

const App: React.FC = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-light selection:text-brand-dark relative">
      
      {/* Spotlight Cursor Effect with Brand Orange Glow - Hidden on mobile/tablet (block on lg+) */}
      <div className="hidden lg:block">
        <SpotlightCursor 
          config={{
            glowColor: '249, 115, 22', // Brand Orange (RGB)
            spotlightSize: 350,
            spotlightIntensity: 1,
            fadeSpeed: 0.08
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <ScrollText />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
