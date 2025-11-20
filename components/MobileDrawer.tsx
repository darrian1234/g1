
import React, { useEffect } from 'react';
import { X, ChevronRight, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, links }) => {
  
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div 
        className={`absolute top-0 right-0 h-full w-[320px] sm:w-[400px] bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-8">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</span>
          <button 
            onClick={onClose}
            className="p-2 text-gray-900 hover:text-brand transition-colors rounded-full hover:bg-gray-100 focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-8 flex flex-col justify-center space-y-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-gray-100 pb-4 last:border-0"
            >
              <span className="text-3xl font-bold text-gray-900 group-hover:text-brand transition-colors duration-300">
                {link.name}
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                 <ChevronRight className="w-5 h-5" />
              </span>
            </a>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="bg-gray-50 p-8 border-t border-gray-100">
           {/* CTA Button */}
           <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center w-full bg-brand text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand/20 hover:bg-brand-dark hover:scale-[1.02] transition-all duration-300 mb-8 group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Brand & Socials */}
            <div className="flex flex-col items-center space-y-6">
               <div className="flex space-x-8 text-gray-400">
                 <a href="#" className="hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
                 <a href="#" className="hover:text-brand transition-colors"><Twitter className="w-5 h-5" /></a>
                 <a href="#" className="hover:text-brand transition-colors"><Linkedin className="w-5 h-5" /></a>
               </div>
               
               <div className="flex flex-col items-center">
                  <img 
                    src="https://www.gideonix.com/Gideonix%20Logo.png" 
                    alt="GideoniX" 
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" 
                  />
                  <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-widest">
                    © 2025 All Rights Reserved
                  </p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
