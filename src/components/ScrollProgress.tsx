import React, { useEffect, useState } from 'react';
import { Language } from '../types';

interface ScrollProgressProps {
  lang: Language;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ lang }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const scrolled = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setProgress(scrolled);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const isAr = lang === 'ar';

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-black/5"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={isAr ? 'مؤشر تقدم التمرير' : 'Page scroll progress'}
    >
      <div
        className={`h-full w-full bg-gradient-to-r from-[#266234] via-[#358245] to-[#65D686] shadow-[0_0_8px_rgba(53,130,69,0.7)] transition-transform duration-75 ease-out ${
          isAr ? 'origin-right bg-gradient-to-l' : 'origin-left'
        }`}
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
};
