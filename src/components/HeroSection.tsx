import React from 'react';
import { Language } from '../types';
import { HERO_CONTENT, COMPANY_DETAILS } from '../data/content';
import { LeafContourWatermark } from './EmbryoLogo';
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0B1E1E] via-[#153C3C] to-[#0A1616]">
      {/* Background Decorative Botanical Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#358245]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#65D686]/5 blur-3xl pointer-events-none" />

      {/* Subtle Leaf Contour Watermark in background */}
      <div className={`absolute top-12 ${isAr ? 'left-6' : 'right-6'} w-64 lg:w-96 pointer-events-none opacity-20 -z-0`}>
        <LeafContourWatermark color="#153C3C" opacity={0.15} className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Text Content Column */}
          <div className="flex flex-col justify-center">

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBF4EE] to-[#65D686] leading-[1.15] mb-6 drop-shadow-sm">
              <span>{HERO_CONTENT.title1[lang]}</span>
              <br />
              <span className="text-[#358245] relative inline-block">
                {HERO_CONTENT.title2[lang]}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#358245]/30 -z-10"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 0, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
              {HERO_CONTENT.description[lang]}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-5 mb-12">
              <a
                href="#solutions"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-[#153C3C] to-[#2C4A47] hover:from-[#1E4F4F] hover:to-[#358245] active:scale-95 rounded-2xl shadow-lg shadow-[#153C3C]/30 hover:shadow-[0_0_25px_rgba(53,130,69,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                <span className="relative z-10">{HERO_CONTENT.primaryCta[lang]}</span>
                <ArrowUpRight className={`relative z-10 w-4 h-4 text-[#65D686] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-125 ${isAr ? 'rotate-[-90deg]' : ''}`} />
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#153C3C]/60 backdrop-blur-md hover:bg-[#1E4F4F] border border-[#358245]/30 rounded-2xl shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(53,130,69,0.3)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#358245]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{isAr ? 'طلب عينات ودراسة جدوى' : 'Request Agronomic Consultation'}</span>
              </button>
            </div>

            {/* Trust and Certification Points */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#358245]" />
                <span>{isAr ? 'أجنة خالية تماماً من الفيروسات' : '100% Virus-Free Clones'}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#358245]" />
                <span>{isAr ? 'مختبرات معتمدة دولياً بالقاهرة' : 'Cairo Cleanroom Biotechnology Hub'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#358245]" />
                <span>{isAr ? 'تأقلم حقلي فائق الحيوية' : 'High-Survival Field Acclimatization'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
