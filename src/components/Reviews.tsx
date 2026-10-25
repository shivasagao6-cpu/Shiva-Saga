import React, { useState, useEffect } from 'react';
import { Star, MapPin, Info, PlusCircle, X, Check, MessageSquarePlus } from 'lucide-react';
import { CustomerReview } from '../utils/customerReviews';
import { getCustomerReviews, addCustomerReview, subscribeReviews } from '../utils/reviewStore';

interface ReviewsProps {
  onRequestReferences: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onRequestReferences }) => {
  const [reviews, setReviews] = useState<CustomerReview[]>(getCustomerReviews());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5.0);
  const [description, setDescription] = useState('');
  const [successBanner, setSuccessBanner] = useState(false);

  useEffect(() => {
    return subscribeReviews((updated) => {
      setReviews([...updated]);
    });
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    addCustomerReview({
      name: name.trim(),
      location: location.trim() || 'Global',
      rating: Number(rating),
      description: description.trim(),
    });

    setName('');
    setLocation('');
    setRating(5.0);
    setDescription('');
    setIsModalOpen(false);
    setSuccessBanner(true);
    setTimeout(() => setSuccessBanner(false), 4000);
  };

  const renderStars = (score: number) => {
    const fullStars = Math.floor(score);
    const hasDecimal = score % 1 !== 0;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="w-4 h-4 fill-[#C9A24B] text-[#C9A24B]" />;
          } else if (i === fullStars && hasDecimal) {
            return <Star key={i} className="w-4 h-4 fill-[#C9A24B]/70 text-[#C9A24B]" />;
          } else {
            return <Star key={i} className="w-4 h-4 text-[#2A303B] fill-[#2A303B]" />;
          }
        })}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 md:py-24 border-t border-[#2A303B] bg-[#12161C]">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-[26px] sm:text-[36px] text-[#ECE8DE] leading-tight mb-2">
              What Our Customers Say
            </h2>
            <p className="text-[17px] text-[#8F96A3] max-w-[560px]">
              Feedback from clients and video review evaluations. Share your own experience below!
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] font-semibold text-sm transition-all shadow-[0_0_16px_rgba(201,162,75,0.2)] cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Success Banner */}
        {successBanner && (
          <div className="mb-8 p-4 rounded-lg bg-[#7FAE8E]/15 border border-[#7FAE8E]/40 text-xs sm:text-sm text-[#7FAE8E] flex items-center gap-2 animate-in fade-in duration-200">
            <Check className="w-4 h-4 shrink-0" />
            <span>Thank you! Your review has been successfully published to the wall.</span>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review: CustomerReview) => (
            <div
              key={review.id}
              className="bg-[#1A202A] border border-[#2A303B] hover:border-[#3a4150] rounded-[10px] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {renderStars(review.rating)}
                  <span className="text-xs font-mono font-semibold text-[#C9A24B] bg-[#C9A24B]/10 px-2 py-0.5 rounded">
                    {review.rating.toFixed(1)}/5.0
                  </span>
                </div>

                <p className="text-[14.5px] text-[#ECE8DE] leading-relaxed mb-6 font-sans">
                  "{review.description}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A303B]/60 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-display text-[16px] font-medium text-[#ECE8DE]">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[12px] text-[#8F96A3] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#C9A24B]" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <span className="text-[10px] text-[#8F96A3] uppercase tracking-wider bg-[#12161C] px-2 py-1 rounded border border-[#2A303B]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info & Reference request */}
        <div className="p-4 rounded-lg bg-[#1A202A]/60 border border-[#2A303B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F96A3]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#C9A24B] shrink-0" />
            <span>Have you worked with Shiva? Add your review using the button above.</span>
          </div>
          <button
            onClick={onRequestReferences}
            className="text-xs font-semibold text-[#ECE8DE] hover:text-[#C9A24B] underline underline-offset-4 cursor-pointer transition-colors whitespace-nowrap"
          >
            Request verified references →
          </button>
        </div>

        {/* Add Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1A202A] border border-[#2A303B] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A303B] mb-6">
                <div>
                  <h3 className="font-display text-xl text-[#ECE8DE]">
                    Leave a Customer Review
                  </h3>
                  <p className="text-xs text-[#8F96A3] mt-0.5">
                    Your feedback will instantly appear on the website wall.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#8F96A3] hover:text-[#ECE8DE] p-1.5 rounded-md bg-[#12161C] border border-[#2A303B]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-1.5">
                    Your Name <span className="text-[#C9A24B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-1.5">
                      Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New York, USA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-1.5">
                      Rating Score (1.0 to 5.0)
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                    >
                      <option value={5.0}>5.0 - Excellent (⭐⭐⭐⭐⭐)</option>
                      <option value={4.8}>4.8 - Outstanding (⭐⭐⭐⭐⭐)</option>
                      <option value={4.5}>4.5 - Great (⭐⭐⭐⭐⭐)</option>
                      <option value={4.0}>4.0 - Very Good (⭐⭐⭐⭐☆)</option>
                      <option value={3.5}>3.5 - Good (⭐⭐⭐⭐☆)</option>
                      <option value={3.0}>3.0 - Average (⭐⭐⭐☆☆)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-1.5">
                    Your Review <span className="text-[#C9A24B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your experience working with Shiva or evaluating the UGC reels..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md px-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors resize-y font-sans leading-relaxed"
                  />
                </div>

                <div className="pt-4 border-t border-[#2A303B] flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-md text-xs text-[#8F96A3] hover:text-[#ECE8DE] bg-[#12161C] border border-[#2A303B]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-md bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
