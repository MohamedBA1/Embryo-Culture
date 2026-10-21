import React, { useState } from 'react';
import { Language } from '../types';
import { GROWTH_PROCESS } from '../data/content';
import { ArrowRight, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface GrowthProcessSectionProps {
  lang: Language;
}

export const GrowthProcessSection: React.FC<GrowthProcessSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStage = GROWTH_PROCESS[activeStep];

  return (
    <section id="process" className="py-20 lg:py-28 bg-gradient-to-br from-[#0B1E1E] to-[#0E2828] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-[#65D686] uppercase mb-2 block">
            {isAr ? 'رحلة النمو المخبري والميداني' : 'Our 5-Stage Growth Metaphor'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {isAr
              ? 'من خلية جنينية واحدة إلى محصول حقلي متفوق'
              : 'From a Single Embryonic Cell to Sustainable Field Abundance'}
          </h2>
          <p className="text-sm text-white/60 mt-3">
            {isAr
              ? 'مسار علمي دقيق يضمن سلامة الشتلات وتطابقها الوراثي عبر خمس مراحل مدروسة بعناية.'
              : 'A systematic biological journey ensuring uncompromised genetic fidelity and pathogen-free health across five calibrated stages.'}
          </p>
        </div>

        {/* Interactive Step Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-2 rounded-2xl bg-[#153C3C]/60 border border-[#358245]/20 mb-12 backdrop-blur-sm">
          {GROWTH_PROCESS.map((stage, idx) => (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                isAr ? 'text-right' : 'text-left'
              } ${
                activeStep === idx
                  ? 'bg-[#358245] text-white shadow-md shadow-[#358245]/30'
                  : 'text-white/50 hover:text-white hover:bg-[#153C3C]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold text-[#65D686]">
                  {stage.step}
                </span>
                {activeStep === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <div className="text-xs font-bold line-clamp-1">
                {stage.title[lang]}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Stage Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#153C3C]/50 p-6 sm:p-10 rounded-3xl border border-[#358245]/20 shadow-xl backdrop-blur-sm">
          {/* Visual Growth Metaphor Graphics */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0B1E1E] border border-[#358245]/20 min-h-[320px] relative overflow-hidden">
            {/* Visual Plant Height Meter */}
            <div className="relative w-36 h-56 flex flex-col items-center justify-end">
              {/* Soil Base */}
              <div className="w-32 h-9 rounded-t-xl bg-[#358245]/40 border border-[#358245]/30 flex items-center justify-center text-[10px] text-[#65D686] font-mono">
                {isAr ? 'وسط غذائي MS' : 'Nutrient Gel MS'}
              </div>

              {/* Stem */}
              <div
                className="w-2.5 bg-gradient-to-t from-[#358245] to-[#65D686] rounded-t-full transition-all duration-500 relative"
                style={{ height: `${40 + activeStep * 32}px` }}
              >
                {activeStep >= 1 && (
                  <div className="absolute -left-6 top-1/2 w-6 h-3 bg-[#358245] rounded-full rotate-[-30deg] origin-right transition-all duration-300" />
                )}
                {activeStep >= 2 && (
                  <div className="absolute -right-7 top-1/3 w-7 h-3.5 bg-[#2E753E] rounded-full rotate-[25deg] origin-left transition-all duration-300" />
                )}
                {activeStep >= 3 && (
                  <div className="absolute -left-7 top-1/4 w-7 h-4 bg-[#3E9B54] rounded-full rotate-[-45deg] origin-right transition-all duration-300" />
                )}
                {activeStep >= 4 && (
                  <div className="absolute -right-8 top-1 w-8 h-4.5 bg-[#52C778] rounded-full rotate-[15deg] origin-left transition-all duration-300" />
                )}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#65D686] animate-pulse shadow-[0_0_10px_rgba(101,214,134,0.6)]" />
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="text-[11px] font-mono font-bold text-[#65D686] uppercase tracking-wider">
                {isAr ? 'المرحلة الحالية' : 'Active Growth Phase'} {activeStep + 1} / 5
              </span>
              <div className="text-xs font-semibold text-white/70">
                {currentStage.duration[lang]}
              </div>
            </div>
          </div>

          {/* Text and Parameters Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-extrabold font-mono text-[#65D686]">
                  {currentStage.step}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0B1E1E] text-[#65D686] border border-[#358245]/30">
                  {currentStage.duration[lang]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {currentStage.title[lang]}
              </h3>

              <p className="text-base text-white/70 leading-relaxed mb-6">
                {currentStage.description[lang]}
              </p>
            </div>

            {/* Parameters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#358245]/20">
              <div className="p-4 rounded-xl bg-[#0B1E1E] border border-[#358245]/20">
                <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#65D686]" />
                  <span>{isAr ? 'البروتوكول المعملي' : 'Laboratory Protocol'}</span>
                </div>
                <div className="text-xs font-bold text-[#65D686] font-mono">
                  {currentStage.scientificParam[lang]}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1E1E] border border-[#358245]/20">
                <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#65D686]" />
                  <span>{isAr ? 'معدل الحيوية المستهدف' : 'Target Viability Benchmark'}</span>
                </div>
                <div className="text-sm font-extrabold text-[#65D686] font-mono">
                  {currentStage.viability} True-to-Type
                </div>
              </div>
            </div>

            {/* Next / Previous Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#358245]/20 text-xs">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
                className="px-4 py-2 rounded-lg text-white/70 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#153C3C] hover:text-white font-semibold cursor-pointer transition-colors"
              >
                {isAr ? 'المرحلة السابقة' : 'Previous Stage'}
              </button>
              <button
                type="button"
                disabled={activeStep === GROWTH_PROCESS.length - 1}
                onClick={() => setActiveStep(activeStep + 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#358245] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2D723B] font-semibold cursor-pointer transition-colors"
              >
                <span>{isAr ? 'المرحلة التالية' : 'Next Stage'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
