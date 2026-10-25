import React, { useState } from 'react';
import { Clock, CheckSquare, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Brief',
      summary: 'You send the app, the angle, and any must-hit points.',
      detail: 'Provide your TestFlight, App Store link, or web URL along with your core target demographic. You can also specify any compliance guidelines (e.g., APY disclaimers or fee notes).',
      deliverable: 'Approved project scope & angle kickoff within 24 hours.',
    },
    {
      num: 2,
      title: 'Script',
      summary: 'A voiceover script built around one hook, sent for your approval before I record.',
      detail: 'I write a conversational script optimized for the first 3 seconds of watch time. You review, suggest tweaks, and give the green light before any recording begins.',
      deliverable: 'Full script draft with visual screen-cue annotations.',
    },
    {
      num: 3,
      title: 'Record',
      summary: 'Screen capture and voiceover, shot vertical for your ad platform.',
      detail: 'Captured on physical iOS devices in 4K 60fps with native touch indicators. Voiceover is recorded on a Shure MV7 broadcast mic in an acoustically treated booth.',
      deliverable: 'Crisp screen capture synced with high-fidelity vocal track.',
    },
    {
      num: 4,
      title: 'Deliver',
      summary: 'Raw and edited cuts, usually within 3–5 days, with two revisions included.',
      detail: 'Final package includes the master 9:16 vertical MP4, burnt-in captions, optional SRT files, and two rounds of free revisions if anything needs adjusting.',
      deliverable: 'Ad-ready MP4 files via Google Drive or Dropbox.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-24 border-b border-[#2A303B] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C9A24B] mb-2 block">
              Workflow & SLA
            </span>
            <h2 className="font-display text-[28px] sm:text-[38px] text-[#ECE8DE] leading-tight">
              How a project runs
            </h2>
            <p className="mt-2 text-[17px] text-[#8F96A3] max-w-[560px]">
              Structured, predictable, and transparent from day one. You always approve the script before recording starts.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A202A] border border-[#2A303B] text-xs text-[#8F96A3]">
            <Clock className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>Average turnaround: 3–5 days</span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const isSelected = activeStep === step.num;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`p-6 rounded-[10px] border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1A202A] border-[#C9A24B]/50 shadow-[0_0_20px_rgba(201,162,75,0.08)]'
                    : 'bg-[#1A202A]/60 border-[#2A303B] hover:border-[#3a4150] hover:bg-[#1A202A]'
                }`}
              >
                <div>
                  <div className="font-display text-[32px] font-medium text-[#C9A24B] mb-2 leading-none">
                    {step.num}
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#ECE8DE] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] text-[#8F96A3] leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A303B]/60">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C9A24B] block mb-1">
                    What happens
                  </span>
                  <p className="text-[12.5px] text-[#8F96A3] leading-snug">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revisions & Guarantee Callout */}
        <div className="mt-10 p-5 rounded-lg bg-[#1A202A] border border-[#2A303B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7FAE8E]/15 border border-[#7FAE8E]/30 flex items-center justify-center text-[#7FAE8E] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#ECE8DE]">
                2 Revisions included on every deliverable
              </h4>
              <p className="text-xs text-[#8F96A3]">
                Need a pacing tweak, caption re-alignment, or specific zoom emphasis? Covered at zero extra charge.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="text-xs font-semibold text-[#C9A24B] hover:underline whitespace-nowrap flex items-center gap-1"
          >
            <span>See package pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
