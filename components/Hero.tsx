
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const logos = [
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' },
    { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png' },
    { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png' },
    { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png' },
    { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Text Content */}
          <div className="reveal order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight mx-auto lg:mx-0">
              Your Global <br />
              Software Development <br />
              Partner
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
               High performing offshore development teams and consultants worldwide. We build the scalable technology that powers your business growth.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a href="#about" className="inline-flex items-center text-brand font-bold text-lg hover:text-brand-dark transition-colors group">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Images Grid */}
          <div className="flex gap-4 md:gap-6 h-[500px] md:h-[600px] reveal delay-200 order-1 lg:order-2">
            <div className="w-1/2 h-full pt-12">
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Team Meeting" 
                 className="w-full h-full object-cover rounded-2xl shadow-lg"
               />
            </div>
            <div className="w-1/2 h-full pb-12">
               <img 
                 src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Developer" 
                 className="w-full h-full object-cover rounded-2xl shadow-lg grayscale"
               />
            </div>
          </div>

        </div>

        {/* Animated Scrolling Logos */}
        <div className="border-t border-gray-100 pt-16 reveal delay-300 overflow-hidden relative">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {/* Logo Track 1 */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
              {logos.map((logo, index) => (
                <li key={index}>
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </li>
              ))}
            </ul>
            {/* Logo Track 2 (Duplicate for seamless loop) */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
              {logos.map((logo, index) => (
                <li key={`dup-${index}`}>
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};