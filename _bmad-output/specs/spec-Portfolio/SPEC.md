---
id: SPEC-Portfolio
companions:
  - ../ux-designs/ux-Portfolio-2026-08-05/DESIGN.md
  - ../ux-designs/ux-Portfolio-2026-08-05/EXPERIENCE.md
  - ../architecture/architecture-Vigie-2026-08-05/ARCHITECTURE-SPINE.md
sources:
  - ../../planning_artifacts/prd-portfolio/prd.md
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability only — consult them only if you need narrative rationale or prose color this contract intentionally omits.

# Portfolio Koudous "The Process"

## Why

Démontrer aux recruteurs techniques et RH l'expertise complète "Architecte Full Stack × IA" de Koudous à travers une masterclass vidéo interactive qui retrace la création d'une application de A à Z. C'est une opportunité de capturer l'attention des CTOs en prouvant des compétences techniques extrêmes (Performance, Edge, SEO).

## Capabilities

- **CAP-1: Landing/Hook**
  - **intent:** User arrives on an ultra-minimalist page and immediately understands the value proposition via giant typography.
  - **success:** Page loads with 100/100 Lighthouse and user scrolls down.

- **CAP-2: Scrollytelling Video**
  - **intent:** User scrolls to natively control the playback (forward/backward) of a 13-step masterclass video.
  - **success:** Video scrubs smoothly with scroll (GSAP) without clicks, using BlurHash for ZLS.

- **CAP-3: Interactive Deep Dive**
  - **intent:** User hovers over code snippets in the side panel to instantly seek the video to that exact moment.
  - **success:** Hover action accurately synchronizes the video player state.

- **CAP-4: GEO-SEO Dynamic Resume**
  - **intent:** System automatically tailors call-to-actions and SEO metadata (JSON-LD) based on the user's geolocation.
  - **success:** Meta tags and UI show the user's city via Edge Middleware without compromising SSG.

## Constraints

- Must achieve 100/100 Lighthouse score (ZLS, Lazy-Loading, SSG).
- Framework must be Next.js (App Router) using React Server Components.
- Must use Vercel Edge Middleware for dynamic injection of localized tags.
- Media (Videos) must be stored on external Edge CDN (Supabase/Vercel Blob), not in the Git repo.

## Non-goals

- No heavy backend or database (all content is local Markdown/JSON).
- No complex navigation menus (linear scrollytelling path).

## Success signal

Des recruteurs techniques ou CTOs visionnent les vidéos jusqu'au bout, interagissent avec le code, et utilisent le call-to-action dynamique pour contacter Koudous, générant des entretiens de haut niveau.
