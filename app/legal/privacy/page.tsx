export const metadata = { title: "Politique de confidentialité | FlowOn" };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="text-3xl font-semibold tracking-tight">Politique de confidentialité</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Notre objectif : protéger vos données et rester simples et transparents.
        </p>
      </section>

      <section className="card space-y-3 text-sm" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">1) Données que nous collectons</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Formulaire de contact : nom, email, budget, délai, message.</li>
          <li>Analytics (Vercel/Clarity/Matomo) : pages vues, navigateur, appareil, ville approximative.</li>
          <li>Journal technique (serveur) : adresse IP, user-agent (sécurité/anti-spam).</li>
        </ul>
      </section>

      <section className="card space-y-3 text-sm" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">2) Pourquoi</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Répondre à votre demande de devis.</li>
          <li>Améliorer le site et la qualité de service.</li>
          <li>Assurer la sécurité et prévenir la fraude.</li>
        </ul>
      </section>

      <section className="card space-y-3 text-sm" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">3) Base légale</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Consentement (formulaire, cookies d’analytics).</li>
          <li>Intérêt légitime (sécurité, amélioration du site).</li>
          <li>Exécution pré-contractuelle (devis, échanges commerciaux).</li>
        </ul>
      </section>

      <section className="card space-y-3 text-sm" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">4) Durées</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Leads/devis : 24 mois maximum.</li>
          <li>Logs techniques : 12 mois maximum.</li>
          <li>Cookies : selon leur finalité (voir “Cookies”).</li>
        </ul>
      </section>

      <section className="card space-y-3 text-sm" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">5) Partage</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Hébergeur et outils (ex. Vercel, Resend, Matomo/Clarity) pour fournir le service.</li>
          <li>Jamais de vente de données.</li>
          <li>Transferts hors Canada/UE possibles via ces outils (mesures de protection standard).</li>
        </ul>
      </section>

      <section className="card space-y-3 text-sm" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">6) Vos droits</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Accès, rectification, effacement, limitation, opposition.</li>
          <li>Retrait du consentement (cookies/analytics/formulaire).</li>
          <li>Contact : <a href="mailto:jalwach.co@gmail.com">jalwach.co@gmail.com</a></li>
        </ul>
      </section>

      <section className="card text-xs" style={{ color: "var(--muted)" }}>
        <p><strong>Dernière mise à jour :</strong> {new Date().toISOString().slice(0,10)}</p>
        <p className="mt-1">Cette page est informative et ne remplace pas un avis juridique.</p>
      </section>
    </div>
  );
}
