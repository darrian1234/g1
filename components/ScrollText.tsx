
import React from 'react';

export const ScrollText: React.FC = () => {
  return (
    <div className="bg-brand py-24 overflow-hidden whitespace-nowrap relative z-20">
      <div className="inline-flex animate-scroll">
        <div className="flex items-center gap-12 text-white font-black text-7xl md:text-9xl uppercase tracking-tighter">
          <span>Transforming Ideas Into Digital Reality</span>
          <span className="text-black/20">•</span>
          <span>GideoniX</span>
          <span className="text-black/20">•</span>
          <span>Digital Excellence</span>
          <span className="text-black/20">•</span>
        </div>
        <div className="flex items-center gap-12 text-white font-black text-7xl md:text-9xl uppercase tracking-tighter ml-12" aria-hidden="true">
          <span>Transforming Ideas Into Digital Reality</span>
          <span className="text-black/20">•</span>
          <span>GideoniX</span>
          <span className="text-black/20">•</span>
          <span>Digital Excellence</span>
          <span className="text-black/20">•</span>
        </div>
      </div>
    </div>
  );
};
