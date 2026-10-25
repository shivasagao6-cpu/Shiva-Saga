import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { audioSimulator } from '../utils/audioSimulator';

interface HeroProps {
  onStartProject: () => void;
  onSeeReels: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onSeeReels }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    audioSimulator.setListener((playing) => {
      setIsPlayingAudio(playing);
    });
    return () => {
      audioSimulator.stop();
    };
  }, []);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      audioSimulator.stop();
    } else {
      audioSimulator.playCadenceSample(6);
    }
  };

  // Waveform bars with predefined heights
  const waveHeights = [
    30, 70, 45, 90, 35, 60, 25, 80, 50, 40,
    95, 55, 30, 65, 42, 75, 33, 58, 48, 70,
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#2A303B] overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#C9A24B]/6 via-[#C9A24B]/2 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        {/* Category kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A202A] border border-[#C9A24B]/30 text-[#C9A24B] text-[13px] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Faceless • High-Retention • Direct-Response UGC</span>
        </div>

        {/* Main Headline with Newsreader serif */}
        <h1 className="font-display text-[36px] sm:text-[46px] md:text-[58px] text-[#ECE8DE] leading-[1.12] tracking-tight max-w-[820px]">
          Voice-led UGC for fintech and finance apps.
        </h1>

        {/* Subtitle / Lead */}
        <p className="mt-6 text-[17px] sm:text-[19px] text-[#8F96A3] max-w-[620px] leading-relaxed font-normal">
          No face on camera — just a real voice walking through your product the way an actual user would.
          I screen-record genuine app walkthroughs and voiceover reviews, built for performance ads and organic UGC feeds.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onSeeReels}
            className="inline-flex items-center justify-center bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] px-7 py-3.5 rounded-md font-semibold text-[15px] transition-all hover:shadow-[0_0_22px_rgba(201,162,75,0.3)] cursor-pointer"
          >
            See the demo reels
          </button>

          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center border border-[#2A303B] hover:border-[#C9A24B]/60 text-[#ECE8DE] bg-[#1A202A]/60 hover:bg-[#1A202A] px-6 py-3.5 rounded-md text-[15px] font-medium transition-all cursor-pointer"
          >
            Start a project
          </button>

          {/* Voice Cadence Tone Sample Button */}
          <button
            onClick={handleToggleAudio}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-[#1A202A] border border-[#2A303B] hover:border-[#C9A24B]/40 text-xs sm:text-sm text-[#8F96A3] hover:text-[#ECE8DE] transition-all cursor-pointer"
            title="Sample Shiva's voiceover pace and delivery"
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4 text-[#C9A24B] animate-pulse" />
                <span className="text-[#C9A24B] font-medium">Playing voice cadence (Stop)</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#C9A24B]" />
                <span>Hear sample voiceover tone</span>
              </>
            )}
          </button>
        </div>

        {/* Animated Waveform from user HTML */}
        <div className="mt-12 pt-6 border-t border-[#2A303B]/60 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8F96A3]/70 font-semibold mb-3 flex items-center gap-2">
              <span>Acoustic Profile</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]"></span>
              <span>Conversational • Broadcast Shure MV7 Mic</span>
            </div>

            <div
              className="flex items-end gap-1 sm:gap-1.5 h-16 max-w-[560px] cursor-pointer group overflow-hidden"
              onClick={handleToggleAudio}
              role="button"
              tabIndex={0}
              aria-label="Click to play vocal cadence preview"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggleAudio()}
            >
              {waveHeights.map((h, i) => {
                const animDuration = 1.1 + ((i * 7) % 10) * 0.1;
                const dynamicHeight = isPlayingAudio ? Math.min(100, h * 1.25) : h;
                return (
                  <span
                    key={i}
                    style={{
                      height: `${dynamicHeight}%`,
                      animationDuration: `${animDuration}s`,
                      animationPlayState: isPlayingAudio ? 'running' : 'running',
                    }}
                    className={`block w-1.5 sm:w-2 shrink-0 rounded-full transition-all duration-300 ${
                      isPlayingAudio
                        ? 'bg-gradient-to-t from-[#7A5F23] to-[#FFD573] shadow-[0_0_8px_rgba(201,162,75,0.4)]'
                        : 'bg-gradient-to-t from-[#7A5F23] to-[#C9A24B]'
                    } animate-wave-bar group-hover:brightness-110`}
                  />
                );
              })}
            </div>
          </div>

          {/* Quick value props */}
          <div className="grid grid-cols-2 gap-3 text-xs text-[#8F96A3]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7FAE8E] shrink-0" />
              <span>Full ad usage rights</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7FAE8E] shrink-0" />
              <span>3–5 day delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7FAE8E] shrink-0" />
              <span>2 revisions included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7FAE8E] shrink-0" />
              <span>Starting at $75</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
