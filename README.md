# 💻 Portfolio Personnel Moderne

Bienvenue sur le code source de mon **Portfolio Personnel**, conçu en **HTML5, CSS3 et JavaScript** selon l'ensemble des spécifications du cahier des charges.

Ce projet présente mon parcours académique, mes expériences professionnelles et stages, mes compétences clés, mes projets par domaine, mes attestations obtenues, mes passions ainsi que mes événements technologiques.

---

## 🚀 Fonctionnalités Principales

- **Interface Moderne & Responsive** : Conçue pour offrir un affichage optimal sur smartphones, tablettes, laptops et écrans larges.
- **Thème Sombre & Thème Clair (Dark / Light Mode)** : Bouton interactif dans la barre de navigation avec sauvegarde de la préférence dans `localStorage`.
- **Composants Communs Unifiés (`js/components.js`)** :
  - Navbar identique et dynamique sur toutes les pages avec détection de page active et menu burger mobile.
  - Footer complet identique avec liens de navigation, réseaux sociaux et copyright dynamique.
- **Section Photo Personnalisable** : Intégrée dès la section d'accueil avec effet lumineux et badges d'activité.
- **Trois Grandes Cartes de Compétences** redirigeant vers des pages dédiées :
  - 🎨 **Design Graphique** (`projets-design.html`)
  - 🎬 **Montage Vidéo** (`projets-video.html`)
  - 💻 **Développement Web** (`projets-web.html`)
- **Technologies & Langages Mis en Valeur** : Logos officiels et jauges pour HTML, CSS, JavaScript, PHP et Java.
- **Système de Modale / Lightbox Haute Résolution** : Pour examiner les attestations et créations graphiques en grand écran d'un simple clic.
- **Formulaire de Contact avec Validation Interactive** : Vérification en temps réel des champs (nom, email, sujet, message) et notifications toast.

---

## 🗂️ Structure du Projet

```text
portfolio/
│
├── index.html                  # 🏠 Page Accueil (Photo, Scolaire, Pro, Passions, Événements)
├── competences.html            # 💻 Page Compétences (3 Card Boxes + Logos Technologies)
├── projets-design.html         # 🎨 Projets de Design Graphique (Filtres & Lightbox)
├── projets-video.html          # 🎬 Projets de Montage Vidéo (Détails & Visionnage)
├── projets-web.html            # 🌐 Projets de Dév Web (Captures, Tags, Démos & GitHub)
├── attestations.html           # 📜 Page Attestations & Certifications (Zoom HD)
├── contact.html                # 📩 Page Contact (Formulaire & Coordonnées / Réseaux)
│
├── css/
│   └── styles.css              # Feuille de styles moderne, responsive & thèmes
│
├── js/
│   ├── components.js           # Navbar, Footer, Thème Sombre/Clair, Modale Globale
│   └── main.js                 # Validation du formulaire, filtres des projets
│
├── images/
│   ├── profil/                 # Photo de profil (ma-photo.jpg / ma-photo.svg)
│   ├── projets/                # Visuels des projets (Design, Vidéo, Web)
│   ├── attestations/           # Certificats et attestations
│   ├── evenements/             # Visuels des conférences et hackathons
│   └── logos/                  # Logos (HTML5, CSS3, JS, PHP, Java, Réseaux)
│
└── README.md
```

---

## 📸 Comment ajouter votre propre photo ?

Dans le dossier `images/profil/` :
1. Déposez votre photo en la nommant `ma-photo.jpg` (ou remplacez le chemin dans `index.html`).
2. La page d'accueil affiche automatiquement votre photo.
3. Si le fichier n'est pas trouvé ou en cours de chargement, l'avatar stylisé `ma-photo.svg` s'affiche automatiquement en secours sans casser l'affichage.

---

## 🔧 Comment personnaliser vos coordonnées & réseaux ?

1. **Réseaux sociaux globaux & Footer** :
   Modifiez l'objet `PORTFOLIO_CONFIG` dans [components.js](file:///C:/Users/DELL/.gemini/antigravity/scratch/portfolio/js/components.js) pour mettre à jour vos liens GitHub, LinkedIn, TikTok, Facebook et WhatsApp.

2. **Page Contact** :
   Mettez à jour vos coordonnées (téléphone, email, ville) dans [contact.html](file:///C:/Users/DELL/.gemini/antigravity/scratch/portfolio/contact.html).

---

## 🌐 Comment lancer le portfolio ?

- **Double-cliquez** simplement sur `index.html` pour l'ouvrir dans votre navigateur web préféré (Chrome, Edge, Firefox, etc.).
- Ou utilisez un serveur local (Live Server sous VS Code, ou commande Python) :
  ```bash
  python -m http.server 3000
  ```
  Puis ouvrez `http://localhost:3000` dans votre navigateur.
