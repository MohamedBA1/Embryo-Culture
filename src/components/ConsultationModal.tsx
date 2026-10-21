import React, { useState } from 'react';
import { Language, SolutionItem } from '../types';
import { COMPANY_DETAILS, SOLUTIONS } from '../data/content';
import { X, CheckCircle2, Send, PhoneCall, Building2, User, Mail, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedSolution?: SolutionItem | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedSolution,
}) => {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cropInterest: preselectedSolution ? preselectedSolution.title[lang] : '',
    acreage: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#153C3C]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#153C3C]/15 relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#40625E] hover:bg-[#F2F7F4] hover:text-[#153C3C] cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#EBF4EE] text-[#358245] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#153C3C] mb-2">
              {isAr ? 'تم استلام طلب الاستشارة بنجاح!' : 'Consultation Request Received!'}
            </h3>
            <p className="text-sm text-[#40625E] max-w-md mx-auto mb-6">
              {isAr
                ? 'سيتواصل معك أحد خبرائنا الزراعيين من مكتب القاهرة خلال 24 ساعة لبحث متطلبات مزرعتك.'
                : 'One of our senior agronomists from our Cairo headquarters will contact you within 24 business hours.'}
            </p>
            <div className="p-4 rounded-xl bg-[#F4F8F5] border border-[#153C3C]/10 text-xs text-[#153C3C]">
              <span>{isAr ? 'للاتصال العاجل: 3277 2538 20+' : 'For urgent requests: +20 2538 3277'}</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#358245] uppercase tracking-wider mb-1">
              <PhoneCall className="w-4 h-4" />
              <span>{isAr ? 'حجز استشارة زراعية وفنية' : 'Schedule Agronomic Consultation'}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#153C3C] mb-2">
              {isAr
                ? 'تواصل مع فريق إمبريو كالتشر العلمي'
                : 'Connect with Embryo Culture Agronomists'}
            </h3>
            <p className="text-xs sm:text-sm text-[#40625E] mb-6">
              {isAr
                ? 'حدد احتياجات مزرعتك أو استفسارك حول أصناف الشتلات النسيجية للحصول على دراسة فنية مخصصة.'
                : 'Specify your agricultural project requirements or inquiries regarding in vitro micropropagated cultivars.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#153C3C] mb-1">
                    {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAr ? 'مثال: م. أحمد عبد الله' : 'e.g. Dr. John Carter'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFDFB] border border-[#153C3C]/20 text-xs text-[#153C3C] focus:outline-none focus:border-[#358245]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#153C3C] mb-1">
                    {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFDFB] border border-[#153C3C]/20 text-xs text-[#153C3C] focus:outline-none focus:border-[#358245]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#153C3C] mb-1">
                    {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+20 100 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFDFB] border border-[#153C3C]/20 text-xs text-[#153C3C] focus:outline-none focus:border-[#358245]"
                  />
                </div>

                {/* Company / Farm Name */}
                <div>
                  <label className="block text-xs font-bold text-[#153C3C] mb-1">
                    {isAr ? 'اسم المزرعة أو الشركة' : 'Farm / Organization Name'}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={isAr ? 'مزرعة الوادي الجديد' : 'Acme Agro Ltd.'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFDFB] border border-[#153C3C]/20 text-xs text-[#153C3C] focus:outline-none focus:border-[#358245]"
                  />
                </div>
              </div>

              {/* Crop Interest Selector */}
              <div>
                <label className="block text-xs font-bold text-[#153C3C] mb-1">
                  {isAr ? 'الصنف أو الخدمة المطلوبة' : 'Crop Cultivar or Service of Interest'}
                </label>
                <select
                  value={formData.cropInterest}
                  onChange={(e) => setFormData({ ...formData, cropInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFDFB] border border-[#153C3C]/20 text-xs text-[#153C3C] focus:outline-none focus:border-[#358245]"
                >
                  <option value="">{isAr ? 'اختر الصنف أو الخدمة...' : 'Select service or crop cultivar...'}</option>
                  {SOLUTIONS.map((s) => (
                    <option key={s.id} value={s.title[lang]}>
                      {s.title[lang]}
                    </option>
                  ))}
                  <option value="Date Palm Tissue Culture">{isAr ? 'فسائل نخيل نسيجية (مجدول / برحي / سيوي)' : 'Date Palm Tissue Culture (Medjool/Barhi)'}</option>
                  <option value="Elite Berries & Banana">{isAr ? 'شتلات توت وفراولة وموز نسيجي' : 'Elite Berries & Commercial Banana'}</option>
                  <option value="Custom Micropropagation">{isAr ? 'إكثار نسيجي مخصص لصنف خاص' : 'Custom Embryo Culture for Proprietary Cultivar'}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#153C3C] mb-1">
                  {isAr ? 'تفاصيل المشروع والمساحة' : 'Project Details & Target Volume'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isAr ? 'أدخل المساحة بالمزرعة أو عدد الشتلات المطلوب توريدها...' : 'Specify acreage, planting timeline, or estimated seedling volume...'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFDFB] border border-[#153C3C]/20 text-xs text-[#153C3C] focus:outline-none focus:border-[#358245]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-[#40625E]">
                  <span>{COMPANY_DETAILS.contact.addressEn}</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#153C3C] hover:bg-[#1E4F4F] text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.98]"
                >
                  <span>{isAr ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}</span>
                  <Send className="w-3.5 h-3.5 text-[#65D686]" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
