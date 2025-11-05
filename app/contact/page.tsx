import ContactForm from "@/components/contact-form";

export default function Page(){
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl p-8 card">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Obtenir un devis</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Réponds à quelques questions — je te reviens avec une proposition claire.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card">
          <ContactForm />
        </div>

        <aside className="card space-y-3">
          <p className="font-medium">Pourquoi FlowOn ?</p>
          <ul className="text-sm space-y-2" style={{ color: "var(--muted)" }}>
            <li>✓ Design premium, cohérent avec ta marque</li>
            <li>✓ Core Web Vitals optimisés</li>
            <li>✓ SEO de base inclus</li>
            <li>✓ Délais clairs & process simple</li>
          </ul>
          <div className="pt-3">
            <a href="/pricing" className="btn w-full">Voir les forfaits</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
