import React, { useState, useRef } from 'react';
import {
  Upload,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  Video,
  X,
  Check,
} from 'lucide-react';
import { INITIAL_REEL_SLOTS, ReelSlot } from '../data/reels';

interface DemoReelsProps {
  onSelectReelForBrief: (reelTitle: string) => void;
}

export const DemoReels: React.FC<DemoReelsProps> = ({ onSelectReelForBrief }) => {
  const [slots, setSlots] = useState<ReelSlot[]>(INITIAL_REEL_SLOTS);
  const [activeModalSlot, setActiveModalSlot] = useState<ReelSlot | null>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleFileUpload = (slotId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setSlots((prev) =>
        prev.map((slot) =>
          slot.id === slotId ? { ...slot, videoSrc: objectUrl } : slot
        )
      );
    }
  };

  const handleSetUrl = (slotId: string) => {
    if (urlInput.trim()) {
      setSlots((prev) =>
        prev.map((slot) =>
          slot.id === slotId ? { ...slot, videoSrc: urlInput.trim() } : slot
        )
      );
      setUrlInput('');
      setUploadTargetId(null);
    }
  };

  return (
    <section id="work" className="py-20 md:py-24 border-t border-[#2A303B] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-[26px] sm:text-[36px] text-[#ECE8DE] leading-tight mb-2">
              Demo reels
            </h2>
            <p className="text-[17px] text-[#8F96A3] max-w-[560px]">
              A few sample reels showing the format and tone. Vertical 9:16 screen walkthroughs and voiceover reviews.
            </p>
          </div>

          <div className="text-xs text-[#8F96A3] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A24B]"></span>
            <span>3 Video Player Cards • Upload your own video files</span>
          </div>
        </div>

        {/* 3-Column Video Cards Grid (Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {slots.map((slot, index) => {
            const hasVideo = Boolean(slot.videoSrc);

            return (
              <div
                key={slot.id}
                className="group bg-[#1A202A] border border-[#2A303B] hover:border-[#3a4150] rounded-[10px] overflow-hidden transition-all duration-200 flex flex-col shadow-lg"
              >
                {/* 9:16 Screen Frame / Video Upload Area */}
                <div className="relative aspect-[9/16] w-full bg-[#161B22] overflow-hidden flex items-center justify-center border-b border-[#2A303B]">
                  {/* Small rounded badge in top-left corner */}
                  <div className="absolute top-3 left-3 z-30 bg-[#12161C]/85 backdrop-blur-md border border-[#C9A24B]/40 text-[#C9A24B] text-[12px] font-semibold px-3 py-1 rounded-full pointer-events-none shadow-sm">
                    {slot.badgeText}
                  </div>

                  {/* Video Player or Upload Area */}
                  {hasVideo ? (
                    <div className="relative w-full h-full group/video">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                        src={slot.videoSrc}
                      >
                        Your browser does not support the video tag.
                      </video>

                      {/* Replace Video Button Overlay */}
                      <div className="absolute bottom-3 right-3 z-30 opacity-0 group-hover/video:opacity-100 transition-opacity flex items-center gap-2">
                        <button
                          onClick={() => fileInputRefs.current[slot.id]?.click()}
                          title="Upload new video file"
                          className="bg-[#12161C]/90 hover:bg-[#12161C] border border-[#2A303B] text-xs text-[#ECE8DE] hover:text-[#C9A24B] px-3 py-1.5 rounded-md backdrop-blur-md flex items-center gap-1.5 cursor-pointer shadow-lg"
                        >
                          <Upload className="w-3 h-3 text-[#C9A24B]" />
                          <span>Replace video</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Video Upload Area (Manual Upload Zone) */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#1A202A] to-[#12161C]">
                      <div className="w-14 h-14 rounded-full bg-[#12161C] border border-[#2A303B] flex items-center justify-center text-[#C9A24B] mb-3 group-hover:scale-105 transition-transform">
                        <Video className="w-6 h-6" />
                      </div>
                      <h4 className="font-display text-base text-[#ECE8DE] mb-1">
                        Upload Reel Video
                      </h4>
                      <p className="text-xs text-[#8F96A3] max-w-[210px] mb-5 leading-relaxed">
                        Manually upload your MP4 or WebM video file for this slot.
                      </p>

                      <div className="flex flex-col gap-2 w-full max-w-[180px]">
                        <button
                          onClick={() => fileInputRefs.current[slot.id]?.click()}
                          className="w-full py-2.5 px-3 rounded-md bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Choose File</span>
                        </button>

                        <button
                          onClick={() => setUploadTargetId(slot.id)}
                          className="w-full py-1.5 px-3 rounded-md bg-[#12161C] border border-[#2A303B] hover:border-[#C9A24B]/40 text-[#8F96A3] hover:text-[#ECE8DE] text-[11px] transition-colors cursor-pointer"
                        >
                          Or paste URL
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    className="hidden"
                    ref={(el) => (fileInputRefs.current[slot.id] = el)}
                    onChange={(e) => handleFileUpload(slot.id, e)}
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[17px] font-medium text-[#ECE8DE] mb-1">
                      {slot.title}
                    </h3>
                    <p className="text-[14px] text-[#8F96A3] leading-relaxed mb-4">
                      {slot.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2A303B]/60 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalSlot(slot)}
                      className="text-xs text-[#8F96A3] hover:text-[#C9A24B] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Script notes</span>
                    </button>

                    <button
                      onClick={() => onSelectReelForBrief(slot.title)}
                      className="text-xs font-semibold text-[#ECE8DE] hover:text-[#C9A24B] transition-colors cursor-pointer"
                    >
                      Request format →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video URL Input Modal */}
        {uploadTargetId && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#1A202A] border border-[#2A303B] rounded-xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A303B] mb-4">
                <h3 className="font-display text-lg text-[#ECE8DE]">
                  Attach Video via URL
                </h3>
                <button
                  onClick={() => setUploadTargetId(null)}
                  className="text-[#8F96A3] hover:text-[#ECE8DE] p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#8F96A3] mb-4">
                Enter a direct video URL (.mp4, .webm) or CDN link to display in this card:
              </p>

              <input
                type="url"
                placeholder="https://..."
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3 py-2 text-sm text-[#ECE8DE] outline-none mb-4"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setUploadTargetId(null)}
                  className="px-3.5 py-1.5 rounded text-xs text-[#8F96A3] hover:text-[#ECE8DE]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSetUrl(uploadTargetId)}
                  className="px-4 py-1.5 rounded bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] font-semibold text-xs transition-colors"
                >
                  Set Video
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Script Notes Modal */}
        {activeModalSlot && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1A202A] border border-[#2A303B] rounded-xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex items-start justify-between pb-3 border-b border-[#2A303B] mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9A24B] font-semibold">
                    {activeModalSlot.badgeText}
                  </span>
                  <h3 className="font-display text-xl text-[#ECE8DE] mt-0.5">
                    {activeModalSlot.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalSlot(null)}
                  className="text-[#8F96A3] hover:text-[#ECE8DE] p-1 rounded bg-[#12161C] border border-[#2A303B]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs uppercase text-[#8F96A3] font-semibold block mb-1">
                    Angle & Hook
                  </span>
                  <p className="text-[#ECE8DE] bg-[#12161C] p-3 rounded border border-[#2A303B] italic">
                    "{activeModalSlot.hookAngle}"
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase text-[#8F96A3] font-semibold block mb-1">
                    Sample Voiceover Script
                  </span>
                  <p className="text-[#8F96A3] bg-[#12161C] p-3 rounded border border-[#2A303B] leading-relaxed">
                    {activeModalSlot.script}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2A303B] flex justify-end gap-3">
                <button
                  onClick={() => setActiveModalSlot(null)}
                  className="px-3.5 py-1.5 rounded text-xs text-[#8F96A3] hover:text-[#ECE8DE]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalSlot.title;
                    setActiveModalSlot(null);
                    onSelectReelForBrief(title);
                  }}
                  className="px-4 py-1.5 rounded bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] font-semibold text-xs transition-colors"
                >
                  Request this style
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
