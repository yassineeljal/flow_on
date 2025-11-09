# 🚀 FlowOn - Site Web Moderne & Performant

Site web multilingue Next.js 14+ avec i18n, animations, PWA et toutes les fonctionnalités modernes.

## ✨ Fonctionnalités

### 🎨 UI/UX
- ✅ Design moderne avec Tailwind CSS 4
- ✅ Mode sombre / clair / système
- ✅ Animations fluides avec Framer Motion
- ✅ Composants réutilisables avec shadcn/ui
- ✅ Loading skeletons pour une meilleure UX
- ✅ Bouton "Scroll to Top" animé
- ✅ Page 404 personnalisée et animée
- ✅ Navigation responsive avec menu mobile

### 🌍 Internationalisation
- ✅ Support multilingue (FR, EN, ES)
- ✅ Routing automatique par locale
- ✅ Traductions avec next-intl
- ✅ Sélecteur de langue

### 🔒 Sécurité
- ✅ Rate limiting sur l'API contact (3 req/15min)
- ✅ Protection hCaptcha sur le formulaire
- ✅ Validation des données avec Zod
- ✅ Headers de sécurité (CSP, X-Frame-Options, etc.)
- ✅ Variables d'environnement sécurisées

### 📧 Formulaire de Contact
- ✅ Validation côté client et serveur
- ✅ Protection anti-spam (rate limiting + captcha)
- ✅ Envoi d'emails avec Resend
- ✅ Notifications toast élégantes avec Sonner
- ✅ États de chargement et feedback utilisateur

### 🎯 SEO & Performance
- ✅ Métadonnées optimisées par page
- ✅ Sitemap.xml dynamique
- ✅ Robots.txt configuré
- ✅ Open Graph & Twitter Cards
- ✅ Core Web Vitals optimisés
- ✅ Images optimisées avec next/image
- ✅ Fonts optimisées

### 📱 PWA (Progressive Web App)
- ✅ Service Worker configuré
- ✅ Manifest.json complet
- ✅ Mode offline fonctionnel
- ✅ Installable sur mobile et desktop
- ✅ Cache stratégique pour performance

### 📄 Pages Légales
- ✅ Mentions légales
- ✅ Politique de confidentialité (RGPD)
- ✅ Conditions générales (CGV/CGU)
- ✅ Politique des cookies
- ✅ Consentement cookies

## 🛠️ Stack Technique

- **Framework:** Next.js 14+ (App Router)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **i18n:** next-intl
- **Forms:** React Hook Form + Zod
- **Emails:** Resend
- **Notifications:** Sonner
- **Captcha:** hCaptcha
- **PWA:** next-pwa
- **Icons:** Lucide React

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/yassineeljal/flow_on.git
cd flow_on

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Configurer les variables d'environnement
# Éditer .env.local avec vos clés API
```

## 🔑 Variables d'Environnement

Créez un fichier `.env.local` avec les variables suivantes :

```env
# API Keys
RESEND_API_KEY=your_resend_api_key
LEADS_TO=your_email@example.com

# hCaptcha
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key
HCAPTCHA_SECRET=your_hcaptcha_secret

# Site
NEXT_PUBLIC_SITE_URL=https://flowon.example.com
```

### Comment obtenir les clés :

1. **Resend API Key** : [resend.com](https://resend.com)
2. **hCaptcha Keys** : [hcaptcha.com](https://www.hcaptcha.com)

## 🚀 Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🏗️ Build & Production

```bash
# Build de production
npm run build

# Lancer en production
npm start
```

## 📁 Structure du Projet

```
flow_on/
├── app/
│   ├── [locale]/           # Pages localisées
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Page d'accueil
│   │   ├── not-found.tsx   # Page 404
│   │   ├── about/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── pricing/
│   │   ├── faq/
│   │   └── legal/
│   ├── api/
│   │   └── contact/        # API route contact
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Sitemap.xml
├── components/
│   ├── animations.tsx      # Composants d'animation
│   ├── contact-form.tsx    # Formulaire de contact
│   ├── scroll-to-top.tsx   # Bouton scroll
│   ├── navigation.tsx
│   ├── theme-toggle.tsx
│   └── ui/                 # Composants UI
│       ├── button.tsx
│       ├── card.tsx
│       ├── skeleton.tsx
│       └── ...
├── lib/
│   ├── utils.ts
│   └── rate-limit.ts       # Rate limiting
├── messages/
│   ├── fr.json
│   ├── en.json
│   └── es.json
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── public/
│   ├── manifest.json       # PWA manifest
│   └── logo.png
└── ...
```

## 🎨 Composants d'Animation

### Utilisation

```tsx
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";

// Fade In avec délai
<FadeIn delay={0.2}>
  <h1>Mon titre</h1>
</FadeIn>

// Scale In
<ScaleIn delay={0.3}>
  <Card>...</Card>
</ScaleIn>

// Stagger (animations en cascade)
<StaggerContainer>
  <StaggerItem><Card>1</Card></StaggerItem>
  <StaggerItem><Card>2</Card></StaggerItem>
  <StaggerItem><Card>3</Card></StaggerItem>
</StaggerContainer>
```

## 🔐 Rate Limiting

Le rate limiting est configuré sur l'API `/api/contact` :
- **Limite:** 3 requêtes par 15 minutes par IP
- **Réponse:** 429 Too Many Requests avec temps d'attente

## 📱 PWA

Le site est installable comme application :
- **Desktop:** Icône "Installer" dans la barre d'adresse
- **Mobile:** "Ajouter à l'écran d'accueil"
- **Offline:** Le site fonctionne hors ligne grâce au Service Worker

## 🌐 Ajouter une Langue

1. Ajouter le code langue dans `i18n/routing.ts` :
```typescript
export const routing = {
  locales: ['fr', 'en', 'es', 'de'], // Ajouter 'de'
  defaultLocale: 'fr'
};
```

2. Créer `messages/de.json` avec les traductions

3. Rebuild le projet

## 🎯 Optimisations Appliquées

- ✅ Code splitting automatique
- ✅ Images lazy loading
- ✅ Fonts preload
- ✅ CSS critical path optimisé
- ✅ Bundle size optimisé
- ✅ Server Components par défaut
- ✅ Static generation où possible

## 📊 Performance

Scores Lighthouse attendus :
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📝 License

Ce projet est sous licence MIT.

## 🆘 Support

Pour toute question ou problème :
- **Email:** jalwach.co@gmail.com
- **Issues:** [GitHub Issues](https://github.com/yassineeljal/flow_on/issues)

## 🎉 Fonctionnalités Futures

- [ ] Blog avec MDX
- [ ] Dashboard admin
- [ ] Analytics intégré
- [ ] Tests E2E (Playwright)
- [ ] CI/CD avec GitHub Actions
- [ ] Monitoring avec Sentry
- [ ] A/B Testing

---

Fait avec ❤️ par **FlowOn**
