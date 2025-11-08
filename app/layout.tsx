import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";
import CookieConsent from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "FlowOn — Création de sites web",
  description: "Des sites rapides, beaux, qui convertissent.",
  metadataBase: new URL("https://flowon.example.com"),
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
        <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight text-lg">FlowOn</a>
            <nav className="flex items-center gap-1 text-sm">
              <a className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" href="/portfolio">Portfolio</a>
              <a className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" href="/services">Services</a>
              <a className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" href="/pricing">Forfaits</a>
              <a className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" href="/about">À propos</a>
              <a className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" href="/legal">Mentions</a>
              <a className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" href="/contact">Contact</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-12 relative z-10">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} FlowOn — Tous droits réservés.
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
