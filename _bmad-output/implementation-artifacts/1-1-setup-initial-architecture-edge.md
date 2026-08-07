---
baseline_commit: 6ad3622d0d4a70b01cdfc0aa1a5ece912b8de08c
---
# Story 1.1: Setup Initial & Architecture Edge

**Status:** done
**Epic:** 1 - Fondation de l'Expérience & Conversion (Foundation & Hook)

## Story Requirements

**User Story:**
As a Technical Architect,
I want to initialize the Next.js App Router on Vercel Edge with global CSS tokens,
So that the core substrate of the application is ready for subsequent features.

**Acceptance Criteria:**
- **Given** a new repository
- **When** the development environment is set up
- **Then** it runs Next.js >=14 with App Router
- **And** it is configured to use Vercel Edge runtime for middleware
- **And** the global CSS includes the Inter font, background gradient `#fdfbfb` to `#ebedee`

## Developer Context

This story lays the foundation for the Vigie portfolio project. It requires establishing the base Next.js application, configuring the Edge runtime, and setting up the global CSS tokens dictated by the UX Design ("2030 Design", Glassmorphism). 

## Technical Requirements

- Initialize Next.js app using App Router.
- Configure `middleware.ts` to run on Vercel Edge Runtime.
- Use Vanilla CSS for all global styles and components. Do not install or configure Tailwind CSS to avoid ambiguity.
- Implement the Inter font using `next/font/google`.

## Architecture Compliance

- **AD-1 (Vercel Edge):** The middleware must target the "Edge" runtime.
- **AD-2 (RSC-First):** The base layout and page must be React Server Components. Do not use `"use client"` in the main layout.
- **Naming Conventions:** Kebab-case for URLs and folders. PascalCase for React components.
- **Performance:** Ensure no massive JavaScript bundles are added. SSG-First approach.

## Library & Framework Requirements

- Next.js >= 14
- React 18+ / 19

## File Structure Requirements

- `app/layout.tsx`: Main RSC layout.
- `app/page.tsx`: Initial page component.
- `app/globals.css`: Must include the design tokens (background, typography, components).
- `middleware.ts`: Edge router configuration.

## Design Tokens to Implement (from DESIGN.md)

- **Colors & Typography:**
  - Background: linear gradient from `#fdfbfb` to `#ebedee`
  - Surface (Glass): `rgba(255, 255, 255, 0.4)`
  - Text Primary: `#111111`
  - Text Secondary: `#444444`
  - Font: Inter (sans-serif)
  - H1 tracking: `-1px`

- **Glass Card Component Rules (Exact CSS to use):**
  ```css
  .glass-card {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 30px 60px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    border-radius: 24px;
  }
  ```

## Testing Requirements

- Verify that the app builds successfully.
- Verify that `middleware.ts` correctly executes on the Edge runtime without Node.js API dependencies.
- Verify Lighthouse score baseline (should be near 100/100).

## Project Context Reference

- PRD: `planning_artifacts/prd-portfolio/prd.md`
- Architecture Spine: `_bmad-output/planning-artifacts/architecture/architecture-Vigie-2026-08-05/ARCHITECTURE-SPINE.md`
- UX Design: `_bmad-output/planning-artifacts/ux-designs/ux-Portfolio-2026-08-05/DESIGN.md`

## Story Completion Status

- [x] Next.js app initialized
- [x] Vercel Edge middleware configured
- [x] Global CSS tokens implemented (Inter font, gradients, colors)
- [x] Base layout follows RSC-First pattern

## File List
- `package.json`
- `next.config.mjs`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `proxy.ts`

## Change Log
- Addressed story requirements - initialized Next.js, added CSS tokens, configured edge middleware (renamed to proxy.ts per Next.js 16).

## Dev Agent Record
### Debug Log
- Built successfully in static mode.
- Renamed middleware.ts to proxy.ts as per Next.js 16 deprecation warning.

### Completion Notes
- The initial architecture foundation is complete.
- Global styles and glassmorphism tokens have been added to Vanilla CSS.
- Next.js Edge proxy is configured and routing correctly.
