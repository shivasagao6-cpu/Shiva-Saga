/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyFaceless } from './components/WhyFaceless';
import { DemoReels } from './components/DemoReels';
import { Process } from './components/Process';
import { PricingSection } from './components/PricingSection';
import { Trust } from './components/Trust';
import { Reviews } from './components/Reviews';
import { ContactBriefBuilder, ContactBriefBuilderRef } from './components/ContactBriefBuilder';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { PricingTier } from './utils/pricing';
import { getCustomerReviews, deleteCustomerReview, getAnalyticsData, trackVisitor, subscribeReviews } from './utils/reviewStore';
import { CustomerReview } from './utils/customerReviews';

export default function App() {
  const briefBuilderRef = useRef<ContactBriefBuilderRef>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [reviews, setReviews] = useState<CustomerReview[]>(getCustomerReviews());
  const [analytics, setAnalytics] = useState(getAnalyticsData());
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    trackVisitor();
    setAnalytics(getAnalyticsData());

    return subscribeReviews((updated) => {
      setReviews([...updated]);
      setAnalytics(getAnalyticsData());
    });
  }, []);

  const scrollToContact = () => {
    const briefElem = document.getElementById('brief-builder') || document.getElementById('contact');
    if (briefElem) {
      briefElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tier: PricingTier) => {
    if (briefBuilderRef.current) {
      briefBuilderRef.current.setTierSelection(tier);
    }
    scrollToContact();
  };

  const handleSelectReelForBrief = (reelTitle: string) => {
    if (briefBuilderRef.current) {
      briefBuilderRef.current.setAngleNote(`Requested style based on: "${reelTitle}"`);
    }
    scrollToContact();
  };

  const handleRequestReferences = () => {
    if (briefBuilderRef.current) {
      briefBuilderRef.current.setAngleNote('Please provide 2-3 verified client references and case study metrics.');
    }
    scrollToContact();
  };

  const handleDeleteReview = (id: string) => {
    deleteCustomerReview(id);
    setReviews(getCustomerReviews());
    setAnalytics(getAnalyticsData());
  };

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Light theme overrides if toggled
  const themeBg = isDarkTheme ? 'bg-[#12161C] text-[#ECE8DE]' : 'bg-[#F8F9FA] text-[#1A202A]';

  return (
    <div id="top" className={`min-h-screen ${themeBg} flex flex-col font-sans antialiased selection:bg-[#C9A24B]/30 selection:text-[#ECE8DE] transition-colors duration-200`}>
      {/* Sticky Header with Admin Portal Trigger */}
      <Header onContactClick={scrollToContact} onOpenAdmin={() => setIsAdminOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartProject={scrollToContact}
          onSeeReels={scrollToWork}
        />

        {/* Approach / Why Faceless */}
        <WhyFaceless />

        {/* Work / Demo Reels */}
        <DemoReels onSelectReelForBrief={handleSelectReelForBrief} />

        {/* Process */}
        <Process />

        {/* Pricing Section (3 Fixed Tiers) */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* Trust & Guarantees */}
        <Trust />

        {/* Client Reviews */}
        <Reviews onRequestReferences={handleRequestReferences} />

        {/* Contact & Project Intake Form */}
        <ContactBriefBuilder ref={briefBuilderRef} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Secure Admin Portal Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        reviews={reviews}
        onDeleteReview={handleDeleteReview}
        analytics={analytics}
        isDarkTheme={isDarkTheme}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}
