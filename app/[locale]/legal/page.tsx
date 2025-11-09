import { setRequestLocale } from 'next-intl/server';

const content: Record<string, {
  metadata: { title: string; description: string };
  badge: string;
  hero: { title: string; subtitle: string };
  quickLinks: Array<{ title: string; desc: string }>;
  publisher: {
    title: string;
    subtitle: string;
    company: string;
    companyDesc: string;
    headquarters: string;
    contact: string;
    director: string;
    directorName: string;
  };
  hosting: {
    title: string;
    subtitle: string;
    provider: string;
    address: string;
    visitSite: string;
  };
  rgpd: {
    title: string;
    subtitle: string;
    rights: Array<{ title: string; desc: string }>;
    contactText: string;
  };
  cta: { title: string; subtitle: string; contact: string; faq: string };
}> = {
  fr: {
    metadata: {
      title: "Mentions Légales & Informations | FlowOn",
      description: "Mentions légales, politique de confidentialité, cookies et conditions d'utilisation de FlowOn. Transparence et conformité RGPD."
    },
    badge: "🔒 Transparence & Légalité",
    hero: {
      title: "Mentions légales",
      subtitle: "Toutes les informations légales concernant FlowOn. Transparence, conformité RGPD et respect de vos données."
    },
    quickLinks: [
      { title: "Politique de confidentialité", desc: "Données collectées, usage, droits RGPD et conservation." },
      { title: "Politique de cookies", desc: "Quels cookies nous utilisons et comment les gérer." },
      { title: "Conditions d'utilisation", desc: "CGU/CGV simples, claires et accessibles." }
    ],
    publisher: {
      title: "Éditeur du site",
      subtitle: "Informations sur l'éditeur et responsable de la publication",
      company: "Raison sociale",
      companyDesc: "FlowOn - Agence de création web",
      headquarters: "Siège social",
      contact: "Contact",
      director: "Directeur de publication",
      directorName: "Flow On"
    },
    hosting: {
      title: "Hébergement du site",
      subtitle: "Ce site est hébergé par Vercel Inc.",
      provider: "Hébergeur",
      address: "Siège social",
      visitSite: "Visiter le site de Vercel"
    },
    rgpd: {
      title: "Conformité RGPD",
      subtitle: "Nous respectons vos données et la réglementation européenne",
      rights: [
        { title: "Droit d'accès", desc: "Consultez toutes les données que nous détenons sur vous" },
        { title: "Droit de rectification", desc: "Corrigez vos données personnelles à tout moment" },
        { title: "Droit à l'effacement", desc: "Supprimez vos données de nos serveurs" },
        { title: "Droit à la portabilité", desc: "Récupérez vos données dans un format exploitable" }
      ],
      contactText: "Pour exercer vos droits, contactez-nous à jalwach.co@gmail.com avec un justificatif d'identité. Nous répondrons dans les 30 jours."
    },
    cta: {
      title: "Des questions ?",
      subtitle: "Pour toute question concernant nos mentions légales ou vos données personnelles, n'hésitez pas à nous contacter.",
      contact: "Nous contacter",
      faq: "Voir la FAQ"
    }
  },
  en: {
    metadata: {
      title: "Legal Information & Terms | FlowOn",
      description: "Legal notices, privacy policy, cookies and terms of use for FlowOn. Transparency and GDPR compliance."
    },
    badge: "🔒 Transparency & Legality",
    hero: {
      title: "Legal notices",
      subtitle: "All legal information about FlowOn. Transparency, GDPR compliance and respect for your data."
    },
    quickLinks: [
      { title: "Privacy Policy", desc: "Data collected, usage, GDPR rights and retention." },
      { title: "Cookie Policy", desc: "What cookies we use and how to manage them." },
      { title: "Terms of Use", desc: "Simple, clear and accessible terms of service." }
    ],
    publisher: {
      title: "Website Publisher",
      subtitle: "Information about the publisher and publication manager",
      company: "Company name",
      companyDesc: "FlowOn - Web Creation Agency",
      headquarters: "Headquarters",
      contact: "Contact",
      director: "Publication Director",
      directorName: "Flow On"
    },
    hosting: {
      title: "Website Hosting",
      subtitle: "This site is hosted by Vercel Inc.",
      provider: "Hosting provider",
      address: "Headquarters",
      visitSite: "Visit Vercel's website"
    },
    rgpd: {
      title: "GDPR Compliance",
      subtitle: "We respect your data and European regulations",
      rights: [
        { title: "Right of access", desc: "View all data we hold about you" },
        { title: "Right to rectification", desc: "Correct your personal data at any time" },
        { title: "Right to erasure", desc: "Delete your data from our servers" },
        { title: "Right to portability", desc: "Retrieve your data in a usable format" }
      ],
      contactText: "To exercise your rights, contact us at jalwach.co@gmail.com with proof of identity. We will respond within 30 days."
    },
    cta: {
      title: "Questions?",
      subtitle: "For any questions about our legal notices or your personal data, feel free to contact us.",
      contact: "Contact us",
      faq: "View FAQ"
    }
  },
  es: {
    metadata: {
      title: "Información Legal y Términos | FlowOn",
      description: "Aviso legal, política de privacidad, cookies y condiciones de uso de FlowOn. Transparencia y cumplimiento RGPD."
    },
    badge: "🔒 Transparencia y Legalidad",
    hero: {
      title: "Aviso legal",
      subtitle: "Toda la información legal sobre FlowOn. Transparencia, cumplimiento RGPD y respeto de sus datos."
    },
    quickLinks: [
      { title: "Política de Privacidad", desc: "Datos recopilados, uso, derechos RGPD y conservación." },
      { title: "Política de Cookies", desc: "Qué cookies usamos y cómo gestionarlas." },
      { title: "Condiciones de Uso", desc: "Términos de servicio simples, claros y accesibles." }
    ],
    publisher: {
      title: "Editor del sitio",
      subtitle: "Información sobre el editor y responsable de la publicación",
      company: "Razón social",
      companyDesc: "FlowOn - Agencia de Creación Web",
      headquarters: "Sede social",
      contact: "Contacto",
      director: "Director de publicación",
      directorName: "Flow On"
    },
    hosting: {
      title: "Alojamiento del sitio",
      subtitle: "Este sitio está alojado por Vercel Inc.",
      provider: "Proveedor de alojamiento",
      address: "Sede social",
      visitSite: "Visitar el sitio de Vercel"
    },
    rgpd: {
      title: "Cumplimiento RGPD",
      subtitle: "Respetamos sus datos y la regulación europea",
      rights: [
        { title: "Derecho de acceso", desc: "Consulte todos los datos que tenemos sobre usted" },
        { title: "Derecho de rectificación", desc: "Corrija sus datos personales en cualquier momento" },
        { title: "Derecho al olvido", desc: "Elimine sus datos de nuestros servidores" },
        { title: "Derecho a la portabilidad", desc: "Recupere sus datos en un formato utilizable" }
      ],
      contactText: "Para ejercer sus derechos, contáctenos en jalwach.co@gmail.com con prueba de identidad. Responderemos en 30 días."
    },
    cta: {
      title: "¿Preguntas?",
      subtitle: "Para cualquier pregunta sobre nuestro aviso legal o sus datos personales, no dude en contactarnos.",
      contact: "Contáctenos",
      faq: "Ver FAQ"
    }
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[locale].metadata;
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = content[locale];
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        
        <div className="relative p-10 md:p-14 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-animated">{t.hero.title.split(' ')[0]}</span> {t.hero.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle.split('. ')[0]}.
            <br />
            <span className="text-foreground font-semibold">{t.hero.subtitle.split('. ')[1]}</span>
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in">
        {[
          { 
            href: "/legal/privacy", 
            title: t.quickLinks[0].title,
            desc: t.quickLinks[0].desc,
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            ),
            color: "from-blue-500 to-cyan-500"
          },
          { 
            href: "/legal/cookies", 
            title: t.quickLinks[1].title,
            desc: t.quickLinks[1].desc,
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            color: "from-purple-500 to-pink-500"
          },
          { 
            href: "/legal/terms", 
            title: t.quickLinks[2].title,
            desc: t.quickLinks[2].desc,
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            color: "from-orange-500 to-red-500"
          },
        ].map((item, idx) => (
          <a 
            key={item.href} 
            href={item.href} 
            className="card-premium shadow-premium hover-lift group block animate-scale-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className={`h-2 rounded-t-3xl bg-linear-to-r ${item.color}`} />
            <div className="p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                {locale === 'fr' ? 'En savoir plus' : locale === 'en' ? 'Learn more' : 'Saber más'}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Main Legal Info */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">{t.publisher.title.split(' ').slice(-1)}</span> {t.publisher.title.split(' ').slice(0, -1).join(' ')}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            {t.publisher.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">{t.publisher.company}</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">{t.publisher.companyDesc}</span>
            </p>
          </div>

          <div className="p-6 rounded-2xl glass space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">{t.publisher.headquarters}</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">Canada</span>
            </p>
          </div>

          <div className="p-6 rounded-2xl glass space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">{t.publisher.contact}</h3>
            </div>
            <a 
              href="mailto:jalwach.co@gmail.com" 
              className="text-primary hover:underline font-medium flex items-center gap-2"
            >
              jalwach.co@gmail.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="p-6 rounded-2xl glass space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">{t.publisher.director}</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">{t.publisher.directorName}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hosting Info */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">{t.hosting.title.split(' ').slice(-1)}</span> {t.hosting.title.split(' ').slice(0, -1).join(' ')}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            {t.hosting.subtitle}
          </p>
        </div>

        <div className="p-6 rounded-2xl glass space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">{t.hosting.provider}</p>
              <p className="text-foreground font-bold">Vercel Inc.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">{t.hosting.address}</p>
              <p className="text-foreground">340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            </div>
          </div>
          <div className="pt-4 border-t border-border/40">
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              {t.hosting.visitSite}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* RGPD Compliance */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">{t.rgpd.title.split(' ')[1]}</span> {t.rgpd.title.split(' ')[0]}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            {t.rgpd.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.rgpd.rights.map((item, idx) => (
            <div 
              key={item.title}
              className="p-6 rounded-2xl glass hover:bg-accent/20 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {idx === 0 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.rgpd.contactText.split('jalwach.co@gmail.com')[0]}
            <a href="mailto:jalwach.co@gmail.com" className="text-primary hover:underline font-medium">
              jalwach.co@gmail.com
            </a>
            {t.rgpd.contactText.split('jalwach.co@gmail.com')[1]}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient-animated">{t.cta.title.split(' ')[1]}</span> {t.cta.title.split(' ')[0]}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg btn-gradient font-semibold text-base hover-lift shadow-glow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.cta.contact}
          </a>
          <a 
            href="/faq" 
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t.cta.faq}
          </a>
        </div>
      </section>
    </div>
  );
}
