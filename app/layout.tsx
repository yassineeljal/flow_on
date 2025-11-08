import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";
import CookieConsent from "@/components/cookie-consent";
import MobileMenu from "@/components/mobile-menu";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FlowOn — Création de sites web modernes et performants",
  description: "Des sites rapides, beaux, qui convertissent. Création de sites vitrine, e-commerce et optimisation SEO.",
  metadataBase: new URL("https://flowon.example.com"),
  keywords: ["création site web", "développement web", "SEO", "e-commerce", "site vitrine"],
  authors: [{ name: "FlowOn" }],
  openGraph: {
    title: "FlowOn — Création de sites web modernes",
    description: "Des sites rapides, beaux, qui convertissent.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Variables CSS (tokens) + anti-flash theme */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root {
  --background: 220 35% 98%;
  --foreground: 222 47% 12%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 12%;
  --primary: 218 70% 45%;        /* Navy Blue */
  --primary-foreground: 210 40% 98%;
  --secondary: 220 17% 94%;
  --secondary-foreground: 222 47% 12%;
  --muted: 220 16% 96%;
  --muted-foreground: 217 16% 46%;
  --accent: 221 50% 96%;
  --accent-foreground: 222 47% 12%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;
  --border: 218 18% 88%;
  --input: 218 18% 88%;
  --ring: 218 70% 45%;
  --radius: 12px;

  /* étendus */
  --info: 217 91% 60%;
  --info-foreground: 210 40% 98%;
  --success: 149 55% 45%;
  --success-foreground: 210 40% 98%;
  --warning: 42 90% 55%;
  --warning-foreground: 24 10% 10%;

  color-scheme: light;
}
.dark {
  --background: 220 40% 10%;
  --foreground: 210 40% 98%;
  --card: 222 40% 12%;
  --card-foreground: 210 40% 98%;
  --popover: 222 40% 12%;
  --popover-foreground: 210 40% 98%;
  --primary: 217 91% 60%;
  --primary-foreground: 222 47% 1.2%;
  --secondary: 220 28% 17%;
  --secondary-foreground: 210 40% 98%;
  --muted: 220 22% 16%;
  --muted-foreground: 215 20% 70%;
  --accent: 221 35% 18%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;
  --border: 220 24% 22%;
  --input: 220 24% 22%;
  --ring: 217 91% 60%;
  --info: 215 95% 65%;
  --info-foreground: 210 40% 98%;
  --success: 149 55% 50%;
  --success-foreground: 210 40% 98%;
  --warning: 42 95% 60%;
  --warning-foreground: 222 47% 12%;

  color-scheme: dark;
}
.theme-system {}
@media (prefers-color-scheme: dark) {
  .theme-system {
    --background: 220 40% 10%;
    --foreground: 210 40% 98%;
    --card: 222 40% 12%;
    --card-foreground: 210 40% 98%;
    --popover: 222 40% 12%;
    --popover-foreground: 210 40% 98%;
    --primary: 217 91% 60%;
    --primary-foreground: 222 47% 1.2%;
    --secondary: 220 28% 17%;
    --secondary-foreground: 210 40% 98%;
    --muted: 220 22% 16%;
    --muted-foreground: 215 20% 70%;
    --accent: 221 35% 18%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --border: 220 24% 22%;
    --input: 220 24% 22%;
    --ring: 217 91% 60%;
    color-scheme: dark;
  }
}

/* décor global : grille + halo */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(600px 300px at 15% -10%, hsl(var(--primary)/0.12), transparent 60%),
    radial-gradient(600px 300px at 85% 110%, hsl(217 91% 60% / 0.10), transparent 60%);
  z-index: 0;
}
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var root = document.documentElement;
    root.classList.remove('dark','light','theme-system');
    var saved = localStorage.getItem('flowon-theme');
    if (saved === 'dark') root.classList.add('dark');
    else if (saved === 'light') root.classList.add('light');
    else root.classList.add('theme-system');
  } catch(e) {}
})();
          `,
          }}
        />
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased relative">
        {/* Modern Header with Glass Effect */}
        <header className="sticky top-0 z-50 border-b border-border/40 glass-strong shadow-premium animate-fade-in">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="w-44 h-44 md:w-48 md:h-48 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <Image 
                      src="/logo.png" 
                      alt="FlowOn Logo" 
                      width={192} 
                      height={192}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <a className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/">
                  Accueil
                </a>
                <a className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/services">
                  Services
                </a>
                <a className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/pricing">
                  Forfaits
                </a>
                <a className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/about">
                  À propos
                </a>
                <a className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all hover-lift" href="/legal">
                  Mentions
                </a>
              </nav>

              {/* CTA & Theme Toggle */}
              <div className="flex items-center gap-3">
                <a 
                  href="/contact" 
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all hover-lift shadow-glow"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact
                </a>
                <ThemeToggle />
                <MobileMenu />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
          {children}
        </main>

        {/* Modern Footer */}
        <footer className="mt-20 border-t border-border/40 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {/* Brand Column */}
              <div className="space-y-4 md:col-span-1">
                <a href="/" className="flex items-center gap-2 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-xl shadow-glow">
                    F
                  </div>
                  <span className="font-bold text-xl tracking-tight text-gradient">
                    FlowOn
                  </span>
                </a>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Des sites web rapides, élégants et pensés pour convertir.
                </p>
                {/* Social Links */}
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-accent transition-colors hover-lift" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-accent transition-colors hover-lift" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-accent transition-colors hover-lift" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider">Services</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="/services#vitrine" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Site vitrine</a></li>
                  <li><a href="/services#ecommerce" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">E-commerce</a></li>
                  <li><a href="/services#seo" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">SEO & Contenu</a></li>
                  <li><a href="/services#maintenance" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Maintenance</a></li>
                  <li><a href="/services#branding" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Branding</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider">Entreprise</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="/about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">À propos</a></li>
                  <li><a href="/pricing" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Tarifs</a></li>
                  <li><a href="/faq" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
                  <li><a href="/contact" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider">Légal</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="/legal" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Mentions légales</a></li>
                  <li><a href="/legal/privacy" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Confidentialité</a></li>
                  <li><a href="/legal/terms" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">CGV/CGU</a></li>
                  <li><a href="/legal/cookies" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Cookies</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} <span className="font-semibold text-foreground">FlowOn</span> — Tous droits réservés.
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                  </span>
                  Tous systèmes opérationnels
                </span>
              </div>
            </div>
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
