import React from 'react';
import { Language } from '../types';
import { ABOUT_CONTENT, METRICS } from '../data/content';
import { LeafContourWatermark } from './EmbryoLogo';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0E2828] to-[#0B1E1E] overflow-hidden">
      {/* Background Watermark */}
      <div className={`absolute -bottom-10 ${isAr ? 'right-0' : 'left-0'} w-80 lg:w-96 pointer-events-none opacity-10`}>
        <LeafContourWatermark color="#65D686" opacity={0.12} className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-widest text-[#65D686] uppercase mb-2">
            {ABOUT_CONTENT.kicker[lang]}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {ABOUT_CONTENT.heading[lang]}
          </h2>
        </div>

        {/* Narrative & Strategic Pillars */}
        <div className="flex flex-col gap-10 mb-16">
          {/* Main Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-white/80 leading-relaxed">
            <p className="bg-[#153C3C]/30 p-6 sm:p-8 rounded-3xl border border-[#358245]/20 backdrop-blur-sm">
              {ABOUT_CONTENT.p1[lang]}
            </p>
            <p className="bg-[#153C3C]/30 p-6 sm:p-8 rounded-3xl border border-[#358245]/20 backdrop-blur-sm">
              {ABOUT_CONTENT.p2[lang]}
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-gradient-to-br from-[#153C3C]/60 to-[#0B1E1E]/80 border border-[#358245]/30 hover:border-[#65D686]/50 hover:shadow-xl hover:shadow-[#65D686]/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#0B1E1E] text-[#65D686] flex items-center justify-center font-bold text-sm mb-5 border border-[#358245]/40 shadow-inner group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {pillar.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantified Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#153C3C]/50 border border-[#358245]/20 shadow-lg backdrop-blur-sm">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx > 0 ? (isAr ? 'lg:border-r border-[#358245]/20 lg:pr-6' : 'lg:border-l border-[#358245]/20 lg:pl-6') : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#65D686] tracking-tight font-mono tabular-nums mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#358245] mb-0.5">
                {metric.label[lang]}
              </div>
              <div className="text-[11px] text-white/50">
                {metric.subtext[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
