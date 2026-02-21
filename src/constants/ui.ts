/**
 * UI constants for background blur and content layer.
 * Adjust these to control the blur intensity.
 */

/** Blur amount in pixels. Increase for stronger blur, decrease for subtler. */
export const BACKGROUND_BLUR_PX = 1.5;

/** Optional: subtle dark tint over the blurred background (rgba). Set to "transparent" to disable. */
export const BACKGROUND_BLUR_TINT = "transparent";

/** Scroll range with z-index. When scrollProgress is in [start, end], blur overlay uses this zIndex. */
export interface BlurZIndexRange {
  start: number;
  end: number;
  zIndex: number;
}

/**
 * Blur overlay z-index by scroll range.
 * ContentLayer is z-index 100. Use zIndex < 100 to put blur behind content, > 100 to put blur above.
 */
export const BLUR_ZINDEX_RANGES: BlurZIndexRange[] = [
  { start: 0, end: 0.55, zIndex:2  },
  { start: 0.55, end: 0.66, zIndex: 7 },
  {start: 0.66, end: 1, zIndex: 6},
//   { start: 0.40, end: 0.65, zIndex: 150 },
//   { start: 0.65, end: 1, zIndex: 50 },
];

/** Default z-index when scrollProgress falls outside all ranges. */
export const BLUR_ZINDEX_DEFAULT = 50;

/** Resolve z-index for scroll progress from ranges. Uses first matching range (start <= p <= end). */
export function getBlurZIndexForScroll(
  ranges: BlurZIndexRange[],
  scrollProgress: number
): number {
  const match = ranges.find(
    (r) => scrollProgress >= r.start && scrollProgress <= r.end
  );
  return match?.zIndex ?? BLUR_ZINDEX_DEFAULT;
}
