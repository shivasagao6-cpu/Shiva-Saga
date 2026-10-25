import React, { useState } from 'react';
import { ShieldCheck, Smartphone, Flame, Check, X, FileText, Zap } from 'lucide-react';

export const WhyFaceless: React.FC = () => {
  const [activeHookTab, setActiveHookTab] = useState<'problem' | 'curiosity' | 'speedrun' | 'verdict'>('problem');

  const hookExamples = {
    problem: {
      title: 'Problem-First Hook (High CPA Buster)',
      opener: '"If you still check three different banking apps every Sunday to see where your money went, stop."',
      strategy: 'Targets immediate daily friction. Triggers instant self-identification before mentioning the brand name.',
      metrics: 'Best for: Lowering cold audience CPA on TikTok & Meta Reels',
    },
    curiosity: {
      title: 'The "Is It Legit?" Curiosity Hook',
      opener: '"Everyone is posting about this 5% savings rate, so I put in $500 to see what the catch was."',
      strategy: 'Defuses financial skepticism by taking the customer’s side as an objective reviewer.',
      metrics: 'Best for: Neobanks, High-Yield accounts & Fintech launches',
    },
    speedrun: {
      title: 'The 15-Second Product Speedrun',
      opener: '"How to set up recurring crypto/stock buys without paying a $3 fee every time: 3 taps."',
      strategy: 'Zero fluff, pure screen demo. High visual retention with fast paced cursor/touch highlights.',
      metrics: 'Best for: App store installs, feature updates, onboarding retargeting',
    },
    verdict: {
      title: 'The Honest Worth-It Verdict',
      opener: '"Here is my honest take on this app after 14 days — what they do better than Chase, and one thing I hate."',
      strategy: 'Mentioning one minor flaw builds 10x higher trust on the core feature recommendation.',
      metrics: 'Best for: High-ticket fintech, wealth tech, and credit monitoring',
    },
  };

  return (
    <section id="approach" className="py-20 md:py-24 border-b border-[#2A303B] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C9A24B] mb-2 block">
              The Performance Thesis
            </span>
            <h2 className="font-display text-[28px] sm:text-[38px] text-[#ECE8DE] leading-tight mb-5">
              Why faceless works
            </h2>
            <p className="text-[17px] text-[#8F96A3] leading-relaxed mb-6">
              Most finance ads fail because they sound like ads. I open the app on screen — the onboarding, the paywall, the one feature worth mentioning — and talk through it like I'm explaining it to a friend. No studio lighting, no script that sounds read aloud, no actor pretending to discover your app for the first time.
            </p>

            {/* User's diff-list formatted with modern high-contrast styling */}
            <ul className="space-y-4 my-8">
              <li className="flex items-start gap-3.5 text-[15.5px] text-[#ECE8DE]">
                <span className="text-[#C9A24B] font-display text-lg select-none leading-none mt-1">—</span>
                <div>
                  <strong className="text-[#ECE8DE] font-medium block">Real screen recordings</strong>
                  <span className="text-[#8F96A3]">Not stock footage with a detached voice dropped on top. Users see the real product UI flowing in 60fps.</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 text-[15.5px] text-[#ECE8DE]">
                <span className="text-[#C9A24B] font-display text-lg select-none leading-none mt-1">—</span>
                <div>
                  <strong className="text-[#ECE8DE] font-medium block">One hook, not a feature checklist</strong>
                  <span className="text-[#8F96A3]">A script engineered around a single pain point or delight moment, rather than a boring grocery list read in order.</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 text-[15.5px] text-[#ECE8DE]">
                <span className="text-[#C9A24B] font-display text-lg select-none leading-none mt-1">—</span>
                <div>
                  <strong className="text-[#ECE8DE] font-medium block">Native vertical delivery</strong>
                  <span className="text-[#8F96A3]">Delivered in the exact 9:16 crop, safe zones, pacing, and caption styles that TikTok, Reels, and Shorts algorithms favor.</span>
                </div>
              </li>
            </ul>

            {/* Comparison Table: Face Actor vs Faceless Voice Walkthrough */}
            <div className="mt-8 p-5 rounded-lg bg-[#1A202A] border border-[#2A303B]">
              <div className="text-xs uppercase tracking-wider text-[#8F96A3] font-semibold mb-4">
                Comparison: Agency Influencer vs. Voice-Led Walkthrough
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3 rounded bg-[#12161C]/80 border border-[#2A303B]/60">
                  <div className="flex items-center gap-1.5 text-[#E06C75] font-semibold mb-2">
                    <X className="w-4 h-4" />
                    <span>Typical Actor UGC</span>
                  </div>
                  <p className="text-[#8F96A3] leading-relaxed">
                    Exaggerated facial acting, awkward script reading, product barely visible on screen, high licensing fees.
                  </p>
                </div>
                <div className="p-3 rounded bg-[#12161C]/80 border border-[#C9A24B]/30">
                  <div className="flex items-center gap-1.5 text-[#7FAE8E] font-semibold mb-2">
                    <Check className="w-4 h-4" />
                    <span>Shiva’s Faceless Style</span>
                  </div>
                  <p className="text-[#ECE8DE] leading-relaxed mb-3">
                    100% focus on your UI, authentic conversational cadence, high retention walkthroughs, zero extra licensing fees.
                  </p>
                  <a
                    href="https://instagram.com/shiva.ugc.creator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C9A24B] hover:underline font-mono"
                  >
                    <span>Instagram: @shiva.ugc.creator</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hook Strategy Showcase */}
          <div className="lg:col-span-5 bg-[#1A202A] border border-[#2A303B] rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A303B] mb-5">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C9A24B]" />
                <h3 className="font-sans font-semibold text-[15px] text-[#ECE8DE]">
                  Script Hook Formats
                </h3>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#C9A24B]/15 text-[#C9A24B] font-medium">
                Tested on paid ads
              </span>
            </div>

            {/* Hook Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {(['problem', 'curiosity', 'speedrun', 'verdict'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveHookTab(tab)}
                  className={`text-xs py-2 px-2.5 rounded-md text-left transition-all font-medium capitalize ${
                    activeHookTab === tab
                      ? 'bg-[#C9A24B] text-[#1A1508] font-semibold shadow-sm'
                      : 'bg-[#12161C] text-[#8F96A3] hover:text-[#ECE8DE] border border-[#2A303B]'
                  }`}
                >
                  {tab === 'problem' && '⚡ Pain-Point'}
                  {tab === 'curiosity' && '🔍 Curiosity'}
                  {tab === 'speedrun' && '⏱️ Speedrun'}
                  {tab === 'verdict' && '⭐ Honest Verdict'}
                </button>
              ))}
            </div>

            {/* Active Hook Detail Display */}
            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F96A3] font-semibold block mb-1">
                  {hookExamples[activeHookTab].title}
                </span>
                <div className="p-3.5 rounded-md bg-[#12161C] border border-[#2A303B] font-display text-[15px] italic text-[#ECE8DE] leading-relaxed">
                  {hookExamples[activeHookTab].opener}
                </div>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F96A3] font-semibold block mb-1">
                  Why It Converts
                </span>
                <p className="text-[13.5px] text-[#8F96A3] leading-relaxed">
                  {hookExamples[activeHookTab].strategy}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2A303B]/60 flex items-center justify-between text-xs text-[#7FAE8E]">
                <span>{hookExamples[activeHookTab].metrics}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
