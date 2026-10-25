export interface PricingTier {
  id: 'starter' | 'growth' | 'pro';
  name: string;
  price: number;
  deliverables: string;
  deliveryTime: string;
  popular?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    deliverables: '3 reels and 1 post',
    deliveryTime: 'delivered in 3 days',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 180,
    deliverables: '6 reels and 2 posts',
    deliveryTime: 'delivered in about 5 days',
    popular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 300,
    deliverables: '10 reels and 3 posts',
    deliveryTime: 'delivered in 1 week',
  },
];

export interface BriefData {
  clientName: string;
  phoneNumber: string;
  businessName: string;
  facebookLink: string;
  instagramLink: string;
  productName: string;
  projectDetails: string;
  selectedPackage?: string;
}

export function generateMailtoUrl(brief: BriefData): string {
  const recipient = 'shivaugccreater@gmail.com';
  const subject = encodeURIComponent('New UGC project inquiry');

  const bodyLines = [
    `New UGC Project Inquiry from Portfolio`,
    `=====================================`,
    `• Client Name: ${brief.clientName || 'N/A'}`,
    `• Phone Number: ${brief.phoneNumber || 'N/A'}`,
    `• Business / Brand Name: ${brief.businessName || 'N/A'}`,
    `• Facebook Page / Link: ${brief.facebookLink || 'N/A'}`,
    `• Instagram Page / Link: ${brief.instagramLink || 'N/A'}`,
    `• Product Name: ${brief.productName || 'N/A'}`,
    `• Product Image: Sent directly via Gmail`,
    brief.selectedPackage ? `• Selected Package: ${brief.selectedPackage}` : '',
    ``,
    `• Project Details / Video Notes:`,
    brief.projectDetails || 'N/A',
  ].filter(Boolean);

  return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
}
