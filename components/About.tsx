
import React from 'react';
import { Star, Plus } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 reveal text-center md:text-left">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none">
              Experience of <br />
              our Customer
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="text-2xl md:text-3xl font-medium text-gray-900">2025®</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1 */}
          <div className="space-y-6 reveal delay-100">
            {/* Card 1: Review */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 min-h-[320px] flex flex-col justify-between relative">
               <div>
                 <div className="text-right mb-4">
                    <span className="font-serif italic text-xl text-gray-900 font-medium">Incredible team!</span>
                 </div>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   They delivered exactly what we needed, on time and beyond expectations.
                 </p>
               </div>
               <div className="flex justify-between items-end">
                  <div className="flex text-black">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
               </div>
            </div>

            {/* Card 2: Profile */}
            <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 hover:-translate-y-1">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="James" className="w-12 h-12 rounded-full object-cover" />
               <div>
                  <h4 className="font-bold text-gray-900 text-sm">James Carter</h4>
                  <p className="text-xs text-gray-500">Wilson & Co</p>
               </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 reveal delay-200">
             {/* Card 1: Profile */}
             <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 hover:-translate-y-1">
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Sarah" className="w-12 h-12 rounded-full object-cover" />
               <div>
                  <h4 className="font-bold text-gray-900 text-sm">Sarah Jenkins</h4>
                  <p className="text-xs text-gray-500">TechFlow Inc.</p>
               </div>
            </div>

            {/* Card 2: Review */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 min-h-[320px] flex flex-col justify-between relative">
               <div>
                 <div className="text-right mb-4">
                    <span className="font-serif italic text-xl text-gray-900 font-medium">Pixel Perfect!</span>
                 </div>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   The attention to detail is unmatched. GideoniX truly understands modern web aesthetics.
                 </p>
               </div>
               <div className="flex justify-between items-end">
                  <div className="flex text-black">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>

          {/* Column 3: Main Stats */}
          <div className="reveal delay-300">
             <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative group hover:-translate-y-1">
                <div>
                   <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-6xl font-bold text-gray-900">4.9</span>
                      <span className="text-2xl text-gray-400">/5</span>
                   </div>
                   <p className="text-gray-500 leading-relaxed mb-8">
                      We've delivered <span className="font-bold text-gray-900">56+ projects</span> that help companies generate real results.
                   </p>
                </div>

                <div>
                   <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">GideoniX®</h4>
                      <div className="flex items-center gap-3">
                         <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                              <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                 <img src={`https://randomuser.me/api/portraits/men/${20+i}.jpg`} alt="User" className="w-full h-full object-cover grayscale" />
                              </div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold border-2 border-white">+</div>
                         </div>
                         <div className="flex text-black">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                         </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Trusted by clients worldwide</p>
                   </div>

                   <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-brand transition-colors duration-300 flex items-center justify-center group-hover:scale-[1.02] shadow-lg shadow-gray-200">
                      Leave a review
                   </button>
                </div>
             </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6 reveal delay-400">
             {/* Card 1 */}
             <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-gray-700 mb-6 text-lg">
                   "A smooth process from start to finish. Highly professional team!"
                </p>
                <div className="flex items-center gap-4">
                   <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Anna" className="w-12 h-12 rounded-full object-cover" />
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm">Anna Martinez</h4>
                      <p className="text-xs text-gray-500">Marketing Director</p>
                   </div>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-gray-700 mb-6 text-lg">
                   "Our new branding is exactly what we envisioned—clean, modern, and unique."
                </p>
                <div className="mb-4">
                   <span className="font-bold text-sm text-gray-900 bg-gray-100 px-2 py-1 rounded">#1 in our industry.</span>
                </div>
                <div className="flex items-center gap-4">
                   <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Emily" className="w-12 h-12 rounded-full object-cover" />
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm">Emily Davis</h4>
                      <p className="text-xs text-gray-500">Startup Hub</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};