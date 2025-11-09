import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Liste de toutes les locales supportées
  locales: ['fr', 'en', 'es'],

  // Locale par défaut
  defaultLocale: 'fr',

  // Préfixe pour les URLs (always = toujours /fr, /en, /es)
  localePrefix: 'always'
});

// Créer les helpers de navigation typés
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
