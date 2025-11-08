export const metadata = {
  title: "FAQ - Questions Fréquentes | FlowOn",
  description: "Toutes les réponses à vos questions sur nos services de création de sites web. Délais, tarifs, maintenance, processus.",
};

const faqCategories = [
  {
    category: "💰 Tarifs & Paiement",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { 
        q: "Quels sont vos tarifs ?", 
        a: "Nous proposons 3 forfaits clairs : Starter à 899$ (landing page), Business à 1 999$ (site complet avec CMS), et Pro Commerce à 3 499$ (e-commerce). Tous les détails sont sur notre page Tarifs." 
      },
      { 
        q: "Puis-je payer en plusieurs fois ?", 
        a: "Oui ! Pour tous nos forfaits, vous payez 50% à la commande pour lancer le projet, et les 50% restants à la mise en ligne. Paiement sécurisé par virement ou carte bancaire." 
      },
      { 
        q: "Y a-t-il des frais cachés ?", 
        a: "Absolument aucun frais caché. Le prix annoncé inclut tout : design, développement, SEO de base, et la maintenance selon le forfait choisi. Seuls l'hébergement et le nom de domaine sont à votre charge (environ 50-100$/an)." 
      },
      { 
        q: "Proposez-vous des devis personnalisés ?", 
        a: "Oui, si votre projet sort du cadre de nos forfaits, nous établissons un devis sur mesure gratuit. Contactez-nous pour en discuter !" 
      },
    ]
  },
  {
    category: "⏱️ Délais & Processus",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { 
        q: "Quels sont les délais de livraison ?", 
        a: "Starter : 7-10 jours • Business : 2-3 semaines • Pro Commerce : 3-5 semaines. Ces délais incluent les révisions et validations. Possibilité d'express sur demande." 
      },
      { 
        q: "Comment se déroule un projet ?", 
        a: "1) Consultation : on définit vos besoins • 2) Proposition : maquettes et structure • 3) Développement : création de votre site • 4) Lancement : mise en ligne et formation. Vous êtes impliqué à chaque étape !" 
      },
      { 
        q: "Combien de révisions sont incluses ?", 
        a: "Starter : 2 révisions • Business : 4 révisions • Pro : 6 révisions. Des révisions supplémentaires sont possibles sur devis si nécessaire." 
      },
      { 
        q: "Que se passe-t-il si je ne suis pas satisfait ?", 
        a: "Nous travaillons jusqu'à votre satisfaction complète dans le cadre des révisions incluses. Notre objectif : que vous soyez fier de votre site !" 
      },
    ]
  },
  {
    category: "🎨 Design & Contenu",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    items: [
      { 
        q: "Le design est-il sur mesure ?", 
        a: "Starter : basé sur un modèle premium personnalisé à vos couleurs/logo. Business & Pro : design 100% sur mesure créé spécifiquement pour votre marque." 
      },
      { 
        q: "Dois-je fournir les contenus (textes, images) ?", 
        a: "Idéalement oui, vous connaissez mieux votre activité ! Mais nous pouvons vous aider : rédaction SEO, optimisation d'images, ou création de visuels sur devis." 
      },
      { 
        q: "Puis-je modifier le site moi-même après ?", 
        a: "Oui ! Nous créons des sites faciles à mettre à jour. Pour les forfaits avec CMS, vous pouvez gérer blog, produits et contenus en autonomie. Formation incluse." 
      },
      { 
        q: "Mon logo et ma charte graphique existent ?", 
        a: "Parfait ! Nous intégrerons votre identité visuelle. Si vous n'en avez pas, nous pouvons créer un logo simple ou vous recommander des designers." 
      },
    ]
  },
  {
    category: "🔧 Technique & Maintenance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { 
        q: "Qu'est-ce qui est inclus dans la maintenance ?", 
        a: "Business : 1 mois de maintenance (mises à jour, bugs mineurs) • Pro : 3 mois. Après, forfait mensuel optionnel à partir de 49$/mois selon vos besoins." 
      },
      { 
        q: "Le site sera-t-il rapide et performant ?", 
        a: "Garanti ! Tous nos sites visent 90+ sur Lighthouse (Google). Optimisation images, code léger, hébergement rapide. Les performances sont notre priorité." 
      },
      { 
        q: "Le SEO est-il inclus ?", 
        a: "Oui ! SEO on-page : balises title/meta, Open Graph, sitemap, structure sémantique. Pour du SEO avancé (netlinking, stratégie de contenu), nous proposons des accompagnements séparés." 
      },
      { 
        q: "Le site sera-t-il responsive (mobile) ?", 
        a: "100% responsive et mobile-first ! Plus de 60% des visites viennent du mobile, votre site sera impeccable sur tous les écrans." 
      },
    ]
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        
        <div className="relative p-10 md:p-14 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            ❓ Questions & Réponses
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-animated">FAQ</span> - Foire aux questions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Toutes les réponses à vos questions sur nos services, tarifs, délais et processus.
            <br />
            <span className="text-foreground font-semibold">Une question non listée ? Contactez-nous !</span>
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, catIdx) => (
        <section key={category.category} className="space-y-6 animate-fade-in" style={{ animationDelay: `${catIdx * 100}ms` }}>
          {/* Category Header */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              {category.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
          </div>

          {/* Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {category.items.map((item, idx) => (
              <details
                key={item.q}
                className="group rounded-2xl border bg-card shadow-premium hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${(catIdx * 100) + (idx * 50)}ms` }}
              >
                <summary className="cursor-pointer list-none p-6 font-semibold flex items-start justify-between gap-4 hover:text-primary transition-colors">
                  <span className="flex-1">{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6 animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold">
            Vous avez une <span className="text-gradient-animated">autre question</span> ?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est là pour vous répondre rapidement et vous accompagner dans votre projet.
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
            Contactez-nous
          </a>
          <a 
            href="/pricing" 
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Voir les tarifs
          </a>
        </div>

        {/* Quick Stats */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border/40">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-3xl font-bold text-gradient">24h</div>
            <p className="text-sm text-muted-foreground">Temps de réponse moyen</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-3xl font-bold text-gradient">100%</div>
            <p className="text-sm text-muted-foreground">Satisfaction client</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-3xl font-bold text-gradient">7j/7</div>
            <p className="text-sm text-muted-foreground">Support disponible</p>
          </div>
        </div>
      </section>
    </div>
  );
}
