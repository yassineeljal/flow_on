export const metadata = { title: "Conditions | FlowOn" };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="text-3xl font-semibold tracking-tight">Conditions d’utilisation & de vente</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Version courte et claire. Pour un contrat détaillé, un document séparé sera fourni lors du devis.
        </p>
      </section>

      <section className="card text-sm space-y-3" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">1) Prestations</h2>
        <p>Création de sites web (vitrine, e-commerce), SEO de base, maintenance, branding léger.</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">2) Prix & paiement</h2>
        <p>Prix indiqués sur la page “Forfaits”. Acompte 50% à la commande, solde à la mise en ligne.</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">3) Délais</h2>
        <p>Délais indicatifs (Starter 7–10 j, Business 2–3 sem, Pro 3–5 sem). Ils dépendent des contenus fournis.</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">4) Propriété intellectuelle</h2>
        <p>Le code et le design sont cédés au client à la livraison, hors composants/licences tiers.</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">5) Contenus</h2>
        <p>Le client garantit disposer des droits sur ses textes, logos, images.</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">6) Maintenance</h2>
        <p>Incluse selon le forfait. Au-delà, forfait mensuel sur devis.</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">7) Responsabilité</h2>
        <p>FlowOn ne répond pas des pannes des prestataires tiers (hébergement, passerelles de paiement, etc.).</p>

        <h2 className="text-base font-semibold text-[color:var(--ink)] mt-4">8) Droit applicable</h2>
        <p>Droit québécois/canadien. Litiges au for de Montréal, QC.</p>
      </section>
    </div>
  );
}
