
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center mb-6">
              <img src="https://www.gideonix.com/Gideonix%20Logo.png" alt="GideoniX" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              GideoniX is a premium digital agency providing top-tier web and mobile solutions. We turn complex challenges into elegant, scalable software.
            </p>
            <div className="flex space-x-3 justify-center lg:justify-start">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-colors cursor-pointer"><Facebook className="h-4 w-4" /></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-colors cursor-pointer"><Twitter className="h-4 w-4" /></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-colors cursor-pointer"><Linkedin className="h-4 w-4" /></div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-black mb-6">Menu</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-brand transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-black mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Report</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-black mb-6">Stay in Touch</h4>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="px-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-brand text-sm shadow-sm transition-colors"
              />
              <button className="px-4 py-3 bg-black text-white rounded-full hover:bg-brand transition-colors text-sm font-bold shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} GideoniX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
