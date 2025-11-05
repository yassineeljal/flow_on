export const metadata = { title: "Politique de cookies | FlowOn" };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="text-3xl font-semibold tracking-tight">Politique de cookies</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Nous utilisons des cookies pour faire fonctionner le site et mesurer l’audience.
        </p>
      </section>

      <section className="card text-sm space-y-3" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">Types de cookies</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li><strong>Nécessaires</strong> : sécurité, session, préférence de thème (light/dark).</li>
          <li><strong>Mesure d’audience</strong> : pages visitées, temps passé (anonymisés si possible).</li>
        </ul>
      </section>

      <section className="card text-sm space-y-3" style={{ color: "var(--muted)" }}>
        <h2 className="text-base font-semibold text-[color:var(--ink)]">Gérer vos choix</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>Vous pouvez refuser la mesure d’audience via le bandeau cookies.</li>
          <li>Vous pouvez supprimer les cookies via les réglages de votre navigateur.</li>
        </ul>
      </section>
    </div>
  );
}
