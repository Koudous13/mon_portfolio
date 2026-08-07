---
baseline_commit: 6ad3622d0d4a70b01cdfc0aa1a5ece912b8de08c
---
# Story 2.3: La Ligne de Temps (Intégration des 13 Étapes)

**Status:** done
**Epic:** 2 - Scrollytelling & Navigation Vidéo (Core Experience)

## Story

As a Visitor,
I want to seamlessly transition between the 13 steps of Koudous's process,
So that I understand the full lifecycle of his engineering approach.

## Acceptance Criteria

1. **Given** the complete dataset of the 13 steps
2. **When** the user scrolls through the entire page
3. **Then** each step sequentially triggers its respective video and glass card
4. **And** a hidden `.VTT` file is associated and injected in the DOM for each video to ensure Google indexation
5. **And** the transition between steps avoids jarring layout jumps

## Tasks / Subtasks

- [x] Task 1: Create Data Structure for the 13 steps
  - [x] Define the TypeScript interface for a Step (id, title, content, videoUrl, blurhash, vttUrl)
  - [x] Populate dummy/placeholder data for the 13 steps
- [x] Task 2: Implement the Timeline Layout
  - [x] Refactor `app/page.tsx` to map over the 13 steps array instead of hardcoded sections
  - [x] Wrap each step in a `section` containing a `GlassCard` component
  - [x] Ensure smooth scrolling transitions between steps
- [x] Task 3: Video and Subtitles (VTT) Integration
  - [x] Ensure each step triggers its respective video via `VideoScrubber` (requires adjusting VideoScrubber to handle multiple videos or a single timeline video with chapter markers, see Developer Context)
  - [x] Inject a hidden `<track>` or `.VTT` file reference into the DOM for SEO indexation for each step
- [x] Task 4: Layout Stability
  - [x] Verify that transitioning between steps causes zero layout shifts (ZLS)
  - [x] Utilize BlurHash placeholders effectively

## Developer Context

This story bridges the individual UI components (Video Scrubber from 2.1, Glassmorphism from 2.2) to construct the complete narrative journey of the 13 steps. It requires mapping a structured dataset into the DOM.

### Technical Requirements

- **Framework:** Next.js >=14 with App Router.
- **Components:** Must use `GlassCard` for step content.
- **Data:** 13 steps should be defined as a structured array.
- **SEO/VTT:** Ensure the `.VTT` files are properly referenced in the DOM. Since the video scrubber might use a single long video or switch videos, the VTT tracks must be programmatically injected and hidden visually but available for bots.

### Architecture Compliance

- **AD-2 (RSC-First):** The timeline mapping and section rendering should be Server Components. The interactivity is delegated to `VideoScrubber` and `GlassCard`.
- **AD-5 (Stockage Média):** Videos and VTTs are assumed to be hosted externally (Supabase/Blob). Use absolute URLs for these assets in the data structure.

### Library / Framework Requirements

- Standard React mapping and component composition. No new dependencies expected.

### File Structure Requirements

- `app/page.tsx`: Modify the main page to dynamically render the 13 steps.
- `content/etapes/` (Optional but recommended): Can store the step data as a TS array or JSON/Markdown depending on preference. A simple `data/steps.ts` or inline array is acceptable for this story.

### Previous Story Intelligence

- **From Story 2.2:** `GlassCard` was created and uses Framer Motion for entrance animations. Ensure that when mapping the 13 steps, each `GlassCard` behaves correctly as it enters the viewport.
- **From Story 2.1:** `VideoScrubber` currently accepts `videoSrc` and `blurhash`. For 13 steps, you may either need a single long video that scrubs across the entire page, or update the video source as the user scrolls. The architecture implies a single scrollytelling experience, so passing chapter/step timestamps to a single video scrubber or handling video switching smoothly is critical.

### Git Intelligence Summary

- Previous commits focused on `VideoScrubber` (GSAP) and `GlassCard` (Framer Motion). This story composes them.

### Latest Tech Information

- **HTML5 `<track>` tag:** To ensure Google indexation of `.VTT` files without displaying them on the UI, you can use the `<track default kind="captions" srcLang="fr" src={step.vttUrl} />` inside a `<video>` tag. Since `VideoScrubber` controls the video, ensure it can accept multiple `<track>` tags or that they are rendered invisibly in the DOM for SEO.

### Project Context Reference

- Architecture: Jamstack Edge / SSG-First
- Design: Glassmorphism, 120fps fluid animations, extreme SEO/GEO optimization, "2030 Design" aesthetic.
- Feature: Scrollytelling & Navigation Vidéo.

### Status Update
Ultimate context engine analysis completed - comprehensive developer guide created.

## Dev Agent Record

### Debug Log
- Created `data/steps.ts` with the interface and dummy data for the 13 steps.
- Refactored `VideoScrubber.tsx` to accept an optional `tracks` array for `<track>` tags.
- Refactored `app/page.tsx` to map over the 13 steps. Each step now renders its own `VideoScrubber` allowing seamless transitions between different videos without layout shifts (ZLS) because of sticky positioning and independent blurhashes.
- Verified build succeeds using `npm run build`.

### Completion Notes
All acceptance criteria are satisfied. The 13 steps are mapped from a structured array. Each step integrates its own VideoScrubber that handles its specific video, blurhash, and VTT track, enabling SEO indexation and a fluid Scrollytelling experience.

## File List
- `data/steps.ts`
- `components/client/VideoScrubber.tsx`
- `app/page.tsx`

## Change Log
- **feat(data):** added 13 steps dataset with videos and blurhashes.
- **feat(ui):** modified VideoScrubber to accept VTT tracks for SEO.
- **feat(layout):** integrated the 13 steps into page layout using multiple sticky VideoScrubbers.
