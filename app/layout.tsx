import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";
import CookieConsent from "@/components/cookie-consent";


export const metadata: Metadata = {
  title: "FlowOn — Création de sites web",
  description: "Des sites rapides, beaux, qui convertissent.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <div className="squares" />
        <header className="sticky top-0 z-50 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight text-lg">FlowOn</a>
            <nav className="flex items-center gap-4 text-sm">
              <a href="/portfolio">Portfolio</a>
              <a href="/services">Services</a>
              <a href="/pricing">Forfaits</a>
              <a href="/about">À propos</a>
              <a href="/legal">Mentions</a>
              <a href="/contact">Contact</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-80">
            © {new Date().getFullYear()} FlowOn — Tous droits réservés.
          </div>
        </footer>
        <CookieConsent />

      </body>
    </html>
  );
}
