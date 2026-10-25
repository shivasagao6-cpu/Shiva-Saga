import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_TIERS, PricingTier } from '../utils/pricing';

interface PricingSectionProps {
  onSelectTier: (tier: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-20 md:py-24 border-t border-[#2A303B] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-display text-[26px] sm:text-[36px] text-[#ECE8DE] leading-tight mb-2">
            What I offer
          </h2>
          <p className="text-[17px] text-[#8F96A3] max-w-[560px]">
            Fixed packages designed for straightforward content creation and performance campaigns.
          </p>
        </div>

        {/* 3 Fixed Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`bg-[#1A202A] border rounded-[10px] p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? 'border-[#C9A24B] shadow-[0_0_24px_rgba(201,162,75,0.15)]'
                  : 'border-[#2A303B] hover:border-[#3a4150]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 right-6 bg-[#C9A24B] text-[#1A1508] text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-[22px] font-medium text-[#ECE8DE] mb-1">
                  {tier.name}
                </h3>

                <div className="font-display text-[38px] text-[#ECE8DE] my-3 leading-none">
                  ${tier.price}
                </div>

                <div className="py-4 border-t border-[#2A303B]/60 space-y-2 text-sm text-[#ECE8DE]">
                  <div className="font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C9A24B]" />
                    <span>{tier.deliverables}</span>
                  </div>
                  <div className="text-xs text-[#8F96A3]">
                    {tier.deliveryTime}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-2.5 px-4 rounded-md font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    tier.popular
                      ? 'bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] shadow-sm'
                      : 'border border-[#2A303B] hover:border-[#C9A24B] text-[#ECE8DE] hover:bg-[#C9A24B] hover:text-[#1A1508]'
                  }`}
                >
                  <span>Select {tier.name} Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note below the three cards */}
        <p className="text-center text-[15px] text-[#8F96A3]">
          Need a custom mix of reels and posts? Happy to put together a package.
        </p>
      </div>
    </section>
  );
};
