---
baseline_commit: HEAD
---
# Story 2.2: Composant UI "Glassmorphism" (La Couche Visuelle)

**Status:** review
**Epic:** 2 - Scrollytelling & Navigation Vidéo (Core Experience)

## Story

As a Technical Recruiter,
I want to read content on highly legible, elegantly frosted cards,
So that I experience a premium, distraction-free reading environment over dynamic videos.

## Acceptance Criteria

1. **Given** a content section on the timeline
2. **When** the section comes into view
3. **Then** a card appears using Framer Motion spring physics
4. **And** the card has a `backdrop-filter: blur(24px)`, a subtle internal border, and a soft shadow
5. **And** the text contrast ratio remains accessible against the frosted background

## Tasks / Subtasks

- [x] Task 1: Create the Glassmorphism Card Component
  - [x] Implement `GlassCard` React component
  - [x] Apply CSS styles: `backdrop-filter: blur(24px)`, `box-shadow: 0 30px 60px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.2)`
  - [x] Ensure background color is `rgba(255, 255, 255, 0.4)`
  - [x] Use `border-radius: 24px`
- [x] Task 2: Implement Framer Motion Animations
  - [x] Integrate Framer Motion for the appearance of the card
  - [x] Use Spring physics for entry animations (bouncy, natural feel like iOS)
- [x] Task 3: Typography and Spacing Integration
  - [x] Ensure text uses `Inter` font, colors `#111111` for titles, `#444444` for body for accessibility and contrast
  - [x] Apply generous padding (`2.5rem`) as specified in the design tokens

## Developer Context

This story focuses on the visual presentation layer of the portfolio, specifically the "Glassmorphism" effect that sits over the video scrubber implemented in the previous story. This requires precise CSS and Framer Motion integration.

### Technical Requirements

- **Framework:** Next.js >=14 with App Router (RSC-First).
- **Client Components:** The `GlassCard` might need to be a Client Component (`"use client"`) if it handles its own intersection observer via Framer Motion's `whileInView`.
- **Animation Engine:** `framer-motion` ^11.
- **Styling:** Vanilla CSS or Tailwind (based on existing setup). Ensure the exact RGBA and blur values from the design spec are respected.

### Architecture Compliance

- **AD-3 (Moteur d'Animation Dual):** Use Framer Motion for these UI micro-interactions and appearances, leaving GSAP strictly for the video scroll-scrubbing.

### Library / Framework Requirements

- `framer-motion` for spring-based entrance animations.

### File Structure Requirements

- `components/ui/GlassCard.tsx` (or similar naming): The reusable card component.
- Updates to timeline components in `app/page.tsx` or related step components to wrap content in `GlassCard`.

### Previous Story Intelligence

- **From Story 2.1:** The `VideoScrubber` was implemented and placed in the background using `position: sticky`. The timeline content scrolls *over* it. These glass cards will be the containers for that scrolling content, ensuring the video remains visible but blurred behind the text.

### Git Intelligence Summary

- Story 2.1 implemented the sticky video scrubber. This story will style the content blocks that scroll over that video.

### Latest Tech Information

- **Framer Motion `whileInView`:** Use `viewport={{ once: true, margin: "-100px" }}` to trigger the animation slightly before the card fully enters the viewport for a smoother experience.

### Project Context Reference

- Architecture: Jamstack Edge / SSG-First
- Design: Glassmorphism, 120fps fluid animations, extreme SEO/GEO optimization, "2030 Design" aesthetic.

### Status Update
Ultimate context engine analysis completed - comprehensive developer guide created.

## Dev Agent Record

### Debug Log
- Installed `framer-motion` package for spring entry animations.
- Created `GlassCard` React Client Component in `components/ui/GlassCard.tsx` using `<motion.div>`.
- Configured Framer Motion `initial`, `whileInView`, and `transition` with spring physics (stiffness: 100, damping: 20) and `viewport={{ once: true, margin: "-100px" }}`.
- Replaced manual `<div className="glass-card">` instances in `app/page.tsx` with `<GlassCard>` component to ensure unified animation behaviour across the timeline, hero section, and CTA.
- Verified build and static HTML generation successfully with `npm run build`.

### Completion Notes
The Glassmorphism component has been successfully implemented and integrated. It leverages Framer Motion to provide a smooth, spring-based entrance animation as elements scroll into view. The component reuses the existing `.glass-card` CSS class to perfectly match the design specifications without cluttering the component code.

## File List
- `package.json`
- `package-lock.json`
- `components/ui/GlassCard.tsx`
- `app/page.tsx`

## Change Log
- **feat(ui):** added `GlassCard` component with Framer Motion spring animations for entrance.
- **feat(layout):** integrated `GlassCard` into `app/page.tsx` replacing standard static divs.
- **chore(deps):** installed `framer-motion` package.
