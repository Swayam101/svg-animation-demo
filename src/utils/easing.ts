/** Cubic ease-out: fast start, slow end. Use for most scroll-driven animations. */
export function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
