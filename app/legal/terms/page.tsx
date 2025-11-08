export const metadata = {
  title: "Conditions d'Utilisation & de Vente | FlowOn",
  description: "Conditions générales d'utilisation et de vente de FlowOn. CGU/CGV claires et transparentes pour nos services de création web.",
};

export default function Page() {
  const sections = [
    {
      number: "1",
      title: "Objet & Prestations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      content: "FlowOn propose des services de création de sites web (vitrine, e-commerce), SEO on-page, maintenance technique, et accompagnement branding léger. Chaque prestation fait l'objet d'un devis détaillé précisant le périmètre exact du projet."
    },
    {
      number: "2",
      title: "Prix & Modalités de Paiement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Les prix sont indiqués en dollars canadiens sur la page Forfaits. Paiement en 2 fois : 50% d'acompte à la commande pour débuter le projet, et 50% du solde à la mise en ligne finale. Paiement par virement bancaire, carte bancaire ou PayPal."
    },
    {
      number: "3",
      title: "Délais de Réalisation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Délais indicatifs : Starter 7-10 jours, Business 2-3 semaines, Pro Commerce 3-5 semaines. Ces délais peuvent varier selon la disponibilité des contenus fournis par le client et le nombre de révisions demandées. Un calendrier précis sera établi au début du projet."
    },
    {
      number: "4",
      title: "Processus de Travail & Révisions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      content: "Le nombre de révisions incluses varie selon le forfait (2 pour Starter, 4 pour Business, 6 pour Pro). Les révisions doivent être communiquées par écrit et de manière groupée. Les demandes de modifications majeures sortant du périmètre initial peuvent faire l'objet d'un devis complémentaire."
    },
    {
      number: "5",
      title: "Propriété Intellectuelle",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: "À la livraison finale et au paiement complet, le code source et le design créés pour votre projet vous appartiennent. Exception faite des composants open-source, frameworks (Next.js, Tailwind CSS), et éléments sous licence tierce qui restent la propriété de leurs auteurs respectifs."
    },
    {
      number: "6",
      title: "Contenus & Responsabilité Client",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      content: "Le client garantit être propriétaire ou disposer des droits nécessaires sur tous les contenus fournis (textes, logos, images, vidéos). Le client est responsable de la légalité et de la conformité de ses contenus (RGPD, droits d'auteur, mentions légales)."
    },
    {
      number: "7",
      title: "Maintenance & Support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: "La maintenance est incluse selon le forfait (Business : 1 mois, Pro : 3 mois). Elle couvre les corrections de bugs, mises à jour mineures et support technique. Au-delà de la période incluse, un forfait mensuel sur devis est proposé (à partir de 49$/mois)."
    },
    {
      number: "8",
      title: "Hébergement & Nom de Domaine",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      content: "L'hébergement et le nom de domaine sont à la charge du client (environ 50-100$/an). Nous recommandons Vercel pour l'hébergement (gratuit pour les sites basiques) et des registrars comme Namecheap ou GoDaddy pour les domaines. Assistance à la configuration incluse."
    },
    {
      number: "9",
      title: "Garantie & Responsabilité",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      content: "FlowOn garantit la conformité technique du site livré et s'engage à corriger tout bug signalé pendant la période de maintenance. En revanche, FlowOn ne peut être tenu responsable des pannes liées aux prestataires tiers (hébergeur, DNS, passerelles de paiement, APIs externes)."
    },
    {
      number: "10",
      title: "Annulation & Remboursement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      content: "En cas d'annulation par le client après le paiement de l'acompte et le début des travaux, l'acompte reste acquis à FlowOn pour couvrir le temps de travail déjà effectué. Si le projet n'a pas commencé, un remboursement partiel (80%) peut être accordé."
    },
    {
      number: "11",
      title: "Protection des Données (RGPD)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: "FlowOn respecte le RGPD et ne conserve que les données nécessaires à la prestation (nom, email, informations de facturation). Ces données ne sont jamais vendues à des tiers. Pour plus de détails, consultez notre Politique de confidentialité."
    },
    {
      number: "12",
      title: "Droit Applicable & Litiges",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      content: "Les présentes conditions sont régies par le droit canadien et québécois. En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux de Montréal (Québec) seront compétents."
    },
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
            📋 CGU/CGV
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Conditions <span className="text-gradient-animated">Générales</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conditions d'utilisation et de vente claires et transparentes.
            <br />
            <span className="text-foreground font-semibold">Dernière mise à jour : Novembre 2025</span>
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <section className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 animate-fade-in">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Version simplifiée</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cette page présente nos conditions de manière claire et accessible. Pour chaque projet, 
              un <span className="text-foreground font-semibold">contrat détaillé et personnalisé</span> sera fourni 
              lors du devis pour préciser le périmètre exact, les livrables et les responsabilités de chaque partie.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="space-y-6 animate-fade-in">
        {sections.map((section, idx) => (
          <div
            key={section.number}
            className="card-premium shadow-premium hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="p-8 md:p-10 space-y-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow font-bold text-lg">
                  {section.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {section.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Summary */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            En <span className="text-gradient">résumé</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les points clés à retenir de nos conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "💰",
              title: "Paiement en 2 fois",
              desc: "50% au démarrage, 50% à la livraison"
            },
            {
              icon: "⏱️",
              title: "Délais clairs",
              desc: "De 7 jours à 5 semaines selon le forfait"
            },
            {
              icon: "🔄",
              title: "Révisions incluses",
              desc: "De 2 à 6 révisions selon votre forfait"
            },
            {
              icon: "✅",
              title: "Propriété du code",
              desc: "Vous êtes propriétaire à la livraison"
            },
            {
              icon: "🛡️",
              title: "Maintenance incluse",
              desc: "1 à 3 mois selon le forfait choisi"
            },
            {
              icon: "🔒",
              title: "Données protégées",
              desc: "Conformité RGPD et respect de vos données"
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-accent/20 transition-all hover-lift"
            >
              <div className="text-3xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Des <span className="text-gradient-animated">questions</span> sur nos conditions ?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour toute clarification. Nous sommes là pour vous accompagner.
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
            Nous contacter
          </a>
          <a 
            href="/faq" 
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Voir la FAQ
          </a>
        </div>

        {/* Last Update */}
        <div className="pt-8 border-t border-border/40">
          <p className="text-xs text-muted-foreground">
            Dernière mise à jour : <span className="text-foreground font-medium">8 novembre 2025</span>
            {" • "}
            <a href="/legal" className="text-primary hover:underline">Retour aux mentions légales</a>
          </p>
        </div>
      </section>
    </div>
  );
}
