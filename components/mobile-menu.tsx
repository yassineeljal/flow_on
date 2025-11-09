"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button
        className="p-2 rounded-lg hover:bg-accent transition-colors"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border/40 shadow-premium animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            <Link
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              href="/services"
              onClick={() => setIsOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              href="/pricing"
              onClick={() => setIsOpen(false)}
            >
              {t('pricing')}
            </Link>
            <Link
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              href="/legal"
              onClick={() => setIsOpen(false)}
            >
              {t('legal')}
            </Link>
            <Link
              className="px-4 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
