import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Why Faceless', href: '#approach' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#12161C]/90 backdrop-blur-md border-b border-[#2A303B] transition-colors">
      <div className="max-w-[1080px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="group flex items-center gap-2.5 text-[#ECE8DE] transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B] font-display text-sm font-semibold">
              SS
            </div>
            <div>
              <span className="font-display text-[20px] font-medium tracking-tight text-[#ECE8DE] group-hover:text-[#C9A24B] transition-colors">
                Shiva Sagar
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-[#8F96A3] font-sans font-normal border-l border-[#2A303B] pl-2">
                Fintech UGC
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8F96A3] hover:text-[#ECE8DE] transition-colors font-medium hover:underline underline-offset-8 decoration-[#C9A24B]/40"
            >
              {link.label}
            </a>
          ))}

          {/* Admin Login Button */}
          <button
            onClick={onOpenAdmin}
            title="Admin Dashboard Login"
            className="p-2 rounded-md bg-[#1A202A] border border-[#2A303B] hover:border-[#C9A24B] text-[#8F96A3] hover:text-[#C9A24B] transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] px-4 py-2 rounded-md font-semibold text-[14px] transition-all hover:shadow-[0_0_16px_rgba(201,162,75,0.25)] cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAdmin}
            className="p-2 text-[#8F96A3] hover:text-[#C9A24B] bg-[#1A202A] border border-[#2A303B] rounded-md"
            title="Admin Login"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            className="bg-[#C9A24B] text-[#1A1508] px-3 py-1.5 rounded text-[13px] font-semibold"
          >
            Get in touch
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-[#ECE8DE] hover:text-[#C9A24B] bg-[#1A202A] border border-[#2A303B] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161B22] border-b border-[#2A303B] px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#ECE8DE] hover:text-[#C9A24B] py-1 text-base font-medium flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-[#8F96A3]" />
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full text-center bg-[#1A202A] border border-[#2A303B] text-[#ECE8DE] py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#C9A24B]" />
              <span>Admin Portal Login</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full text-center bg-[#C9A24B] text-[#1A1508] py-2.5 rounded-md font-semibold text-sm"
            >
              Start a project brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
