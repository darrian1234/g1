
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-48 pb-24 -mt-24 bg-gray-50 relative z-10 slant-top-alt overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 reveal">
          <div className="lg:grid lg:grid-cols-2">
            
            {/* Form Section */}
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Let's Talk Business</h3>
              <p className="text-gray-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-gray-50" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-gray-50" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-brand text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/25 flex items-center justify-center transform hover:-translate-y-1">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="bg-[#1A1A1A] p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="p-2 bg-gray-800 rounded-lg mr-4 group-hover:bg-brand transition-colors">
                        <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Email Us</p>
                      <p className="font-medium">hello@gideonix.com</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="p-2 bg-gray-800 rounded-lg mr-4 group-hover:bg-brand transition-colors">
                        <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Call Us</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="p-2 bg-gray-800 rounded-lg mr-4 group-hover:bg-brand transition-colors">
                        <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Visit Us</p>
                      <p className="font-medium">123 Tech Avenue, Innovation District<br/>San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};