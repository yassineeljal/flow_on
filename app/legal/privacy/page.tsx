export const metadata = {
  title: "Politique de Confidentialité | FlowOn",
  description: "Comment FlowOn protège vos données personnelles. Transparence totale sur la collecte, l'utilisation et la protection de vos informations.",
};

export default function Page() {
  const sections = [
    {
      number: "1",
      title: "Données que nous collectons",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Formulaire de contact",
          desc: "Nom, prénom, email, téléphone (optionnel), budget estimé, délai souhaité, et votre message ou description de projet."
        },
        {
          subtitle: "Analytics et statistiques",
          desc: "Pages visitées, durée de visite, type de navigateur et appareil, ville approximative (via Vercel Analytics, Microsoft Clarity ou Matomo selon la configuration)."
        },
        {
          subtitle: "Données techniques",
          desc: "Adresse IP, user-agent, logs serveur pour des raisons de sécurité et prévention du spam."
        }
      ]
    },
    {
      number: "2",
      title: "Pourquoi collectons-nous ces données",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Répondre à vos demandes",
          desc: "Pour vous envoyer un devis personnalisé, répondre à vos questions et assurer le suivi de votre projet."
        },
        {
          subtitle: "Améliorer nos services",
          desc: "Comprendre comment les visiteurs utilisent notre site pour optimiser l'expérience utilisateur et la qualité de nos prestations."
        },
        {
          subtitle: "Assurer la sécurité",
          desc: "Détecter et prévenir les tentatives de fraude, spam, ou activités malveillantes sur notre infrastructure."
        }
      ]
    },
    {
      number: "3",
      title: "Base légale (RGPD)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Consentement",
          desc: "En remplissant notre formulaire de contact ou en acceptant les cookies d'analytics, vous nous donnez votre consentement explicite."
        },
        {
          subtitle: "Intérêt légitime",
          desc: "La sécurité du site, l'amélioration de nos services et l'analyse statistique constituent des intérêts légitimes justifiant certains traitements."
        },
        {
          subtitle: "Exécution pré-contractuelle",
          desc: "Les échanges liés aux devis et à la préparation de contrats sont nécessaires avant la signature d'un contrat de prestation."
        }
      ]
    },
    {
      number: "4",
      title: "Durée de conservation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Demandes de devis et leads",
          desc: "Conservation maximale de 24 mois après le dernier contact, sauf si un contrat est signé (alors durée légale comptable)."
        },
        {
          subtitle: "Logs techniques et sécurité",
          desc: "Conservation maximale de 12 mois pour les journaux serveur et données de sécurité."
        },
        {
          subtitle: "Cookies analytics",
          desc: "Durée variable selon le cookie : de 24 heures à 13 mois maximum. Consultez notre page Cookies pour plus de détails."
        }
      ]
    },
    {
      number: "5",
      title: "Partage et transferts de données",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Prestataires techniques",
          desc: "Nous utilisons des outils tiers (Vercel pour l'hébergement, Resend pour les emails, Matomo/Clarity pour analytics) qui peuvent avoir accès à certaines données dans le cadre de leurs services."
        },
        {
          subtitle: "Aucune vente de données",
          desc: "FlowOn ne vend jamais vos données personnelles à des tiers, ne les loue pas et ne les utilise pas à des fins publicitaires externes."
        },
        {
          subtitle: "Transferts internationaux",
          desc: "Certains prestataires (comme Vercel, Microsoft) peuvent impliquer des transferts hors Canada/UE. Ces transferts sont encadrés par des clauses contractuelles types et mesures de protection appropriées."
        }
      ]
    },
    {
      number: "6",
      title: "Vos droits (RGPD & Loi 25)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Accès et rectification",
          desc: "Vous pouvez demander l'accès à toutes vos données personnelles et les faire corriger si elles sont inexactes ou incomplètes."
        },
        {
          subtitle: "Effacement et limitation",
          desc: "Vous avez le droit de demander l'effacement de vos données (droit à l'oubli) ou d'en limiter le traitement dans certaines conditions."
        },
        {
          subtitle: "Opposition et portabilité",
          desc: "Vous pouvez vous opposer au traitement de vos données et demander leur portabilité vers un autre prestataire dans un format structuré."
        },
        {
          subtitle: "Retrait du consentement",
          desc: "Vous pouvez à tout moment retirer votre consentement pour les cookies analytics ou le traitement de vos données de contact."
        }
      ]
    },
    {
      number: "7",
      title: "Sécurité et protection",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        {
          subtitle: "Mesures techniques",
          desc: "HTTPS systématique, hébergement sécurisé (Vercel), chiffrement des données en transit et au repos, sauvegardes régulières."
        },
        {
          subtitle: "Mesures organisationnelles",
          desc: "Accès limité aux données personnelles (principe du moindre privilège), sensibilisation aux bonnes pratiques de sécurité."
        },
        {
          subtitle: "En cas de violation",
          desc: "En cas de violation de données personnelles présentant un risque pour vos droits, nous nous engageons à vous notifier dans les délais légaux (72 heures maximum)."
        }
      ]
    },
    {
      number: "8",
      title: "Cookies et technologies similaires",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      items: [
        {
          subtitle: "Types de cookies",
          desc: "Cookies essentiels (fonctionnement du site), cookies analytics (statistiques anonymisées), cookies de préférences (thème clair/sombre, langue)."
        },
        {
          subtitle: "Gestion des cookies",
          desc: "Vous pouvez accepter ou refuser les cookies non essentiels via notre bannière de consentement. Vous pouvez également modifier vos préférences à tout moment."
        },
        {
          subtitle: "En savoir plus",
          desc: "Pour une liste détaillée des cookies utilisés, leur finalité et leur durée, consultez notre page Cookies dédiée."
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
            🔒 Confidentialité
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Politique de <span className="text-gradient-animated">Confidentialité</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre objectif : <span className="text-foreground font-semibold">protéger vos données</span> et rester 
            simples et transparents sur leur utilisation.
            <br />
            <span className="text-sm mt-2 inline-block">Conforme RGPD (Europe) et Loi 25 (Québec)</span>
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        {[
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            ),
            title: "Données sécurisées",
            desc: "HTTPS, chiffrement, hébergement fiable"
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ),
            title: "Aucune vente",
            desc: "Vos données ne sont jamais vendues"
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Conformité totale",
            desc: "RGPD, Loi 25, meilleures pratiques"
          }
        ].map((item, idx) => (
          <div
            key={item.title}
            className="p-6 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white shadow-glow">
                {item.icon}
              </div>
              <h3 className="font-bold">{item.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Privacy Sections */}
      <section className="space-y-6 animate-fade-in">
        {sections.map((section, idx) => (
          <div
            key={section.number}
            className="card-premium shadow-premium hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="p-8 md:p-10 space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow font-bold text-lg">
                  {section.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {section.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4 pl-0 md:pl-16">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-5 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {item.subtitle}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact for Privacy */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold">
              Exercer vos <span className="text-gradient">droits</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pour toute demande concernant vos données personnelles (accès, rectification, effacement, etc.), 
              contactez-nous par email :
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong border border-primary/30">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:jalwach.co@gmail.com" className="font-mono text-sm md:text-base font-semibold text-primary hover:underline">
              jalwach.co@gmail.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Nous nous engageons à répondre dans un délai maximum de <span className="text-foreground font-semibold">30 jours</span>.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="card-premium shadow-premium p-8 md:p-10 animate-fade-in">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Pages <span className="text-gradient">connexes</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              href: "/legal/cookies",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              ),
              title: "Politique des Cookies",
              desc: "Liste détaillée des cookies utilisés"
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
          Cette page est informative et ne remplace pas un avis juridique professionnel.
          {" • "}
          <a href="/legal" className="text-primary hover:underline">Retour aux mentions légales</a>
        </p>
      </section>
    </div>
  );
}
