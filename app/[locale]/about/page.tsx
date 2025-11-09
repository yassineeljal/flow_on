import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export const metadata = {
  title: "À Propos - Notre Histoire & Valeurs | FlowOn",
  description: "Découvrez FlowOn, une agence web passionnée par la création de sites modernes, rapides et élégants. Design premium, performance et simplicité.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Content by language - massive object for About page
  const content: Record<string, any> = {
    fr: {
      hero: {
        badge: "👋 Qui sommes-nous ?",
        title: "À propos de FlowOn",
        subtitle: "Une agence web créée par un développeur passionné : créer des sites modernes, rapides et élégants, sans les complications habituelles.",
      },
      mission: {
        title: "Notre Mission",
        text: "Transformer vos idées en sites web clairs, performants et rentables. Nous croyons qu'un bon site doit être à la fois beau, rapide et efficace pour atteindre vos objectifs business.",
      },
      vision: {
        title: "Notre Vision",
        text: "Rendre la création web accessible à tous, sans jargon technique ni surprises. Chaque projet est une collaboration authentique où votre succès devient notre priorité.",
      },
      philosophy: {
        title: "Philosophie",
        subtitle: "Chaque projet est unique. Nous écoutons vos besoins, vos goûts, vos objectifs.",
        pillars: [
          { title: "Design minimaliste", desc: "Épuré, moderne et cohérent avec votre identité" },
          { title: "Code propre", desc: "Optimisé, maintenable et scalable" },
          { title: "Mobile-first", desc: "Expérience fluide sur tous les écrans" },
          { title: "Communication", desc: "Simple, rapide et transparente" },
        ],
      },
      process: {
        title: "travaillons",
        subtitle: "Un processus clair et transparent, de l'idée à la mise en ligne",
        steps: [
          {
            step: "01",
            title: "Discussion & Devis",
            desc: "On échange sur vos besoins, vos objectifs. Je prépare une estimation claire et détaillée.",
          },
          {
            step: "02",
            title: "Maquette & Design",
            desc: "Je conçois une structure élégante et intuitive, alignée avec votre identité visuelle.",
          },
          {
            step: "03",
            title: "Développement",
            desc: "Intégration avec Next.js, Tailwind CSS. SEO optimisé, performances garanties 90+.",
          },
          {
            step: "04",
            title: "Lancement",
            desc: "Ajustements finaux, déploiement sur Vercel, formation et support post-lancement.",
          },
        ],
      },
      values: [
        {
          emoji: "✨",
          title: "Simplicité",
          desc: "Un site clair, facile à comprendre et à maintenir. Chaque ligne de code a une raison d'exister. Pas de superflu, juste l'essentiel.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          emoji: "🎨",
          title: "Design réfléchi",
          desc: "Les couleurs, les formes et les textes servent à une chose : créer une émotion et inciter à l'action. Design qui convertit.",
          color: "from-purple-500 to-pink-500",
        },
        {
          emoji: "⚡",
          title: "Performance",
          desc: "Un site lent fait fuir. FlowOn livre des sites ultra-rapides, optimisés pour les Core Web Vitals. Score 90+ garanti.",
          color: "from-orange-500 to-red-500",
        },
      ],
      stats: {
        title: "engagements",
        subtitle: "Des promesses concrètes que nous tenons sur chaque projet",
        items: [
          { stat: "90+", label: "Score Lighthouse garanti" },
          { stat: "24h", label: "Temps de réponse max" },
          { stat: "100%", label: "Satisfaction client" },
          { stat: "0€", label: "Frais cachés" },
        ],
      },
      cta: {
        title: "travailler ensemble",
        subtitle: "Vous avez une idée ? Un projet en tête ? Je vous accompagne du concept à la mise en ligne.",
        ctaContact: "Me contacter",
        ctaPricing: "Voir les forfaits",
        trustBadges: [
          { value: "7-10j", label: "Livraison rapide dès le forfait Starter" },
          { value: "2-6", label: "Révisions incluses selon le forfait" },
          { value: "24/7", label: "Support et maintenance disponible" },
        ],
      },
    },
    en: {
      hero: {
        badge: "👋 Who are we?",
        title: "About FlowOn",
        subtitle: "A web agency created by a passionate developer: creating modern, fast and elegant websites, without the usual complications.",
      },
      mission: {
        title: "Our Mission",
        text: "Transform your ideas into clear, high-performing and profitable websites. We believe a good site must be beautiful, fast and effective to achieve your business goals.",
      },
      vision: {
        title: "Our Vision",
        text: "Make web creation accessible to everyone, without technical jargon or surprises. Each project is an authentic collaboration where your success becomes our priority.",
      },
      philosophy: {
        title: "Philosophy",
        subtitle: "Each project is unique. We listen to your needs, your tastes, your goals.",
        pillars: [
          { title: "Minimalist design", desc: "Clean, modern and consistent with your identity" },
          { title: "Clean code", desc: "Optimized, maintainable and scalable" },
          { title: "Mobile-first", desc: "Smooth experience on all screens" },
          { title: "Communication", desc: "Simple, fast and transparent" },
        ],
      },
      process: {
        title: "work",
        subtitle: "A clear and transparent process, from idea to launch",
        steps: [
          {
            step: "01",
            title: "Discussion & Quote",
            desc: "We discuss your needs and goals. I prepare a clear and detailed estimate.",
          },
          {
            step: "02",
            title: "Mockup & Design",
            desc: "I design an elegant and intuitive structure, aligned with your visual identity.",
          },
          {
            step: "03",
            title: "Development",
            desc: "Integration with Next.js, Tailwind CSS. Optimized SEO, 90+ performance guaranteed.",
          },
          {
            step: "04",
            title: "Launch",
            desc: "Final adjustments, Vercel deployment, training and post-launch support.",
          },
        ],
      },
      values: [
        {
          emoji: "✨",
          title: "Simplicity",
          desc: "A clear site, easy to understand and maintain. Every line of code has a reason to exist. No extras, just the essentials.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          emoji: "🎨",
          title: "Thoughtful design",
          desc: "Colors, shapes and text serve one thing: create emotion and drive action. Design that converts.",
          color: "from-purple-500 to-pink-500",
        },
        {
          emoji: "⚡",
          title: "Performance",
          desc: "A slow site drives people away. FlowOn delivers ultra-fast sites, optimized for Core Web Vitals. 90+ score guaranteed.",
          color: "from-orange-500 to-red-500",
        },
      ],
      stats: {
        title: "commitments",
        subtitle: "Concrete promises we keep on every project",
        items: [
          { stat: "90+", label: "Guaranteed Lighthouse score" },
          { stat: "24h", label: "Max response time" },
          { stat: "100%", label: "Client satisfaction" },
          { stat: "$0", label: "Hidden fees" },
        ],
      },
      cta: {
        title: "work together",
        subtitle: "Have an idea? A project in mind? I'll support you from concept to launch.",
        ctaContact: "Contact me",
        ctaPricing: "View plans",
        trustBadges: [
          { value: "7-10d", label: "Fast delivery from Starter plan" },
          { value: "2-6", label: "Revisions included per plan" },
          { value: "24/7", label: "Support and maintenance available" },
        ],
      },
    },
    es: {
      hero: {
        badge: "👋 ¿Quiénes somos?",
        title: "Acerca de FlowOn",
        subtitle: "Una agencia web creada por un desarrollador apasionado: crear sitios modernos, rápidos y elegantes, sin las complicaciones habituales.",
      },
      mission: {
        title: "Nuestra Misión",
        text: "Transformar sus ideas en sitios web claros, eficientes y rentables. Creemos que un buen sitio debe ser hermoso, rápido y efectivo para lograr sus objetivos comerciales.",
      },
      vision: {
        title: "Nuestra Visión",
        text: "Hacer la creación web accesible para todos, sin jerga técnica ni sorpresas. Cada proyecto es una colaboración auténtica donde su éxito se convierte en nuestra prioridad.",
      },
      philosophy: {
        title: "Filosofía",
        subtitle: "Cada proyecto es único. Escuchamos sus necesidades, sus gustos, sus objetivos.",
        pillars: [
          { title: "Diseño minimalista", desc: "Limpio, moderno y coherente con su identidad" },
          { title: "Código limpio", desc: "Optimizado, mantenible y escalable" },
          { title: "Mobile-first", desc: "Experiencia fluida en todas las pantallas" },
          { title: "Comunicación", desc: "Simple, rápida y transparente" },
        ],
      },
      process: {
        title: "trabajamos",
        subtitle: "Un proceso claro y transparente, desde la idea hasta el lanzamiento",
        steps: [
          {
            step: "01",
            title: "Discusión y Presupuesto",
            desc: "Discutimos sus necesidades y objetivos. Preparo una estimación clara y detallada.",
          },
          {
            step: "02",
            title: "Maqueta y Diseño",
            desc: "Diseño una estructura elegante e intuitiva, alineada con su identidad visual.",
          },
          {
            step: "03",
            title: "Desarrollo",
            desc: "Integración con Next.js, Tailwind CSS. SEO optimizado, rendimiento garantizado 90+.",
          },
          {
            step: "04",
            title: "Lanzamiento",
            desc: "Ajustes finales, implementación en Vercel, capacitación y soporte post-lanzamiento.",
          },
        ],
      },
      values: [
        {
          emoji: "✨",
          title: "Simplicidad",
          desc: "Un sitio claro, fácil de entender y mantener. Cada línea de código tiene una razón de existir. Sin extras, solo lo esencial.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          emoji: "🎨",
          title: "Diseño reflexivo",
          desc: "Los colores, las formas y los textos sirven para una cosa: crear emoción e impulsar la acción. Diseño que convierte.",
          color: "from-purple-500 to-pink-500",
        },
        {
          emoji: "⚡",
          title: "Rendimiento",
          desc: "Un sitio lento ahuyenta a la gente. FlowOn entrega sitios ultra-rápidos, optimizados para Core Web Vitals. Puntuación 90+ garantizada.",
          color: "from-orange-500 to-red-500",
        },
      ],
      stats: {
        title: "compromisos",
        subtitle: "Promesas concretas que cumplimos en cada proyecto",
        items: [
          { stat: "90+", label: "Puntuación Lighthouse garantizada" },
          { stat: "24h", label: "Tiempo de respuesta máx" },
          { stat: "100%", label: "Satisfacción del cliente" },
          { stat: "$0", label: "Tarifas ocultas" },
        ],
      },
      cta: {
        title: "trabajar juntos",
        subtitle: "¿Tiene una idea? ¿Un proyecto en mente? Lo acompaño desde el concepto hasta el lanzamiento.",
        ctaContact: "Contácteme",
        ctaPricing: "Ver planes",
        trustBadges: [
          { value: "7-10d", label: "Entrega rápida desde el plan Starter" },
          { value: "2-6", label: "Revisiones incluidas por plan" },
          { value: "24/7", label: "Soporte y mantenimiento disponibles" },
        ],
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

        <div className="relative p-10 md:p-14 lg:p-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-animated">{t.hero.title}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="card-premium shadow-premium p-8 md:p-10 space-y-6 hover-lift">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.mission.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.mission.text}</p>
          </div>
        </div>

        <div className="card-premium shadow-premium p-8 md:p-10 space-y-6 hover-lift">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.vision.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.vision.text}</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            {locale === 'fr' ? 'Notre ' : locale === 'en' ? 'Our ' : 'Nuestra '}
            <span className="text-gradient">{t.philosophy.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.philosophy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.philosophy.pillars.map((item: any, idx: number) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl glass hover:bg-accent/20 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                {idx === 0 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            {locale === 'fr' ? 'Comment nous ' : locale === 'en' ? 'How we ' : 'Cómo '}
            <span className="text-gradient">{t.process.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t.process.steps.map((item: any, idx: number) => (
            <div
              key={item.step}
              className="relative space-y-4 animate-scale-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                {item.step}
              </div>

              {/* Content */}
              <div className="relative space-y-3 pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  {idx === 0 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>

              {/* Arrow (except last) */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-4 top-12 text-primary/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in">
        {t.values.map((value: any, idx: number) => (
          <div
            key={value.title}
            className="card-premium shadow-premium hover-lift group animate-scale-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className={`h-2 rounded-t-3xl bg-linear-to-r ${value.color}`} />
            <div className="p-8 space-y-4">
              <div className="text-4xl group-hover:scale-110 transition-transform inline-block">
                {value.emoji}
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            {locale === 'fr' ? 'Nos ' : locale === 'en' ? 'Our ' : 'Nuestros '}
            <span className="text-gradient">{t.stats.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.stats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.items.map((item: any, idx: number) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl glass hover:bg-accent/20 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
                {idx === 0 && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">{item.stat}</div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            {locale === 'fr' ? 'Prêt à ' : locale === 'en' ? 'Ready to ' : 'Listo para '}
            <span className="text-gradient-animated">{t.cta.title}</span>
            {locale === 'fr' ? ' ?' : '?'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg btn-gradient font-semibold text-base hover-lift shadow-glow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.cta.ctaContact}
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {t.cta.ctaPricing}
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border/40">
          {t.cta.trustBadges.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="text-3xl font-bold text-gradient">{item.value}</div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
