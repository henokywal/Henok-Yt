import React from 'react';
import { Phone, Menu } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-luxury-dark tracking-tight">
              HIGH<span className="text-gold-500">3D</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gold-600 font-medium transition-colors">Home</a>
            <a href="#gallery" className="text-gray-700 hover:text-gold-600 font-medium transition-colors">Gallery</a>
            <a href="#features" className="text-gray-700 hover:text-gold-600 font-medium transition-colors">Why Us</a>
            
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-luxury-dark text-white px-5 py-2.5 rounded-full font-semibold hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
             <button className="text-gray-700 p-2">
                <Menu size={28} />
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;