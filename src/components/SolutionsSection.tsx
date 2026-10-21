import React, { useState } from 'react';
import { Language, SolutionItem } from '../types';
import { SOLUTIONS } from '../data/content';
import {
  Sparkles,
  ShieldCheck,
  SunMedium,
  Microscope,
  Leaf,
  Sprout,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';

interface SolutionsSectionProps {
  lang: Language;
  onSelectSolution: (sol: SolutionItem) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  lang,
  onSelectSolution,
}) => {
  const isAr = lang === 'ar';
  const [activeSolution, setActiveSolution] = useState<SolutionItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#358245]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#358245]" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-[#358245]" />;
      case 'Microscope':
        return <Microscope className="w-5 h-5 text-[#358245]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#358245]" />;
      case 'Sprout':
      default:
        return <Sprout className="w-5 h-5 text-[#358245]" />;
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-gradient-to-br from-[#0B1E1E] to-[#153C3C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#65D686] uppercase mb-2 block">
              {isAr ? 'حلولنا الزراعية والتكنولوجية' : 'Our Agricultural Solutions'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {isAr
                ? 'حلول التكاثر النسيجي المتقدمة للإنتاج الزراعي التجاري'
                : 'Advanced In Vitro Solutions for High-Yield Commercial Agriculture'}
            </h2>
          </div>
          <p className="text-sm text-white/70 max-w-md">
            {isAr
              ? 'نحول نتائج المختبرات إلى مكاسب حقلية ملموسة، عبر توريد شتلات منتقاة ذات كفاءة إنتاجية قياسية.'
              : 'Translating cellular biology into quantifiable farm profitability through certified sterile clonal plantlets.'}
          </p>
        </div>

        {/* Bento Grid of Premium Product-Style Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              onClick={() => setActiveSolution(sol)}
              className="group relative p-7 rounded-3xl bg-[#153C3C]/40 border border-[#358245]/20 hover:border-[#65D686]/40 hover:bg-gradient-to-br hover:from-[#153C3C]/60 hover:to-[#0B1E1E] hover:shadow-[0_20px_40px_-15px_rgba(101,214,134,0.15)] hover:-translate-y-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-md"
            >
              {/* Sweeping shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-[#358245]/5 to-transparent skew-x-12 pointer-events-none" />
              {/* Top Row: Minimal Icon + Editorial Number & Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1E1E] group-hover:bg-gradient-to-br group-hover:from-[#358245] group-hover:to-[#65D686] group-hover:text-[#0B1E1E] group-hover:shadow-lg transition-all duration-500 flex items-center justify-center relative z-10 border border-white/5">
                    {getIcon(sol.icon)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-white/50">
                      {sol.number}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#0B1E1E] text-[#65D686] border border-[#65D686]/20">
                      {sol.badge[lang]}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#65D686] transition-colors duration-200 mb-2 leading-snug">
                  {sol.title[lang]}
                </h3>
                <p className="text-xs font-semibold text-[#358245] group-hover:text-[#65D686]/80 mb-3 transition-colors">
                  {sol.tagline[lang]}
                </p>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {sol.description[lang]}
                </p>

                {/* Key Bullet Features */}
                <ul className="space-y-2 mb-6 text-xs text-white/60">
                  {sol.features[lang].map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65D686] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer: Metric & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white/80 font-mono">
                  {sol.impactMetric[lang]}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-[#65D686] group-hover:translate-x-1 transition-transform">
                  <span>{isAr ? 'التفاصيل والبروتوكول' : 'View Protocol'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Detail Modal */}
      {activeSolution && (
        <div
          className="fixed inset-0 z-50 bg-[#153C3C]/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveSolution(null)}
        >
          <div
            className="w-full max-w-xl bg-white/95 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/40 relative animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveSolution(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#40625E] hover:bg-[#F2F7F4] hover:text-[#153C3C] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF4EE] flex items-center justify-center text-[#358245]">
                {getIcon(activeSolution.icon)}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#358245]">
                  Solution {activeSolution.number} · {activeSolution.badge[lang]}
                </span>
                <h3 className="text-xl font-extrabold text-[#153C3C]">
                  {activeSolution.title[lang]}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#40625E] mb-5 leading-relaxed">
              {activeSolution.description[lang]}
            </p>

            <div className="p-4 rounded-2xl bg-[#F4F8F5] border border-[#153C3C]/10 mb-6">
              <h4 className="text-xs font-bold text-[#153C3C] uppercase tracking-wider mb-2">
                {isAr ? 'المواصفات الفنية والضمانات' : 'Technical Protocol & Guarantees'}
              </h4>
              <ul className="space-y-2 text-xs text-[#2A4845]">
                {activeSolution.features[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#358245] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[#153C3C]">
                {activeSolution.impactMetric[lang]}
              </span>
              <button
                type="button"
                onClick={() => {
                  onSelectSolution(activeSolution);
                  setActiveSolution(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#153C3C] text-white text-xs font-bold hover:bg-[#1E4F4F] transition-colors cursor-pointer"
              >
                {isAr ? 'طلب استشارة بهذا الصنف' : 'Request Agronomic Proposal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
