import React from 'react';
import { Language } from '../types';
import { VALUES_LIST } from '../data/content';
import { Atom, Shield, Sun, TrendingUp, Users, Globe } from 'lucide-react';

interface WhyEmbryoSectionProps {
  lang: Language;
}

export const WhyEmbryoSection: React.FC<WhyEmbryoSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const getIcon = (name: string) => {
    switch (name) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-[#65D686]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#65D686]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#65D686]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#65D686]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#65D686]" />;
      case 'Globe':
      default:
        return <Globe className="w-5 h-5 text-[#65D686]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0E2828] to-[#0B1E1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#65D686] uppercase mb-2 block">
            {isAr ? 'لماذا تختار إمبريو كالتشر' : 'Why Embryo Culture'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {isAr
              ? 'معايير تفوق تؤسس لمستقبل زراعي مستدام'
              : 'Institutional Standards Built for Generational Agricultural Success'}
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            {isAr
              ? 'نلتزم بأعلى درجات الموثوقية العلمية لضمان عائد استثماري مجزيٌ وأعلى إنتاجية للمزارع.'
              : 'Our scientific integrity, bio-secure facilities, and deep agronomic support guarantee maximum yield security for agricultural investors.'}
          </p>
        </div>

        {/* 6 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES_LIST.map((val, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-3xl bg-[#153C3C]/40 border border-[#358245]/20 hover:border-[#65D686]/40 hover:shadow-[0_20px_40px_-15px_rgba(101,214,134,0.15)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0B1E1E] border border-[#358245]/30 group-hover:bg-[#358245] group-hover:border-transparent transition-all duration-300 flex items-center justify-center mb-5">
                  {getIcon(val.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {val.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {val.description[lang]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#358245]/20 flex items-center gap-1.5 text-[11px] font-semibold text-[#65D686]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65D686]" />
                <span>{isAr ? 'ضمان إمبريو كالتشر' : 'Embryo Culture Certified'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
