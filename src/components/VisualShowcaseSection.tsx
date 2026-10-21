import React, { useState } from 'react';
import { Language, ShowcaseImage } from '../types';
import { SHOWCASE_IMAGES } from '../data/content';
import { Maximize2, X, Sparkles, Building2 } from 'lucide-react';

interface VisualShowcaseSectionProps {
  lang: Language;
}

export const VisualShowcaseSection: React.FC<VisualShowcaseSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedImage, setSelectedImage] = useState<ShowcaseImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#FAFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#358245] uppercase mb-2 block">
              {isAr ? 'مرافقنا وتجهيزاتنا الميدانية' : 'Biotechnology Facilities & Field Evidence'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153C3C] tracking-tight leading-tight">
              {isAr
                ? 'داخل مختبرات وبيوت أقلمة إمبريو كالتشر'
                : 'Inside Embryo Culture: Cleanrooms, Hardening Bays & Field Trials'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#40625E]">
            <Building2 className="w-4 h-4 text-[#358245]" />
            <span>{isAr ? 'القاهرة الجديدة والمزارع الشريكة' : 'Cairo Cleanroom Suites & Partner Commercial Farms'}</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHOWCASE_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-3xl overflow-hidden bg-[#153C3C] shadow-lg border border-[#153C3C]/10 aspect-[16/10] cursor-pointer"
            >
              {/* Image with hover zoom */}
              <img
                src={img.src}
                alt={img.title[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback container if needed
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Scrim Overlay for WCAG Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#153C3C]/95 via-[#153C3C]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-[#65D686] border border-white/10">
                    {img.category[lang]}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#358245] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-semibold text-[#65D686] mb-1">
                    {img.stats[lang]}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {img.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                    {img.description[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#153C3C]/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#153C3C] rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#0E2828] text-white">
              <div className="flex items-center gap-2 text-xs font-mono text-[#65D686] mb-1">
                <span>{selectedImage.category[lang]}</span>
                <span>·</span>
                <span>{selectedImage.stats[lang]}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {selectedImage.title[lang]}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {selectedImage.description[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
