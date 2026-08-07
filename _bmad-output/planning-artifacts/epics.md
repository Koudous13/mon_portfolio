---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
inputDocuments:
  - D:\Projets\Vigie\planning_artifacts\prd-portfolio\prd.md
  - D:\Projets\Vigie\_bmad-output\planning-artifacts\architecture\architecture-Vigie-2026-08-05\ARCHITECTURE-SPINE.md
  - D:\Projets\Vigie\_bmad-output\planning-artifacts\ux-designs\ux-Portfolio-2026-08-05\DESIGN.md
  - D:\Projets\Vigie\_bmad-output\planning-artifacts\ux-designs\ux-Portfolio-2026-08-05\EXPERIENCE.md
---

# Vigie - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Vigie, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Lecteur Vidéo "Scroll-Scrubbing" synchronisé avec le défilement (avancer au scroll bas, reculer au scroll haut)
FR4: Navigation Scrollytelling pour traverser les 13 étapes (de l'Idée à la Solution jusqu'à Rétrospective) avec apparition de cartes en verre dépoli
FR5: Affichage d'une accroche avec typographie géante invitant au scroll
FR6: Bouton d'appel à l'action personnalisé (GEO-Smart) pour contacter ou télécharger le CV à la fin du parcours
FR7: Adaptation mobile gracieuse (vidéos en fond auto-play, cartes empilées verticalement)
FR8: URLs dynamiques synchronisées au scroll (SPA avec Hydratation de l'URL via API History)

### NonFunctional Requirements

NFR1: Edge Computing & Rendu Dynamique via Edge Functions (interception <50ms)
NFR2: Graphe Sémantique SEO via JSON-LD avec schémas `ProfessionalService` et `VideoObject`
NFR3: Fichiers de transcription `.VTT` cachés pour chaque vidéo pour l'indexation SEO
NFR4: Sitemap Vidéo Dédié (XML spécifique)
NFR5: Lazy-Loading vidéo avec miniatures floues `BlurHash` assurant le "Zero-Layout-Shift"
NFR6: Architecture SSG-First (Static Site Generation avec Next.js App Router)
NFR7: Framework d'animation dual (GSAP pour ScrollTrigger/vidéo, Framer Motion pour UI/interactions) avec rendu fluide 120fps et physiques Spring
NFR8: Stockage média (vidéos brutes) externe sur Vercel Blob ou Supabase Storage, Git limité au texte/markdown
NFR9: Contraste d'accessibilité validé malgré le fond en verre
NFR10: GEO-Smart Resume injectant des textes géolocalisés à la volée

### Additional Requirements

- [Architecture] Infrastructure setup: Next.js App Router avec runtime Vercel Edge.
- [Architecture] Infrastructure setup: Configuration du CDN Externe (Supabase Storage ou Vercel Blob) pour l'hébergement des médias lourds.
- [Architecture] Routing/SEO: Mise en place de Vercel Edge Middleware avec `HTMLRewriter` pour injection GEO-SEO dynamique.
- [Architecture] Constraint: RSC-First, Client Components strictement limités aux îles interactives (lecteur GSAP, panneaux).

### UX Design Requirements

UX-DR1: Implémentation du système "Glassmorphism" profond avec `backdrop-filter: blur(24px)`, ombre douce et bordure interne sur les cartes (`components.glassCard`).
UX-DR2: Développement d'un Layout Principal superposé (vidéo plein écran en fond, cartes de contenu flottantes avec padding généreux).
UX-DR3: Implémentation de la typographie géométrique "Inter" avec tracking de -1px pour les titres.
UX-DR5: Implémentation des micro-interactions haptiques visuelles (animations Framer Motion avec Spring Physics).
UX-DR6: Transitions fluides des flous et opacités sans accroc (objectif 120fps percevables).
UX-DR7: Système de couleurs de base (fond dégradé très léger `#fdfbfb` à `#ebedee`).

### FR Coverage Map

FR1: Epic 2 - Lecteur Vidéo "Scroll-Scrubbing"
FR4: Epic 2 - Navigation Scrollytelling pour les 13 étapes
FR5: Epic 1 - Affichage de l'accroche typographique
FR6: Epic 1 - Bouton Call-to-Action GEO-Smart
FR7: Epic 2 - Adaptation mobile gracieuse
FR8: Epic 1 - URLs dynamiques au scroll

## Epic List

### Epic 1: Fondation de l'Expérience & Conversion (Foundation & Hook)
Offrir une entrée impactante dans le portfolio avec une accroche typographique forte, un routage fluide au scroll, et une conclusion personnalisée (GEO-Smart) permettant à la recruteuse de télécharger le CV ou de prendre contact facilement.
**FRs covered:** FR5, FR6, FR8

### Epic 2: Scrollytelling & Navigation Vidéo (Core Experience)
Permettre à l'utilisatrice de découvrir l'intégralité du processus (les 13 étapes) sans aucun clic. Le défilement de la page révèle des cartes en "Glassmorphism" et pilote le lecteur vidéo en arrière-plan (Scroll-Scrubbing), avec une adaptation gracieuse pour le mobile.
**FRs covered:** FR1, FR4, FR7

## Epic 1: Fondation de l'Expérience & Conversion (Foundation & Hook)

Offrir une entrée impactante dans le portfolio avec une accroche typographique forte, un routage fluide au scroll, et une conclusion personnalisée (GEO-Smart) permettant à la recruteuse de télécharger le CV ou de prendre contact facilement.

### Story 1.1: Setup Initial & Architecture Edge

As a Technical Architect,
I want to initialize the Next.js App Router on Vercel Edge with global CSS tokens,
So that the core substrate of the application is ready for subsequent features.

**Acceptance Criteria:**

**Given** a new repository
**When** the development environment is set up
**Then** it runs Next.js >=14 with App Router
**And** it is configured to use Vercel Edge runtime for middleware
**And** the global CSS includes the Inter font, background gradient `#fdfbfb` to `#ebedee`

### Story 1.2: L'Accroche Visuelle (The Hook)

As a Visitor (Recruiter),
I want to see a striking hero section with giant typography and a clear invitation to scroll,
So that I understand the value proposition immediately without navigating a menu.

**Acceptance Criteria:**

**Given** the user lands on the root URL
**When** the page loads
**Then** they see a full-screen hero layout
**And** the main typography has a -1px tracking and uses the Inter font
**And** there is a visual indicator inviting them to scroll downwards

### Story 1.3: Routage Dynamique au Scroll (SPA Hydration)

As a Visitor,
I want the URL to update dynamically as I scroll down the page,
So that I can bookmark or share specific steps of the process without clicking links.

**Acceptance Criteria:**

**Given** the user is scrolling the main page
**When** they enter a new logical section (e.g., Step 1)
**Then** the browser URL updates (e.g., `/etape/01`) without a page reload
**And** the browser back/forward buttons correctly navigate through these steps

### Story 1.4: Call-to-Action "GEO-Smart"

As a Visitor,
I want to see a personalized call-to-action based on my location at the bottom of the page,
So that I feel a direct, tailored connection when deciding to download the CV.

**Acceptance Criteria:**

**Given** a user accesses the portfolio from Paris
**When** they scroll to the final CTA section
**Then** the Vercel Edge Middleware detects the location
**And** the server-rendered HTML displays a personalized text (e.g., "Disponible à Paris")
**And** a clear button is provided to download the CV or contact the author

<!-- Repeat for each epic in epics_list (N = 2, 3...) -->

## Epic 2: Scrollytelling & Navigation Vidéo (Core Experience)

Permettre à l'utilisatrice de découvrir l'intégralité du processus (les 13 étapes) sans aucun clic. Le défilement de la page révèle des cartes en "Glassmorphism" et pilote le lecteur vidéo en arrière-plan (Scroll-Scrubbing), avec une adaptation gracieuse pour le mobile.

### Story 2.1: Lecteur Vidéo "Scroll-Scrubbing" (Le Cœur Technique)

As a Visitor,
I want the background video to advance or reverse precisely as I scroll,
So that I feel in complete control of the narrative pacing without clicking play.

**Acceptance Criteria:**

**Given** the user is on the scrollytelling timeline
**When** the user scrolls down
**Then** the video playback advances synchronously via GSAP ScrollTrigger
**And** scrolling up reverses the video playback smoothly
**And** the video displays a lightweight `BlurHash` placeholder until the first frame is fully loaded to prevent Zero-Layout-Shift

### Story 2.2: Composant UI "Glassmorphism" (La Couche Visuelle)

As a Technical Recruiter,
I want to read content on highly legible, elegantly frosted cards,
So that I experience a premium, distraction-free reading environment over dynamic videos.

**Acceptance Criteria:**

**Given** a content section on the timeline
**When** the section comes into view
**Then** a card appears using Framer Motion spring physics
**And** the card has a `backdrop-filter: blur(24px)`, a subtle internal border, and a soft shadow
**And** the text contrast ratio remains accessible against the frosted background

### Story 2.3: La Ligne de Temps (Intégration des 13 Étapes)

As a Visitor,
I want to seamlessly transition between the 13 steps of Koudous's process,
So that I understand the full lifecycle of his engineering approach.

**Acceptance Criteria:**

**Given** the complete dataset of the 13 steps
**When** the user scrolls through the entire page
**Then** each step sequentially triggers its respective video and glass card
**And** a hidden `.VTT` file is associated and injected in the DOM for each video to ensure Google indexation
**And** the transition between steps avoids jarring layout jumps

### Story 2.4: Résilience Mobile & Tactile (Graceful Degradation)

As a Mobile Visitor,
I want an optimized viewing experience on my phone,
So that I can still appreciate the portfolio without the awkwardness of touch-based video scrubbing.

**Acceptance Criteria:**

**Given** a user accesses the site from a mobile device (viewport < 768px)
**When** they view the timeline
**Then** videos loop automatically in the background instead of being bound to scroll
**And** the glass cards stack vertically


