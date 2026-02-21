import * as React from "react";
import type { BlurZIndexRange } from "../constants/ui";
import {
  getBlurZIndexForScroll,
  BLUR_ZINDEX_RANGES,
} from "../constants/ui";

export interface BlurOverlayProps {
  /** Blur amount in pixels. Default: 6 */
  blurPx?: number;
  /** Scroll progress 0–1 — drives z-index from zIndexRanges */
  scrollProgress: number;
  /** Scroll ranges with z-index. When scrollProgress is in [start, end], uses that zIndex. */
  zIndexRanges?: BlurZIndexRange[];
  /** Optional: scroll progress to drive blur intensity (separate from z-index) */
  blurScrollProgress?: number;
  /** Optional: tint overlay (rgba) for subtle darkening. Default: transparent */
  tint?: string;
  /** Optional: min blur when using blurScrollProgress. Default: 0 */
  minBlur?: number;
  /** Optional: max blur when using blurScrollProgress. Default: blurPx */
  maxBlur?: number;
  style?: React.CSSProperties;
}

/**
 * Overlay that blurs the background via backdrop-filter.
 * Z-index is driven by scroll ranges (zIndexRanges). ContentLayer is z-index 100.
 */
const BlurOverlay: React.FC<BlurOverlayProps> = React.memo(
  ({
    blurPx = 6,
    scrollProgress,
    zIndexRanges = BLUR_ZINDEX_RANGES,
    blurScrollProgress,
    tint = "transparent",
    minBlur = 0,
    maxBlur,
    style,
  }) => {
    const zIndex = getBlurZIndexForScroll(zIndexRanges, scrollProgress);

    const effectiveMax = maxBlur ?? blurPx;
    const blur =
      blurScrollProgress !== undefined
        ? minBlur + (effectiveMax - minBlur) * blurScrollProgress
        : blurPx;

    return (
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex,
          pointerEvents: "none",
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          backgroundColor: tint,
          ...style,
        }}
      />
    );
  }
);

BlurOverlay.displayName = "BlurOverlay";

export default BlurOverlay;
