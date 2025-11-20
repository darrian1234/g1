import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Giant',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1481487484168-9b930d5b4115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgClass: 'bg-gradient-to-br from-gray-100 to-gray-200',
    textColor: 'text-gray-900'
  },
  {
    title: 'Cloud ERP Solutions',
    category: 'SaaS Product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgClass: 'bg-gradient-to-br from-orange-50 to-amber-100',
    textColor: 'text-orange-900'
  },
  {
    title: 'Modern Architecture',
    category: 'Corporate Identity',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgClass: 'bg-gradient-to-br from-slate-100 to-slate-200',
    textColor: 'text-slate-900'
  },
  {
    title: 'Lifestyle & Travel',
    category: 'Digital Platform',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    textColor: 'text-indigo-900'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden w-full">
      
      {/* Aesthetic Background Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob"></div>
         <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Design */}
      <div className="text-center mb-24 relative reveal z-10">
        <h2 className="text-[20vw] md:text-[15rem] font-black text-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none tracking-tighter z-0">
          LOOK
        </h2>
        <div className="relative z-10">
            <p className="text-brand font-bold uppercase tracking-widest mb-2">Our Portfolio</p>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900">
            What we've done
            </h3>
        </div>
      </div>

      {/* Portfolio Grid - Staggered Layout */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative rounded-[3rem] overflow-hidden h-[500px] lg:h-[650px] ${project.bgClass} transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 reveal delay-${index * 100} ${index % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              {/* Inner Content Wrapper */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 lg:p-16">
                
                {/* CSS Laptop Mockup */}
                <div className="relative w-full max-w-xl transform group-hover:scale-[1.03] group-hover:-translate-y-4 transition-transform duration-700 ease-out z-10">
                   {/* Laptop Lid */}
                   <div className="bg-[#1a1a1a] rounded-t-2xl p-[2%] pb-0 shadow-2xl mx-auto w-[90%] relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/10 rounded-full blur-sm"></div> {/* Camera */}
                      {/* Screen */}
                      <div className="bg-black rounded-t-lg p-[1%]">
                         <div className="bg-white rounded-t-md overflow-hidden aspect-[16/10] relative group-hover:shadow-inner">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover object-top"
                            />
                            {/* Shine effect */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none"></div>
                         </div>
                      </div>
                   </div>
                   {/* Laptop Base */}
                   <div className="bg-[#262626] h-[12px] w-full rounded-b-xl shadow-xl relative mt-[-1px]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[4px] bg-[#333] rounded-b-md"></div>
                   </div>
                   {/* Shadow below laptop */}
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Hover Info Card - Slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] z-20">
                   <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl flex items-center justify-between border border-white/20">
                      <div>
                         <span className={`text-sm font-bold uppercase tracking-wider ${project.textColor} opacity-70 mb-1 block`}>{project.category}</span>
                         <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h4>
                      </div>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-500 shadow-lg">
                         <ArrowUpRight className="w-6 h-6" />
                      </div>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};