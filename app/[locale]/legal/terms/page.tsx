import { setRequestLocale } from 'next-intl/server';

// 📋 TERMS PAGE - TRADUCTIONS COMPLÈTES FR/EN/ES - Version PRO
const content: Record<string, any> = {
  fr: {
    metadata: { title: "Conditions d'Utilisation & de Vente | FlowOn", description: "Conditions générales d'utilisation et de vente de FlowOn. CGU/CGV claires et transparentes pour nos services de création web." },
    badge: "📋 CGU/CGV",
    hero: { title: "Conditions d'Utilisation", subtitle: "Des conditions claires, simples et transparentes pour nos services de création web professionnelle." },
    sections: [
      { number: "1", title: "Objet & Prestations", content: "FlowOn propose des services de création de sites web (vitrine, e-commerce), SEO on-page, maintenance technique, et accompagnement branding léger. Chaque prestation fait l'objet d'un devis détaillé précisant le périmètre exact du projet." },
      { number: "2", title: "Prix & Modalités de Paiement", content: "Les prix sont indiqués en dollars canadiens sur la page Forfaits. Paiement en 2 fois : 50% d'acompte à la commande pour débuter le projet, et 50% du solde à la mise en ligne finale. Paiement par virement bancaire, carte bancaire ou PayPal." },
      { number: "3", title: "Délais de Réalisation", content: "Délais indicatifs : Starter 7-10 jours, Business 2-3 semaines, Pro Commerce 3-5 semaines. Ces délais peuvent varier selon la disponibilité des contenus fournis par le client et le nombre de révisions demandées. Un calendrier précis sera établi au début du projet." },
      { number: "4", title: "Processus de Travail & Révisions", content: "Le nombre de révisions incluses varie selon le forfait (2 pour Starter, 4 pour Business, 6 pour Pro). Les révisions doivent être communiquées par écrit et de manière groupée. Les demandes de modifications majeures sortant du périmètre initial peuvent faire l'objet d'un devis complémentaire." },
      { number: "5", title: "Propriété Intellectuelle", content: "À la livraison finale et au paiement complet, le code source et le design créés pour votre projet vous appartiennent. Exception faite des composants open-source, frameworks (Next.js, Tailwind CSS), et éléments sous licence tierce qui restent la propriété de leurs auteurs respectifs." },
      { number: "6", title: "Contenus & Responsabilité Client", content: "Le client garantit être propriétaire ou disposer des droits nécessaires sur tous les contenus fournis (textes, logos, images, vidéos). Le client est responsable de la légalité et de la conformité de ses contenus (RGPD, droits d'auteur, mentions légales)." },
      { number: "7", title: "Maintenance & Support", content: "La maintenance est incluse selon le forfait (Business : 1 mois, Pro : 3 mois). Elle couvre les corrections de bugs, mises à jour mineures et support technique. Au-delà de la période incluse, un forfait mensuel sur devis est proposé (à partir de 49$/mois)." },
      { number: "8", title: "Hébergement & Nom de Domaine", content: "L'hébergement et le nom de domaine sont à la charge du client (environ 50-100$/an). Nous recommandons Vercel pour l'hébergement (gratuit pour les sites basiques) et des registrars comme Namecheap ou GoDaddy pour les domaines. Assistance à la configuration incluse." },
      { number: "9", title: "Garantie & Responsabilité", content: "FlowOn garantit un code propre, optimisé et fonctionnel au moment de la livraison. Notre responsabilité est limitée au montant payé pour le projet. Nous ne sommes pas responsables des modifications apportées par le client après livraison, ni des problèmes liés à l'hébergement tiers." },
      { number: "10", title: "Annulation & Remboursement", content: "En cas d'annulation avant le début des travaux : remboursement intégral. Après le début : l'acompte de 50% reste acquis (couvre le temps investi). Le client peut suspendre le projet jusqu'à 3 mois maximum. Au-delà, le projet est considéré abandonné sans remboursement." },
      { number: "11", title: "Confidentialité & NDA", content: "FlowOn s'engage à la confidentialité des informations commerciales et techniques échangées. Un accord de confidentialité (NDA) peut être signé sur demande sans frais supplémentaires. Les projets peuvent être utilisés en portfolio sauf demande contraire du client." },
      { number: "12", title: "Modifications des CGU/CGV", content: "FlowOn se réserve le droit de modifier ces conditions à tout moment. Les modifications s'appliquent aux nouveaux projets uniquement. Les projets en cours restent soumis aux conditions acceptées lors de la signature du devis." }
    ],
    contact: { title: "Questions sur nos conditions ?", subtitle: "Notre équipe est là pour clarifier tout point qui vous semble flou.", email: "Contactez-nous", cta: "Demander un devis gratuit" },
    footer: { updated: "Dernière mise à jour :", disclaimer: "Ces CGU/CGV ne remplacent pas un contrat de prestation détaillé qui sera fourni avec chaque devis.", back: "Retour aux mentions légales" }
  },
  en: {
    metadata: { title: "Terms of Use & Sale | FlowOn", description: "FlowOn's general terms of use and sale. Clear and transparent T&C for our web creation services." },
    badge: "📋 Terms & Conditions",
    hero: { title: "Terms of Use", subtitle: "Clear, simple and transparent terms for our professional web creation services." },
    sections: [
      { number: "1", title: "Purpose & Services", content: "FlowOn offers website creation services (showcase, e-commerce), on-page SEO, technical maintenance, and light branding support. Each service is subject to a detailed quote specifying the exact project scope." },
      { number: "2", title: "Pricing & Payment Terms", content: "Prices are indicated in Canadian dollars on the Packages page. Payment in 2 installments: 50% deposit on order to start the project, and 50% balance at final launch. Payment by bank transfer, credit card or PayPal." },
      { number: "3", title: "Delivery Timeline", content: "Indicative timelines: Starter 7-10 days, Business 2-3 weeks, Pro Commerce 3-5 weeks. These timelines may vary depending on the availability of content provided by the client and the number of revisions requested. A precise schedule will be established at the start of the project." },
      { number: "4", title: "Work Process & Revisions", content: "The number of included revisions varies by package (2 for Starter, 4 for Business, 6 for Pro). Revisions must be communicated in writing and in a grouped manner. Requests for major modifications outside the initial scope may be subject to an additional quote." },
      { number: "5", title: "Intellectual Property", content: "Upon final delivery and full payment, the source code and design created for your project belong to you. Except for open-source components, frameworks (Next.js, Tailwind CSS), and third-party licensed elements which remain the property of their respective authors." },
      { number: "6", title: "Content & Client Responsibility", content: "The client guarantees to be the owner or have the necessary rights to all content provided (texts, logos, images, videos). The client is responsible for the legality and compliance of their content (GDPR, copyright, legal notices)." },
      { number: "7", title: "Maintenance & Support", content: "Maintenance is included according to the package (Business: 1 month, Pro: 3 months). It covers bug fixes, minor updates and technical support. Beyond the included period, a monthly package on quote is offered (from $49/month)." },
      { number: "8", title: "Hosting & Domain Name", content: "Hosting and domain name are the client's responsibility (approximately $50-100/year). We recommend Vercel for hosting (free for basic sites) and registrars like Namecheap or GoDaddy for domains. Configuration assistance included." },
      { number: "9", title: "Warranty & Liability", content: "FlowOn guarantees clean, optimized and functional code at the time of delivery. Our liability is limited to the amount paid for the project. We are not responsible for modifications made by the client after delivery, nor for problems related to third-party hosting." },
      { number: "10", title: "Cancellation & Refund", content: "In case of cancellation before work begins: full refund. After start: the 50% deposit remains acquired (covers time invested). The client can suspend the project for up to 3 months maximum. Beyond that, the project is considered abandoned without refund." },
      { number: "11", title: "Confidentiality & NDA", content: "FlowOn commits to the confidentiality of commercial and technical information exchanged. A confidentiality agreement (NDA) can be signed upon request at no additional cost. Projects may be used in portfolio unless otherwise requested by the client." },
      { number: "12", title: "T&C Modifications", content: "FlowOn reserves the right to modify these terms at any time. Modifications apply to new projects only. Ongoing projects remain subject to the terms accepted when signing the quote." }
    ],
    contact: { title: "Questions about our terms?", subtitle: "Our team is here to clarify any point that seems unclear.", email: "Contact us", cta: "Request a free quote" },
    footer: { updated: "Last updated:", disclaimer: "These T&C do not replace a detailed service contract which will be provided with each quote.", back: "Back to legal notices" }
  },
  es: {
    metadata: { title: "Condiciones de Uso y Venta | FlowOn", description: "Condiciones generales de uso y venta de FlowOn. Términos claros y transparentes para nuestros servicios de creación web." },
    badge: "📋 Términos y Condiciones",
    hero: { title: "Condiciones de Uso", subtitle: "Condiciones claras, simples y transparentes para nuestros servicios profesionales de creación web." },
    sections: [
      { number: "1", title: "Objeto y Servicios", content: "FlowOn ofrece servicios de creación de sitios web (escaparate, comercio electrónico), SEO on-page, mantenimiento técnico y soporte ligero de branding. Cada servicio está sujeto a un presupuesto detallado que especifica el alcance exacto del proyecto." },
      { number: "2", title: "Precios y Modalidades de Pago", content: "Los precios se indican en dólares canadienses en la página de Paquetes. Pago en 2 cuotas: 50% de depósito al pedido para iniciar el proyecto, y 50% del saldo al lanzamiento final. Pago por transferencia bancaria, tarjeta de crédito o PayPal." },
      { number: "3", title: "Plazos de Entrega", content: "Plazos indicativos: Starter 7-10 días, Business 2-3 semanas, Pro Commerce 3-5 semanas. Estos plazos pueden variar según la disponibilidad del contenido proporcionado por el cliente y el número de revisiones solicitadas. Se establecerá un calendario preciso al inicio del proyecto." },
      { number: "4", title: "Proceso de Trabajo y Revisiones", content: "El número de revisiones incluidas varía según el paquete (2 para Starter, 4 para Business, 6 para Pro). Las revisiones deben comunicarse por escrito y de manera agrupada. Las solicitudes de modificaciones mayores fuera del alcance inicial pueden estar sujetas a un presupuesto adicional." },
      { number: "5", title: "Propiedad Intelectual", content: "Al momento de la entrega final y el pago completo, el código fuente y el diseño creados para su proyecto le pertenecen. Excepto los componentes de código abierto, frameworks (Next.js, Tailwind CSS) y elementos con licencia de terceros que siguen siendo propiedad de sus respectivos autores." },
      { number: "6", title: "Contenido y Responsabilidad del Cliente", content: "El cliente garantiza ser propietario o tener los derechos necesarios sobre todo el contenido proporcionado (textos, logotipos, imágenes, videos). El cliente es responsable de la legalidad y conformidad de su contenido (RGPD, derechos de autor, avisos legales)." },
      { number: "7", title: "Mantenimiento y Soporte", content: "El mantenimiento está incluido según el paquete (Business: 1 mes, Pro: 3 meses). Cubre corrección de errores, actualizaciones menores y soporte técnico. Más allá del período incluido, se ofrece un paquete mensual bajo presupuesto (desde $49/mes)." },
      { number: "8", title: "Alojamiento y Nombre de Dominio", content: "El alojamiento y el nombre de dominio son responsabilidad del cliente (aproximadamente $50-100/año). Recomendamos Vercel para el alojamiento (gratis para sitios básicos) y registradores como Namecheap o GoDaddy para dominios. Asistencia de configuración incluida." },
      { number: "9", title: "Garantía y Responsabilidad", content: "FlowOn garantiza un código limpio, optimizado y funcional al momento de la entrega. Nuestra responsabilidad se limita al monto pagado por el proyecto. No somos responsables de modificaciones realizadas por el cliente después de la entrega, ni de problemas relacionados con alojamiento de terceros." },
      { number: "10", title: "Cancelación y Reembolso", content: "En caso de cancelación antes del inicio del trabajo: reembolso completo. Después del inicio: el depósito del 50% permanece adquirido (cubre el tiempo invertido). El cliente puede suspender el proyecto hasta 3 meses máximo. Más allá, el proyecto se considera abandonado sin reembolso." },
      { number: "11", title: "Confidencialidad y NDA", content: "FlowOn se compromete a la confidencialidad de la información comercial y técnica intercambiada. Se puede firmar un acuerdo de confidencialidad (NDA) bajo solicitud sin costo adicional. Los proyectos pueden usarse en el portafolio a menos que el cliente solicite lo contrario." },
      { number: "12", title: "Modificaciones de Términos", content: "FlowOn se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones se aplican solo a nuevos proyectos. Los proyectos en curso permanecen sujetos a los términos aceptados al firmar el presupuesto." }
    ],
    contact: { title: "¿Preguntas sobre nuestros términos?", subtitle: "Nuestro equipo está aquí para aclarar cualquier punto que parezca confuso.", email: "Contáctenos", cta: "Solicitar presupuesto gratuito" },
    footer: { updated: "Última actualización:", disclaimer: "Estos términos no reemplazan un contrato de servicio detallado que se proporcionará con cada presupuesto.", back: "Volver a avisos legales" }
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[locale].metadata;
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = content[locale];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-premium-lg animate-fade-in">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        
        <div className="relative p-10 md:p-14 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t.hero.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-animated">{t.hero.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="space-y-6 animate-fade-in">
        {t.sections.map((section: any, idx: number) => (
          <div
            key={section.number}
            className="card-premium shadow-premium hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow font-bold text-lg">
                  {section.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">{t.contact.title.split(' ').slice(-2).join(' ')}</span> {t.contact.title.split(' ').slice(0, -2).join(' ')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg btn-gradient font-semibold text-base hover-lift shadow-glow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.contact.email}
            </a>
            <a 
              href="/pricing" 
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {t.contact.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="p-6 rounded-2xl glass border border-border/40 text-center space-y-2 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">{t.footer.updated}</strong> {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xs text-muted-foreground">
          {t.footer.disclaimer}
        </p>
        <p className="text-xs text-muted-foreground">
          <a href="/legal" className="text-primary hover:underline">{t.footer.back}</a>
        </p>
      </section>
    </div>
  );
}
