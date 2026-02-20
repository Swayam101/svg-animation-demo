/**
 * Easing functions for scroll-driven animations.
 *
 * When to use:
 * - easeOut: Default for most animations (curtains, fades, slides, metro, shooting stars).
 *   Fast start, slow end — feels natural for entrances and motion.
 * - bounceOut: Reserved for playful/emphatic moments only (e.g. MountainCoverUp curtain).
 *   Slight overshoot at the end — use sparingly.
 */

/** Cubic ease-out: fast start, slow end. Use for most scroll-driven animations. */
export function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/** Bouncy easing: overshoots slightly at the end. Use only for MountainCoverUp and similar emphatic moments. */
export function bounceOut(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  if (t < 0.7) return t / 0.7;
  const x = (t - 0.7) / 0.3;
  return 1 + Math.sin(x * Math.PI) * 0.06;
}
