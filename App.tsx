
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyInfrastructure } from './components/WhyInfrastructure';
import { InfraLayers } from './components/InfraLayers';
import { WhatItSolves } from './components/WhatItSolves';
import { AIAction } from './components/AIAction';
import { PatientPortal } from './components/PatientPortal';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingPlan } from './components/PricingPlan';
import { Timeline } from './components/Timeline';
import { FAQ } from './components/FAQ';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ChatBot } from './components/ChatBot';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';

type View = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<View>('home');

  // Número proporcionado: +54 9 2617 14-0051
  const PHONE_NUMBER = "5492617140051";

  const handleCta = (context: string = "Solicitud de Demo Estratégica") => {
    const message = encodeURIComponent(`Hola Spitaweb! Quisiera más información sobre: ${context}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const openModal = () => {
    handleCta();
  };
  
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Reveal on Scroll logic
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [view]);

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white no-overflow">
      <Header 
        onCtaClick={() => handleCta("Demo desde Header")} 
        onHomeClick={() => navigateTo('home')} 
        onConsultantClick={() => handleCta("Consulta Técnica desde Menú")}
      />
      
      <main>
        {view === 'home' && (
          <>
            <Hero onCtaClick={() => handleCta("Demo desde Hero")} />
            <WhyInfrastructure />
            <InfraLayers onCtaClick={() => handleCta("Demo desde Infraestructura")} />
            <WhatItSolves />
            <AIAction />
            <PatientPortal />
            <Portfolio />
            <CaseStudies />
            <ComparisonTable />
            <PricingPlan onCtaClick={() => handleCta("Implementación desde Precios")} />
            <Timeline />
            <FAQ />
            <ClosingCTA onCtaClick={() => handleCta("Disponibilidad desde Cierre")} />
          </>
        )}

        {view === 'privacy' && <PrivacyPage />}
        {view === 'terms' && <TermsPage />}
      </main>

      <Footer 
        onCtaClick={() => handleCta("Demo desde Footer")} 
        onPrivacyClick={() => navigateTo('privacy')}
        onTermsClick={() => navigateTo('terms')}
      />

      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
      <ChatBot />
    </div>
  );
};

export default App;
