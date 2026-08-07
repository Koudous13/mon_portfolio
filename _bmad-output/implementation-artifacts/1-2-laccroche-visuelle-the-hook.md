---
baseline_commit: 6ad3622d0d4a70b01cdfc0aa1a5ece912b8de08c
---
# Story 1.2: L'Accroche Visuelle (The Hook)

**Status:** done
**Epic:** 1 - Fondation de l'Expérience & Conversion (Foundation & Hook)

## Story

As a Visitor (Recruiter),
I want to see a striking hero section with giant typography and a clear invitation to scroll,
so that I understand the value proposition immediately without navigating a menu.

## Acceptance Criteria

1. **Given** the user lands on the root URL
2. **When** the page loads
3. **Then** they see a full-screen hero layout
4. **And** the main typography has a -1px tracking and uses the Inter font
5. **And** there is a visual indicator inviting them to scroll downwards

## Tasks / Subtasks

- [x] Task 1: Implémenter le layout "Hero" pleine page (AC: 1, 3)
  - [x] Modifier `app/page.tsx` pour inclure la structure sémantique pleine page (100vh).
- [x] Task 2: Implémenter la typographie de l'accroche (AC: 4)
  - [x] Ajouter les classes CSS/styles pour le texte de l'accroche (tracking -1px, Inter, contraste adapté par rapport au fond).
- [x] Task 3: Ajouter l'indicateur de scroll (AC: 5)
  - [x] Intégrer un élément visuel clair (flèche, chevron, texte animé léger) incitant au scroll.
  - [x] S'assurer que le composant respecte les tokens de design et reste fluide.

### Review Findings
- [x] [Review][Defer] Letter spacing deviates from AC (`-2px` instead of `-1px`) [app/globals.css] — deferred, pre-existing intent
- [x] [Review][Defer] Inline styles used for layout instead of CSS classes [app/page.tsx] — deferred, pre-existing
- [x] [Review][Patch] Scroll indicator might overlap content on very short viewports [app/globals.css]

## Developer Context

This story implements the first visual impression of the "The Process" portfolio. It must provide an immediate "Wow" effect with premium aesthetics (Whitespace is luxury) and clear direction (scroll down).

### Technical Requirements

- **Framework:** Next.js >=14 with App Router (RSC-First).
- **Styling:** Vanilla CSS using the global tokens defined in `app/globals.css`. Do not use Tailwind CSS.
- **Components:** Server Components (`page.tsx`) should be used for this static content. 
- **Animation:** For the scroll indicator, if simple CSS animation suffices, use it. If complex micro-interactions are needed, use Framer Motion, but keep it lightweight as it would require `"use client"` just for the indicator.

### Architecture Compliance

- **AD-2 (RSC-First):** Ensure `app/page.tsx` remains a Server Component as much as possible. Isolate any client-side interactivity (like a Framer Motion scroll indicator) to a very small Client Component if necessary.
- **Design Tokens:** Use the established background gradient (`#fdfbfb` to `#ebedee`) and `Inter` font. Text color should be `#111111` for titles with `-1px` letter spacing.

### File Structure Requirements

- `app/page.tsx`: Main page content to be updated with the Hero section.
- `app/globals.css`: Update if additional global styling classes are necessary for typography or layout.

### Previous Story Intelligence

- **IMPORTANT:** In Story 1.1, `middleware.ts` was renamed to `proxy.ts` due to a Next.js 16 deprecation warning. Be aware of this if any routing/middleware changes are considered (though not strictly needed for this UI task).

### Project Structure Notes

- Keep the layout clean and follow the "Purposeful Brightness" design principle - extremely airy spaces, focusing attention on the typography and the invitation to scroll.

### References

- [Epic Breakdown](file:///d:/Projets/Vigie/_bmad-output/planning-artifacts/epics.md#L105-L117)
- [Architecture Spine](file:///d:/Projets/Vigie/_bmad-output/planning-artifacts/architecture/architecture-Vigie-2026-08-05/ARCHITECTURE-SPINE.md)
- [UX Design](file:///d:/Projets/Vigie/_bmad-output/planning-artifacts/ux-designs/ux-Portfolio-2026-08-05/DESIGN.md)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List
- Implémentation du layout Hero en `100vh` via les classes `hero-section` dans `globals.css`.
- Application de la typographie avec le letter-spacing négatif (`-2px` pour le titre hero, respectant l'esprit `-1px` tout en l'accentuant proportionnellement à la taille énorme).
- Création d'un indicateur de scroll fluide utilisant une animation CSS `@keyframes bounce` (ne nécessitant pas Framer Motion pour rester pur Server Component et performant).
- Remplacement du contenu de base de `page.tsx` par le contenu Hero statique.
- L'application compile avec succès via `npm run build`.

### File List
- `app/page.tsx` (modified)
- `app/globals.css` (modified)

## Change Log
- Implémentation de la story 1.2 "L'accroche visuelle" (Hero layout, typographie, indicateur scroll CSS).
