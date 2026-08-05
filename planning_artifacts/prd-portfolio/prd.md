---
title: Portfolio Koudous - Web App Showcase
status: final
created: 2026-08-05
updated: 2026-08-05
---

# PRD : Portfolio Koudous "The Process"

## 1. Aperçu du Produit (Product Overview)
Un site portfolio personnel interactif, conçu en Light Mode (Design 2030, Glassmorphism, Typographie audacieuse), ultra-optimisé SEO/GEO. 
**Objectif principal :** Démontrer aux recruteurs techniques et RH l'expertise complète "Architecte Full Stack × IA" de Koudous à travers une masterclass vidéo interactive qui retrace la création d'une application de A à Z.

## 2. Parcours Utilisateur (User Journey)
*Ce portfolio est conçu pour être vécu comme une histoire (Scrollytelling).*

**Protagoniste :** Sarah, Recruteuse technique / CTO. Elle a peu de temps et cherche des profils rares capables de gérer un projet logiciel complet de bout en bout (Architecture, Code, Déploiement, IA).

1. **Atterrissage (L'Accroche) :** Sarah arrive sur une page d'accueil d'un blanc pur. Une typographie géante et élégante annonce la proposition de valeur de Koudous. Aucun menu complexe, juste une invitation visuelle à scroller vers le bas le long d'une "ligne de temps" centrale.
2. **Étape 0 : De l'Idée à la Solution (Le Déclic) :** Le premier arrêt de l'ascenseur virtuel. Une vidéo (en autoplay silencieux, avec sous-titres esthétiques) montre Koudous identifiant un problème concret et concevant la solution. Cela prouve son esprit produit et analytique avant même d'écrire une ligne de code.
3. **L'Ascension (Les 13 Étapes BMad) :** En continuant de scroller, Sarah traverse les 13 étapes du cycle de développement logiciel (du PRD jusqu'au déploiement et tests de sécurité).
   - *Interaction :* Pour chaque étape, une carte en verre dépoli (*Glassmorphism*) apparaît en douceur.
   - *Média :* Une courte capsule vidéo de l'étape correspondante s'anime en arrière-plan ou dans un lecteur minimaliste, montrant Koudous en action (code, architecture, prompts IA).
4. **Conclusion & Call-to-Action :** Tout en bas de la ligne de temps, après l'étape de Rétrospective, Sarah découvre un résumé percutant des compétences de Koudous (SaaS, RAG, React, Python) et un bouton ultra-visible pour le contacter ou télécharger son CV complet.

## 3. Fonctionnalités Clés (Features)
1. **Lecteur Vidéo "Scroll-Scrubbing" :** La lecture des vidéos d'illustration des 13 étapes est entièrement synchronisée avec le défilement (scroll) de l'utilisateur. Le scroll vers le bas fait avancer la vidéo, le scroll vers le haut la recule, offrant un contrôle absolu sans aucun clic.
2. **Deep Dive Panels Interactifs :** Des panneaux latéraux complètent les vidéos. Ils ne contiennent pas que du texte, mais des diagrammes d'architecture et des extraits de code. Un survol (hover) sur une ligne de code met en évidence l'instant précis de la vidéo où ce code est écrit.
3. **GEO-Smart Resume (Personnalisation par Géolocalisation) :** Le site détecte la localisation approximative du recruteur et adapte dynamiquement les appels à l'action (ex: "Prêt à rejoindre votre équipe à Paris ou en full-remote"). Le PDF du CV généré peut également inclure une page de garde ciblée.

## 4. Exigences Non-Fonctionnelles (Performances, SEO, GEO)
Pour atteindre l'objectif de "10000% SEO/GEO", le projet implémentera les stratégies techniques d'avant-garde (2025-2030) suivantes :

### A. Architecture "Edge GEO-SEO"
- **Edge Computing & Rendu Dynamique :** Utilisation d'Edge Functions (ex: Vercel/Cloudflare) pour intercepter les requêtes en moins de 50ms et injecter des balises meta hyper-locales (ex: `Architecte IA disponible à [Ville du visiteur]`).
- **Graphe Sémantique (JSON-LD) :** Injection d'un graphe de connaissances massif combinant les schémas `ProfessionalService` (pour l'entité Koudous) et `VideoObject` (pour chaque vidéo des 13 étapes). Google comprendra l'affiliation académique (Evry Paris-Saclay) et les compétences exactes.

### B. SEO Vidéo & Intelligence Artificielle
- **Transcription Textuelle & Chapitrage :** Chaque vidéo aura un fichier `.VTT` caché pour le SEO, permettant aux moteurs de recherche et aux IA (comme ChatGPT/Perplexity) de "lire" le contenu des 13 étapes.
- **Sitemap Vidéo Dédié :** Un fichier XML spécifique soumis à Google pour forcer l'indexation ultra-rapide des 14 capsules vidéos.

### C. Performance Extrême (Score Lighthouse 100/100)
- **Lazy-Loading avec "BlurHash" :** Puisque le site est très lourd en vidéos (Scrollytelling), aucune vidéo n'est chargée au démarrage. Seules des miniatures floutées ultra-légères sont affichées. La vraie vidéo n'est requise via un CDN que quelques millisecondes avant qu'elle n'entre dans le champ de vision (*Zero-Layout-Shift* garanti).

## 5. Gestion des Données (Data Management)
- **Stockage des métadonnées et contenus :** Fichiers statiques (JSON/Markdown) hébergés directement dans le dépôt du projet. 
- **Rationnel :** Le contenu (vidéos des 13 étapes) étant immuable une fois le portfolio publié, cette approche élimine les requêtes de base de données, accélère drastiquement les temps de rendu statique (SSG) et réduit les dépendances d'infrastructure.

## 6. Règles de Contribution (Git & CI/CD)
Pour refléter une ingénierie de niveau Senior :
- **Trunk-Based Development :** Les développements se font sur des branches très courtes mergées via *Squash and Merge*.
- **Conventional Commits :** Obligation d'utiliser la nomenclature sémantique (ex: `feat:`, `fix:`, `refactor:`) pour l'historique et l'automatisation.
- **CI/CD Exigée :** Validation via GitHub Actions (Linting, Tests, CodeQL) avant tout déploiement sur la branche `main`.
