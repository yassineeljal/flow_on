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

export const metadata = { title: "Services | FlowOn" };

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        
        <div className="relative p-10 md:p-14 lg:p-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            ✨ Solutions complètes
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Nos <span className="text-gradient-animated">Services</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tout ce qu'il faut pour un site <strong className="text-foreground">rapide</strong>, 
            <strong className="text-foreground"> beau</strong> et 
            <strong className="text-foreground"> orienté conversion</strong>.
          </p>
          
          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "5+", label: "Services" },
              { value: "100%", label: "Sur mesure" },
              { value: "24h", label: "Réponse" },
              { value: "A+", label: "Qualité" },
            ].map((stat, idx) => (
              <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Solutions <span className="text-gradient">complètes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la conception à la maintenance, nous couvrons tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div 
              key={s.slug} 
              id={s.slug} 
              className="card-modern hover-lift group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-6 md:p-8 flex flex-col gap-6">
                {/* Icon & Title */}
                <div className="space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {s.icon}
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {s.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                {/* Features List */}
                <ul className="text-sm space-y-3 grow">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-4 border-t border-border/40">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-lg border-2 border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all group-hover:shadow-glow"
                  >
                    Demander un devis
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="card-premium shadow-premium p-10 md:p-14 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comment ça <span className="text-gradient">fonctionne</span> ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un processus simple et transparent du début à la livraison
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              step: "01",
              title: "Consultation",
              desc: "Discutons de votre projet et de vos objectifs",
            },
            {
              step: "02",
              title: "Proposition",
              desc: "Devis détaillé et timeline de réalisation",
            },
            {
              step: "03",
              title: "Développement",
              desc: "Création de votre site avec suivi régulier",
            },
            {
              step: "04",
              title: "Lancement",
              desc: "Mise en ligne et formation à l'utilisation",
            },
          ].map((item, idx) => (
            <div key={item.step} className="relative text-center animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white text-2xl font-bold shadow-glow mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              
              {/* Arrow between steps */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)]">
                  <svg className="w-full h-4 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 100 10">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M0 5h90M85 1l5 4-5 4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Prêt à <span className="text-gradient-animated">démarrer</span> ?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez un forfait ou décrivez votre besoin — je vous réponds sous 24h.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="/pricing" 
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Voir les forfaits
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg btn-gradient font-semibold text-base hover-lift shadow-glow"
          >
            Obtenir un devis gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground border-t border-border/40">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Devis gratuit</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sans engagement</span>
          </div>
        </div>
      </div>
    </div>
  );
}
