import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from '@/i18n/routing';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content: Record<string, any> = {
    fr: {
      hero: {
        badge: "✨ Design moderne et performant",
        title: "Des sites rapides, élégants, et pensés pour convertir",
        subtitle: "Vitrine, e-commerce, SEO — livré vite, sans stress. Parlons de votre projet et donnons vie à vos idées.",
        ctaPricing: "Voir les forfaits",
        ctaQuote: "Obtenir un devis gratuit",
        trustBadges: ["Livraison rapide", "Support réactif", "SEO optimisé"]
      },
      pillars: [
        { title: "Performance", desc: "Core Web Vitals optimisés, chargements ultra-rapides pour une expérience fluide.", color: "text-warning" },
        { title: "Design", desc: "UI premium, sections claires, micro-interactions subtiles qui captivent.", color: "text-primary" },
        { title: "SEO", desc: "Balises, sitemap, schémas structurés — prêts pour dominer Google.", color: "text-success" }
      ],
      stats: [
        { value: "100%", label: "Satisfaction client" },
        { value: "<2s", label: "Temps de chargement" },
        { value: "24/7", label: "Support disponible" },
        { value: "A+", label: "Score Performance" }
      ],
      servicesSection: {
        title: "Explorez nos services",
        subtitle: "Des solutions complètes pour propulser votre présence en ligne"
      },
      services: [
        { title: "Site vitrine moderne", desc: "Présentez votre activité avec un site rapide, élégant et responsive.", href: "/services#vitrine", gradient: "from-blue-500 to-cyan-500" },
        { title: "E-commerce (Stripe)", desc: "Vendez en ligne facilement avec paiements sécurisés et gestion intuitive.", href: "/services#ecommerce", gradient: "from-purple-500 to-pink-500", featured: true },
        { title: "SEO & Contenu", desc: "Améliorez votre visibilité, attirez plus de clients qualifiés.", href: "/services#seo", gradient: "from-green-500 to-emerald-500" },
        { title: "Maintenance & Support", desc: "Dormez tranquille, on s'occupe des mises à jour et de la sécurité.", href: "/services#maintenance", gradient: "from-orange-500 to-red-500" },
        { title: "Refonte de site", desc: "Modernisez votre site existant avec design actuel et performances optimales.", href: "/services#refonte", gradient: "from-indigo-500 to-purple-500" },
        { title: "Branding & Copy", desc: "Identité visuelle cohérente et messages qui résonnent avec votre audience.", href: "/services#branding", gradient: "from-pink-500 to-rose-500" }
      ],
      cta: {
        title: "Prêt à transformer votre vision en réalité ?",
        subtitle: "Discutons de votre projet et créons ensemble quelque chose d'exceptionnel",
        ctaContact: "Démarrer votre projet",
        ctaPricing: "Voir les tarifs"
      }
    },
    en: {
      hero: {
        badge: "✨ Modern and High-Performance Design",
        title: "Fast, elegant websites designed to convert",
        subtitle: "Showcase, e-commerce, SEO — delivered quickly, stress-free. Let's talk about your project and bring your ideas to life.",
        ctaPricing: "View Plans",
        ctaQuote: "Get a Free Quote",
        trustBadges: ["Fast Delivery", "Responsive Support", "SEO Optimized"]
      },
      pillars: [
        { title: "Performance", desc: "Optimized Core Web Vitals, ultra-fast loading for a smooth experience.", color: "text-warning" },
        { title: "Design", desc: "Premium UI, clear sections, subtle micro-interactions that captivate.", color: "text-primary" },
        { title: "SEO", desc: "Tags, sitemap, structured schemas — ready to dominate Google.", color: "text-success" }
      ],
      stats: [
        { value: "100%", label: "Client Satisfaction" },
        { value: "<2s", label: "Loading Time" },
        { value: "24/7", label: "Support Available" },
        { value: "A+", label: "Performance Score" }
      ],
      servicesSection: {
        title: "Explore our services",
        subtitle: "Complete solutions to boost your online presence"
      },
      services: [
        { title: "Modern Showcase Website", desc: "Present your business with a fast, elegant and responsive site.", href: "/services#vitrine", gradient: "from-blue-500 to-cyan-500" },
        { title: "E-commerce (Stripe)", desc: "Sell online easily with secure payments and intuitive management.", href: "/services#ecommerce", gradient: "from-purple-500 to-pink-500", featured: true },
        { title: "SEO & Content", desc: "Improve your visibility, attract more qualified customers.", href: "/services#seo", gradient: "from-green-500 to-emerald-500" },
        { title: "Maintenance & Support", desc: "Sleep peacefully, we take care of updates and security.", href: "/services#maintenance", gradient: "from-orange-500 to-red-500" },
        { title: "Site Redesign", desc: "Modernize your existing site with current design and optimal performance.", href: "/services#refonte", gradient: "from-indigo-500 to-purple-500" },
        { title: "Branding & Copy", desc: "Consistent visual identity and messages that resonate with your audience.", href: "/services#branding", gradient: "from-pink-500 to-rose-500" }
      ],
      cta: {
        title: "Ready to turn your vision into reality?",
        subtitle: "Let's discuss your project and create something exceptional together",
        ctaContact: "Start Your Project",
        ctaPricing: "View Pricing"
      }
    },
    es: {
      hero: {
        badge: "✨ Diseño Moderno y de Alto Rendimiento",
        title: "Sitios rápidos, elegantes y diseñados para convertir",
        subtitle: "Presentación, e-commerce, SEO — entregado rápidamente, sin estrés. Hablemos de su proyecto y demos vida a sus ideas.",
        ctaPricing: "Ver Planes",
        ctaQuote: "Obtener Presupuesto Gratis",
        trustBadges: ["Entrega Rápida", "Soporte Receptivo", "SEO Optimizado"]
      },
      pillars: [
        { title: "Rendimiento", desc: "Core Web Vitals optimizados, carga ultra-rápida para una experiencia fluida.", color: "text-warning" },
        { title: "Diseño", desc: "UI premium, secciones claras, micro-interacciones sutiles que cautivan.", color: "text-primary" },
        { title: "SEO", desc: "Etiquetas, sitemap, esquemas estructurados — listos para dominar Google.", color: "text-success" }
      ],
      stats: [
        { value: "100%", label: "Satisfacción del Cliente" },
        { value: "<2s", label: "Tiempo de Carga" },
        { value: "24/7", label: "Soporte Disponible" },
        { value: "A+", label: "Puntuación de Rendimiento" }
      ],
      servicesSection: {
        title: "Explore nuestros servicios",
        subtitle: "Soluciones completas para impulsar su presencia online"
      },
      services: [
        { title: "Sitio Web de Presentación Moderno", desc: "Presente su negocio con un sitio rápido, elegante y responsive.", href: "/services#vitrine", gradient: "from-blue-500 to-cyan-500" },
        { title: "E-commerce (Stripe)", desc: "Venda online fácilmente con pagos seguros y gestión intuitiva.", href: "/services#ecommerce", gradient: "from-purple-500 to-pink-500", featured: true },
        { title: "SEO & Contenido", desc: "Mejore su visibilidad, atraiga más clientes calificados.", href: "/services#seo", gradient: "from-green-500 to-emerald-500" },
        { title: "Mantenimiento y Soporte", desc: "Duerma tranquilo, nos encargamos de actualizaciones y seguridad.", href: "/services#maintenance", gradient: "from-orange-500 to-red-500" },
        { title: "Rediseño de Sitio", desc: "Modernice su sitio existente con diseño actual y rendimiento óptimo.", href: "/services#refonte", gradient: "from-indigo-500 to-purple-500" },
        { title: "Branding & Copy", desc: "Identidad visual consistente y mensajes que resuenan con su audiencia.", href: "/services#branding", gradient: "from-pink-500 to-rose-500" }
      ],
      cta: {
        title: "¿Listo para convertir su visión en realidad?",
        subtitle: "Hablemos de su proyecto y creemos algo excepcional juntos",
        ctaContact: "Comenzar Su Proyecto",
        ctaPricing: "Ver Precios"
      }
    }
  };

  const t = content[locale] || content.fr;

  return (
    <section className="space-y-16">
      <div className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-[520px] w-[520px] rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse" />
          <div className="absolute right-[-100px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        </div>
        
        <div className="relative p-12 md:p-16 lg:p-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary animate-slide-in">
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              {t.hero.title}
            </h1>
            
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-slide-in">
              {t.hero.subtitle}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 animate-scale-in">
              <Link href="/pricing" className={`${buttonVariants({ size: "lg" })} btn-gradient hover-lift shadow-glow text-base`}>
                {t.hero.ctaPricing}
              </Link>
              <Link href="/contact" className={`${buttonVariants({ variant: "secondary", size: "lg" })} glass-strong hover-lift text-base`}>
                {t.hero.ctaQuote}
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {t.hero.trustBadges.map((badge: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.pillars.map((pillar: any, idx: number) => (
          <Card key={pillar.title} className="card-modern hover-lift group cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
            <CardHeader className="space-y-4">
              <div className={`${pillar.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {idx === 0 && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                {idx === 1 && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
                {idx === 2 && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              </div>
              <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{pillar.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="card-premium shadow-premium p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.stats.map((stat: any, idx: number) => (
            <div key={stat.label} className="space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-gradient">{t.servicesSection.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.servicesSection.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((s: any, idx: number) => (
            <Link key={s.title} href={s.href}>
              <Card className="card-modern hover-lift group cursor-pointer h-full" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl glass transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow bg-gradient-to-br ${s.gradient} text-white`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    {s.featured && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-primary text-white">
                        {locale === 'fr' ? 'Recommandé' : locale === 'en' ? 'Recommended' : 'Recomendado'}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{s.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{s.desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                    <span>{locale === 'fr' ? 'En savoir plus' : locale === 'en' ? 'Learn more' : 'Más información'}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <div className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient-animated">{t.cta.title}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.cta.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/contact" className={`${buttonVariants({ size: "lg" })} btn-gradient hover-lift shadow-glow text-base`}>
            {t.cta.ctaContact}
          </Link>
          <Link href="/pricing" className={`${buttonVariants({ variant: "outline", size: "lg" })} hover-lift text-base`}>
            {t.cta.ctaPricing}
          </Link>
        </div>
      </div>
    </section>
  );
}
