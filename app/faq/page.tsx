export const metadata = { title: "FAQ | FlowOn" };

const items = [
  { q: "Délais moyens ?", a: "Starter 7–10 jours, Business 2–3 semaines, Pro 3–5 semaines." },
  { q: "Puis-je payer en plusieurs fois ?", a: "Oui, 50% à la commande, 50% à la livraison." },
  { q: "Le contenu est-il inclus ?", a: "Vous pouvez fournir vos contenus ; sinon, options rédaction/visuels." },
  { q: "Maintenance ?", a: "Incluse selon le forfait, puis forfait mensuel sur devis." },
];

export default function Page(){
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border p-8 bg-linear-to-b from-primary/10 to-background">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">FAQ</h1>
        <p className="mt-2 text-muted-foreground">Les réponses aux questions fréquentes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it) => (
          <details key={it.q} className="rounded-lg border p-6 open:bg-secondary/40 transition">
            <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
              {it.q}
              <span className="text-muted-foreground text-sm">+</span>
            </summary>
            <p className="text-sm text-muted-foreground mt-3">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
