export default function Home() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div
        className="relative rounded-3xl p-10 ring-1 bg-hero-animated"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,.08)" }}
      >
        {/* Blobs animés */}
        <div className="blob blob--a" aria-hidden />
        <div className="blob blob--b" aria-hidden />
        <div className="blob blob--c" aria-hidden />

        {/* Contenu */}
        <div className="relative">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Des sites rapides, beaux, et faits pour convertir.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px]" style={{ color: "var(--muted)" }}>
            Vitrine, e-commerce, SEO — livré vite, sans stress. Parlons de votre projet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/pricing" className="btn btn-primary">
              Voir les forfaits
            </a>
            <a href="/contact" className="btn">
              Obtenir un devis
            </a>
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
          <div key={f.t} className="card">
            <h3 className="font-medium">{f.t}</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              {f.d}
            </p>
          </div>
        ))}
      </div>

      {/* Liens rapides vers les services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          Explorez nos services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Site vitrine moderne",
              desc: "Présentez votre activité avec un site rapide et élégant.",
              href: "/services#vitrine",
            },
            {
              title: "E-commerce (Stripe)",
              desc: "Vendez en ligne facilement avec paiements sécurisés.",
              href: "/services#ecommerce",
            },
            {
              title: "SEO & Contenu",
              desc: "Améliorez votre visibilité et attirez plus de clients.",
              href: "/services#seo",
            },
            {
              title: "Maintenance & Sécurité",
              desc: "Gardez votre site fiable, sauvegardé et toujours à jour.",
              href: "/services#maintenance",
            },
            {
              title: "Branding & Copywriting",
              desc: "Construisez une identité forte et un message percutant.",
              href: "/services#branding",
            },
          ].map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="card hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {s.desc}
              </p>
              <span
                className="mt-3 inline-block text-sm font-medium"
                style={{ color: "var(--ink)" }}
              >
                En savoir plus →
              </span>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
