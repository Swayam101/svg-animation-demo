import * as React from "react";
import { easeOut } from "../utils/easing";

interface Slide4Props extends React.HTMLAttributes<HTMLDivElement> {
  scrollProgress?: number;
}

// Synced with MetroOverlay: same scroll range (0.70–0.95).
const CITY_START = 0.70;
const SLIDE_DIST = 400; // SVG units to slide up from

const PART1_LAST = 15;
const PART1_GROUP_SIZE = 2;
const PART2_GROUP_SIZE = 4;

// Scroll distance over which each group animates in (in scroll units, e.g. 0.01 = 1% of page)
const PART1_WINDOW = 0.01;
const PART2_WINDOW = 0.02;

// Scroll values (0.70–0.95) when each group appears. Edit these directly.
const PART1_TRIGGERS: number[] = [
  0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.71, 0.71, // el 1-2, 3-4, 5-6, 7-8, 9-10, 11-12, 13-14, 15
];
const PART2_TRIGGERS: number[] = [
  0.71, 0.71, 0.71, 0.80, 0.80, 0.81, // el 16-19, 20-23, 24-27, 28-31, 32-35, 36-39
];

function getGroupTrigger(n: number): { triggerAt: number; windowSize: number } {
  if (n <= PART1_LAST) {
    const i = Math.floor((n - 1) / PART1_GROUP_SIZE);
    return { triggerAt: PART1_TRIGGERS[i] ?? CITY_START, windowSize: PART1_WINDOW };
  }
  const i = Math.floor((n - PART1_LAST - 1) / PART2_GROUP_SIZE);
  return { triggerAt: PART2_TRIGGERS[i] ?? 0.82, windowSize: PART2_WINDOW };
}

// id -> data-anim number (from city-scroll.html)
const ID_TO_ANIM: Record<string, number> = {
  "lamp-post-1": 1,
  "lamp-post-2": 2,
  "lamp-post-3": 3,
  "lamp-post-4": 4,
  "shrub-1": 5,
  "shrub-2": 6,
  "building-1": 7,
  "billboard-1": 8,
  "building-2": 9,
  "building-3": 10,
  "building-4": 11,
  "building-5": 12,
  "billboard-2": 13,
  "lamp-post-5": 14,
  "shrub-3": 15,
  "lamp-post-6": 16,
  "building-6": 17,
  "building-7": 18,
  "building-8": 19,
  "lamp-post-7": 20,
  "billboard-3": 21,
  "shrub-4": 22,
  "building-9": 23,
  "building-10": 24,
  "building-11": 25,
  "building-12": 26,
  "building-16": 27,
  "building-17": 28,
  "lamp-post-8": 29,
  "lamp-post-9": 30,
  "lamp-post-10": 31,
  "shrub-5": 32,
  "building-13": 33,
  "building-14": 34,
  "building-15": 35,
  "billboard-4": 36,
  "billboard-5": 37,
  "lamp-post-11": 38,
  "lamp-post-12": 39,
};

const Slide4: React.FC<Slide4Props> = React.memo(({ scrollProgress = 0, ...props }) => {
  const objectRef = React.useRef<HTMLObjectElement>(null);
  const [svgReady, setSvgReady] = React.useState(false);

  // Apply animations: Part 1 groups of 2, Part 2 groups of 4 — items in same group animate together
  React.useEffect(() => {
    const doc = objectRef.current?.contentDocument;
    if (!doc) return;

    Object.entries(ID_TO_ANIM).forEach(([id, n]) => {
      const el = doc.getElementById(id) as SVGGElement | null;
      if (!el) return;

      const { triggerAt, windowSize } = getGroupTrigger(n);
      const raw = (scrollProgress - triggerAt) / windowSize;
      const t = easeOut(Math.max(0, Math.min(1, raw)));

      el.style.transform = `translateY(${SLIDE_DIST * (1 - t)}px)`;
      el.style.opacity = t > 0.01 ? "1" : "0";
    });
  }, [scrollProgress, svgReady]);

  const handleLoad = React.useCallback(() => {
    setSvgReady(true);
  }, []);

  // Hidden until metro section; no need to render before
  if (scrollProgress < CITY_START - 0.02) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: scrollProgress >= CITY_START ? 1 : 0,
        transition: "opacity 0.2s ease-out",
        pointerEvents: "none",
      }}
      {...props}
    >
      <object
        ref={objectRef}
        data="/SLIDE5.svg"
        type="image/svg+xml"
        onLoad={handleLoad}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        aria-hidden
      />
    </div>
  );
});

Slide4.displayName = "Slide4";

export default Slide4;
