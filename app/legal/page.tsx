export const metadata = { title: "Mentions légales | FlowOn" };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border p-8 bg-linear-to-b from-primary/10 to-background">
        <h1 className="text-3xl font-semibold tracking-tight">Mentions légales</h1>
        <p className="mt-2 text-muted-foreground">Cette page présente les informations légales de FlowOn. Pour toute question, écrivez-nous.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { href: "/legal/privacy", title: "Politique de confidentialité", desc: "Données collectées, usage, droits." },
          { href: "/legal/cookies", title: "Politique de cookies", desc: "Quels cookies et comment les gérer." },
          { href: "/legal/terms", title: "Conditions", desc: "CGU/CGV simples et accessibles." },
        ].map((i) => (
          <a key={i.href} href={i.href} className="rounded-lg border p-6 block hover:bg-accent transition">
            <h2 className="text-lg font-semibold">{i.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
          </a>
        ))}
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="text-lg font-semibold">Éditeur & Contact</h2>
        <div className="mt-2 text-sm text-muted-foreground">
          <p><strong>Nom commercial :</strong> FlowOn</p>
          <p><strong>Adresse :</strong> Canada</p>
          <p><strong>Email :</strong> <a className="underline" href="mailto:jalwach.co@gmail.com">jalwach.co@gmail.com</a></p>
        </div>
      </section>
    </div>
  );
}
