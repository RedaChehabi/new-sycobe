# SYCOBE — Refonte du site web

Refonte moderne du site [sycobe.mr](http://sycobe.mr) — société mauritanienne spécialisée en IT & Télécoms depuis 2001.

🔗 **Production** : [new-sycobe.vercel.app](https://new-sycobe.vercel.app)

---

## Stack technique

| Outil                                       | Rôle                                         |
| ------------------------------------------- | -------------------------------------------- |
| [Vue 3](https://vuejs.org/)                 | Framework frontend (Options API)             |
| [Vite 6](https://vitejs.dev/)               | Build tool & dev server                      |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling utilitaire                           |
| [shadcn-vue](https://www.shadcn-vue.com/)   | Composants UI (Button, Card, Input, Select…) |
| [Vue Router v4](https://router.vuejs.org/)  | Routing multi-pages                          |
| [Lucide Vue](https://lucide.dev/)           | Icônes                                       |
| [Vercel](https://vercel.com/)               | Déploiement & CI/CD                          |

---

## Structure du projet

src/
├── components/ # Composants réutilisables
│ ├── ui/ # Composants shadcn-vue
│ ├── NavBar.vue
│ ├── FooterSection.vue
│ └── ContactSection.vue
├── views/ # Pages (une par route)
│ ├── HomePage.vue
│ ├── AboutPage.vue
│ ├── ServicesPage.vue
│ ├── ServiceDetailPage.vue
│ ├── ProjectsPage.vue
│ ├── PartnersPage.vue
│ ├── MikroTikPage.vue
│ ├── ProductDetailPage.vue
│ ├── ContactPage.vue
│ └── NotFoundPage.vue
├── router/
│ └── index.js # Routes & navigation
├── lib/
│ └── utils.js # Utilitaires (cn helper)
├── App.vue
└── main.js
public/
├── logo.png
├── produits/ # Images produits MikroTik
├── services/ # Images services
├── projects/ # Images projets
└── logos/ # Logos partenaires & clients

---

## Pages

| Route             | Page                                                    |
| ----------------- | ------------------------------------------------------- |
| `/`               | Accueil — hero, services, produits, projets, références |
| `/about`          | Présentation de SYCOBE                                  |
| `/services`       | Liste des 4 solutions                                   |
| `/services/:slug` | Détail d'un service                                     |
| `/projects`       | Réalisations & projets                                  |
| `/mikrotik`       | Catalogue produits MikroTik                             |
| `/mikrotik/:slug` | Détail d'un produit                                     |
| `/partenaires`    | Partenaires & références clients                        |
| `/contact`        | Formulaire de contact                                   |

---

## Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/RedaChehabi/new-sycobe.git
cd new-sycobe

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build
```

---

## Contexte

Le site original [sycobe.mr](http://sycobe.mr) était construit sous WordPress avec un thème daté. L'objectif de ce projet était de :

- Moderniser l'interface avec un design clair et professionnel
- Réécrire le frontend en Vue 3 sans backend
- Organiser le contenu en pages dédiées (services, produits, projets, partenaires)
- Déployer sur Vercel avec CI/CD automatique via GitHub

---

## Auteur

**Reda Chehabi** — [github.com/RedaChehabi](https://github.com/RedaChehabi)
