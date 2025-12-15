import React from 'react';
import { Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer className="bg-luxury-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-gold-600 to-gold-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden -mt-32 mb-16">
          <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-luxury-dark mb-2">Ready to transform your home?</h2>
            <p className="text-luxury-slate font-medium text-lg">ቤትዎን ለመቀየር ዝግጁ ኖት? አሁኑኑ ይደውሉልን!</p>
          </div>
          <a 
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="relative z-10 bg-white text-luxury-dark px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all flex items-center gap-3"
          >
            <Phone className="text-gold-600" />
            <span>Call Now</span>
          </a>
          
          {/* Decorative Circles */}
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gold-500 mb-6">HIGH 3D</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We provide the highest quality 3D wall panels in Ethiopia. Elevate your interior with our waterproof, fire-resistant, and aesthetically pleasing designs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-gold-500 flex-shrink-0 mt-1" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-gold-500 flex-shrink-0" size={20} />
                <span>{COMPANY_INFO.phone}</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
             <div className="flex gap-4">
                <a href={COMPANY_INFO.social.telegram} className="bg-gray-800 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                    <Send size={20} />
                </a>
                <a href={COMPANY_INFO.social.instagram} className="bg-gray-800 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                    <Instagram size={20} />
                </a>
                <a href={COMPANY_INFO.social.tiktok} className="bg-gray-800 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                    <Facebook size={20} />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} High 3D Wall Panels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;