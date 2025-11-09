import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactForm from "@/components/contact-form";
import { Link } from '@/i18n/routing';

export const metadata = {
  title: "Contact & Devis Gratuit | FlowOn",
  description: "Obtenez un devis personnalisé pour votre projet web. Réponse sous 24h. Consultation gratuite et sans engagement.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Get translations for the contact form - extract as plain object
  const formTranslations = await getTranslations({ locale, namespace: 'contactForm' });
  const formT = {
    nameLabel: formTranslations('nameLabel'),
    namePlaceholder: formTranslations('namePlaceholder'),
    nameError: formTranslations('nameError'),
    emailLabel: formTranslations('emailLabel'),
    emailPlaceholder: formTranslations('emailPlaceholder'),
    emailError: formTranslations('emailError'),
    budgetLabel: formTranslations('budgetLabel'),
    budgetPlaceholder: formTranslations('budgetPlaceholder'),
    budgetError: formTranslations('budgetError'),
    budgetLow: formTranslations('budgetLow'),
    budgetMed: formTranslations('budgetMed'),
    budgetHigh: formTranslations('budgetHigh'),
    budgetVeryHigh: formTranslations('budgetVeryHigh'),
    delayLabel: formTranslations('delayLabel'),
    delayPlaceholder: formTranslations('delayPlaceholder'),
    delayError: formTranslations('delayError'),
    delayUrgent: formTranslations('delayUrgent'),
    delay2to3: formTranslations('delay2to3'),
    delay1to2: formTranslations('delay1to2'),
    delayDontKnow: formTranslations('delayDontKnow'),
    messageLabel: formTranslations('messageLabel'),
    messagePlaceholder: formTranslations('messagePlaceholder'),
    messageError: formTranslations('messageError'),
    adviceTitle: formTranslations('adviceTitle'),
    adviceText: formTranslations('adviceText'),
    captchaError: formTranslations('captchaError'),
    submitButton: formTranslations('submitButton'),
    submitting: formTranslations('submitting'),
    successTitle: formTranslations('successTitle'),
    successDesc: formTranslations('successDesc'),
    errorRateLimit: formTranslations('errorRateLimit'),
    errorRateLimitDesc: formTranslations('errorRateLimitDesc'),
    errorGeneral: formTranslations('errorGeneral'),
    errorGeneralDesc: formTranslations('errorGeneralDesc'),
    errorNetwork: formTranslations('errorNetwork'),
    errorNetworkDesc: formTranslations('errorNetworkDesc'),
    privacyNotice: formTranslations('privacyNotice'),
    privacyLink: formTranslations('privacyLink'),
  };

  // Content by language
  const content: Record<string, any> = {
    fr: {
      hero: {
        badge: "🚀 Parlons de votre projet",
        title: "Obtenir un devis gratuit",
        subtitle: "Décrivez votre projet en quelques lignes, on vous répond avec une proposition claire et détaillée.",
        note: "Réponse sous 24h • Consultation gratuite • Sans engagement",
        badges: ["Réponse rapide 24h", "100% gratuit", "Sans engagement"],
      },
      formSection: {
        title: "Remplissez le formulaire",
        subtitle: "Plus vous êtes précis, plus notre proposition sera adaptée à vos besoins.",
      },
      sidebar: {
        whyTitle: "Pourquoi FlowOn ?",
        features: [
          { icon: "🎨", text: "Design premium, cohérent avec votre marque" },
          { icon: "⚡", text: "Performances 90+ (Core Web Vitals)" },
          { icon: "🔍", text: "SEO on-page inclus dès le départ" },
          { icon: "📱", text: "100% responsive & mobile-first" },
          { icon: "⏱️", text: "Délais clairs & process transparent" },
          { icon: "🔧", text: "Maintenance & support inclus" },
        ],
        ctaPricing: "Voir les forfaits",
        contactTitle: "Autres moyens",
        email: "Email",
        emailAddress: "jalwach.co@gmail.com",
        availability: "Disponibilité",
        availableHours: "Lun-Ven : 9h-18h",
        responseTime: "Réponse sous 24h max",
        location: "Localisation",
        locationText: "À distance",
        locationSubtext: "Partout dans le monde",
        guaranteeTitle: "Garantie satisfaction",
        guaranteeText: "Révisions incluses jusqu'à ce que vous soyez 100% satisfait",
      },
      faq: {
        title: "Questions fréquentes",
        subtitle: "Tout ce que vous devez savoir avant de nous contacter",
        questions: [
          {
            q: "Combien de temps pour avoir une réponse ?",
            a: "Nous répondons à toutes les demandes sous 24h maximum, souvent le jour même. Vous recevrez un email avec une première estimation et des questions pour affiner votre devis."
          },
          {
            q: "Le devis est-il vraiment gratuit ?",
            a: "Oui, 100% gratuit et sans engagement. Nous prenons le temps de comprendre votre projet pour vous proposer une solution adaptée à votre budget et vos objectifs."
          },
          {
            q: "Dois-je avoir un cahier des charges ?",
            a: "Non, pas obligatoire ! Même si vous avez juste une idée, on peut en discuter ensemble. Plus vous êtes précis, mieux c'est, mais on peut vous guider dans la définition de votre projet."
          },
          {
            q: "Que se passe-t-il après l'envoi ?",
            a: "Vous recevez un accusé de réception immédiat. Ensuite, on analyse votre demande et on vous envoie sous 24h une proposition détaillée avec tarif, délais et étapes du projet."
          },
        ],
        ctaMore: "D'autres questions ?",
        ctaFaq: "Voir toute la FAQ",
      },
    },
    en: {
      hero: {
        badge: "🚀 Let's talk about your project",
        title: "Get a free quote",
        subtitle: "Describe your project in a few lines, we'll respond with a clear and detailed proposal.",
        note: "Response within 24h • Free consultation • No commitment",
        badges: ["Fast 24h response", "100% free", "No commitment"],
      },
      formSection: {
        title: "Fill out the form",
        subtitle: "The more specific you are, the better we can tailor our proposal to your needs.",
      },
      sidebar: {
        whyTitle: "Why FlowOn?",
        features: [
          { icon: "🎨", text: "Premium design, consistent with your brand" },
          { icon: "⚡", text: "90+ performance (Core Web Vitals)" },
          { icon: "🔍", text: "On-page SEO included from the start" },
          { icon: "📱", text: "100% responsive & mobile-first" },
          { icon: "⏱️", text: "Clear timelines & transparent process" },
          { icon: "🔧", text: "Maintenance & support included" },
        ],
        ctaPricing: "View pricing",
        contactTitle: "Other ways",
        email: "Email",
        emailAddress: "jalwach.co@gmail.com",
        availability: "Availability",
        availableHours: "Mon-Fri: 9am-6pm",
        responseTime: "Response within 24h max",
        location: "Location",
        locationText: "Remote",
        locationSubtext: "Worldwide",
        guaranteeTitle: "Satisfaction guarantee",
        guaranteeText: "Revisions included until you're 100% satisfied",
      },
      faq: {
        title: "Frequently asked questions",
        subtitle: "Everything you need to know before contacting us",
        questions: [
          {
            q: "How long to get a response?",
            a: "We respond to all requests within 24h maximum, often the same day. You'll receive an email with an initial estimate and questions to refine your quote."
          },
          {
            q: "Is the quote really free?",
            a: "Yes, 100% free and no commitment. We take the time to understand your project to offer a solution tailored to your budget and goals."
          },
          {
            q: "Do I need specifications?",
            a: "No, not required! Even if you just have an idea, we can discuss together. The more specific you are, the better, but we can guide you in defining your project."
          },
          {
            q: "What happens after sending?",
            a: "You receive an immediate acknowledgment. Then, we analyze your request and send you within 24h a detailed proposal with pricing, timelines and project steps."
          },
        ],
        ctaMore: "More questions?",
        ctaFaq: "See full FAQ",
      },
    },
    es: {
      hero: {
        badge: "🚀 Hablemos de su proyecto",
        title: "Obtenga un presupuesto gratuito",
        subtitle: "Describa su proyecto en pocas líneas, responderemos con una propuesta clara y detallada.",
        note: "Respuesta en 24h • Consulta gratuita • Sin compromiso",
        badges: ["Respuesta rápida 24h", "100% gratis", "Sin compromiso"],
      },
      formSection: {
        title: "Complete el formulario",
        subtitle: "Cuanto más específico sea, mejor podremos adaptar nuestra propuesta a sus necesidades.",
      },
      sidebar: {
        whyTitle: "¿Por qué FlowOn?",
        features: [
          { icon: "🎨", text: "Diseño premium, coherente con su marca" },
          { icon: "⚡", text: "Rendimiento 90+ (Core Web Vitals)" },
          { icon: "🔍", text: "SEO on-page incluido desde el inicio" },
          { icon: "📱", text: "100% responsive y mobile-first" },
          { icon: "⏱️", text: "Plazos claros y proceso transparente" },
          { icon: "🔧", text: "Mantenimiento y soporte incluidos" },
        ],
        ctaPricing: "Ver precios",
        contactTitle: "Otras formas",
        email: "Correo electrónico",
        emailAddress: "jalwach.co@gmail.com",
        availability: "Disponibilidad",
        availableHours: "Lun-Vie: 9h-18h",
        responseTime: "Respuesta en 24h máx",
        location: "Ubicación",
        locationText: "A distancia",
        locationSubtext: "En todo el mundo",
        guaranteeTitle: "Garantía de satisfacción",
        guaranteeText: "Revisiones incluidas hasta que esté 100% satisfecho",
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Todo lo que necesita saber antes de contactarnos",
        questions: [
          {
            q: "¿Cuánto tiempo para obtener una respuesta?",
            a: "Respondemos a todas las solicitudes en 24h máximo, a menudo el mismo día. Recibirá un correo electrónico con una estimación inicial y preguntas para refinar su presupuesto."
          },
          {
            q: "¿El presupuesto es realmente gratuito?",
            a: "Sí, 100% gratuito y sin compromiso. Nos tomamos el tiempo para comprender su proyecto y ofrecer una solución adaptada a su presupuesto y objetivos."
          },
          {
            q: "¿Necesito especificaciones?",
            a: "¡No, no es obligatorio! Incluso si solo tiene una idea, podemos discutirla juntos. Cuanto más específico sea, mejor, pero podemos guiarlo en la definición de su proyecto."
          },
          {
            q: "¿Qué sucede después del envío?",
            a: "Recibirá un acuse de recibo inmediato. Luego, analizamos su solicitud y le enviamos en 24h una propuesta detallada con precios, plazos y pasos del proyecto."
          },
        ],
        ctaMore: "¿Más preguntas?",
        ctaFaq: "Ver FAQ completa",
      },
    },
  };

  const t = content[locale] || content.fr;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative p-10 md:p-14 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-animated">{t.hero.title}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
            <br />
            <span className="text-foreground font-semibold">{t.hero.note}</span>
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm">
            {t.hero.badges.map((badge: string, idx: number) => (
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

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 card-premium shadow-premium-lg p-8 md:p-10 animate-scale-in">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-gradient">{t.formSection.title}</span>
            </h2>
            <p className="text-muted-foreground">
              {t.formSection.subtitle}
            </p>
          </div>
          <ContactForm t={formT} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 h-fit animate-scale-in" style={{ animationDelay: "150ms" }}>
          {/* Why Choose Us */}
          <div className="card-premium shadow-premium p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">{t.sidebar.whyTitle}</h3>
            </div>

            <ul className="space-y-3 text-sm">
              {t.sidebar.features.map((item: any, idx: number) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <span className="text-lg shrink-0 group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border/40">
              <Link
                href="/pricing"
                className="flex w-full h-10 items-center justify-center rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all hover-lift gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {t.sidebar.ctaPricing}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="card-premium shadow-premium p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">{t.sidebar.contactTitle}</h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">{t.sidebar.email}</p>
                  <a href={`mailto:${t.sidebar.emailAddress}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {t.sidebar.emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">{t.sidebar.availability}</p>
                  <p className="text-muted-foreground">
                    {t.sidebar.availableHours}<br />
                    {t.sidebar.responseTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">{t.sidebar.location}</p>
                  <p className="text-muted-foreground">
                    {t.sidebar.locationText}<br />
                    {t.sidebar.locationSubtext}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="card-premium shadow-premium-lg p-6 text-center space-y-3 bg-linear-to-br from-primary/5 to-accent/5">
            <div className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-bold">{t.sidebar.guaranteeTitle}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {t.sidebar.guaranteeText}
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">{t.faq.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.faq.questions.map((item: any, idx: number) => (
            <div key={idx} className="p-6 rounded-2xl glass hover:bg-accent/20 transition-all hover-lift" style={{ animationDelay: `${idx * 100}ms` }}>
              <h3 className="font-bold mb-2 flex items-start gap-2">
                <span className="text-primary shrink-0">•</span>
                {item.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <p className="text-muted-foreground mb-4">{t.faq.ctaMore}</p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            {t.faq.ctaFaq}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
