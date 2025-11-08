import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border bg-linear-to-b from-primary/15 via-background to-background">
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(480px_240px_at_20%_10%,black,transparent)]">
          <div className="absolute -left-24 -top-28 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-0 bottom-[-120px] h-[380px] w-[380px] rounded-full bg-info/15 blur-3xl" />
        </div>
        <div className="relative p-10 md:p-14">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Des sites <span className="underline decoration-primary/40 underline-offset-4">rapides</span>, élégants, et pensés pour convertir.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            Vitrine, e-commerce, SEO — livré vite, sans stress. Parlons de votre projet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/pricing" className={buttonVariants()}>Voir les forfaits</a>
            <a href="/contact" className={buttonVariants({ variant: "secondary" })}>Obtenir un devis</a>
          </div>
        </div>
      </div>

      {/* 3 piliers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { t: "Performance", d: "Core Web Vitals optimisés, chargements ultra-rapides." },
          { t: "Design", d: "UI premium, sections claires, micro-interactions subtiles." },
          { t: "SEO", d: "Balises, sitemap, schémas — prêts pour Google." },
        ].map((f) => (
          <Card key={f.t} className="transition-transform hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="text-lg">{f.t}</CardTitle>
              <CardDescription>{f.d}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Liens services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-center">Explorez nos services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Site vitrine moderne", desc: "Présentez votre activité avec un site rapide et élégant.", href: "/services#vitrine" },
            { title: "E-commerce (Stripe)", desc: "Vendez en ligne facilement avec paiements sécurisés.", href: "/services#ecommerce" },
            { title: "SEO & Contenu", desc: "Améliorez votre visibilité et attirez plus de clients.", href: "/services#seo" },
            { title: "Maintenance & Sécurité", desc: "Gardez votre site fiable, sauvegardé et toujours à jour.", href: "/services#maintenance" },
            { title: "Branding & Copywriting", desc: "Identité forte et message percutant.", href: "/services#branding" },
          ].map((s) => (
            <a key={s.title} href={s.href} className="group">
              <Card className="transition-transform group-hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-primary">En savoir plus →</span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
