type Feature = { label: string; starter?: boolean; business?: boolean; pro?: boolean };

const features: Feature[] = [
  { label: "Pages incluses", starter: true, business: true, pro: true },
  { label: "Design sur mesure", starter: false, business: true, pro: true },
  { label: "Blog / CMS", starter: false, business: true, pro: true },
  { label: "Portfolio / Témoignages", starter: false, business: true, pro: true },
  { label: "SEO on-page (titres/meta/OG)", starter: true, business: true, pro: true },
  { label: "Performances > 90 (Lighthouse)", starter: true, business: true, pro: true },
  { label: "Formulaire de contact", starter: true, business: true, pro: true },
  { label: "E-commerce (Stripe + produits)", starter: false, business: false, pro: true },
  { label: "Intégrations (Analytics, Clarity)", starter: false, business: true, pro: true },
  { label: "Maintenance incluse", starter: false, business: true, pro: true },
];

const tiers = [
  {
    name: "Starter",
    price: "899 $",
    sub: "Landing 1 page ou 3 pages simples",
    bullets: [
      "Design sur modèle premium",
      "SEO de base, performances optimisées",
      "Formulaire de contact",
      "2 révisions, livraison 7–10 jours",
    ],
    cta: "Choisir Starter",
    popular: false,
  },
  {
    name: "Business",
    price: "1 999 $",
    sub: "6–8 pages + CMS (blog/portfolio)",
    bullets: [
      "Design sur mesure",
      "SEO on-page + sitemap + schémas",
      "Analytics + heatmap (Clarity/Matomo)",
      "4 révisions, 2–3 semaines",
      "Maintenance 1 mois incluse",
    ],
    cta: "Choisir Business",
    popular: true,
  },
  {
    name: "Pro Commerce",
    price: "3 499 $",
    sub: "10–14 pages + e-commerce",
    bullets: [
      "Design premium (micro-interactions)",
      "Stripe (paiements) + pages produits",
      "Funnels (lead magnet + emails de base)",
      "6 révisions, 3–5 semaines",
      "Maintenance 3 mois incluse",
    ],
    cta: "Choisir Pro Commerce",
    popular: false,
  },
];

export const metadata = { title: "Forfaits & Tarifs | FlowOn" };

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Forfaits & Tarifs</h1>
        <p className="text-muted-foreground">Des packs simples, clairs et prêts à vendre. Payez 50% à la commande, 50% à la mise en ligne.</p>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col transition hover:-translate-y-0.5 ${t.popular ? "ring-2 ring-primary/30" : ""}`}
          >
            {t.popular && (
              <div className="mb-4 inline-block text-xs font-medium rounded-full border px-2 py-1 backdrop-blur text-muted-foreground">
                Le plus choisi
              </div>
            )}
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>
            <div className="mt-4">
              <span className="text-3xl font-semibold">{t.price}</span>
              <span className="text-sm text-muted-foreground"> / projet</span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a href="/contact" className={`mt-6 inline-flex h-10 items-center justify-center rounded-md px-4 text-sm ${t.popular ? "bg-primary text-primary-foreground" : "border"}`}>
              {t.cta}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Besoin d’un devis personnalisé ? <a className="underline" href="/contact">Contactez-nous</a>.
            </p>
          </div>
        ))}
      </section>

      {/* Comparatif */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold">Comparatif rapide</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 dark:bg-secondary/20">
              <tr>
                <th className="text-left p-3">Fonctionnalités</th>
                <th className="text-left p-3">Starter</th>
                <th className="text-left p-3">Business</th>
                <th className="text-left p-3">Pro Commerce</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={i % 2 ? "bg-secondary/40 dark:bg-secondary/10" : ""}>
                  <td className="p-3">{f.label}</td>
                  <td className="p-3">{f.starter ? "✓" : "—"}</td>
                  <td className="p-3">{f.business ? "✓" : "—"}</td>
                  <td className="p-3">{f.pro ? "✓" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="rounded-2xl border p-8 text-center">
        <h3 className="text-xl font-semibold">Prêt à lancer votre site ?</h3>
        <p className="mt-1 text-muted-foreground">Un site clair, rapide et qui convertit — sans stress.</p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground">Démarrer mon projet</a>
          <a href="/portfolio" className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm">Voir des réalisations</a>
        </div>
      </section>
    </div>
  );
}
