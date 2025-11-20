import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] pt-0 pb-48 text-white border-t border-white/5 slant-bottom relative z-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Stats Row */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
            {[
              { number: '8', label: 'Years Of Experience' },
              { number: '125', label: "Project's Complete" },
              { number: '6', label: 'Countries' },
              { number: '384', label: 'Websites Created' }
            ].map((stat, index) => (
               <div key={index} className="flex flex-col items-start group reveal delay-100">
                  <div className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <CheckCircle2 className="w-6 h-6 text-brand" />
                  </div>
                  <div className="text-7xl md:text-8xl font-bold font-outline-dark text-transparent mb-4 group-hover:text-white/10 transition-colors duration-300 relative">
                     {stat.number}
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider border-t border-gray-800 pt-4 w-full group-hover:border-brand group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
               </div>
            ))}
         </div>

         {/* Award Banner */}
         <div className="relative max-w-4xl mx-auto reveal delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/20 to-transparent blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 overflow-hidden">
               <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-6 bg-black/40 rounded-xl">
                  
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-brand/10 rounded-lg border border-brand/20 text-brand">
                        <Award className="w-8 h-8" />
                     </div>
                     <div className="h-10 w-px bg-gray-700 hidden md:block"></div>
                     <div className="text-center md:text-left">
                         <span className="text-brand font-bold text-lg block md:inline md:mr-2">THE AWARDS</span>
                         <span className="text-xs text-gray-500 uppercase tracking-widest">2024 Winner</span>
                     </div>
                  </div>

                  <p className="text-sm text-gray-400 text-center md:text-left max-w-lg leading-relaxed">
                     <span className="font-bold text-white">GideoniX</span> is the 2024 Award-winning company for its <span className="text-white">React.js, Web Development</span> and <span className="text-white">WordPress services</span>.
                  </p>

                  <div className="hidden md:flex">
                     <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                  </div>

               </div>
            </div>
         </div>

       </div>
    </section>
  );
};