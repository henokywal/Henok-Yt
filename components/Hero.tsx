import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/2hIq7ML.gif" 
          alt="Luxury 3D Wall Panels" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold-500/20 border border-gold-500/30 backdrop-blur-sm">
            <span className="text-gold-400 font-semibold tracking-wide uppercase text-sm">
              Premium Interior Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Transform Your Space <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">
              With 3D Panels
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-2 font-light">
            Luxury aesthetics, acoustic comfort, and easy installation.
          </p>
          <p className="text-lg md:text-xl text-gold-400 mb-8 font-amharic">
            ቤትዎን እና ቢሮዎን በዘመናዊ የ3D ግድግዳ ፓነሎች ያስውቡ!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 bg-gold-500 text-luxury-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            >
              <PhoneCall size={24} />
              Call Now
            </a>
            <a 
              href="#gallery"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              View Collection
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;