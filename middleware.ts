import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  localeDetection: true,
});

export const config = {
  // Matcher pour toutes les routes sauf les fichiers statiques
  matcher: ['/', '/(fr|en|es)/:path*', '/((?!_next|_vercel|api|.*\\..*).*)']
};
