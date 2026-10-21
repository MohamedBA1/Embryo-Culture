import React from 'react';
import { Language } from '../types';
import { COMPANY_DETAILS } from '../data/content';
import {
  Quote,
  Mail,
  Phone,
  MapPin,
  Globe,
  ShieldCheck,
  Building2,
  Award,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ChairmanSectionProps {
  lang: Language;
}

export const ChairmanSection: React.FC<ChairmanSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const chairman = COMPANY_DETAILS.chairman;
  const contact = COMPANY_DETAILS.contact;

  return (
    <section id="chairman" className="relative py-24 lg:py-32 bg-white text-slate-900 overflow-hidden border-y border-slate-100">
      {/* Subtle modern background decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#358245]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#153C3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#153C3C_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#153C3C]/5 border border-[#358245]/20 text-[#153C3C] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#358245]" />
            <span>{isAr ? 'القيادة والرؤية الاستراتيجية' : 'Leadership & Strategic Vision'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E1E] tracking-tight leading-tight">
            {isAr ? 'كلمة مالك ومؤسس الشركة' : 'Founder & Chairman’s Statement'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {isAr
              ? 'رؤية وطنية طموحة تقود الابتكار الزراعي والتكنولوجيا الحيوية النباتية نحو آفاق المستقبل'
              : 'A visionary commitment driving botanical biotechnology, food sovereignty, and agronomic excellence'}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Big Portrait Column (Enlarged) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Premium Background Accent Card */}
              <div className="absolute -inset-5 bg-gradient-to-tr from-[#153C3C] via-[#358245] to-[#65D686] rounded-[3rem] opacity-20 blur-2xl -rotate-2" />

              <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl border-4 sm:border-8 border-white shadow-emerald-950/20 group">
                <img
                  src={chairman.image}
                  alt={isAr ? chairman.nameAr : chairman.nameEn}
                  className="w-full h-[520px] sm:h-[620px] lg:h-[680px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E1E]/95 via-[#0B1E1E]/30 to-transparent" />

                {/* Floating Tag inside photo - Compact & Elegant */}
                <div className="absolute bottom-5 sm:bottom-6 inset-x-0 flex justify-center px-4">
                  <div className="inline-flex items-center gap-3.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/70 text-slate-900 max-w-sm w-auto">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#153C3C]/10 flex items-center justify-center text-[#153C3C] flex-shrink-0 shadow-inner">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#358245]" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#153C3C] text-white text-[10px] font-bold mb-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#65D686] animate-pulse" />
                        {isAr ? 'مالك ومؤسس الصرح' : 'Owner & Founder'}
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-[#0B1E1E] tracking-tight leading-snug">
                        {isAr ? chairman.nameAr : chairman.nameEn}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#358245]">
                        {isAr ? chairman.titleAr : chairman.titleEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Letter & Contact Information Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Quote / Message Card */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm mb-8">
              <Quote className={`absolute top-6 ${isAr ? 'left-6' : 'right-6'} w-20 h-20 text-[#358245]/10 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#358245] uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#358245]" />
                  <span>{isAr ? 'رسالة رئيس مجلس الإدارة' : 'Official Message'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E1E] leading-snug mb-5">
                  {isAr
                    ? '«إن زراعة الأنسجة النباتية ليست مجرد علم مختبري، بل هي الجسر الحقيقي نحو السيادة الغذائية والاستدامة الزراعية.»'
                    : '“Plant tissue culture is not merely science; it is the fundamental bridge to food sovereignty and environmental resilience.”'}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  {isAr
                    ? 'منذ تأسيس إمبريو كالتشر، كان هدفنا الاستراتيجي توطين أدق تكنولوجيات التكاثر النباتي وحفظ السلالات النقية على أرض مصر. نحن ملتزمون بتوفير شتلات نسيجية عالية الإنتاجية وخالية تماماً من الفيروسات، لدعم المشروعات القومية الزراعية والمستثمرين محلياً وإقليمياً بأعلى معايير الجودة العالمية.'
                    : 'Since founding Embryo Culture, our strategic mission has been to localize the most sophisticated plant embryogenesis and germplasm conservation technologies. We are dedicated to providing high-yield, certified virus-free planting stock that empowers modern commercial agriculture and secures resilient ecosystems.'}
                </p>

                {/* Signature area */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-extrabold text-[#0B1E1E]">
                      {isAr ? chairman.nameAr : chairman.nameEn}
                    </span>
                    <span className="block text-xs text-slate-500 font-medium">
                      {isAr ? chairman.titleAr : chairman.titleEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#153C3C] bg-emerald-50 px-3 py-1.5 rounded-xl border border-[#358245]/20">
                    <ShieldCheck className="w-4 h-4 text-[#358245]" />
                    <span>{isAr ? 'اعتماد التكنولوجيا الحيوية' : 'Biotechnology Certified'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Official Contact Cards */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                {isAr ? 'بيانات التواصل الرسمي والمقر' : 'Official Contact & Corporate Office'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Office Email */}
                <a
                  href={`mailto:${chairman.nameEn.toLowerCase().replace(/\s+/g, '') === 'sayedsamir' ? 'sayed.samir@embryoculture.com' : contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#358245] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#153C3C]/5 text-[#153C3C] flex items-center justify-center group-hover:bg-[#153C3C] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-slate-500 font-medium">
                      {isAr ? 'البريد الإلكتروني المباشر' : 'Executive Email'}
                    </span>
                    <span className="block text-sm font-bold text-[#0B1E1E] group-hover:text-[#358245] transition-colors truncate">
                      {contact.email}
                    </span>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#358245] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#153C3C]/5 text-[#153C3C] flex items-center justify-center group-hover:bg-[#153C3C] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">
                      {isAr ? 'الهاتف المباشر للمكتب' : 'Executive Line'}
                    </span>
                    <span className="block text-sm font-bold text-[#0B1E1E] group-hover:text-[#358245] transition-colors" dir="ltr">
                      {contact.phone}
                    </span>
                  </div>
                </a>

                {/* Headquarters Location */}
                <div className="sm:col-span-2 flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#153C3C]/5 text-[#153C3C] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#358245]" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">
                      {isAr ? 'المقر الإداري والمختبرات' : 'Headquarters & Facilities'}
                    </span>
                    <span className="block text-sm font-semibold text-[#0B1E1E] leading-relaxed">
                      {isAr ? contact.addressAr : contact.addressEn}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
