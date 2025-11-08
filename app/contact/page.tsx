import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact & Devis Gratuit | FlowOn",
  description: "Obtenez un devis personnalisé pour votre projet web. Réponse sous 24h. Consultation gratuite et sans engagement.",
};

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
            📧 Parlons de votre projet
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Obtenir un <span className="text-gradient-animated">devis gratuit</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Décrivez votre projet en quelques lignes, on vous répond avec une proposition claire et détaillée.
            <br />
            <span className="text-foreground font-semibold">Réponse sous 24h • Consultation gratuite • Sans engagement</span>
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Réponse rapide 24h</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 card-premium shadow-premium-lg p-8 md:p-10 animate-scale-in">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              Remplissez le <span className="text-gradient">formulaire</span>
            </h2>
            <p className="text-muted-foreground">
              Plus vous êtes précis, plus notre proposition sera adaptée à vos besoins.
            </p>
          </div>
          <ContactForm />
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
              <h3 className="font-bold text-lg">Pourquoi FlowOn ?</h3>
            </div>
            
            <ul className="space-y-3 text-sm">
              {[
                { icon: "🎨", text: "Design premium, cohérent avec votre marque" },
                { icon: "⚡", text: "Performances 90+ (Core Web Vitals)" },
                { icon: "🔍", text: "SEO on-page inclus dès le départ" },
                { icon: "📱", text: "100% responsive & mobile-first" },
                { icon: "⏱️", text: "Délais clairs & process transparent" },
                { icon: "🔧", text: "Maintenance & support inclus" },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <span className="text-lg shrink-0 group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border/40">
              <a 
                href="/pricing" 
                className="flex w-full h-10 items-center justify-center rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all hover-lift gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Voir les forfaits
              </a>
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
              <h3 className="font-bold text-lg">Autres moyens</h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:jalwach.co@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    jalwach.co@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">Disponibilité</p>
                  <p className="text-muted-foreground">
                    Lun-Ven : 9h-18h<br />
                    Réponse sous 24h max
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-muted-foreground">
                    À distance<br />
                    Partout dans le monde
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
              <p className="font-bold">Garantie satisfaction</p>
              <p className="text-xs text-muted-foreground mt-1">
                Révisions incluses jusqu'à ce que vous soyez 100% satisfait
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
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
          ].map((item, idx) => (
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
          <p className="text-muted-foreground mb-4">D'autres questions ?</p>
          <a 
            href="/faq" 
            className="inline-flex items-center gap-2 h-10 px-6 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
          >
            Voir toute la FAQ
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
