export interface ReelSlot {
  id: string;
  badgeText: string;
  category: 'walkthrough' | 'review' | 'demo';
  title: string;
  caption: string;
  videoSrc: string;
  hookAngle: string;
  script: string;
}

export const INITIAL_REEL_SLOTS: ReelSlot[] = [
  {
    id: 'slot-1',
    badgeText: 'App walkthrough',
    category: 'walkthrough',
    title: 'Sample reel 01',
    caption: 'A demo UGC-style reel recorded by Shiva.',
    videoSrc: '/assets/aistudio/d9aacb37-a671-4b3a-ba7a-f67100658563_e1761d45.mp4',
    hookAngle: 'Genuine hands-on product walkthrough with real UI interaction',
    script: "A real voice walking through your product the way an actual user would. Real screen capture, authentic pacing, and native vertical format.",
  },
  {
    id: 'slot-2',
    badgeText: 'Honest review',
    category: 'review',
    title: 'Sample reel 02',
    caption: 'A demo UGC-style reel recorded by Shiva.',
    videoSrc: '/assets/aistudio/dcd6dd0f-66e9-4f35-9089-02f492e111a3_ec0ac946.mp4',
    hookAngle: 'A worth-it-or-not format, shot the way a genuine user records it',
    script: "Everyone is talking about this app. So I downloaded it to find out if there's a catch. Here's what they do right, and the one feature you need to know about.",
  },
  {
    id: 'slot-3',
    badgeText: 'Product demo',
    category: 'demo',
    title: 'Sample reel 03',
    caption: 'A demo UGC-style reel recorded by Shiva.',
    videoSrc: '/assets/aistudio/7bf97544-8e65-4db2-a0f8-aff9cc65cdf7_4c3f977f.mp4',
    hookAngle: 'Fast-paced UI speedrun highlighting core value proposition',
    script: "Most finance apps make onboarding feel complicated. Watch how fast you can execute a transfer and automate savings in under 20 seconds.",
  },
];
