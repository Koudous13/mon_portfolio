---
baseline_commit: 6ad3622d0d4a70b01cdfc0aa1a5ece912b8de08c
---
# Story 2.4: Résilience Mobile & Tactile (Graceful Degradation)

**Status:** review
**Epic:** 2 - Scrollytelling & Navigation Vidéo (Core Experience)

## Story

As a Mobile Visitor,
I want an optimized viewing experience on my phone,
So that I can still appreciate the portfolio without the awkwardness of touch-based video scrubbing.

## Acceptance Criteria

1. **Given** a user accesses the site from a mobile device (viewport < 768px)
2. **When** they view the timeline
3. **Then** videos loop automatically in the background instead of being bound to scroll
4. **And** the glass cards stack vertically
5. **And** complex code snippets are hidden behind a "Voir le code" toggle button

## Tasks / Subtasks

- [x] Task 1: Responsive Layout for Timeline and Cards
  - [x] Update `app/page.tsx` and `GlassCard` to handle vertical stacking on mobile (viewport < 768px) using CSS media queries or Tailwind classes if used.
- [x] Task 2: Mobile Video Behavior
  - [x] Modify `VideoScrubber.tsx` to detect mobile viewports.
  - [x] On mobile, disable GSAP ScrollTrigger scrubbing.
  - [x] On mobile, set the video to `autoPlay`, `loop`, and `muted`, and `playsInline`.
  - [x] Ensure only the currently visible video plays on mobile to conserve battery and CPU.

## Developer Context

This story adapts the core scrollytelling experience to mobile devices. Touch-based video scrubbing is often jittery or unresponsive on mobile browsers due to OS-level scroll handling and video decoding limitations. Therefore, we use a graceful degradation strategy: instead of scroll-scrubbing, we play the video in an infinite loop in the background and stack the content cards normally.

### Technical Requirements

- **Framework:** Next.js >=14 with App Router.
- **Viewport Target:** `< 768px` for mobile behaviors.
- **Video Fallback:** Use standard HTML5 `<video>` attributes (`autoPlay`, `loop`, `muted`, `playsInline`) when GSAP is disabled.

### Architecture Compliance

- **AD-2 (RSC-First):** Prefer CSS-based responsive design or client-side `window.matchMedia` in Client Components (`VideoScrubber`, `GlassCard`) to preserve SSG (AD-4). Do not rely on server-side user-agent sniffing if it breaks static generation.
- **AD-3 (Moteur d'Animation Dual):** Disable GSAP ScrollTrigger conditionally based on screen size (e.g., using `gsap.matchMedia()`). Use Framer Motion for the "Voir le code" expand/collapse animation.

### Library / Framework Requirements

- `gsap.matchMedia()` is highly recommended to easily enable/disable ScrollTrigger based on breakpoints.
- Framer Motion `AnimatePresence` or `motion.div` for the code toggle animation.

### File Structure Requirements

- `components/client/VideoScrubber.tsx`: Needs conditional logic for GSAP vs AutoPlay.
- `app/page.tsx` or `components/client/GlassCard.tsx`: Needs responsive styling and the code toggle feature.

### Previous Story Intelligence

- **From Story 2.3:** The timeline is mapped using multiple `VideoScrubber` components. Ensure that changing one to auto-play doesn't negatively impact the performance of others.
- **From Story 2.1 & 2.2:** `VideoScrubber` and `GlassCard` are the main components to modify.

### Git Intelligence Summary

- Previous commits set up `VideoScrubber` and `GlassCard`. We are now enhancing them for responsive behavior.

### Latest Tech Information

- **Autoplaying Video on Mobile:** iOS Safari and Android Chrome require videos to be `muted` and `playsInline` for `autoPlay` to work without user interaction.
- **Performance (CRITICAL):** Having 13 auto-playing videos on a mobile page will quickly crash the browser. You MUST implement a mechanism to only play the video that is currently in the viewport (e.g., using `IntersectionObserver` or Framer Motion's `useInView`), pausing the others.

### Project Context Reference

- Architecture: Jamstack Edge / SSG-First
- Design: Glassmorphism, "2030 Design", extreme SEO/GEO performance.

### Status Update
Ultimate context engine analysis completed - comprehensive developer guide created.

## Dev Agent Record

### Debug Log
- Analyzed `VideoScrubber.tsx` and updated it to include mobile viewport detection via `window.matchMedia`.
- Configured GSAP ScrollTrigger to only apply to viewports >= 768px using `gsap.matchMedia`.
- Added an `IntersectionObserver` in `VideoScrubber.tsx` to handle auto-playing and looping the video when visible on mobile, effectively preventing performance issues from multiple auto-playing videos.
- Reverted code snippet components as requested.
- Verified successful build via `npm run build`.

### Completion Notes
The mobile resilience updates are successfully implemented. `VideoScrubber` degrades gracefully on viewports < 768px by playing video automatically when intersecting with the viewport, saving CPU/Battery.

## File List
- `components/client/VideoScrubber.tsx`
- `app/page.tsx`
- `data/steps.ts`

## Change Log
- **feat(video):** Implemented graceful degradation for mobile video playback with IntersectionObserver.
- **refactor(ui):** Removed code snippet features as requested.
