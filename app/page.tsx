import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Hero Section with Premium Design */}
      <div className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
        
        {/* Floating orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-[520px] w-[520px] rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse" />
          <div className="absolute right-[-100px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        </div>
        
        <div className="relative p-12 md:p-16 lg:p-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary animate-slide-in">
              ✨ Design moderne et performant
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              Des sites{" "}
              <span className="text-gradient-animated relative">
                rapides
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(221, 83%, 53%)" />
                      <stop offset="100%" stopColor="hsl(271, 91%, 65%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              ,{" "}
              élégants, et pensés pour convertir
            </h1>
            
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-slide-in">
              Vitrine, e-commerce, SEO — livré vite, sans stress. 
              <span className="text-foreground font-medium"> Parlons de votre projet</span> et donnons vie à vos idées.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 animate-scale-in">
              <a 
                href="/pricing" 
                className={`${buttonVariants({ size: "lg" })} btn-gradient hover-lift shadow-glow text-base`}
              >
                Voir les forfaits
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/contact" 
                className={`${buttonVariants({ variant: "secondary", size: "lg" })} glass-strong hover-lift text-base`}
              >
                Obtenir un devis gratuit
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Livraison rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Support réactif</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SEO optimisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 piliers - Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            t: "Performance", 
            d: "Core Web Vitals optimisés, chargements ultra-rapides pour une expérience fluide.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            color: "text-warning"
          },
          { 
            t: "Design", 
            d: "UI premium, sections claires, micro-interactions subtiles qui captivent.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            ),
            color: "text-primary"
          },
          { 
            t: "SEO", 
            d: "Balises, sitemap, schémas structurés — prêts pour dominer Google.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            ),
            color: "text-success"
          },
        ].map((f, idx) => (
          <Card 
            key={f.t} 
            className="card-modern hover-lift group cursor-pointer"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <CardHeader className="space-y-4">
              <div className={`${f.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {f.icon}
              </div>
              <CardTitle className="text-xl font-bold">{f.t}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{f.d}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="card-premium shadow-premium p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100%", label: "Satisfaction client" },
            { value: "<2s", label: "Temps de chargement" },
            { value: "24/7", label: "Support disponible" },
            { value: "A+", label: "Score Performance" },
          ].map((stat, idx) => (
            <div key={stat.label} className="space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section with Enhanced Cards */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Explorez nos <span className="text-gradient">services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions complètes pour propulser votre présence en ligne
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Site vitrine moderne", 
              desc: "Présentez votre activité avec un site rapide, élégant et responsive.", 
              href: "/services#vitrine",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              gradient: "from-blue-500 to-cyan-500"
            },
            { 
              title: "E-commerce (Stripe)", 
              desc: "Vendez en ligne facilement avec paiements sécurisés et gestion intuitive.", 
              href: "/services#ecommerce",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              gradient: "from-purple-500 to-pink-500"
            },
            { 
              title: "SEO & Contenu", 
              desc: "Améliorez votre visibilité, attirez plus de clients qualifiés.", 
              href: "/services#seo",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              gradient: "from-green-500 to-emerald-500"
            },
            { 
              title: "Maintenance & Sécurité", 
              desc: "Gardez votre site fiable, sauvegardé et toujours à jour.", 
              href: "/services#maintenance",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              gradient: "from-orange-500 to-red-500"
            },
            { 
              title: "Branding & Copywriting", 
              desc: "Identité forte et message percutant qui résonne.", 
              href: "/services#branding",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              ),
              gradient: "from-indigo-500 to-purple-500"
            },
            { 
              title: "Consultation gratuite", 
              desc: "Discutons de votre projet et trouvons la meilleure solution.", 
              href: "/contact",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
              gradient: "from-pink-500 to-rose-500",
              featured: true
            },
          ].map((s, idx) => (
            <a 
              key={s.title} 
              href={s.href} 
              className={`group block ${s.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className={`card-modern hover-lift h-full relative overflow-hidden ${s.featured ? 'shadow-glow-accent' : ''}`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl glass transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow bg-gradient-to-br ${s.gradient} text-white`}>
                      {s.icon}
                    </div>
                    {s.featured && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-primary text-white">
                        Recommandé
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {s.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {s.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="card-premium shadow-premium-lg p-10 md:p-14 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Prêt à transformer votre <span className="text-gradient-animated">vision</span> en réalité ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="/contact" 
            className={`${buttonVariants({ size: "lg" })} btn-gradient hover-lift shadow-glow text-base`}
          >
            Démarrer votre projet
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="/pricing" 
            className={`${buttonVariants({ variant: "outline", size: "lg" })} hover-lift text-base`}
          >
            Voir les tarifs
          </a>
        </div>
      </div>
    </section>
  );
}
  