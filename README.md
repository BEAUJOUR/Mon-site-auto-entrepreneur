# BJD-HOME-PRO

Site vitrine de BJD-HOME-PRO, artisan specialise en agencement interieur, menuiserie sur mesure, travaux de finition et metrage TCE.

Le projet est une application React basee sur Create React App, stylisee avec Tailwind CSS, et deployee depuis GitHub vers OVH.

## Stack

- React 18
- Create React App / react-scripts
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

## Pages actives

- `/` : accueil
- `/about` : presentation
- `/services` : services
- `/projets` : realisations
- `/contact` : formulaire et coordonnees
- `/estimation-projet` : landing page Ads avec formulaire multi-etapes

Toute route inconnue revient vers l'accueil.

## SEO actuel

Le site contient :

- un `robots.txt` ;
- un `sitemap.xml` limite aux pages actives ;
- des balises meta principales dans `public/index.html` ;
- des balises Open Graph et Twitter ;
- un bloc Schema.org pour l'activite.

Les anciennes pages SEO locales et idees Google Ads / Meta Ads non utilisees ont ete retirees du projet actif.

## Commandes

Installer les dependances :

```bash
npm install
```

Lancer le site en developpement :

```bash
npm start
```

Construire la version production :

```bash
npm run build
```

Lancer les tests :

```bash
npm test -- --watchAll=false
```

## Deploiement

Le site est deploye via un flux GitHub vers OVH. Le dossier genere par `npm run build` contient la version production a servir.

## Prochaines evolutions prevues

- Ajouter de nouvelles landing pages dediees Google Ads / Meta Ads.
- Garder le site vitrine actuel stable pendant l'ajout des pages publicitaires.
- Eviter de reactiver les anciennes pages SEO locales abandonnees.
- Connecter plus tard le formulaire d'estimation a `POST /api/public/leads`.
