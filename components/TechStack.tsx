
import React from 'react';

const technologies = [
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Sass', icon: 'https://cdn.simpleicons.org/sass/CC6699' },
  { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/7AB55C' },
  { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
];

export const TechStack: React.FC = () => {
  return (
    <section className="bg-black py-24 overflow-hidden relative z-20">
      <div className="max-w-full">
        <div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {/* First loop */}
          <div className="flex gap-10 py-8 animate-scroll-right hover:[animation-play-state:paused] items-center whitespace-nowrap pl-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-full px-12 py-5 flex items-center gap-5 shadow-2xl transform transition-transform hover:scale-105 cursor-pointer"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                <span className="font-bold text-gray-900 text-3xl">{tech.name}</span>
              </div>
            ))}
          </div>
          {/* Second loop for seamless effect */}
          <div className="flex gap-10 py-8 animate-scroll-right hover:[animation-play-state:paused] items-center whitespace-nowrap pl-8" aria-hidden="true">
            {technologies.map((tech, index) => (
              <div
                key={`dup-${index}`}
                className="bg-white rounded-full px-12 py-5 flex items-center gap-5 shadow-2xl transform transition-transform hover:scale-105 cursor-pointer"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                <span className="font-bold text-gray-900 text-3xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
