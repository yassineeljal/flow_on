import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { buttonVariants } from '@/components/ui/button';

type Feature = { label: string; starter?: boolean; business?: boolean; pro?: boolean };

export const metadata = {
  title: "Forfaits & Tarifs | FlowOn",
  description: "Des forfaits simples et transparents pour votre projet web. De 899$ à 3499$. Paiement en 2 fois, maintenance incluse.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Features comparison data
  const featuresData: Record<string, Feature[]> = {
    fr: [
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
    ],
    en: [
      { label: "Included pages", starter: true, business: true, pro: true },
      { label: "Custom design", starter: false, business: true, pro: true },
      { label: "Blog / CMS", starter: false, business: true, pro: true },
      { label: "Portfolio / Testimonials", starter: false, business: true, pro: true },
      { label: "On-page SEO (titles/meta/OG)", starter: true, business: true, pro: true },
      { label: "Performance > 90 (Lighthouse)", starter: true, business: true, pro: true },
      { label: "Contact form", starter: true, business: true, pro: true },
      { label: "E-commerce (Stripe + products)", starter: false, business: false, pro: true },
      { label: "Integrations (Analytics, Clarity)", starter: false, business: true, pro: true },
      { label: "Maintenance included", starter: false, business: true, pro: true },
    ],
    es: [
      { label: "Páginas incluidas", starter: true, business: true, pro: true },
      { label: "Diseño personalizado", starter: false, business: true, pro: true },
      { label: "Blog / CMS", starter: false, business: true, pro: true },
      { label: "Portafolio / Testimonios", starter: false, business: true, pro: true },
      { label: "SEO on-page (títulos/meta/OG)", starter: true, business: true, pro: true },
      { label: "Rendimiento > 90 (Lighthouse)", starter: true, business: true, pro: true },
      { label: "Formulario de contacto", starter: true, business: true, pro: true },
      { label: "E-commerce (Stripe + productos)", starter: false, business: false, pro: true },
      { label: "Integraciones (Analytics, Clarity)", starter: false, business: true, pro: true },
      { label: "Mantenimiento incluido", starter: false, business: true, pro: true },
    ],
  };

  const features = featuresData[locale] || featuresData.fr;

  // Tiers data
  type Tier = {
    name: string;
    price: string;
    currency: string;
    sub: string;
    bullets: string[];
    cta: string;
    popular: boolean;
    color: string;
  };

  const tiersData: Record<string, Tier[]> = {
    fr: [
      {
        name: "Starter",
        price: "899",
        currency: "$",
        sub: "Landing 1 page ou 3 pages simples",
        bullets: [
          "Design sur modèle premium",
          "SEO de base, performances optimisées",
          "Formulaire de contact",
          "2 révisions, livraison 7–10 jours",
          "Support par email",
        ],
        cta: "Choisir Starter",
        popular: false,
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Business",
        price: "1 999",
        currency: "$",
        sub: "6–8 pages + CMS (blog/portfolio)",
        bullets: [
          "Design sur mesure",
          "SEO on-page + sitemap + schémas",
          "Analytics + heatmap (Clarity/Matomo)",
          "4 révisions, 2–3 semaines",
          "Maintenance 1 mois incluse",
          "Support prioritaire",
        ],
        cta: "Choisir Business",
        popular: true,
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Pro Commerce",
        price: "3 499",
        currency: "$",
        sub: "10–14 pages + e-commerce",
        bullets: [
          "Design premium (micro-interactions)",
          "Stripe (paiements) + pages produits",
          "Funnels (lead magnet + emails de base)",
          "6 révisions, 3–5 semaines",
          "Maintenance 3 mois incluse",
          "Support dédié 24/7",
        ],
        cta: "Choisir Pro Commerce",
        popular: false,
        color: "from-orange-500 to-red-500",
      },
    ],
    en: [
      {
        name: "Starter",
        price: "899",
        currency: "$",
        sub: "1 landing page or 3 simple pages",
        bullets: [
          "Premium template design",
          "Basic SEO, optimized performance",
          "Contact form",
          "2 revisions, 7–10 days delivery",
          "Email support",
        ],
        cta: "Choose Starter",
        popular: false,
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Business",
        price: "1,999",
        currency: "$",
        sub: "6–8 pages + CMS (blog/portfolio)",
        bullets: [
          "Custom design",
          "On-page SEO + sitemap + schemas",
          "Analytics + heatmap (Clarity/Matomo)",
          "4 revisions, 2–3 weeks",
          "1 month maintenance included",
          "Priority support",
        ],
        cta: "Choose Business",
        popular: true,
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Pro Commerce",
        price: "3,499",
        currency: "$",
        sub: "10–14 pages + e-commerce",
        bullets: [
          "Premium design (micro-interactions)",
          "Stripe (payments) + product pages",
          "Funnels (lead magnet + basic emails)",
          "6 revisions, 3–5 weeks",
          "3 months maintenance included",
          "Dedicated 24/7 support",
        ],
        cta: "Choose Pro Commerce",
        popular: false,
        color: "from-orange-500 to-red-500",
      },
    ],
    es: [
      {
        name: "Starter",
        price: "899",
        currency: "$",
        sub: "1 landing page o 3 páginas simples",
        bullets: [
          "Diseño basado en plantilla premium",
          "SEO básico, rendimiento optimizado",
          "Formulario de contacto",
          "2 revisiones, entrega en 7–10 días",
          "Soporte por correo electrónico",
        ],
        cta: "Elegir Starter",
        popular: false,
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Business",
        price: "1.999",
        currency: "$",
        sub: "6–8 páginas + CMS (blog/portafolio)",
        bullets: [
          "Diseño personalizado",
          "SEO on-page + sitemap + esquemas",
          "Analytics + heatmap (Clarity/Matomo)",
          "4 revisiones, 2–3 semanas",
          "1 mes de mantenimiento incluido",
          "Soporte prioritario",
        ],
        cta: "Elegir Business",
        popular: true,
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Pro Commerce",
        price: "3.499",
        currency: "$",
        sub: "10–14 páginas + e-commerce",
        bullets: [
          "Diseño premium (micro-interacciones)",
          "Stripe (pagos) + páginas de productos",
          "Embudos (lead magnet + emails básicos)",
          "6 revisiones, 3–5 semanas",
          "3 meses de mantenimiento incluidos",
          "Soporte dedicado 24/7",
        ],
        cta: "Elegir Pro Commerce",
        popular: false,
        color: "from-orange-500 to-red-500",
      },
    ],
  };

  const tiers = tiersData[locale] || tiersData.fr;

  // Hero content
  const heroContent: Record<string, any> = {
    fr: {
      badge: "💰 Tarifs transparents",
      title: "Forfaits",
      titleSuffix: " & Tarifs",
      subtitle: "Des packs simples, clairs et prêts à vendre.",
      paymentNote: "Payez 50% à la commande, 50% à la mise en ligne.",
      badges: ["Paiement en 2 fois", "Maintenance incluse", "Devis personnalisé gratuit"],
    },
    en: {
      badge: "💰 Transparent pricing",
      title: "Plans",
      titleSuffix: " & Pricing",
      subtitle: "Simple, clear packages ready to sell.",
      paymentNote: "Pay 50% on order, 50% at launch.",
      badges: ["Payment in 2 installments", "Maintenance included", "Free custom quote"],
    },
    es: {
      badge: "💰 Precios transparentes",
      title: "Planes",
      titleSuffix: " y Precios",
      subtitle: "Paquetes simples, claros y listos para vender.",
      paymentNote: "Pague 50% al pedido, 50% al lanzamiento.",
      badges: ["Pago en 2 cuotas", "Mantenimiento incluido", "Presupuesto personalizado gratis"],
    },
  };

  const hero = heroContent[locale] || heroContent.fr;

  // Comparison section content
  const comparisonContent: Record<string, any> = {
    fr: {
      title: "détaillé",
      subtitle: "Comparez les fonctionnalités de chaque forfait",
      tableHeader: ["Fonctionnalités", "Starter", "Business", "Pro Commerce"],
    },
    en: {
      title: "detailed",
      subtitle: "Compare features of each plan",
      tableHeader: ["Features", "Starter", "Business", "Pro Commerce"],
    },
    es: {
      title: "detallado",
      subtitle: "Compare las funciones de cada plan",
      tableHeader: ["Funciones", "Starter", "Business", "Pro Commerce"],
    },
  };

  const comparison = comparisonContent[locale] || comparisonContent.fr;

  // CTA content
  const ctaContent: Record<string, any> = {
    fr: {
      title: "lancer",
      subtitle: "Un site clair, rapide et qui convertit — sans stress.",
      ctaStart: "Démarrer mon projet",
      ctaPortfolio: "Voir des réalisations",
      guarantees: [
        { title: "Paiement flexible", desc: "50% à la commande, 50% à la livraison" },
        { title: "Garantie qualité", desc: "Révisions incluses jusqu'à satisfaction" },
        { title: "Livraison rapide", desc: "De 7 jours à 5 semaines selon le forfait" },
      ],
    },
    en: {
      title: "launch",
      subtitle: "A clear, fast and converting site — stress-free.",
      ctaStart: "Start my project",
      ctaPortfolio: "See portfolio",
      guarantees: [
        { title: "Flexible payment", desc: "50% on order, 50% at delivery" },
        { title: "Quality guarantee", desc: "Revisions included until satisfaction" },
        { title: "Fast delivery", desc: "From 7 days to 5 weeks depending on plan" },
      ],
    },
    es: {
      title: "lanzar",
      subtitle: "Un sitio claro, rápido y que convierte — sin estrés.",
      ctaStart: "Iniciar mi proyecto",
      ctaPortfolio: "Ver portafolio",
      guarantees: [
        { title: "Pago flexible", desc: "50% al pedido, 50% en la entrega" },
        { title: "Garantía de calidad", desc: "Revisiones incluidas hasta satisfacción" },
        { title: "Entrega rápida", desc: "De 7 días a 5 semanas según el plan" },
      ],
    },
  };

  const cta = ctaContent[locale] || ctaContent.fr;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative p-10 md:p-14 lg:p-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            {hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-animated">{hero.title}</span>{hero.titleSuffix}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
            <br />
            <span className="text-foreground font-semibold">{hero.paymentNote}</span>
          </p>

          {/* Payment badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm">
            {hero.badges.map((badge: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((t, idx) => (
          <div
            key={t.name}
            className={`relative rounded-3xl bg-card border transition-all hover-lift group animate-scale-in ${
              t.popular
                ? "ring-2 ring-primary shadow-glow-accent scale-105 md:scale-110"
                : "shadow-premium"
            }`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Popular Badge */}
            {t.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="px-4 py-1.5 rounded-full bg-gradient-primary text-white text-xs font-bold shadow-glow flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {locale === 'fr' ? 'Le plus choisi' : locale === 'en' ? 'Most popular' : 'Más elegido'}
                </div>
              </div>
            )}

            {/* Gradient Header */}
            <div className={`relative h-2 rounded-t-3xl bg-linear-to-r ${t.color}`} />

            <div className="p-8 md:p-10 space-y-6">
              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {t.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.sub}
                </p>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gradient">{t.price}</span>
                  <span className="text-2xl font-semibold text-muted-foreground">{t.currency}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {locale === 'fr' ? 'par projet' : locale === 'en' ? 'per project' : 'por proyecto'}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 py-6 border-y border-border/40">
                {t.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`flex w-full h-12 rounded-xl font-semibold text-sm transition-all items-center justify-center gap-2 ${
                  t.popular
                    ? "btn-gradient shadow-glow hover-lift"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
                }`}
              >
                {t.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Custom quote link */}
              <p className="text-xs text-center text-muted-foreground pt-2">
                {locale === 'fr' ? 'Besoin d\'un devis personnalisé ? ' : 
                 locale === 'en' ? 'Need a custom quote? ' : 
                 '¿Necesita un presupuesto personalizado? '}
                <Link className="text-primary hover:underline font-medium" href="/contact">
                  {locale === 'fr' ? 'Contactez-nous' : locale === 'en' ? 'Contact us' : 'Contáctenos'}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h3 className="text-3xl md:text-4xl font-bold">
            {locale === 'fr' ? 'Comparatif ' : locale === 'en' ? 'Detailed ' : 'Comparación '}
            <span className="text-gradient">{comparison.title}</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            {comparison.subtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border shadow-premium">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {comparison.tableHeader.map((header: string, idx: number) => (
                  <th key={idx} className="text-left p-4 md:p-6 font-bold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={`${i % 2 ? "bg-muted/20" : "bg-card"} hover:bg-accent/50 transition-colors`}>
                  <td className="p-4 md:p-6 font-medium">{f.label}</td>
                  <td className="p-4 md:p-6">
                    {f.starter ? (
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="p-4 md:p-6">
                    {f.business ? (
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="p-4 md:p-6">
                    {f.pro ? (
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            {locale === 'fr' ? 'Prêt à ' : locale === 'en' ? 'Ready to ' : 'Listo para '}
            <span className="text-gradient-animated">{cta.title}</span>
            {locale === 'fr' ? ' votre site ?' : locale === 'en' ? ' your site?' : ' su sitio?'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {cta.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg btn-gradient font-semibold text-base hover-lift shadow-glow"
          >
            {cta.ctaStart}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {cta.ctaPortfolio}
          </Link>
        </div>

        {/* Guarantees */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border/40">
          {cta.guarantees.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
                {idx === 0 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
