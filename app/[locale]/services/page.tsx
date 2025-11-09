import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

type Service = {
  slug: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
};

const IconLaptop = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconCart = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconPen = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const servicesData: Record<string, Service[]> = {
    fr: [
      { slug: "site-vitrine", title: "Site Vitrine", desc: "Un site élégant pour présenter votre activité, vos services et convertir vos visiteurs en clients.", bullets: ["Design moderne et responsive", "Optimisation SEO avancée", "Performance 90+ garantie"], icon: <IconLaptop /> },
      { slug: "e-commerce", title: "E-commerce", desc: "Boutique en ligne complète avec gestion des produits, paiements sécurisés et tableau de bord.", bullets: ["Intégration Stripe/PayPal", "Gestion stock & commandes", "Dashboard admin complet"], icon: <IconCart /> },
      { slug: "seo", title: "SEO & Référencement", desc: "Optimisation technique et contenu pour améliorer votre visibilité sur Google et attirer plus de clients.", bullets: ["Audit SEO complet", "Optimisation technique", "Stratégie de contenu"], icon: <IconSearch /> },
      { slug: "maintenance", title: "Maintenance & Support", desc: "Mises à jour, sauvegardes et assistance technique pour garantir la sécurité et performance de votre site.", bullets: ["Mises à jour régulières", "Sauvegardes automatiques", "Support prioritaire 24/7"], icon: <IconShield /> },
      { slug: "refonte", title: "Refonte de site", desc: "Modernisez votre site existant : design actuel, meilleures performances et conversion optimisée.", bullets: ["Audit de l'existant", "Nouveau design moderne", "Migration sans interruption"], icon: <IconPen /> }
    ],
    en: [
      { slug: "showcase-website", title: "Showcase Website", desc: "An elegant website to present your business, services and convert your visitors into customers.", bullets: ["Modern and responsive design", "Advanced SEO optimization", "90+ performance guaranteed"], icon: <IconLaptop /> },
      { slug: "e-commerce", title: "E-commerce", desc: "Complete online store with product management, secure payments and dashboard.", bullets: ["Stripe/PayPal integration", "Stock & order management", "Complete admin dashboard"], icon: <IconCart /> },
      { slug: "seo", title: "SEO & Ranking", desc: "Technical and content optimization to improve your visibility on Google and attract more customers.", bullets: ["Complete SEO audit", "Technical optimization", "Content strategy"], icon: <IconSearch /> },
      { slug: "maintenance", title: "Maintenance & Support", desc: "Updates, backups and technical assistance to guarantee your site's security and performance.", bullets: ["Regular updates", "Automatic backups", "24/7 priority support"], icon: <IconShield /> },
      { slug: "redesign", title: "Site Redesign", desc: "Modernize your existing site: current design, better performance and optimized conversion.", bullets: ["Audit of existing site", "New modern design", "Seamless migration"], icon: <IconPen /> }
    ],
    es: [
      { slug: "sitio-web", title: "Sitio Web de Presentación", desc: "Un sitio elegante para presentar su negocio, servicios y convertir visitantes en clientes.", bullets: ["Diseño moderno y responsive", "Optimización SEO avanzada", "Rendimiento 90+ garantizado"], icon: <IconLaptop /> },
      { slug: "comercio-electronico", title: "Comercio Electrónico", desc: "Tienda online completa con gestión de productos, pagos seguros y panel de control.", bullets: ["Integración Stripe/PayPal", "Gestión stock y pedidos", "Panel admin completo"], icon: <IconCart /> },
      { slug: "seo", title: "SEO & Posicionamiento", desc: "Optimización técnica y de contenido para mejorar su visibilidad en Google y atraer más clientes.", bullets: ["Auditoría SEO completa", "Optimización técnica", "Estrategia de contenido"], icon: <IconSearch /> },
      { slug: "mantenimiento", title: "Mantenimiento y Soporte", desc: "Actualizaciones, copias de seguridad y asistencia técnica para garantizar seguridad y rendimiento.", bullets: ["Actualizaciones regulares", "Copias de seguridad automáticas", "Soporte prioritario 24/7"], icon: <IconShield /> },
      { slug: "rediseno", title: "Rediseño de sitio", desc: "Modernice su sitio existente: diseño actual, mejor rendimiento y conversión optimizada.", bullets: ["Auditoría del sitio existente", "Nuevo diseño moderno", "Migración sin interrupciones"], icon: <IconPen /> }
    ]
  };

  const heroContent: Record<string, any> = {
    fr: { badge: "🚀 Services", title: "Création de sites web sur mesure", subtitle: "Des solutions complètes pour transformer votre présence en ligne en succès business.", stats: [{ value: "5+", label: "Services proposés" }, { value: "100%", label: "Satisfait ou remboursé" }, { value: "24h", label: "Temps de réponse" }, { value: "A+", label: "Score de performance" }] },
    en: { badge: "🚀 Services", title: "Custom web creation", subtitle: "Complete solutions to transform your online presence into business success.", stats: [{ value: "5+", label: "Services offered" }, { value: "100%", label: "Satisfied or refunded" }, { value: "24h", label: "Response time" }, { value: "A+", label: "Performance score" }] },
    es: { badge: "🚀 Servicios", title: "Creación web personalizada", subtitle: "Soluciones completas para transformar su presencia online en éxito empresarial.", stats: [{ value: "5+", label: "Servicios ofrecidos" }, { value: "100%", label: "Satisfecho o reembolsado" }, { value: "24h", label: "Tiempo de respuesta" }, { value: "A+", label: "Puntuación de rendimiento" }] }
  };

  const processContent: Record<string, any> = {
    fr: { title: "notre processus", subtitle: "De l'idée à la mise en ligne, un accompagnement clair et transparent", steps: [{ title: "1. Consultation", desc: "Échange sur vos besoins et objectifs" }, { title: "2. Proposition", desc: "Devis détaillé et planning précis" }, { title: "3. Développement", desc: "Création de votre site avec feedback régulier" }, { title: "4. Lancement", desc: "Mise en ligne et formation complète" }] },
    en: { title: "our process", subtitle: "From idea to launch, clear and transparent support", steps: [{ title: "1. Consultation", desc: "Discussion about your needs and goals" }, { title: "2. Proposal", desc: "Detailed quote and precise schedule" }, { title: "3. Development", desc: "Creation of your site with regular feedback" }, { title: "4. Launch", desc: "Go live and complete training" }] },
    es: { title: "nuestro proceso", subtitle: "Desde la idea hasta el lanzamiento, apoyo claro y transparente", steps: [{ title: "1. Consulta", desc: "Discusión sobre sus necesidades y objetivos" }, { title: "2. Propuesta", desc: "Presupuesto detallado y cronograma preciso" }, { title: "3. Desarrollo", desc: "Creación de su sitio con feedback regular" }, { title: "4. Lanzamiento", desc: "Puesta en línea y formación completa" }] }
  };

  const ctaContent: Record<string, any> = {
    fr: { title: "Prêt à démarrer votre projet ?", subtitle: "Discutons de vos besoins et créons ensemble le site qui fera décoller votre activité.", ctaText: "Demander un devis gratuit", trustBadges: ["Réponse sous 24h", "Devis transparent", "Sans engagement"] },
    en: { title: "Ready to start your project?", subtitle: "Let's discuss your needs and create together the site that will boost your business.", ctaText: "Request a free quote", trustBadges: ["24h response", "Transparent quote", "No commitment"] },
    es: { title: "¿Listo para comenzar su proyecto?", subtitle: "Hablemos de sus necesidades y creemos juntos el sitio que impulsará su negocio.", ctaText: "Solicitar presupuesto gratis", trustBadges: ["Respuesta en 24h", "Presupuesto transparente", "Sin compromiso"] }
  };

  const services = servicesData[locale] || servicesData.fr;
  const hero = heroContent[locale] || heroContent.fr;
  const process = processContent[locale] || processContent.fr;
  const cta = ctaContent[locale] || ctaContent.fr;

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative p-10 md:p-14 lg:p-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">{hero.badge}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"><span className="text-gradient-animated">{hero.title}</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">{hero.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {hero.stats.map((stat: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, idx) => (
          <div key={service.slug} className="card-premium shadow-premium hover-lift group animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="p-8 space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 transition-transform">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">{locale === 'fr' ? 'Découvrez ' : locale === 'en' ? 'Discover ' : 'Descubra '}<span className="text-gradient">{process.title}</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{process.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {process.steps.map((step: any, idx: number) => (
            <div key={idx} className="relative text-center space-y-4 animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow text-xl font-bold">{idx + 1}</div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
              {idx < 3 && <div className="hidden lg:block absolute -right-4 top-6 text-primary/20"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6 animate-fade-in">
        <h3 className="text-3xl md:text-4xl font-bold"><span className="text-gradient-animated">{cta.title}</span></h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{cta.subtitle}</p>
        <div className="pt-4">
          <Link href="/contact" className="inline-flex items-center gap-2 h-14 px-10 rounded-lg btn-gradient font-semibold text-lg hover-lift shadow-glow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {cta.ctaText}
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-border/40">
          {cta.trustBadges.map((badge: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {badge}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
