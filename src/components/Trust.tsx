import React from 'react';
import { Check, Shield, Lock, Mic, Headphones } from 'lucide-react';

export const Trust: React.FC = () => {
  const trustPoints = [
    {
      title: 'Script Approval Guarantee',
      text: 'The script is approved before I record, so there are no surprises in the final cut.',
    },
    {
      title: 'Prompt Turnaround',
      text: 'First draft within 3–5 days of the brief landing.',
    },
    {
      title: 'Perpetual Commercial Rights',
      text: 'Full usage rights for ads, organic, and web — no extra licensing fees.',
    },
    {
      title: 'Direct Creator Access',
      text: 'You reach me directly. No account manager in between.',
    },
  ];

  return (
    <section id="trust" className="py-20 md:py-24 border-b border-[#2A303B] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#C9A24B] mb-2 block">
          Client Guarantees
        </span>
        <h2 className="font-display text-[28px] sm:text-[38px] text-[#ECE8DE] leading-tight mb-8">
          What you can count on
        </h2>

        {/* 2x2 Trust Grid matching user styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {trustPoints.map((item, index) => (
            <div key={index} className="flex gap-4 items-start p-4 rounded-lg bg-[#1A202A]/40 border border-[#2A303B]/60">
              <div className="w-6 h-6 rounded-full bg-[#C9A24B]/15 text-[#7FAE8E] shrink-0 flex items-center justify-center mt-0.5 border border-[#7FAE8E]/30">
                <Check className="w-3.5 h-3.5 text-[#7FAE8E]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#ECE8DE] mb-1">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-[#8F96A3] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Specs Bar */}
        <div className="mt-12 p-5 rounded-lg bg-[#1A202A] border border-[#2A303B] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xs text-[#8F96A3] mb-1 font-mono uppercase">Microphone</div>
            <div className="text-xs sm:text-sm font-semibold text-[#ECE8DE]">Shure MV7 Broadcast</div>
          </div>
          <div>
            <div className="text-xs text-[#8F96A3] mb-1 font-mono uppercase">Screen Capture</div>
            <div className="text-xs sm:text-sm font-semibold text-[#ECE8DE]">4K 60FPS Native iOS/Android</div>
          </div>
          <div>
            <div className="text-xs text-[#8F96A3] mb-1 font-mono uppercase">Ad Standards</div>
            <div className="text-xs sm:text-sm font-semibold text-[#ECE8DE]">Safe Zones & 9:16 Cropped</div>
          </div>
          <div>
            <div className="text-xs text-[#8F96A3] mb-1 font-mono uppercase">Audio Quality</div>
            <div className="text-xs sm:text-sm font-semibold text-[#ECE8DE]">Acoustically Treated Space</div>
          </div>
        </div>
      </div>
    </section>
  );
};
