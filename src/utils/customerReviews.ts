export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number; // e.g. 5.0, 4.0, 4.8, 4.5
  description: string;
}

export const SAMPLE_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Emily Carter',
    location: 'Austin, Texas, USA',
    rating: 5.0,
    description: 'The video quality was excellent, with clean editing, engaging captions, and a professional finish. The pricing was affordable, and the final result offered great value for money.',
  },
  {
    id: 'rev-2',
    name: 'Jason Miller',
    location: 'Miami, Florida, USA',
    rating: 4.0,
    description: 'The editing was smooth, and the video looked professional. The pricing was reasonable, although I would have liked a little more flexibility with revisions.',
  },
  {
    id: 'rev-3',
    name: 'Sophia Bennett',
    location: 'Phoenix, Arizona, USA',
    rating: 4.8,
    description: 'I really like the polished style, clear captions, and attention to detail. The service offers good value for money and is suitable for promotional videos.',
  },
  {
    id: 'rev-4',
    name: 'Daniel Brooks',
    location: 'Los Angeles, California, USA',
    rating: 5.0,
    description: 'The final ad looked modern and engaging, with smooth transitions and strong visual storytelling. The pricing was fair for the quality of work.',
  },
  {
    id: 'rev-5',
    name: 'Olivia Wilson',
    location: 'Dallas, Texas, USA',
    rating: 4.5,
    description: 'The video was well edited and presented the product clearly. The overall price was budget-friendly, and the content had a professional finish.',
  },
  {
    id: 'rev-6',
    name: 'Ethan Parker',
    location: 'Orlando, Florida, USA',
    rating: 4.8,
    description: 'The promotional video looked clean, creative, and engaging. I appreciate the focus on quality, attractive presentation, and affordable pricing.',
  },
];
