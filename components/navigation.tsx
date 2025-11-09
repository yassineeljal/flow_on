"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Navigation() {
  const t = useTranslations('nav');

  return (
    <nav className="hidden md:flex items-center gap-1">
      <Link className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/">
        {t('home')}
      </Link>
      <Link className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/services">
        {t('services')}
      </Link>
      <Link className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/pricing">
        {t('pricing')}
      </Link>
      <Link className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/about">
        {t('about')}
      </Link>
      <Link className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/legal">
        {t('legal')}
      </Link>
    </nav>
  );
}
