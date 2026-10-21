import React from 'react';
import { Language } from '../types';
import { COMPANY_DETAILS, NAV_LINKS, SOLUTIONS } from '../data/content';
import { EmbryoLogo } from './EmbryoLogo';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-900 pt-16 pb-12 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <EmbryoLogo
                lang={lang}
                size="md"
                className="mb-4"
              />
              <p className="text-xs text-gray-600 max-w-sm leading-relaxed mt-4">
                {isAr
                  ? 'شركة متخصصة في التكنولوجيا الحيوية الزراعية وزراعة الأنسجة النباتية، تسهم في تعزيز الأمن الغذائي وإنتاج شتلات معتمدة فائقة الإنتاجية والمقاومة للظروف البيئية.'
                  : 'Leading in vitro botanical micropropagation, somatic embryogenesis, and elite germplasm conservation, supporting commercial growers across Egypt and the international agricultural sector.'}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#358245] flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#358245] flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#358245] flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#358245] flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-[#65D686] uppercase tracking-wider mb-4">
              {isAr ? 'روابط رئيسية' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-[#358245] transition-colors inline-block"
                  >
                    {link.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Solutions */}
          <div>
            <h4 className="text-xs font-bold text-[#65D686] uppercase tracking-wider mb-4">
              {isAr ? 'حلولنا الزراعية' : 'Core Solutions'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              {SOLUTIONS.slice(0, 4).map((sol) => (
                <li key={sol.id}>
                  <a
                    href="#solutions"
                    className="hover:text-[#358245] transition-colors line-clamp-1"
                  >
                    {sol.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Headquarters & Contact (from Chairman Sayed Samir's card) */}
          <div>
            <h4 className="text-xs font-bold text-[#65D686] uppercase tracking-wider mb-4">
              {isAr ? 'المقر والتواصل' : 'Headquarters'}
            </h4>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#65D686] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_DETAILS.contact[isAr ? 'addressAr' : 'addressEn']}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#65D686] shrink-0" />
                <div className="font-mono">
                  <span>T: {COMPANY_DETAILS.contact.phone}</span>
                  <br />
                  <span>M: {COMPANY_DETAILS.contact.mobile}</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#65D686] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.contact.email}`}
                  className="hover:text-[#358245] transition-colors font-mono"
                >
                  {COMPANY_DETAILS.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language Switcher, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Embryo Culture · إمبريو كالتشر. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher in Footer */}
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#65D686]" />
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`cursor-pointer ${lang === 'en' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'}`}
              >
                English
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`cursor-pointer font-['IBM_Plex_Sans_Arabic'] ${lang === 'ar' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'}`}
              >
                العربية
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
