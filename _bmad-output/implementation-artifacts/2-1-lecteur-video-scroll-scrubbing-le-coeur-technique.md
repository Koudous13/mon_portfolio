---
baseline_commit: 6ad3622d0d4a70b01cdfc0aa1a5ece912b8de08c
---
# Story 2.1: Lecteur Vidéo "Scroll-Scrubbing" (Le Cœur Technique)

**Status:** done
**Epic:** 2 - Scrollytelling & Navigation Vidéo (Core Experience)

## Story

As a Visitor,
I want the background video to advance or reverse precisely as I scroll,
So that I feel in complete control of the narrative pacing without clicking play.

## Acceptance Criteria

1. **Given** the user is on the scrollytelling timeline
2. **When** the user scrolls down
3. **Then** the video playback advances synchronously via GSAP ScrollTrigger
4. **And** scrolling up reverses the video playback smoothly
5. **And** the video displays a lightweight `BlurHash` placeholder until the first frame is fully loaded to prevent Zero-Layout-Shift

## Tasks / Subtasks

- [x] Task 1: Create the Video Player Client Component
  - [x] Implement `VideoScrubber` client component using GSAP ScrollTrigger.
  - [x] Ensure video is `muted`, `playsInline`, and properly synced with scroll position.
- [x] Task 2: Implement BlurHash pre-loading
  - [x] Add BlurHash placeholder rendering logic to show before video frame is ready.
  - [x] Ensure Zero-Layout-Shift (ZLS) on video load.
- [x] Task 3: Integrate with Timeline Layout
  - [x] Update timeline/page structure to stick the video in the background while content scrolls over it.

## Developer Context

This story implements the core technical feature of the portfolio: the Scroll-Scrubbing video player. This requires GSAP and ScrollTrigger to link the scroll position of the page to the video's current time.

### Technical Requirements

- **Framework:** Next.js >=14 with App Router (RSC-First).
- **Client Components:** This component MUST use `"use client"` as it handles DOM events, GSAP animations, and `HTMLVideoElement` interactions.
- **Animation Engine:** GSAP `^3.12` and `ScrollTrigger` plugin.
- **Performance:** 120fps fluid rendering requirement. No jank on scroll.

### Architecture Compliance

- **AD-2 (RSC-First):** Only the video player component itself should be a Client Component. The rest of the page should remain server components as much as possible.
- **AD-3 (Moteur d'Animation Dual):** Use GSAP exclusivement pour la synchronisation du défilement vidéo. Ne pas utiliser Framer Motion pour cela.
- **AD-5 (Stockage Média):** Video sources will come from an external CDN. Prepare the component to accept external video URLs. Use BlurHash for placeholders (Zero-Layout-Shift).

### Library / Framework Requirements

- `gsap` and `@gsap/react` for scroll synchronization.
- `blurhash` and `react-blurhash` (or a vanilla implementation) for the placeholder.

### File Structure Requirements

- `components/client/VideoScrubber.tsx` (or similar naming): The isolated client component for the video player.
- `app/page.tsx`: Integrate the `VideoScrubber` in the background layout.

### Previous Story Intelligence

- **From Story 1.3:** `ScrollRouter` client component is already managing URL hydration on scroll. Ensure GSAP ScrollTrigger does not conflict with the intersection observers or scroll logic from 1.3.

### Git Intelligence Summary

- Previous commits completed Epic 1 (Routage dynamique, Accroche visuelle, Middleware Edge pour GEO-Smart). The foundation is stable and SSG-friendly.

### Latest Tech Information

- **GSAP ScrollTrigger with React:** Use `@gsap/react` `useGSAP()` hook for proper cleanup of GSAP animations inside React components to avoid memory leaks.
- **HTML5 Video Scrubbing:** Video encoding (keyframes/I-frames) heavily impacts scrubbing performance. Ensure the code handles video `readyState` before attempting to set `currentTime`. A common pattern is:
  ```javascript
  ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      if (video.readyState >= 2) {
        video.currentTime = video.duration * self.progress;
      }
    }
  });
  ```

### Project Context Reference

- Architecture: Jamstack Edge / SSG-First
- Design: Glassmorphism, 120fps fluid animations, extreme SEO/GEO optimization.

### Status Update
Ultimate context engine analysis completed - comprehensive developer guide created.

## Dev Agent Record

### Debug Log
- Implemented `VideoScrubber` component with `@gsap/react` `useGSAP` hook for proper animation cleanup.
- Configured GSAP `ScrollTrigger` with `scrub: 0.1` for smooth video scrubbing linked to page scroll.
- Integrated `react-blurhash` to display the blurred placeholder until `video.readyState >= 2` (loaded data).
- Modified `app/page.tsx` to wrap the timeline and CTA sections within the `VideoScrubber`. Used a sticky wrapper combined with a negative margin (`-100vh`) for the children to correctly overlap the sticky background video, providing a true scrollytelling experience.
- Verified build via `npm run build` which compiled successfully with static prerendering intact.

### Completion Notes
The video scrubber is fully implemented. It stays fixed in the background using `position: sticky` and scrubs precisely as the user scrolls down the timeline sections. The BlurHash placeholder correctly handles Zero-Layout-Shift before the video loads.

## File List
- `components/client/VideoScrubber.tsx`
- `app/page.tsx`
- `package.json`
- `package-lock.json`

## Change Log
- **feat(ui):** implemented GSAP ScrollTrigger `VideoScrubber` for scroll-linked video playback.
- **feat(ui):** added BlurHash pre-loading placeholder for zero-layout-shift on the video player.
- **feat(layout):** integrated `VideoScrubber` into `app/page.tsx` wrapping the scrollytelling timeline.
- **chore(deps):** installed `gsap`, `@gsap/react`, `blurhash`, and `react-blurhash`.
