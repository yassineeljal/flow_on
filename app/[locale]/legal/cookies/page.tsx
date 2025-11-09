import { setRequestLocale } from 'next-intl/server';

// 🍪 COOKIES PAGE - TRADUCTIONS COMPLÈTES FR/EN/ES - Version PRO
const content: Record<string, any> = {
  fr: {
    metadata: { title: "Politique des Cookies | FlowOn", description: "Liste complète des cookies utilisés sur FlowOn, leur finalité, durée et comment les gérer. Transparence totale sur notre utilisation des cookies." },
    badge: "🍪 Cookies",
    hero: { title: "Politique des Cookies", subtitle: "Transparence totale sur les cookies que nous utilisons, pourquoi, et comment vous pouvez les contrôler." },
    intro: { text: "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et assurer le bon fonctionnement du site. Vous gardez toujours le contrôle.", manage: "Gérer mes préférences" },
    categories: [
      {
        id: "essential", title: "Cookies Essentiels", badge: "Obligatoires", badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400",
        description: "Ces cookies sont nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.",
        cookies: [
          { name: "theme", purpose: "Mémoriser votre préférence de thème (clair/sombre)", duration: "1 an", type: "Local Storage" },
          { name: "cookie_consent", purpose: "Enregistrer votre choix concernant les cookies analytics", duration: "6 mois", type: "Cookie" },
          { name: "__vercel_live_token", purpose: "Sécurité et fonctionnement de l'infrastructure Vercel", duration: "Session", type: "Cookie" }
        ]
      },
      {
        id: "analytics", title: "Cookies d'Analyse", badge: "Optionnels", badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        description: "Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer. Vous pouvez les refuser.",
        cookies: [
          { name: "_ga", purpose: "Identifier les visiteurs uniques (Google Analytics/Vercel Analytics)", duration: "2 ans", type: "Cookie" },
          { name: "_ga_*", purpose: "Conserver l'état de la session analytics", duration: "2 ans", type: "Cookie" },
          { name: "va-*", purpose: "Mesures d'audience Vercel (pages vues, temps passé)", duration: "13 mois", type: "Cookie" },
          { name: "_clck / _clsk", purpose: "Microsoft Clarity - Enregistrement de session et heatmaps", duration: "1 an", type: "Cookie" }
        ]
      },
      {
        id: "preferences", title: "Cookies de Préférences", badge: "Confort", badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
        description: "Ces cookies mémorisent vos préférences pour améliorer votre expérience de navigation.",
        cookies: [
          { name: "language", purpose: "Mémoriser votre préférence de langue (si applicable)", duration: "1 an", type: "Local Storage" },
          { name: "font_size", purpose: "Adapter la taille de police selon vos réglages d'accessibilité", duration: "6 mois", type: "Local Storage" }
        ]
      }
    ],
    management: {
      title: "Comment gérer vos cookies ?",
      methods: [
        { title: "Via notre bannière", desc: "Acceptez ou refusez les cookies analytics dès votre première visite. Modifiez vos choix à tout moment via le bouton en bas de page." },
        { title: "Paramètres navigateur", desc: "Tous les navigateurs permettent de bloquer, supprimer ou limiter les cookies. Consultez l'aide de votre navigateur pour plus d'infos." },
        { title: "Outils tiers", desc: "Des extensions comme uBlock Origin, Privacy Badger ou Ghostery permettent un contrôle avancé des cookies et trackers." }
      ]
    },
    browsers: {
      title: "Gérer les cookies par navigateur",
      list: [
        { name: "Chrome", link: "chrome://settings/cookies" },
        { name: "Firefox", link: "about:preferences#privacy" },
        { name: "Safari", link: "Préférences > Confidentialité" },
        { name: "Edge", link: "edge://settings/privacy" }
      ]
    },
    impact: {
      title: "Impact de la désactivation",
      text: "Si vous bloquez tous les cookies :",
      items: [
        { icon: "✅", text: "Le site fonctionnera normalement", color: "text-green-600" },
        { icon: "⚠️", text: "Vos préférences (thème, langue) ne seront pas sauvegardées", color: "text-yellow-600" },
        { icon: "📊", text: "Nous ne pourrons pas mesurer l'audience ni améliorer l'expérience", color: "text-blue-600" }
      ]
    },
    footer: { updated: "Dernière mise à jour :", back: "Retour aux mentions légales" }
  },
  en: {
    metadata: { title: "Cookie Policy | FlowOn", description: "Complete list of cookies used on FlowOn, their purpose, duration and how to manage them. Full transparency on our use of cookies." },
    badge: "🍪 Cookies",
    hero: { title: "Cookie Policy", subtitle: "Full transparency on the cookies we use, why, and how you can control them." },
    intro: { text: "We use cookies to improve your experience, analyze traffic and ensure the site works properly. You always remain in control.", manage: "Manage my preferences" },
    categories: [
      {
        id: "essential", title: "Essential Cookies", badge: "Required", badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400",
        description: "These cookies are necessary for the site to function. They cannot be disabled.",
        cookies: [
          { name: "theme", purpose: "Remember your theme preference (light/dark)", duration: "1 year", type: "Local Storage" },
          { name: "cookie_consent", purpose: "Record your choice regarding analytics cookies", duration: "6 months", type: "Cookie" },
          { name: "__vercel_live_token", purpose: "Security and operation of Vercel infrastructure", duration: "Session", type: "Cookie" }
        ]
      },
      {
        id: "analytics", title: "Analytics Cookies", badge: "Optional", badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        description: "These cookies help us understand how you use our site to improve it. You can refuse them.",
        cookies: [
          { name: "_ga", purpose: "Identify unique visitors (Google Analytics/Vercel Analytics)", duration: "2 years", type: "Cookie" },
          { name: "_ga_*", purpose: "Keep analytics session state", duration: "2 years", type: "Cookie" },
          { name: "va-*", purpose: "Vercel audience metrics (page views, time spent)", duration: "13 months", type: "Cookie" },
          { name: "_clck / _clsk", purpose: "Microsoft Clarity - Session recording and heatmaps", duration: "1 year", type: "Cookie" }
        ]
      },
      {
        id: "preferences", title: "Preference Cookies", badge: "Comfort", badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
        description: "These cookies remember your preferences to improve your browsing experience.",
        cookies: [
          { name: "language", purpose: "Remember your language preference (if applicable)", duration: "1 year", type: "Local Storage" },
          { name: "font_size", purpose: "Adapt font size according to your accessibility settings", duration: "6 months", type: "Local Storage" }
        ]
      }
    ],
    management: {
      title: "How to manage your cookies?",
      methods: [
        { title: "Via our banner", desc: "Accept or refuse analytics cookies on your first visit. Change your choices anytime via the button at the bottom of the page." },
        { title: "Browser settings", desc: "All browsers allow you to block, delete or limit cookies. Check your browser's help for more info." },
        { title: "Third-party tools", desc: "Extensions like uBlock Origin, Privacy Badger or Ghostery allow advanced control of cookies and trackers." }
      ]
    },
    browsers: {
      title: "Manage cookies by browser",
      list: [
        { name: "Chrome", link: "chrome://settings/cookies" },
        { name: "Firefox", link: "about:preferences#privacy" },
        { name: "Safari", link: "Preferences > Privacy" },
        { name: "Edge", link: "edge://settings/privacy" }
      ]
    },
    impact: {
      title: "Impact of disabling",
      text: "If you block all cookies:",
      items: [
        { icon: "✅", text: "The site will work normally", color: "text-green-600" },
        { icon: "⚠️", text: "Your preferences (theme, language) will not be saved", color: "text-yellow-600" },
        { icon: "📊", text: "We cannot measure audience or improve experience", color: "text-blue-600" }
      ]
    },
    footer: { updated: "Last updated:", back: "Back to legal notices" }
  },
  es: {
    metadata: { title: "Política de Cookies | FlowOn", description: "Lista completa de cookies utilizadas en FlowOn, su finalidad, duración y cómo gestionarlas. Transparencia total sobre nuestro uso de cookies." },
    badge: "🍪 Cookies",
    hero: { title: "Política de Cookies", subtitle: "Transparencia total sobre las cookies que usamos, por qué y cómo puede controlarlas." },
    intro: { text: "Usamos cookies para mejorar su experiencia, analizar el tráfico y asegurar que el sitio funcione correctamente. Siempre tiene el control.", manage: "Gestionar mis preferencias" },
    categories: [
      {
        id: "essential", title: "Cookies Esenciales", badge: "Obligatorias", badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400",
        description: "Estas cookies son necesarias para el funcionamiento del sitio. No se pueden desactivar.",
        cookies: [
          { name: "theme", purpose: "Recordar su preferencia de tema (claro/oscuro)", duration: "1 año", type: "Local Storage" },
          { name: "cookie_consent", purpose: "Registrar su elección sobre las cookies de analytics", duration: "6 meses", type: "Cookie" },
          { name: "__vercel_live_token", purpose: "Seguridad y funcionamiento de la infraestructura Vercel", duration: "Sesión", type: "Cookie" }
        ]
      },
      {
        id: "analytics", title: "Cookies de Análisis", badge: "Opcionales", badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        description: "Estas cookies nos ayudan a entender cómo usa nuestro sitio para mejorarlo. Puede rechazarlas.",
        cookies: [
          { name: "_ga", purpose: "Identificar visitantes únicos (Google Analytics/Vercel Analytics)", duration: "2 años", type: "Cookie" },
          { name: "_ga_*", purpose: "Mantener el estado de la sesión de analytics", duration: "2 años", type: "Cookie" },
          { name: "va-*", purpose: "Métricas de audiencia Vercel (páginas vistas, tiempo)", duration: "13 meses", type: "Cookie" },
          { name: "_clck / _clsk", purpose: "Microsoft Clarity - Grabación de sesión y mapas de calor", duration: "1 año", type: "Cookie" }
        ]
      },
      {
        id: "preferences", title: "Cookies de Preferencias", badge: "Comodidad", badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
        description: "Estas cookies recuerdan sus preferencias para mejorar su experiencia de navegación.",
        cookies: [
          { name: "language", purpose: "Recordar su preferencia de idioma (si aplica)", duration: "1 año", type: "Local Storage" },
          { name: "font_size", purpose: "Adaptar el tamaño de fuente según sus ajustes de accesibilidad", duration: "6 meses", type: "Local Storage" }
        ]
      }
    ],
    management: {
      title: "¿Cómo gestionar sus cookies?",
      methods: [
        { title: "A través de nuestro banner", desc: "Acepte o rechace las cookies de analytics en su primera visita. Cambie sus elecciones en cualquier momento con el botón al final de la página." },
        { title: "Configuración del navegador", desc: "Todos los navegadores permiten bloquear, eliminar o limitar las cookies. Consulte la ayuda de su navegador para más información." },
        { title: "Herramientas de terceros", desc: "Extensiones como uBlock Origin, Privacy Badger o Ghostery permiten un control avanzado de cookies y rastreadores." }
      ]
    },
    browsers: {
      title: "Gestionar cookies por navegador",
      list: [
        { name: "Chrome", link: "chrome://settings/cookies" },
        { name: "Firefox", link: "about:preferences#privacy" },
        { name: "Safari", link: "Preferencias > Privacidad" },
        { name: "Edge", link: "edge://settings/privacy" }
      ]
    },
    impact: {
      title: "Impacto de la desactivación",
      text: "Si bloquea todas las cookies:",
      items: [
        { icon: "✅", text: "El sitio funcionará normalmente", color: "text-green-600" },
        { icon: "⚠️", text: "Sus preferencias (tema, idioma) no se guardarán", color: "text-yellow-600" },
        { icon: "📊", text: "No podremos medir la audiencia ni mejorar la experiencia", color: "text-blue-600" }
      ]
    },
    footer: { updated: "Última actualización:", back: "Volver a avisos legales" }
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
            {t.hero.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-animated">{t.hero.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="card-premium shadow-premium p-8 md:p-10 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-lg text-foreground">{t.intro.text}</p>
          </div>
          <button className="px-6 py-3 rounded-lg btn-gradient font-semibold whitespace-nowrap hover-lift shadow-glow">
            {t.intro.manage}
          </button>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="space-y-6 animate-fade-in">
        {t.categories.map((category: any, idx: number) => (
          <div
            key={category.id}
            className="card-premium shadow-premium hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="p-8 md:p-10 space-y-6">
              {/* Category Header */}
              <div className="flex items-start gap-4 flex-wrap">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  {idx === 0 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                  {idx === 1 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                  {idx === 2 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.badgeColor}`}>
                      {category.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Cookies Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-sm">{locale === 'fr' ? 'Nom' : locale === 'en' ? 'Name' : 'Nombre'}</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">{locale === 'fr' ? 'Finalité' : locale === 'en' ? 'Purpose' : 'Finalidad'}</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">{locale === 'fr' ? 'Durée' : locale === 'en' ? 'Duration' : 'Duración'}</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.cookies.map((cookie: any, cookieIdx: number) => (
                      <tr key={cookieIdx} className="border-b border-border/50 hover:bg-accent/20 transition-colors">
                        <td className="py-3 px-4">
                          <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded text-primary">{cookie.name}</code>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{cookie.purpose}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{cookie.duration}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{cookie.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Management Section */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">{t.management.title.split(' ').slice(-2).join(' ')}</span> {t.management.title.split(' ').slice(0, -2).join(' ')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.management.methods.map((method: any, idx: number) => (
            <div key={idx} className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow mb-4">
                {idx + 1}
              </div>
              <h3 className="font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browser Settings */}
      <section className="card-premium shadow-premium p-8 md:p-10 animate-fade-in">
        <h3 className="text-2xl font-bold mb-6 text-center">
          <span className="text-gradient">{t.browsers.title.split(' ').slice(-2).join(' ')}</span> {t.browsers.title.split(' ').slice(0, -2).join(' ')}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.browsers.list.map((browser: any, idx: number) => (
            <div key={idx} className="p-4 rounded-xl glass text-center hover:border-primary/50 border border-border/50 transition-all hover-lift">
              <div className="text-2xl mb-2">
                {browser.name === 'Chrome' && '🔵'}
                {browser.name === 'Firefox' && '🦊'}
                {browser.name === 'Safari' && '🧭'}
                {browser.name === 'Edge' && '🌐'}
              </div>
              <p className="font-semibold text-sm">{browser.name}</p>
              <code className="text-xs text-muted-foreground break-all">{browser.link}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="card-premium shadow-premium p-8 md:p-10 animate-fade-in">
        <h3 className="text-2xl font-bold mb-4 text-center">{t.impact.title}</h3>
        <p className="text-center text-muted-foreground mb-6">{t.impact.text}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.impact.items.map((item: any, idx: number) => (
            <div key={idx} className="p-5 rounded-xl glass border border-border/50">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <p className={`text-sm ${item.color} font-medium`}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="p-6 rounded-2xl glass border border-border/40 text-center space-y-2 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">{t.footer.updated}</strong> {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xs text-muted-foreground">
          <a href="/legal" className="text-primary hover:underline">{t.footer.back}</a>
        </p>
      </section>
    </div>
  );
}
