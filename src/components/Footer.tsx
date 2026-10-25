import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2A303B] py-8 text-[13.5px] text-[#8F96A3] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left">
          <span className="font-medium text-[#ECE8DE]">Shiva Sagar — UGC creator</span>
          <span className="hidden sm:inline-block text-[#2A303B]">•</span>
          <span>Faceless, voice-led content for finance apps</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:shivaugccreater@gmail.com"
            className="hover:text-[#ECE8DE] transition-colors"
          >
            shivaugccreater@gmail.com
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-md bg-[#1A202A] border border-[#2A303B] hover:border-[#C9A24B]/50 hover:text-[#C9A24B] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
