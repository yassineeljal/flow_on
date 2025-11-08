import ContactForm from "@/components/contact-form";

export const metadata = { title: "Obtenir un devis | FlowOn" };

export default function Page(){
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border p-8 bg-linear-to-b from-primary/10 to-background">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Obtenir un devis</h1>
        <p className="mt-2 text-muted-foreground">
          Réponds à quelques questions — je te reviens avec une proposition claire.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl border p-6 bg-card/60 backdrop-blur">
          <ContactForm />
        </div>

        <aside className="rounded-2xl border p-6 space-y-4 md:sticky md:top-24 h-fit">
          <p className="font-medium">Pourquoi FlowOn ?</p>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li className="flex gap-2 items-start"><span aria-hidden>✓</span><span>Design premium, cohérent avec ta marque</span></li>
            <li className="flex gap-2 items-start"><span aria-hidden>✓</span><span>Core Web Vitals optimisés</span></li>
            <li className="flex gap-2 items-start"><span aria-hidden>✓</span><span>SEO de base inclus</span></li>
            <li className="flex gap-2 items-start"><span aria-hidden>✓</span><span>Délais clairs & process simple</span></li>
          </ul>
          <div className="pt-2">
            <a href="/pricing" className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm w-full">Voir les forfaits</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
