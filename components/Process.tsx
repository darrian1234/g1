import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    { number: '01', title: 'Discovery', desc: 'We analyze your requirements and business goals.' },
    { number: '02', title: 'Design', desc: 'Creating intuitive UI/UX and system architecture.' },
    { number: '03', title: 'Development', desc: 'Writing clean, scalable, and efficient code.' },
    { number: '04', title: 'Launch', desc: 'Deploying your solution and providing support.' },
  ];

  return (
    <section id="process" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-2">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Development Process
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 border border-gray-800 rounded-2xl hover:border-orange-600 transition-colors duration-300 group">
              <div className="text-6xl font-black text-gray-800 absolute top-4 right-4 opacity-50 group-hover:text-orange-900/50 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-orange-600 mb-6"></div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};