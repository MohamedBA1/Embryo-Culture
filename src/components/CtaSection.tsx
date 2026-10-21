import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_DETAILS } from '../data/content';
import { LeafContourWatermark } from './EmbryoLogo';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const isAr = lang === 'ar';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#153C3C] text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#358245]/20 blur-[140px] pointer-events-none" />

      {/* Large Botanical Contour Rising from Bottom Center */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[340px] sm:w-[480px] pointer-events-none opacity-20">
        <LeafContourWatermark color="#65D686" opacity={0.3} className="w-full h-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Slogan Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#65D686] text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-[#65D686]" />
          <span>{COMPANY_DETAILS.sloganEn}</span>
          <span>·</span>
          <span className="font-['IBM_Plex_Sans_Arabic']">{COMPANY_DETAILS.sloganAr}</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {isAr ? (
            <>
              <span>ننمي الأفكار.</span>{' '}
              <span className="text-[#65D686]">نرعى الحياة.</span>
            </>
          ) : (
            <>
              <span>Growing Ideas.</span>{' '}
              <span className="text-[#65D686]">Nurturing Life.</span>
            </>
          )}
        </h2>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
          {isAr
            ? 'سواء كنت تخطط لمشروع زراعي تجاري واسع، أو تحتاج إلى إكثار نسيجي معتمد لأصناف عالية القيمة، فريقنا العلمي في القاهرة جاهز لخدمتك.'
            : 'Whether establishing a commercial crop plantation or seeking custom in vitro multiplication protocols for elite germplasm, our Cairo scientific team is ready to partner with you.'}
        </p>

        {/* Primary Interactive Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-[#153C3C] bg-white hover:bg-[#EBF4EE] rounded-xl shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <span>{isAr ? 'ابدأ المحادثة الآن' : 'Start a Conversation'}</span>
            <ArrowUpRight className={`w-4 h-4 text-[#358245] ${isAr ? 'rotate-[-90deg]' : ''}`} />
          </button>

          <a
            href="tel:+2025383277"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all duration-200"
          >
            <span>{isAr ? 'اتصال مباشر: 3277 2538 20+' : 'Direct Call: +20 2538 3277'}</span>
          </a>
        </div>

        {/* Quick Email Registration Bar */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isAr ? 'أدخل بريدك الإلكتروني لتلقي الكتالوج' : 'Enter your email for our crop cultivar catalogue'}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#65D686]"
            />
            <button
              type="submit"
              className="px-4 py-3 rounded-xl bg-[#358245] text-white text-xs font-bold hover:bg-[#2D723B] transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>{isAr ? 'إرسال' : 'Request'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {submitted && (
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#65D686] animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isAr
                  ? 'تم استلام طلبك بنجاح! سيتم إرسال الملف إليك.'
                  : 'Thank you! The catalogue has been dispatched to your inbox.'}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
