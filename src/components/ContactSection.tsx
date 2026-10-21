import React, { useState } from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log('Form submitted:', formData);
    alert(isAr ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#358245] uppercase mb-2 block">
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E1E] tracking-tight leading-tight">
            {isAr
              ? 'نحن هنا للإجابة على استفساراتك'
              : 'We are Here to Answer Your Questions'}
          </h2>
          <p className="text-sm text-[#0B1E1E]/70 mt-3">
            {isAr
              ? 'فريق عمل إمبريو كالتشر مستعد لتقديم الاستشارات المتخصصة وتلبية طلباتكم الزراعية.'
              : 'The Embryo Culture team is ready to provide specialized consultations and fulfill your agricultural needs.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#f8fcf9] p-8 rounded-3xl border border-[#358245]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1E1E] mb-6">
                {isAr ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#358245]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#358245]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1E1E] mb-1">
                      {isAr ? 'العنوان' : 'Address'}
                    </h4>
                    <p className="text-sm text-[#0B1E1E]/70 leading-relaxed">
                      {isAr
                        ? 'الدور الأول، سنترو مول، منطقة اللوتس، التجمع الخامس، القاهرة الجديدة، مصر'
                        : 'First Floor, Centro Mall, Lotus Area, 5th Settlement, New Cairo, Egypt'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#358245]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#358245]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1E1E] mb-1">
                      {isAr ? 'رقم الهاتف' : 'Phone Number'}
                    </h4>
                    <p className="text-sm text-[#0B1E1E]/70 font-mono" dir="ltr">
                      +20 2538 3277
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#358245]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#358245]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1E1E] mb-1">
                      {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                    </h4>
                    <p className="text-sm text-[#358245] font-mono hover:underline cursor-pointer" dir="ltr">
                      sayed.samir@embryoculture.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl border border-[#358245]/20 shadow-xl relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#358245]/5 to-[#65D686]/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />

            <h3 className="text-2xl font-bold text-[#0B1E1E] mb-8">
              {isAr ? 'أرسل رسالة' : 'Send a Message'}
            </h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0B1E1E] mb-1.5">
                  {isAr ? 'الاسم بالكامل' : 'Full Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#358245]/50 focus:border-[#358245] transition-all text-sm text-[#0B1E1E]"
                  placeholder={isAr ? 'أدخل اسمك الكريم...' : 'Enter your full name...'}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0B1E1E] mb-1.5">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#358245]/50 focus:border-[#358245] transition-all text-sm text-[#0B1E1E]"
                    placeholder={isAr ? 'example@domain.com' : 'example@domain.com'}
                    dir="ltr"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0B1E1E] mb-1.5">
                    {isAr ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#358245]/50 focus:border-[#358245] transition-all text-sm text-[#0B1E1E]"
                    placeholder={isAr ? '+20 100 000 0000' : '+20 100 000 0000'}
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0B1E1E] mb-1.5">
                  {isAr ? 'تفاصيل الرسالة' : 'Message Details'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#358245]/50 focus:border-[#358245] transition-all text-sm text-[#0B1E1E] resize-none"
                  placeholder={isAr ? 'اكتب رسالتك أو استفسارك هنا...' : 'Write your message or inquiry here...'}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-[#358245] hover:bg-[#2D723B] text-white font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#358245] shadow-lg shadow-[#358245]/30 group"
            >
              <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
              <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
