/**
 * Master animation timeline — single source of truth for scroll-driven animations.
 * Scroll progress: 0 = top of page, 1 = bottom.
 *
 * Key flow:
 * - Phase 1 curtain: 0.05–0.15 (rise, hold, fall). While curtain is up: Slide1 exit + Slide2 entry.
 * - Phase 2 curtain: 0.38–0.40 rise, 0.40–0.55 hold, 0.55–0.57 fall. Slide2 exit 0.40–0.44 (after curtain up). Slide3 entry 0.40–0.50 (fast).
 * - Mountain: 0.55–0.58 entrance. Slide3 exit 0.58–0.64 (only after mountain fully down). Mountain exit 0.62–0.98.
 * - Metro + city: 0.65–0.98.
 */

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION BOUNDARIES
// ═══════════════════════════════════════════════════════════════════════════════
export const SECTIONS = {
  /** 0.00–0.05: Desert scene (Slide1) */
  SLIDE1: { start: 0, end: 0.05 },
  /** 0.15–0.40: Construction site (Slide2) — transition 0.05–0.15 */
  SLIDE2: { start: 0.15, end: 0.40 },
  /** 0.40–0.65: City under construction (Slide3) */
  SLIDE3: { start: 0.40, end: 0.65 },
  /** 0.65–1.00: Metro + city (Slide4, MetroOverlay, MountainCoverUp exit) */
  SLIDE4: { start: 0.65, end: 1 },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// CHRONOLOGICAL TIMELINE (for overview)
// ═══════════════════════════════════════════════════════════════════════════════
export const TIMELINE_EVENTS = [
  { t: 0.02, label: "Shooting star 1 start" },
  { t: 0.05, label: "Curtain phase 1 rise — Slide1 exit + Slide2 entry start" },
  { t: 0.07, label: "Curtain up (hold)" },
  { t: 0.15, label: "Curtain phase 1 fall — Slide2 fully visible" },
  { t: 0.18, label: "Shooting star 2 start" },
  { t: 0.20, label: "Moon shrink start" },
  { t: 0.38, label: "Curtain phase 2 rise" },
  { t: 0.40, label: "Curtain up — Slide2 exit + Slide3 entry start (fast)" },
  { t: 0.45, label: "Shooting star 3 start" },
  { t: 0.50, label: "Slide3 entry complete" },
  { t: 0.55, label: "Curtain phase 2 fall (fast)" },
  { t: 0.55, label: "Mountain curtain entrance (before Slide3 exit)" },
  { t: 0.62, label: "Shooting star 3 end" },
  { t: 0.65, label: "Section 4: Metro + city start" },
  { t: 0.85, label: "Plane overlay start" },
  { t: 0.98, label: "Metro travel end, city build complete" },
  { t: 1.0, label: "Plane overlay end" },
] as const;

// ═══════════════════════════════════════════════════════════════════════════════
// COVERUP (curtain between sections)
// Phase 1: 0.05–0.15 — while curtain up: Slide1 exit, Slide2 entry
// Phase 2: 0.48–0.72 — while curtain up: Slide2 exit, Slide3 entry (hold until entry complete)
// ═══════════════════════════════════════════════════════════════════════════════
export const COVERUP = {
  PHASE1_RISE_START: 0.05,
  PHASE1_RISE_END: 0.07,
  PHASE1_HOLD_END: 0.15,
  PHASE1_FALL_END: 0.20,
  PHASE2_RISE_START: 0.38,
  PHASE2_RISE_END: 0.40,
  PHASE2_HOLD_END: 0.55,
  PHASE2_FALL_END: 0.57,
  REST_Y: 30,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE1 (desert) — visible 0–0.05, exit during 0.05–0.15
// ═══════════════════════════════════════════════════════════════════════════════
export const SLIDE1 = {
  CURTAIN_COVERS: 0.05,
  MOON_RISE_START: 0.00,
  MOON_RISE_END: 0.20,
  MOON_SHRINK_START: 0.20,
  MOON_SHRINK_END: 0.40,
  /** Ground animations after Slide3 entry. Exit: middle→upper→front. Entry: front→upper→middle (reverse). */
  GROUND_MIDDLE_EXIT_START: 0.52,
  GROUND_MIDDLE_EXIT_END: 0.57,
  GROUND_MIDDLE_ENTRY_START: 0.60,
  GROUND_MIDDLE_ENTRY_END: 0.65,
  GROUND_UPPER_EXIT_START: 0.53,
  GROUND_UPPER_EXIT_END: 0.58,
  GROUND_UPPER_ENTRY_START: 0.59,
  GROUND_UPPER_ENTRY_END: 0.64,
  GROUND_FRONT_EXIT_START: 0.54,
  GROUND_FRONT_EXIT_END: 0.59,
  GROUND_FRONT_ENTRY_START: 0.58,
  GROUND_FRONT_ENTRY_END: 0.63,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE2 (construction) — entry during 0.05–0.15 (curtain hold), exit at 0.50
// ═══════════════════════════════════════════════════════════════════════════════
export const SLIDE2 = {
  /** Exit only after Phase 2 curtain is fully up (0.40) */
  EXIT_START: 0.40,
  EXIT_END: 0.44,
  EXIT: 0.44,
  CURTAIN_COVERS: 0.40,
  FADE_ENTRY_START: 0.05,
  FADE_ENTRY_END: 0.15,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE3 (city under construction)
// ═══════════════════════════════════════════════════════════════════════════════
export const SLIDE3 = {
  MOUNT_AT: 0.40,
  /** Fast entrance right after curtain is up */
  ENTRY_START: 0.40,
  ENTRY_END: 0.50,
  /** Exit only after mountain coverup is fully down (0.58) */
  EXIT_START: 0.58,
  EXIT_END: 0.64,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// MOUNTAIN COVERUP (mountains curtain, then exit)
// ═══════════════════════════════════════════════════════════════════════════════
export const MOUNTAIN = {
  CURTAIN_ENTRANCE_START: 0.55,
  CURTAIN_ENTRANCE_END: 0.58,
  EXIT_START: 0.62,
  EXIT_END: 0.98,
  REST_Y: 100,
  M2_ENTRANCE_START: 0.56,
  M2_ENTRANCE_END: 0.58,
  M3_ENTRANCE_START: 0.57,
  M3_ENTRANCE_END: 0.58,
  CONTAINER_VISIBLE_AT: 0.55,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// METRO OVERLAY
// ═══════════════════════════════════════════════════════════════════════════════
export const METRO = {
  SHOW_AT: 0.65,
  TRAVEL_START: 0.65,
  TRAVEL_END: 0.98,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE4 (city behind metro)
// ═══════════════════════════════════════════════════════════════════════════════
export const SLIDE4 = {
  CITY_START: 0.65,
  CITY_END: 0.76,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// PLANE OVERLAY (flies up in slanting path after metro animation ends)
// ═══════════════════════════════════════════════════════════════════════════════
export const PLANE = {
  START: 0.85,
  END: 1.0,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SHOOTING STARS (3 scenes across scroll)
// ═══════════════════════════════════════════════════════════════════════════════
export const SHOOTING_STARS = {
  SCENE1_START: 0.01,
  SCENE1_END: 0.05,
  SCENE2_START: 0.18,
  SCENE2_END: 0.38,
  SCENE3_START: 0.45,
  SCENE3_END: 0.62,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

/** Normalize scroll progress p to 0–1 within [start, end]. Returns 0 before start, 1 after end. */
export function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

/** True if scroll progress p is within [start, end] (inclusive). */
export function isInRange(p: number, start: number, end: number): boolean {
  return p >= start && p <= end;
}

/** Create a range config for use with progressInRange. */
export function range(start: number, end: number) {
  return { start, end } as const;
}
