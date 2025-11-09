# 🚀 Guide de Démarrage Rapide - FlowOn

## ⚡ Installation en 5 Minutes

### 1. Prérequis
- Node.js 18+ installé
- npm ou yarn
- Un éditeur de code (VS Code recommandé)

### 2. Installation

```bash
# Cloner et accéder au dossier
cd flow_on

# Installer les dépendances
npm install
```

### 3. Configuration des Variables d'Environnement

Créez un fichier `.env.local` à la racine :

```env
# ===== OBLIGATOIRE pour le formulaire de contact =====
RESEND_API_KEY=re_votre_clé_resend
LEADS_TO=votre_email@exemple.com

# ===== OBLIGATOIRE pour le captcha =====
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=votre_site_key
HCAPTCHA_SECRET=votre_secret_key

# ===== Configuration du site =====
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### 🔑 Comment obtenir vos clés ?

##### Resend (Emails)
1. Allez sur https://resend.com
2. Créez un compte gratuit
3. Cliquez sur "API Keys"
4. Générez une nouvelle clé
5. Copiez la clé dans `RESEND_API_KEY`

##### hCaptcha (Anti-spam)
1. Allez sur https://www.hcaptcha.com
2. Créez un compte
3. Cliquez sur "New Site"
4. Entrez votre domaine (ou localhost pour dev)
5. Copiez :
   - **Site Key** → `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`
   - **Secret Key** → `HCAPTCHA_SECRET`

> **💡 Astuce Dev** : Pour tester en local sans vraies clés, utilisez :
> ```env
> NEXT_PUBLIC_HCAPTCHA_SITE_KEY=10000000-ffff-ffff-ffff-000000000001
> HCAPTCHA_SECRET=0x0000000000000000000000000000000000000000
> ```

### 4. Lancer le Projet

```bash
# Mode développement
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur 🎉

---

## 🎯 Fonctionnalités Activées

### ✅ Ce qui fonctionne immédiatement :

1. **Navigation multilingue** (FR, EN, ES)
   - Changez de langue avec le sélecteur en haut à droite

2. **Mode sombre / clair**
   - Utilisez le toggle thème en haut à droite

3. **Toutes les pages**
   - Accueil, Services, Tarifs, À propos, Contact, FAQ, Légal

4. **Animations**
   - Scroll pour voir les animations Framer Motion

5. **Page 404**
   - Essayez d'accéder à une page inexistante

6. **Scroll to Top**
   - Scrollez vers le bas, un bouton apparaît

### 🔐 Nécessite Configuration :

1. **Formulaire de contact**
   - Configure `RESEND_API_KEY` et `LEADS_TO`
   - Configure les clés hCaptcha

2. **PWA (mode offline)**
   - Fonctionne automatiquement en production
   - Désactivé en développement

---

## 📱 Tester le PWA

```bash
# Build de production
npm run build

# Lancer en production
npm start
```

Puis :
1. Ouvrez http://localhost:3000
2. Cherchez l'icône "Installer" dans la barre d'adresse
3. Cliquez pour installer l'app

---

## 🧪 Tester les Fonctionnalités

### Rate Limiting
1. Allez sur `/contact`
2. Remplissez le formulaire
3. Envoyez 4 fois rapidement
4. Le 4ème envoi sera bloqué

### Toast Notifications
1. Remplissez le formulaire de contact
2. Regardez les toasts en haut à droite :
   - Toast de chargement
   - Toast de succès/erreur

### Animations
1. Allez sur la page d'accueil
2. Scrollez lentement
3. Observez les animations d'apparition

### Page 404
1. Allez sur une URL inexistante : `/page-qui-nexiste-pas`
2. Admirez l'animation 404

### Scroll to Top
1. Sur n'importe quelle page
2. Scrollez vers le bas
3. Un bouton apparaît en bas à droite
4. Cliquez pour remonter en douceur

---

## 🎨 Personnalisation Rapide

### Changer les Couleurs

Éditez `app/[locale]/layout.tsx` (lignes ~100-150) :

```css
:root {
  --primary: 218 70% 45%;  /* Votre couleur principale */
  --success: 149 55% 45%;  /* Couleur de succès */
  --warning: 42 90% 55%;   /* Couleur d'avertissement */
}
```

### Modifier le Contenu

1. **Textes** : `messages/fr.json`, `messages/en.json`, etc.
2. **Pages** : Dossier `app/[locale]/`
3. **Composants** : Dossier `components/`

### Changer le Logo

Remplacez `public/logo.png` par votre logo (192x192 minimum)

---

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Suivre les instructions
```

Ajoutez vos variables d'environnement dans le dashboard Vercel.

### Netlify

1. Connectez votre repo GitHub
2. Build command : `npm run build`
3. Publish directory : `.next`
4. Ajoutez vos variables d'environnement

### Autres Plateformes

Le projet fonctionne sur n'importe quelle plateforme supportant Next.js :
- Railway
- Render
- AWS
- Azure
- Google Cloud

---

## 📚 Documentation Complète

Pour plus de détails, consultez :
- **README.md** - Documentation complète
- **IMPLEMENTATION.md** - Détails techniques des fonctionnalités

---

## 🆘 Problèmes Courants

### "Cannot find module" pendant le build
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Le formulaire ne s'envoie pas
- Vérifiez `RESEND_API_KEY` dans `.env.local`
- Vérifiez que l'email dans `LEADS_TO` est valide
- Regardez les logs du terminal

### Le captcha ne s'affiche pas
- Vérifiez `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` dans `.env.local`
- Redémarrez le serveur de dev : `npm run dev`

### Les animations ne fonctionnent pas
- Vérifiez que framer-motion est installé : `npm list framer-motion`
- Videz le cache : `rm -rf .next`

### Le PWA ne fonctionne pas
- Le PWA est désactivé en développement
- Faites un build de production : `npm run build && npm start`
- Testez sur https:// (requis pour les Service Workers)

---

## 💡 Tips pour Bien Démarrer

1. **Commencez par le contenu**
   - Personnalisez `messages/fr.json`
   - Modifiez les textes de la page d'accueil

2. **Ajustez le design**
   - Changez les couleurs dans `layout.tsx`
   - Modifiez le logo dans `public/`

3. **Configurez les emails**
   - Obtenez une clé Resend
   - Testez le formulaire de contact

4. **Testez en production**
   - `npm run build && npm start`
   - Vérifiez le PWA
   - Testez les performances

5. **Déployez**
   - Vercel est le plus simple
   - Configurez les variables d'environnement
   - Testez le site en ligne

---

## 🎉 Et Voilà !

Votre site est prêt ! Toutes les fonctionnalités modernes sont activées :
- ✅ Animations fluides
- ✅ Toast notifications
- ✅ Rate limiting
- ✅ Captcha anti-spam
- ✅ PWA mode offline
- ✅ Page 404 design
- ✅ Scroll to top
- ✅ Loading skeletons

**Bon développement ! 🚀**

---

Des questions ? Consultez la documentation complète dans README.md ou créez une issue sur GitHub.
