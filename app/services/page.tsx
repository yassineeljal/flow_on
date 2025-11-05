// src/app/services/page.tsx
type Service = {
  slug: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
};

function IconLaptop() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="currentColor" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8H4V6Zm-2 9h20v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Z"/>
    </svg>
  );
}
function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="currentColor" d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 18ZM3 2h2l2.68 9.39A3 3 0 0 0 10.58 14H18a3 3 0 0 0 2.91-2.27l1.03-4.11A1 1 0 0 0 21 6H7.21l-.5-2H3Z"/>
    </svg>
  );
}
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-1.41 1.41l.27.28v.79L20 21.5 21.5 20 15.5 14Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1 14-3.5-3.5 1.4-1.4L11 12.2l4.6-4.6 1.4 1.4L11 16Z"/>
    </svg>
  );
}
function IconPen() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
    </svg>
  );
}

const services: Service[] = [
  {
    slug: "vitrine",
    title: "Site vitrine moderne",
    desc: "Un site clair et rapide pour présenter votre activité et convertir vos visiteurs.",
    bullets: [
      "Design sur mesure aligné à votre marque",
      "3 à 8 sections clés (héros, services, preuves, contact)",
      "Formulaire + tracking conversions",
    ],
    icon: <IconLaptop />,
  },
  {
    slug: "ecommerce",
    title: "E-commerce (Stripe)",
    desc: "Vendez en ligne simplement avec un parcours d’achat fluide.",
    bullets: [
      "Catalogue & fiches produit",
      "Paiements Stripe sécurisés",
      "Pages panier & checkout optimisées",
    ],
    icon: <IconCart />,
  },
  {
    slug: "seo",
    title: "SEO & contenu",
    desc: "Améliorez votre visibilité locale et vos pages piliers.",
    bullets: [
      "SEO on-page : titres/meta/OG, sitemap, schémas",
      "Blog + stratégie mots-clés de base",
      "Optimisation Core Web Vitals",
    ],
    icon: <IconSearch />,
  },
  {
    slug: "maintenance",
    title: "Maintenance & sécurité",
    desc: "Dormez tranquille : mises à jour, sauvegardes et surveillance.",
    bullets: [
      "MAJ framework & dépendances",
      "Sauvegardes / rollback",
      "Monitoring erreurs & uptime",
    ],
    icon: <IconShield />,
  },
  {
    slug: "branding",
    title: "Branding & copywriting",
    desc: "Identité visuelle, messages clairs et pages qui vendent.",
    bullets: [
      "Logo simple + mini brand kit",
      "Ton & messages orientés bénéfices",
      "Sections copy ‘preuve sociale’",
    ],
    icon: <IconPen />,
  },
];

export default function Page() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <section className="relative overflow-hidden rounded-3xl p-8 card">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Services</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Tout ce qu’il faut pour un site <strong>rapide</strong>, <strong>beau</strong> et <strong>orienté conversion</strong>.
        </p>
      </section>

      {/* Grid services */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.slug} className="card flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border"
                   style={{ borderColor: "color-mix(in oklab, var(--ink) 25%, transparent)" }}>
                {s.icon}
              </div>
              <h2 className="text-lg font-semibold">{s.title}</h2>
            </div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
            <ul className="text-sm grid gap-2" style={{ color: "var(--muted)" }}>
              {s.bullets.map(b => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a href="/contact" className="btn">Demander un devis</a>
            </div>
          </article>
        ))}
      </section>

      {/* Bandeau CTA */}
      <section className="card text-center">
        <h3 className="text-xl font-semibold">Prêt à démarrer ?</h3>
        <p className="mt-1" style={{ color: "var(--muted)" }}>
          Choisissez un forfait ou décrivez votre besoin — je vous réponds sous 24h.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="/pricing" className="btn">Voir les forfaits</a>
          <a href="/contact" className="btn btn-primary">Obtenir un devis</a>
        </div>
      </section>
    </div>
  );
}
