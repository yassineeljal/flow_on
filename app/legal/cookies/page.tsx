export const metadata = {
  title: "Politique des Cookies | FlowOn",
  description: "Liste complète des cookies utilisés sur FlowOn, leur finalité, durée et comment les gérer. Transparence totale sur notre utilisation des cookies.",
};

export default function Page() {
  const cookieCategories = [
    {
      id: "essential",
      title: "Cookies Essentiels",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: "Obligatoires",
      badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400",
      description: "Ces cookies sont nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.",
      cookies: [
        {
          name: "theme",
          purpose: "Mémoriser votre préférence de thème (clair/sombre)",
          duration: "1 an",
          type: "Local Storage"
        },
        {
          name: "cookie_consent",
          purpose: "Enregistrer votre choix concernant les cookies analytics",
          duration: "6 mois",
          type: "Cookie"
        },
        {
          name: "__vercel_live_token",
          purpose: "Sécurité et fonctionnement de l'infrastructure Vercel",
          duration: "Session",
          type: "Cookie"
        }
      ]
    },
    {
      id: "analytics",
      title: "Cookies d'Analyse",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Optionnels",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      description: "Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer. Vous pouvez les refuser.",
      cookies: [
        {
          name: "_ga",
          purpose: "Identifier les visiteurs uniques (Google Analytics/Vercel Analytics)",
          duration: "2 ans",
          type: "Cookie"
        },
        {
          name: "_ga_*",
          purpose: "Conserver l'état de la session analytics",
          duration: "2 ans",
          type: "Cookie"
        },
        {
          name: "va-*",
          purpose: "Mesures d'audience Vercel (pages vues, temps passé)",
          duration: "13 mois",
          type: "Cookie"
        },
        {
          name: "_clck / _clsk",
          purpose: "Microsoft Clarity - Enregistrement de session et heatmaps",
          duration: "1 an",
          type: "Cookie"
        }
      ]
    },
    {
      id: "preferences",
      title: "Cookies de Préférences",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      badge: "Confort",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      description: "Ces cookies mémorisent vos préférences pour améliorer votre expérience de navigation.",
      cookies: [
        {
          name: "language",
          purpose: "Mémoriser votre préférence de langue (si applicable)",
          duration: "1 an",
          type: "Local Storage"
        },
        {
          name: "font_size",
          purpose: "Mémoriser la taille de police préférée (accessibilité)",
          duration: "1 an",
          type: "Local Storage"
        }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        
        <div className="relative p-10 md:p-14 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            🍪 Cookies
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Politique des <span className="text-gradient-animated">Cookies</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparence totale sur les cookies utilisés sur FlowOn.
            <br />
            <span className="text-foreground font-semibold">Vous gardez le contrôle.</span>
          </p>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="card-premium shadow-premium p-10 md:p-14 animate-fade-in">
        <div className="flex items-start gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              Qu'est-ce qu'un <span className="text-gradient">cookie</span> ?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) 
              lors de votre visite d'un site web. Les cookies permettent de <span className="text-foreground font-semibold">mémoriser 
              vos préférences</span>, d'<span className="text-foreground font-semibold">améliorer votre expérience</span>, 
              et de nous aider à <span className="text-foreground font-semibold">comprendre comment vous utilisez notre site</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              FlowOn utilise des cookies de manière responsable et transparente, en conformité avec le RGPD et la Loi 25 (Québec).
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Les cookies que nous <span className="text-gradient">utilisons</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Liste complète et détaillée de tous les cookies utilisés sur FlowOn
          </p>
        </div>

        {cookieCategories.map((category, idx) => (
          <div
            key={category.id}
            className="card-premium shadow-premium hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="p-8 md:p-10 space-y-6">
              {/* Category Header */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.badgeColor}`}>
                        {category.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Nom du cookie</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Finalité</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Durée</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.cookies.map((cookie, cookieIdx) => (
                      <tr
                        key={cookieIdx}
                        className="border-b border-border/30 hover:bg-accent/5 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <code className="text-sm font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                            {cookie.name}
                          </code>
                        </td>
                        <td className="py-4 px-4 text-sm text-muted-foreground">{cookie.purpose}</td>
                        <td className="py-4 px-4 text-sm text-muted-foreground whitespace-nowrap">{cookie.duration}</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground">
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How to Manage Cookies */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Gérer vos <span className="text-gradient">préférences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez le contrôle total sur les cookies utilisés sur notre site
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              ),
              title: "Bannière de consentement",
              desc: "À votre première visite, une bannière vous permet d'accepter ou refuser les cookies analytics. Vos préférences sont enregistrées pendant 6 mois.",
              action: null
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Paramètres du navigateur",
              desc: "Vous pouvez supprimer ou bloquer les cookies directement depuis les paramètres de votre navigateur (Chrome, Firefox, Safari, Edge, etc.).",
              action: null
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ),
              title: "Refuser les cookies analytics",
              desc: "Vous pouvez refuser uniquement les cookies de mesure d'audience tout en gardant les cookies essentiels (thème, consentement).",
              action: null
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: "Modifier votre choix",
              desc: "Vous pouvez changer d'avis à tout moment. Supprimez les cookies de notre site ou contactez-nous pour réinitialiser vos préférences.",
              action: null
            }
          ].map((method, idx) => (
            <div
              key={method.title}
              className="flex items-start gap-4 p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all hover-lift"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {method.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browser Instructions */}
      <section className="card-premium shadow-premium p-8 md:p-10 space-y-6 animate-fade-in">
        <h3 className="text-2xl font-bold text-center">
          Supprimer les cookies par <span className="text-gradient">navigateur</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Chrome",
              icon: "🌐",
              shortcut: "Ctrl+Shift+Delete"
            },
            {
              name: "Firefox",
              icon: "🦊",
              shortcut: "Ctrl+Shift+Delete"
            },
            {
              name: "Safari",
              icon: "🧭",
              shortcut: "Cmd+,"
            },
            {
              name: "Edge",
              icon: "🌊",
              shortcut: "Ctrl+Shift+Delete"
            }
          ].map((browser) => (
            <div
              key={browser.name}
              className="p-5 rounded-xl glass border border-border/40 hover:border-primary/40 transition-all text-center hover-lift"
            >
              <div className="text-4xl mb-2">{browser.icon}</div>
              <h4 className="font-bold mb-1">{browser.name}</h4>
              <p className="text-xs text-muted-foreground">
                <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                  {browser.shortcut}
                </code>
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center pt-4">
          Accédez aux paramètres → Confidentialité/Sécurité → Supprimer les cookies et données de site
        </p>
      </section>

      {/* Related Links */}
      <section className="card-premium shadow-premium p-8 md:p-10 animate-fade-in">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Pages <span className="text-gradient">connexes</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              href: "/legal/privacy",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Politique de Confidentialité",
              desc: "Comment nous protégeons vos données"
            },
            {
              href: "/legal/terms",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Conditions d'Utilisation",
              desc: "CGU/CGV de nos services"
            }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-start gap-4 p-5 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all hover-lift group"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-white transition-all">
                {link.icon}
              </div>
              <div>
                <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{link.title}</h4>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <section className="p-6 rounded-2xl glass border border-border/40 text-center space-y-2 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xs text-muted-foreground">
          Cette page liste tous les cookies utilisés de manière transparente.
          {" • "}
          <a href="/legal" className="text-primary hover:underline">Retour aux mentions légales</a>
        </p>
      </section>
    </div>
  );
}
