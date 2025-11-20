
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'Mobile Solutions',
      description: 'Unleash the potential of mobile technology with our comprehensive mobile solutions. We specialize in creating dynamic, user-friendly, and innovative mobile applications tailored for both iOS and Android platforms.',
    },
    {
      id: '02',
      title: 'Web Solutions',
      description: 'Elevate your digital footprint with our bespoke web solutions. We focus on developing websites that are not only visually striking but also high-performing, SEO-friendly, and responsive across all devices.',
    },
    {
      id: '03',
      title: 'Custom Solutions',
      description: 'Recognize the uniqueness of your business with our custom solutions. We understand that one size doesn\'t fit all, which is why we offer tailored services ranging from custom software development to personalized digital solutions.',
    }
  ];

  return (
    <section id="services" className="pt-48 pb-24 -mt-32 bg-[#1A1A1A] text-white relative z-20 slant-top overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="reveal">
            <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="h-0.5 w-8 bg-brand mr-3"></div>
                <span className="text-brand font-bold uppercase tracking-wider text-sm">What We Do</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight text-center lg:text-left">
              Latest Way To Get <br />
              Web Solutions & <br />
              Business Growth
            </h2>

            <div className="space-y-12">
              {services.map((service) => (
                <div key={service.id} className="group border-b border-gray-800 pb-12 last:border-0 hover:border-brand/30 transition-colors duration-500">
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-sm font-medium text-gray-400 group-hover:border-brand group-hover:text-brand group-hover:bg-brand/10 transition-all duration-300">
                        {service.id}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand transition-colors">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center text-gray-500 group-hover:text-brand transition-colors cursor-pointer transform group-hover:translate-x-2 duration-300">
                         <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (Laptop Mockup) */}
          <div className="relative reveal delay-200 mt-10 lg:mt-0">
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
               <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="GideoniX Solutions" 
                  className="rounded-xl shadow-2xl border border-gray-800"
               />
               {/* Overlay Image representing the "floating screens" in the prompt */}
               <div className="absolute -top-10 -right-5 md:-right-10 w-1/2 h-auto z-20 animate-float hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    className="rounded-lg shadow-2xl border-4 border-[#1A1A1A]"
                    alt="Mobile App" 
                  />
               </div>
            </div>
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/5 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};