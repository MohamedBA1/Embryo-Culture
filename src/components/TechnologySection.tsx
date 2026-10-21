import React, { useState } from 'react';
import { Language } from '../types';
import { TECH_INNOVATION } from '../data/content';
import {
  Cpu,
  Activity
} from 'lucide-react';

interface TechnologySectionProps {
  lang: Language;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  // Interactive bioreactor simulation parameters
  const [selectedSpectrum, setSelectedSpectrum] = useState<'full' | 'blue' | 'red'>('full');
  const [hormoneRatio, setHormoneRatio] = useState<number>(75);

  const spectrumData = {
    full: {
      label: { en: 'Full-Spectrum Optimized PAR', ar: 'طيف كامل متوازن (PAR)' },
      desc: { en: '400–700nm balanced illumination driving rapid vegetative shoot induction.', ar: 'إضاءة متوازنة 400-700 نانومتر لتحفيز النموات الخضرية السريعة.' },
      biomassRate: '+42% Dry Weight',
    },
    blue: {
      label: { en: 'Blue-Shifted Chlorophyll Activator (450nm)', ar: 'الطيف الأزرق المنشط (450 نانومتر)' },
      desc: { en: 'Promotes compact internodes and stomatal opening for gas exchange.', ar: 'يعزز تقارب السلاميات وانفتاح الثغور لتعزيز التنفس الخلوي.' },
      biomassRate: '+28% Stomatal Density',
    },
    red: {
      label: { en: 'Deep-Red Morphogenesis Trigger (660nm)', ar: 'الطيف الأحمر المحفز (660 نانومتر)' },
      desc: { en: 'Activates phytochrome responses for accelerated cellular division and leaf expansion.', ar: 'ينشط صبغة الفيتوكروم لتسريع انقسام الخلايا وتمدد الأوراق.' },
      biomassRate: '+55% Stem Caliber',
    },
  };

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#153C3C] text-white relative overflow-hidden">
      {/* Bioluminescent Grid and Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#358245_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#358245]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#65D686] text-xs font-semibold mb-3 border border-white/10">
            <Cpu className="w-3.5 h-3.5" />
            <span>{TECH_INNOVATION.kicker[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {TECH_INNOVATION.heading[lang]}
          </h2>
          <p className="text-base text-white/80 leading-relaxed">
            {TECH_INNOVATION.subheading[lang]}
          </p>
        </div>

        {/* 4 Laboratory Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {TECH_INNOVATION.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-xs text-white/60 mb-1">{m.label[lang]}</div>
              <div className="text-2xl font-bold font-mono text-[#65D686] mb-1">
                {m.value}
              </div>
              <div className="text-[11px] text-white/70">{m.note[lang]}</div>
            </div>
          ))}
        </div>

        {/* Interactive Biotech Laboratory Console */}
        <div className="rounded-3xl bg-[#0E2828] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
            {/* Left Console: Parameter Adjusters */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#65D686]" />
                  <h3 className="font-bold text-lg text-white">
                    {isAr ? 'محاكي التحكم في بيئة النمو المخبرية' : 'In Vitro Microclimate Biocontrol'}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#358245]/30 text-[#65D686]">
                  LIVE MS-600
                </span>
              </div>

              {/* Light Spectrum Selector */}
              <div>
                <label className="text-xs font-semibold text-white/80 block mb-2">
                  {isAr ? 'طيف الإضاءة التخليقية (Photoperiod LED Spectrum):' : 'Select Light Wavelength Spectrum:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['full', 'blue', 'red'] as const).map((spec) => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => setSelectedSpectrum(spec)}
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        selectedSpectrum === spec
                          ? 'bg-[#358245] border-[#65D686] text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {spec === 'full' ? 'Full Spectrum' : spec === 'blue' ? 'Blue 450nm' : 'Red 660nm'}
                    </button>
                  ))}
                </div>
                <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs flex justify-between items-center">
                  <span className="text-white/80">{spectrumData[selectedSpectrum].desc[lang]}</span>
                  <span className="font-mono text-[#65D686] font-bold shrink-0 ml-2">
                    {spectrumData[selectedSpectrum].biomassRate}
                  </span>
                </div>
              </div>

              {/* Phytohormone Auxin/Cytokinin Balance Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-white/80 mb-2">
                  <span>{isAr ? 'توازن الهرمونات (الأكسينات vs السيتوكينين):' : 'Auxin / Cytokinin Morphogenetic Ratio:'}</span>
                  <span className="font-mono text-[#65D686]">{hormoneRatio}% Shoot Inductive</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={hormoneRatio}
                  onChange={(e) => setHormoneRatio(Number(e.target.value))}
                  className="w-full accent-[#358245] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-white/50 mt-1">
                  <span>{isAr ? 'تركيز تجذيري عالي (Root Focus)' : 'Root Inductive'}</span>
                  <span>{isAr ? 'تركيز تضاعف خضري (Shoot Focus)' : 'Multiplication Focus'}</span>
                </div>
              </div>
            </div>

            {/* Right Console: Scientific Benchmarking Visual */}
            <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white/60 tracking-wider uppercase">
                  {isAr ? 'مقارنة الأداء والإنتاجية' : 'Performance Benchmark'}
                </span>
                <span className="text-xs font-mono text-[#65D686] font-bold">
                  Certified Standards
                </span>
              </div>

              {/* Comparative rows */}
              <div className="space-y-4">
                {/* Metric 1: Survival Rate */}
                <div>
                  <div className="flex justify-between text-xs text-white mb-1.5">
                    <span>{isAr ? 'معدل نجاح الشتلات (Viability)' : 'Crop Survival Rate'}</span>
                    <span className="font-mono font-bold text-[#65D686]">99.4% (EC) vs 62% (Traditional)</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#358245] h-full rounded-full transition-all duration-500" style={{ width: '99.4%' }} />
                  </div>
                </div>

                {/* Metric 2: Multiplication Velocity */}
                <div>
                  <div className="flex justify-between text-xs text-white mb-1.5">
                    <span>{isAr ? 'سرعة التكاثر السنوي' : 'Annual Propagation Factor'}</span>
                    <span className="font-mono font-bold text-[#65D686]">25x Faster Growth</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#65D686] h-full rounded-full transition-all duration-500" style={{ width: '85%' }} />
                  </div>
                </div>

                {/* Metric 3: Pathogen Resistance */}
                <div>
                  <div className="flex justify-between text-xs text-white mb-1.5">
                    <span>{isAr ? 'مقاومة الأمراض والآفات' : 'Pathogen Freedom Index'}</span>
                    <span className="font-mono font-bold text-[#65D686]">100% Virus-Free Stock</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#358245] h-full rounded-full transition-all duration-500" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span>{isAr ? 'نظام بيولوجي مؤتمت خاضع للرقابة' : 'Autonomous Computerized Culture Environment'}</span>
                <span className="font-mono text-[#65D686]">ISO 17025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
