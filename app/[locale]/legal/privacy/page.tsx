import { setRequestLocale } from 'next-intl/server';

// 🎯 TRADUCTIONS COMPLÈTES FR/EN/ES - Version PRO
const content: Record<string, any> = {
  fr: {
    metadata: { title: "Politique de Confidentialité | FlowOn", description: "Comment FlowOn protège vos données personnelles. Transparence totale sur la collecte, l'utilisation et la protection de vos informations." },
    badge: "🔒 Confidentialité",
    hero: { title: "Politique de Confidentialité", subtitle: "Notre objectif : protéger vos données et rester simples et transparents sur leur utilisation.", compliance: "Conforme RGPD (Europe) et Loi 25 (Québec)" },
    trust: [
      { title: "Données sécurisées", desc: "HTTPS, chiffrement, hébergement fiable" },
      { title: "Aucune vente", desc: "Vos données ne sont jamais vendues" },
      { title: "Conformité totale", desc: "RGPD, Loi 25, meilleures pratiques" }
    ],
    sections: [
      {
        number: "1", title: "Données que nous collectons",
        items: [
          { subtitle: "Formulaire de contact", desc: "Nom, prénom, email, téléphone (optionnel), budget estimé, délai souhaité, et votre message ou description de projet." },
          { subtitle: "Analytics et statistiques", desc: "Pages visitées, durée de visite, type de navigateur et appareil, ville approximative (via Vercel Analytics, Microsoft Clarity ou Matomo selon la configuration)." },
          { subtitle: "Données techniques", desc: "Adresse IP, user-agent, logs serveur pour des raisons de sécurité et prévention du spam." }
        ]
      },
      {
        number: "2", title: "Pourquoi collectons-nous ces données",
        items: [
          { subtitle: "Répondre à vos demandes", desc: "Pour vous envoyer un devis personnalisé, répondre à vos questions et assurer le suivi de votre projet." },
          { subtitle: "Améliorer nos services", desc: "Comprendre comment les visiteurs utilisent notre site pour optimiser l'expérience utilisateur et la qualité de nos prestations." },
          { subtitle: "Assurer la sécurité", desc: "Détecter et prévenir les tentatives de fraude, spam, ou activités malveillantes sur notre infrastructure." }
        ]
      },
      {
        number: "3", title: "Base légale (RGPD)",
        items: [
          { subtitle: "Consentement", desc: "En remplissant notre formulaire de contact ou en acceptant les cookies d'analytics, vous nous donnez votre consentement explicite." },
          { subtitle: "Intérêt légitime", desc: "La sécurité du site, l'amélioration de nos services et l'analyse statistique constituent des intérêts légitimes justifiant certains traitements." },
          { subtitle: "Exécution pré-contractuelle", desc: "Les échanges liés aux devis et à la préparation de contrats sont nécessaires avant la signature d'un contrat de prestation." }
        ]
      },
      {
        number: "4", title: "Durée de conservation",
        items: [
          { subtitle: "Demandes de devis et leads", desc: "Conservation maximale de 24 mois après le dernier contact, sauf si un contrat est signé (alors durée légale comptable)." },
          { subtitle: "Logs techniques et sécurité", desc: "Conservation maximale de 12 mois pour les journaux serveur et données de sécurité." },
          { subtitle: "Cookies analytics", desc: "Durée variable selon le cookie : de 24 heures à 13 mois maximum. Consultez notre page Cookies pour plus de détails." }
        ]
      },
      {
        number: "5", title: "Partage et transferts de données",
        items: [
          { subtitle: "Prestataires techniques", desc: "Nous utilisons des outils tiers (Vercel pour l'hébergement, Resend pour les emails, Matomo/Clarity pour analytics) qui peuvent avoir accès à certaines données dans le cadre de leurs services." },
          { subtitle: "Aucune vente de données", desc: "FlowOn ne vend jamais vos données personnelles à des tiers, ne les loue pas et ne les utilise pas à des fins publicitaires externes." },
          { subtitle: "Transferts internationaux", desc: "Certains prestataires (comme Vercel, Microsoft) peuvent impliquer des transferts hors Canada/UE. Ces transferts sont encadrés par des clauses contractuelles types et mesures de protection appropriées." }
        ]
      },
      {
        number: "6", title: "Vos droits (RGPD & Loi 25)",
        items: [
          { subtitle: "Accès et rectification", desc: "Vous pouvez demander l'accès à toutes vos données personnelles et les faire corriger si elles sont inexactes ou incomplètes." },
          { subtitle: "Effacement et limitation", desc: "Vous avez le droit de demander l'effacement de vos données (droit à l'oubli) ou d'en limiter le traitement dans certaines conditions." },
          { subtitle: "Opposition et portabilité", desc: "Vous pouvez vous opposer au traitement de vos données et demander leur portabilité vers un autre prestataire dans un format structuré." },
          { subtitle: "Retrait du consentement", desc: "Vous pouvez à tout moment retirer votre consentement pour les cookies analytics ou le traitement de vos données de contact." }
        ]
      },
      {
        number: "7", title: "Sécurité et protection",
        items: [
          { subtitle: "Mesures techniques", desc: "HTTPS systématique, hébergement sécurisé (Vercel), chiffrement des données en transit et au repos, sauvegardes régulières." },
          { subtitle: "Mesures organisationnelles", desc: "Accès limité aux données personnelles (principe du moindre privilège), sensibilisation aux bonnes pratiques de sécurité." },
          { subtitle: "En cas de violation", desc: "En cas de violation de données personnelles présentant un risque pour vos droits, nous nous engageons à vous notifier dans les délais légaux (72 heures maximum)." }
        ]
      },
      {
        number: "8", title: "Cookies et technologies similaires",
        items: [
          { subtitle: "Types de cookies", desc: "Cookies essentiels (fonctionnement du site), cookies analytics (statistiques anonymisées), cookies de préférences (thème clair/sombre, langue)." },
          { subtitle: "Gestion des cookies", desc: "Vous pouvez accepter ou refuser les cookies non essentiels via notre bannière de consentement. Vous pouvez également modifier vos préférences à tout moment." },
          { subtitle: "En savoir plus", desc: "Pour une liste détaillée des cookies utilisés, leur finalité et leur durée, consultez notre page Cookies dédiée." }
        ]
      }
    ],
    contact: { title: "Exercer vos droits", subtitle: "Pour toute demande concernant vos données personnelles (accès, rectification, effacement, etc.), contactez-nous par email :", delay: "Nous nous engageons à répondre dans un délai maximum de 30 jours." },
    related: { title: "Pages connexes", cookies: { title: "Politique des Cookies", desc: "Liste détaillée des cookies utilisés" }, terms: { title: "Conditions d'Utilisation", desc: "CGU/CGV de nos services" } },
    footer: { updated: "Dernière mise à jour :", disclaimer: "Cette page est informative et ne remplace pas un avis juridique professionnel.", back: "Retour aux mentions légales" }
  },
  en: {
    metadata: { title: "Privacy Policy | FlowOn", description: "How FlowOn protects your personal data. Full transparency on data collection, use and protection." },
    badge: "🔒 Privacy",
    hero: { title: "Privacy Policy", subtitle: "Our goal: protect your data and remain simple and transparent about its use.", compliance: "GDPR compliant (Europe) and Law 25 (Quebec)" },
    trust: [
      { title: "Secure data", desc: "HTTPS, encryption, reliable hosting" },
      { title: "No selling", desc: "Your data is never sold" },
      { title: "Full compliance", desc: "GDPR, Law 25, best practices" }
    ],
    sections: [
      {
        number: "1", title: "Data we collect",
        items: [
          { subtitle: "Contact form", desc: "First name, last name, email, phone (optional), estimated budget, desired timeline, and your message or project description." },
          { subtitle: "Analytics and statistics", desc: "Pages visited, visit duration, browser and device type, approximate city (via Vercel Analytics, Microsoft Clarity or Matomo depending on configuration)." },
          { subtitle: "Technical data", desc: "IP address, user-agent, server logs for security reasons and spam prevention." }
        ]
      },
      {
        number: "2", title: "Why we collect this data",
        items: [
          { subtitle: "Respond to your requests", desc: "To send you a personalized quote, answer your questions and follow up on your project." },
          { subtitle: "Improve our services", desc: "Understand how visitors use our site to optimize user experience and quality of our services." },
          { subtitle: "Ensure security", desc: "Detect and prevent fraud attempts, spam, or malicious activities on our infrastructure." }
        ]
      },
      {
        number: "3", title: "Legal basis (GDPR)",
        items: [
          { subtitle: "Consent", desc: "By filling out our contact form or accepting analytics cookies, you give us your explicit consent." },
          { subtitle: "Legitimate interest", desc: "Site security, service improvement and statistical analysis constitute legitimate interests justifying certain processing." },
          { subtitle: "Pre-contractual execution", desc: "Exchanges related to quotes and contract preparation are necessary before signing a service contract." }
        ]
      },
      {
        number: "4", title: "Retention period",
        items: [
          { subtitle: "Quote requests and leads", desc: "Maximum retention of 24 months after last contact, unless a contract is signed (then legal accounting period)." },
          { subtitle: "Technical logs and security", desc: "Maximum retention of 12 months for server logs and security data." },
          { subtitle: "Analytics cookies", desc: "Variable duration depending on cookie: from 24 hours to 13 months maximum. See our Cookies page for more details." }
        ]
      },
      {
        number: "5", title: "Data sharing and transfers",
        items: [
          { subtitle: "Technical providers", desc: "We use third-party tools (Vercel for hosting, Resend for emails, Matomo/Clarity for analytics) which may have access to certain data as part of their services." },
          { subtitle: "No data selling", desc: "FlowOn never sells your personal data to third parties, does not rent it and does not use it for external advertising purposes." },
          { subtitle: "International transfers", desc: "Some providers (like Vercel, Microsoft) may involve transfers outside Canada/EU. These transfers are governed by standard contractual clauses and appropriate safeguards." }
        ]
      },
      {
        number: "6", title: "Your rights (GDPR & Law 25)",
        items: [
          { subtitle: "Access and rectification", desc: "You can request access to all your personal data and have it corrected if it is inaccurate or incomplete." },
          { subtitle: "Erasure and limitation", desc: "You have the right to request erasure of your data (right to be forgotten) or limit its processing under certain conditions." },
          { subtitle: "Opposition and portability", desc: "You can object to the processing of your data and request its portability to another provider in a structured format." },
          { subtitle: "Withdrawal of consent", desc: "You can withdraw your consent at any time for analytics cookies or processing of your contact data." }
        ]
      },
      {
        number: "7", title: "Security and protection",
        items: [
          { subtitle: "Technical measures", desc: "Systematic HTTPS, secure hosting (Vercel), encryption of data in transit and at rest, regular backups." },
          { subtitle: "Organizational measures", desc: "Limited access to personal data (principle of least privilege), awareness of security best practices." },
          { subtitle: "In case of breach", desc: "In case of a personal data breach presenting a risk to your rights, we commit to notify you within legal deadlines (72 hours maximum)." }
        ]
      },
      {
        number: "8", title: "Cookies and similar technologies",
        items: [
          { subtitle: "Types of cookies", desc: "Essential cookies (site operation), analytics cookies (anonymized statistics), preference cookies (light/dark theme, language)." },
          { subtitle: "Cookie management", desc: "You can accept or refuse non-essential cookies via our consent banner. You can also modify your preferences at any time." },
          { subtitle: "Learn more", desc: "For a detailed list of cookies used, their purpose and duration, see our dedicated Cookies page." }
        ]
      }
    ],
    contact: { title: "Exercise your rights", subtitle: "For any request regarding your personal data (access, rectification, erasure, etc.), contact us by email:", delay: "We commit to respond within a maximum of 30 days." },
    related: { title: "Related pages", cookies: { title: "Cookie Policy", desc: "Detailed list of cookies used" }, terms: { title: "Terms of Use", desc: "Our service terms and conditions" } },
    footer: { updated: "Last updated:", disclaimer: "This page is informative and does not replace professional legal advice.", back: "Back to legal notices" }
  },
  es: {
    metadata: { title: "Política de Privacidad | FlowOn", description: "Cómo FlowOn protege sus datos personales. Transparencia total sobre la recopilación, uso y protección de su información." },
    badge: "🔒 Privacidad",
    hero: { title: "Política de Privacidad", subtitle: "Nuestro objetivo: proteger sus datos y ser simples y transparentes sobre su uso.", compliance: "Conforme con RGPD (Europa) y Ley 25 (Quebec)" },
    trust: [
      { title: "Datos seguros", desc: "HTTPS, cifrado, alojamiento confiable" },
      { title: "Sin ventas", desc: "Sus datos nunca se venden" },
      { title: "Conformidad total", desc: "RGPD, Ley 25, mejores prácticas" }
    ],
    sections: [
      {
        number: "1", title: "Datos que recopilamos",
        items: [
          { subtitle: "Formulario de contacto", desc: "Nombre, apellido, correo electrónico, teléfono (opcional), presupuesto estimado, plazo deseado y su mensaje o descripción del proyecto." },
          { subtitle: "Analytics y estadísticas", desc: "Páginas visitadas, duración de visita, tipo de navegador y dispositivo, ciudad aproximada (vía Vercel Analytics, Microsoft Clarity o Matomo según la configuración)." },
          { subtitle: "Datos técnicos", desc: "Dirección IP, user-agent, registros del servidor por razones de seguridad y prevención de spam." }
        ]
      },
      {
        number: "2", title: "Por qué recopilamos estos datos",
        items: [
          { subtitle: "Responder a sus solicitudes", desc: "Para enviarle un presupuesto personalizado, responder a sus preguntas y hacer seguimiento de su proyecto." },
          { subtitle: "Mejorar nuestros servicios", desc: "Comprender cómo los visitantes usan nuestro sitio para optimizar la experiencia de usuario y la calidad de nuestros servicios." },
          { subtitle: "Garantizar la seguridad", desc: "Detectar y prevenir intentos de fraude, spam o actividades maliciosas en nuestra infraestructura." }
        ]
      },
      {
        number: "3", title: "Base legal (RGPD)",
        items: [
          { subtitle: "Consentimiento", desc: "Al completar nuestro formulario de contacto o aceptar las cookies de analytics, nos da su consentimiento explícito." },
          { subtitle: "Interés legítimo", desc: "La seguridad del sitio, la mejora de nuestros servicios y el análisis estadístico constituyen intereses legítimos que justifican ciertos tratamientos." },
          { subtitle: "Ejecución precontractual", desc: "Los intercambios relacionados con presupuestos y preparación de contratos son necesarios antes de firmar un contrato de servicio." }
        ]
      },
      {
        number: "4", title: "Período de conservación",
        items: [
          { subtitle: "Solicitudes de presupuesto y prospectos", desc: "Conservación máxima de 24 meses después del último contacto, a menos que se firme un contrato (entonces período legal contable)." },
          { subtitle: "Registros técnicos y seguridad", desc: "Conservación máxima de 12 meses para registros del servidor y datos de seguridad." },
          { subtitle: "Cookies de analytics", desc: "Duración variable según la cookie: de 24 horas a 13 meses máximo. Consulte nuestra página de Cookies para más detalles." }
        ]
      },
      {
        number: "5", title: "Compartir y transferencias de datos",
        items: [
          { subtitle: "Proveedores técnicos", desc: "Utilizamos herramientas de terceros (Vercel para alojamiento, Resend para correos, Matomo/Clarity para analytics) que pueden tener acceso a ciertos datos como parte de sus servicios." },
          { subtitle: "Sin venta de datos", desc: "FlowOn nunca vende sus datos personales a terceros, no los alquila y no los usa para fines publicitarios externos." },
          { subtitle: "Transferencias internacionales", desc: "Algunos proveedores (como Vercel, Microsoft) pueden implicar transferencias fuera de Canadá/UE. Estas transferencias están regidas por cláusulas contractuales estándar y salvaguardas apropiadas." }
        ]
      },
      {
        number: "6", title: "Sus derechos (RGPD y Ley 25)",
        items: [
          { subtitle: "Acceso y rectificación", desc: "Puede solicitar acceso a todos sus datos personales y hacerlos corregir si son inexactos o incompletos." },
          { subtitle: "Eliminación y limitación", desc: "Tiene derecho a solicitar la eliminación de sus datos (derecho al olvido) o limitar su tratamiento bajo ciertas condiciones." },
          { subtitle: "Oposición y portabilidad", desc: "Puede oponerse al tratamiento de sus datos y solicitar su portabilidad a otro proveedor en formato estructurado." },
          { subtitle: "Retirada del consentimiento", desc: "Puede retirar su consentimiento en cualquier momento para las cookies de analytics o el tratamiento de sus datos de contacto." }
        ]
      },
      {
        number: "7", title: "Seguridad y protección",
        items: [
          { subtitle: "Medidas técnicas", desc: "HTTPS sistemático, alojamiento seguro (Vercel), cifrado de datos en tránsito y en reposo, copias de seguridad regulares." },
          { subtitle: "Medidas organizativas", desc: "Acceso limitado a datos personales (principio de menor privilegio), concienciación sobre las mejores prácticas de seguridad." },
          { subtitle: "En caso de violación", desc: "En caso de violación de datos personales que presente un riesgo para sus derechos, nos comprometemos a notificarle dentro de los plazos legales (72 horas máximo)." }
        ]
      },
      {
        number: "8", title: "Cookies y tecnologías similares",
        items: [
          { subtitle: "Tipos de cookies", desc: "Cookies esenciales (funcionamiento del sitio), cookies de analytics (estadísticas anonimizadas), cookies de preferencias (tema claro/oscuro, idioma)." },
          { subtitle: "Gestión de cookies", desc: "Puede aceptar o rechazar las cookies no esenciales a través de nuestro banner de consentimiento. También puede modificar sus preferencias en cualquier momento." },
          { subtitle: "Saber más", desc: "Para una lista detallada de las cookies utilizadas, su finalidad y duración, consulte nuestra página dedicada a Cookies." }
        ]
      }
    ],
    contact: { title: "Ejercer sus derechos", subtitle: "Para cualquier solicitud sobre sus datos personales (acceso, rectificación, eliminación, etc.), contáctenos por correo electrónico:", delay: "Nos comprometemos a responder en un plazo máximo de 30 días." },
    related: { title: "Páginas relacionadas", cookies: { title: "Política de Cookies", desc: "Lista detallada de cookies utilizadas" }, terms: { title: "Condiciones de Uso", desc: "Nuestros términos y condiciones de servicio" } },
    footer: { updated: "Última actualización:", disclaimer: "Esta página es informativa y no reemplaza el asesoramiento legal profesional.", back: "Volver a avisos legales" }
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
            <br />
            <span className="text-sm mt-2 inline-block">{t.hero.compliance}</span>
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        {t.trust.map((item: any, idx: number) => (
          <div
            key={idx}
            className="p-6 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white shadow-glow">
                {idx === 0 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                {idx === 1 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                {idx === 2 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              </div>
              <h3 className="font-bold">{item.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Privacy Sections */}
      <section className="space-y-6 animate-fade-in">
        {t.sections.map((section: any, idx: number) => (
          <div
            key={section.number}
            className="card-premium shadow-premium hover-lift animate-scale-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="p-8 md:p-10 space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow font-bold text-lg">
                  {section.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4 pl-0 md:pl-16">
                {section.items.map((item: any, itemIdx: number) => (
                  <div key={itemIdx} className="p-5 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {item.subtitle}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact for Privacy */}
      <section className="card-premium shadow-premium-lg p-10 md:p-14 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">{t.contact.title.split(' ').slice(-1)}</span> {t.contact.title.split(' ').slice(0, -1).join(' ')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong border border-primary/30">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:jalwach.co@gmail.com" className="font-mono text-sm md:text-base font-semibold text-primary hover:underline">
              jalwach.co@gmail.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            {t.contact.delay}
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="card-premium shadow-premium p-8 md:p-10 animate-fade-in">
        <h3 className="text-2xl font-bold mb-6 text-center">
          <span className="text-gradient">{t.related.title.split(' ')[1]}</span> {t.related.title.split(' ')[0]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: "/legal/cookies", title: t.related.cookies.title, desc: t.related.cookies.desc, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg> },
            { href: "/legal/terms", title: t.related.terms.title, desc: t.related.terms.desc, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-start gap-4 p-5 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all hover-lift group"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-white transition-all">
                {link.icon}
              </div>
              <div>
                <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{link.title}</h4>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <section className="p-6 rounded-2xl glass border border-border/40 text-center space-y-2 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">{t.footer.updated}</strong> {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xs text-muted-foreground">
          {t.footer.disclaimer}
          {" • "}
          <a href="/legal" className="text-primary hover:underline">{t.footer.back}</a>
        </p>
      </section>
    </div>
  );
}
