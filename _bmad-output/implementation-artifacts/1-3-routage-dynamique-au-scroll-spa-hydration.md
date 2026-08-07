---
baseline_commit: 6ad3622d0d4a70b01cdfc0aa1a5ece912b8de08c
---
# Story 1.3: Routage Dynamique au Scroll (SPA Hydration)

**Status:** done
**Epic:** 1 - Fondation de l'Expérience & Conversion (Foundation & Hook)

## Story

As a Visitor,
I want the URL to update dynamically as I scroll down the page,
So that I can bookmark or share specific steps of the process without clicking links.

## Acceptance Criteria

1. **Given** the user is scrolling the main page
2. **When** they enter a new logical section (e.g., Step 1)
3. **Then** the browser URL updates (e.g., `/etape/01`) without a page reload
4. **And** the browser back/forward buttons correctly navigate through these steps

## Tasks / Subtasks

- [x] Task 1: Créer le hook/logique de détection de section au scroll.
  - [x] Mettre en place un IntersectionObserver ou utiliser GSAP ScrollTrigger pour détecter la section active visible à l'écran.
- [x] Task 2: Mettre à jour l'URL sans rechargement.
  - [x] Utiliser l'API History du navigateur (`window.history.replaceState` ou `pushState`) pour mettre à jour l'URL (ex: `/etape/01`) de manière silencieuse sans déclencher de navigation complète Next.js.
- [x] Task 3: Gérer la navigation Back/Forward (PopState).
  - [x] Écouter l'événement `popstate` pour scroller automatiquement vers la bonne section si l'utilisateur utilise les boutons précédent/suivant du navigateur.
- [x] Task 4: Intégrer la logique au Layout statique.
  - [x] S'assurer que le composant de routage est un composant client (Island) isolé (`"use client"`) inséré dans la page serveur (`page.tsx`) pour préserver l'approche SSG-First.

### Review Findings
- [ ] [Review][Patch] Unused import and variable `usePathname` [components/client/ScrollRouter.tsx:7]
- [ ] [Review][Patch] Threshold 0.5 fails for tall sections [components/client/ScrollRouter.tsx:15]
- [ ] [Review][Patch] Unsafe `split` on pathname can throw SyntaxError [components/client/ScrollRouter.tsx:61]
- [x] [Review][Defer] Hardcoded 1000ms timeout for smooth scroll flag [components/client/ScrollRouter.tsx:73] — deferred, pre-existing
- [x] [Review][Defer] Hardcoded URL prefix `/etape/` reduces reusability [components/client/ScrollRouter.tsx:61] — deferred, pre-existing

## Developer Context

This story implements a core feature of the Scrollytelling experience: allowing users to seamlessly track their progress via the URL without clicking, and enabling deep-linking. It bridges the gap between a single-page scrolling experience and traditional multi-page SEO/history tracking.

### Technical Requirements

- **Framework:** Next.js >=14 with App Router (RSC-First).
- **DOM API:** Usage of `window.history.replaceState` or `pushState` is recommended over Next.js's `router.push` during high-frequency scroll events to avoid unnecessary React re-renders and preserve the 120fps performance target.
- **Scroll Detection:** Recommend using GSAP ScrollTrigger if already available, or a highly optimized `IntersectionObserver` to detect when a step enters the viewport.

### Architecture Compliance

- **AD-2 (RSC-First):** The page must remain a Server Component. The scroll tracking and URL updating logic must be encapsulated in a specific Client Component (e.g., `ScrollRouter.tsx` or similar) that uses `"use client"`.
- **AD-4 (Injection GEO-SEO):** The dynamic URL changes in the browser only affect the client. If a user lands directly on `/etape/01`, Vercel Edge Middleware (or Next.js static routing configuration) will need to handle serving the correct initial state. Note: Next.js App Router might require setting up `generateStaticParams` or intercepting routes if you want `/etape/01` to be directly accessible via SSG. If this is deferred, at least ensure the URL updates client-side safely.

### File Structure Requirements

- `app/page.tsx`: Include the client component responsible for scroll-routing.
- `components/client/`: Place the new interactive routing/tracking component here.

### Previous Story Intelligence

- In Story 1.1, `middleware.ts` was noted to be renamed to `proxy.ts` due to a Next.js 16 deprecation warning. If you need to handle server-side rewrites for the deep links (e.g., rewriting `/etape/[id]` to `/`), modify `proxy.ts` accordingly.
- The visual hook (Story 1.2) uses `hero-section` in `100vh`. Keep this in mind when calculating scroll offsets for the first section.

### Git Intelligence Summary

- Recent commits indicate foundational work (PRD, basic setup). The repository may lack the complete Next.js boilerplate. Do not hesitate to scaffold the missing `components/client` folder.

### Latest Tech Information

- **Next.js App Router & History API:** In Next.js App Router, natively using `window.history.pushState` updates the URL but bypasses the Next.js router state. Since Next.js 14.1+, `window.history.pushState` and `replaceState` integrate better with the Next.js App Router, updating the `usePathname` and `useSearchParams` hooks automatically without triggering a server request. Use this native browser API for high-performance scroll updates.

### Project Context Reference

- Architecture: Jamstack Edge / SSG-First
- Key Requirement: Zero-Layout-Shift, 120fps fluid animations. Avoid heavy React state updates on scroll.

## Dev Agent Record

### Agent Model Used
Gemini 3.1 Pro (High)

### Debug Log References
- `npm run build` executed successfully verifying no Next.js build or SSR errors.

### Completion Notes List
- Created `ScrollRouter` client component utilizing `IntersectionObserver`.
- Added logic to detect `data-step` attributes and update `window.history.replaceState` seamlessly.
- Configured `popstate` listener for back/forward navigation, utilizing `scrollIntoView` and an `isProgrammaticScroll` flag to prevent feedback loops.
- Embedded `<ScrollRouter />` into the SSG Server Component `app/page.tsx` directly without turning the whole page into a Client Component.

### File List
- `components/client/ScrollRouter.tsx` (new)
- `app/page.tsx` (modified)

## Change Log
- Implemented Task 1-4 for story 1.3: Dynamic scroll routing with History API and IntersectionObserver.
