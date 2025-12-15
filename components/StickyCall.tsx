import React, { useEffect, useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const StickyCall: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approx 600px)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-transform duration-500 ${visible ? 'translate-y-0' : 'translate-y-[200%]'}`}
    >
      <a 
        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
        className="flex items-center justify-center gap-3 bg-gold-600 text-white w-full py-4 rounded-xl shadow-2xl font-bold text-lg border border-gold-400/50 backdrop-blur-sm"
      >
        <PhoneCall size={22} className="animate-pulse" />
        Call Now / ይደውሉልን
      </a>
    </div>
  );
};

export default StickyCall;