# Guide de déploiement FlowOn

## Option 1 : Déployer sur Vercel (RECOMMANDÉ - Gratuit)

### Étape 1 : Préparer le projet
```bash
git add .
git commit -m "Préparation pour production"
git push
```

### Étape 2 : Déployer sur Vercel
1. Allez sur https://vercel.com
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez votre repository `flow_on`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

### Étape 3 : Configurer les variables d'environnement
Dans Vercel, allez dans Settings > Environment Variables et ajoutez :

```
NEXT_PUBLIC_SITE_URL=https://votre-app.vercel.app
RESEND_API_KEY=votre_clé_resend
FROM_EMAIL=noreply@votre-app.vercel.app
LEADS_TO=jalwach.co@gmail.com
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=votre_clé_hcaptcha
HCAPTCHA_SECRET=votre_secret_hcaptcha
```

### Étape 4 : Redéployer
Après avoir ajouté les variables, cliquez sur "Redeploy" pour que les changements prennent effet.

### Étape 5 : Domaine personnalisé (optionnel)
Une fois que vous aurez un nom de domaine :
1. Allez dans Settings > Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS
4. Mettez à jour NEXT_PUBLIC_SITE_URL avec votre nouveau domaine

## Option 2 : Déployer sur Netlify

1. Allez sur https://netlify.com
2. "Add new site" > "Import an existing project"
3. Connectez votre repository GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Ajoutez les variables d'environnement

## Configuration Resend (pour les emails)

1. Créez un compte sur https://resend.com (gratuit)
2. Obtenez votre API key
3. Si vous n'avez pas de domaine, utilisez le domaine de test de Resend

## Configuration hCaptcha (anti-spam)

1. Créez un compte sur https://www.hcaptcha.com/ (gratuit)
2. Créez un nouveau site avec votre URL Vercel
3. Récupérez vos clés (Site Key et Secret)

## Après le déploiement

- [ ] Testez le formulaire de contact
- [ ] Testez sur mobile
- [ ] Vérifiez le favicon
- [ ] Testez les 3 langues (FR, EN, ES)
- [ ] Vérifiez Google Lighthouse (Performance, SEO, etc.)

## Domaine personnalisé (plus tard)

Quand vous aurez un domaine :
1. Achetez un domaine (Namecheap, OVH, etc.)
2. Ajoutez-le dans Vercel/Netlify
3. Configurez les DNS
4. Mettez à jour NEXT_PUBLIC_SITE_URL
5. Configurez Resend avec votre domaine pour les emails
