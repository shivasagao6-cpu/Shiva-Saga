import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Mail, Instagram, Copy, Check, Send, Sparkles, ExternalLink } from 'lucide-react';
import { PricingTier } from '../utils/pricing';
import { trackMailtoClick } from '../utils/reviewStore';

export interface ContactBriefBuilderRef {
  setTierSelection: (tier: PricingTier) => void;
  setAngleNote: (note: string) => void;
}

export const ContactBriefBuilder = forwardRef<ContactBriefBuilderRef>((props, ref) => {
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [productName, setProductName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    setTierSelection: (tier: PricingTier) => {
      setProjectDetails((prev) =>
        prev
          ? `${prev}\nSelected Package: ${tier.name} ($${tier.price} — ${tier.deliverables}, ${tier.deliveryTime})`
          : `Selected Package: ${tier.name} ($${tier.price} — ${tier.deliverables}, ${tier.deliveryTime})`
      );
    },
    setAngleNote: (note: string) => {
      setProjectDetails((prev) => (prev ? `${prev}\nFormat reference: ${note}` : `Format reference: ${note}`));
    },
  }));

  const handleProductImageClick = () => {
    trackMailtoClick();
    window.location.href = 'mailto:shivaugccreater@gmail.com?subject=Product%20Image%20Submission';
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    trackMailtoClick();
    const recipient = 'shivaugccreater@gmail.com';
    const subject = encodeURIComponent('New UGC project inquiry');

    const bodyLines = [
      `New UGC Project Inquiry from Portfolio`,
      `=====================================`,
      `• Client Name: ${clientName || 'N/A'}`,
      `• Phone Number: ${phoneNumber || 'N/A'}`,
      `• Business / Brand Name: ${businessName || 'N/A'}`,
      `• Facebook Page / Link: ${facebookLink || 'N/A'}`,
      `• Instagram Page / Link: ${instagramLink || 'N/A'}`,
      `• Product Name: ${productName || 'N/A'}`,
      `• Product Image: Sent directly via Gmail`,
      ``,
      `• Project Details / Video Notes:`,
      projectDetails || 'N/A',
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmittedStatus('Email client opened with your project inquiry ready to send!');
  };

  const handleCopySummary = () => {
    const summary = [
      `NEW UGC PROJECT INQUIRY`,
      `Client Name: ${clientName || 'N/A'}`,
      `Phone Number: ${phoneNumber || 'N/A'}`,
      `Business/Brand Name: ${businessName || 'N/A'}`,
      `Facebook: ${facebookLink || 'N/A'}`,
      `Instagram: ${instagramLink || 'N/A'}`,
      `Product Name: ${productName || 'N/A'}`,
      `Product Image: Sent directly via Gmail`,
      `Project Details: ${projectDetails || 'N/A'}`,
    ].join('\n');

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#12161C] border-t border-[#2A303B]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="max-w-[700px] mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C9A24B] mb-2 block">
            Direct Commission
          </span>
          <h2 className="font-display text-[28px] sm:text-[38px] text-[#ECE8DE] leading-tight mb-4">
            Start a project
          </h2>
          <p className="text-[17px] text-[#8F96A3] leading-relaxed">
            Send the app or product, the angle you want, and any must-hit points. I'll reply with a script draft within a day or two.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="mailto:shivaugccreater@gmail.com"
              className="inline-flex items-center gap-2 border border-[#2A303B] hover:border-[#C9A24B] px-5 py-3 rounded-md text-[15px] text-[#ECE8DE] hover:text-[#C9A24B] bg-[#1A202A]/80 transition-all font-mono"
            >
              <Mail className="w-4 h-4 text-[#C9A24B]" />
              <span>shivaugccreater@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/shiva.ugc.creator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#2A303B] hover:border-[#C9A24B] px-5 py-3 rounded-md text-[15px] text-[#ECE8DE] hover:text-[#C9A24B] bg-[#1A202A]/80 transition-all"
            >
              <Instagram className="w-4 h-4 text-[#C9A24B]" />
              <span>@shiva.ugc.creator</span>
            </a>
          </div>
        </div>

        {/* Project Intake Form */}
        <div id="brief-builder" className="bg-[#1A202A] border border-[#2A303B] rounded-xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2A303B] mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C9A24B]" />
                <h3 className="font-display text-xl text-[#ECE8DE]">
                  Project Intake Form
                </h3>
              </div>
              <p className="text-xs text-[#8F96A3] mt-1">
                Fill out the details below and submit to open your email client with a pre-formatted inquiry.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#12161C] border border-[#2A303B] hover:border-[#C9A24B]/50 text-xs text-[#ECE8DE] transition-all cursor-pointer self-start sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#7FAE8E]" />
                  <span className="text-[#7FAE8E] font-medium">Summary Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Copy Form Summary</span>
                </>
              )}
            </button>
          </div>

          <form onSubmit={handleSendEmail} className="space-y-5">
            {submittedStatus && (
              <div className="p-3.5 rounded-md bg-[#7FAE8E]/10 border border-[#7FAE8E]/30 text-xs text-[#7FAE8E] flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>{submittedStatus}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* 1. Client Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                  1. Client Name <span className="text-[#C9A24B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                />
              </div>

              {/* 2. Phone Number (Not labeled optional, not required) */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                  2. Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                />
              </div>

              {/* 3. Business/Brand Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                  3. Business / Brand Name <span className="text-[#C9A24B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VaultPay"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                />
              </div>

              {/* 4. Facebook Page Name or Link */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                  4. Facebook Page Name or Link
                </label>
                <input
                  type="text"
                  placeholder="facebook.com/yourpage"
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                  className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                />
              </div>

              {/* 5. Instagram Page Name or Link */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                  5. Instagram Page Name or Link
                </label>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                  className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                />
              </div>

              {/* 6. Product Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                  6. Product Name <span className="text-[#C9A24B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name of app or product"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                />
              </div>
            </div>

            {/* 7. Product Image (Styled like other fields, non-editable text, click opens mailto) */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                7. Product Image
              </label>
              <div
                onClick={handleProductImageClick}
                role="button"
                tabIndex={0}
                title="Click to send product image directly via Gmail"
                className="w-full bg-[#12161C] border border-[#2A303B] hover:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#C9A24B] cursor-pointer flex items-center justify-between transition-colors group select-none"
              >
                <span className="font-medium">Please send directly via Gmail.</span>
                <ExternalLink className="w-4 h-4 text-[#8F96A3] group-hover:text-[#C9A24B] transition-colors" />
              </div>
            </div>

            {/* 8. Project Details */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-2">
                8. Project Details <span className="text-[#C9A24B]">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about the product and what kind of UGC video is needed..."
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors resize-y font-sans leading-relaxed"
              />
            </div>

            {/* Submit Button (mailto link addressed to shivaugccreater@gmail.com with subject "New UGC project inquiry") */}
            <div className="pt-4 border-t border-[#2A303B]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8F96A3]">
                Submitting opens your email client addressed to <strong className="text-[#ECE8DE]">shivaugccreater@gmail.com</strong> with subject <strong className="text-[#ECE8DE]">New UGC project inquiry</strong>
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] px-7 py-3 rounded-md font-semibold text-sm transition-all shadow-[0_0_18px_rgba(201,162,75,0.25)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Project Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

ContactBriefBuilder.displayName = 'ContactBriefBuilder';
