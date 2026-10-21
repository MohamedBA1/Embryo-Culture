import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { NAV_LINKS } from '../data/content';
import { EmbryoLogo } from './EmbryoLogo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className={`w-[calc(100%-2rem)] md:w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 rounded-3xl mt-2 border border-gray-100 overflow-hidden ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' 
          : 'bg-white/90 backdrop-blur-md shadow-sm'
      }`}>
        <div className="flex items-center justify-between py-1">
        {/* Zone 1: Single text element Brand mark */}
        <a
          href="#"
          className="group transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#358245] rounded-xl p-1"
          aria-label={lang === 'ar' ? 'إمبريو كالتشر - الصفحة الرئيسية' : 'Embryo Culture Home'}
        >
          <EmbryoLogo
            lang={lang}
            size="md"
          />
        </a>

        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="group relative py-2 px-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="relative z-10">{link.label[lang]}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#358245] to-[#65D686] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + 1 Primary Action */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-gray-100 border border-gray-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#358245] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('ar')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer font-['IBM_Plex_Sans_Arabic'] ${
                lang === 'ar'
                  ? 'bg-[#358245] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              aria-label="التبديل إلى العربية"
            >
              العربية
            </button>
          </div>

          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#153C3C] hover:bg-[#1E4F4F] active:scale-[0.98] rounded-xl shadow-xs transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#65D686]" />
            <span>
              {lang === 'ar' ? 'طلب استشارة' : 'Book Consultation'}
            </span>
          </button>

          {/* Mobile menu hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white border-b border-gray-200 shadow-xl">
          <nav className="flex flex-col gap-3 py-2 text-base font-medium text-gray-800">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {link.label[lang]}
              </a>
            ))}
            <div className="pt-2 border-t border-[#153C3C]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#153C3C] rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#65D686]" />
                <span>{lang === 'ar' ? 'طلب استشارة زراعية' : 'Book Consultation'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};
