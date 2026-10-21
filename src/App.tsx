import React, { useState, useEffect } from 'react';
import { Language, SolutionItem } from './types';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ChairmanSection } from './components/ChairmanSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ContactSection } from './components/ContactSection';
import { WhyEmbryoSection } from './components/WhyEmbryoSection';
import { VisualShowcaseSection } from './components/VisualShowcaseSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  // Sync document language and text direction attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenConsultation = () => {
    setSelectedSolution(null);
    setConsultationOpen(true);
  };

  const handleSelectSolution = (sol: SolutionItem) => {
    setSelectedSolution(sol);
    setConsultationOpen(true);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#0B1E1E] text-white/90 ${
        lang === 'ar' ? 'font-[\'IBM_Plex_Sans_Arabic\']' : 'font-[\'Plus_Jakarta_Sans\']'
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Subtle top scroll progress indicator */}
      <ScrollProgress lang={lang} />

      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenConsultation={handleOpenConsultation}
      />

      <main className="flex-1">
        {/* Hero Section with Interactive 3D Botanical Canvas */}
        <HeroSection
          lang={lang}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Section 2: About Embryo Culture */}
        <AboutSection lang={lang} />

        {/* Section 2.5: Dedicated Chairman & Founder Section (Hon. Sayed Samir) */}
        <ChairmanSection lang={lang} />

        {/* Section 3: Agricultural Solutions */}
        <SolutionsSection
          lang={lang}
          onSelectSolution={handleSelectSolution}
        />

        {/* Section 5: Contact Form Section */}
        <ContactSection lang={lang} />

        {/* Section 6: Why Embryo Culture Values */}
        <WhyEmbryoSection lang={lang} />

        {/* Section 7: Immersive Visual Showcase of Facilities */}
        <VisualShowcaseSection lang={lang} />

        {/* Section 8: Final Call-to-Action */}
        <CtaSection
          lang={lang}
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* Footer with authentic contact details & New Cairo HQ */}
      <Footer
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        lang={lang}
        preselectedSolution={selectedSolution}
      />
    </div>
  );
}
