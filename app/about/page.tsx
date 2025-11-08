// src/app/about/page.tsx
export default function Page() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <section className="relative overflow-hidden rounded-2xl border p-8 bg-linear-to-b from-primary/5 to-background">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">À propos de FlowOn</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          FlowOn, c’est une agence web créée par un développeur passionné : <strong>créer des sites modernes, rapides et élégants</strong>,
          sans les complications habituelles. Mon but est simple : <strong>transformer vos idées en site clair, performant et rentable</strong>.
        </p>
      </section>

      {/* Philosophie */}
      <section className="rounded-2xl border p-6 space-y-4">
        <h2 className="text-xl font-semibold">Ma philosophie</h2>
        <p className="text-muted-foreground">
          Chaque projet est une collaboration. J’écoute vos besoins, vos goûts, vos objectifs.
          Ensemble, on crée une présence en ligne qui reflète votre identité et attire vos clients idéaux.
        </p>
        <ul className="text-sm grid gap-2 mt-2 text-muted-foreground">
          <li>✓ Design minimaliste et cohérent</li>
          <li>✓ Code propre et optimisé</li>
          <li>✓ Expérience fluide sur mobile et desktop</li>
          <li>✓ Communication simple et rapide à chaque étape</li>
        </ul>
      </section>

      {/* Processus */}
      <section className="rounded-2xl border p-6 space-y-6">
        <h2 className="text-xl font-semibold">Comment je travaille</h2>
        <ol className="space-y-4 text-sm text-muted-foreground">
          <li>
            <strong>1. Discussion & devis :</strong> on échange sur vos besoins, je prépare une estimation claire.
          </li>
          <li>
            <strong>2. Maquette & design :</strong> je conçois une structure élégante et intuitive.
          </li>
          <li>
            <strong>3. Développement :</strong> intégration du site avec Next.js, Tailwind et SEO de base.
          </li>
          <li>
            <strong>4. Validation & mise en ligne :</strong> ajustements finaux, déploiement sur Vercel, et support post-lancement.
          </li>
        </ol>
      </section>

      {/* Valeurs */}
      <section className="rounded-2xl border p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Simplicité",
            desc: "Un site clair, facile à comprendre et à maintenir. Chaque ligne de code a une raison d’exister.",
          },
          {
            title: "Design réfléchi",
            desc: "Les couleurs, les formes et les textes servent à une chose : créer une émotion et inciter à l’action.",
          },
          {
            title: "Performance",
            desc: "Un site lent fait fuir. FlowOn livre des sites ultra-rapides, optimisés pour les Core Web Vitals.",
          },
        ].map((v) => (
          <div key={v.title} className="space-y-2">
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA final */}
      <section className="rounded-2xl border p-8 text-center">
        <h3 className="text-xl font-semibold">Travaillons ensemble</h3>
        <p className="mt-1 text-muted-foreground">
          Vous avez une idée ? Un projet en tête ? Je vous accompagne du concept à la mise en ligne.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="/pricing" className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm">Voir les forfaits</a>
          <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground">Me contacter</a>
        </div>
      </section>
    </div>
  );
}
